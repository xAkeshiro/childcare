import { Accordion, AccordionItem } from '@/components/motion/accordion'
import { Reveal } from '@/components/motion/reveal'
import { Container, Section } from '@/components/ui/layout'
import { H2 } from '@/components/ui/typography'
import { faq } from '@/content/site'

export function Faq() {
  return (
    <Section id="faq" hairline>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20">
          <Reveal>
            <H2>{faq.headline}</H2>
            <p className="mt-4 text-ink-soft">Anything else? Ask on your visit, or send a note below.</p>
          </Reveal>
          <Reveal delay={0.08}>
            <Accordion defaultOpen="q0" className="border-t border-line">
              {faq.items.map((item, i) => (
                <AccordionItem key={item.q} value={`q${i}`} title={item.q}>
                  {item.a}
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
