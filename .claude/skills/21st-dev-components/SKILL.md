---
name: 21st-dev-components
description: How this site sources and adapts React + Tailwind components from the 21st.dev ecosystem (Magic UI, Motion Primitives, Kokonut UI, shadcn/ui conventions). Load when adding a new UI component, replacing a section's building blocks, or checking that a pasted component matches the brand kit and stack.
---

# 21st.dev components on this site

21st.dev is a marketplace of shadcn-style React + Tailwind components. The libraries
we draw from all publish there and are MIT licensed:

| Library | Source | What we use |
| --- | --- | --- |
| Motion Primitives | github.com/ibelick/motion-primitives | `InView` → `src/components/motion/reveal.tsx`, `AnimatedGroup`, `Accordion` |
| Magic UI | github.com/magicuidesign/magicui | `Highlighter` (rough-notation) → `src/components/motion/highlighter.tsx` |
| Kokonut UI | github.com/kokonut-labs/kokonutui | Reference for button and card patterns |

## Conventions (the shadcn/21st.dev contract this repo follows)

- Class merging with `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge).
- Tailwind v4: tokens live in `src/index.css` under `@theme`; components use token
  utilities (`bg-paper`, `text-ink`, `border-line`, `bg-accent`, `rounded-xl`,
  `shadow-soft`) and never raw hex or arbitrary colors.
- Animation through `motion/react` only (see the `framer-motion` skill). No GSAP, no
  CSS keyframe libraries.
- Icons from `lucide-react` at 1.75 stroke, sized with `size-4`/`size-5`. Never emoji.
- Path alias `@/` → `src/`.
- Components are plain `.tsx` files in `src/components/{ui,motion,brand}`; sections
  that compose them live in `src/sections`.

## Adding a component from 21st.dev

1. Copy the component source from the 21st.dev page (or the library's GitHub repo).
2. Drop the `"use client"` line (Vite, not Next.js) and swap `next/link`, `next/image`
   for plain `<a>` and `<img>`.
3. Replace `framer-motion` imports with `motion/react`.
4. Replace hard-coded colors, radii, and shadows with brand tokens from `src/index.css`.
   If the component needs a new token, add it to `@theme` and to BRAND.md.
5. Strip effects the brand forbids (particles, beams, parallax, text scramble, spring
   bounces). If the component is mostly that effect, pick a different component.
6. Check accessibility: real `<button>` elements, `aria-expanded` on disclosures,
   visible focus ring (`focus-visible:ring-4 focus-visible:ring-ring/40`), 44px targets.
7. Run `npm run build`.

## Magic MCP (optional)

21st.dev also offers "Magic", an MCP server that generates and installs components from
a prompt. It needs a 21st.dev API key (free tier available at 21st.dev/magic). It is not
required for this repo; the hand-adapted components above cover the site. If you set it
up, still run every generated component through steps 3–7.
