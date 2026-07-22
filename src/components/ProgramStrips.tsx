'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const SPRING = [0.32, 0.72, 0, 1] as const
const EASE = [0.25, 0.1, 0.25, 1] as const

const PROGRAMS = [
  {
    name: 'Explore',
    tag: 'Hands-On STEM',
    desc: 'Middle- and high-school workshops, summer camps, and after-school programs that introduce engineering and the built environment as a concrete career direction.',
    cta: 'View Explore',
    to: '/programs/explore',
    color: 'bg-datum',
    dark: false,
    flip: false,
    facts: [
      { label: 'Audience', value: 'Middle and high school students' },
      { label: 'Format',   value: 'Workshops and camps'            },
      { label: 'Outcome',  value: 'Career awareness'               },
    ],
  },
  {
    name: 'Pathway',
    tag: 'School Curriculum',
    desc: 'Semester-long civil engineering and construction-management curriculum for high schools and CTE programs, with summer modules and career pathway alignment.',
    cta: 'View Pathway',
    to: '/programs/pathway',
    color: 'bg-quarry',
    dark: true,
    flip: true,
    facts: [
      { label: 'Audience', value: 'High school and CTE programs' },
      { label: 'Format',   value: 'Semester course'              },
      { label: 'Outcome',  value: 'Pathway readiness'            },
    ],
  },
  {
    name: 'Aedifica Launch',
    tag: 'Grant Strategy',
    desc: 'A proposal-based pathway-design and grant strategy service for community organizations, county colleges, and districts pursuing workforce and career-pathway funding.',
    cta: 'View Launch',
    to: '/programs/launch',
    color: 'bg-sediment',
    dark: true,
    flip: false,
    facts: [
      { label: 'Structure', value: 'Proposal-based engagement'  },
      { label: 'Scope',     value: 'Grant strategy and authoring' },
      { label: 'Geography', value: 'NJ workforce funding'       },
    ],
  },
  {
    name: 'Aedifica Rebuild',
    tag: 'Adult Cohort',
    desc: 'A 12-week bridge cohort for justice-impacted adults, returning caregivers, veterans, and career changers seeking credible entry into construction-management-track work.',
    cta: 'View Rebuild',
    to: '/programs/rebuild',
    color: 'bg-rebuild-deep',
    dark: false,
    flip: true,
    facts: [
      { label: 'Format',       value: '12- or 24-week cohort' },
      { label: 'Participants', value: 'Adult learners'  },
      { label: 'Geography',    value: 'NJ · NY metro'   },
    ],
  },
] as const

export function ProgramStrips() {
  const reduce = useReducedMotion()

  return (
    <section aria-label="All programs">

      {PROGRAMS.map(({ name, tag, desc, cta, to, color, dark, flip, facts }) => (
        <div key={name} className={`${color} py-10 lg:py-12`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`lg:grid lg:gap-14 xl:gap-20 lg:items-end ${flip ? 'lg:grid-cols-[0.44fr_1fr]' : 'lg:grid-cols-[1fr_0.44fr]'}`}>

              {/* Main content — DOM-first; CSS order flips it visually when flip=true */}
              <motion.div
                className={flip ? 'lg:order-2' : ''}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, delay: 0.05, ease: SPRING }}>
                <span
                  className={`inline-block text-[10px] uppercase tracking-[0.16em] px-3 py-1 mb-5 select-none ${dark ? 'bg-anthracite/10 text-anthracite' : 'bg-white/15 text-white'}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {tag}
                </span>
                <h2
                  className={`text-[1.875rem] lg:text-[2.625rem] xl:text-[3rem] leading-[1.06] tracking-[-0.03em] italic mb-4 [text-wrap:balance] ${dark ? 'text-anthracite' : 'text-white'}`}
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {name}
                </h2>
                <p
                  className={`text-[13.5px] leading-[1.7] mb-5 max-w-[52ch] ${dark ? 'text-anthracite' : 'text-white/90'}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {desc}
                </p>
                <Link href={to}
                  className={`inline-flex items-center gap-2 text-[13px] tracking-[-0.01em] group ${dark ? 'text-anthracite' : 'text-white'}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {cta}
                  <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </motion.div>

              {/* Key facts — bottom-aligned; appears left when flip=true */}
              <motion.div
                className={`mt-8 lg:mt-0 lg:self-end ${flip ? 'lg:order-1' : ''}`}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.18, ease: EASE }}>
                {facts.map(({ label, value }) => (
                  <div key={label} className={`border-t py-3 ${dark ? 'border-anthracite/15' : 'border-white/15'}`}>
                    <p
                      className={`text-[10px] uppercase tracking-[0.14em] mb-0.5 select-none ${dark ? 'text-anthracite' : 'text-white/90'}`}
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {label}
                    </p>
                    <p
                      className={`text-[14px] ${dark ? 'text-anthracite' : 'text-white/90'}`}
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {value}
                    </p>
                  </div>
                ))}
                <div className={`border-t ${dark ? 'border-anthracite/15' : 'border-white/15'}`} />
              </motion.div>

            </div>
          </div>
        </div>
      ))}

      {/* Talent Pipeline — minimal strip */}
      <div className="bg-snow border-t border-sediment/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p
              className="text-[13px] text-anthracite font-medium tracking-[-0.01em] mb-0.5"
              style={{ fontFamily: 'var(--font-body)' }}>
              Talent Pipeline
            </p>
            <p
              className="text-[12.5px] text-anthracite/78 leading-[1.6] max-w-[52ch]"
              style={{ fontFamily: 'var(--font-body)' }}>
              The cross-cutting employer connector that runs across all four programs. Not a fifth program; it launches placement services after the first cohort publishes outcomes.
            </p>
          </div>
          <Link href="/programs/talent-pipeline"
            className="inline-flex items-center gap-1.5 text-[12px] text-datum tracking-[-0.01em] flex-shrink-0 group"
            style={{ fontFamily: 'var(--font-body)' }}>
            View Talent Pipeline
            <span className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </Link>
        </div>
      </div>

    </section>
  )
}
