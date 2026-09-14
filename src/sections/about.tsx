import { Check } from 'lucide-react'
import { Bulb } from '@/components/brand/illustrations'
import { Highlighter } from '@/components/motion/highlighter'
import { Reveal } from '@/components/motion/reveal'
import { Container, Section } from '@/components/ui/layout'
import { H2 } from '@/components/ui/typography'
import { about } from '@/content/site'

export function About() {
  return (
    <Section id="about">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="mx-auto w-full max-w-[420px] lg:max-w-none">
            {/* Photo in a white mat, the one floating object on the page. Replace the placeholder with
                <img src="/photo.jpg" alt={about.photoAlt} className="aspect-[4/5] w-full rounded-lg object-cover" /> */}
            <figure className="m-0 -rotate-1 rounded-xl border border-line bg-white p-3 shadow-lift">
              <div
                role="img"
                aria-label="Photo placeholder"
                className="grid aspect-[4/5] w-full place-items-center rounded-lg bg-[linear-gradient(160deg,var(--color-paper)_0%,var(--color-accent-soft)_100%)] text-center"
              >
                <div className="px-6">
                  <Bulb className="mx-auto h-24 w-auto" />
                  <p className="mt-4 text-[0.9375rem] font-bold text-ink-soft">Add a photo of the reading corner</p>
                </div>
              </div>
              <figcaption className="pt-3 text-center font-hand text-xl text-ink">{about.photoCaption}</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={0.08}>
            <H2>{about.headline}</H2>
            <div className="mt-6 space-y-5 text-[1.0625rem] leading-[1.7] text-ink-soft">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-9 max-w-[30rem] font-display text-[1.75rem] font-semibold leading-[1.3] text-ink">
              Every child has{' '}
              <Highlighter action="underline" color="var(--color-marker)" strokeWidth={3} padding={1} iterations={2}>
                little lightbulb moments
              </Highlighter>
              , the second something clicks and their whole face lights up. My job is to make room for as many of those as possible.
            </blockquote>
            <ul className="mt-9 grid gap-3 sm:grid-cols-2">
              {about.credentials.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-[0.9375rem] font-bold text-ink">
                  <Check className="mt-1 size-4 shrink-0 text-crayon-green-deep" strokeWidth={2.5} aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
