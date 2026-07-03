'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE     = [0.25, 0.1, 0.25, 1] as const
const SPRING   = [0.32, 0.72, 0, 1] as const

export function MissingChannel() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow py-10 lg:py-14" aria-labelledby="channel-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            className="flex items-center justify-center gap-3 mb-5"
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}
          >
            <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
            <p
              className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium leading-none"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              The missing channel
            </p>
          </motion.div>

          <motion.h2
            id="channel-heading"
            className="text-[1.875rem] lg:text-[2.625rem] xl:text-[3rem] leading-[1.15] tracking-[-0.03em] text-anthracite italic mb-7 lg:mb-8 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: EASE }}
          >
            Between trade work and four-year programs, there's no standard route into construction management.
          </motion.h2>
        </div>

        {/* The two options, and the gap between them */}
        <motion.div
          className="flex items-center max-w-3xl mx-auto mb-7 lg:mb-8"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}
        >
          <div className="flex-1 border-t border-anthracite/20 pt-4 text-right">
            <p
              className="text-[10.5px] uppercase tracking-[0.14em] text-anthracite/45 mb-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Option one
            </p>
            <p
              className="text-[1.25rem] lg:text-[1.5rem] italic text-anthracite leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
            >
              Four-year program
            </p>
          </div>

          <div className="flex flex-col items-center flex-shrink-0 px-8 lg:px-12 pt-4">
            <span className="w-[8px] h-[8px] rotate-45 bg-datum mb-2.5" aria-hidden="true" />
            <p
              className="text-[9.5px] uppercase tracking-[0.1em] text-datum whitespace-nowrap"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              no bridge
            </p>
          </div>

          <div className="flex-1 border-t border-anthracite/20 pt-4">
            <p
              className="text-[10.5px] uppercase tracking-[0.14em] text-anthracite/45 mb-2"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Option two
            </p>
            <p
              className="text-[1.25rem] lg:text-[1.5rem] italic text-anthracite leading-[1.1]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
            >
              Trade route
            </p>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            className="text-[15px] text-anthracite/70 leading-[1.65] mb-4 max-w-[62ch] mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.07, ease: EASE }}
          >
            The construction industry needs managers, estimators, schedulers, safety leaders, BIM
            coordinators, and field-ready professionals. Yet most learners see only two incomplete
            options: a four-year degree, or a trade route with no visible bridge into management-track
            work.
          </motion.p>

          <motion.p
            className="text-[15px] text-anthracite/70 leading-[1.65] mb-7 lg:mb-8 max-w-[62ch] mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.13, ease: EASE }}
          >
            Between those two sits a missing channel: a practical, employer-facing route for capable
            adults and students to prepare for construction-management careers. Aedifica builds that
            route.
          </motion.p>

          <motion.p
            className="text-[1.25rem] lg:text-[1.5rem] text-anthracite/85 leading-[1.35] italic mx-auto max-w-[42ch]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.19, ease: EASE }}
          >
            A pathway is credible only when it connects preparation to employer relevance, articulation
            opportunities, and outcomes that can be reported honestly.
          </motion.p>
        </div>

      </div>
    </section>
  )
}
