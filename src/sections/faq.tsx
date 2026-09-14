import { Accordion, AccordionItem } from '@/components/motion/accordion'
import { Reveal } from '@/components/motion/reveal'
import { Container, Section } from '@/components/ui/layout'
import { H2 } from '@/components/ui/typography'
import { faq } from '@/content/site'

export function Faq() {
  return (
    <Section id="faq" hairline>
      <Container>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] lg:gap-16">
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
