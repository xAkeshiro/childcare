import { Fragment } from 'react'
import { Block } from '@/components/brand/illustrations'
import { AnimatedGroup } from '@/components/motion/animated-group'
import { Reveal } from '@/components/motion/reveal'
import { Container, Section } from '@/components/ui/layout'
import { H2, Label, Lede } from '@/components/ui/typography'
import { abcs } from '@/content/site'

const tone = {
  red: 'text-crayon-red',
  blue: 'text-crayon-blue',
  green: 'text-crayon-green',
} as const

/** The values, where the alphabet blocks finally mean something: the letters are the content. */
export function Abcs() {
  return (
    <Section id="abcs" hairline>
      <Container>
        <Reveal className="max-w-[40rem]">
          <H2>{abcs.headline}</H2>
          <Lede className="mt-4">{abcs.intro}</Lede>
        </Reveal>
        <AnimatedGroup as="ul" className="mt-12 grid gap-x-10 gap-y-12 md:grid-cols-3" asChild="li" itemClassName="flex gap-5">
          {abcs.items.map((item) => (
            <Fragment key={item.letter}>
              <Block letter={item.letter} className={`w-24 shrink-0 ${tone[item.color]}`} title={`Block with the letter ${item.letter}`} />
              <div className="pt-1">
                <Label>{item.letter} is for</Label>
                <h3 className="mt-1 font-display text-h3 font-semibold text-ink">
                  {item.word}
                </h3>
                <p className="mt-3 max-w-[26rem] text-ink-soft">{item.text}</p>
              </div>
            </Fragment>
          ))}
        </AnimatedGroup>
      </Container>
    </Section>
  )
}
