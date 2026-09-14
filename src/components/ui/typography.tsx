import type { ComponentPropsWithoutRef } from 'react'
import { cn } from '@/lib/utils'

/** Section title: Fredoka 600 at the h2 step. */
export function H2({ className, ...props }: ComponentPropsWithoutRef<'h2'>) {
  return <h2 className={cn('font-display text-h2 font-semibold text-ink', className)} {...props} />
}

/** Card or item title: Fredoka 600 at the h3 step. */
export function H3({ className, ...props }: ComponentPropsWithoutRef<'h3'>) {
  return <h3 className={cn('font-display text-h3 font-semibold text-ink', className)} {...props} />
}

/** Intro paragraph under a section title. */
export function Lede({ className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return <p className={cn('max-w-[38rem] text-lede text-ink-soft', className)} {...props} />
}

/**
 * The only small label style on the site: Nunito 700, 13px, uppercase,
 * tracked. Use sparingly; a section never opens with one.
 */
export function Label({ className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return <p className={cn('font-sans text-label font-bold uppercase text-ink-soft', className)} {...props} />
}
