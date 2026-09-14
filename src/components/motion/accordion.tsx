/**
 * Accordion with animated height, adapted from Motion Primitives (21st.dev).
 * Single-open by default. Uses proper button semantics and aria-expanded.
 */
import { AnimatePresence, motion } from 'motion/react'
import { createContext, useContext, useId, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type Ctx = { open: string | null; toggle: (v: string) => void; baseId: string }
const AccordionContext = createContext<Ctx | null>(null)

function useAccordion() {
  const ctx = useContext(AccordionContext)
  if (!ctx) throw new Error('Accordion parts must be used inside <Accordion>')
  return ctx
}

export function Accordion({ children, className, defaultOpen = null }: { children: ReactNode; className?: string; defaultOpen?: string | null }) {
  const [open, setOpen] = useState<string | null>(defaultOpen)
  const baseId = useId()
  const toggle = (v: string) => setOpen((cur) => (cur === v ? null : v))
  return (
    <AccordionContext.Provider value={{ open, toggle, baseId }}>
      <div className={cn('divide-y divide-line', className)}>{children}</div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ value, title, children, className }: { value: string; title: ReactNode; children: ReactNode; className?: string }) {
  const { open, toggle, baseId } = useAccordion()
  const isOpen = open === value
  const panelId = `${baseId}-${value}-panel`
  const buttonId = `${baseId}-${value}-button`
  return (
    <div className={className}>
      <h3 className="m-0">
        <button
          id={buttonId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => toggle(value)}
          className="group flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold text-ink transition-colors hover:text-accent focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 rounded-md"
        >
          <span>{title}</span>
          <span
            aria-hidden="true"
            className={cn(
              'relative grid size-7 shrink-0 place-items-center rounded-full border border-line text-ink transition-transform duration-300',
              isOpen && 'rotate-45',
            )}
          >
            <span className="absolute h-[2px] w-3 rounded bg-current" />
            <span className="absolute h-3 w-[2px] rounded bg-current" />
          </span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12 text-base leading-relaxed text-ink-soft">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
