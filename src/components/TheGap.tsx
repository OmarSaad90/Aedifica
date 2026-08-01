'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE     = [0.25, 0.1, 0.25, 1] as const

export function TheGap() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-anthracite py-12 lg:py-18" aria-labelledby="gap-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_0.75fr] lg:gap-16 xl:gap-20 lg:items-start">

          {/* Left column: heading + body */}
          <div>
            <motion.div
              className="flex items-center gap-3 mb-7"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}
            >
              <p
                className="text-[13.5px] uppercase tracking-[0.14em] text-white/70 font-medium leading-none"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Why Aedifica exists
              </p>
            </motion.div>

            <motion.h2
              id="gap-heading"
              className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] leading-[1.12] tracking-[-0.03em] text-white italic mb-8 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: EASE }}
            >
              We build the builders New Jersey is <span className="text-wine-light">counting on.</span>
            </motion.h2>

            <motion.p
              className="text-[15.5px] text-white/65 leading-[1.72] max-w-[68ch] mb-5"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.07, ease: EASE }}
            >
              The construction-management workforce is aging out faster than it is being replaced. The
              curriculum pipeline still treats industry as an afterthought. And a growing population of
              capable, non-traditional scholars remains outside pathways designed for eighteen-year-olds.
            </motion.p>

            <motion.p
              className="text-[15.5px] text-white/65 leading-[1.72] max-w-[68ch] mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.13, ease: EASE }}
            >
              Aedifica closes that gap. We build the missing pathway: from early STEM exposure to
              credentialed, employer-connected careers, designed from the jobsite backward, measured
              honestly, and connected to real advancement.
            </motion.p>

            <motion.p
              className="text-[1.0625rem] text-wine-light italic leading-[1.4]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.24, ease: EASE }}
            >
              From foundations to futures.
            </motion.p>
          </div>

          {/* Right column: short version + pull quote. Top padding matches the
              eyebrow's height + margin so the box aligns with the h2, not the eyebrow. */}
          <div className="mt-12 lg:mt-0 lg:pt-[42px]">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.05, ease: EASE }}
            >
              <p
                className="text-[10.5px] uppercase tracking-[0.18em] text-white/70 mb-4 select-none leading-none"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                The premise
              </p>
              <p
                className="text-[1.5rem] lg:text-[1.75rem] text-white/85 leading-[1.3] italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              >
                Talent is everywhere, even when opportunity is not. The durable workforce New Jersey
                needs will be built from the talent the system overlooked, not in spite of it.
              </p>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
