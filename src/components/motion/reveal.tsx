/**
 * Reveal: a scroll-triggered fade/rise, adapted from Motion Primitives' InView
 * (motion-primitives.com, published on 21st.dev). Kept deliberately subtle:
 * opacity 0→1 and a 12px rise, ~0.45s, once. Honors reduced motion through
 * the MotionConfig in main.tsx.
 */
import { m, type Transition, type Variants } from 'motion/react'
import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

// One motion component per tag, created once, so Reveal never remounts its children.
const cache = new Map<ElementType, typeof m.div>()
function motionFor(tag: ElementType) {
  let component = cache.get(tag)
  if (!component) {
    component = m.create(tag as 'div') as typeof m.div
    cache.set(tag, component)
  }
  return component
}

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Delay in seconds, handy for staggering siblings by hand. */
  delay?: number
  /** Vertical travel in px. Keep small. */
  y?: number
  /** How much of the element must be visible before it animates (0–1). */
  amount?: number
  once?: boolean
  transition?: Transition
} & Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'className'>

export function Reveal({
  children,
  as = 'div',
  className,
  delay = 0,
  y = 12,
  amount = 0.1,
  once = true,
  transition,
  ...rest
}: RevealProps) {
  const Component = motionFor(as)
  const variants: Variants = {
    hidden: { opacity: 0, y },
    visible: { opacity: 1, y: 0 },
  }
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={variants}
      transition={transition ?? { duration: 0.45, ease: [0.22, 1, 0.36, 1], delay }}
      {...(rest as object)}
    >
      {children}
    </Component>
  )
}
