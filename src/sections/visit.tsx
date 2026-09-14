import { useState, type FormEvent } from 'react'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { Handprint } from '@/components/brand/illustrations'
import { Reveal } from '@/components/motion/reveal'
import { Button } from '@/components/ui/button'
import { Card, IconCircle } from '@/components/ui/card'
import { Container, Section } from '@/components/ui/layout'
import { H2, H3, Label, Lede } from '@/components/ui/typography'
import { site, visit } from '@/content/site'

const field =
  'w-full rounded-md border border-line bg-white px-3.5 py-3 text-base text-ink placeholder:text-ink-soft/70 transition-[border-color,box-shadow] duration-200 focus:border-accent focus:outline-none focus:ring-4 focus:ring-ring/25'
const labelClass = 'mb-1.5 block text-[0.9375rem] font-bold text-ink'

export function Visit() {
  const [notice, setNotice] = useState<string | null>(null)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    if (site.formAction.includes('YOUR_FORM_ID')) {
      e.preventDefault()
      setNotice(visit.form.notConnected)
    }
  }

  return (
    <Section id="visit" hairline>
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          <Reveal className="relative">
            <H2>{visit.headline}</H2>
            <Lede className="mt-4">{visit.intro}</Lede>

            <ul className="mt-10 grid gap-6 sm:grid-cols-2">
              <li className="flex items-start gap-3.5">
                <IconCircle><Phone className="size-5" strokeWidth={1.75} aria-hidden="true" /></IconCircle>
                <div>
                  <Label>Call or text</Label>
                  <a href={site.phone.href} className="mt-1 block font-bold text-ink underline decoration-marker decoration-[3px] underline-offset-[5px] hover:decoration-accent">{site.phone.display}</a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <IconCircle><Mail className="size-5" strokeWidth={1.75} aria-hidden="true" /></IconCircle>
                <div>
                  <Label>Email</Label>
                  <a href={site.email.href} className="mt-1 block font-bold text-ink underline decoration-marker decoration-[3px] underline-offset-[5px] hover:decoration-accent">{site.email.display}</a>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <IconCircle><MapPin className="size-5" strokeWidth={1.75} aria-hidden="true" /></IconCircle>
                <div>
                  <Label>Find us</Label>
                  <p className="mt-1 font-bold text-ink">{site.address[0]}<br />{site.address[1]}</p>
                </div>
              </li>
              <li className="flex items-start gap-3.5">
                <IconCircle><Clock className="size-5" strokeWidth={1.75} aria-hidden="true" /></IconCircle>
                <div>
                  <Label>Tours</Label>
                  <p className="mt-1 text-[0.9375rem] font-semibold text-ink-soft">{visit.tours}</p>
                </div>
              </li>
            </ul>

            {/* The handprints: three, overlapping, in one place on the whole page. */}
            <div className="mt-14 flex items-end" aria-hidden="true">
              <Handprint className="h-16 w-auto -rotate-12 text-crayon-red" />
              <Handprint className="-ml-4 h-20 w-auto rotate-3 text-crayon-blue" />
              <Handprint className="-ml-5 h-14 w-auto rotate-12 text-crayon-green" />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <Card as="form" action={site.formAction} method="POST" onSubmit={onSubmit} className="p-6 sm:p-8">
              <H3>{visit.form.title}</H3>
              <div className="mt-6 grid gap-5">
                <div>
                  <label htmlFor="parent-name" className={labelClass}>Your name</label>
                  <input id="parent-name" name="name" type="text" autoComplete="name" required className={field} />
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="parent-email" className={labelClass}>Email</label>
                    <input id="parent-email" name="email" type="email" autoComplete="email" required className={field} />
                  </div>
                  <div>
                    <label htmlFor="parent-phone" className={labelClass}>Phone</label>
                    <input id="parent-phone" name="phone" type="tel" autoComplete="tel" className={field} />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="child-age" className={labelClass}>Your child is</label>
                    <select id="child-age" name="child_age" className={field}>
                      {visit.form.childOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="start-date" className={labelClass}>Hoping to start</label>
                    <input id="start-date" name="start" type="month" className={field} />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Anything we should know? <span className="font-semibold text-ink-soft">(optional)</span>
                  </label>
                  <textarea id="message" name="message" rows={4} placeholder={visit.form.messagePlaceholder} className={field} />
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-1">
                  <Button type="submit" size="lg">{visit.form.submit}</Button>
                  <p className="text-[0.875rem] text-ink-soft">{visit.form.privacy}</p>
                </div>
                {notice && (
                  <p role="status" className="rounded-md bg-accent-soft px-4 py-3 text-[0.9375rem] font-semibold text-ink">
                    {notice}
                  </p>
                )}
              </div>
            </Card>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
