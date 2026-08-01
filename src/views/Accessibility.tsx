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
    heading: 'What we aim for',
    body: [
      <>We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. In building this site we
      have implemented a skip-to-content link, a single clear heading structure on every page with no skipped heading
      levels, visible keyboard focus indicators, reduced-motion support for people who prefer it, text alternatives
      for images, and color choices checked for contrast, with color never used as the only way to convey meaning.</>,
    ],
  },
  {
    heading: 'Ongoing work',
    body: [
      <>Accessibility is continuing work, and some content may not yet fully meet our target. We welcome reports of
      any barrier you encounter and will make reasonable efforts to fix it.</>,
    ],
  },
  {
    heading: 'Contact us about accessibility',
    body: [
      <>If you have trouble using any part of this site, or need information in an alternative format, contact us at{' '}
      {EMAIL}, and we will work with you to provide the information or service you need.</>,
    ],
  },
]

export function Accessibility() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[36vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="accessibility-h1">
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
            id="accessibility-h1"
            className="text-[2.75rem] lg:text-[clamp(2.5rem,5vw,4rem)] leading-[0.98] tracking-[-0.035em] text-white italic"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Accessibility Statement
          </motion.h1>
        </div>
      </section>

      {/* ── Content ── */}
      <section className="bg-snow py-16 lg:py-24" aria-label="Accessibility Statement">
        <div className="max-w-[720px] mx-auto px-6">

          <p className="text-[15px] text-anthracite/75 leading-[1.72] mb-10" style={{ fontFamily: 'var(--font-body)' }}>
            Aedifica is committed to making this website usable by everyone, including people who rely on assistive
            technology. Access is a design requirement in our programs, and we hold this site to the same standard.
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
