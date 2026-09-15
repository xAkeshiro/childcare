---
name: framer-motion
description: Motion for React (the current name of Framer Motion, npm package `motion`) as used on the Little Thinkers site. Load when adding, changing, or reviewing any animation, transition, scroll reveal, hover state, or reduced-motion behavior in src/. Encodes the brand's "light effects" rules so motion stays subtle and consistent.
---

# Motion for React on this site

Framer Motion is now published as the `motion` package. Everything is imported from `motion/react`:

```tsx
import { motion, AnimatePresence, MotionConfig, useInView, useReducedMotion } from 'motion/react'
```

Installed version: see `package.json` (`motion` ^13). `main.tsx` wraps the app in
`<MotionConfig reducedMotion="user">`, so every `motion.*` element automatically
drops transform and opacity animation when the visitor's OS asks for reduced motion.
Do not add per-component media queries for that; do not remove the wrapper.

## Brand motion rules (from BRAND.md, section 8)

1. **Motion explains, it never decorates.** Animate at most one or two things per screen.
2. **Allowed:** scroll reveals (opacity 0→1, rise of 8–14px, 0.4–0.5s, `[0.22, 1, 0.36, 1]`), staggered card entrances (0.06–0.1s apart), hover lifts of 1–2px with a shadow change, the FAQ accordion height transition (0.3s), the two rough-notation marks, and the one-time hero settle (the top block lowers into place, then the rays fade in) on desktop only.
3. **Forbidden:** parallax, scroll-jacking, particle or beam backgrounds, text scramble or typewriter effects, spring bounces on entrances, rotating or flipping cards, infinite marquees of anything but logos, autoplaying carousels, loops of any kind, animations longer than 0.8s, animating `width`, `height`, `top`, or `left` (use transforms and opacity only).
4. **Everything meant to be read is visible at rest.** Reveals start from a hidden state only when the element is below the fold; the hero never hides its text.

## The components to reuse (do not reinvent)

| Component | File | Use it for |
| --- | --- | --- |
| `Reveal` | `src/components/motion/reveal.tsx` | One block fading and rising into view |
| `AnimatedGroup` | `src/components/motion/animated-group.tsx` | A grid or list of cards entering with a stagger |
| `Accordion` / `AccordionItem` | `src/components/motion/accordion.tsx` | FAQ, any disclosure |
| `Highlighter` | `src/components/motion/highlighter.tsx` | The single hand-drawn highlight or underline on a headline word |

Both `Reveal` and `AnimatedGroup` come from Motion Primitives (published on 21st.dev);
`Highlighter` comes from Magic UI. They are already adapted to this repo's tokens.

## Patterns

Scroll reveal (once, when a quarter of the element is visible):

```tsx
<motion.div
  initial={{ opacity: 0, y: 12 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.25 }}
  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
/>
```

Hover lift on a card or button (transform + shadow only):

```tsx
<motion.a whileHover={{ y: -2 }} transition={{ duration: 0.2 }} className="shadow-soft hover:shadow-lift" />
```

Conditional mount with exit (menus, panels):

```tsx
<AnimatePresence initial={false}>
  {open && <motion.div initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} />}
</AnimatePresence>
```

Reading the preference in code when you must branch (for example, to skip rough-notation drawing):

```tsx
const reduce = useReducedMotion() // true when the OS asks for less motion
```

## Checklist before finishing any motion change

- [ ] Uses transform or opacity only; no layout properties animated.
- [ ] Duration between 0.2s and 0.6s; easing `[0.22, 1, 0.36, 1]` or `easeOut`.
- [ ] `viewport={{ once: true }}` on scroll reveals so nothing replays on scroll-up.
- [ ] Nothing important is invisible before it animates, and the page reads fine with `prefers-reduced-motion: reduce` (test in DevTools → Rendering → Emulate CSS media).
- [ ] At most two animated elements per viewport height.
- [ ] `npm run build` passes (TypeScript checks the props).
