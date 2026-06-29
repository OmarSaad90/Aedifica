import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE     = [0.25, 0.1, 0.25, 1] as const

export function TheGap() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-anthracite py-14 lg:py-20" aria-labelledby="gap-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_0.75fr] lg:gap-16 xl:gap-20 lg:items-start">

          {/* Left column: heading + body */}
          <div>
            <motion.h2
              id="gap-heading"
              className="text-[2rem] lg:text-[3.25rem] xl:text-[4.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-8 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: EASE }}
            >
              Between trade work and four-year programs, there is no standard route into construction management.
            </motion.h2>

            <motion.p
              className="text-[15.5px] text-white/65 leading-[1.72] max-w-[68ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.07, ease: EASE }}
            >
              The construction industry needs managers, estimators, schedulers,
              safety leaders, BIM coordinators, and field-ready professionals.
              Yet most learners see two incomplete options: a four-year degree
              or a trade route without a visible bridge into management-track
              work. Between those two sits a missing channel: a practical,
              employer-facing route for capable adults and students to prepare
              for construction-management careers. Aedifica builds that route.
            </motion.p>
          </div>

          {/* Right column: pull quote at display scale */}
          <div className="mt-12 lg:mt-0 lg:pt-16 xl:pt-20">
            <motion.div
              className="w-10 border-t-2 border-datum mb-7"
              initial={reduce ? undefined : { opacity: 0, scaleX: 0 }}
              whileInView={reduce ? undefined : { opacity: 1, scaleX: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              style={{ originX: 0 }}
              transition={reduce ? undefined : { duration: 0.4, delay: 0.14, ease: EASE }}
              aria-hidden="true"
            />
            <motion.p
              className="text-[1.75rem] lg:text-[2.125rem] xl:text-[2.625rem] text-white/85 leading-[1.25] italic"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.18, ease: EASE }}
            >
              A pathway is credible only when it connects preparation to
              employer relevance, articulation opportunities, and outcomes
              that can be{' '}
              <span className="text-datum">reported honestly.</span>
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  )
}
