import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Menu, X } from 'lucide-react'
import { Bulb } from '@/components/brand/illustrations'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/layout'
import { nav, site } from '@/content/site'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 bg-paper/90 backdrop-blur-md transition-shadow duration-300',
        scrolled ? 'shadow-[0_1px_0_rgba(47,42,68,0.08)]' : 'shadow-none',
      )}
    >
      <Container className="relative flex h-16 items-center gap-6 md:h-[4.5rem]">
        <a href="#top" className="flex items-center gap-2.5 rounded-md" aria-label={`${site.name}, back to top`}>
          <Bulb className="h-9 w-auto" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[1.125rem] font-semibold text-ink">{site.name}</span>
            <span className="mt-0.5 hidden text-label font-bold uppercase text-ink-soft sm:block">{site.descriptor}</span>
          </span>
        </a>

        <nav aria-label="Main" className="ml-auto hidden items-center gap-7 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-sm text-[0.9375rem] font-bold text-ink underline decoration-transparent decoration-[3px] underline-offset-[6px] transition-[text-decoration-color] duration-200 hover:decoration-marker"
            >
              {item.label}
            </a>
          ))}
          <Button href="#visit" size="sm">
            Schedule a visit
          </Button>
        </nav>

        <button
          type="button"
          className="ml-auto grid size-10 place-items-center rounded-md text-ink md:hidden"
          aria-expanded={open}
          aria-controls="site-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.nav
              id="site-nav"
              aria-label="Main"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="absolute left-5 right-5 top-full mt-2 flex flex-col gap-1 rounded-xl border border-line bg-paper-2 p-3 shadow-lift md:hidden"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-3 text-base font-bold text-ink hover:bg-paper"
                >
                  {item.label}
                </a>
              ))}
              <Button href="#visit" className="mt-2" onClick={() => setOpen(false)}>
                Schedule a visit
              </Button>
            </motion.nav>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}
