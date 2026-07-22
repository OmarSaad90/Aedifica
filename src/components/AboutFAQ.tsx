'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const FAQS = [
  { q: 'How is Aedifica different from a training vendor?', a: 'A vendor sells a class. Aedifica builds a pathway: employer-validated curriculum, credential articulation, defined interview commitments, and same-definition outcome reporting installed before cohort one. Curriculum without those commitments is a class.', group: 'partners' },
  { q: 'What outcomes do you report, and how?', a: 'Placement rate, credential attainment, wage at placement, and apprenticeship articulation, defined identically every cohort and published as cohorts complete. We do not redefine "placement" to inflate headlines.', group: 'partners' },
  { q: 'Do you replace our staff or systems?', a: 'No. Community organizations own recruitment and case management; colleges and boards own fiscal capacity and reporting; employers own role definitions. Aedifica owns curriculum, instruction, capstone design, and measurement, and stays in that lane.', group: 'partners' },
  { q: 'What does a partnership start with?', a: 'A conversation, then a scoped brief: your audience, your funding stream, the four commitments (recruitment, funding, employer, articulation), and a delivery calendar. Most partners start with one program door and expand along the pathway.', group: 'partners' },
  { q: 'Who pays for Aedifica programs?', a: "Institutional partners do: districts, workforce boards, agencies, employers, and philanthropy, aligned to New Jersey's funded green and apprenticeship priorities. Programs are provided at no cost to learners.", group: 'families' },
  { q: 'Is there any cost to my child or family?', a: 'No. Aedifica programs are funded through schools, workforce partners, employers, and philanthropy. Learners never pay.', group: 'families' },
  { q: 'What ages and stages is this for?', a: 'Middle school (Explore), high school (Pathway), and adults (Rebuild). Each program is built for one stage of the same pathway.', group: 'families' },
  { q: 'Is it safe and supervised?', a: 'Yes. Programs are delivered with appropriate supervision and student-data-privacy practices aligned to FERPA.', group: 'families' },
  { q: "How do I bring Aedifica to my child's school?", a: 'Tell us your school or community organization on the contact form and we will follow up. Many partnerships begin because a parent or an educator asked.', group: 'families' },
] as const

const FAQ_GROUPS = [
  { key: 'partners', label: 'For partners & institutions' },
  { key: 'families', label: 'For families & students' },
] as const

export function AboutFAQ() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<string | null>(null)

  return (
    <section id="faq" className="bg-bone py-14 lg:py-20 scroll-mt-24" aria-labelledby="faq-h2">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="flex items-center justify-center gap-3 mb-5"
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
          <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
          <p className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium" style={{ fontFamily: 'var(--font-body)' }}>Frequently asked questions</p>
        </motion.div>
        <motion.h2
          id="faq-h2"
          className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-10 lg:mb-12 max-w-[32ch] mx-auto text-center [text-wrap:balance] scroll-mt-24"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 22 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
          The questions boards, superintendents, and families actually ask.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14 xl:gap-x-16">
          {FAQ_GROUPS.map(({ key, label }, gi) => (
            <div key={key} className={gi === 1 ? 'mt-10 lg:mt-0' : ''}>
              <motion.p
                className="text-[11px] uppercase tracking-[0.16em] text-anthracite/65 font-medium mb-3 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: gi * 0.08, ease: EASE }}>
                {label}
              </motion.p>
              <div className="border-t border-sediment/25">
                {FAQS.filter(f => f.group === key).map(({ q, a }, i) => {
                  const isOpen = open === q
                  return (
                    <motion.div
                      key={q}
                      className="border-b border-sediment/25"
                      initial={reduce ? undefined : { opacity: 0, y: 10 }}
                      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                      viewport={reduce ? undefined : VIEWPORT}
                      transition={reduce ? undefined : { duration: 0.35, delay: Math.min(i * 0.05, 0.25), ease: EASE }}>
                      <button
                        className="w-full text-left py-5 flex items-start justify-between gap-6 hover:bg-snow/60 transition-colors duration-150"
                        onClick={() => setOpen(isOpen ? null : q)}
                        aria-expanded={isOpen}
                        aria-controls={`faq-body-${key}-${i}`}>
                        <span className="text-[14.5px] lg:text-[15px] text-anthracite font-medium leading-[1.4] tracking-[-0.01em]" style={{ fontFamily: 'var(--font-body)' }}>{q}</span>
                        <motion.span
                          className="flex-shrink-0 text-anthracite/40 mt-1"
                          animate={{ rotate: isOpen ? 180 : 0 }}
                          transition={{ duration: 0.2, ease: EASE }}>
                          <CaretDown size={14} aria-hidden="true" />
                        </motion.span>
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-body-${key}-${i}`}
                            initial={reduce ? undefined : { height: 0, opacity: 0 }}
                            animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                            exit={reduce ? undefined : { height: 0, opacity: 0 }}
                            transition={reduce ? undefined : { duration: 0.22, ease: EASE }}
                            style={{ overflow: 'hidden' }}>
                            <p className="text-[13px] text-anthracite/75 leading-[1.68] pb-6 max-w-[52ch]" style={{ fontFamily: 'var(--font-body)' }}>{a}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )
                })}
              </div>

              {key === 'partners' && (
                <motion.p
                  className="text-[13px] text-anthracite/65 leading-[1.6] pt-6"
                  style={{ fontFamily: 'var(--font-body)' }}
                  initial={reduce ? undefined : { opacity: 0 }}
                  whileInView={reduce ? undefined : { opacity: 1 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: 0.3, ease: EASE }}>
                  A different question for your district, board, or company?{' '}
                  <Link href="/partner" className="text-datum underline underline-offset-2 decoration-datum/40 hover:decoration-datum transition-colors duration-150">Talk to the team</Link>.
                </motion.p>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
