'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const CHOICES = [
  {
    name: 'Explore',
    to: '/programs/explore',
    condition: 'your goal is awareness before learners choose a direction',
    detail: 'For middle and high school students who need hands-on exposure to engineering and construction management before they have decided on a path. Schools, after-school programs, and summer programs are the delivery vehicle.',
  },
  {
    name: 'Pathway',
    to: '/programs/pathway',
    condition: 'your school needs a construction-management curriculum track',
    detail: 'For districts and CTE programs designing a secondary-school curriculum that carries students toward college engineering, apprenticeship, and construction-management careers. Requires a school or district partner.',
  },
  {
    name: 'Launch',
    to: '/programs/launch',
    condition: 'your organization needs to design, fund, and implement a workforce pathway',
    detail: 'For community colleges, school districts, workforce boards, and CBOs that need a grant strategy and curriculum framework to deliver their own construction-management program. Launch provides the design and funding infrastructure.',
  },
  {
    name: 'Rebuild',
    to: '/programs/rebuild',
    condition: 'your learners are adults who need a bridge into the industry',
    detail: 'For adult learners who are ready to move into construction-management-track work: justice-impacted adults, veterans, returning caregivers, and career changers. The 12- or 24-week cohort is employer-connected and credential-aligned.',
  },
  {
    name: 'Talent Pipeline',
    to: '/programs/talent-pipeline',
    condition: 'you are an employer seeking prepared, vetted candidates',
    detail: 'For construction firms, contractors, and developers who want early access to trained emerging talent and participation in capstone and interview-week activities.',
  },
] as const

export function HowToChoose() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-12 lg:py-18" aria-labelledby="choose-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className="lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-16 xl:gap-24 lg:items-start mb-10 lg:mb-12">
          <motion.h2
            id="choose-heading"
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic mb-4 lg:mb-0 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            How to choose.
          </motion.h2>
          <motion.p
            className="text-[14.5px] text-anthracite/80 leading-[1.72]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
            Each Aedifica program targets a different stage of the talent pipeline and a different type of partner. The right starting point depends on who you serve and what outcome you are working toward.
          </motion.p>
        </div>

        <div className="border-t border-sediment/25">
          {CHOICES.map(({ name, to, condition, detail }, i) => (
            <motion.div
              key={name}
              className="border-b border-sediment/25 py-6 lg:py-7 lg:grid lg:grid-cols-[180px_1fr_auto] lg:gap-12 lg:items-start"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.42, delay: i * 0.05, ease: EASE }}>

              <div className="mb-3 lg:mb-0">
                <p
                  className="text-[1.0625rem] text-anthracite italic leading-none tracking-[-0.018em] mb-0.5"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {name}
                </p>
              </div>

              <div>
                <p
                  className="text-[14.5px] text-anthracite/85 leading-[1.6] mb-2"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Choose {name} if {condition}.
                </p>
                <p
                  className="text-[13px] text-anthracite/78 leading-[1.65]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {detail}
                </p>
              </div>

              <Link href={to}
                className="inline-flex items-center gap-1.5 text-[12.5px] text-anthracite tracking-[-0.01em] mt-4 lg:mt-0 group flex-shrink-0"
                style={{ fontFamily: 'var(--font-body)' }}>
                View {name}
                <span className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
