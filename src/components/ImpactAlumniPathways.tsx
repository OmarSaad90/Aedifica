'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '80px 0px' } as const
const SPRING = [0.32, 0.72, 0, 1] as const
const EASE = [0.25, 0.1, 0.25, 1] as const

const PATHWAY_CHIPS = [
  'Advanced high school STEM courses',
  'CTE pathways',
  'Project Lead The Way',
  'Selective STEM high schools (UCVTS)',
  'Summer engineering experiences',
  'Early college and campus exposure',
  'Future Aedifica Pathway programs',
  'Long-term workforce-connected learning',
] as const

export function ImpactAlumniPathways() {
  const reduce = useReducedMotion()
  return (
    <section id="pathways" className="bg-snow py-14 lg:py-20" aria-labelledby="pathways-h2">
      <div className="max-w-4xl mx-auto px-6">

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
          <h2
            id="pathways-h2"
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
            An early experience, not an endpoint.
          </h2>
          <p
            className="text-[15px] text-anthracite/75 leading-[1.72] mb-3"
            style={{ fontFamily: 'var(--font-body)' }}>
            Building Bridges helps a middle schooler see engineering as reachable, and gives them a first taste of a college campus, a real design challenge, and an engineer's questions. For the 2025 eighth-grade cohort, the next step is already visible: more than half earned acceptance into selective STEM high schools.
          </p>
          <p
            className="text-[14px] text-anthracite/75 mb-8"
            style={{ fontFamily: 'var(--font-body)' }}>
            After an early Aedifica experience, next steps may include:
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap gap-2.5"
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
          {PATHWAY_CHIPS.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center gap-2 text-[13px] text-anthracite/75 border border-sediment/30 px-4 py-2"
              style={{ fontFamily: 'var(--font-body)' }}>
              <span className="w-[5px] h-[5px] bg-datum flex-shrink-0" aria-hidden="true" />
              {chip}
            </span>
          ))}
        </motion.div>

        <motion.p
          className="text-[12px] italic text-anthracite/75 mt-8 leading-[1.6]"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
          No outcomes are guaranteed; the work is in keeping the door open.
        </motion.p>

      </div>
    </section>
  )
}
