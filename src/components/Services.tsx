'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PROGRAMS = [
  {
    name: 'Explore',
    fullName: 'Aedifica Explore',
    tag: 'Hands-On STEM',
    pos: 'Spark the interest early.',
    why: 'Too many young people write off construction before they understand it, picturing manual labor, not drones, digital design, and sustainable building. Explore exists to change that first impression, with hands-on discovery in the built environment.',
    what: 'Workshops · short modules · holiday & summer camps · school partner programs',
    audience: 'Middle-school districts, after-school, summer, and early-exposure learners',
    format: 'Workshops, short modules, holiday camps, summer camps, and school partner programs',
    purpose: 'Career awareness and hands-on discovery in the built environment',
    outcome: 'Engineering identity, prototype and notebook artifacts, and a visible next step toward STEM pathways',
    cta: 'Explore the built environment',
    to: '/services/explore',
    color: 'bg-datum',
    dark: false,
  },
  {
    name: 'Pathway',
    fullName: 'Aedifica Pathway',
    tag: 'School Curriculum',
    pos: 'From classroom to construction management.',
    why: "Interest alone isn't enough. Most students drawn to construction have no structured route toward the management roles the industry needs. Pathway exists to build that route: a secondary-education overlay connecting learning to college, credentials, and employers.",
    what: 'Semester / year modules · holiday & summer camps · career-pathway curriculum · capstones · advisory alignment',
    audience: 'High schools, districts, after-school, summer, and exposure learners',
    format: 'Semester and year modules, holiday and summer camps, career-pathway curriculum, capstones, and advisory alignment',
    purpose: 'A structured engineering and construction-management pathway overlay for secondary education',
    outcome: 'Capstone artifacts and connections to college, credential, apprenticeship, or employer pathways',
    cta: 'Build a school pathway',
    to: '/services/pathway',
    color: 'bg-quarry',
    dark: true,
  },
  {
    name: 'Aedifica Launch',
    fullName: 'Aedifica Launch',
    tag: 'Grant Strategy',
    pos: 'We help partners build programs that fund and last.',
    why: 'Many schools, colleges, and community organizations want construction pathways of their own, but lack the grant strategy and program design to make them fundable and lasting. Launch exists to close that gap.',
    what: 'Advisory · grant strategy · curriculum design · partner implementation',
    audience: 'Institutions, CTE and vocational partners, workforce boards, nonprofits, community colleges, and employers',
    format: 'Advisory, grant strategy, curriculum design, and partner implementation',
    purpose: 'Design, fund, and implement construction-management workforce pathways',
    outcome: 'A fundable, outcomes-ready pathway with an implementation calendar, staffing plan, and evaluation framework',
    cta: 'Launch a workforce pathway',
    to: '/services/launch',
    color: 'bg-sediment',
    dark: true,
  },
  {
    name: 'Aedifica Rebuild',
    fullName: 'Aedifica Rebuild',
    tag: 'Adult Cohort',
    pos: 'A real way in, for the people the system overlooked.',
    why: 'Plenty of capable adults are ready for a real career but never get a credible way in: returning adults, veterans, justice-impacted individuals, and returning mothers among them. Rebuild exists to open that door.',
    what: 'Structured cohorts · credential-aligned training · portfolio · employer intros',
    audience: 'Adults, overlooked learners, career changers, veterans, returning citizens, and caregivers',
    format: 'Structured 12- or 24-week cohorts, credential-aligned training, portfolio, and employer introductions',
    purpose: 'A bridge into construction-management careers and employer-connected advancement',
    outcome: 'A capstone artifact, interview readiness, and a documented next step into credentials, college, apprenticeship, or entry roles',
    cta: 'Start a Rebuild cohort',
    to: '/services/rebuild',
    color: 'bg-rebuild-deep',
    dark: false,
  },
] as const

// Cross-cutting connector — final comparison row, deliberately without a program color
const PIPELINE_ROW = {
  fullName: 'Talent Pipeline',
  audience: 'Employers, contractors, and the four programs above',
  purpose: 'Validate curriculum, review capstones, and commit to interviewing qualified completers',
  format: 'Advisory participation, capstone review, guest reviewers, and interview commitments',
  outcome: 'A pathway that answers to real roles, and outcome data that returns to the next cohort',
  cta: 'Join as an employer',
  to: '/services/talent-pipeline',
} as const

export function Services() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-snow py-12 lg:py-18" aria-labelledby="services-heading">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          className="flex items-center justify-center gap-3 mb-6"
          initial={reduce ? undefined : { opacity: 0 }}
          whileInView={reduce ? undefined : { opacity: 1 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
          <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
          <p
            className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium leading-none"
            style={{ fontFamily: 'var(--font-body)' }}>
            The pathway
          </p>
        </motion.div>

        <motion.h2
          id="services-heading"
          className="text-[2.5rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[1.05] tracking-[-0.03em] text-anthracite italic mb-12 lg:mb-16 text-center mx-auto max-w-[22ch]"
          style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          initial={reduce ? undefined : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
          Four programs. One connected pathway, live together.
        </motion.h2>

        <motion.p
          className="text-[14.5px] text-anthracite/75 leading-[1.65] text-center max-w-[52ch] mx-auto -mt-8 mb-12 lg:-mt-10 lg:mb-16"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={reduce ? undefined : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
          From a student's first exposure to an adult's first credentialed role, each program closes
          a specific gap and points back to the whole.
        </motion.p>

        {/* 4-program mosaic: uniform grid, each tile its own program color */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-4 lg:mb-5">
          {PROGRAMS.map(({ name, tag, pos, why, what, cta, to, color, dark }, i) => (
            <motion.div
              key={name}
              className={`px-7 py-8 lg:px-8 lg:py-9 flex flex-col justify-between gap-7 ${color}`}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: i * 0.08, ease: SPRING }}>
              <div>
                <div className="mb-5">
                  <h3
                    className={`text-[1.625rem] lg:text-[1.875rem] leading-[1.15] tracking-[-0.02em] italic mb-2 [text-wrap:balance] ${dark ? 'text-anthracite' : 'text-white'}`}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {name}
                  </h3>
                  <span
                    className={`text-[10px] uppercase tracking-[0.12em] ${dark ? 'text-anthracite/75' : 'text-white/80'}`}
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {tag}
                  </span>
                </div>

                <p
                  className={`text-[1rem] font-medium leading-snug mb-3 ${dark ? 'text-anthracite' : 'text-white'}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {pos}
                </p>
                <p
                  className={`text-[13.5px] leading-[1.6] mb-5 ${dark ? 'text-anthracite/85' : 'text-white/90'}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {why}
                </p>

                <p
                  className={`text-[10.5px] uppercase tracking-[0.04em] leading-[1.7] pt-4 border-t ${dark ? 'text-anthracite/75 border-anthracite/15' : 'text-white/80 border-white/15'}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {what}
                </p>
              </div>

              <Link href={to}
                className={`inline-flex items-center gap-2 text-[13px] font-semibold tracking-[-0.01em] underline underline-offset-4 group self-start ${dark ? 'text-anthracite decoration-anthracite/35 hover:decoration-anthracite' : 'text-white decoration-white/45 hover:decoration-white'} transition-[text-decoration-color] duration-150`}
                style={{ fontFamily: 'var(--font-body)' }}>
                {cta}
                <span className="transition-transform duration-150 group-hover:translate-x-1 flex-shrink-0" aria-hidden="true">→</span>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Talent Pipeline — minimal strip; no program content yet */}
        <motion.div
          className="bg-bone border border-sediment/25 px-8 py-5 lg:px-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={reduce ? undefined : VIEWPORT}
          transition={reduce ? undefined : { duration: 0.45, delay: 0.32, ease: EASE }}>
          <div>
            <p
              className="text-[13px] text-anthracite font-medium tracking-[-0.01em] mb-0.5"
              style={{ fontFamily: 'var(--font-body)' }}>
              Talent Pipeline
            </p>
            <p
              className="text-[12.5px] text-anthracite/75 leading-[1.6] max-w-[52ch]"
              style={{ fontFamily: 'var(--font-body)' }}>
              The employer connector that runs across all four programs. It is not a fifth program and
              carries no program color.
            </p>
          </div>
          <Link href="/services/talent-pipeline"
            className="inline-flex items-center gap-1.5 text-[12px] text-datum tracking-[-0.01em] flex-shrink-0 group"
            style={{ fontFamily: 'var(--font-body)' }}>
            View Talent Pipeline
            <span className="transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true">→</span>
          </Link>
        </motion.div>

        {/* Choose your on-ramp — full program comparison */}
        <div className="mt-12 lg:mt-14 border-t border-sediment/25 pt-10 lg:pt-12">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
            <p
              className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium leading-none"
              style={{ fontFamily: 'var(--font-body)' }}>
              Choose your on-ramp
            </p>
          </motion.div>

          <motion.h3
            className="text-[1.75rem] lg:text-[2.25rem] leading-[1.15] tracking-[-0.025em] text-anthracite italic mb-5 max-w-[26ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            Choose the pathway that fits your learner, school, or workforce goal.
          </motion.h3>

          <motion.p
            className="text-[14.5px] text-anthracite/75 leading-[1.6] max-w-[78ch] mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            Aedifica programs are designed as connected on-ramps into construction management. Start
            with exposure, build structured learning, bridge adult talent, or launch a full workforce
            pathway with partners. Choose Explore if your goal is awareness. Choose Pathway if your goal
            is school-based curriculum. Choose Rebuild if your goal is adult learner advancement. Choose
            Launch if your organization needs to design, fund, and implement a workforce pathway.
            Employers seeking talent connection join through the Talent Pipeline, a cross-cutting
            connector rather than a fifth program, shown in the final row without a program color. Final
            formats, calendars, costs, and credentials are customized by partner and cohort.
          </motion.p>

          {/* Desktop: full comparison table */}
          <motion.div
            className="hidden lg:block overflow-hidden border border-sediment/25"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
            <table className="w-full border-collapse table-fixed">
              <thead>
                <tr className="bg-bone">
                  {['Offering', 'Primary audience', 'Purpose', 'Format', 'Typical outcome', ''].map((h) => (
                    <th
                      key={h}
                      className={`text-left px-5 py-3 text-[10.5px] uppercase tracking-[0.12em] text-anthracite/78 font-medium border-b border-sediment/25 ${h === '' ? 'w-[200px]' : ''}`}
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PROGRAMS.map(({ fullName, audience, purpose, format, outcome, cta, to, color, dark }) => (
                  <tr key={fullName} className="border-b border-sediment/20">
                    <td className="px-5 py-4 align-top">
                      <div className="flex items-center gap-3">
                        <span className={`flex-shrink-0 w-[9px] h-[9px] rotate-45 ${color}`} aria-hidden="true" />
                        <span
                          className="text-[1.1rem] italic text-anthracite leading-none"
                          style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                          {fullName}
                        </span>
                      </div>
                    </td>
                    <td
                      className="px-5 py-4 align-top text-[13.5px] text-anthracite/75 leading-[1.5]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {audience}
                    </td>
                    <td
                      className="px-5 py-4 align-top text-[13.5px] text-anthracite leading-[1.5]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {purpose}
                    </td>
                    <td
                      className="px-5 py-4 align-top text-[13.5px] text-anthracite/75 leading-[1.5]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {format}
                    </td>
                    <td
                      className="px-5 py-4 align-top text-[13.5px] text-anthracite/75 leading-[1.5]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {outcome}
                    </td>
                    <td className="px-5 py-4 align-top">
                      <Link href={to}
                        className={`flex items-center justify-center gap-2 text-center text-[12px] font-medium leading-[1.3] tracking-[-0.01em] px-4 py-3 w-full transition-[filter] duration-150 hover:brightness-95 active:scale-[0.98] ${color} ${dark ? 'text-anthracite' : 'text-white'}`}
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {cta}
                        <span className="flex-shrink-0" aria-hidden="true">→</span>
                      </Link>
                    </td>
                  </tr>
                ))}
                {/* Final row: the connector, deliberately colorless */}
                <tr>
                  <td className="px-5 py-4 align-top">
                    <div className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-[9px] h-[9px] rotate-45 border border-anthracite/45" aria-hidden="true" />
                      <span
                        className="text-[1.1rem] italic text-anthracite leading-none"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                        {PIPELINE_ROW.fullName}
                      </span>
                    </div>
                  </td>
                  <td className="px-5 py-4 align-top text-[13.5px] text-anthracite/75 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                    {PIPELINE_ROW.audience}
                  </td>
                  <td className="px-5 py-4 align-top text-[13.5px] text-anthracite leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                    {PIPELINE_ROW.purpose}
                  </td>
                  <td className="px-5 py-4 align-top text-[13.5px] text-anthracite/75 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                    {PIPELINE_ROW.format}
                  </td>
                  <td className="px-5 py-4 align-top text-[13.5px] text-anthracite/75 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                    {PIPELINE_ROW.outcome}
                  </td>
                  <td className="px-5 py-4 align-top">
                    <Link href={PIPELINE_ROW.to}
                      className="flex items-center justify-center gap-2 text-center text-[12px] font-medium leading-[1.3] tracking-[-0.01em] px-4 py-3 w-full border border-anthracite/40 text-anthracite transition-colors duration-150 hover:bg-anthracite hover:text-white active:scale-[0.98]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {PIPELINE_ROW.cta}
                      <span className="flex-shrink-0" aria-hidden="true">→</span>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </motion.div>

          {/* Mobile: stacked comparison rows */}
          <div className="lg:hidden space-y-5">
            {PROGRAMS.map(({ fullName, audience, purpose, format, outcome, cta, to, color, dark }, i) => (
              <motion.div
                key={fullName}
                className="border border-sediment/25 px-6 py-6"
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: i * 0.06, ease: EASE }}>
                <div className="flex items-center gap-3 mb-4">
                  <span className={`flex-shrink-0 w-[9px] h-[9px] rotate-45 ${color}`} aria-hidden="true" />
                  <span
                    className="text-[1.2rem] italic text-anthracite leading-none"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {fullName}
                  </span>
                </div>
                <dl className="space-y-3 mb-5">
                  {([
                    ['Primary audience', audience],
                    ['Purpose', purpose],
                    ['Format', format],
                    ['Typical outcome', outcome],
                  ] as const).map(([label, value]) => (
                    <div key={label}>
                      <dt
                        className="text-[10px] uppercase tracking-[0.12em] text-anthracite/75 mb-1"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {label}
                      </dt>
                      <dd
                        className="text-[13.5px] text-anthracite/80 leading-[1.5]"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <Link href={to}
                  className={`flex items-center justify-center gap-2 text-[13px] font-medium tracking-[-0.01em] px-5 py-3.5 w-full transition-[filter] duration-150 hover:brightness-95 active:scale-[0.98] ${color} ${dark ? 'text-anthracite' : 'text-white'}`}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {cta}
                  <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            ))}

            {/* Final entry: the connector, deliberately colorless */}
            <motion.div
              className="border border-sediment/25 px-6 py-6"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.24, ease: EASE }}>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex-shrink-0 w-[9px] h-[9px] rotate-45 border border-anthracite/45" aria-hidden="true" />
                <span
                  className="text-[1.2rem] italic text-anthracite leading-none"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {PIPELINE_ROW.fullName}
                </span>
              </div>
              <dl className="space-y-3 mb-5">
                {([
                  ['Primary audience', PIPELINE_ROW.audience],
                  ['Purpose', PIPELINE_ROW.purpose],
                  ['Format', PIPELINE_ROW.format],
                  ['Typical outcome', PIPELINE_ROW.outcome],
                ] as const).map(([label, value]) => (
                  <div key={label}>
                    <dt
                      className="text-[10px] uppercase tracking-[0.12em] text-anthracite/75 mb-1"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {label}
                    </dt>
                    <dd
                      className="text-[13.5px] text-anthracite/80 leading-[1.5]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <Link href={PIPELINE_ROW.to}
                className="flex items-center justify-center gap-2 text-[13px] font-medium tracking-[-0.01em] px-5 py-3.5 w-full border border-anthracite/40 text-anthracite transition-colors duration-150 hover:bg-anthracite hover:text-white active:scale-[0.98]"
                style={{ fontFamily: 'var(--font-body)' }}>
                {PIPELINE_ROW.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
