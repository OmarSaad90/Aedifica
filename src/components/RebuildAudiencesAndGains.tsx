'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const AUDIENCES = [
  { label: 'Justice-impacted adults', desc: 'Returning to civilian life with untapped capacity for structured, technical work.' },
  { label: 'Returning mothers', desc: 'Re-entering a changed workforce with transferable coordination and organizational skills.' },
  { label: 'Veterans', desc: 'Bringing discipline and leadership that construction-management tracks need.' },
  { label: 'Career changers', desc: 'Adults seeking a structured entry point to construction-management-track opportunity.' },
] as const

const GAINS = [
  'Construction-management vocabulary and confidence',
  'Cost and schedule development and awareness',
  'Technology, software, and AI used in construction',
  'A portfolio artifact or capstone project',
  'Resume and interview preparation',
  'Exposure to employer expectations',
  'Understanding of next steps into credentials, college programs, apprenticeships, or entry-level roles',
] as const

const SAMPLE_ACTIVITIES = [
  'Read a simplified set of construction drawings',
  'Build a basic estimate and schedule',
  'Plan a site logistics scenario',
  'Practice a safety or quality-control walkthrough',
  'Present a capstone project to instructors, partners, or employers',
] as const

export function RebuildAudiencesAndGains() {
  const reduce = useReducedMotion()

  return (
    <>
      <section className="bg-snow pt-14 pb-0 lg:pt-20 overflow-hidden" aria-labelledby="who-h2">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            id="who-h2"
            className="text-[2.5rem] lg:text-[4.25rem] xl:text-[5.75rem] leading-[1.04] tracking-[-0.035em] text-anthracite italic mb-16 lg:mb-20 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 32 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
            Talent that has been outside the usual recruiting channel. Not outside the opportunity.
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-sediment/25">
            {AUDIENCES.map(({ label, desc }, i) => (
              <div key={label} className={['pt-8 lg:pt-10 pb-10 lg:pb-12', i < 3 ? 'lg:pr-8 xl:pr-10 lg:border-r lg:border-sediment/25' : '', i > 0 ? 'lg:pl-8 xl:pl-10' : '', i < 2 ? 'border-b border-sediment/25 sm:border-b-0' : ''].filter(Boolean).join(' ')}>
                <p className="text-[1rem] lg:text-[1.0625rem] text-anthracite leading-[1.25] tracking-[-0.01em] mb-3 font-medium" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                <p className="text-[13.5px] text-anthracite/70 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-12 lg:py-18" aria-labelledby="gain-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.25fr_1fr] lg:gap-16 xl:gap-24 lg:items-start">
            <div>
              <h2 id="gain-h2" className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.028em] text-anthracite italic mb-9" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                What you will gain.
              </h2>
              <ul className="list-none border-t border-sediment/25">
                {GAINS.map(gain => (
                  <li key={gain} className="flex gap-4 items-start border-b border-sediment/25 py-3.5 lg:py-4">
                    <span className="flex-shrink-0 w-[7px] h-[7px] rotate-45 bg-rebuild mt-[7px]" aria-hidden="true" />
                    <span className="text-[14.5px] text-anthracite/80 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{gain}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0 bg-rebuild-deep px-8 py-9 lg:px-10 lg:py-11">
              <h3 className="text-[1.375rem] lg:text-[1.625rem] text-white italic leading-[1.15] tracking-[-0.02em] mb-7" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Sample activities.
              </h3>
              <ul className="list-none space-y-4">
                {SAMPLE_ACTIVITIES.map(act => (
                  <li key={act} className="flex gap-3.5 items-start">
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-white/50 mt-[8px]" aria-hidden="true" />
                    <span className="text-[14px] text-white/90 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{act}</span>
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
