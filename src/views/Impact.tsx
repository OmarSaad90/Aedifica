'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const STATS = [
  { num: '21', label: 'Students, first cohort', meaning: 'Middle-school students in grades 7-8, about 22% of the school.', accent: 'text-wine' },
  { num: '12 weeks', label: 'Program length', meaning: 'Hands-on, NGSS-aligned engineering, delivered at the school and on campus.', accent: 'text-wine' },
  { num: '55%', label: 'Advanced STEM placements', meaning: 'Of eighth-graders (6 of 11) accepted to the highly selective Union County Vocational-Technical Schools for 2025-26.', accent: 'text-wine' },
  { num: '≈ 93', label: 'Final-grade average', meaning: 'Average final grade among participants.', accent: 'text-wine' },
  { num: '100% / 85%', label: 'Survey response', meaning: 'Pre- and post-program survey response.', accent: 'text-wine' },
  { num: '$10,340', label: 'Program investment', meaning: 'Independently reviewed and certified by Stevens (2025).', accent: 'text-wine' },
] as const

const DISTRICT_METRICS = [
  { measure: 'Grade 7 ELA proficiency', hia: '91%', district: '50%' },
  { measure: 'Grade 8 ELA proficiency', hia: '90%', district: '44%' },
  { measure: 'Algebra I proficiency (Gr 7–8 vs district Gr 9)', hia: '40%', district: '9%' },
  { measure: 'Building Bridges average final grade', hia: '93', district: '—' },
] as const

const GOALS = [
  'Expanded students’ view of engineering, from “fixing things” to designing, testing, and improving real solutions',
  'Demystified the path to engineering careers, through work alongside undergraduates, graduate researchers, and faculty',
  'Built confidence to pursue STEM, in public speaking, technical communication, and navigating a college campus',
] as const

const PROGRAM_STATUS = [
  { name: 'Explore', status: 'Delivered', detail: 'Two years, Building Bridges. Quantitative results below.', color: 'bg-datum', dark: false },
  { name: 'Pathway', status: 'Delivered', detail: 'Continuously delivered every summer since 2022, Stevens pre-college, same course and instructor. Documented by participant satisfaction surveys from the Stevens Office of Pre-College Programs, reported below. These are course and instructor ratings, not academic-outcome measures; enrollment, completion, and articulation figures are not yet published.', color: 'bg-quarry', dark: true },
  { name: 'Launch', status: 'Designed', detail: 'Community-based partners engaged, grant applications submitted. No cohort delivered.', color: 'bg-sediment', dark: true },
  { name: 'Rebuild', status: 'Designed', detail: 'Curriculum and cohort model complete. No cohort delivered.', color: 'bg-rebuild-deep', dark: false },
  { name: 'Talent Pipeline', status: 'In formation', detail: 'Contractor relationships available, referral channel not yet formed.', color: 'bg-pipeline', dark: true },
] as const

const PATHWAY_STATS = [
  { num: '98%', label: 'Rated the program Excellent', meaning: 'Each year, and 0% rated it Poor, all three years.', accent: 'text-wine' },
  { num: '99%', label: 'Rated Professor Karam Excellent', meaning: '(2022–2024)', accent: 'text-wine' },
  { num: '96%', label: 'Rated the teaching above average', meaning: 'On being motivating and approachable.', accent: 'text-wine' },
  { num: 'Every summer since 2022', label: 'Same course, same instructor', meaning: '', accent: 'text-wine' },
] as const

const METRICS = [
  { name: 'Placement rate', definition: 'Share of completers placed in a construction-management-track role within 90 days of completion.', reported: 'Per cohort, published', color: 'bg-wine' },
  { name: 'Credential attainment', definition: 'Share of enrollees earning the target industry-recognized credential during the program window.', reported: 'Per cohort, published', color: 'bg-terracotta' },
  { name: 'Wage at placement', definition: 'Median starting wage of placed completers, reported against the regional occupational baseline.', reported: 'Per cohort, published', color: 'bg-rule' },
  { name: 'Apprenticeship articulation', definition: 'Share of completers entering a signed apprenticeship, union-local, county-college, or employer training progression.', reported: 'Per cohort, published', color: 'bg-blush' },
] as const

export function Impact() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[44vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="impact-h1">

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div>

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-8 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              § 11 — Impact & Accountability
            </motion.span>

            <motion.h1
              id="impact-h1"
              className="text-[2.5rem] lg:text-[4rem] xl:text-[4.75rem] leading-[1] tracking-[-0.036em] text-white italic mb-8 max-w-[20ch] [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Outcomes over activity, honestly reported.
            </motion.h1>

            <motion.p
              className="text-[14.5px] text-white/65 leading-[1.72] max-w-[85ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
              Two of our five programs have run in the field. Explore has been delivered for two
              years, documented below as the Building Bridges program. Pathway has been delivered
              continuously every summer since 2022 through Stevens pre-college, documented with participant satisfaction
              data and scholar reflections rather than academic-outcome measures. The three
              workforce-track programs, Launch, Rebuild, and Talent Pipeline, are designed and not
              yet delivered. For those, we publish <em className="not-italic text-wine-light">how</em> we
              measure before we publish what we measured. We measure ourselves by placement rate,
              credential attainment, wage at placement, and apprenticeship articulation, not by
              hours delivered or seats filled. Every Aedifica program publishes outcome data using
              the same definitions, every cohort. Cohort 1&rsquo;s metric is also Cohort 8&rsquo;s
              metric. We do not redefine &ldquo;placement&rdquo; to inflate headlines.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ── Program status ledger ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20" aria-label="Where each program stands">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-[70ch]">
            <motion.p
              className="text-[15px] text-anthracite/80 leading-[1.72] mb-4"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
              Explore has been delivered for two years, documented below as the Building Bridges
              program. Pathway has been delivered continuously every summer since 2022 through Stevens
              pre-college, documented with participant satisfaction data and scholar reflections rather
              than academic-outcome measures.
            </motion.p>
            <motion.p
              className="text-[13px] text-anthracite/60 italic leading-[1.6]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
              Where each program stands today, stated plainly, because a partner deciding whether to
              work with us deserves to know what we have done and what we have only designed.
            </motion.p>
          </div>

          <div className="border-t border-sediment/25 mt-8">
            {PROGRAM_STATUS.map(({ name, status, detail, color, dark }, i) => (
              <motion.div
                key={name}
                className="group grid grid-cols-1 sm:grid-cols-[180px_1fr] gap-3 sm:gap-8 py-5 border-b border-sediment/25 items-start"
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: Math.min(i * 0.06, 0.3), ease: EASE }}>
                <div className="flex items-center gap-3">
                  <span
                    className={`flex-shrink-0 w-3 h-3 rotate-45 ${color} opacity-70 transition-opacity duration-200 group-hover:opacity-100`}
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-[14.5px] text-anthracite italic leading-tight mb-1.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{name}</p>
                    <span
                      className={`inline-block text-[9.5px] uppercase tracking-[0.12em] px-2 py-0.5 ${color} ${dark ? 'text-anthracite/85' : 'text-white/95'}`}
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {status}
                    </span>
                  </div>
                </div>
                <p className="text-[13.5px] text-anthracite/78 leading-[1.6] max-w-[64ch]" style={{ fontFamily: 'var(--font-body)' }}>{detail}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-[13px] text-anthracite/60 italic leading-[1.6] max-w-[70ch] mt-6"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            Workforce-track results (Launch, Rebuild, Talent Pipeline) publish as those cohorts
            complete, using the definitions fixed below. Those definitions are set now, before we
            have any results to report against them.
          </motion.p>
        </div>
      </section>

      {/* ── First delivery: intro + info ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="delivery-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16 xl:gap-20 lg:items-start">

            <div>
              <motion.div
                className="flex items-center gap-3 mb-5"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
                <p className="text-[13.5px] uppercase tracking-[0.14em] text-wine font-medium" style={{ fontFamily: 'var(--font-body)' }}>First delivery · the Explore model in the field</p>
              </motion.div>
              <motion.h2
                id="delivery-h2"
                className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-6 max-w-[18ch] [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
                Building Bridges: our Explore model, proven in Spring 2025.
              </motion.h2>

              <motion.p
                className="text-[15px] text-anthracite/78 leading-[1.72] max-w-[60ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
                Aedifica&rsquo;s Explore model was delivered as <strong className="font-medium text-anthracite">Building Bridges: Strengthening STEM Pathways from Hillside to Hoboken</strong>, a twelve-week, project-based engineering program at Hillside Innovation Academy, in partnership with Stevens Institute of Technology and funded by the Engineering Information Foundation. It is aligned to the Next Generation Science Standards and was led by Aedifica co-founders Dr. Karim Karam and Kimi Stephenson.
              </motion.p>
            </div>

            <div className="mt-12 lg:mt-0">
              <motion.div
                className="overflow-hidden"
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
                <img
                  src="/images/knex-bridge.jpg"
                  alt="A student-built bridge prototype from the Building Bridges program"
                  className="w-full h-[260px] lg:h-[320px] object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>
            </div>

          </div>

          {/* Stats — 3-col horizontal on lg: num | label | meaning */}
          <div className="border-t border-sediment/20 mt-14 lg:mt-16">
            {STATS.map(({ num, label, meaning, accent }, i) => (
              <motion.div
                key={label}
                className="grid grid-cols-[4.5rem_1fr] lg:grid-cols-[6.5rem_13rem_1fr] gap-x-6 lg:gap-x-10 border-b border-sediment/15 py-3.5 lg:items-center"
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.35, delay: i * 0.04, ease: EASE }}>
                <p
                  className={`text-[1.75rem] lg:text-[2rem] italic leading-[1] tracking-[-0.04em] ${accent} select-none`}
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  {num}
                </p>
                <div className="lg:contents">
                  <p
                    className="text-[14px] text-anthracite italic leading-[1.3] tracking-[-0.012em] mb-0.5 lg:mb-0 lg:self-center"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {label}
                  </p>
                  <p
                    className="text-[12.5px] text-anthracite/75 leading-[1.55] lg:self-center"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {meaning}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Program goals — pre/post survey performance */}
          <motion.div
            className="mt-10 lg:mt-12"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
            <p className="text-[10.5px] uppercase tracking-[0.13em] text-ink-soft font-semibold mb-4" style={{ fontFamily: 'var(--font-body)' }}>Progress on all three program goals, pre/post surveys and student performance</p>
            <ul className="list-none space-y-3">
              {GOALS.map(item => (
                <li key={item} className="flex gap-3 items-start">
                  <span className="flex-shrink-0 w-[6px] h-[6px] rotate-45 bg-datum mt-[7px]" aria-hidden="true" />
                  <span className="text-[13.5px] text-anthracite/78 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* District metrics — school-wide NJSLA results vs. district, the broader pattern
              Building Bridges is one contributing factor within */}
          <motion.div
            className="mt-10 lg:mt-12"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
            <p className="text-[10.5px] uppercase tracking-[0.13em] text-ink-soft font-semibold mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              Where we measure — Hillside Innovation Academy vs. district, Spring 2025 NJSLA
            </p>
            <div className="overflow-hidden border border-sediment/25">
              <table className="w-full border-collapse">
                <caption className="sr-only">Hillside Innovation Academy proficiency vs. district, Spring 2025 NJSLA</caption>
                <thead>
                  <tr className="bg-bone">
                    {['Measure', 'HIA', 'District'].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className={`text-left px-5 py-3 text-[10.5px] uppercase tracking-[0.12em] text-anthracite/78 font-medium border-b border-sediment/25 ${h === 'Measure' ? '' : 'w-[100px]'}`}
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {DISTRICT_METRICS.map(({ measure, hia, district }) => (
                    <tr key={measure} className="border-b border-sediment/20 last:border-b-0">
                      <td className="px-5 py-4 align-top text-[13.5px] text-anthracite/85 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                        {measure}
                      </td>
                      <td className="px-5 py-4 align-top text-[13.5px] text-anthracite leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                        {hia}
                      </td>
                      <td className="px-5 py-4 align-top text-[13.5px] text-anthracite/75 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                        {district}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.p
            className="text-[11.5px] italic text-anthracite/70 leading-[1.65] mt-6"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            <strong className="not-italic font-medium">Sources & scope.</strong> Figures from the
            Engineering Information Foundation 2025 program report and the Hillside Innovation
            Academy Building Bridges Year-2 snapshot (July 2025), authored by Hillside Public
            Schools with Stevens Institute of Technology. The proficiency figures are school-wide
            NJSLA results, not Building Bridges cohort results; the school views Building Bridges
            as one contributing factor within that broader pattern, not the sole cause, a
            distinction we keep deliberately. UCVTS includes Union County Magnet High School,
            ranked #1 in New Jersey and #26 nationally.
          </motion.p>

          {/* ── Second delivery: the Pathway model in the field ── */}
          <div className="mt-14 lg:mt-16 pt-12 lg:pt-14 border-t border-sediment/20">
            <motion.div
              className="flex items-center gap-3 mb-5"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <p className="text-[13.5px] uppercase tracking-[0.14em] text-wine font-medium" style={{ fontFamily: 'var(--font-body)' }}>Second delivery · the Pathway model in the field</p>
            </motion.div>
            <motion.h2
              className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-6 max-w-[20ch] [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 22 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
              The Pathway model, taught every summer since 2022.
            </motion.h2>
            <motion.p
              className="text-[15px] text-anthracite/78 leading-[1.72] max-w-[60ch] mb-10 lg:mb-12"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
              Aedifica&rsquo;s Pathway model is grounded in the Stevens Institute of Technology
              pre-college Civil Engineering course, taught by co-founder Dr. Karim Karam. Every
              summer since 2022, students rated the course and instructor consistently high.
            </motion.p>

            <div className="border-t border-sediment/20">
              {PATHWAY_STATS.map(({ num, label, meaning, accent }, i) => (
                <motion.div
                  key={label}
                  className="grid grid-cols-[4.5rem_1fr] lg:grid-cols-[6.5rem_13rem_1fr] gap-x-6 lg:gap-x-10 border-b border-sediment/15 py-3.5 lg:items-center"
                  initial={reduce ? undefined : { opacity: 0, y: 10 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.35, delay: i * 0.04, ease: EASE }}>
                  <p
                    className={`text-[1.75rem] lg:text-[2rem] italic leading-[1] tracking-[-0.04em] ${accent} select-none`}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {num}
                  </p>
                  <div className="lg:contents">
                    <p
                      className="text-[14px] text-anthracite italic leading-[1.3] tracking-[-0.012em] mb-0.5 lg:mb-0 lg:self-center"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {label}
                    </p>
                    <p
                      className="text-[12.5px] text-anthracite/75 leading-[1.55] lg:self-center"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {meaning}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.p
              className="text-[11.5px] italic text-anthracite/70 leading-[1.65] mt-6"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <strong className="not-italic font-medium">Sources & scope.</strong> Student
              satisfaction surveys, Stevens Institute of Technology Office of Pre-College Programs
              (2022-2024). These are participant ratings of the course and instructor, not
              academic-outcome measures. Enrollment, completion, and articulation figures for
              Pathway are not yet published.
            </motion.p>
          </div>

        </div>
      </section>

      {/* ── Workforce pathway metrics ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20" aria-labelledby="metrics-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            <p className="text-[13.5px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>The workforce pathway</p>
          </motion.div>
          <motion.h2
            id="metrics-h2"
            className="text-[1.875rem] lg:text-[2.5rem] leading-[1.12] tracking-[-0.026em] text-anthracite italic mb-4 max-w-[30ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            How we measure it as Launch, Rebuild, and Talent Pipeline cohorts complete.
          </motion.h2>
          <motion.p
            className="text-[14px] text-anthracite/75 leading-[1.7] max-w-[62ch] mb-10 lg:mb-12"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            The workforce-track outcome metrics: fixed definitions, every cohort.
          </motion.p>

          {/* Desktop table */}
          <motion.div
            className="hidden lg:block overflow-hidden border border-sediment/25"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
            <table className="w-full border-collapse table-fixed">
              <caption className="sr-only">The workforce-track outcome metrics, fixed definitions, every cohort</caption>
              <thead>
                <tr className="bg-snow">
                  {['Metric', 'Definition', 'Reported'].map((h) => (
                    <th
                      key={h}
                      scope="col"
                      className={`text-left px-5 py-3 text-[10.5px] uppercase tracking-[0.12em] text-anthracite/78 font-medium border-b border-sediment/25 ${h === 'Reported' ? 'w-[180px]' : ''}`}
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {METRICS.map(({ name, definition, reported, color }) => (
                  <tr key={name} className="border-b border-sediment/20 last:border-b-0">
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-start gap-3">
                        <span className={`flex-shrink-0 w-[9px] h-[9px] rotate-45 mt-[6px] ${color}`} aria-hidden="true" />
                        <span className="text-[1.0625rem] italic text-anthracite leading-[1.3]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                          {name}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4 align-top text-[13.5px] text-anthracite/78 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>
                      {definition}
                    </td>
                    <td className="px-5 py-4 align-top text-[13px] text-anthracite/70 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                      {reported}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Mobile: stacked rows */}
          <div className="lg:hidden space-y-5">
            {METRICS.map(({ name, definition, reported, color }, i) => (
              <motion.div
                key={name}
                className="border border-sediment/25 px-6 py-6 bg-snow"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.06, ease: EASE }}>
                <div className="flex items-start gap-3 mb-4">
                  <span className={`flex-shrink-0 w-[9px] h-[9px] rotate-45 mt-[8px] ${color}`} aria-hidden="true" />
                  <span className="text-[1.1rem] italic text-anthracite leading-[1.2]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {name}
                  </span>
                </div>
                <p className="text-[13.5px] text-anthracite/78 leading-[1.55] mb-4" style={{ fontFamily: 'var(--font-body)' }}>
                  {definition}
                </p>
                <p className="text-[11px] uppercase tracking-[0.1em] text-ink-soft font-semibold" style={{ fontFamily: 'var(--font-body)' }}>
                  {reported}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA ── bg-snow pb-0 */}
      <section className="bg-snow pt-6 lg:pt-10 pb-0" aria-label="Get involved with Aedifica">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-bone px-10 pt-10 pb-10 lg:px-16 lg:pt-14 lg:pb-12 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Help the next scholar find the pathway.
            </h2>

            <p
              className="text-[15px] text-anthracite/80 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Every cohort starts with a school, a partner, or a funder willing to open a door. If you want to bring an Aedifica program to your students or support the next cohort, we'd welcome the conversation.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/partner"
                className="inline-flex items-center justify-center bg-anthracite text-white text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/85"
                style={{ fontFamily: 'var(--font-body)' }}>
                Start a Partnership Conversation
              </Link>
              <Link href="/curriculum/bridging-brilliance"
                className="inline-flex items-center justify-center border border-anthracite text-anthracite text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/6"
                style={{ fontFamily: 'var(--font-body)' }}>
                Explore the Bridging Brilliance curriculum
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
