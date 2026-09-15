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

/** The mascot: a simple cartoon kid beaming with an idea. Rays are crayon orange; the outline uses currentColor.
 *  Pass `rays={false}` to draw the rays separately (the hero scene animates them). */
export const KID_RAYS =
  'M100 52L100 26 M129 59L139 39 M71 59L61 39 M151 76L166 63 M49 76L34 63 M161 98L178 93 M39 98L22 93'

export function Kid({ title, className, rays = true, ...props }: Svg & { rays?: boolean }) {
  return (
    <svg viewBox="0 0 200 200" className={cn('text-ink', className)} {...a11y(title)} {...props}>
      <g stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
        {rays && <path d={KID_RAYS} fill="none" stroke="var(--color-crayon-orange)" />}
        <circle cx="50" cy="124" r="10" fill="var(--color-paper-2)" />
        <circle cx="150" cy="124" r="10" fill="var(--color-paper-2)" />
        <circle cx="100" cy="118" r="52" fill="var(--color-paper-2)" />
        <path d="M52 110 C56 78 78 66 100 66 C122 66 144 78 148 110 C138 100 128 98 120 106 C112 96 88 96 80 106 C72 98 62 100 52 110 Z" fill="currentColor" />
        <circle cx="84" cy="126" r="6" fill="currentColor" stroke="none" />
        <circle cx="116" cy="126" r="6" fill="currentColor" stroke="none" />
        <path d="M84 142 Q100 158 116 142" fill="none" />
        <circle cx="70" cy="140" r="7" fill="var(--color-crayon-pink)" stroke="none" opacity=".6" />
        <circle cx="130" cy="140" r="7" fill="var(--color-crayon-pink)" stroke="none" opacity=".6" />
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
