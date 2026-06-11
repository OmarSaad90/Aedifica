import { SEO, SITE_URL } from '../components/SEO'
import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const IMPACT_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      url: `${SITE_URL}/impact`,
      name: 'Projects & Impact | Aedifica Delivery Foundation · NJ',
      description:
        "Review Aedifica's educational delivery foundation, planned Rebuild outcome reporting framework, and accountable partnership model for New Jersey construction pathways.",
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Projects & Impact', item: `${SITE_URL}/impact` },
      ],
    },
  ],
} as Record<string, unknown>

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const REPORTING_FRAMEWORK = [
  {
    category: 'Cohort participation',
    measure: 'Enrollment, attendance, withdrawal, and completion, reported as distinct counts.',
  },
  {
    category: 'Credential outcomes',
    measure: 'Attainment where applicable and authorized, reported separately from employment outcomes.',
  },
  {
    category: 'Employer interaction',
    measure: 'Capstone participation and employer-facing interview activity at cohort close.',
  },
  {
    category: 'Employment outcomes',
    measure: 'Placements by role category and time milestone; not blended into a single placement rate.',
  },
  {
    category: 'CM-track outcomes',
    measure: 'Placements in supervisory-support and construction-management-track roles specifically.',
  },
  {
    category: 'Apprenticeship and articulation',
    measure: 'Verified entry into apprenticeship programs or articulation pathways, reported distinctly.',
  },
  {
    category: 'Retention',
    measure: 'Verified employment or program retention at defined milestones after placement.',
  },
  {
    category: 'Continuing education',
    measure: 'Further education or training outcomes reported separately, never combined with employment figures.',
  },
] as const

export function Impact() {
  const reduce = useReducedMotion()

  return (
    <main>
      <SEO
        title="Projects & Impact | Aedifica Delivery Foundation · NJ"
        description="Review Aedifica's educational delivery foundation, planned Rebuild outcome reporting framework, and accountable partnership model for New Jersey construction pathways."
        path="/impact"
        schema={IMPACT_SCHEMA}
      />

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[72vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="impact-h1">

        {/* Full-bleed right-half photo — desktop only */}
        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-2/5"
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="/images/impact-event.jpg"
            alt="Bridging Brilliance program participants at Hillside Innovation Academy and Stevens Institute of Technology event, New Jersey"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(25%) contrast(1.08)' }}
            loading="eager"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-[60%] lg:pr-8 xl:pr-12">
            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-10 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              Evidence &amp; Accountability
            </motion.span>

            <motion.h1
              id="impact-h1"
              className="text-[2.75rem] lg:text-[4.5rem] xl:text-[6rem] leading-[0.96] tracking-[-0.035em] text-white italic mb-10"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Built on relevant experience. Designed to prove future outcomes.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.4, ease: EASE }}>
              {(['Delivery foundation', 'Future reporting', 'New Jersey'] as const).map((item, i) => (
                <span
                  key={item}
                  className="text-[13px] text-white/60 tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                  {i < 2 && <span className="mx-4 text-white/20" aria-hidden="true">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── The Distinction ── bg-snow */}
      <section className="bg-snow py-12 lg:py-18" aria-label="Accountability principle">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-28 lg:items-start">

            <motion.p
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.5rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-10 lg:mb-0"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 28 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
              Delivery experience informs what we design. Workforce outcomes will be reported only after delivery. These are different claims, and Aedifica treats them as such.
            </motion.p>

            <div className="lg:pt-3">
              <motion.p
                className="text-[15.5px] text-anthracite/75 leading-[1.72] mb-6"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
                Aedifica is being built on a clear principle: workforce investment must be accountable to learners, employers, and institutional partners. That requires not blending categories that should stay distinct.
              </motion.p>
              <motion.p
                className="text-[15.5px] text-anthracite/75 leading-[1.72]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.18, ease: EASE }}>
                Prior educational delivery experience establishes instructional credibility. It is not the same as workforce placement outcomes, apprenticeship data, or employer-validated employment. Those categories Aedifica will report separately after Rebuild delivers its first cohort.
              </motion.p>
            </div>

          </div>
        </div>
      </section>

      {/* ── Prior Delivery Foundation ── bg-bone */}
      <section className="bg-bone py-16 lg:py-24" aria-labelledby="delivery-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.p
            className="text-[10.5px] text-quarry uppercase tracking-[0.22em] mb-8 lg:mb-10 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
            Delivery foundation
          </motion.p>

          {/* Case Study 1 — Stevens */}
          <motion.div
            className="border-t-2 border-datum/30 pt-10 lg:pt-12 mb-14 lg:mb-16"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
            <div className="lg:grid lg:grid-cols-[200px_1fr_0.6fr] lg:gap-12 xl:gap-16 lg:items-start">

              {/* Stat anchor */}
              <div className="mb-8 lg:mb-0">
                <p
                  className="text-[7rem] lg:text-[9rem] xl:text-[10rem] leading-[0.85] tracking-[-0.04em] text-datum italic select-none"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                  aria-hidden="true">
                  5
                </p>
                <p
                  className="text-[11px] text-anthracite/65 uppercase tracking-[0.16em] mt-2"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Years of delivery
                </p>
                <div className="mt-5 space-y-1.5">
                  <p className="text-[12.5px] text-anthracite/70 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>2 summer sessions annually</p>
                  <p className="text-[12.5px] text-anthracite/70 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>High-school students</p>
                  <p className="text-[12.5px] text-anthracite/70 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>Stevens Institute of Technology</p>
                  <p className="text-[12.5px] text-anthracite/70 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>Continuing</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <h3
                  className="text-[1.375rem] lg:text-[1.625rem] text-anthracite italic leading-[1.2] tracking-[-0.02em] mb-5"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  Pre-College Engineering Workshops, Stevens Institute of Technology
                </h3>
                <p
                  className="text-[14.5px] text-anthracite/75 leading-[1.72] mb-5"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Dr. Karim Karam has delivered pre-college engineering workshops for high-school students through Stevens Institute of Technology across five years of continuous delivery. Two intensive one-week summer sessions run annually, introducing students to engineering thinking, technical problem-solving, and academic preparation for STEM pathways.
                </p>
                <p
                  className="text-[14.5px] text-anthracite/75 leading-[1.72] mb-8"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  This experience informs Aedifica's secondary curriculum approach, instructional sequencing design, and student engagement methodology for the planned Pathway offering.
                </p>
                <p
                  className="text-[11.5px] text-anthracite/68 leading-[1.6] italic"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Prior educational delivery experience. Not Aedifica workforce placement outcomes.
                </p>
              </div>

              {/* Photo */}
              <div className="mt-6 lg:mt-0 overflow-hidden h-[220px] lg:h-[300px] xl:h-[380px]">
                <img
                  src="/images/stevens-program.jpg"
                  alt="Aedifica program participants at Stevens Institute of Technology, New Jersey"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </div>

            </div>
          </motion.div>

          {/* Case Study 2 — Bridging Brilliance */}
          <motion.div
            className="border-t-2 border-patina/25 pt-10 lg:pt-12"
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, delay: 0.08, ease: EASE }}>
            <div className="lg:grid lg:grid-cols-[0.6fr_1fr_200px] lg:gap-12 xl:gap-16 lg:items-start">

              {/* Photo — left (asymmetry) */}
              <div className="overflow-hidden h-[220px] lg:h-[300px] xl:h-[380px]">
                <img
                  src="/images/bridge-test.jpg"
                  alt="Structural bridge model testing exercise"
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </div>

              {/* Description */}
              <div className="mb-8 lg:mb-0">
                <h3
                  className="text-[1.375rem] lg:text-[1.625rem] text-anthracite italic leading-[1.2] tracking-[-0.02em] mb-5"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  Bridging Brilliance STEM Program, Hillside Innovation Academy
                </h3>
                <p
                  className="text-[14.5px] text-anthracite/75 leading-[1.72] mb-5"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Kimi Stephenson and Dr. Karim Karam co-delivered an intensive 10-week STEM program at Hillside Innovation Academy, serving 21 students across Grades 7 and 8. The program was recognized as highly successful, with a full post-project report available on request.
                </p>
                <p
                  className="text-[14.5px] text-anthracite/75 leading-[1.72] mb-8"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  This delivery experience informs the design of Aedifica Explore, the planned middle- and high-school construction and infrastructure career exposure offering.
                </p>
                <p
                  className="text-[11.5px] text-anthracite/68 leading-[1.6] italic"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Prior educational delivery experience. Not Aedifica workforce placement outcomes.
                </p>
              </div>

              {/* Stat anchor — right */}
              <div>
                <p
                  className="text-[7rem] lg:text-[9rem] xl:text-[10rem] leading-[0.85] tracking-[-0.04em] text-patina italic select-none"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                  aria-hidden="true">
                  21
                </p>
                <p
                  className="text-[11px] text-anthracite/65 uppercase tracking-[0.16em] mt-2"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Students served
                </p>
                <div className="mt-5 space-y-1.5">
                  <p className="text-[12.5px] text-anthracite/70 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>10-week intensive, Grades 7–8</p>
                  <p className="text-[12.5px] text-anthracite/70 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>Hillside Innovation Academy</p>
                  <p className="text-[12.5px] text-anthracite/70 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>55% UCVTS acceptance (8th grade)</p>
                  <p className="text-[12.5px] text-anthracite/70 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>EIF-funded · report on request</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Future Reporting Framework ── bg-anthracite */}
      <section className="bg-anthracite py-14 lg:py-20 relative overflow-hidden" aria-labelledby="framework-h2">


        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.6fr] lg:gap-20 xl:gap-28 lg:items-start">

            {/* Left: heading + context */}
            <div className="mb-12 lg:mb-0 lg:sticky lg:top-28">
              <motion.p
                className="text-[10.5px] text-white/50 uppercase tracking-[0.22em] mb-6 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
                Future outcome reporting
              </motion.p>
              <motion.h2
                id="framework-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                What Aedifica will measure and report.
              </motion.h2>
              <motion.p
                className="text-[14px] text-white/60 leading-[1.7] mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
                Following an initial Rebuild cohort, Aedifica intends to publish outcomes across eight categories. Each is reported separately: no blending, no substituting enrollment for placement, no combining employment and continuing education.
              </motion.p>
              <motion.p
                className="text-[11.5px] text-white/62 leading-[1.65] italic"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: 0.18, ease: EASE }}>
                No outcomes have been reported yet. Aedifica is pre-launch. This framework describes what will be measured and published after delivery begins.
              </motion.p>
            </div>

            {/* Right: framework rows */}
            <div className="border-t border-white/10">
              {REPORTING_FRAMEWORK.map(({ category, measure }, i) => (
                <motion.div
                  key={category}
                  className="grid grid-cols-1 lg:grid-cols-[0.55fr_1fr] gap-2 lg:gap-8 border-b border-white/10 py-5 lg:py-6 lg:items-baseline"
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.04, ease: EASE }}>
                  <p
                    className="text-[1rem] lg:text-[1.0625rem] text-white italic leading-[1.3] tracking-[-0.015em]"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {category}
                  </p>
                  <p
                    className="text-[13px] text-white/60 leading-[1.65]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {measure}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── bg-snow pb-0 */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Partner with Aedifica">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-datum px-10 pt-10 pb-10 lg:px-16 lg:pt-14 lg:pb-12 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[3rem] xl:text-[3.5rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Partner with an organization built for accountability.
            </h2>

            <p
              className="text-[15.5px] text-white/75 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Speak with Aedifica about the reporting framework, partnership model, or how Rebuild outcomes will be measured and published.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/partner"
                className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/92"
                style={{ fontFamily: 'var(--font-body)' }}>
                Start a Partnership Conversation
              </Link>
              <Link
                to="/partner"
                className="inline-flex items-center justify-center bg-transparent text-white/80 border border-white/30 text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-white/8 hover:text-white"
                style={{ fontFamily: 'var(--font-body)' }}>
                Request an Institutional Briefing
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
