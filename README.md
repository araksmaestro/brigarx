# BrigaRx

Healthcare services site. Next.js, TypeScript, Tailwind, shadcn/ui, dark theme,
deployed on Vercel.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Scope

Marketing homepage only for now. There is **no backend and no data layer** —
content is written directly into the components.

When the site grows into something with real data, add an adapter layer
(`lib/adapters/`) between the components and whatever backend arrives, so a
later backend change never reaches the components. The full pattern is in
`brigarx-project-instructions.md` in the Claude Project.

## Structure

```
app/
  layout.tsx    root layout — stable file, do not modify
  globals.css   theme tokens and the custom scrollbar
  page.tsx      homepage
```

## Branches

- `main` — production, auto-deploys to Vercel
- `feature/*` — all development work

Never commit directly to `main`. Never push to `main` without checking a preview
URL first.

## Conventions

Full rules live in the Claude Project (`general-project-rules.md` and
`brigarx-project-instructions.md`). The short version:

- dark theme only, desktop only unless stated otherwise
- shadcn/ui + Tailwind, no other component libraries
- skeleton loading states, not spinners
- no HTML `<form>` tags — use `onClick` / `onChange`
- scrollable containers get `className="scroll-thin"`
- theme tokens: `bg-background`, `text-foreground`, `text-muted`, `border-border`
