'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'
import { FAQS } from '@/src/lib/faqData'

const VIEWPORT = { once: true, margin: '80px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

export function FAQ() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (key: string) => setOpen(prev => (prev === key ? null : key))

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[44vh] flex flex-col justify-end pb-14 lg:pb-20 relative overflow-hidden"
        aria-labelledby="faq-h1">

        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            FAQ &amp; Eligibility
          </motion.span>

          <motion.h1
            id="faq-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-8 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Frequently asked questions.
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/60 leading-[1.65] max-w-[56ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
            Answers about Aedifica programs, eligibility, applications, cost, and participation. If your question is not here, contact us directly.
          </motion.p>
        </div>
      </section>

      {/* ── FAQ accordion ── paired grid: each row's two categories start level
          (General|Cost, Eligibility|Participation, Application|Partners & Outcomes),
          with Technical Support centered below. */}
      <section className="bg-snow py-14 lg:py-20" aria-label="Frequently asked questions">
        <div className="max-w-7xl mx-auto px-6">

          {(() => {
            // Explicit grid placement keeps the logical reading order in the DOM
            // (mobile + screen readers) while pairing rows visually at lg.
            const GRID_POS: Record<string, string> = {
              'General':             'lg:col-start-1 lg:row-start-1',
              'Eligibility':         'lg:col-start-1 lg:row-start-2',
              'Application':         'lg:col-start-1 lg:row-start-3',
              'Cost':                'lg:col-start-2 lg:row-start-1',
              'Participation':       'lg:col-start-2 lg:row-start-2',
              'Partners & Outcomes': 'lg:col-start-2 lg:row-start-3',
            }

            const renderCategory = (category: string, items: readonly { q: string; a: string }[], extraClass: string, centered: boolean) => {
              const ci = FAQS.findIndex(g => g.category === category)
              return (
                <motion.div
                  key={category}
                  className={extraClass}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.5, delay: 0.05, ease: EASE }}>

                  <h2
                    className={`text-[1.625rem] lg:text-[1.875rem] italic text-anthracite leading-[1.1] tracking-[-0.022em] mb-5 pb-4 border-b border-sediment/25 ${centered ? 'text-center' : ''}`}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {category}
                  </h2>

                  <div className="divide-y divide-sediment/18">
                    {items.map((item, qi) => {
                      const key = `${ci}-${qi}`
                      const isOpen = open === key
                      return (
                        <div key={qi}>
                          <button
                            onClick={() => toggle(key)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-panel-${key}`}
                            className="w-full flex items-start justify-between gap-6 py-5 text-left group">
                            <span
                              className="text-[15px] lg:text-[15.5px] text-anthracite leading-[1.45] tracking-[-0.01em]"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              {item.q}
                            </span>
                            <motion.span
                              animate={reduce ? undefined : { rotate: isOpen ? 180 : 0 }}
                              transition={reduce ? undefined : { duration: 0.25, ease: EASE }}
                              className="flex-shrink-0 mt-0.5 text-anthracite/40 transition-colors duration-150 group-hover:text-anthracite"
                              aria-hidden="true">
                              <CaretDown size={16} weight="bold" />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                id={`faq-panel-${key}`}
                                key="panel"
                                initial={reduce ? undefined : { height: 0, opacity: 0 }}
                                animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                                transition={reduce ? undefined : { duration: 0.3, ease: EASE }}
                                style={{ overflow: 'hidden' }}>
                                <p
                                  className="text-[14px] text-anthracite/80 leading-[1.75] pb-6 max-w-[70ch]"
                                  style={{ fontFamily: 'var(--font-body)' }}>
                                  {item.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>

                </motion.div>
              )
            }

            const paired = FAQS.filter(g => g.category !== 'Technical Support')
            const tech = FAQS.find(g => g.category === 'Technical Support')

            return (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-16 lg:gap-x-14 xl:gap-x-20 items-start">
                  {paired.map(({ category, items }) =>
                    renderCategory(category, items, GRID_POS[category] ?? '', false)
                  )}
                </div>
                {tech && (
                  <div className="mt-12 lg:mt-16 lg:max-w-3xl lg:mx-auto">
                    {renderCategory(tech.category, tech.items, '', true)}
                  </div>
                )}
              </>
            )
          })()}

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bone py-12 lg:py-16" aria-label="Contact Aedifica">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-center gap-8">
            <div>
              <motion.h2
                className="text-[1.75rem] lg:text-[2.25rem] italic text-anthracite leading-[1.1] tracking-[-0.025em] mb-3 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
                Still have a question?
              </motion.h2>
              <motion.p
                className="text-[14px] text-anthracite/80 leading-[1.65] max-w-[54ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
                Contact Aedifica directly. We respond to questions from learners, families, schools, and partner organizations.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
              <Link href="/partner"
                className="inline-flex items-center gap-2 bg-anthracite text-white text-[13.5px] tracking-[-0.01em] px-7 py-3 hover:bg-anthracite/88 active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: 'var(--font-body)' }}>
                Contact Aedifica
              </Link>
              <Link href="/apply"
                className="inline-flex items-center gap-2 border border-anthracite/25 text-anthracite text-[13.5px] tracking-[-0.01em] px-7 py-3 hover:border-anthracite/50 active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: 'var(--font-body)' }}>
                View Apply page
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}
