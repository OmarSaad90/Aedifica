import { SEO, SITE_URL } from '../components/SEO'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const SERVICES_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
      ],
    },
    {
      '@type': 'WebPage',
      url: `${SITE_URL}/services`,
      name: 'Services | Aedifica Construction-Management Workforce Pathways',
      description:
        'Explore Aedifica Rebuild and Launch, the initial services building measurable construction-management pathways for New Jersey talent, institutions, and employers.',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      provider: { '@id': `${SITE_URL}/#organization` },
    },
  ],
} as Record<string, unknown>

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
      <SEO
        title="Services | Aedifica Construction-Management Workforce Pathways"
        description="Explore Aedifica Rebuild and Launch, the initial services building measurable construction-management pathways for New Jersey talent, institutions, and employers."
        path="/services"
        schema={SERVICES_SCHEMA}
      />

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
                Aedifica{' '}
                <strong className="text-anthracite/90 font-medium">Rebuild</strong>, a 12-week
                adult bridge cohort designed for credible construction-management-track entry and
                advancement; Aedifica{' '}
                <strong className="text-anthracite/90 font-medium">Launch</strong>, support for
                institutions pursuing workforce and apprenticeship-related funding.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Year 1 Services ── */}
      <section aria-label="Year 1 services">

        {/* Rebuild — datum */}
        <div className="relative bg-datum py-16 lg:py-24 xl:py-28">
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
                  Year 1 · Adult Bridge Cohort
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
                  className="text-[15px] text-white/75 leading-[1.72] mb-8 max-w-[52ch]"
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
                  <Link
                    to="/services/rebuild"
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
                      className="text-[10px] uppercase tracking-[0.14em] text-white/45 mb-1 select-none"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {label}
                    </p>
                    <p
                      className="text-[15px] text-white/70"
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
        <div className="relative bg-patina py-16 lg:py-24 xl:py-28">
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
                      className="text-[10px] uppercase tracking-[0.14em] text-white/45 mb-1 select-none"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {label}
                    </p>
                    <p
                      className="text-[15px] text-white/70"
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
                  Year 1 · Grant Strategy
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
                  className="text-[15px] text-white/75 leading-[1.72] mb-8 max-w-[52ch]"
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
                  <Link
                    to="/services/launch"
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
        className="bg-snow py-16 lg:py-24"
        aria-labelledby="principles-heading">
        <div className="max-w-7xl mx-auto px-6">

          <motion.p
            className="text-[10.5px] text-quarry uppercase tracking-[0.22em] mb-12 lg:mb-16 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
            Shared principles
          </motion.p>

          {/* Pair 1 — Role relevance (feature, left) + Employer validation (supporting, right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.7fr] lg:gap-16 xl:gap-24 pb-12 lg:pb-16 lg:items-start">
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
                className="text-[1.375rem] lg:text-[1.75rem] xl:text-[2.25rem] leading-[1.15] tracking-[-0.02em] text-datum italic mb-3"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Employer validation
              </h3>
              <p
                className="text-[13.5px] text-anthracite/70 leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Employers should inform expectations, interact with learners, and help verify the
                relevance of preparation.
              </p>
            </motion.div>
          </div>

          <div className="border-t border-sediment/20" />

          {/* Pair 2 — Institutional alignment (supporting, left) + Outcome accountability (feature, right) */}
          <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1fr] lg:gap-16 xl:gap-24 pt-12 lg:pt-16 lg:items-start">
            <motion.div
              className="lg:mt-16"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
              <h3
                className="text-[1.375rem] lg:text-[1.75rem] xl:text-[2.25rem] leading-[1.15] tracking-[-0.02em] text-datum italic mb-3"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Institutional alignment
              </h3>
              <p
                className="text-[13.5px] text-anthracite/70 leading-[1.7]"
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

      {/* ── Expansion ── */}
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
              Expand after evidence, not before it.
            </motion.h2>
            <motion.p
              className="text-[14px] text-anthracite/70 leading-[1.72]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              Future services are designed to carry validated learning into secondary education,
              employer partnerships, and earlier career exposure. Expansion follows credible
              outcome evidence from Year 1.
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
                    <span
                      className="inline-block text-[9.5px] uppercase tracking-[0.15em] bg-datum/10 text-datum px-2 py-1 mb-3 select-none"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      Expansion · Year 2+
                    </span>
                    <h3
                      className="text-[1.5rem] lg:text-[2rem] xl:text-[2.5rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {name}
                    </h3>
                  </div>
                  <p
                    className="text-[13.5px] text-anthracite/65 leading-[1.65] max-w-[65ch]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {desc}
                  </p>
                </div>
                <Link
                  to={href}
                  className="inline-flex items-center gap-2 text-[13px] text-datum tracking-[-0.01em] mt-3 lg:mt-0 group"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Learn more
                  <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className="bg-snow pt-10 lg:pt-16 pb-0"
        aria-labelledby="services-cta-heading">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="relative px-10 pt-16 pb-12 lg:px-16 lg:pt-20 lg:pb-14 text-center rounded-t-[2rem] overflow-hidden">

            {/* Background image — replace with real photo */}
            <img
              src="https://picsum.photos/seed/nj-workforce/1400/700"
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'grayscale(30%) contrast(1.1)' }}
            />
            {/* Datum overlay */}
            <div className="absolute inset-0 bg-datum/88" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10">
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
                className="text-[15px] text-white/75 leading-[1.72] mb-10 max-w-[50ch] mx-auto"
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

          </div>
        </div>
      </section>

    </main>
  )
}
