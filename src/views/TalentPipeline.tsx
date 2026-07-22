'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { UsersThree, Handshake, GraduationCap, ChartLineUp, type Icon } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const INFO_ROWS: { Icon: Icon; label: string; value: string }[] = [
  { Icon: UsersThree, label: 'Audience', value: 'Employers · contractors · owners · agencies' },
  { Icon: Handshake, label: 'Commitment', value: 'Defined interview opportunities for qualified completers' },
  { Icon: GraduationCap, label: 'Articulation', value: 'Apprenticeship sponsors · union locals · county colleges' },
  { Icon: ChartLineUp, label: 'Evidence', value: 'Same-definition outcome data with every referral' },
]

const MINI_LIST = [
  'Employer validators shape the capstone your candidates completed',
  'Role definitions stay with you, Aedifica does not referee',
  'Pipeline reporting you can put in front of a board',
] as const

export function TalentPipeline() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero: color/picture split ── */}
      <section
        className="bg-pipeline min-h-[58vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="pipeline-h1">

        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-[40%]"
          style={{ willChange: 'opacity, transform' }}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="/images/campus-group.jpg"
            alt="Construction-management students in program classroom at Stevens Institute of Technology, New Jersey"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(25%) contrast(1.08)' }}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-[58%] lg:pr-8 xl:pr-12">

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-anthracite/10 text-anthracite px-3 py-1 mb-10 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              Program 05 · Employers
            </motion.span>

            <motion.h1
              id="pipeline-h1"
              className="text-[2.75rem] lg:text-[4.25rem] xl:text-[5.25rem] leading-[0.98] tracking-[-0.035em] text-anthracite italic mb-10 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              The Talent Pipeline is where the pathway pays off, for everyone.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.4, ease: EASE }}>
              {(['Employers & contractors', 'Interview commitments', 'New Jersey'] as const).map((item, i) => (
                <span key={item} className="text-[13px] text-anthracite/85 tracking-[-0.01em]" style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                  {i < 2 && <span className="mx-4 text-anthracite/20" aria-hidden="true">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Program intro + info rows ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="pipeline-intro-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16 xl:gap-20 lg:items-start">

            <div>
              <motion.p
                className="text-[15.5px] text-anthracite/78 leading-[1.72] mb-6 max-w-[62ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: EASE }}>
                The Talent Pipeline is where the pathway pays off, for everyone. Employers get
                capstone-vetted candidates whose training was validated against the work their own
                project executives do. Completers get defined interview commitments and apprenticeship
                articulation, not a handshake and a job board.
              </motion.p>
              <motion.p
                className="text-[14.5px] text-anthracite/72 leading-[1.72] max-w-[62ch] mb-10"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
                Every referral travels with the same outcome data we publish: placement rate, credential
                attainment, wage at placement, and apprenticeship articulation, defined identically every
                cohort. The metric is the moat.
              </motion.p>

              {INFO_ROWS.map(({ Icon: IconComp, label, value }, i) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-4 py-4 border-t border-sediment/25 last:border-b"
                  initial={reduce ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.05, ease: EASE }}>
                  <IconComp size={18} weight="regular" className="text-datum flex-shrink-0 mt-0.5" aria-hidden={true} />
                  <div className="grid grid-cols-[110px_1fr] gap-4 flex-1">
                    <p className="text-[12.5px] uppercase tracking-[0.13em] text-datum pt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                    <p className="text-[13.5px] text-anthracite/80 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 lg:mt-0">
              <motion.div
                className="overflow-hidden mb-8"
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
                <img
                  src="/images/impact-event.jpg"
                  alt="Employer partners reviewing candidate capstones at an Aedifica program event"
                  className="w-full h-[260px] lg:h-[320px] object-cover"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                  loading="lazy"
                />
              </motion.div>
              <ul className="list-none space-y-3">
                {MINI_LIST.map(item => (
                  <li key={item} className="flex gap-3 items-start">
                    <span className="flex-shrink-0 w-[6px] h-[6px] rotate-45 bg-datum mt-[7px]" aria-hidden="true" />
                    <span className="text-[13.5px] text-anthracite/78 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── bg-bone wrapper, bg-pipeline inner ── */}
      <section className="bg-bone pt-10 lg:pt-16 pb-0" aria-label="Join the Talent Pipeline">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-pipeline px-10 pt-14 pb-12 lg:px-16 lg:pt-16 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-8 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              No cohort starts without you.
            </h2>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-anthracite text-white text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/85 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                Join the Talent Pipeline
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link href="/impact"
                className="inline-flex items-center justify-center gap-2 border border-anthracite/40 text-anthracite text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-anthracite/8 group"
                style={{ fontFamily: 'var(--font-body)' }}>
                See how outcomes are defined
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-[12.5px] text-anthracite leading-[1.65] max-w-[58ch] mx-auto">
              <strong className="font-medium">For employers:</strong> participating employers validate
              role relevance, inform capstone expectations, and commit to a defined interview
              opportunity for qualified completers.
            </p>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
