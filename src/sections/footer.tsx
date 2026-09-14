import { ThoughtBubble } from '@/components/brand/illustrations'
import { Container } from '@/components/ui/layout'
import { footer, nav, site } from '@/content/site'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line pb-10 pt-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5 rounded-md">
              <ThoughtBubble className="h-8 w-auto" />
              <span className="flex flex-col leading-none">
                <span className="font-display text-[1.125rem] font-semibold text-ink">{site.name}</span>
                <span className="mt-0.5 hidden text-label font-bold uppercase text-ink-soft sm:block">{site.descriptor}</span>
              </span>
            </a>
            <p className="mt-5 font-display text-lede font-semibold text-ink">{site.tagline}</p>
            <p className="mt-3 max-w-[30rem] text-[0.875rem] leading-relaxed text-ink-soft">{footer.license}</p>
          </div>
          <nav aria-label="Footer">
            <p className="text-label font-bold uppercase text-ink-soft">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="font-bold text-ink underline decoration-transparent decoration-[3px] underline-offset-[5px] transition-[text-decoration-color] hover:decoration-marker">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="text-label font-bold uppercase text-ink-soft">Visit</p>
            <address className="mt-4 space-y-2.5 not-italic text-ink">
              <p>{site.address[0]}<br />{site.address[1]}</p>
              <p>
                <a href={site.phone.href} className="font-bold underline decoration-marker decoration-[3px] underline-offset-[5px] hover:decoration-accent">{site.phone.display}</a>
                <br />
                <a href={site.email.href} className="font-bold underline decoration-marker decoration-[3px] underline-offset-[5px] hover:decoration-accent">{site.email.display}</a>
              </p>
              <p>{site.hours.days}<br />{site.hours.time}</p>
            </address>
          </div>
        </div>
        <div className="mt-12 flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line-soft pt-6 text-[0.875rem] text-ink-soft">
          <p>© {year} {site.name} {site.descriptor}. All rights reserved.</p>
          <p>{footer.made}</p>
        </div>
      </Container>
    </footer>
  )
}
