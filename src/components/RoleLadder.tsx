import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const

const STAGES = [
  {
    timing: '0–90 days',
    stage: 'Immediate opportunity',
    roles: [
      'Field office assistant',
      'Project administration trainee',
      'Safety documentation assistant',
      'Apprentice candidate',
      'Estimating assistant',
      'Document-control assistant',
    ],
  },
  {
    timing: '6–18 months',
    stage: 'Progression opportunity',
    roles: [
      'Project controls assistant',
      'Junior estimator',
      'Assistant scheduler',
      'BIM coordination assistant',
      'Assistant superintendent trainee',
    ],
  },
  {
    timing: '2–4 years',
    stage: 'Career-track progression',
    roles: [
      'Assistant superintendent',
      'Field engineer',
      'Project engineer',
      'Scheduler',
      'Estimator',
      'Foreperson-to-supervisor pathway',
    ],
  },
] as const

export function RoleLadder() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-anthracite py-16 lg:py-24" aria-labelledby="roles-heading">
      <div className="max-w-7xl mx-auto px-6">

        <motion.h2
          id="roles-heading"
          className="text-[2.25rem] lg:text-[3.5rem] xl:text-[4rem] leading-[1.08] tracking-[-0.028em] text-white italic mb-12 lg:mb-14 max-w-[26ch]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, ease: EASE }}>
          Entry is the beginning of the pathway, not the promise of an instant title.
        </motion.h2>

        {/* Three stages as horizontal columns at lg+ */}
        <div className="border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {STAGES.map(({ timing, stage, roles }, i) => (
              <motion.div
                key={timing}
                className={[
                  'py-8 lg:py-10',
                  i > 0 ? 'lg:pl-10 xl:pl-12' : '',
                  i < 2 ? 'lg:pr-10 xl:pr-12' : '',
                ].filter(Boolean).join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: i * 0.065, ease: EASE }}>
                <p
                  className="text-[1.875rem] lg:text-[2.25rem] xl:text-[2.625rem] leading-[1.05] tracking-[-0.025em] text-datum italic mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {timing}
                </p>
                <p
                  className="text-[10.5px] text-white/60 uppercase tracking-[0.14em] mb-5"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {stage}
                </p>
                <ul className="space-y-1.5 list-none">
                  {roles.map(role => (
                    <li
                      key={role}
                      className="text-[13px] text-white/60 leading-[1.6]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-[12px] text-white/60 leading-[1.65] mt-6"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.5, delay: 0.25, ease: EASE }}>
          Roles are illustrative pathway targets, not guarantees of placement or advancement.
          Aedifica will report actual future outcomes as they occur.
        </motion.p>

      </div>
    </section>
  )
}
