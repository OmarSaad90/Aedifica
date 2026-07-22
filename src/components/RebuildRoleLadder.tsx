'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const STAGES = [
  { range: '0–90 days', label: 'Immediate opportunity', roles: ['Field office assistant', 'Project administration trainee', 'Safety documentation assistant', 'Apprentice candidate', 'Estimating assistant', 'Document-control assistant'] },
  { range: '6–18 months', label: 'Progression opportunity', roles: ['Project controls assistant', 'Junior estimator', 'Assistant scheduler', 'BIM coordination assistant', 'Assistant superintendent trainee'] },
  { range: '2–4 years', label: 'Career-track progression', roles: ['Assistant superintendent', 'Field engineer', 'Project engineer', 'Scheduler', 'Estimator', 'Foreperson-to-supervisor pathway'] },
] as const

export function RebuildRoleLadder() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow py-12 lg:py-18 overflow-hidden" aria-labelledby="ladder-h2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="lg:grid lg:grid-cols-[1fr_1.8fr] lg:gap-16 xl:gap-20 lg:items-end mb-14 lg:mb-16">
          <div>
            <p className="text-[10.5px] text-anthracite/70 uppercase tracking-[0.22em] mb-6 select-none" style={{ fontFamily: 'var(--font-body)' }}>Realistic advancement</p>
            <motion.h2
              id="ladder-h2"
              className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              Entry is the beginning of the pathway. Not the ceiling.
            </motion.h2>
          </div>
          <p className="text-[15px] text-anthracite/75 leading-[1.72] lg:pb-2" style={{ fontFamily: 'var(--font-body)' }}>
            Rebuild prepares participants for realistic initial roles and documented progression over time. The stages below show illustrative pathway targets. Aedifica will report actual future outcomes as they occur.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-sediment/25 border-t border-sediment/25">
          {STAGES.map(({ range, label, roles }, i) => (
            <div key={range} className={['pt-8 lg:pt-10 pb-8 lg:pb-10', i > 0 ? 'lg:pl-10 xl:pl-12' : '', i < 2 ? 'lg:pr-10 xl:pr-12' : ''].filter(Boolean).join(' ')}>
              <p className="text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-rebuild italic leading-[1.05] tracking-[-0.025em] mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>{range}</p>
              <p className="text-[10.5px] text-anthracite/70 uppercase tracking-[0.18em] mb-6 select-none" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
              <ul className="list-none space-y-2">
                {roles.map(role => (
                  <li key={role} className="text-[13.5px] text-anthracite/75 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{role}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="text-[12px] text-anthracite/70 leading-[1.65] mt-8 max-w-[72ch]" style={{ fontFamily: 'var(--font-body)' }}>
          Roles are illustrative pathway targets, not guarantees of placement or advancement. Aedifica will report actual future outcomes as they occur.
        </p>
      </div>
    </section>
  )
}
