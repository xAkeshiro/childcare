import { Check } from 'lucide-react'
import { AnimatedGroup } from '@/components/motion/animated-group'
import { Reveal } from '@/components/motion/reveal'
import { Card } from '@/components/ui/card'
import { Container, Section } from '@/components/ui/layout'
import { H2, H3, Label, Lede } from '@/components/ui/typography'
import { programs } from '@/content/site'

const edge = { red: 'bg-crayon-red', blue: 'bg-crayon-blue', green: 'bg-crayon-green', orange: 'bg-crayon-orange' } as const

export function Programs() {
  return (
    <Section id="programs" hairline>
      <Container>
        <Reveal className="max-w-[40rem]">
          <H2>{programs.headline}</H2>
          <Lede className="mt-4">{programs.intro}</Lede>
        </Reveal>
        <AnimatedGroup className="mt-12 grid gap-6 md:grid-cols-3" itemClassName="flex">
          {programs.items.map((program) => (
            <Card key={program.name} as="article" className="flex w-full flex-col overflow-hidden">
              <div className={`h-1.5 ${edge[program.color]}`} aria-hidden="true" />
              <div className="flex flex-1 flex-col p-7">
                <Label>{program.ages}</Label>
                <H3 className="mt-2">{program.name}</H3>
                <p className="mt-3 text-ink-soft">{program.summary}</p>
                <ul className="mt-6 space-y-2.5 border-t border-line-soft pt-6">
                  {program.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-[0.9375rem] font-semibold text-ink">
                      <Check className="mt-1 size-4 shrink-0 text-crayon-green-deep" strokeWidth={2.5} aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </AnimatedGroup>
      </Container>
    </Section>
  )
}
