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
              <span className="w-7 h-[2px] bg-datum-light flex-shrink-0" aria-hidden="true" />
              <p
                className="text-[13.5px] uppercase tracking-[0.14em] text-datum-light font-medium leading-none"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Why we exist
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
              Construction shapes every community, but too many capable people never see a clear path into it.
            </motion.h2>

            <motion.p
              className="text-[15.5px] text-white/65 leading-[1.72] max-w-[68ch] mb-5"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.07, ease: EASE }}
            >
              Aedifica builds education-to-workforce pathways that move students, adult learners, and
              institutions from exposure to skills, from skills to credentials, and from credentials to
              opportunity.
            </motion.p>

            <motion.p
              className="text-[15.5px] text-white/65 leading-[1.72] max-w-[68ch] mb-5"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.13, ease: EASE }}
            >
              New Jersey is investing in a cleaner, more resilient future: offshore wind,
              energy-efficiency retrofits, transit, and the long-overdue upgrade of aging infrastructure.
              Delivering all of it takes more than funding. It takes people who can plan, coordinate,
              manage, and lead complex projects.
            </motion.p>

            <motion.p
              className="text-[15.5px] text-white/65 leading-[1.72] max-w-[68ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.19, ease: EASE }}
            >
              That workforce is thinning. Experienced managers are retiring, too few young people see
              construction as a modern, technology-driven career, and the adults who could fill the gap
              are rarely given a credible way in. The result isn't a shortage of effort, it's a missing
              pathway into supervisory-track roles.
            </motion.p>

            <motion.p
              className="text-[15.5px] text-white/65 leading-[1.72] max-w-[68ch] mt-5"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.25, ease: EASE }}
            >
              Early exposure matters because most students write off construction before they ever
              understand it. Adult bridge pathways matter because plenty of capable adults are ready for
              a real career but never get a credible route toward it. And neither works in isolation:
              institutions and employers must work together so that preparation connects to articulation,
              interviews, and honest outcomes.
            </motion.p>
          </div>

          {/* Right column: short version + pull quote. Top padding matches the
              eyebrow's height + margin so the box aligns with the h2, not the eyebrow. */}
          <div className="mt-12 lg:mt-0 lg:pt-[42px]">
            <motion.div
              className="border border-white/15 px-6 py-5 mb-9"
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.05, ease: EASE }}
            >
              <p
                className="text-[10.5px] uppercase tracking-[0.18em] text-datum-light mb-3 select-none leading-none"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                The short version
              </p>
              <p
                className="text-[14.5px] text-white/80 leading-[1.68]"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                New Jersey is building a cleaner, more resilient future, but the people who plan, manage,
                and lead those projects are in short supply, and too many capable students and adults
                never find a credible way in.
              </p>
            </motion.div>

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
              className="text-[2rem] lg:text-[2.375rem] xl:text-[2.75rem] text-white/85 leading-[1.25] italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.18, ease: EASE }}
            >
              Aedifica builds{' '}
              <span className="text-datum-light">that pathway.</span>
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
