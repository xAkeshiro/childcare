import { Reveal } from '@/components/motion/reveal'
import { Container, Section } from '@/components/ui/layout'
import { H2, Lede } from '@/components/ui/typography'
import { day } from '@/content/site'

/**
 * The daily schedule on ruled paper. Rules repeat every 32px and every text
 * line is 32px tall, so words sit on the lines the way handwriting would.
 */
export function Day() {
  return (
    <Section id="day" hairline>
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28">
            <H2>{day.headline}</H2>
            <Lede className="mt-4">{day.intro}</Lede>
            <p className="mt-5 text-[0.9375rem] font-semibold text-ink-soft">{day.note}</p>
          </Reveal>

          <Reveal delay={0.08}>
            <ol className="ruled-paper rounded-lg border border-line px-6 pb-8 pt-8 shadow-soft sm:px-8" aria-label="Daily schedule">
              {day.items.map((item) => (
                <li key={item.time} className="grid grid-cols-[4.5rem_1fr] gap-x-4 sm:grid-cols-[5.5rem_1fr]">
                  <span className="h-8 font-display text-[1.125rem] font-semibold leading-8 text-accent tabular-nums">{item.time}</span>
                  <div>
                    <p className="font-display text-[1.125rem] font-semibold leading-8 text-ink">{item.title}</p>
                    <p className="pb-8 leading-8 text-ink-soft">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
