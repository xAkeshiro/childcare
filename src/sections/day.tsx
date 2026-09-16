import { Reveal } from '@/components/motion/reveal'
import { Container, Section } from '@/components/ui/layout'
import { H2, Lede } from '@/components/ui/typography'
import { day } from '@/content/site'

/**
 * The daily rhythm as a professional itinerary: three named phases, each a
 * short table of times. Hairlines and tabular numerals do the work; there is
 * no paper texture, card, or shadow.
 */
export function Day() {
  return (
    <Section id="day" hairline>
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-28">
            <H2>{day.headline}</H2>
            <Lede className="mt-4">{day.intro}</Lede>
            <p className="mt-5 text-[0.9375rem] font-semibold text-ink-soft">{day.note}</p>
          </Reveal>

          <Reveal delay={0.08} className="space-y-12">
            {day.phases.map((phase) => (
              <div key={phase.name}>
                <div className="flex items-baseline justify-between gap-6 border-b-2 border-ink pb-2.5">
                  <h3 className="font-display text-[1.25rem] font-semibold text-ink">{phase.name}</h3>
                  <p className="text-label font-bold uppercase tabular-nums text-ink-soft">{phase.range}</p>
                </div>
                <ol>
                  {phase.items.map((item) => (
                    <li
                      key={item.time}
                      className="grid grid-cols-[4rem_1fr] gap-x-5 border-b border-line-soft py-5 last:border-b-0 sm:grid-cols-[5rem_1fr] sm:gap-x-8"
                    >
                      <span className="pt-0.5 text-right font-display text-[1.0625rem] font-semibold tabular-nums text-accent">
                        {item.time}
                      </span>
                      <div>
                        <p className="font-bold text-ink">{item.title}</p>
                        <p className="mt-1 text-[0.9375rem] leading-relaxed text-ink-soft">{item.detail}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
