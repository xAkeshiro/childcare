/**
 * The Little Thinkers illustration system. Every drawing is an inline SVG
 * that takes its color from `currentColor`, so `className="text-crayon-red"`
 * paints it. Keep strokes at 6 units in a 200-unit box (about 3px at 100px).
 */
import type { SVGProps } from 'react'
import { cn } from '@/lib/utils'

type Svg = SVGProps<SVGSVGElement> & { title?: string }

function a11y(title?: string) {
  return title ? { role: 'img' as const, 'aria-label': title } : { 'aria-hidden': true as const }
}

/** The mascot: a smiling thought bubble with a star spark. Fills are fixed brand colors; the outline uses currentColor. */
export function ThoughtBubble({ title, className, ...props }: Svg) {
  return (
    <svg viewBox="0 0 200 200" className={cn('text-ink', className)} {...a11y(title)} {...props}>
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path
          d="M40 100 A30 30 0 0 1 60 48 A34 34 0 0 1 108 34 A30 30 0 0 1 150 56 A28 28 0 0 1 160 106 A30 30 0 0 1 118 130 A32 32 0 0 1 70 128 A26 26 0 0 1 40 100 Z"
          fill="var(--color-paper-2)"
        />
        <circle cx="52" cy="152" r="13" fill="var(--color-paper-2)" />
        <circle cx="34" cy="180" r="7" fill="var(--color-paper-2)" />
        <circle cx="86" cy="84" r="6" fill="currentColor" stroke="none" />
        <circle cx="114" cy="84" r="6" fill="currentColor" stroke="none" />
        <path d="M84 100 Q100 116 116 100" fill="none" />
        <circle cx="70" cy="98" r="7" fill="var(--color-crayon-pink)" stroke="none" opacity=".6" />
        <circle cx="130" cy="98" r="7" fill="var(--color-crayon-pink)" stroke="none" opacity=".6" />
        <polygon
          points="50,6 61,38 95,38 68,59 79,92 50,72 21,92 32,59 5,38 39,38"
          fill="var(--color-crayon-yellow)"
          strokeWidth="14"
          transform="translate(150 4) scale(0.38)"
        />
      </g>
    </svg>
  )
}

/** A painted handprint. Color via className (text-crayon-*). */
export function Handprint({ title, className, ...props }: Svg) {
  return (
    <svg viewBox="0 0 100 120" className={className} {...a11y(title)} {...props}>
      <g fill="currentColor">
        <rect x="26" y="50" width="52" height="60" rx="24" />
        <rect x="27" y="14" width="10" height="54" rx="5" transform="rotate(-7 32 66)" />
        <rect x="41" y="4" width="10" height="64" rx="5" />
        <rect x="55" y="9" width="10" height="59" rx="5" transform="rotate(6 60 66)" />
        <rect x="69" y="24" width="10" height="44" rx="5" transform="rotate(15 74 66)" />
        <rect x="32" y="52" width="12" height="40" rx="6" transform="rotate(-50 38 92)" />
      </g>
    </svg>
  )
}

/** A crayon, pointing up. Color via className. */
export function Crayon({ title, className, ...props }: Svg) {
  return (
    <svg viewBox="0 0 40 170" className={className} {...a11y(title)} {...props}>
      <path d="M20 5 L31 34 H9 Z" fill="currentColor" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <rect x="7" y="30" width="26" height="136" rx="4" fill="currentColor" />
      <rect x="7" y="50" width="26" height="86" fill="#000" opacity=".16" />
      <rect x="7" y="72" width="26" height="42" fill="#fff" opacity=".88" />
      <path d="M10 93 H30" stroke="#000" strokeWidth="2.5" strokeLinecap="round" opacity=".35" />
    </svg>
  )
}

/** A wooden alphabet block. Color via className; the letter is drawn in ink. */
export function Block({ letter, title, className, ...props }: Svg & { letter: string }) {
  return (
    <svg viewBox="0 0 110 110" className={className} {...a11y(title)} {...props}>
      <polygon points="10,35 35,10 110,10 85,35" fill="currentColor" />
      <polygon points="10,35 35,10 110,10 85,35" fill="#fff" opacity=".38" />
      <polygon points="85,35 110,10 110,85 85,110" fill="currentColor" />
      <polygon points="85,35 110,10 110,85 85,110" fill="#000" opacity=".28" />
      <rect x="10" y="35" width="75" height="75" fill="currentColor" />
      <rect x="21" y="46" width="53" height="53" rx="3" fill="var(--color-paper)" />
      <path d="M10 35 H85 V110 H10 Z M35 10 H110 V85" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M10 35 L35 10 M85 35 L110 10 M85 110 L110 85" fill="none" stroke="var(--color-ink)" strokeWidth="3.5" strokeLinecap="round" />
      <text x="47.5" y="89" textAnchor="middle" fontFamily="var(--font-display)" fontWeight="700" fontSize="46" fill="var(--color-ink)">
        {letter}
      </text>
    </svg>
  )
}

/** A five-point star sticker. */
export function Star({ title, className, ...props }: Svg) {
  return (
    <svg viewBox="0 0 100 100" className={className} {...a11y(title)} {...props}>
      <polygon points="50,6 61,38 95,38 68,59 79,92 50,72 21,92 32,59 5,38 39,38" fill="currentColor" stroke="var(--color-ink)" strokeWidth="5" strokeLinejoin="round" />
    </svg>
  )
}

/** A sun. */
export function Sun({ title, className, ...props }: Svg) {
  return (
    <svg viewBox="0 0 120 120" className={className} {...a11y(title)} {...props}>
      <g stroke="var(--color-ink)" strokeWidth="5" strokeLinecap="round">
        <path d="M60 8V22 M60 98V112 M8 60H22 M98 60H112 M23 23l10 10 M87 87l10 10 M97 23l-10 10 M33 87l-10 10" />
        <circle cx="60" cy="60" r="26" fill="var(--color-crayon-yellow)" />
      </g>
    </svg>
  )
}
