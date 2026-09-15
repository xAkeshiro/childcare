/**
 * The hero illustration: the building blocks of early life. A kid celebrates
 * beside a tower of three alphabet blocks, A at the base (Affection), B
 * (Belonging), and C on top (Curiosity), the same three values as Our ABCs.
 * On desktop the top block settles into place once and the rays light up;
 * everything else is still.
 */
import { m, useReducedMotion } from 'motion/react'
import { Block, KID_RAYS, Kid } from '@/components/brand/illustrations'
import { abcs } from '@/content/site'

const EASE = [0.22, 1, 0.36, 1] as const
const BLOCK = 124 // rendered size of one block in scene units (viewBox 560 x 340)
const FRONT = (75 / 110) * BLOCK // height of a block's front face
const TOP = (25 / 110) * BLOCK // height of the top face
const STACK_X = 300
const BASE_Y = 340 - BLOCK

const tones = ['text-crayon-red', 'text-crayon-blue', 'text-crayon-green'] as const

type Props = { className?: string; animate?: boolean }

export function HeroScene({ className, animate = false }: Props) {
  const reduce = useReducedMotion()
  const moves = animate && !reduce
  const values = abcs.items.slice(0, 3)
  const label = `A cartoon kid celebrating beside a tower of three alphabet blocks labeled ${values.map((v) => v.word).join(', ')}`

  return (
    <svg viewBox="0 0 560 340" className={className} role="img" aria-label={label}>
      {/* The kid: head from the mascot (rays drawn separately), simple body, arms up. */}
      <g transform="translate(30 -30) scale(1.1)">
      <g stroke="var(--color-ink)" strokeLinecap="round" strokeLinejoin="round">
        <path d="M118 300 L112 324 M142 300 L148 324" strokeWidth="10" fill="none" />
        <ellipse cx="108" cy="328" rx="15" ry="7" fill="var(--color-ink)" stroke="none" />
        <ellipse cx="152" cy="328" rx="15" ry="7" fill="var(--color-ink)" stroke="none" />
        <rect x="100" y="244" width="60" height="58" rx="18" fill="var(--color-crayon-purple)" strokeWidth="5" />
        <path d="M106 258 L70 200 M154 258 L190 200" strokeWidth="16" fill="none" />
        <path d="M106 258 L70 200 M154 258 L190 200" strokeWidth="8" stroke="var(--color-crayon-purple)" fill="none" />
        <circle cx="68" cy="196" r="10" fill="var(--color-paper-2)" strokeWidth="5" />
        <circle cx="192" cy="196" r="10" fill="var(--color-paper-2)" strokeWidth="5" />
      </g>
      <Kid x="40" y="97" width="180" height="180" rays={false} />
      <svg x="40" y="97" width="180" height="180" viewBox="0 0 200 200" aria-hidden="true">
        <m.path
          d={KID_RAYS}
          fill="none"
          stroke="var(--color-crayon-orange)"
          strokeWidth="6"
          strokeLinecap="round"
          initial={moves ? { opacity: 0 } : false}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.0 }}
        />
      </svg>
      </g>

      {/* The tower: A, B, C from the base up, each with its value beside it. */}
      {values.map((value, i) => {
        const y = BASE_Y - i * FRONT
        const labelY = y + TOP + FRONT / 2 + 8
        const isTop = i === values.length - 1
        const group = (
          <g key={value.letter}>
            <Block letter={value.letter} x={STACK_X} y={y} width={BLOCK} height={BLOCK} className={tones[i]} />
            <text
              x={STACK_X + BLOCK + 16}
              y={labelY}
              fontFamily="var(--font-display)"
              fontWeight="600"
              fontSize="22"
              fill="var(--color-ink)"
            >
              {value.word}
            </text>
          </g>
        )
        if (!isTop) return group
        return (
          <m.g
            key={value.letter}
            initial={moves ? { y: -22, opacity: 0 } : false}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          >
            {group}
          </m.g>
        )
      })}
    </svg>
  )
}
