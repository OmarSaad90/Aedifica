import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE     = [0.25, 0.1, 0.25, 1] as const

const ITEMS = [
  {
    num:   '01',
    title: 'Prepare learners for relevant work',
    body:  'Practical construction-management literacy: documentation, digital tools, estimating foundations, supervisory communication, capstone experience, and interview readiness.',
  },
  {
    num:   '02',
    title: 'Align institutions around delivery',
    body:  'Launch helps organizations pursue workforce and apprenticeship-related funding with a credible program strategy and measurable outcomes framework.',
  },
  {
    num:   '03',
    title: 'Publish what happens next',
    body:  'Future cohort outcomes published clearly: credentials achieved, who interviewed, employment categories, retention, and apprenticeship progression.',
  },
] as const

export function AedificaModel() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-10 lg:py-16" aria-labelledby="model-heading">
      <div className="max-w-7xl mx-auto px-6">

        {/* Centered intro — no eyebrow, eyebrow cap already hit */}
        <div className="max-w-[44rem] mx-auto text-center mb-10 lg:mb-12">
          <h2
            id="model-heading"
            className="text-[1.875rem] lg:text-[2.5rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic mb-5"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
          >
            Workforce architecture, not isolated training.
          </h2>
          <p
            className="text-[15.5px] text-anthracite/60 leading-[1.65]"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Aedifica designs the connections a pathway requires.
            Training matters. What surrounds training determines
            whether it leads somewhere.
          </p>
        </div>

        {/* Numbered rows — not equal cards (banned pattern) */}
        <div className="max-w-[52rem] mx-auto">
          {ITEMS.map(({ num, title, body }, i) => (
            <motion.div
              key={num}
              className="flex items-start gap-8 lg:gap-14 py-7 lg:py-8 border-t border-sediment/25"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: i * 0.07, ease: EASE }}
            >
              <span
                className="flex-shrink-0 select-none text-[5rem] lg:text-[7rem] xl:text-[7.5rem] leading-[0.82]"
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontWeight: 300,
                  color: 'rgb(102 103 171 / 0.45)',
                }}
                aria-hidden="true"
              >
                {num}
              </span>
              <div className="pt-1.5">
                <h3
                  className="text-[14.5px] font-semibold text-anthracite tracking-[-0.01em] mb-2.5 leading-snug"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {title}
                </h3>
                <p
                  className="text-[13.5px] text-anthracite/60 leading-[1.65]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-sediment/25" aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}
