#!/usr/bin/env node
/**
 * BrigaRx — finish setup.
 *
 * The project files are already in place. This handles the parts that need a
 * terminal on your machine: installing dependencies, installing shadcn/ui,
 * and wiring up git.
 *
 * Run once, from this folder:
 *     node finish-setup.mjs
 *
 * Safe to re-run — every step checks whether it is already done.
 * Delete this file once setup is finished.
 */

import { execSync } from 'node:child_process';
import { existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const REPO = 'https://github.com/araksmaestro/brigarx.git';
const BRANCH = 'feature/foundation';

const SHADCN_COMPONENTS = [
  'button', 'table', 'dialog', 'input', 'label',
  'select', 'skeleton', 'command', 'popover', 'badge',
];

const c = {
  dim: (s) => `\x1b[2m${s}\x1b[0m`,
  green: (s) => `\x1b[32m${s}\x1b[0m`,
  yellow: (s) => `\x1b[33m${s}\x1b[0m`,
  red: (s) => `\x1b[31m${s}\x1b[0m`,
  bold: (s) => `\x1b[1m${s}\x1b[0m`,
};

let n = 0;
const step = (m) => console.log(`\n${c.bold(`[${++n}]`)} ${c.bold(m)}`);
const ok = (m) => console.log(`    ${c.green('done')}    ${m}`);
const skip = (m) => console.log(`    ${c.dim('skip')}    ${c.dim(m)}`);
const warn = (m) => console.log(`    ${c.yellow('note')}    ${m}`);
const fail = (m) => console.log(`    ${c.red('fail')}    ${m}`);

const run = (cmd) => execSync(cmd, { cwd: ROOT, stdio: 'inherit' });
const quiet = (cmd) => {
  try {
    return execSync(cmd, { cwd: ROOT, stdio: 'pipe', encoding: 'utf8' }).trim();
  } catch {
    return null;
  }
};

console.log(c.bold('\nBrigaRx — finishing setup'));
console.log(c.dim(`folder: ${ROOT}`));

if (!existsSync(join(ROOT, 'package.json'))) {
  fail('no package.json here — are you in the right folder?');
  process.exit(1);
}

/* 1 — dependencies --------------------------------------------------- */
step('Installing dependencies');
if (existsSync(join(ROOT, 'node_modules'))) {
  skip('node_modules already present');
} else {
  warn('this takes a minute or two');
  run('npm install');
  ok('dependencies installed');
}

/* 2 — shadcn/ui ------------------------------------------------------- */
step('Installing shadcn/ui');
if (existsSync(join(ROOT, 'components.json'))) {
  skip('components.json exists — already initialised');
} else {
  try {
    // -b radix keeps you on the classic Radix-based components.
    // -p nova is the default preset (Lucide icons, Geist font).
    run('npx --yes shadcn@latest init -b radix -p nova --no-monorepo -y');
    run(`npx --yes shadcn@latest add ${SHADCN_COMPONENTS.join(' ')} -y`);
    ok(`installed: ${SHADCN_COMPONENTS.join(', ')}`);
  } catch {
    fail('shadcn failed — run these two by hand:');
    console.log('        npx shadcn@latest init -b radix -p nova --no-monorepo -y');
    console.log(`        npx shadcn@latest add ${SHADCN_COMPONENTS.join(' ')} -y`);
  }
}

/* 3 — git ------------------------------------------------------------- */
step('Git');
if (!existsSync(join(ROOT, '.git'))) {
  run('git init');
  ok('repository initialised');
} else {
  skip('.git already present');
}

const remote = quiet('git remote get-url origin');
if (!remote) {
  run(`git remote add origin ${REPO}`);
  ok(`origin set to ${REPO}`);
} else if (!remote.includes('araksmaestro/brigarx')) {
  warn(`origin points at ${remote} — expected araksmaestro/brigarx`);
} else {
  skip(`origin already ${remote}`);
}

const branch = quiet('git branch --show-current');
if (branch === BRANCH) {
  skip(`already on ${BRANCH}`);
} else {
  run(quiet(`git rev-parse --verify ${BRANCH}`) ? `git checkout ${BRANCH}` : `git checkout -b ${BRANCH}`);
  ok(`on ${BRANCH}`);
}

/* 4 — Claude Code Stop hook -------------------------------------------- */
step('Claude Code Stop hook');
{
  const rel = join('.claude', 'settings.local.json');
  const abs = join(ROOT, rel);
  if (existsSync(abs)) {
    skip(`${rel} already exists`);
  } else {
    const command =
      `cd "${ROOT.replace(/\\/g, '/')}" && git add . && ` +
      `git commit -m "auto: claude code changes" && git push origin ${BRANCH}`;
    const payload = { hooks: { Stop: [{ matcher: '', hooks: [{ type: 'command', command }] }] } };
    mkdirSync(join(ROOT, '.claude'), { recursive: true });
    writeFileSync(abs, JSON.stringify(payload, null, 2) + '\n', 'utf8');
    ok(`created ${rel}`);
  }
}

/* 5 — verify ---------------------------------------------------------- */
step('Verifying');
try {
  execSync('npx tsc --noEmit', { cwd: ROOT, stdio: 'pipe' });
  ok('typecheck passed');
} catch (e) {
  const out = String(e.stdout || e.message);
  if (/LayoutProps|PageProps|RouteContext/.test(out)) {
    warn('route types not generated yet — normal before the first build');
  } else {
    fail('typecheck errors:');
    console.log(out.split('\n').slice(0, 15).join('\n'));
  }
}

/* done ---------------------------------------------------------------- */
console.log(c.bold('\nNext\n'));
console.log('  npm run dev                    then open http://localhost:3000');
console.log('');
console.log('  git add .');
console.log('  git commit -m "init: BrigaRx foundation"');
console.log(`  git push -u origin ${BRANCH}`);
console.log('');
console.log(c.dim('  The GitHub repo is empty, so this first push creates its history.'));
console.log(c.dim('  Then delete this file — it has done its job.'));
console.log('');
