'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PARTNER_POINTS = [
  'Structured 12- or 24-week cohort aligned to your recruitment and case-management infrastructure',
  'Outcome reporting designed for grant compliance and stakeholder accountability',
  'Employer interaction built into the model, not added after delivery',
  'Articulation and apprenticeship integration defined before instruction begins',
] as const

const EMPLOYER_POINTS = [
  'Validate role relevance and inform capstone expectations before cohort delivery',
  'Access a defined pool of interview-ready completers at cohort close',
  'Reduce recruiting pipeline friction for construction-management-track entry roles',
  'Contribute to a NJ workforce model with publishable outcomes and retention tracking',
] as const

const REPORTING = [
  'Enrollment, attendance, and completion',
  'Credential preparation and attainment, where applicable and authorized',
  'Employer capstone participation and interviews',
  'Employment outcomes by role category and time period',
  'CM-track outcomes reported separately from general placement figures',
  'Apprenticeship or articulation outcomes',
  'Retention at defined milestones',
  'Continuing education outcomes reported separately from employment',
] as const

export function RebuildPartnersAndReporting() {
  const reduce = useReducedMotion()

  return (
    <>
      <section className="bg-bone py-12 lg:py-18" aria-label="Partner and employer value">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-12 lg:mb-14"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            Built for two kinds of committed partners.
          </motion.h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">
            <div className="bg-rebuild-deep px-8 py-10 lg:px-10 lg:py-12 flex flex-col">
              <p className="text-[10.5px] text-white/90 uppercase tracking-[0.18em] mb-5 select-none" style={{ fontFamily: 'var(--font-body)' }}>Community and institutional partners</p>
              <h3 className="text-[1.5rem] lg:text-[1.875rem] text-white italic leading-[1.2] tracking-[-0.025em] mb-7" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Connect overlooked talent to a credible pathway.
              </h3>
              <ul className="list-none space-y-3.5 mb-10 flex-1">
                {PARTNER_POINTS.map(pt => (
                  <li key={pt} className="flex gap-3.5 items-start">
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-white/40 mt-[7px]" aria-hidden="true" />
                    <span className="text-[13.5px] text-white leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link href="/partner" className="self-start inline-flex items-center gap-2 bg-white text-rebuild-deep text-[13.5px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/92 group" style={{ fontFamily: 'var(--font-body)' }}>
                Discuss a Rebuild Partnership
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="bg-quarry px-8 py-10 lg:px-10 lg:py-12 flex flex-col">
              <p className="text-[10.5px] text-anthracite uppercase tracking-[0.18em] mb-5 select-none" style={{ fontFamily: 'var(--font-body)' }}>Employers</p>
              <h3 className="text-[1.5rem] lg:text-[1.875rem] text-anthracite italic leading-[1.2] tracking-[-0.025em] mb-7" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Meet prepared emerging talent through an accountable interview model.
              </h3>
              <ul className="list-none space-y-3.5 mb-10 flex-1">
                {EMPLOYER_POINTS.map(pt => (
                  <li key={pt} className="flex gap-3.5 items-start">
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-anthracite/25 mt-[7px]" aria-hidden="true" />
                    <span className="text-[13.5px] text-anthracite/80 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{pt}</span>
                  </li>
                ))}
              </ul>
              <Link href="/partner" className="self-start inline-flex items-center gap-2 bg-white text-anthracite text-[13.5px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/92 group" style={{ fontFamily: 'var(--font-body)' }}>
                Become an Employer Partner
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-snow py-12 lg:py-18" aria-labelledby="reporting-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-24 lg:items-start">
            <div>
              <p className="text-[10.5px] text-anthracite/70 uppercase tracking-[0.22em] mb-8 select-none" style={{ fontFamily: 'var(--font-body)' }}>Reporting commitment</p>
              <h2 id="reporting-h2" className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic mb-8" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                Outcomes on the record. Every category reported separately.
              </h2>
              <p className="text-[15px] text-anthracite/75 leading-[1.72]" style={{ fontFamily: 'var(--font-body)' }}>
                Following an initial cohort, Aedifica will publish outcomes in categories that must never be blurred together. Enrollment is not completion. Completion is not placement. Each result stands on its own record.
              </p>
            </div>
            <div className="mt-10 lg:mt-0 lg:pt-16">
              <ul className="list-none border-t border-sediment/25">
                {REPORTING.map(item => (
                  <li key={item} className="border-b border-sediment/25 py-4 lg:py-5">
                    <span className="text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] text-anthracite/75 italic leading-[1.45] tracking-[-0.015em]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
