import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const LEARN_AREAS = [
  'OSHA-10 or OSHA-30 exposure and preparation',
  'NCCER Core pathway preparation',
  'Bluebeam and Procore Foundations',
  'BIM viewer literacy and digital plan navigation',
  'Project documentation, submittal, RFI, and document-control fundamentals',
  'Foundational estimating and scheduling concepts',
  'Supervisory communication and professional jobsite coordination',
  'Employer-informed capstone activity',
  'Structured interview-readiness and interview week',
] as const

const LAUNCH_DELIVERABLES = [
  'Opportunity and eligibility review',
  'Program architecture',
  'Partner and evidence matrix',
  'Narrative and proposal authoring',
  'Budget and measurement alignment',
  'Submission readiness review',
] as const

const PRINCIPLES = [
  {
    name: 'Role relevance',
    desc: 'Program components must connect to real construction-management work and realistic progression opportunities.',
  },
  {
    name: 'Employer validation',
    desc: 'Employers should inform expectations, interact with learners, and help verify the relevance of preparation.',
  },
  {
    name: 'Institutional alignment',
    desc: 'Delivery must be aligned to recruitment capacity, funding structures, support services, and articulation opportunities.',
  },
  {
    name: 'Outcome accountability',
    desc: 'Aedifica intends to report what happens after instruction: clearly, consistently, and without substituting enrollment for impact.',
  },
] as const

const EXPANSION = [
  {
    status: 'Expansion · Year 2+',
    name: 'Pathway',
    href: '/services/pathway',
    desc: 'High-school construction-management curriculum designed for career readiness and future articulation, informed by prior pre-college engineering delivery experience.',
  },
  {
    status: 'Expansion · Year 2+',
    name: 'Talent Pipeline',
    href: '/services/talent-pipeline',
    desc: 'Employer membership infrastructure that connects construction firms with prepared emerging talent after outcome evidence establishes the foundation.',
  },
  {
    status: 'Expansion · Year 2+',
    name: 'Explore',
    href: '/services/explore',
    desc: 'Middle- and high-school construction and infrastructure career exposure modules, informed by prior local STEM implementation experience.',
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

            {/* Right column offset significantly down */}
            <div className="mt-10 lg:mt-0 lg:pt-24 xl:pt-32">
              <motion.p
                className="text-[15.5px] text-anthracite/65 leading-[1.72]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={reduce ? undefined : { duration: 0.6, delay: 0.32, ease: EASE }}>
                Aedifica{' '}
                <strong className="text-anthracite/85 font-medium">Rebuild</strong>, a 12-week
                adult bridge cohort designed for credible construction-management-track entry and
                advancement; Aedifica{' '}
                <strong className="text-anthracite/85 font-medium">Launch</strong>, support for
                institutions pursuing workforce and apprenticeship-related funding.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Delivery discipline ── */}
      <section
        className="bg-bone py-16 lg:py-24"
        aria-labelledby="discipline-heading">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_0.6fr] lg:gap-20 xl:gap-24 lg:items-start">
            <motion.h2
              id="discipline-heading"
              className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-8 lg:mb-0"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
              Start with delivery discipline.
            </motion.h2>
            <motion.p
              className="text-[15px] text-anthracite/60 leading-[1.72] lg:pt-4"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.12, ease: EASE }}>
              Aedifica's initial focus is intentionally narrow. A workforce platform earns the
              right to scale after it secures committed partners, delivers responsibly, and
              publishes outcomes with integrity.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Rebuild ── */}
      <section
        className="bg-snow relative overflow-hidden py-20 lg:py-28 xl:py-32"
        aria-labelledby="rebuild-heading">
        {/* Ghost 01 */}
        <span
          className="pointer-events-none select-none absolute top-0 right-0 leading-[0.82] text-datum translate-x-[12%] -translate-y-[8%]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 300,
            fontSize: 'clamp(10rem, 22vw, 22rem)',
            opacity: 0.045,
          }}
          aria-hidden="true">
          01
        </span>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_0.8fr] lg:gap-16 xl:gap-20 lg:items-start">

            {/* Left */}
            <div>
              <motion.span
                className="inline-block text-[11px] uppercase tracking-[0.16em] text-patina border border-patina/35 px-3 py-1 mb-8 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                Year 1 · Core Offering
              </motion.span>

              <motion.h2
                id="rebuild-heading"
                className="text-[2.25rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[1.05] tracking-[-0.03em] text-anthracite italic mb-6"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, delay: 0.06, ease: SPRING }}>
                Aedifica Rebuild
              </motion.h2>

              <motion.p
                className="text-[15px] text-anthracite/65 leading-[1.7] mb-4"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.12, ease: EASE }}>
                A 12-week adult bridge cohort designed for overlooked adults: justice-impacted
                adults, returning mothers, veterans, and learners seeking credible entry into
                construction-management-track work.
              </motion.p>

              <motion.p
                className="text-[14px] text-anthracite/50 leading-[1.7] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.18, ease: EASE }}>
                Prepares participants for realistic initial roles, employer interaction, and
                documented progression routes over time.
              </motion.p>

              <motion.div
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: 0.22, ease: EASE }}>
                <Link
                  to="/services/rebuild"
                  className="inline-flex items-center gap-2 bg-datum text-white text-[13.5px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-transform duration-100 hover:bg-datum/85 group"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Explore Rebuild
                  <span
                    className="transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true">
                    →
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Right: learning areas list, offset down */}
            <div className="mt-12 lg:mt-0 lg:pt-14 xl:pt-18">
              <motion.p
                className="text-[10.5px] text-quarry uppercase tracking-[0.18em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: 0.08, ease: EASE }}>
                Planned learning areas
              </motion.p>
              <ul className="list-none border-t border-sediment/25">
                {LEARN_AREAS.map((area, i) => (
                  <motion.li
                    key={area}
                    className="text-[13.5px] text-anthracite/65 leading-[1.65] border-b border-sediment/25 py-3.5"
                    style={{ fontFamily: 'var(--font-body)' }}
                    initial={reduce ? undefined : { opacity: 0, x: 8 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.35, delay: 0.14 + i * 0.045, ease: EASE }}>
                    {area}
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Launch ── */}
      <section
        className="bg-bone relative overflow-hidden py-20 lg:py-28 xl:py-32"
        aria-labelledby="launch-heading">
        {/* Ghost 02 */}
        <span
          className="pointer-events-none select-none absolute top-0 left-0 leading-[0.82] text-datum -translate-x-[10%] -translate-y-[8%]"
          style={{
            fontFamily: 'var(--font-heading)',
            fontWeight: 300,
            fontSize: 'clamp(10rem, 22vw, 22rem)',
            opacity: 0.04,
          }}
          aria-hidden="true">
          02
        </span>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="lg:max-w-[56rem] lg:ml-auto">

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.16em] text-patina border border-patina/35 px-3 py-1 mb-8 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              Year 1 · Core Offering
            </motion.span>

            <motion.h2
              id="launch-heading"
              className="text-[2.25rem] lg:text-[3.5rem] xl:text-[4.5rem] leading-[1.05] tracking-[-0.03em] text-anthracite italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, delay: 0.06, ease: SPRING }}>
              Aedifica Launch
            </motion.h2>

            <motion.p
              className="text-[15px] text-anthracite/65 leading-[1.7] mb-12 max-w-[58ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.12, ease: EASE }}>
              A fixed-fee grant strategy and proposal-authoring service for community
              organizations, county colleges, school districts, and training providers pursuing
              workforce, apprenticeship, and career-pathway funding.
            </motion.p>

            <motion.div
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.18, ease: EASE }}>
              <p
                className="text-[10.5px] text-quarry uppercase tracking-[0.18em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Deliverables
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 border-t border-sediment/25">
                {LAUNCH_DELIVERABLES.map(item => (
                  <div
                    key={item}
                    className="text-[13.5px] text-anthracite/65 leading-[1.65] border-b border-sediment/25 py-3.5"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-10"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.26, ease: EASE }}>
              <Link
                to="/services/launch"
                className="inline-flex items-center gap-2 bg-datum text-white text-[13.5px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-transform duration-100 hover:bg-datum/85 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Explore Launch
                <span
                  className="transition-transform duration-150 group-hover:translate-x-1"
                  aria-hidden="true">
                  →
                </span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Shared Principles ── */}
      <section
        className="bg-snow py-16 lg:py-24"
        aria-labelledby="principles-heading">
        <div className="max-w-7xl mx-auto px-6">

          <motion.p
            className="text-[10.5px] text-quarry uppercase tracking-[0.22em] mb-10 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
            Shared principles
          </motion.p>

          <div className="border-t border-sediment/25">
            {PRINCIPLES.map(({ name, desc }, i) => (
              <motion.div
                key={name}
                className="grid grid-cols-1 lg:grid-cols-[0.45fr_1fr] lg:gap-16 xl:gap-20 border-b border-sediment/25 py-7 lg:py-9 lg:items-baseline"
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.06, ease: EASE }}>
                <h3
                  className="text-[1.375rem] lg:text-[1.5rem] leading-[1.2] tracking-[-0.02em] text-anthracite italic mb-2 lg:mb-0"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {name}
                </h3>
                <p
                  className="text-[14px] text-anthracite/60 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Expansion ── */}
      <section
        className="bg-bone py-16 lg:py-24"
        aria-labelledby="expansion-heading">
        <div className="max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_0.7fr] lg:gap-16 xl:gap-20 lg:items-start mb-14 lg:mb-16">
            <motion.h2
              id="expansion-heading"
              className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-6 lg:mb-0"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
              Expand after evidence, not before it.
            </motion.h2>
            <motion.p
              className="text-[14.5px] text-anthracite/60 leading-[1.72] lg:pt-4"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              Aedifica's future service platform is designed to carry validated learning into
              secondary education, employer partnerships, and earlier career exposure. These
              offerings are intended to scale after Cohort 1 outcome reporting provides credible
              evidence for expansion.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-sediment/25 border-t border-sediment/25">
            {EXPANSION.map(({ status, name, href, desc }, i) => (
              <motion.div
                key={name}
                className={[
                  'pt-8 lg:pt-10 pb-8 lg:pb-10',
                  i > 0 ? 'lg:pl-10 xl:pl-12' : '',
                  i < 2 ? 'lg:pr-10 xl:pr-12' : '',
                ].filter(Boolean).join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.065, ease: EASE }}>
                <p
                  className="text-[10.5px] text-quarry uppercase tracking-[0.14em] mb-4 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {status}
                </p>
                <h3
                  className="text-[1.625rem] lg:text-[1.875rem] xl:text-[2.125rem] leading-[1.1] tracking-[-0.02em] text-anthracite italic mb-4"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {name}
                </h3>
                <p
                  className="text-[13.5px] text-anthracite/55 leading-[1.68] mb-6"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {desc}
                </p>
                <Link
                  to={href}
                  className="inline-flex items-center gap-2 text-[13px] text-datum tracking-[-0.01em] group"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Learn more
                  <span
                    className="transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true">
                    →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="bg-datum py-24 lg:py-32"
        aria-labelledby="services-cta-heading">
        <div className="max-w-[860px] mx-auto px-6 text-center">

          <motion.h2
            id="services-cta-heading"
            className="text-[2.25rem] lg:text-[3.5rem] xl:text-[4.25rem] leading-[1.07] tracking-[-0.03em] text-white italic mb-8"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
            A pathway is built with partners who are ready to be accountable.
          </motion.h2>

          <motion.p
            className="text-[15px] text-white/65 leading-[1.72] mb-10 max-w-[50ch] mx-auto"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.12, ease: EASE }}>
            Discuss a Rebuild cohort, a Launch engagement, or an institutional briefing. Year 1
            partnerships are being formed now.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.22, ease: EASE }}>
            <Link
              to="/partner"
              className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/92"
              style={{ fontFamily: 'var(--font-body)' }}>
              Start a Partnership Conversation
            </Link>
            <a
              href="#briefing"
              className="inline-flex items-center justify-center border border-white/35 text-white text-[14px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Request an Institutional Briefing
            </a>
          </motion.div>

        </div>
      </section>

    </main>
  )
}
