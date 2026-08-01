'use client'
import { motion, useReducedMotion } from 'motion/react'
import type { ReactNode } from 'react'

const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const EMAIL = (
  <a href="mailto:info@edfca.com" className="underline decoration-anthracite/25 hover:decoration-anthracite/70 transition-colors duration-150">info@edfca.com</a>
)

type Section = { heading: string; body: ReactNode[] }

const SECTIONS: Section[] = [
  {
    heading: 'Use of this site',
    body: [
      <>This website is provided for information about Aedifica’s programs and partnerships. You may view and share its content for your own informational, educational, or partnership-evaluation purposes. You agree not to misuse the site, interfere with its operation, or use it to violate any law.</>,
    ],
  },
  {
    heading: 'No professional advice',
    body: [
      <>Content on this site is general information, not legal, financial, employment, or educational advice, and does not create any advisory relationship. Program details, outcomes, and availability are described in good faith and may change.</>,
    ],
  },
  {
    heading: 'Program information and outcomes',
    body: [
      <>Where this site describes program status (delivered, designed, or in formation) and reports outcomes, those descriptions reflect our understanding at the time of publication and are sourced where possible. Sample curricula are illustrative; actual programs are scoped with each partner. Nothing on this site is an offer, guarantee of enrollment, guarantee of employment, or guarantee of any specific outcome.</>,
    ],
  },
  {
    heading: 'Intellectual property',
    body: [
      <>The Aedifica name, curricula, program designs, and site content are the property of Aedifica LLC or its partners and are protected by applicable law.</>,
    ],
  },
  {
    heading: 'Third-party links',
    body: [
      <>This site may link to third-party sites we do not control and are not responsible for.</>,
    ],
  },
  {
    heading: 'Contact',
    body: [
      <>Questions about these Terms: {EMAIL}.</>,
    ],
  },
]

export function Terms() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[36vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="terms-h1">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-8 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Legal
          </motion.span>

          <motion.h1
            id="terms-h1"
            className="text-[2.75rem] lg:text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-[-0.035em] text-white italic"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Terms of Use
          </motion.h1>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-snow py-16 lg:py-24" aria-label="Terms of Use">
        <div className="max-w-[720px] mx-auto px-6">

          <p className="text-[15px] text-anthracite/75 leading-[1.72] mb-10" style={{ fontFamily: 'var(--font-body)' }}>
            These Terms of Use govern your use of the Aedifica website. By using this site, you agree to them. Aedifica
            LLC is a New Jersey limited liability company.
          </p>

          {SECTIONS.map((section) => (
            <div key={section.heading}>
              <h3
                className="text-[1.375rem] lg:text-[1.5rem] leading-[1.15] tracking-[-0.02em] text-anthracite italic mb-3 mt-10"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                {section.heading}
              </h3>
              {section.body.map((p, i) => (
                <p key={i} className="text-[15px] text-anthracite/75 leading-[1.72] mb-4 last:mb-0" style={{ fontFamily: 'var(--font-body)' }}>
                  {p}
                </p>
              ))}
            </div>
          ))}

          <p className="text-[12.5px] text-anthracite/50 mt-10 pt-4 border-t border-anthracite/12" style={{ fontFamily: 'var(--font-body)' }}>
            <strong className="font-semibold text-anthracite/60">Last updated:</strong> August 1, 2026
          </p>

        </div>
      </section>

    </main>
  )
}
