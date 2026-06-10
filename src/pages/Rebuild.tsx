import { SEO, SITE_URL } from '../components/SEO'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'
import { PageCTA } from '../components/PageCTA'

const REBUILD_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOccupationalProgram',
      name: 'Aedifica Rebuild',
      description:
        'A planned 12-week adult bridge cohort for credible entry and progression in construction-management careers in New Jersey.',
      provider: { '@id': `${SITE_URL}/#organization` },
      timeToComplete: 'P12W',
      educationalProgramMode: 'in-person',
      occupationalCategory: 'Construction Manager',
      educationalCredentialAwarded: 'Certificate of Completion',
      areaServed: { '@type': 'State', name: 'New Jersey' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Rebuild', item: `${SITE_URL}/services/rebuild` },
      ],
    },
  ],
} as Record<string, unknown>

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const AUDIENCES = [
  {
    label: 'Justice-impacted adults',
    desc: 'Returning to civilian life with untapped capacity for structured, technical work.',
  },
  {
    label: 'Returning mothers',
    desc: 'Re-entering a changed workforce with transferable coordination and organizational skills.',
  },
  {
    label: 'Veterans',
    desc: 'Bringing discipline and leadership that construction-management tracks need.',
  },
  {
    label: 'Career changers',
    desc: 'Adults seeking a structured entry point to construction-management-track opportunity.',
  },
] as const

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

const GATES = [
  {
    num: '01',
    title: 'Recruitment and community support',
    body: 'A community or recruitment partner helps identify participants and define attendance support, case-management coordination, supportive services, and data responsibilities.',
    who: 'CBO, workforce board, or community institution',
  },
  {
    num: '02',
    title: 'Funding and fiscal alignment',
    body: 'A funding or fiscal partner establishes how the cohort is supported, administered, and reported before delivery obligations begin.',
    who: 'Grant administrator, WIOA agent, or philanthropic funder',
  },
  {
    num: '03',
    title: 'Employer commitment',
    body: 'Participating employers help validate role relevance, inform capstone expectations, and commit to a defined interview opportunity for qualified completers.',
    who: 'GC, specialty contractor, developer, or CM firm',
  },
  {
    num: '04',
    title: 'Articulation or apprenticeship pathway',
    body: 'A signed progression route with an apprenticeship sponsor, union local, county college, or employer training program creates a credible next step beyond completion.',
    who: 'Apprenticeship program, union local, or county college',
  },
] as const

const STAGES = [
  {
    range: '0–90 days',
    label: 'Immediate opportunity',
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
    range: '6–18 months',
    label: 'Progression opportunity',
    roles: [
      'Project controls assistant',
      'Junior estimator',
      'Assistant scheduler',
      'BIM coordination assistant',
      'Assistant superintendent trainee',
    ],
  },
  {
    range: '2–4 years',
    label: 'Career-track progression',
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

const REPORTING = [
  'Enrollment, attendance, and completion',
  'Credential preparation and attainment, where applicable and authorized',
  'Employer capstone participation and interviews',
  'Employment placement by role category and time period',
  'Apprenticeship or articulation outcomes',
  'Retention at defined milestones',
  'Continuing education outcomes reported separately from employment',
] as const

const PARTNER_POINTS = [
  'Structured 12-week cohort aligned to your recruitment and case-management infrastructure',
  'Outcome reporting designed for grant compliance and stakeholder accountability',
  'Employer interaction built into the model, not added after delivery',
  'Articulation and apprenticeship integration defined before instruction begins',
] as const

const EMPLOYER_POINTS = [
  'Validate role relevance and inform capstone expectations before cohort delivery',
  'Access a defined pool of interview-ready completers at cohort close',
  'Reduce recruiting pipeline friction for construction-management-track entry roles',
  'Contribute to a NJ workforce model with publishable outcomes and retention tracking',
] as const

export function Rebuild() {
  const reduce = useReducedMotion()

  return (
    <main>
      <SEO
        title="Rebuild | Adult Construction-Management Bridge Cohort in NJ"
        description="Rebuild is Aedifica's planned 12-week adult bridge cohort designed for credible entry and progression in construction-management careers in New Jersey."
        path="/services/rebuild"
        schema={REBUILD_SCHEMA}
      />

      {/* ── Hero ── */}
      <section
        className="bg-datum min-h-[68vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="rebuild-h1">

        {/* Full-bleed right-half photo — desktop only */}
        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-2/5"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="/images/presentation-day.jpg"
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
              Year 1 · Adult Bridge Cohort
            </motion.span>

            <motion.h1
              id="rebuild-h1"
              className="text-[2.75rem] lg:text-[4.5rem] xl:text-[6rem] leading-[0.96] tracking-[-0.035em] text-white italic mb-10"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              A credible bridge into construction-management-track opportunity.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.4, ease: EASE }}>
              {(['12 weeks', 'New Jersey', 'Adult learners', 'Year 1 launch'] as const).map((item, i) => (
                <span key={item} className="text-[13px] text-white/65 tracking-[-0.01em]" style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                  {i < 3 && <span className="mx-4 text-white/25" aria-hidden="true">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Who It Serves ── */}
      <section className="bg-snow pt-14 pb-0 lg:pt-20 overflow-hidden" aria-labelledby="who-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="who-h2"
            className="text-[2.5rem] lg:text-[4.25rem] xl:text-[5.75rem] leading-[1.04] tracking-[-0.035em] text-anthracite italic mb-16 lg:mb-20"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 32 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
            Talent that has been outside the usual recruiting channel. Not outside the opportunity.
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-sediment/25">
            {AUDIENCES.map(({ label, desc }, i) => (
              <motion.div
                key={label}
                className={[
                  'pt-8 lg:pt-10 pb-10 lg:pb-12',
                  i < 3 ? 'lg:pr-8 xl:pr-10 lg:border-r lg:border-sediment/25' : '',
                  i > 0 ? 'lg:pl-8 xl:pl-10' : '',
                  i < 2 ? 'border-b border-sediment/25 sm:border-b-0' : '',
                ].filter(Boolean).join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.07, ease: EASE }}>
                <p
                  className="text-[1rem] lg:text-[1.0625rem] text-anthracite leading-[1.25] tracking-[-0.01em] mb-3 font-medium"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {label}
                </p>
                <p
                  className="text-[13.5px] text-anthracite/70 leading-[1.65]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Learning Areas ── */}
      <section className="bg-bone py-12 lg:py-18" aria-labelledby="learn-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.15fr] lg:gap-14 xl:gap-20 lg:items-start">

            <div>
              <motion.h2
                id="learn-h2"
                className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4.25rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic mb-7"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Preparation grounded in the work.
              </motion.h2>

              <motion.p
                className="text-[15px] text-anthracite/75 leading-[1.72] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
                Each planned learning area connects to a real function in construction-management-track work. Credential availability will be presented only in accordance with confirmed authorization, partner arrangements, and actual participant attainment.
              </motion.p>

              <motion.div
                className="overflow-hidden"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.18, ease: EASE }}>
                <img
                  src="/images/bridge-shelves.jpg"
                  alt=""
                  className="w-full h-auto object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>
            </div>

            <div className="mt-12 lg:mt-0">
              <ul className="list-none border-t border-sediment/25">
                {LEARN_AREAS.map((area, i) => (
                  <motion.li
                    key={area}
                    className="flex gap-6 items-start border-b border-sediment/25 py-3 lg:py-4"
                    initial={reduce ? undefined : { opacity: 0, x: 14 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.38, delay: 0.05 + i * 0.04, ease: EASE }}>
                    <span
                      className="flex-shrink-0 w-12 text-[2rem] xl:text-[2.5rem] text-datum italic leading-none -mt-0.5 select-none"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                      aria-hidden="true">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="text-[14px] text-anthracite/75 leading-[1.6] pt-1"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {area}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Four Gates ── */}
      <section
        className="bg-anthracite relative overflow-hidden py-14 lg:py-20"
        aria-labelledby="gates-h2">


        <div className="relative z-10 max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-20 xl:gap-28 lg:items-start mb-14 lg:mb-18">
            <div>
              <motion.p
                className="text-[10.5px] text-white/35 uppercase tracking-[0.22em] mb-6 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
                Before instruction begins
              </motion.p>
              <motion.h2
                id="gates-h2"
                className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4rem] leading-[1.07] tracking-[-0.03em] text-white italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Four commitments required before a cohort begins.
              </motion.h2>
            </div>
            <motion.p
              className="text-[15px] text-white/60 leading-[1.72] lg:pt-14 xl:pt-16"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              Rebuild does not begin until all four conditions are in place, each with a defined responsible partner. This is what makes the pathway credible rather than aspirational.
            </motion.p>
          </div>

          <div className="border-t border-white/10">
            {GATES.map(({ num, title, body, who }, i) => (
              <motion.div
                key={num}
                className="grid grid-cols-1 lg:grid-cols-[72px_1fr_0.7fr] lg:gap-10 xl:gap-14 border-b border-white/10 py-6 lg:py-8 lg:items-start"
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.06, ease: EASE }}>
                <span
                  className="text-[3rem] lg:text-[3.75rem] xl:text-[4.5rem] text-white/28 italic leading-none mb-4 lg:mb-0 block"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                  aria-hidden="true">
                  {num}
                </span>
                <div>
                  <h3
                    className="text-[1rem] lg:text-[1.0625rem] text-white leading-[1.25] tracking-[-0.01em] mb-3 font-medium"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {title}
                  </h3>
                  <p
                    className="text-[14px] text-white/65 leading-[1.7]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {body}
                  </p>
                </div>
                <div className="mt-5 lg:mt-0 lg:pt-1">
                  <p
                    className="text-[10px] text-white/30 uppercase tracking-[0.16em] mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Provided by
                  </p>
                  <p
                    className="text-[13.5px] text-white/60 leading-[1.6] italic"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {who}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Role Ladder ── */}
      <section className="bg-snow py-12 lg:py-18 overflow-hidden" aria-labelledby="ladder-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_1.8fr] lg:gap-16 xl:gap-20 lg:items-end mb-14 lg:mb-16">
            <div>
              <motion.p
                className="text-[10.5px] text-quarry uppercase tracking-[0.22em] mb-6 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
                Realistic advancement
              </motion.p>
              <motion.h2
                id="ladder-h2"
                className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Entry is the beginning of the pathway. Not the ceiling.
              </motion.h2>
            </div>
            <motion.p
              className="text-[15px] text-anthracite/75 leading-[1.72] lg:pb-2"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              Rebuild prepares participants for realistic initial roles and documented progression over time. The stages below show illustrative pathway targets. Aedifica will report actual future outcomes as they occur.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-sediment/25 border-t border-sediment/25">
            {STAGES.map(({ range, label, roles }, i) => (
              <motion.div
                key={range}
                className={[
                  'pt-8 lg:pt-10 pb-8 lg:pb-10',
                  i > 0 ? 'lg:pl-10 xl:pl-12' : '',
                  i < 2 ? 'lg:pr-10 xl:pr-12' : '',
                ].filter(Boolean).join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.07, ease: EASE }}>
                <p
                  className="text-[2rem] lg:text-[2.5rem] xl:text-[3rem] text-datum italic leading-[1.05] tracking-[-0.025em] mb-2"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {range}
                </p>
                <p
                  className="text-[10.5px] text-quarry uppercase tracking-[0.18em] mb-6 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {label}
                </p>
                <ul className="list-none space-y-2">
                  {roles.map(role => (
                    <li
                      key={role}
                      className="text-[13.5px] text-anthracite/75 leading-[1.55]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {role}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-[12px] text-anthracite/45 leading-[1.65] mt-8 max-w-[72ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.2, ease: EASE }}>
            Roles are illustrative pathway targets, not guarantees of placement or advancement. Aedifica will report actual future outcomes as they occur.
          </motion.p>
        </div>
      </section>

      {/* ── Two Audiences ── */}
      <section className="bg-bone py-12 lg:py-18" aria-label="Partner and employer value">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            className="text-[2rem] lg:text-[3rem] xl:text-[3.75rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-12 lg:mb-14"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            Built for two kinds of committed partners.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5">

            <motion.div
              className="bg-datum px-8 py-10 lg:px-10 lg:py-12 flex flex-col"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
              <p
                className="text-[10.5px] text-white/50 uppercase tracking-[0.18em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Community and institutional partners
              </p>
              <h3
                className="text-[1.5rem] lg:text-[1.875rem] text-white italic leading-[1.2] tracking-[-0.025em] mb-7"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Connect overlooked talent to a credible pathway.
              </h3>
              <ul className="list-none space-y-3.5 mb-10 flex-1">
                {PARTNER_POINTS.map(pt => (
                  <li key={pt} className="flex gap-3.5 items-start">
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-white/40 mt-[7px]" aria-hidden="true" />
                    <span
                      className="text-[13.5px] text-white/75 leading-[1.65]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/partner"
                className="self-start inline-flex items-center gap-2 bg-white text-datum text-[13.5px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-transform duration-100 hover:bg-white/92 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Discuss a Rebuild Partnership
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </motion.div>

            <motion.div
              className="bg-patina px-8 py-10 lg:px-10 lg:py-12 flex flex-col"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: SPRING }}>
              <p
                className="text-[10.5px] text-white/50 uppercase tracking-[0.18em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Employers
              </p>
              <h3
                className="text-[1.5rem] lg:text-[1.875rem] text-white italic leading-[1.2] tracking-[-0.025em] mb-7"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Meet prepared emerging talent through an accountable interview model.
              </h3>
              <ul className="list-none space-y-3.5 mb-10 flex-1">
                {EMPLOYER_POINTS.map(pt => (
                  <li key={pt} className="flex gap-3.5 items-start">
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-white/40 mt-[7px]" aria-hidden="true" />
                    <span
                      className="text-[13.5px] text-white/75 leading-[1.65]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {pt}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/partner"
                className="self-start inline-flex items-center gap-2 bg-white text-patina text-[13.5px] tracking-[-0.01em] px-6 py-3 active:scale-[0.98] transition-transform duration-100 hover:bg-white/92 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Become an Employer Partner
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Reporting Commitment ── */}
      <section className="bg-snow py-12 lg:py-18" aria-labelledby="reporting-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-24 lg:items-start">

            <div>
              <motion.p
                className="text-[10.5px] text-quarry uppercase tracking-[0.22em] mb-8 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
                Planned reporting commitment
              </motion.p>
              <motion.h2
                id="reporting-h2"
                className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Outcomes on the record. Every category reported separately.
              </motion.h2>
              <motion.p
                className="text-[15px] text-anthracite/75 leading-[1.72]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
                Following an initial cohort, Aedifica will publish outcomes in categories that must never be blurred together. Enrollment is not completion. Completion is not placement. Each result stands on its own record.
              </motion.p>
            </div>

            <div className="mt-10 lg:mt-0 lg:pt-16">
              <ul className="list-none border-t border-sediment/25">
                {REPORTING.map((item, i) => (
                  <motion.li
                    key={item}
                    className="border-b border-sediment/25 py-4 lg:py-5"
                    initial={reduce ? undefined : { opacity: 0, y: 14 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.4, delay: 0.06 + i * 0.045, ease: EASE }}>
                    <span
                      className="text-[1rem] lg:text-[1.125rem] xl:text-[1.25rem] text-anthracite/75 italic leading-[1.45] tracking-[-0.015em]"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      <PageCTA
        id="rebuild-cta"
        heading="Year 1 partnerships are being formed now."
        body="Discuss a Rebuild cohort partnership, an employer participation role, or an institutional briefing on Aedifica's planned delivery model."
        primary={{ label: 'Discuss a Rebuild Partnership', to: '/partner' }}
        secondary={{ label: 'Become an Employer Participant', to: '/partner' }}
      />

    </main>
  )
}
