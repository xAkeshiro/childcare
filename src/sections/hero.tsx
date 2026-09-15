import { Baby, Clock, UtensilsCrossed, Users } from 'lucide-react'
import { HeroScene } from '@/components/brand/hero-scene'
import { Highlighter } from '@/components/motion/highlighter'
import { Button } from '@/components/ui/button'
import { Card, IconCircle } from '@/components/ui/card'
import { Container } from '@/components/ui/layout'
import { Label } from '@/components/ui/typography'
import { facts, hero } from '@/content/site'

const factIcons = { clock: Clock, baby: Baby, home: Users, apple: UtensilsCrossed } as const

export function Hero() {
  return (
    <section id="top" className="pt-10 pb-20 md:pt-16 md:pb-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-[36rem]">
            {/* On phones the scene sits above the headline, still; on desktop it takes the right column. */}
            <HeroScene className="mb-8 w-full max-w-[360px] lg:hidden" />
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
            <p className="mt-7 flex flex-col gap-y-1 text-[0.9375rem] font-semibold text-ink-soft sm:flex-row sm:flex-wrap sm:gap-x-2.5">
              {hero.proof.map((item, i) => (
                <span key={item} className="inline-block whitespace-nowrap">
                  {i > 0 && <span aria-hidden="true" className="mr-2.5 hidden text-line sm:inline">·</span>}
                  {item}
                </span>
              ))}
            </p>
          </div>

          <HeroScene className="mx-auto hidden w-full max-w-[540px] lg:block" animate />
        </div>

        {/* At a glance: the four facts a parent scans for, as one contained object. */}
        <Card as="ul" aria-label="At a glance" className="mt-16 grid grid-cols-1 gap-y-6 p-7 sm:grid-cols-2 md:mt-24 md:grid-cols-4 md:gap-x-8">
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
