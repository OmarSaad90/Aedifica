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

        {/* The two options, and the broken line between them */}
        <motion.div
          className="max-w-3xl mx-auto mb-8 lg:mb-10"
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}
        >
          {/* The route, interrupted: a line drawn from each side that stops short */}
          <div className="flex items-center">
            <div className="flex-1 relative border-t border-anthracite/25">
              <span
                className="absolute right-0 top-0 -translate-y-1/2 w-[9px] h-[9px] rotate-45 bg-datum"
                aria-hidden="true"
              />
            </div>
            <p
              className="flex-shrink-0 px-5 lg:px-7 text-[11px] lg:text-[12px] uppercase tracking-[0.12em] text-datum whitespace-nowrap"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              no bridge
            </p>
            <div className="flex-1 relative border-t border-anthracite/25">
              <span
                className="absolute left-0 top-0 -translate-y-1/2 w-[9px] h-[9px] rotate-45 bg-datum"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* The two options, converging toward the break */}
          <div className="flex items-start mt-5 lg:mt-6">
            <div className="flex-1 text-right">
              <p
                className="text-[10.5px] uppercase tracking-[0.14em] text-anthracite/45 mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Option one
              </p>
              <p
                className="text-[1.625rem] lg:text-[1.875rem] italic text-anthracite leading-[1.1]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
              >
                Four-year program
              </p>
            </div>
            <div className="flex-shrink-0 px-5 lg:px-7" aria-hidden="true" />
            <div className="flex-1 text-left">
              <p
                className="text-[10.5px] uppercase tracking-[0.14em] text-anthracite/45 mb-2"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Option two
              </p>
              <p
                className="text-[1.625rem] lg:text-[1.875rem] italic text-anthracite leading-[1.1]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
              >
                Trade route
              </p>
            </div>
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
