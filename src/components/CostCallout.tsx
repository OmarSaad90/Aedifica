'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

export function CostCallout() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-12 lg:py-18" aria-labelledby="cost-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-20 lg:items-start">

          <div>
            <motion.h2
              id="cost-heading"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-7 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              Cost is not the barrier that determines access.
            </motion.h2>

            <motion.p
              className="text-[15px] text-anthracite/80 leading-[1.72] mb-6"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
              Aedifica is designed to work through schools, workforce systems, grants, employer partnerships, and community-based organizations so that cost is not the barrier that determines who gets access to opportunity.
            </motion.p>

            <motion.p
              className="text-[13.5px] text-anthracite/80 leading-[1.7]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.14, ease: EASE }}>
              Participant cost, scholarships, stipends, and supports vary by cohort and partner. Reach out to ask what's available for your situation.
            </motion.p>
          </div>

          <div className="mt-10 lg:mt-0">
            <motion.div
              className="bg-snow px-8 py-10"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              <p
                className="text-[1.75rem] lg:text-[2.125rem] xl:text-[2.5rem] leading-[1.2] tracking-[-0.028em] italic text-anthracite mb-7 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                Aedifica does not charge participants directly.
              </p>
              <div className="border-t border-sediment/25 pt-6">
                <p
                  className="text-[10.5px] text-ink-soft font-semibold uppercase tracking-[0.18em] mb-3 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  How it works
                </p>
                <p
                  className="text-[14px] text-anthracite/75 leading-[1.65]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Programs run through institutional partners who secure funding through WIOA, workforce grants, employer contributions, or philanthropy.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="mt-5"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.18, ease: EASE }}>
              <Link href="/partner"
                className="inline-flex items-center gap-2 text-[13.5px] text-anthracite tracking-[-0.01em] group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Ask about funding and access
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
