'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const OUTCOMES = [
  ['Hands-on project learning', 'Learners build, test, and revise real artifacts, not worksheets.'],
  ['Construction-management vocabulary', 'The shared language of scope, schedule, cost, safety, and quality.'],
  ['Engineering & design thinking', 'Define, model, test, and optimize under real constraints.'],
  ['Technology, software & responsible AI exposure', 'The digital tools of modern construction, taught in the tools of the work.'],
  ['Teamwork', 'Structured roles, shared responsibility, and leadership in many forms.'],
  ['Communication', 'Writing, presenting, and defending decisions in front of real audiences.'],
  ['Evidence-based decision-making', 'Data, decision matrices, and trade-off analysis behind every claim.'],
  ['Portfolio artifacts', 'Work learners can show and explain: notebooks, models, estimates, plans.'],
  ['Capstones', 'A culminating project, presented and defended publicly.'],
  ['Career awareness', 'Visible roles, visible people, visible routes into the built environment.'],
  ['Employer-informed instruction', 'Curriculum validated against the work employers are doing today.'],
  ['Next-step planning', 'Every learner leaves with a named, realistic next step.'],
  ['Outcome tracking', 'Participation, completion, artifacts, and next steps, tracked and reported for partners.'],
] as const

export function LearningOutcomes() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-anthracite py-14 lg:py-20" aria-labelledby="outcomes-produce-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16 xl:gap-24 lg:items-end mb-12 lg:mb-14">
          <motion.h2
            id="outcomes-produce-heading"
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.028em] text-white italic mb-6 lg:mb-0 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
            What every Aedifica pathway is built to produce.
          </motion.h2>
          <motion.p
            className="text-[14px] text-white/70 leading-[1.72]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            Every pathway, whatever the age of the learner, is designed to connect learning with the
            real logic of construction projects and to leave evidence behind: artifacts a learner can
            explain, and outcomes a partner can verify.
          </motion.p>
        </div>

        <motion.div
          className="columns-1 sm:columns-2 lg:columns-3 gap-x-12 xl:gap-x-16 border-t border-white/12 pt-8"
          initial={reduce ? undefined : { opacity: 0, y: 18 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
          {OUTCOMES.map(([outcome, note]) => (
            <div key={outcome} className="group break-inside-avoid pb-7">
              <div className="flex gap-3.5 items-start">
                <span
                  className="flex-shrink-0 w-[7px] h-[7px] rotate-45 mt-[7px] opacity-55 transition-opacity duration-200 group-hover:opacity-100"
                  style={{ backgroundColor: 'var(--color-datum-light)' }}
                  aria-hidden="true"
                />
                <div>
                  <p
                    className="text-[15px] text-white/85 font-medium leading-[1.35] tracking-[-0.01em] mb-1.5 transition-colors duration-200 group-hover:text-white"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {outcome}
                  </p>
                  <p
                    className="text-[12.5px] text-white/65 leading-[1.65] transition-colors duration-200 group-hover:text-white/80"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {note}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
