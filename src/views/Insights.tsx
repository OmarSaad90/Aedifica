'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const


export function Insights() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[44vh] flex flex-col justify-end pb-14 lg:pb-20 relative overflow-hidden"
        aria-labelledby="insights-h1">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Insights &amp; Resources
          </motion.span>

          <motion.h1
            id="insights-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-10 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Resources for building the builders.
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/60 leading-[1.65] max-w-[58ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
            Tools and perspectives to understand construction-management pathways, prepare for programs, support learners, and design stronger education-to-workforce partnerships.
          </motion.p>

        </div>
      </section>

      {/* ── Resource Hub ── bg-snow */}
      <section className="bg-snow py-12 lg:py-18" aria-labelledby="resources-heading">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="resources-heading"
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic mb-3 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            Resources by audience.
          </motion.h2>
          <motion.p
            className="text-[14px] text-anthracite/75 leading-[1.7] max-w-[60ch] mb-12 lg:mb-14"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            Resources below are in development and available on request. Contact Aedifica to receive any item directly.
          </motion.p>

          {([
            {
              audience: 'Learners and students',
              items: [
                'What is construction management?',
                'Construction career map',
                'Basic construction vocabulary guide',
                'Project lifecycle overview',
                'Portfolio artifact examples',
                'Resume and interview preparation worksheet',
              ],
            },
            {
              audience: 'Families',
              items: [
                'Family guide to construction-management careers',
                'What students will learn in Aedifica programs',
                'How families can support attendance and completion',
                'Safety and participation expectations',
                'College, credential, and career pathway overview',
              ],
            },
            {
              audience: 'Educators and schools',
              items: [
                'Sample lesson overview',
                'Pathway implementation checklist',
                'Career speaker guide',
                'Capstone rubric',
                'Teacher professional development inquiry form',
              ],
            },
            {
              audience: 'Partners and applicants',
              items: [
                'Program comparison guide',
                'Application checklist',
                'Interest statement worksheet',
                'Interview preparation guide',
                'Rebuild cohort calendar (available when announced)',
              ],
            },
          ] as const).map(({ audience, items }, i) => (
            <motion.div
              key={audience}
              className="grid grid-cols-1 lg:grid-cols-[220px_1fr] border-t border-sediment/20 py-6 lg:py-7 gap-4 lg:gap-12"
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.42, delay: i * 0.05, ease: EASE }}>
              <p
                className="text-[13.5px] text-anthracite italic leading-none tracking-[-0.015em] pt-0.5"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                {audience}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2">
                {items.map(item => (
                  <li key={item} className="flex gap-2.5 items-start">
                    <span className="w-[3px] h-[3px] bg-sediment/60 rounded-full flex-shrink-0 mt-[8px]" aria-hidden="true" />
                    <span
                      className="text-[13px] text-anthracite/75 leading-[1.55]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <div className="border-t border-sediment/20 pt-7">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.42, ease: EASE }}>
              <Link href="/partner"
                className="inline-flex items-center gap-2 text-[13.5px] text-datum tracking-[-0.01em] group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Request a resource or ask about availability
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── CTA Block ── bg-snow pb-0, contained datum block */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Partner with Aedifica">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-datum px-10 pt-10 pb-10 lg:px-16 lg:pt-14 lg:pb-12 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              The resources you need are available on request.
            </h2>

            <p
              className="text-[15px] text-white/90 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Contact Aedifica to receive any resource directly, discuss employer validation, accountability frameworks, or institutional partnerships.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/partner"
                className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/92"
                style={{ fontFamily: 'var(--font-body)' }}>
                Start a Partnership Conversation
              </Link>
              <Link href="/impact"
                className="inline-flex items-center justify-center border border-white/30 text-white text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/8"
                style={{ fontFamily: 'var(--font-body)' }}>
                View the Impact Framework
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
