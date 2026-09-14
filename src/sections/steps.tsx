import { AnimatedGroup } from '@/components/motion/animated-group'
import { Reveal } from '@/components/motion/reveal'
import { Container, Section } from '@/components/ui/layout'
import { H2, H3 } from '@/components/ui/typography'
import { steps } from '@/content/site'

/** Enrollment is a real sequence, so the numbers carry information here. */
export function Steps() {
  return (
    <Section id="how" hairline className="py-20 md:py-24">
      <Container>
        <Reveal>
          <H2>{steps.headline}</H2>
        </Reveal>
        <AnimatedGroup as="ol" className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8" asChild="li">
          {steps.items.map((step, i) => (
            <div key={step.title} className="border-t-2 border-ink pt-5">
              <span className="font-display text-lede font-semibold text-accent tabular-nums">0{i + 1}</span>
              <H3 className="mt-2">{step.title}</H3>
              <p className="mt-2 text-ink-soft">{step.text}</p>
            </div>
          ))}
        </AnimatedGroup>
      </Container>
    </Section>
  )
}
