import { SEO, SITE_URL } from '../components/SEO'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const PATHWAY_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOccupationalProgram',
      name: 'Aedifica Pathway',
      description:
        'A planned high-school construction-management curriculum designed for career readiness and future articulation in New Jersey.',
      provider: { '@id': `${SITE_URL}/#organization` },
      educationalProgramMode: 'on-campus',
      occupationalCategory: 'Construction Manager',
      educationalLevel: 'High School',
      areaServed: { '@type': 'State', name: 'New Jersey' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Pathway', item: `${SITE_URL}/services/pathway` },
      ],
    },
  ],
} as Record<string, unknown>

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const WHAT_IT_COVERS = [
  'Construction-management career overview and role pathways',
  'Foundational digital construction literacy (BIM, project software)',
  'Estimating, scheduling, and documentation fundamentals',
  'Professional communication and jobsite coordination skills',
  'Articulation preparation for college CM programs and apprenticeships',
  'Employer-facing capstone or project activity',
] as const

export function Pathway() {
  const reduce = useReducedMotion()

  return (
    <main>
      <SEO
        title="Pathway | High-School Construction-Management Curriculum · NJ"
        description="Pathway is Aedifica's planned high-school construction-management curriculum designed for career readiness and future articulation in New Jersey."
        path="/services/pathway"
        schema={PATHWAY_SCHEMA}
      />

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[65vh] flex flex-col justify-end pb-16 lg:pb-24"
        aria-labelledby="pathway-h1">

        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-datum/20 text-datum px-3 py-1 mb-2 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Expansion · Year 2+
          </motion.span>

          <motion.p
            className="text-[11px] text-white/50 tracking-[0.06em] mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.4, delay: 0.16, ease: EASE }}>
            Informed by prior pre-college engineering delivery experience
          </motion.p>

          <motion.h1
            id="pathway-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-10"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            A construction-management curriculum built for the high-school classroom and the career beyond it.
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-x-0 gap-y-3"
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.38, ease: EASE }}>
            {(['Planned', 'High school', 'New Jersey', 'Year 2+'] as const).map((item, i) => (
              <span
                key={item}
                className="text-[13px] text-white/60 tracking-[-0.01em]"
                style={{ fontFamily: 'var(--font-body)' }}>
                {item}
                {i < 3 && <span className="mx-4 text-white/15" aria-hidden="true">·</span>}
              </span>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── About this offering ── bg-snow */}
      <section className="bg-snow py-16 lg:py-24" aria-labelledby="pathway-about-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Left: description */}
            <div>
              <motion.h2
                id="pathway-about-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Designed for students who will build New Jersey's next generation of construction leadership.
              </motion.h2>

              <motion.p
                className="text-[15px] text-anthracite/75 leading-[1.72] mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
                Aedifica Pathway is a planned high-school curriculum offering designed for career readiness and future articulation in construction-management-track work. It is designed to connect secondary education directly to the preparation, credentials, and progression routes that the construction industry actually needs.
              </motion.p>

              <motion.p
                className="text-[10.5px] text-quarry uppercase tracking-[0.2em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: 0.12, ease: EASE }}>
                Planned learning areas
              </motion.p>

              <ul className="list-none space-y-3">
                {WHAT_IT_COVERS.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex gap-3.5 items-start"
                    initial={reduce ? undefined : { opacity: 0, x: -10 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.38, delay: 0.12 + i * 0.055, ease: EASE }}>
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-datum mt-[8px]" aria-hidden="true" />
                    <span
                      className="text-[14px] text-anthracite/75 leading-[1.65]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Right: Y2+ rationale + foundation note */}
            <div className="mt-10 lg:mt-0 lg:pt-2">

              <motion.div
                className="bg-bone px-7 py-8 mb-8"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
                <p
                  className="text-[10.5px] text-datum uppercase tracking-[0.18em] mb-4 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Why Year 2+
                </p>
                <p
                  className="text-[14.5px] text-anthracite/75 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Pathway is intended to follow credible outcome evidence from Aedifica Rebuild. Expanding into secondary education before adult cohort outcomes are established would be a premature claim about what Aedifica has proven. The expansion is earned, not assumed.
                </p>
              </motion.div>

              <motion.div
                className="bg-bone px-7 py-8"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.18, ease: EASE }}>
                <p
                  className="text-[10.5px] text-datum uppercase tracking-[0.18em] mb-4 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Delivery foundation
                </p>
                <p
                  className="text-[14.5px] text-anthracite/75 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Pathway design is informed by Dr. Karam's prior pre-college engineering workshop delivery through Stevens Institute of Technology: multiple years of high-school student engagement that informs instructional approach and secondary curriculum readiness.
                </p>
                <p
                  className="text-[12px] text-anthracite/55 leading-[1.6] mt-3"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Prior educational delivery experience, not Aedifica workforce outcomes.
                </p>
              </motion.div>

            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── bg-snow pb-0, contained datum block */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Register interest in Pathway">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-datum px-10 pt-16 pb-12 lg:px-16 lg:pt-20 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Register interest in Pathway.
            </h2>

            <p
              className="text-[15px] text-white/65 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Aedifica is documenting interest from districts, vocational institutions, and education partners for Pathway before it launches. No commitment required.
            </p>

            <Link
              to="/partner"
              className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/92"
              style={{ fontFamily: 'var(--font-body)' }}>
              Register Interest
            </Link>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
