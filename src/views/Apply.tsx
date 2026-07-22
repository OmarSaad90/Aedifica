'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '80px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PROGRAMS = [
  {
    name: 'Aedifica Explore',
    tag: 'Youth · Grades 6-12',
    to: '/programs/explore',
    description: 'Camps and workshops that introduce middle and high school students to construction management through hands-on engineering challenges.',
    audience: 'Middle and high school students',
    format: '1-3 week camps; school-year workshops',
    next: 'Contact your school administrator or reach out to ask about Explore partnerships in your area.',
  },
  {
    name: 'Aedifica Pathway',
    tag: 'High School · Grades 7-12',
    to: '/programs/pathway',
    description: 'A school-based curriculum sequence with real construction-management content, employer exposure, and a capstone project.',
    audience: 'High school students, through a school or district partner',
    format: 'Semester or school-year sequence',
    next: 'Pathway runs through school partners. Ask your school or district about bringing Pathway to your program.',
  },
  {
    name: 'Aedifica Rebuild',
    tag: 'Adult · 12 or 24 weeks',
    to: '/programs/rebuild',
    description: 'A 12- or 24-week adult bridge cohort for career changers and overlooked workers entering construction-management roles, with credential-aligned training, a capstone portfolio, and employer introductions.',
    audience: 'Adults with no required prior construction experience',
    format: 'Hybrid, 12- or 24-week cohort',
    next: 'Rebuild cohorts open on a published schedule. Submit your interest below to be notified when the next cohort opens.',
  },
  {
    name: 'Aedifica Launch',
    tag: 'Institutional partners',
    to: '/programs/launch',
    description: 'A design and implementation partnership for schools, community colleges, CTE programs, and workforce organizations that want to build a construction-management pathway.',
    audience: 'CTE directors, workforce program administrators, institutional leaders',
    format: 'Multi-month design engagement + pilot cohort',
    next: 'Launch starts with a partnership conversation. Use the inquiry form to describe your institution and goals.',
  },
  {
    name: 'Talent Pipeline',
    tag: 'Employers',
    to: '/programs/talent-pipeline',
    description: 'A structured employer partnership to build, track, and develop a visible construction-management talent pipeline from education to employment.',
    audience: 'Employers, HR leaders, hiring managers in construction',
    format: 'Ongoing partnership; scope set by agreement',
    next: 'Reach out through the partner inquiry page to discuss how a talent pipeline partnership works for your organization.',
  },
  {
    name: 'Not sure yet',
    tag: 'Help me choose',
    to: null,
    description: 'Not sure which program fits? Describe your situation and Aedifica will help identify the right starting point.',
    audience: 'Anyone curious about construction-management pathways',
    format: 'Short intake conversation',
    next: 'Use the partner inquiry form to describe your background and goals. We will help identify the right next step.',
  },
] as const

const CHECKLIST = [
  'Basic contact information.',
  'Program of interest (or a brief description of your situation if unsure).',
  'Short statement of interest: why construction, management, or the built environment matters to you.',
  'Education or work background, if relevant to the program.',
  'Referral partner or organization, if you were referred.',
  'Availability for the cohort schedule.',
  'Any support needs you want to flag: transportation, childcare, language access, technology.',
] as const

const TIPS = [
  'Be honest about your starting point. Programs are designed for people early in the pathway.',
  'Explain what draws you to construction, management, or the built environment specifically.',
  'Share any hands-on, work, leadership, caregiving, military, or community experience, even if it is not in construction.',
  'Do not worry if you do not yet know construction terminology. That is what the program teaches.',
] as const

export function Apply() {
  const reduce = useReducedMotion()
  const [selected, setSelected] = useState<number | null>(null)

  const prog = selected !== null ? PROGRAMS[selected] : null

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[44vh] flex flex-col justify-end pb-14 lg:pb-20"
        aria-labelledby="apply-h1">
        <div className="max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Applications
          </motion.span>

          <motion.h1
            id="apply-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-8 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Apply to an Aedifica program.
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/60 leading-[1.65] max-w-[58ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
            Start by choosing the pathway that matches your goals. Some programs accept individual learners directly; others are delivered through schools, workforce partners, employers, or community organizations.
          </motion.p>

        </div>
      </section>

      {/* ── Program selector ── */}
      <section className="bg-snow py-12 lg:py-16" aria-labelledby="program-select-heading">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="program-select-heading"
            className="text-[1.5rem] lg:text-[2rem] italic text-anthracite tracking-[-0.025em] mb-2 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            Which program are you applying to?
          </motion.h2>
          <motion.p
            className="text-[13.5px] text-anthracite/75 leading-[1.6] mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, delay: 0.1, ease: EASE }}>
            Select a program below to see what applies to you.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 mb-10">
            {PROGRAMS.map((p, i) => (
              <motion.button
                key={p.name}
                onClick={() => setSelected(selected === i ? null : i)}
                aria-pressed={selected === i}
                className={[
                  'text-left px-5 py-5 border transition-colors duration-150',
                  selected === i
                    ? 'border-datum bg-datum/6'
                    : 'border-sediment/25 bg-white hover:border-sediment/50',
                ].join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: i * 0.04, ease: EASE }}>
                <p
                  className={[
                    'text-[9.5px] uppercase tracking-[0.15em] mb-2 transition-colors duration-150',
                    selected === i ? 'text-datum' : 'text-anthracite/75',
                  ].join(' ')}
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {p.tag}
                </p>
                <p
                  className={[
                    'text-[14.5px] tracking-[-0.015em] leading-[1.3] transition-colors duration-150',
                    selected === i ? 'text-datum' : 'text-anthracite',
                  ].join(' ')}
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400, fontStyle: 'italic' }}>
                  {p.name}
                </p>
              </motion.button>
            ))}
          </div>

          {/* Expanded program detail */}
          <div aria-live="polite" aria-atomic="true">
          <AnimatePresence mode="wait">
            {prog && (
              <motion.div
                key={selected}
                className="bg-bone px-7 py-8 lg:px-10 lg:py-9 grid grid-cols-1 lg:grid-cols-[1fr_1fr_auto] gap-6 lg:gap-10 lg:items-start"
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: 8 }}
                transition={reduce ? undefined : { duration: 0.3, ease: EASE }}>

                <div>
                  <p
                    className="text-[10px] text-anthracite/80 uppercase tracking-[0.16em] mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    About
                  </p>
                  <p
                    className="text-[14px] text-anthracite/80 leading-[1.65]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {prog.description}
                  </p>
                  <div className="mt-5 space-y-1.5">
                    <p className="text-[12.5px] text-anthracite/78" style={{ fontFamily: 'var(--font-body)' }}>
                      <span className="text-anthracite/80 mr-2">Audience</span>{prog.audience}
                    </p>
                    <p className="text-[12.5px] text-anthracite/78" style={{ fontFamily: 'var(--font-body)' }}>
                      <span className="text-anthracite/80 mr-2">Format</span>{prog.format}
                    </p>
                  </div>
                </div>

                <div>
                  <p
                    className="text-[10px] text-anthracite/80 uppercase tracking-[0.16em] mb-2"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Next step
                  </p>
                  <p
                    className="text-[14px] text-anthracite/80 leading-[1.65]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {prog.next}
                  </p>
                </div>

                <div className="flex flex-col gap-3 lg:min-w-[140px]">
                  {prog.to && (
                    <Link href={prog.to}
                      className="inline-flex items-center gap-2 text-[13px] text-datum tracking-[-0.01em] group"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      View program
                      <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                    </Link>
                  )}
                  <Link href="/partner"
                    className="inline-flex items-center gap-2 text-[13px] text-anthracite/75 tracking-[-0.01em] group hover:text-anthracite transition-colors duration-150"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    Contact Aedifica
                    <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                  </Link>
                </div>

              </motion.div>
            )}
          </AnimatePresence>
          </div>

        </div>
      </section>

      {/* ── Eligibility overview ── */}
      <section className="bg-bone py-12 lg:py-16" aria-labelledby="eligibility-heading">
        <div className="max-w-5xl mx-auto px-6">

          <motion.h2
            id="eligibility-heading"
            className="text-[1.75rem] lg:text-[2.5rem] italic text-anthracite tracking-[-0.03em] mb-3 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            Eligibility overview.
          </motion.h2>
          <motion.p
            className="text-[14px] text-anthracite/78 leading-[1.72] max-w-[62ch] mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            Eligibility varies by program, funding source, and partner requirements. Aedifica uses a pathway-first approach: if one program is not the right fit, the goal is to help identify the next possible step rather than turn anyone away.
          </motion.p>

          <div className="divide-y divide-sediment/20">
            {([
              {
                who: 'Students curious about how buildings, roads, bridges, and communities are planned and built.',
                fits: ['Explore', 'Pathway'],
              },
              {
                who: 'Adults seeking a bridge into construction-management or related roles.',
                fits: ['Rebuild'],
              },
              {
                who: 'Workers with field experience who want to understand the management side of construction.',
                fits: ['Rebuild', 'Talent Pipeline'],
              },
              {
                who: 'Schools and organizations that want to create structured construction-management pathways.',
                fits: ['Launch', 'Pathway'],
              },
              {
                who: 'Employers seeking a more visible, prepared, and diverse talent pipeline.',
                fits: ['Talent Pipeline', 'Launch'],
              },
            ] as const).map(({ who, fits }, i) => (
              <motion.div
                key={i}
                className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-3 lg:gap-10 py-5 items-start"
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.38, delay: i * 0.04, ease: EASE }}>
                <p
                  className="text-[14px] text-anthracite/75 leading-[1.6]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {who}
                </p>
                <div className="flex flex-wrap gap-2">
                  {fits.map(f => (
                    <span
                      key={f}
                      className="text-[10.5px] text-datum border border-datum/30 px-2.5 py-0.5 tracking-[-0.01em]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-[12px] text-anthracite/80 mt-8 leading-[1.6] max-w-[56ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, delay: 0.2, ease: EASE }}>
            Each cohort publishes its own final eligibility criteria, which may include residency, age or grade requirements, or partner-specific prerequisites. Final requirements are shared when a cohort is announced.
          </motion.p>

        </div>
      </section>

      {/* ── Materials checklist ── */}
      <section className="bg-snow py-12 lg:py-16" aria-labelledby="materials-heading">
        <div className="max-w-5xl mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">

            <div>
              <motion.h2
                id="materials-heading"
                className="text-[1.75rem] lg:text-[2.25rem] italic text-anthracite tracking-[-0.025em] mb-7 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
                Materials checklist.
              </motion.h2>

              <ul className="space-y-3.5">
                {CHECKLIST.map((item, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3 items-start"
                    initial={reduce ? undefined : { opacity: 0, x: -10 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.38, delay: i * 0.05, ease: EASE }}>
                    <span className="w-[4px] h-[4px] bg-datum rounded-full flex-shrink-0 mt-[8px]" aria-hidden="true" />
                    <span
                      className="text-[13.5px] text-anthracite/75 leading-[1.6]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <motion.h2
                className="text-[1.75rem] lg:text-[2.25rem] italic text-anthracite tracking-[-0.025em] mb-7 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: SPRING }}>
                Tips for applicants.
              </motion.h2>

              <ul className="space-y-4">
                {TIPS.map((tip, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-3 items-start"
                    initial={reduce ? undefined : { opacity: 0, x: -10 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.38, delay: 0.1 + i * 0.05, ease: EASE }}>
                    <span className="w-[4px] h-[4px] bg-sediment/60 rounded-full flex-shrink-0 mt-[8px]" aria-hidden="true" />
                    <span
                      className="text-[13.5px] text-anthracite/75 leading-[1.6]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {tip}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-bone py-12 lg:py-16" aria-labelledby="timeline-heading">
        <div className="max-w-5xl mx-auto px-6">

          <motion.h2
            id="timeline-heading"
            className="text-[1.75rem] lg:text-[2.25rem] italic text-anthracite tracking-[-0.025em] mb-3 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            Application timeline.
          </motion.h2>
          <motion.p
            className="text-[13.5px] text-anthracite/78 leading-[1.65] max-w-[58ch] mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.08, ease: EASE }}>
            Cohort dates are announced when a partner and funding arrangement is confirmed. Contact Aedifica to be notified when the next cohort opens for your program of interest.
          </motion.p>

          <div className="divide-y divide-sediment/20">
            {([
              { label: 'Applications open', value: 'Announced per cohort' },
              { label: 'Priority deadline', value: 'Announced per cohort' },
              { label: 'Final deadline', value: 'Announced per cohort' },
              { label: 'Information sessions', value: 'Announced per cohort' },
              { label: 'Notifications', value: 'Following selection review' },
              { label: 'Cohort start', value: 'Announced per cohort' },
              { label: 'Capstone or showcase', value: 'End of cohort schedule' },
            ] as const).map(({ label, value }, i) => (
              <motion.div
                key={label}
                className="grid grid-cols-[180px_1fr] gap-6 py-4 items-baseline"
                initial={reduce ? undefined : { opacity: 0, y: 8 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.35, delay: i * 0.04, ease: EASE }}>
                <span
                  className="text-[12px] text-anthracite/75 uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {label}
                </span>
                <span
                  className="text-[13.5px] text-anthracite/80 italic"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {value}
                </span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Access & Funding ── */}
      <section className="bg-anthracite py-14 lg:py-20" aria-labelledby="funding-heading">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="funding-heading"
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.028em] text-white italic mb-6 max-w-[24ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            Cost should never be the thing that decides who gets to build.
          </motion.h2>

          <motion.p
            className="text-[15px] text-white/75 leading-[1.72] max-w-[66ch] mb-14 lg:mb-16"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
            Aedifica is designed to work through schools, workforce systems, grants, employer
            partnerships, and community-based organizations, so that the question of who can afford a
            pathway never determines who gets access to one. Aedifica does not charge participants
            directly. Programs are funded by the institutional partner that commissions them.
          </motion.p>

          <div className="lg:grid lg:grid-cols-[1.15fr_1fr] lg:gap-16 xl:gap-24">

            {/* Where the funding comes from */}
            <div className="mb-14 lg:mb-0">
              <p
                className="text-[10.5px] uppercase tracking-[0.2em] mb-7 select-none"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-datum-light)' }}>
                Where the funding comes from
              </p>
              <div className="border-t border-white/12">
                {([
                  {
                    src: 'Public workforce funding',
                    note: 'WIOA-eligible training dollars and state workforce funding administered through county colleges, workforce boards, and one-stop partners.',
                  },
                  {
                    src: 'Grants',
                    note: 'State, federal, and foundation grants, including green-economy, apprenticeship, and out-of-school-time funding streams. Aedifica supports partners with grant narrative and budget development through Launch.',
                  },
                  {
                    src: 'Employer contributions',
                    note: 'Employers that need the talent help fund the cohort that produces it: through sponsorship, capstone support, or credential-fee coverage.',
                  },
                  {
                    src: 'Philanthropy & school budgets',
                    note: 'Philanthropic funders and district or school budgets underwrite youth programming. The Bridging Brilliance program’s 2025 delivery was funded by the Engineering Information Foundation.',
                  },
                ] as const).map(({ src, note }, i) => (
                  <motion.div
                    key={src}
                    className="border-b border-white/12 py-6 lg:py-7"
                    initial={reduce ? undefined : { opacity: 0, y: 14 }}
                    whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.45, delay: i * 0.06, ease: EASE }}>
                    <h3
                      className="text-[1.25rem] lg:text-[1.5rem] italic text-white leading-[1.15] mb-2.5"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {src}
                    </h3>
                    <p
                      className="text-[13.5px] text-white/70 leading-[1.7] max-w-[58ch]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {note}
                    </p>
                  </motion.div>
                ))}
              </div>
              <motion.p
                className="text-[12.5px] text-white/55 leading-[1.7] mt-6 max-w-[58ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, ease: EASE }}>
                Each cohort publishes its own terms. Because funding differs by partner, every cohort
                states its participant cost, stipend availability, and whether credential fees are
                included before enrollment opens.
              </motion.p>
            </div>

            {/* Supports */}
            <div>
              <p
                className="text-[10.5px] uppercase tracking-[0.2em] mb-7 select-none"
                style={{ fontFamily: 'var(--font-body)', color: 'var(--color-datum-light)' }}>
                Support that makes completion possible
              </p>
              <motion.p
                className="text-[1.125rem] lg:text-[1.25rem] italic text-white/90 leading-[1.5] mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
                A tuition-free program that a learner cannot physically attend is not access.
              </motion.p>
              <ul className="list-none space-y-4">
                {([
                  ['Transportation assistance', 'travel to sites, campuses, and interviews'],
                  ['Childcare coordination', 'arranged with community partners, not assumed away'],
                  ['Technology access', 'devices and connectivity for hybrid coursework and credential study'],
                  ['Language access', 'translation and interpretation where a cohort needs it'],
                  ['Case management', 'carried by the community-based partner that owns recruitment'],
                  ['Career coaching', 'resume, interview practice, and next-step planning'],
                  ['Credential-fee coverage', 'under the proposed BUILD NJ GREEN model, OSHA 30, LEED Green Associate, and PMI-CAPM cost the participant nothing'],
                ] as const).map(([label, note], i) => (
                  <motion.li
                    key={label}
                    className="flex gap-3.5 items-start"
                    initial={reduce ? undefined : { opacity: 0, x: 12 }}
                    whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                    viewport={reduce ? undefined : VIEWPORT}
                    transition={reduce ? undefined : { duration: 0.38, delay: i * 0.045, ease: EASE }}>
                    <span
                      className="flex-shrink-0 w-[7px] h-[7px] rotate-45 mt-[7px]"
                      style={{ backgroundColor: 'var(--color-datum-light)' }}
                      aria-hidden="true"
                    />
                    <p className="text-[13.5px] leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>
                      <span className="text-white font-medium">{label}</span>
                      <span className="text-white/65">: {note}</span>
                    </p>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                className="mt-10 border border-white/15 px-6 py-6"
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
                <p
                  className="text-[10.5px] uppercase tracking-[0.18em] text-white/60 mb-3 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  What Aedifica will not do
                </p>
                <p
                  className="text-[13px] text-white/75 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  We will not promise stipends a funder has not committed, publish a support service a
                  partner has not agreed to deliver, or describe a cohort as free before its funding is
                  closed. Where a term is unsettled, it stays unpublished until it isn’t.
                </p>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-snow pt-10 lg:pt-14 pb-0" aria-label="Start application">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-datum px-10 pt-10 pb-10 lg:px-16 lg:pt-14 lg:pb-12 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-6 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Ready to take the next step?
            </h2>

            <p
              className="text-[15px] text-white/90 leading-[1.7] max-w-[50ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Reach out to Aedifica. We will help identify the right program, confirm eligibility, and tell you when the next cohort opens.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/partner"
                className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/92"
                style={{ fontFamily: 'var(--font-body)' }}>
                Contact Aedifica
              </Link>
              <Link href="/faq"
                className="inline-flex items-center justify-center border border-white/30 text-white text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/8"
                style={{ fontFamily: 'var(--font-body)' }}>
                Read the FAQ
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
