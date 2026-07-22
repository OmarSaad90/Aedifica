'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

export function SharedPrinciples() {
  const reduce = useReducedMotion()

  return (
    <section
      className="bg-snow py-12 lg:py-18"
      aria-labelledby="principles-heading">
      <div className="max-w-7xl mx-auto px-6">

        <motion.p
          className="text-[10.5px] text-anthracite/75 uppercase tracking-[0.22em] mb-12 lg:mb-16 select-none"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
          Shared principles
        </motion.p>

        {/* Pair 1 — Role relevance (feature, left) + Employer validation (supporting, right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] lg:gap-16 xl:gap-24 pb-8 lg:pb-12 lg:items-start">
          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 32 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            <h3
              className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4.25rem] leading-[1.05] tracking-[-0.03em] text-datum italic mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Role relevance
            </h3>
            <p
              className="text-[15px] text-anthracite/75 leading-[1.72] max-w-[54ch]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Program components must connect to real construction-management work and realistic
              progression opportunities.
            </p>
          </motion.div>

          <motion.div
            className="mt-8 lg:mt-16"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
            <h3
              className="text-[1.25rem] lg:text-[1.625rem] xl:text-[2rem] leading-[1.15] tracking-[-0.015em] text-datum mb-3"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
              Employer validation
            </h3>
            <p
              className="text-[13.5px] text-anthracite/75 leading-[1.7]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Employers should inform expectations, interact with learners, and help verify the
              relevance of preparation.
            </p>
          </motion.div>
        </div>

        <div className="border-t border-sediment/20" />

        {/* Pair 2 — Institutional alignment (supporting, left) + Outcome accountability (feature, right) */}
        <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] lg:gap-16 xl:gap-24 pt-8 lg:pt-12 lg:items-start">
          <motion.div
            className="lg:mt-16"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
            <h3
              className="text-[1.25rem] lg:text-[1.625rem] xl:text-[2rem] leading-[1.15] tracking-[-0.015em] text-datum mb-3"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
              Institutional alignment
            </h3>
            <p
              className="text-[13.5px] text-anthracite/75 leading-[1.7]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Delivery must be aligned to recruitment capacity, funding structures, support
              services, and articulation opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? undefined : { opacity: 0, y: 32 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, delay: 0.12, ease: SPRING }}>
            <h3
              className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4.25rem] leading-[1.05] tracking-[-0.03em] text-datum italic mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Outcome accountability
            </h3>
            <p
              className="text-[15px] text-anthracite/75 leading-[1.72] max-w-[54ch]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Aedifica intends to report what happens after instruction: clearly, consistently,
              and without substituting enrollment for impact.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
