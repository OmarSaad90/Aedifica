import { Link } from 'react-router-dom'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const EMPLOYER_VALUE = [
  'Access to a defined pool of prepared, interview-ready completers from each Rebuild cohort',
  'Validated role relevance: candidates prepared for construction-management-track entry',
  'Reduced friction in recruiting for field office, project administration, and support roles',
  'Membership infrastructure aligned to NJ construction workforce development needs',
] as const

export function TalentPipeline() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[65vh] flex flex-col justify-end pb-16 lg:pb-24"
        aria-labelledby="pipeline-h1">

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
            className="text-[11px] text-white/35 tracking-[0.06em] mb-10"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 8 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.4, delay: 0.16, ease: EASE }}>
            Activates following Rebuild outcome evidence
          </motion.p>

          <motion.h1
            id="pipeline-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-10"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Employer infrastructure built after the talent pool is proven.
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-x-0 gap-y-3"
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.38, ease: EASE }}>
            {(['Planned', 'Employers', 'New Jersey', 'Year 2+'] as const).map((item, i) => (
              <span
                key={item}
                className="text-[13px] text-white/40 tracking-[-0.01em]"
                style={{ fontFamily: 'var(--font-body)' }}>
                {item}
                {i < 3 && <span className="mx-4 text-white/15" aria-hidden="true">·</span>}
              </span>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ── About this offering ── bg-snow */}
      <section className="bg-snow py-16 lg:py-24" aria-labelledby="pipeline-about-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Left: Y2+ rationale + dependency */}
            <div className="mb-10 lg:mb-0">

              <motion.div
                className="bg-bone px-7 py-8 mb-8"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: EASE }}>
                <p
                  className="text-[10.5px] text-datum uppercase tracking-[0.18em] mb-4 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Why Year 2+
                </p>
                <p
                  className="text-[14.5px] text-anthracite/70 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  A talent pipeline is only as credible as the talent pool behind it. Aedifica Talent Pipeline activates after Rebuild cohort outcomes establish that completers are prepared, placed, and retaining in construction-management-track roles. The membership model is built on evidence, not on the promise of it.
                </p>
              </motion.div>

              <motion.div
                className="bg-bone px-7 py-8"
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
                <p
                  className="text-[10.5px] text-datum uppercase tracking-[0.18em] mb-4 select-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  How it connects
                </p>
                <p
                  className="text-[14.5px] text-anthracite/70 leading-[1.7]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Rebuild employers participate in cohort capstones and interviews from Year 1. Talent Pipeline formalizes that participation into a membership infrastructure: a defined channel connecting construction firms with a recurring pool of screened, employer-validated candidates.
                </p>
              </motion.div>

            </div>

            {/* Right: description + employer value */}
            <div>
              <motion.h2
                id="pipeline-about-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-8"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                A membership model connecting construction firms with prepared, interview-ready emerging talent.
              </motion.h2>

              <motion.p
                className="text-[15px] text-anthracite/65 leading-[1.72] mb-8"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
                Aedifica Talent Pipeline is a planned employer membership infrastructure designed to connect NJ construction firms, GCs, and specialty contractors with a recurring pool of Rebuild completers who have been employer-validated, interview-prepared, and outcome-tracked.
              </motion.p>

              <motion.p
                className="text-[10.5px] text-quarry uppercase tracking-[0.2em] mb-5 select-none"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, delay: 0.12, ease: EASE }}>
                Planned employer value
              </motion.p>

              <motion.ul
                className="list-none space-y-3"
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.16, ease: EASE }}>
                {EMPLOYER_VALUE.map(item => (
                  <li key={item} className="flex gap-3.5 items-start">
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-datum mt-[8px]" aria-hidden="true" />
                    <span
                      className="text-[14px] text-anthracite/60 leading-[1.65]"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {item}
                    </span>
                  </li>
                ))}
              </motion.ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── bg-snow pb-0, contained datum block */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Register interest in Talent Pipeline">
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
              Register interest in Talent Pipeline.
            </h2>

            <p
              className="text-[15px] text-white/65 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Aedifica is documenting employer interest in the Talent Pipeline membership model ahead of launch. No commitment required.
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
