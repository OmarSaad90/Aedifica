'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { PageCTA } from '../components/PageCTA'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const


const PROGRAMS = [
  {
    name: 'Explore',
    tag: 'Hands-On STEM',
    desc: 'Middle- and high-school workshops, summer camps, and after-school programs that introduce engineering and the built environment as a concrete career direction.',
    cta: 'View Explore',
    to: '/services/explore',
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
    to: '/services/pathway',
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
    desc: 'A fixed-fee grant strategy and proposal-authoring service for community organizations, county colleges, and districts pursuing workforce and career-pathway funding.',
    cta: 'Explore Launch',
    to: '/services/launch',
    color: 'bg-sediment',
    dark: true,
    flip: false,
    facts: [
      { label: 'Structure', value: 'Fixed-fee engagement'       },
      { label: 'Scope',     value: 'Grant strategy and authoring' },
      { label: 'Geography', value: 'NJ workforce funding'       },
    ],
  },
  {
    name: 'Aedifica Rebuild',
    tag: 'Adult Cohort',
    desc: 'A 12-week bridge cohort for justice-impacted adults, returning caregivers, veterans, and career changers seeking credible entry into construction-management-track work.',
    cta: 'Explore Rebuild',
    to: '/services/rebuild',
    color: 'bg-rebuild',
    dark: false,
    flip: true,
    facts: [
      { label: 'Format',       value: '12-week cohort' },
      { label: 'Participants', value: 'Adult learners'  },
      { label: 'Geography',    value: 'NJ · NY metro'   },
    ],
  },
] as const

export function ServicesOverview() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-snow pt-16 pb-20 lg:pt-20 lg:pb-28 xl:pt-24 xl:pb-32 overflow-hidden"
        aria-labelledby="services-hero-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_0.65fr] lg:gap-16 xl:gap-20 lg:items-start">

            <div>
              <motion.p
                className="text-[10.5px] uppercase tracking-[0.22em] text-datum mb-8 leading-none select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
                Aedifica Services
              </motion.p>
              <motion.h1
                id="services-hero-heading"
                className="text-[2.5rem] lg:text-[3.875rem] xl:text-[5.25rem] leading-[1.04] tracking-[-0.03em] text-anthracite italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 32 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={reduce ? undefined : { duration: 0.7, delay: 0.18, ease: SPRING }}>
                Services designed to build a pathway
              </motion.h1>
            </div>

            <div className="mt-10 lg:mt-0 lg:pt-24 xl:pt-32">
              <motion.p
                className="text-[15.5px] text-anthracite/75 leading-[1.72]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={reduce ? undefined : { duration: 0.6, delay: 0.32, ease: EASE }}>
                Five programs across the talent pipeline:{' '}
                <strong className="text-anthracite/90 font-medium">Explore</strong> and{' '}
                <strong className="text-anthracite/90 font-medium">Pathway</strong> for schools and youth,{' '}
                <strong className="text-anthracite/90 font-medium">Launch</strong> for institutions building funded pathways,{' '}
                <strong className="text-anthracite/90 font-medium">Rebuild</strong> for adult career changers, and a{' '}
                <strong className="text-anthracite/90 font-medium">Talent Pipeline</strong> for employers.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* ── All Programs ── */}
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
          </div>
        </div>

      </section>

      {/* ── Shared Principles ── */}
      <section
        className="bg-snow py-12 lg:py-18"
        aria-labelledby="principles-heading">
        <div className="max-w-7xl mx-auto px-6">

          <motion.p
            className="text-[10.5px] text-anthracite/75 uppercase tracking-[0.22em] mb-12 lg:mb-16 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
            Shared principles
          </motion.p>

          {/* Pair 1 — Role relevance (feature, left) + Employer validation (supporting, right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] lg:gap-16 xl:gap-24 pb-8 lg:pb-12 lg:items-start">
            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 32 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              <h3
                className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4.25rem] leading-[1.05] tracking-[-0.03em] text-datum italic mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                Role relevance
              </h3>
              <p
                className="text-[15px] text-anthracite/75 leading-[1.72] max-w-[54ch]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Program components must connect to real construction-management work and realistic
                progression opportunities.
              </p>
            </motion.div>

            <motion.div
              className="mt-8 lg:mt-16"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
              <h3
                className="text-[1.25rem] lg:text-[1.625rem] xl:text-[2rem] leading-[1.15] tracking-[-0.015em] text-datum mb-3"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Employer validation
              </h3>
              <p
                className="text-[13.5px] text-anthracite/75 leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Employers should inform expectations, interact with learners, and help verify the
                relevance of preparation.
              </p>
            </motion.div>
          </div>

          <div className="border-t border-sediment/20" />

          {/* Pair 2 — Institutional alignment (supporting, left) + Outcome accountability (feature, right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] lg:gap-16 xl:gap-24 pt-8 lg:pt-12 lg:items-start">
            <motion.div
              className="lg:mt-16"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
              <h3
                className="text-[1.25rem] lg:text-[1.625rem] xl:text-[2rem] leading-[1.15] tracking-[-0.015em] text-datum mb-3"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Institutional alignment
              </h3>
              <p
                className="text-[13.5px] text-anthracite/75 leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Delivery must be aligned to recruitment capacity, funding structures, support
                services, and articulation opportunities.
              </p>
            </motion.div>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 32 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, delay: 0.12, ease: SPRING }}>
              <h3
                className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4.25rem] leading-[1.05] tracking-[-0.03em] text-datum italic mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                Outcome accountability
              </h3>
              <p
                className="text-[15px] text-anthracite/75 leading-[1.72] max-w-[54ch]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Aedifica intends to report what happens after instruction: clearly, consistently,
                and without substituting enrollment for impact.
              </p>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ── How to Choose ── */}
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
            {([
              {
                name: 'Explore',
                to: '/services/explore',
                condition: 'your goal is awareness before learners choose a direction',
                detail: 'For middle and high school students who need hands-on exposure to engineering and construction management before they have decided on a path. Schools, after-school programs, and summer programs are the delivery vehicle.',
              },
              {
                name: 'Pathway',
                to: '/services/pathway',
                condition: 'your school needs a construction-management curriculum track',
                detail: 'For districts and CTE programs designing a secondary-school curriculum that carries students toward college engineering, apprenticeship, and construction-management careers. Requires a school or district partner.',
              },
              {
                name: 'Launch',
                to: '/services/launch',
                condition: 'your organization needs to design, fund, and implement a workforce pathway',
                detail: 'For community colleges, school districts, workforce boards, and CBOs that need a grant strategy and curriculum framework to deliver their own construction-management program. Launch provides the design and funding infrastructure.',
              },
              {
                name: 'Rebuild',
                to: '/services/rebuild',
                condition: 'your learners are adults who need a bridge into the industry',
                detail: 'For adult learners who are ready to move into construction-management-track work: justice-impacted adults, veterans, returning caregivers, and career changers. The 12-week cohort is employer-connected and credential-aligned.',
              },
              {
                name: 'Talent Pipeline',
                to: '/services/talent-pipeline',
                condition: 'you are an employer seeking prepared, vetted candidates',
                detail: 'For construction firms, contractors, and developers who want early access to trained emerging talent and participation in capstone and interview-week activities.',
              },
            ] as const).map(({ name, to, condition, detail }, i) => (
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
                  className="inline-flex items-center gap-1.5 text-[12.5px] text-datum tracking-[-0.01em] mt-4 lg:mt-0 group flex-shrink-0"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  View {name}
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <PageCTA
        id="services-cta"
        heading="A pathway is built with partners who are ready to be accountable."
        body="Discuss a Rebuild cohort, a Launch engagement, or an institutional briefing. Partnerships are open now."
        primary={{ label: 'Start a Partnership Conversation', to: '/partner' }}
        secondary={{ label: 'Request an Institutional Briefing', to: '/partner' }}
      />

    </main>
  )
}
