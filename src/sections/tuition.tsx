import { Check } from 'lucide-react'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Container, Section } from '@/components/ui/layout'
import { H2, Label, Lede } from '@/components/ui/typography'
import { tuition } from '@/content/site'

/** One plan, one number. The daily rate is the headline; billing terms sit under it in plain words. */
export function Tuition() {
  return (
    <Section id="tuition" hairline>
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <H2>{tuition.headline}</H2>
            <Lede className="mt-4">{tuition.intro}</Lede>
            <p className="mt-5 text-[0.9375rem] font-semibold text-ink-soft">{tuition.note}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <Card className="p-7">
              <div className="flex flex-wrap items-end justify-between gap-x-8 gap-y-4">
                <div>
                  <Label>{tuition.plan}</Label>
                  <p className="mt-2 flex items-baseline gap-2">
                    <span className="font-display text-[3.25rem] font-semibold leading-none tracking-tight text-ink tabular-nums">{tuition.perDay}</span>
                    <span className="text-lede font-semibold text-ink-soft">{tuition.unit}</span>
                  </p>
                  <p className="mt-3 text-[0.9375rem] font-semibold text-ink-soft">{tuition.billing}</p>
                </div>
                <Button href={tuition.cta.href} size="lg" className="w-full sm:w-auto">
                  {tuition.cta.label}
                </Button>
              </div>
              <ul className="mt-8 grid gap-3 border-t border-line-soft pt-7 sm:grid-cols-2">
                {tuition.included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[0.9375rem] font-semibold text-ink">
                    <Check className="mt-1 size-4 shrink-0 text-crayon-green-deep" strokeWidth={2.5} aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
