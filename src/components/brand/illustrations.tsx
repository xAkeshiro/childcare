/**
 * The Little Lightbulbs illustration system. Every drawing is an inline SVG
 * that takes its color from `currentColor`, so `className="text-crayon-red"`
 * paints it. Keep strokes at 6 units in a 200-unit box (about 3px at 100px).
 */
import type { SVGProps } from 'react'
import { cn } from '@/lib/utils'

type Svg = SVGProps<SVGSVGElement> & { title?: string }

function a11y(title?: string) {
  return title ? { role: 'img' as const, 'aria-label': title } : { 'aria-hidden': true as const }
}

/** The mascot: a smiling lightbulb. Fills are fixed brand colors; the outline uses currentColor. */
export function Bulb({ title, className, ...props }: Svg) {
  return (
    <svg viewBox="0 0 200 260" className={cn('text-ink', className)} {...a11y(title)} {...props}>
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M100 30V12 M153 49l11-14 M47 49L36 35 M179 91l17-5 M21 91L4 86" fill="none" stroke="var(--color-crayon-orange)" />
        <rect x="70" y="204" width="60" height="30" rx="6" fill="#C7CBD6" />
        <path d="M74 214H126 M74 224H126" fill="none" opacity=".45" strokeWidth="4" />
        <rect x="86" y="232" width="28" height="14" rx="5" fill="#9AA0AE" />
        <path d="M62 166 A66 66 0 1 1 138 166 C135 178 131 188 130 198 L130 204 L70 204 L70 198 C69 188 65 178 62 166 Z" fill="var(--color-crayon-yellow)" />
        <ellipse cx="76" cy="84" rx="9" ry="17" fill="#fff" stroke="none" opacity=".65" transform="rotate(-18 76 84)" />
        <circle cx="84" cy="106" r="6" fill="currentColor" stroke="none" />
        <circle cx="116" cy="106" r="6" fill="currentColor" stroke="none" />
        <path d="M82 128 Q100 148 118 128" fill="none" />
        <circle cx="68" cy="122" r="7" fill="var(--color-crayon-pink)" stroke="none" opacity=".6" />
        <circle cx="132" cy="122" r="7" fill="var(--color-crayon-pink)" stroke="none" opacity=".6" />
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
