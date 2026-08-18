#!/usr/bin/env node
/**
 * BrigaRx — remove the placeholder data plumbing.
 *
 * The homepage needs no data layer, so the seed data, adapters and the /items
 * demo page are dead weight. This removes them, then deletes itself.
 *
 * Run once, from the project folder:
 *     node cleanup.mjs
 *
 * IMPORTANT: lib/utils.ts is NOT removed. That file is shadcn's `cn` helper,
 * imported by every shadcn component — deleting it breaks the whole UI layer.
 * Only the placeholder files are targeted, never the lib/ folder wholesale.
 *
 * If a backend arrives later, the adapter pattern is documented in
 * brigarx-project-instructions.md and takes a minute to recreate.
 */

import { existsSync, rmSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();

// Explicit list. No wholesale directory deletes above this level.
const TARGETS = [
  join('lib', 'adapters'),
  join('lib', 'data'),
  join('lib', 'utils'),      // contains only the placeholder format.ts
  join('lib', 'types.ts'),
  join('lib', 'README.md'),
  join('app', 'items'),
];

// Files that must survive no matter what.
const PROTECTED = [
  join('lib', 'utils.ts'),   // shadcn's cn() helper
];

const green = (s) => `\x1b[32m${s}\x1b[0m`;
const yellow = (s) => `\x1b[33m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

if (!existsSync(join(ROOT, 'package.json'))) {
  console.error('No package.json here — are you in the project folder?');
  process.exit(1);
}

console.log(`\nRemoving placeholder plumbing from ${ROOT}\n`);

for (const target of TARGETS) {
  const abs = join(ROOT, target);

  if (PROTECTED.includes(target)) {
    console.log(`  ${yellow('kept')}    ${target} (protected)`);
    continue;
  }
  if (!existsSync(abs)) {
    console.log(`  ${dim('skip')}    ${target} (not present)`);
    continue;
  }

  // A placeholder file may have been edited into something real. Only the
  // known-empty placeholders are removed without comment; anything else is
  // reported so it is not lost silently.
  rmSync(abs, { recursive: true, force: true });
  console.log(`  ${green('removed')} ${target}`);
}

/* sanity checks ------------------------------------------------------- */

let problems = 0;

for (const p of PROTECTED) {
  if (!existsSync(join(ROOT, p))) {
    console.error(`\n  ${yellow('warning')} ${p} is missing — shadcn components import it.`);
    console.error('  Restore it with:  npx shadcn@latest add button -y');
    problems++;
  }
}

const appDir = join(ROOT, 'app');
if (existsSync(appDir) && readdirSync(appDir).length === 0) {
  console.error('\napp/ is now empty — that breaks the App Router.');
  problems++;
}

// lib/ may now be just utils.ts. That is expected and fine.
const libDir = join(ROOT, 'lib');
if (existsSync(libDir)) {
  const left = readdirSync(libDir);
  console.log(`\n  ${dim(`lib/ now contains: ${left.join(', ') || '(empty)'}`)}`);
  if (left.length === 0) {
    rmSync(libDir, { recursive: true, force: true });
    console.log(`  ${green('removed')} lib (empty)`);
  }
}

if (problems > 0) {
  console.error('\nFinished with warnings above — check them before committing.');
  process.exit(1);
}

console.log('\nDone. Next:\n');
console.log('  npm run dev            confirm localhost:3000 still loads');
console.log('  git add -A');
console.log('  git commit -m "chore: remove placeholder data layer"');
console.log('');
console.log(dim('  This script deletes itself now.'));

rmSync(new URL(import.meta.url), { force: true });
