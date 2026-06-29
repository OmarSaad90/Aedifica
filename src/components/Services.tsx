'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PRIMARY = [
  {
    name: 'Aedifica Rebuild',
    tag: 'Adult Cohort',
    audience: 'Adults ready for a career change into construction management',
    format: '12-week adult bridge cohort',
    outcome: 'Construction-management-track entry with credentials and interview access',
    cta: 'Explore Rebuild',
    to: '/services/rebuild',
    color: 'bg-datum',
  },
  {
    name: 'Aedifica Launch',
    tag: 'Grant Strategy',
    audience: 'Schools, workforce programs, and community-based organizations',
    format: 'Grant strategy and curriculum design services',
    outcome: 'Funded, reportable workforce program delivery',
    cta: 'Explore Launch',
    to: '/services/launch',
    color: 'bg-patina',
  },
] as const

const EXPANSION = [
  {
    name: 'Explore',
    audience: 'Middle and high school students',
    format: 'Workshops and summer camps',
    outcome: 'Career awareness and STEM identity',
    to: '/services/explore',
  },
  {
    name: 'Pathway',
    audience: 'High school students',
    format: 'Semester course and summer programs',
    outcome: 'Civil engineering pathway readiness',
    to: '/services/pathway',
  },
  {
    name: 'Talent Pipeline',
    audience: 'Employers and contractors',
    format: 'Membership and candidate placement',
    outcome: 'Vetted, trained construction-management candidates',
    to: '/services/talent-pipeline',
  },
] as const

export function Services() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-12 lg:py-18" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="flex justify-center mb-6"
          aria-hidden="true"
          initial={reduce ? undefined : { opacity: 0, scaleX: 0 }}
          whileInView={reduce ? undefined : { opacity: 1, scaleX: 1 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.5, ease: EASE }}
          style={{ originX: '50%' }}>
          <div className="w-8 h-[2px] bg-datum" />
        </motion.div>

        <motion.h2
          id="services-heading"
          className="text-[2.5rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[1.05] tracking-[-0.03em] text-anthracite italic mb-12 lg:mb-16 text-center mx-auto max-w-[22ch]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
          Focused first. Scalable after proof.
        </motion.h2>

        {/* Primary programs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 mb-4 lg:mb-5">
          {PRIMARY.map(({ name, tag, audience, format, outcome, cta, to, color }, i) => (
            <motion.div
              key={name}
              className={`px-8 py-8 lg:px-10 lg:py-9 flex flex-col justify-between gap-8 ${color}`}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: i * 0.1, ease: SPRING }}>
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3
                    className="text-[2rem] lg:text-[2.5rem] leading-[1.1] tracking-[-0.03em] italic text-white"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {name}
                  </h3>
                  <span
                    className="flex-shrink-0 text-[10px] uppercase tracking-[0.12em] text-white/95 mt-2"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {tag}
                  </span>
                </div>

                <div className="space-y-4 border-t border-white/15 pt-5">
                  {([
                    { label: 'Audience', value: audience },
                    { label: 'Format', value: format },
                    { label: 'Outcome', value: outcome },
                  ] as const).map(({ label, value }) => (
                    <div key={label} className="grid grid-cols-[80px_1fr] gap-3">
                      <p
                        className="text-[10.5px] text-white/95 uppercase tracking-[0.1em] pt-px"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {label}
                      </p>
                      <p
                        className="text-[13.5px] text-white/95 leading-[1.55]"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Link href={to}
                className="inline-flex items-center gap-2 text-[13px] tracking-[-0.01em] group self-start text-white"
                style={{ fontFamily: 'var(--font-body)' }}>
                {cta}
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Additional programs — school, youth, and employer */}
        <motion.div
          className="bg-snow border border-sediment/25 px-8 py-7 lg:px-10 lg:py-8"
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, delay: 0.2, ease: EASE }}>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-7 pb-5 border-b border-sediment/20">
            <p
              className="text-[13px] text-anthracite font-medium tracking-[-0.01em]"
              style={{ fontFamily: 'var(--font-body)' }}>
              School and employer programs
            </p>
            <p
              className="text-[12.5px] text-anthracite/75 leading-[1.6] max-w-[52ch]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Youth programs, school curriculum, and employer pipeline partnerships that complete the pathway from student exposure through workplace readiness.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-8 lg:gap-x-12">
            {EXPANSION.map(({ name, audience, format, outcome, to }, i) => (
              <motion.div
                key={name}
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: 0.25 + i * 0.07, ease: EASE }}>
                <h3
                  className="text-[1.0625rem] text-anthracite italic leading-none tracking-[-0.02em] mb-4"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {name}
                </h3>
                <div className="space-y-2.5">
                  {([
                    { label: 'Audience', value: audience },
                    { label: 'Format', value: format },
                    { label: 'Outcome', value: outcome },
                  ] as const).map(({ label, value }) => (
                    <div key={label} className="grid grid-cols-[64px_1fr] gap-2">
                      <p
                        className="text-[10px] text-anthracite/60 uppercase tracking-[0.08em] pt-px"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {label}
                      </p>
                      <p
                        className="text-[12.5px] text-anthracite/70 leading-[1.5]"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
                <Link href={to}
                  className="inline-flex items-center gap-1.5 text-[12px] text-datum tracking-[-0.01em] group mt-4"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  View {name}
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  )
}
