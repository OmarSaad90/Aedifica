'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { PageCTA } from '../components/PageCTA'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const PROGRAMS = [
  {
    name: 'Explore',
    code: 'EDF·01 · Purple channel',
    who: 'Middle-school learners (grades 6–8) and the schools and community organizations that host them.',
    format: 'School-year modules and summer intensives; hands-on, community-based.',
    delivers: 'Career awareness, engineering vocabulary, and a documented spark, the first mile of the pathway.',
    cta: 'See Explore',
    to: '/programs/explore',
    color: 'bg-datum',
    dark: false,
  },
  {
    name: 'Pathway',
    code: 'EDF·02 · Green channel',
    who: 'High schools and districts building a construction-management track for grades 9–12.',
    format: 'District-embedded curriculum with pre-college rigor and project-based delivery.',
    delivers: 'College articulation, industry line-of-sight, and students who think like project managers.',
    cta: 'See Pathway',
    to: '/programs/pathway',
    color: 'bg-quarry',
    dark: true,
  },
  {
    name: 'Launch',
    code: 'EDF·03 · Yellow channel',
    who: 'Workforce boards, county colleges, agencies, and employers standing up institutional pathways.',
    format: 'Pathway design, curriculum build, instructor capacity, and implementation support.',
    delivers: 'A durable, reportable construction-management pathway your institution owns.',
    cta: 'See Launch',
    to: '/programs/launch',
    color: 'bg-sediment',
    dark: true,
  },
  {
    name: 'Rebuild',
    code: 'EDF·04 · Light burgundy channel',
    who: 'Adult learners, career changers, returning workers, veterans, and justice-impacted talent.',
    format: '12- or 24-week bridge cohorts with wraparound supports and an employer-validated capstone.',
    delivers: 'Credentials, confidence, and a defined interview opportunity in a construction-management-track role.',
    cta: 'See Rebuild',
    to: '/programs/rebuild',
    color: 'bg-rebuild-deep',
    dark: false,
  },
  {
    name: 'Talent Pipeline',
    code: 'EDF·05 · Mauve channel',
    who: 'Employers, contractors, owners, and agencies hiring construction-management talent.',
    format: 'Structured referral channel with interview commitments and apprenticeship articulation.',
    delivers: 'Capstone-vetted candidates and the outcome data to trust the source.',
    cta: 'See the Pipeline',
    to: '/programs/talent-pipeline',
    color: 'bg-pipeline',
    dark: true,
  },
] as const

export function Programs() {
  const reduce = useReducedMotion()

  return (
    <main>
      <section className="bg-snow pt-16 pb-16 lg:pt-20 lg:pb-24 xl:pt-24 xl:pb-28" aria-labelledby="programs-heading">
        <div className="max-w-7xl mx-auto px-6">

          {/* Title left, a five-swatch legend right, since this is the one page that
              belongs to all five programs at once rather than any single color. */}
          <div className="lg:flex lg:items-start lg:justify-between lg:gap-16 xl:gap-24 mb-14 lg:mb-20">
            <div>
              <motion.p
                className="text-[10.5px] uppercase tracking-[0.22em] text-datum mb-7 leading-none select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
                Programs
              </motion.p>

              <motion.h1
                id="programs-heading"
                className="text-[2.5rem] lg:text-[3.75rem] xl:text-[4.75rem] leading-[1.05] tracking-[-0.03em] text-anthracite italic max-w-[16ch]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 28 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                transition={reduce ? undefined : { duration: 0.7, delay: 0.18, ease: SPRING }}>
                Five programs. One pathway.
              </motion.h1>
            </div>

            <motion.div
              className="hidden lg:block w-[250px] xl:w-[290px] flex-shrink-0 mt-3"
              initial={reduce ? undefined : { opacity: 0 }}
              animate={reduce ? undefined : { opacity: 1 }}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.5, ease: EASE }}>
              <p
                className="text-[10.5px] uppercase tracking-[0.18em] text-anthracite/50 mb-7"
                style={{ fontFamily: 'var(--font-body)' }}>
                The five, at a glance
              </p>
              <div className="space-y-5">
                {PROGRAMS.map(({ name, color }) => (
                  <div key={name} className="flex items-center gap-4">
                    <span className={`flex-shrink-0 w-[14px] h-[14px] rotate-45 ${color}`} aria-hidden="true" />
                    <span
                      className="text-[1.375rem] italic text-anthracite leading-none"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Compare intro — same left-eyebrow / right-paragraph split used on the
              program subpages, so the width gets used instead of sitting empty. */}
          <div id="compare" className="scroll-mt-24">
            <div className="lg:grid lg:grid-cols-[1fr_1.4fr] lg:gap-16 xl:gap-20 lg:items-start mb-10 lg:mb-12">
              <div>
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
                    Side by side
                  </p>
                </motion.div>

                <motion.h2
                  className="text-[1.75rem] lg:text-[2.25rem] leading-[1.15] tracking-[-0.025em] text-anthracite italic [text-wrap:balance]"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
                  Which door is yours? Compare the five programs.
                </motion.h2>
              </div>

              <motion.p
                className="text-[14.5px] text-anthracite/75 leading-[1.6] mt-6 lg:mt-2 max-w-[60ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
                Every program serves one audience at one stage of the same pathway. Find your entry
                point. Then talk to us about what a partnership looks like in practice.
              </motion.p>
            </div>

            {/* Desktop: full comparison table */}
            <motion.div
              className="hidden lg:block overflow-hidden border border-sediment/25"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
              <table className="w-full border-collapse table-fixed">
                <caption className="sr-only">Program comparison, audience, format, and outcome</caption>
                <thead>
                  <tr className="bg-bone">
                    {['Program', 'Who it serves', 'Format', 'What it delivers', ''].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className={`text-left px-5 py-3 text-[10.5px] uppercase tracking-[0.12em] text-anthracite/78 font-medium border-b border-sediment/25 ${h === '' ? 'w-[180px]' : ''}`}
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {PROGRAMS.map(({ name, code, who, format, delivers, cta, to, color, dark }) => (
                    <tr key={name} className="border-b border-sediment/20 last:border-b-0">
                      <td className="px-5 py-4 align-top">
                        <div className="flex items-start gap-3">
                          <span className={`flex-shrink-0 w-[9px] h-[9px] rotate-45 mt-[6px] ${color}`} aria-hidden="true" />
                          <span>
                            <span
                              className="block text-[1.1rem] italic text-anthracite leading-none mb-1.5"
                              style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                              {name}
                            </span>
                            <span
                              className="block text-[10px] uppercase tracking-[0.1em] text-anthracite/60"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              {code}
                            </span>
                          </span>
                        </div>
                      </td>
                      <td className="px-5 py-4 align-top text-[13.5px] text-anthracite/75 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                        {who}
                      </td>
                      <td className="px-5 py-4 align-top text-[13.5px] text-anthracite/75 leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                        {format}
                      </td>
                      <td className="px-5 py-4 align-top text-[13.5px] text-anthracite leading-[1.5]" style={{ fontFamily: 'var(--font-body)' }}>
                        {delivers}
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
                </tbody>
              </table>
            </motion.div>

            {/* Mobile: stacked comparison rows */}
            <div className="lg:hidden space-y-5">
              {PROGRAMS.map(({ name, code, who, format, delivers, cta, to, color, dark }, i) => (
                <motion.div
                  key={name}
                  className="border border-sediment/25 px-6 py-6"
                  initial={reduce ? undefined : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.45, delay: i * 0.06, ease: EASE }}>
                  <div className="flex items-start gap-3 mb-4">
                    <span className={`flex-shrink-0 w-[9px] h-[9px] rotate-45 mt-[8px] ${color}`} aria-hidden="true" />
                    <span>
                      <span
                        className="block text-[1.2rem] italic text-anthracite leading-none mb-1.5"
                        style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                        {name}
                      </span>
                      <span
                        className="block text-[10px] uppercase tracking-[0.1em] text-anthracite/60"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {code}
                      </span>
                    </span>
                  </div>
                  <dl className="space-y-3 mb-5">
                    {([
                      ['Who it serves', who],
                      ['Format', format],
                      ['What it delivers', delivers],
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
            </div>
          </div>

        </div>
      </section>

      <PageCTA
        id="services-cta"
        heading="A pathway is built with partners who are ready to be accountable."
        body="Discuss a Rebuild cohort, a Launch engagement, or an institutional briefing. Partnerships are open now."
        primary={{ label: 'Start a Partnership Conversation', to: '/partner' }}
        secondary={{ label: 'Request an Institutional Briefing', to: '/partner' }}
      />

    </main>
  )
}
