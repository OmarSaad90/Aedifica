'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { PageCTA } from '../components/PageCTA'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const


const EXPANSION = [
  {
    name: 'Pathway',
    href: '/services/pathway',
    desc: 'High-school construction-management curriculum designed for career readiness and future articulation, informed by prior pre-college engineering delivery experience.',
  },
  {
    name: 'Talent Pipeline',
    href: '/services/talent-pipeline',
    desc: 'Employer membership infrastructure that connects construction firms with prepared emerging talent after outcome evidence establishes the foundation.',
  },
  {
    name: 'Explore',
    href: '/services/explore',
    desc: 'Middle- and high-school construction and infrastructure career exposure modules, informed by prior local STEM implementation experience.',
  },
] as const

const REBUILD_FACTS = [
  { label: 'Format', value: '12-week cohort' },
  { label: 'Participants', value: 'Adult learners' },
  { label: 'Geography', value: 'NJ · NY metro' },
] as const

const LAUNCH_FACTS = [
  { label: 'Structure', value: 'Fixed-fee engagement' },
  { label: 'Scope', value: 'Grant strategy and authoring' },
  { label: 'Geography', value: 'NJ workforce funding' },
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
                <strong className="text-anthracite/90 font-medium">Rebuild</strong> for adult career changers,{' '}
                <strong className="text-anthracite/90 font-medium">Launch</strong> for institutions building funded pathways,{' '}
                <strong className="text-anthracite/90 font-medium">Explore</strong> and{' '}
                <strong className="text-anthracite/90 font-medium">Pathway</strong> for schools and youth, and a{' '}
                <strong className="text-anthracite/90 font-medium">Talent Pipeline</strong> for employers.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Core Programs ── */}
      <section aria-label="Core programs">

        {/* Rebuild — datum */}
        <div className="relative bg-datum py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="lg:grid lg:grid-cols-[1fr_0.48fr] lg:gap-16 xl:gap-24 lg:items-end">

              <div>
                <motion.span
                  className="inline-block text-[10.5px] uppercase tracking-[0.16em] bg-white/15 text-white px-3 py-1 mb-8 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                  initial={reduce ? undefined : { opacity: 0, y: 10 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                  Adult Bridge Cohort
                </motion.span>

                <motion.h2
                  className="text-[2.5rem] lg:text-[4rem] xl:text-[5rem] leading-[1.02] tracking-[-0.035em] text-white italic mb-6"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                  initial={reduce ? undefined : { opacity: 0, y: 28 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.65, delay: 0.06, ease: SPRING }}>
                  Aedifica Rebuild
                </motion.h2>

                <motion.p
                  className="text-[15px] text-white/90 leading-[1.72] mb-8 max-w-[52ch]"
                  style={{ fontFamily: 'var(--font-body)' }}
                  initial={reduce ? undefined : { opacity: 0, y: 18 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.55, delay: 0.12, ease: EASE }}>
                  A 12-week adult bridge cohort for overlooked talent: justice-impacted adults,
                  returning mothers, veterans, and others seeking credible entry into
                  construction-management-track work.
                </motion.p>

                <motion.div
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.45, delay: 0.2, ease: EASE }}>
                  <Link href="/services/rebuild"
                    className="inline-flex items-center gap-2 bg-white text-datum text-[13.5px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-transform duration-100 hover:bg-white/90 group"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Explore Rebuild
                    <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </div>

              {/* Key facts, bottom-aligned */}
              <motion.div
                className="mt-8 lg:mt-0 lg:self-end"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.22, ease: EASE }}>
                {REBUILD_FACTS.map(({ label, value }) => (
                  <div key={label} className="border-t border-white/15 py-4">
                    <p
                      className="text-[10px] uppercase tracking-[0.14em] text-white/90 mb-1 select-none"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {label}
                    </p>
                    <p
                      className="text-[15px] text-white/90"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {value}
                    </p>
                  </div>
                ))}
                <div className="border-t border-white/15" />
              </motion.div>

            </div>
          </div>
          {/* Bottom fade — softens the lower edge toward the seam */}
          <div
            className="absolute bottom-0 left-0 right-0 h-40 lg:h-56 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.20))' }}
            aria-hidden="true"
          />
        </div>

        {/* Launch — patina, FLIPPED */}
        <div className="relative bg-patina py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="lg:grid lg:grid-cols-[0.48fr_1fr] lg:gap-16 xl:gap-24 lg:items-end">

              {/* Key facts, bottom-aligned — left side on Launch */}
              <motion.div
                className="mt-8 lg:mt-0 lg:self-end"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.22, ease: EASE }}>
                {LAUNCH_FACTS.map(({ label, value }) => (
                  <div key={label} className="border-t border-white/15 py-4">
                    <p
                      className="text-[10px] uppercase tracking-[0.14em] text-white/92 mb-1 select-none"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {label}
                    </p>
                    <p
                      className="text-[15px] text-white/92"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {value}
                    </p>
                  </div>
                ))}
                <div className="border-t border-white/15" />
              </motion.div>

              {/* Top fade — mirrors Rebuild bottom fade */}
              <div
                className="absolute top-0 left-0 right-0 h-40 lg:h-56 pointer-events-none"
                style={{ background: 'linear-gradient(to top, transparent, rgba(255,255,255,0.20))' }}
                aria-hidden="true"
              />

              {/* Main content, right side */}
              <div>
                <motion.span
                  className="inline-block text-[10.5px] uppercase tracking-[0.16em] bg-white/15 text-white px-3 py-1 mb-8 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                  initial={reduce ? undefined : { opacity: 0, y: 10 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                  Grant Strategy
                </motion.span>

                <motion.h2
                  className="text-[2.5rem] lg:text-[4rem] xl:text-[5rem] leading-[1.02] tracking-[-0.035em] text-white italic mb-6"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                  initial={reduce ? undefined : { opacity: 0, y: 28 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.65, delay: 0.06, ease: SPRING }}>
                  Aedifica Launch
                </motion.h2>

                <motion.p
                  className="text-[15px] text-white/92 leading-[1.72] mb-8 max-w-[52ch]"
                  style={{ fontFamily: 'var(--font-body)' }}
                  initial={reduce ? undefined : { opacity: 0, y: 18 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.55, delay: 0.12, ease: EASE }}>
                  A fixed-fee grant strategy and proposal-authoring service for community
                  organizations, county colleges, school districts, and training providers
                  pursuing workforce, apprenticeship, and career-pathway funding.
                </motion.p>

                <motion.div
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.45, delay: 0.2, ease: EASE }}>
                  <Link href="/services/launch"
                    className="inline-flex items-center gap-2 bg-white text-patina text-[13.5px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-transform duration-100 hover:bg-white/90 group"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Explore Launch
                    <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </div>

            </div>
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

      {/* ── Additional Programs ── */}
      <section
        className="bg-bone py-10 lg:py-14"
        aria-labelledby="expansion-heading">
        <div className="max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_0.7fr] lg:gap-16 xl:gap-20 lg:items-start mb-7 lg:mb-9">
            <motion.h2
              id="expansion-heading"
              className="text-[1.75rem] lg:text-[2.25rem] xl:text-[2.75rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-5 lg:mb-0"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
              School, youth, and employer programs.
            </motion.h2>
            <motion.p
              className="text-[14px] text-anthracite/80 leading-[1.72]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              Youth programs, school-based civil engineering curriculum, and employer pipeline
              partnerships that extend the pathway from early exposure through workforce readiness.
            </motion.p>
          </div>

          <div className="border-t border-sediment/25">
            {EXPANSION.map(({ name, href, desc }, i) => (
              <motion.div
                key={name}
                className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:gap-16 border-b border-sediment/25 py-4 lg:py-5 lg:items-start"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: i * 0.055, ease: EASE }}>
                <div>
                  <div className="mb-3">
                    <h3
                      className="text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {name}
                    </h3>
                  </div>
                  <p
                    className="text-[13.5px] text-anthracite/75 leading-[1.65] max-w-[65ch]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {desc}
                  </p>
                </div>
                <Link href={href}
                  className="inline-flex items-center gap-2 text-[13px] text-datum tracking-[-0.01em] mt-3 lg:mt-0 group"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  View {name}
                  <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Program Comparison ── */}
      <section className="bg-snow py-12 lg:py-18 overflow-x-auto" aria-labelledby="comparison-heading">
        <div className="max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-16 xl:gap-24 lg:items-end mb-10 lg:mb-12">
            <motion.h2
              id="comparison-heading"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic mb-4 lg:mb-0 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              All five programs in one view.
            </motion.h2>
            <motion.p
              className="text-[14px] text-anthracite/75 leading-[1.72]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              Use this comparison to identify the best starting point. Final program formats, calendars, costs, and credentials are customized by partner and cohort.
            </motion.p>
          </div>

          {/* Table header */}
          <div className="hidden lg:grid lg:grid-cols-[180px_1fr_1fr_1fr_90px] border-b border-sediment/30 pb-3 mb-1">
            {['Program', 'Primary audience', 'Purpose', 'Format', ''].map(col => (
              <p
                key={col}
                className="text-[10px] uppercase tracking-[0.13em] text-anthracite/75"
                style={{ fontFamily: 'var(--font-body)' }}>
                {col}
              </p>
            ))}
          </div>

          {/* Rows */}
          {([
            {
              name: 'Explore',
              to: '/services/explore',
              tag: 'Youth · School',
              isY1: true,
              audience: 'Middle and high school students, after-school and summer programs',
              purpose: 'Career awareness and hands-on discovery in engineering and the built environment',
              format: 'Workshops, summer camps, school and partner programs',
            },
            {
              name: 'Pathway',
              to: '/services/pathway',
              tag: 'School curriculum',
              isY1: true,
              audience: 'High schools, school districts, CTE and career pathway programs',
              purpose: 'Structured civil engineering and construction-management curriculum for secondary education',
              format: 'Semester course, summer camps, career pathway and capstone modules',
            },
            {
              name: 'Rebuild',
              to: '/services/rebuild',
              tag: 'Adult cohort',
              isY1: true,
              audience: 'Adults, career changers, veterans, returning citizens, caregivers',
              purpose: 'Bridge into construction-management careers with credentials and employer access',
              format: '12-week structured cohort, credential preparation, portfolio, employer introductions',
            },
            {
              name: 'Launch',
              to: '/services/launch',
              tag: 'Grant strategy',
              isY1: true,
              audience: 'Schools, workforce boards, CBOs, community colleges, and employers',
              purpose: 'Design, fund, and implement a workforce pathway with a grant-aligned strategy',
              format: 'Advisory, grant strategy, curriculum design, partner implementation',
            },
            {
              name: 'Talent Pipeline',
              to: '/services/talent-pipeline',
              tag: 'Employer partnership',
              isY1: true,
              audience: 'Employers and contractors seeking trained construction-management candidates',
              purpose: 'Connect firms with prepared, vetted emerging talent after outcome evidence',
              format: 'Employer membership, candidate access, capstone engagement',
            },
          ] as const).map(({ name, to, tag, isY1, audience, purpose, format }, i) => (
            <motion.div
              key={name}
              className={[
                'border-b border-sediment/20 py-5 lg:py-6',
                'lg:grid lg:grid-cols-[180px_1fr_1fr_1fr_90px] lg:gap-4 lg:items-start',
              ].join(' ')}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.38, delay: i * 0.04, ease: EASE }}>

              {/* Program name */}
              <div className="mb-3 lg:mb-0">
                <p
                  className={[
                    'text-[1.0625rem] italic leading-none tracking-[-0.018em] mb-1',
                    isY1 ? 'text-anthracite' : 'text-anthracite/65',
                  ].join(' ')}
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {name}
                </p>
                <span
                  className={[
                    'text-[10px] uppercase tracking-[0.1em]',
                    isY1 ? 'text-datum' : 'text-anthracite/35',
                  ].join(' ')}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {tag}
                </span>
              </div>

              {/* Audience */}
              <div
                className="text-[13px] text-anthracite/75 leading-[1.6] mb-2 lg:mb-0"
                style={{ fontFamily: 'var(--font-body)' }}>
                <span className="lg:hidden text-[10px] uppercase tracking-[0.1em] text-anthracite/55 block mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>Audience</span>
                {audience}
              </div>

              {/* Purpose */}
              <div
                className="text-[13px] text-anthracite/75 leading-[1.6] mb-2 lg:mb-0"
                style={{ fontFamily: 'var(--font-body)' }}>
                <span className="lg:hidden text-[10px] uppercase tracking-[0.1em] text-anthracite/55 block mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>Purpose</span>
                {purpose}
              </div>

              {/* Format */}
              <div
                className="text-[13px] text-anthracite/75 leading-[1.6] mb-3 lg:mb-0"
                style={{ fontFamily: 'var(--font-body)' }}>
                <span className="lg:hidden text-[10px] uppercase tracking-[0.1em] text-anthracite/55 block mb-0.5" style={{ fontFamily: 'var(--font-body)' }}>Format</span>
                {format}
              </div>

              {/* CTA */}
              <div className="lg:text-right">
                <Link href={to}
                  className="inline-flex items-center gap-1.5 text-[12.5px] text-datum tracking-[-0.01em] group"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  View
                  <span className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          ))}

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
                name: 'Rebuild',
                to: '/services/rebuild',
                condition: 'your learners are adults who need a bridge into the industry',
                detail: 'For adult learners who are ready to move into construction-management-track work: justice-impacted adults, veterans, returning caregivers, and career changers. The 12-week cohort is employer-connected and credential-aligned.',
              },
              {
                name: 'Launch',
                to: '/services/launch',
                condition: 'your organization needs to design, fund, and implement a workforce pathway',
                detail: 'For community colleges, school districts, workforce boards, and CBOs that need a grant strategy and curriculum framework to deliver their own construction-management program. Launch provides the design and funding infrastructure.',
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
