import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

/**
 * Button. The brand allows exactly one solid button color (accent blue) and
 * quiet secondaries. `link` renders as a text link with the marker underline,
 * for the "second action" next to a primary button.
 */
type Variant = 'primary' | 'secondary' | 'link'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans font-bold transition-[background-color,border-color,box-shadow,transform,text-decoration-color] duration-200 ease-out select-none focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/30 disabled:pointer-events-none disabled:opacity-50'

const variants: Record<Variant, string> = {
  primary: 'rounded-md bg-accent text-white shadow-soft hover:bg-accent-hover hover:-translate-y-px active:translate-y-0',
  secondary: 'rounded-md border border-line bg-paper-2 text-ink hover:border-ink/30 hover:-translate-y-px active:translate-y-0',
  link: 'rounded-sm px-0 text-ink underline decoration-marker decoration-[3px] underline-offset-[6px] hover:decoration-accent',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-[0.9375rem]',
  md: 'h-12 px-6 text-[0.9375rem]',
  lg: 'h-13 px-7 text-base',
}

type Common = { variant?: Variant; size?: Size; arrow?: boolean; className?: string; children: ReactNode }
type ButtonAsButton = Common & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }
type ButtonAsLink = Common & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
export type ButtonProps = ButtonAsButton | ButtonAsLink

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  { variant = 'primary', size = 'md', arrow = false, className, children, ...props },
  ref,
) {
  const classes = cn(base, variants[variant], variant === 'link' ? 'h-auto' : sizes[size], className)
  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="size-4 shrink-0" strokeWidth={2.25} aria-hidden="true" />}
    </>
  )
  if ('href' in props && props.href !== undefined) {
    const { href, ...anchor } = props as ButtonAsLink
    return (
      <a ref={ref as React.Ref<HTMLAnchorElement>} href={href} className={classes} {...anchor}>
        {content}
      </a>
    )
  }
  const { type = 'button', ...button } = props as ButtonAsButton
  return (
    <button ref={ref as React.Ref<HTMLButtonElement>} type={type} className={classes} {...button}>
      {content}
    </button>
  )
})
