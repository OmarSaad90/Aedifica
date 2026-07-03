'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const AREAS = [
  'OSHA-10 or OSHA-30 exposure and preparation',
  'NCCER Core pathway preparation',
  'Bluebeam and Procore Foundations',
  'BIM viewer literacy and digital plan navigation',
  'Project documentation, submittal, RFI, and document-control fundamentals',
  'Foundational estimating and scheduling concepts',
  'Supervisory communication and professional jobsite coordination',
  'Employer-informed capstone activity',
  'Structured interview-readiness and interview week',
] as const

export function CurriculumStrip() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-anthracite py-10 lg:py-16" aria-labelledby="curriculum-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className="lg:grid lg:grid-cols-[5fr_7fr] lg:gap-16 xl:gap-20 lg:items-start">

          {/* Left: label + heading + context + link */}
          <div className="mb-12 lg:mb-0">
            <motion.p
              className="text-[10.5px] text-white/65 uppercase tracking-[0.22em] mb-7 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
              Aedifica Rebuild
            </motion.p>

            <motion.h2
              id="curriculum-heading"
              className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4rem] leading-[1.07] tracking-[-0.03em] text-white italic mb-8"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              The curriculum behind the 12 weeks.
            </motion.h2>

            <motion.p
              className="text-[15px] text-white/55 leading-[1.72] mb-10 max-w-[48ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              Nine learning areas, each connected to a real construction-management
              function. Credential access is presented only in accordance with confirmed
              authorization and partner arrangements.
            </motion.p>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.2, ease: EASE }}>
              <Link href="/services/rebuild"
                className="inline-flex items-center gap-2 text-[13.5px] text-datum-light tracking-[-0.01em] group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Explore Aedifica Rebuild
                <span
                  className="transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true">
                  →
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Right: numbered curriculum list */}
          <div className="border-t border-white/10">
            {AREAS.map((area, i) => (
              <motion.div
                key={area}
                className="flex gap-5 lg:gap-6 items-center border-b border-white/10 py-2.5 lg:py-3"
                initial={reduce ? undefined : { opacity: 0, x: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.35, delay: 0.04 + i * 0.035, ease: EASE }}>
                <span
                  className="flex-shrink-0 w-12 text-[2.25rem] lg:text-[3rem] text-datum/70 italic leading-none select-none tabular-nums"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                  aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span
                  className="text-[13.5px] text-white/65 leading-[1.65]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {area}
                </span>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
