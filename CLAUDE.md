# Little Thinkers website

Marketing site for a licensed family child care home in California. Vite + React 19 +
TypeScript + Tailwind CSS v4 + Motion (`motion/react`). No backend.

## Start here

- `BRAND.md` is the source of truth for colors, type, spacing, illustration, motion, and
  component rules. Tokens live in `src/index.css` under `@theme`; do not add raw hex values
  to components.
- All copy, hours, prices, and contact details are in `src/content/site.ts`.
- Sections are in `src/sections/`, primitives in `src/components/ui/`, motion helpers in
  `src/components/motion/`, drawings in `src/components/brand/illustrations.tsx`.

## Commands

- `npm run dev` local server
- `npm run build` typecheck + production build to `dist/`
- `./rename.sh "New Name"` change the business name everywhere

## Skills in this repo (`.claude/skills/`)

- `framer-motion`: the site's motion rules and the Motion for React API in use.
- `21st-dev-components`: how components are sourced from 21st.dev libraries and adapted.
- `ui-ux-pro-max`: searchable design intelligence; run
  `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<query>" --domain <domain>`.

## Rules

- Keep effects light: scroll reveals, hover lifts, the FAQ accordion, the hero highlight,
  and the mascot's idle float are the whole motion vocabulary.
- Every text/background pair must pass 4.5:1. The `-deep` crayon variants exist for text.
- Placeholders stay in [square brackets] until the owner supplies the real values.
