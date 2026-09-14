/**
 * AnimatedGroup: staggers its children into view, adapted from Motion
 * Primitives (published on 21st.dev). Only the "fade" and "slide" presets are
 * kept because the brand's motion rules forbid springy or rotating entrances.
 */
import { m, type Variants } from 'motion/react'
import { Children, type ElementType, type ReactNode, useMemo } from 'react'

type AnimatedGroupProps = {
  children: ReactNode
  className?: string
  itemClassName?: string
  preset?: 'fade' | 'slide'
  as?: ElementType
  asChild?: ElementType
  /** Seconds between each child. */
  stagger?: number
  amount?: number
}

export function AnimatedGroup({
  children,
  className,
  itemClassName,
  preset = 'slide',
  as = 'div',
  asChild = 'div',
  stagger = 0.08,
  amount = 0.1,
}: AnimatedGroupProps) {
  const container: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger } },
  }
  const item: Variants = {
    hidden: { opacity: 0, y: preset === 'slide' ? 14 : 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
  }
  const Component = useMemo(() => m.create(as as keyof HTMLElementTagNameMap), [as])
  const Child = useMemo(() => m.create(asChild as keyof HTMLElementTagNameMap), [asChild])

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={container}
    >
      {Children.map(children, (child, i) => (
        <Child key={i} className={itemClassName} variants={item}>
          {child}
        </Child>
      ))}
    </Component>
  )
}
