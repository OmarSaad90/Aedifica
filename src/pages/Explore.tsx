import { SEO, SITE_URL } from '../components/SEO'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const EXPLORE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EducationalOccupationalProgram',
      name: 'Aedifica Explore',
      description:
        'A planned middle- and high-school construction, infrastructure, and digital construction career exposure program in New Jersey.',
      provider: { '@id': `${SITE_URL}/#organization` },
      educationalProgramMode: 'on-campus',
      educationalLevel: 'Middle School and High School',
      areaServed: { '@type': 'State', name: 'New Jersey' },
      teaches:
        'Construction careers, infrastructure careers, digital construction tools, construction-management awareness',
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Services', item: `${SITE_URL}/services` },
        { '@type': 'ListItem', position: 3, name: 'Explore', item: `${SITE_URL}/services/explore` },
      ],
    },
  ],
} as Record<string, unknown>

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const MODULE_THEMES = [
  'What construction-management-track careers look like and what they pay',
  'Digital construction tools and the people who use them',
  'Infrastructure projects in New Jersey: who designs, manages, and builds them',
  'Pathways from school to career: CTE, apprenticeship, college, and direct entry',
  'A day in construction management: field coordination, project controls, and scheduling',
] as const

export function Explore() {
  const reduce = useReducedMotion()

  return (
    <main>
      <SEO
        title="Explore | Construction & Infrastructure Career Exposure Modules · NJ"
        description="Explore brings construction, infrastructure, and digital construction career exposure to New Jersey middle- and high-school students through structured modules."
        path="/services/explore"
        schema={EXPLORE_SCHEMA}
      />

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[65vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="explore-h1">

        {/* Full-bleed right-half photo — desktop only */}
        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-2/5"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="/images/bb-students.jpg"
            alt="Middle school students in construction and engineering STEM program, Hillside Innovation Academy, New Jersey"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(25%) contrast(1.08)' }}
            loading="eager"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-[60%] lg:pr-8 xl:pr-12">

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
            Informed by prior local STEM implementation experience
          </motion.p>

          <motion.h1
            id="explore-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-10"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Construction and infrastructure career exposure for students who haven't been shown the door yet.
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-x-0 gap-y-3"
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.38, ease: EASE }}>
            {(['Planned', 'Middle and high school', 'New Jersey', 'Year 2+'] as const).map((item, i) => (
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

        </div>
      </section>

      {/* ── About this offering ── bg-snow */}
      <section className="bg-snow py-16 lg:py-24" aria-labelledby="explore-about-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Left: description + modules */}
            <div>
              <motion.h2
                id="explore-about-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Designed to introduce students to careers they didn't know existed before they had to choose.
              </motion.h2>

              <motion.p
                className="text-[15px] text-anthracite/75 leading-[1.72] mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
                Aedifica Explore is a planned series of middle- and high-school career exposure modules covering construction management, infrastructure, and digital construction careers. It is designed as a feeder offering into Aedifica Pathway and into the broader construction workforce pipeline.
              </motion.p>

              <motion.p
                className="text-[10.5px] text-quarry uppercase tracking-[0.2em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: 0.12, ease: EASE }}>
                Planned module themes
              </motion.p>

              <ul className="list-none space-y-3">
                {MODULE_THEMES.map((item, i) => (
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

            {/* Right: Y2+ rationale + delivery foundation */}
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
                  Explore is designed to follow Pathway, which follows Rebuild. Launching exposure modules before the preparation and advancement infrastructure is in place would create interest without a credible next step. The sequencing is intentional.
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
                  Explore module design is informed by the Bridging Brilliance STEM program at Hillside Innovation Academy: a 10-week intensive co-delivered by Kimi Stephenson and Dr. Karim Karam at Stevens Institute of Technology, serving 21 students across Grades 7 and 8. A full program report is available on request.
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
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Register interest in Explore">
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
              Register interest in Explore.
            </h2>

            <p
              className="text-[15px] text-white/65 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Aedifica is documenting interest from schools, districts, and community partners for Explore ahead of launch. No commitment required.
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
