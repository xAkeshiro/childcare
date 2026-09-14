/**
 * Highlighter: a hand-drawn marker highlight or underline, adapted from
 * Magic UI (magicui.design, published on 21st.dev). Draws with rough-notation
 * when the word scrolls into view. This is the one "crayon" effect the brand
 * allows on text, so use it once per section at most.
 */
import { useLayoutEffect, useRef, type ReactNode } from 'react'
import { useInView, useReducedMotion } from 'motion/react'
import { annotate } from 'rough-notation'
import type { RoughAnnotation } from 'rough-notation/lib/model'

type Action = 'highlight' | 'underline' | 'circle' | 'box'

type HighlighterProps = {
  children: ReactNode
  action?: Action
  color?: string
  strokeWidth?: number
  animationDuration?: number
  iterations?: number
  padding?: number
  multiline?: boolean
  className?: string
}

export function Highlighter({
  children,
  action = 'highlight',
  color = 'var(--color-marker)',
  strokeWidth = 2,
  animationDuration = 700,
  iterations = 2,
  padding = 2,
  multiline = true,
  className,
}: HighlighterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-10%' })
  const reduce = useReducedMotion()

  useLayoutEffect(() => {
    const el = ref.current
    if (!el || !inView) return
    const annotation: RoughAnnotation = annotate(el, {
      type: action,
      color,
      strokeWidth,
      animationDuration: reduce ? 0 : animationDuration,
      animate: !reduce,
      iterations,
      padding,
      multiline,
    })
    // rough-notation watches the element and the window itself and redraws
    // without animation on resize or font swap, so no extra observers here.
    annotation.show()
    return () => annotation.remove()
  }, [inView, action, color, strokeWidth, animationDuration, iterations, padding, multiline, reduce])

  return (
    <span ref={ref} className={className ?? 'relative inline-block'}>
      {children}
    </span>
  )
}
