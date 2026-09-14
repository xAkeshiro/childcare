import { motion } from 'motion/react'
import { Baby, Clock, UtensilsCrossed, Users } from 'lucide-react'
import { Block, Bulb, Crayon } from '@/components/brand/illustrations'
import { Highlighter } from '@/components/motion/highlighter'
import { Button } from '@/components/ui/button'
import { Card, IconCircle } from '@/components/ui/card'
import { Container } from '@/components/ui/layout'
import { Label } from '@/components/ui/typography'
import { facts, hero, site } from '@/content/site'

const factIcons = { clock: Clock, baby: Baby, home: Users, apple: UtensilsCrossed } as const

export function Hero() {
  return (
    <section id="top" className="pt-10 pb-20 md:pt-16 md:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-[36rem]">
            {/* On phones the mascot sits above the headline; the full scene shows from lg up. */}
            <Bulb className="mb-6 h-24 w-auto lg:hidden" title="The Little Thinkers mascot, a smiling lightbulb" />
            <p className="text-[0.9375rem] font-semibold text-ink-soft">{hero.eyebrow}</p>
            <h1 className="mt-3 font-display text-h1 font-semibold text-ink">
              {hero.headline.before}
              <Highlighter action="highlight" color="var(--color-marker)" strokeWidth={1} iterations={2} padding={4}>
                {hero.headline.highlight}
              </Highlighter>
              {hero.headline.after}
            </h1>
            <p className="mt-5 max-w-[34rem] text-lede text-ink-soft">{hero.lede}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Button href={hero.primaryCta.href} size="lg">
                {hero.primaryCta.label}
              </Button>
              <Button href={hero.secondaryCta.href} variant="link" arrow>
                {hero.secondaryCta.label}
              </Button>
            </div>
            <p className="mt-7 flex flex-wrap gap-x-2.5 text-[0.9375rem] font-semibold text-ink-soft">
              {hero.proof.map((item, i) => (
                <span key={item} className="inline-block whitespace-nowrap">
                  {i > 0 && <span aria-hidden="true" className="mr-2.5 text-line">·</span>}
                  {item}
                </span>
              ))}
            </p>
          </div>

          <HeroArt />
        </div>

        {/* At a glance: the four facts a parent scans for, as one contained object. */}
        <Card as="ul" aria-label="At a glance" className="mt-16 grid grid-cols-1 gap-y-6 p-6 sm:grid-cols-2 md:mt-24 md:grid-cols-4 md:gap-x-8 md:p-8">
          {facts.map((fact) => {
            const Icon = factIcons[fact.icon]
            return (
              <li key={fact.label} className="flex items-start gap-3.5">
                <IconCircle>
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </IconCircle>
                <div>
                  <Label>{fact.label}</Label>
                  <p className="mt-1 font-bold text-ink">{fact.value}</p>
                </div>
              </li>
            )
          })}
        </Card>
      </Container>
    </section>
  )
}

/** One subject (the mascot) with air around it, one grounded prop group (the blocks), one supporting prop (crayons). */
function HeroArt() {
  return (
    <div className="relative mx-auto hidden aspect-[5/4] w-full max-w-[520px] lg:block" aria-hidden="true">
      <motion.div
        className="absolute left-1/2 top-[4%] h-[66%] w-auto -translate-x-1/2"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
      >
        <Bulb className="h-full w-auto" title={`${site.name} mascot`} />
      </motion.div>
      <div className="absolute bottom-0 left-[4%] w-[46%]">
        <div className="relative aspect-[2/1.86]">
          <Block letter="C" className="absolute left-[24%] top-0 w-[50%] text-crayon-green" />
          <Block letter="A" className="absolute bottom-0 left-0 w-[50%] text-crayon-red" />
          <Block letter="B" className="absolute bottom-0 right-0 w-[50%] text-crayon-blue" />
        </div>
      </div>
      <div className="absolute bottom-[2%] right-[6%] flex items-end gap-1">
        <Crayon className="h-36 w-auto origin-bottom -rotate-12 text-crayon-purple" />
        <Crayon className="h-40 w-auto text-crayon-green" />
        <Crayon className="h-36 w-auto origin-bottom rotate-12 text-crayon-orange" />
      </div>
    </div>
  )
}
