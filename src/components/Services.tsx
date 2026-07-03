'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PROGRAMS = [
  {
    name: 'Explore',
    tag: 'Hands-On STEM',
    audience: 'Middle and high school students',
    format: 'Workshops, summer camps, and after-school programs',
    outcome: 'Career awareness and hands-on engineering identity',
    cta: 'View Explore',
    to: '/services/explore',
    color: 'bg-datum',
    dark: false,
    placement: 'lg:col-span-2',
  },
  {
    name: 'Pathway',
    tag: 'School Curriculum',
    audience: 'High school students and CTE programs',
    format: 'Semester course and summer programs',
    outcome: 'Civil engineering pathway readiness',
    cta: 'View Pathway',
    to: '/services/pathway',
    color: 'bg-quarry',
    dark: true,
    placement: '',
  },
  {
    name: 'Aedifica Launch',
    tag: 'Grant Strategy',
    audience: 'Schools, workforce programs, and community-based organizations',
    format: 'Grant strategy and curriculum design services',
    outcome: 'Funded, reportable workforce program delivery',
    cta: 'Explore Launch',
    to: '/services/launch',
    color: 'bg-sediment',
    dark: true,
    placement: '',
  },
  {
    name: 'Aedifica Rebuild',
    tag: 'Adult Cohort',
    audience: 'Adults ready for a career change into construction management',
    format: '12-week adult bridge cohort',
    outcome: 'Construction-management-track entry with credentials and interview access',
    cta: 'Explore Rebuild',
    to: '/services/rebuild',
    color: 'bg-rebuild-deep',
    dark: false,
    placement: 'lg:col-span-2',
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

        {/* 4-program mosaic: asymmetric 3-col grid on desktop */}
        <div className="grid grid-cols-1 gap-4 lg:gap-5 lg:grid-cols-3 mb-4 lg:mb-5">
          {PROGRAMS.map(({ name, tag, audience, format, outcome, cta, to, color, dark, placement }, i) => (
            <motion.div
              key={name}
              className={`px-8 py-8 lg:px-10 lg:py-9 flex flex-col justify-between gap-8 ${color} ${placement}`}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: i * 0.08, ease: SPRING }}>
              <div>
                <div className="flex items-start justify-between gap-4 mb-6">
                  <h3
                    className={`text-[2rem] lg:text-[2.5rem] leading-[1.1] tracking-[-0.03em] italic ${dark ? 'text-anthracite' : 'text-white'}`}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {name}
                  </h3>
                  <span
                    className={`flex-shrink-0 text-[10px] uppercase tracking-[0.12em] mt-2 ${dark ? 'text-anthracite' : 'text-white/95'}`}
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {tag}
                  </span>
                </div>

                <div className={`space-y-4 border-t pt-5 ${dark ? 'border-anthracite/15' : 'border-white/15'}`}>
                  {([
                    { label: 'Audience', value: audience },
                    { label: 'Format',   value: format   },
                    { label: 'Outcome',  value: outcome  },
                  ] as const).map(({ label, value }) => (
                    <div key={label} className="grid grid-cols-[80px_1fr] gap-3">
                      <p
                        className={`text-[10.5px] uppercase tracking-[0.1em] pt-px ${dark ? 'text-anthracite' : 'text-white/95'}`}
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {label}
                      </p>
                      <p
                        className={`text-[13.5px] leading-[1.55] ${dark ? 'text-anthracite' : 'text-white/95'}`}
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <Link href={to}
                className={`inline-flex items-center gap-2 text-[13px] tracking-[-0.01em] group self-start ${dark ? 'text-anthracite' : 'text-white'}`}
                style={{ fontFamily: 'var(--font-body)' }}>
                {cta}
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Talent Pipeline — minimal strip; no program content yet */}
        <motion.div
          className="bg-snow border border-sediment/25 px-8 py-5 lg:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.45, delay: 0.32, ease: EASE }}>
          <div>
            <p
              className="text-[13px] text-anthracite font-medium tracking-[-0.01em] mb-0.5"
              style={{ fontFamily: 'var(--font-body)' }}>
              Talent Pipeline
            </p>
            <p
              className="text-[12.5px] text-anthracite/65 leading-[1.6] max-w-[52ch]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Employer membership and candidate placement, launching after the first cohort delivers outcomes.
            </p>
          </div>
          <Link href="/services/talent-pipeline"
            className="inline-flex items-center gap-1.5 text-[12px] text-datum tracking-[-0.01em] flex-shrink-0 group"
            style={{ fontFamily: 'var(--font-body)' }}>
            View Talent Pipeline
            <span className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </Link>
        </motion.div>

      </div>
    </section>
  )
}
