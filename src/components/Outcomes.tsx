import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const

const CATEGORIES = [
  'Enrollment, attendance, and completion',
  'Credential preparation and attainment, where applicable and authorized',
  'Employer capstone participation and interviews',
  'Employment placement by role category and time period',
  'Apprenticeship or articulation outcomes',
  'Retention at defined milestones',
  'Continuing education outcomes reported separately from employment',
] as const

export function Outcomes() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-16 lg:py-24" aria-labelledby="outcomes-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-[5fr_6fr] gap-10 lg:gap-16 xl:gap-20 lg:items-start">

          {/* Left column: eyebrow + heading as the visual anchor */}
          <div>
            <motion.p
              className="text-[10.5px] text-quarry uppercase tracking-[0.22em] mb-6 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
              Measurement
            </motion.p>

            <motion.h2
              id="outcomes-heading"
              className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.05] tracking-[-0.03em] text-anthracite italic mb-8 lg:mb-10"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
              Outcomes belong on the record.
            </motion.h2>

            {/* Placeholder image — replace with real photo */}
            <motion.div
              className="overflow-hidden"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.18, ease: EASE }}>
              <img
                src="https://picsum.photos/seed/workforce-report/800/520"
                alt=""
                className="w-full h-auto object-cover"
                style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* Right column: body + reporting categories + CTA */}
          <div className="lg:pt-8 xl:pt-10">
            <motion.p
              className="text-[15px] text-anthracite/75 leading-[1.72] mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.12, ease: EASE }}>
              Aedifica is being built on a clear principle: workforce investment must be accountable
              to learners, employers, and institutional partners. Following an initial Rebuild cohort,
              the organization intends to publish outcomes in categories that matter and should never
              be blurred together.
            </motion.p>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.2, ease: EASE }}>
              <p
                className="text-[10.5px] text-quarry uppercase tracking-[0.18em] mb-4 select-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Future reporting categories
              </p>
              <ul className="space-y-2.5 list-none border-l border-datum/25 pl-5 mb-8">
                {CATEGORIES.map((cat, i) => (
                  <motion.li
                    key={cat}
                    className="text-[13.5px] text-anthracite/75 leading-[1.65]"
                    style={{ fontFamily: 'var(--font-body)' }}
                    initial={reduce ? undefined : { opacity: 0, x: -6 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.32, delay: 0.22 + i * 0.05, ease: EASE }}>
                    {cat}
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/impact"
                className="inline-flex items-center justify-center bg-patina text-white text-[14px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-transform duration-100 hover:bg-patina/85"
                style={{ fontFamily: 'var(--font-body)' }}>
                View Our Impact Framework
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
