import type { ComponentPropsWithoutRef, ElementType } from 'react'
import { cn } from '@/lib/utils'

/**
 * Card: paper-2 surface, 1px hairline, 20px radius, the soft 1px shadow.
 * No tilt, no outline, no hard shadow. Interactive cards may add hover:shadow-lift.
 */
export function Card<T extends ElementType = 'div'>({
  as,
  className,
  ...props
}: { as?: T; className?: string } & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className'>) {
  const Component = (as ?? 'div') as ElementType
  return <Component className={cn('rounded-xl border border-line bg-paper-2 shadow-soft', className)} {...props} />
}

/** A 40px circle that holds one Lucide icon. The site's only icon container. */
export function IconCircle({ className, ...props }: ComponentPropsWithoutRef<'span'>) {
  return (
    <span
      className={cn('grid size-10 shrink-0 place-items-center rounded-full border border-line bg-paper-2 text-ink', className)}
      {...props}
    />
  )
}
