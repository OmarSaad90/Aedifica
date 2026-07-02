'use client'
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
              className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] leading-[1.12] tracking-[-0.03em] text-white italic mb-8 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: EASE }}
            >
              A cleaner future needs people who can build it. That pathway is missing. We build it.
            </motion.h2>

            <motion.p
              className="text-[15.5px] text-white/65 leading-[1.72] max-w-[68ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.07, ease: EASE }}
            >
              New Jersey is investing in offshore wind, energy-efficiency retrofits, transit, and the
              long-overdue upgrade of aging infrastructure. Delivering it takes people who can plan,
              coordinate, manage, and lead complex projects: managers, estimators, schedulers, safety
              leads, and field-ready professionals. Experienced managers are retiring, too few young
              people see construction as a modern career, and the adults who could fill the gap rarely
              get a credible way in.
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
              className="text-[1.75rem] lg:text-[2.125rem] xl:text-[2.5rem] text-white/85 leading-[1.25] italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.18, ease: EASE }}
            >
              Aedifica builds{' '}
              <span className="text-datum">that pathway.</span>
            </motion.p>
            <motion.p
              className="text-[14px] text-white/65 leading-[1.72] max-w-[42ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.24, ease: EASE }}
            >
              We introduce students to the built environment early, prepare high-school learners for
              construction-management opportunities, and help overlooked adults move into credentialed,
              employer-connected careers. We don't claim to solve the workforce challenge alone. We
              build the channel, and partner with schools, employers, and communities to prove it works,
              one placed graduate at a time.
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  )
}
