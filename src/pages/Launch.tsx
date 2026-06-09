import { SEO, SITE_URL } from '../components/SEO'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { PageCTA } from '../components/PageCTA'

const LAUNCH_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      name: 'Aedifica Launch',
      description:
        'Fixed-fee workforce grant strategy and proposal-authoring support for New Jersey community organizations, education institutions, and training providers.',
      provider: { '@id': `${SITE_URL}/#organization` },
      serviceType: 'Workforce Grant Strategy and Proposal Authoring',
      areaServed: { '@type': 'State', name: 'New Jersey' },
      audience: {
        '@type': 'Audience',
        audienceType:
          'Community organizations, education institutions, and workforce training providers in New Jersey',
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Launch', item: `${SITE_URL}/services/launch` },
      ],
    },
  ],
} as Record<string, unknown>

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const AUDIENCES = [
  {
    type: 'Community-based organizations',
    desc: 'Developing employment or pre-apprenticeship programming with limited internal capacity to navigate complex workforce funding structures.',
  },
  {
    type: 'County colleges',
    desc: 'Connecting available funding to credentials, articulation agreements, and employment pathways for adult and non-traditional learners.',
  },
  {
    type: 'Districts and vocational institutions',
    desc: 'Pursuing career-connected learning resources, CTE expansion, and workforce-aligned program development.',
  },
  {
    type: 'Training providers',
    desc: 'Refining an apprenticeship or construction workforce proposal with competitive program architecture and measurable outcomes.',
  },
] as const

const DELIVERABLES = [
  {
    num: '01',
    name: 'Opportunity and eligibility review',
    body: 'Assessment of the most relevant funding vehicles for the organization\'s current program capacity, mission alignment, and geographic focus.',
    phase: 'Discovery',
  },
  {
    num: '02',
    name: 'Program architecture',
    body: 'Design of the program structure: delivery model, learning objectives, partner roles, and the measurable outcomes framework required for competitive proposals.',
    phase: 'Architecture',
  },
  {
    num: '03',
    name: 'Partner and evidence matrix',
    body: 'Documentation of the institutional partners, employer commitments, and evidence base required to make the program credible to reviewers.',
    phase: 'Architecture',
  },
  {
    num: '04',
    name: 'Narrative and proposal authoring',
    body: 'Development of the program narrative, participant-outcome projections, and a proposal document aligned to funder requirements and review criteria.',
    phase: 'Authoring',
  },
  {
    num: '05',
    name: 'Budget and measurement alignment',
    body: 'Budget construction, allowable cost review, and outcome metric calibration to ensure the request is fundable and the program is reportable.',
    phase: 'Authoring',
  },
  {
    num: '06',
    name: 'Submission readiness review',
    body: 'Final review of proposal completeness, required attachments, funder alignment, and submission logistics before the deadline.',
    phase: 'Submission',
  },
] as const

const FUNDING = [
  {
    name: 'Pre-Apprenticeship in Career Education (PACE)',
    note: 'NJ Department of Labor and Workforce Development',
  },
  {
    name: 'Growing Apprenticeships in New Sectors (GAINS)',
    note: 'NJ DOL, sector-specific workforce expansion',
  },
  {
    name: 'NJ Economic Development Authority workforce opportunities',
    note: 'NJEDA career pathway and workforce investment programs',
  },
  {
    name: 'Workforce Innovation and Opportunity Act Title I pathways',
    note: 'Federal WIOA: adult, dislocated worker, and youth services',
  },
  {
    name: 'Federal apprenticeship and workforce-related opportunities',
    note: 'DOL apprenticeship, infrastructure workforce, and related federal programs',
  },
] as const

const DIFFERENTIATORS = [
  'Program structure designed before the proposal is written',
  'Partner and employer matrix built before the ask',
  'Outcomes framework calibrated to funder expectations from the start',
  'Budget and allowable cost review before submission',
] as const

export function Launch() {
  const reduce = useReducedMotion()

  return (
    <main>
      <SEO
        title="Launch | Workforce Grant Strategy & Proposal Authoring · NJ"
        description="Fixed-fee workforce grant strategy and proposal-authoring support for New Jersey community organizations, education institutions, and training providers."
        path="/services/launch"
        schema={LAUNCH_SCHEMA}
      />

      {/* ── Hero ── */}
      <section
        className="bg-patina min-h-[68vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="launch-h1">

        {/* Full-bleed right-half photo — desktop only */}
        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-2/5"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="https://picsum.photos/seed/grant-meeting/800/600"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(25%) contrast(1.08)' }}
            loading="eager"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-[60%] lg:pr-8 xl:pr-12">
            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/15 text-white px-3 py-1 mb-10 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              Year 1 · Grant Strategy
            </motion.span>

            <motion.h1
              id="launch-h1"
              className="text-[2.75rem] lg:text-[4.5rem] xl:text-[6rem] leading-[0.96] tracking-[-0.035em] text-white italic mb-10"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Fund workforce pathways designed to deliver and report outcomes.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.4, ease: EASE }}>
              {(['Fixed-fee', 'Institutions', 'New Jersey', 'Year 1 launch'] as const).map((item, i) => (
                <span
                  key={item}
                  className="text-[13px] text-white/65 tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                  {i < 3 && <span className="mx-4 text-white/20" aria-hidden="true">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who It Serves ── bg-snow */}
      <section className="bg-snow py-12 lg:py-18" aria-labelledby="launch-serves-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="launch-serves-h2"
            className="text-[2.25rem] lg:text-[4rem] xl:text-[5.25rem] leading-[1.04] tracking-[-0.03em] text-anthracite italic mb-14 lg:mb-20"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
            Built for institutions serious about funding programs the right way.
          </motion.h2>

          <div className="border-t border-sediment/25">
            {AUDIENCES.map(({ type, desc }, i) => (
              <motion.div
                key={type}
                className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] lg:gap-16 xl:gap-24 border-b border-sediment/25 py-7 lg:py-8 lg:items-start"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.07, ease: EASE }}>
                <h3
                  className="text-[1.125rem] lg:text-[1.375rem] xl:text-[1.875rem] text-anthracite italic leading-[1.2] tracking-[-0.02em] mb-2 lg:mb-0"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {type}
                </h3>
                <p
                  className="text-[14.5px] text-anthracite/75 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Program Architecture First ── bg-bone */}
      <section className="bg-bone py-12 lg:py-18" aria-label="What makes Launch different">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.15fr_1fr] lg:gap-14 xl:gap-20 lg:items-start">

            {/* Left: photo + pull statement */}
            <div>
              <motion.div
                className="overflow-hidden mb-10"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
                <img
                  src="https://picsum.photos/seed/planning-session/700/370"
                  alt=""
                  className="w-full h-auto object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>

              <motion.p
                className="text-[2rem] lg:text-[2.5rem] xl:text-[3rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, delay: 0.1, ease: EASE }}>
                A fundable proposal describes a program that can deliver. Launch designs the program first.
              </motion.p>
            </div>

            {/* Right: explanation */}
            <div className="lg:pt-6 mt-10 lg:mt-0">
              <motion.p
                className="text-[15.5px] text-anthracite/75 leading-[1.72] mb-7"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
                Most grant-writing services produce proposals. Launch produces program architecture first: a defined delivery model, a realistic outcomes framework, and a partner matrix that funders and reviewers can evaluate on its own merits.
              </motion.p>

              <motion.p
                className="text-[15.5px] text-anthracite/75 leading-[1.72] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.14, ease: EASE }}>
                When the narrative follows a credible architecture, the proposal is stronger. When the program is designed to be reportable, the funder's confidence is founded on something real.
              </motion.p>

              <motion.ul
                className="list-none space-y-3.5"
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.2, ease: EASE }}>
                {DIFFERENTIATORS.map(pt => (
                  <li key={pt} className="flex gap-3.5 items-start">
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-patina mt-[8px]" aria-hidden="true" />
                    <span
                      className="text-[14px] text-anthracite/75 leading-[1.65]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {pt}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── Six Deliverables ── bg-anthracite */}
      <section
        className="bg-anthracite py-14 lg:py-20 relative overflow-hidden"
        aria-labelledby="deliverables-h2">


        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-20 xl:gap-28 lg:items-start mb-14 lg:mb-16">
            <div>
              <motion.p
                className="text-[10.5px] text-white/30 uppercase tracking-[0.22em] mb-6 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
                What Launch delivers
              </motion.p>
              <motion.h2
                id="deliverables-h2"
                className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4rem] leading-[1.07] tracking-[-0.03em] text-white italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Six stages. One fixed-fee engagement.
              </motion.h2>
            </div>
            <motion.p
              className="text-[15px] text-white/60 leading-[1.72] lg:pt-14 xl:pt-16"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              Launch is scoped as a complete engagement: from identifying the right funding opportunity through final submission. The fixed-fee model ensures that program-design work is built in, not billed separately.
            </motion.p>
          </div>

          <div className="border-t border-white/10">
            {DELIVERABLES.map(({ num, name, body, phase }, i) => (
              <motion.div
                key={num}
                className="grid grid-cols-1 lg:grid-cols-[72px_1fr_120px] lg:gap-10 xl:gap-14 border-b border-white/10 py-6 lg:py-8 lg:items-start"
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.05, ease: EASE }}>
                <span
                  className="text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] text-white/28 italic leading-none mb-4 lg:mb-0 block"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                  aria-hidden="true">
                  {num}
                </span>
                <div>
                  <h3
                    className="text-[1.125rem] lg:text-[1.25rem] text-white italic leading-[1.2] tracking-[-0.02em] mb-2.5"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {name}
                  </h3>
                  <p
                    className="text-[14px] text-white/65 leading-[1.7]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {body}
                  </p>
                </div>
                <div className="mt-4 lg:mt-0 lg:pt-1">
                  <span
                    className="inline-block text-[10px] text-white/65 uppercase tracking-[0.16em] bg-white/10 px-2.5 py-1"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {phase}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Relevant Funding ── bg-snow */}
      <section className="bg-snow py-12 lg:py-18" aria-labelledby="funding-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.3fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Left: context + H2 */}
            <div>
              <motion.p
                className="text-[10.5px] text-quarry uppercase tracking-[0.22em] mb-8 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
                Where this fits
              </motion.p>
              <motion.h2
                id="funding-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                New Jersey is deploying significant workforce investment. Institutions that access it with credible program design will define the next generation of pathways.
              </motion.h2>
              <motion.p
                className="text-[14.5px] text-anthracite/75 leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
                Launch is relevant to organizations pursuing any of the funding vehicles below. An initial opportunity review will determine fit, eligibility, and timeline before any engagement begins.
              </motion.p>
            </div>

            {/* Right: funding category rows */}
            <div className="mt-10 lg:mt-0">
              <div className="border-t border-sediment/25">
                {FUNDING.map(({ name, note }, i) => (
                  <motion.div
                    key={name}
                    className="border-b border-sediment/25 py-6 lg:py-7"
                    initial={reduce ? undefined : { opacity: 0, y: 14 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.4, delay: i * 0.06, ease: EASE }}>
                    <p
                      className="text-[1rem] lg:text-[1.125rem] text-anthracite italic leading-[1.3] tracking-[-0.015em] mb-1.5"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {name}
                    </p>
                    <p
                      className="text-[12.5px] text-anthracite/60 leading-[1.5]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {note}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <PageCTA
        id="launch-cta"
        heading="A funding opportunity review is the first step."
        body="Submit a funding opportunity for initial review. Aedifica will assess fit, eligibility, and timeline before any engagement begins. No commitment required."
        primary={{ label: 'Discuss a Launch Engagement', to: '/partner' }}
        secondary={{ label: 'Submit an Opportunity for Review', to: '/partner' }}
        color="patina"
      />

    </main>
  )
}
