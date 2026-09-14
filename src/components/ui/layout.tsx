import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** The page column: 1120px, 20px gutters on phones, 32px from the sm breakpoint. */
export function Container({ className, ...props }: ComponentPropsWithoutRef<'div'>) {
  return <div className={cn('mx-auto w-full max-w-[1120px] px-5 sm:px-8', className)} {...props} />
}

/**
 * Section rhythm: 96px on phones, 128px on desktop. Sections are separated by
 * whitespace, never by tinted bands. `hairline` adds the one allowed rule.
 */
export function Section({
  id,
  className,
  hairline = false,
  children,
  ...props
}: ComponentPropsWithoutRef<'section'> & { hairline?: boolean; children: ReactNode }) {
  return (
    <section
      id={id}
      className={cn('py-24 md:py-32', hairline && 'border-t border-line-soft', className)}
      {...props}
    >
      {children}
    </section>
  )
}
