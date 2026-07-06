import { motion, useReducedMotion } from 'motion/react'
import { ChalkboardTeacher, Buildings, Megaphone, type Icon } from '@phosphor-icons/react'

const VIEWPORT    = { once: true, margin: '-70px 0px' } as const
const EASE        = [0.25, 0.1, 0.25, 1] as const
const SPRING_EASE = [0.32, 0.72, 0, 1] as const

const ITEMS: { Icon: Icon; title: string; body: string }[] = [
  {
    Icon: ChalkboardTeacher,
    title: 'Prepare learners for relevant work',
    body:  'Practical construction-management literacy: documentation, digital tools, estimating foundations, supervisory communication, capstone experience, and interview readiness.',
  },
  {
    Icon: Buildings,
    title: 'Align institutions around delivery',
    body:  'Launch helps organizations pursue workforce and apprenticeship-related funding with a credible program strategy and measurable outcomes framework.',
  },
  {
    Icon: Megaphone,
    title: 'Publish what happens next',
    body:  'Future cohort outcomes published clearly: credentials achieved, who interviewed, employment categories, retention, and apprenticeship progression.',
  },
]

const FLOW_STAGES = [
  { label: 'Exposure',    color: 'var(--color-datum)'        },
  { label: 'Skills',      color: 'var(--color-quarry)'       },
  { label: 'Credentials', color: 'var(--color-sediment)'     },
  { label: 'Opportunity', color: 'var(--color-rebuild-deep)' },
] as const

export function AedificaModel() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-16 lg:py-24" aria-labelledby="model-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className="lg:grid lg:grid-cols-[5fr_7fr] lg:gap-16 xl:gap-20 lg:items-start">

          {/* Left: sticky brand video */}
          <motion.div
            className="mb-10 lg:mb-0 lg:sticky lg:top-24"
            initial={reduce ? undefined : { opacity: 0, x: -20 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
            <div className="overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full"
                aria-hidden="true">
                <source src="/videos/aedifica-brand.mp4" type="video/mp4" />
              </video>
            </div>

            {/* Exposure → Skills → Credentials → Opportunity, stacked under the video */}
            <div className="mt-8 border-t border-sediment/30 pl-1">
              {FLOW_STAGES.map((stage, i) => (
                <motion.div
                  key={stage.label}
                  className="py-6 border-b border-sediment/30"
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.5, delay: 0.1 + i * 0.08, ease: EASE }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="flex-shrink-0 w-[13px] h-[13px] rotate-45"
                      style={{ backgroundColor: stage.color }}
                      aria-hidden="true"
                    />
                    <span
                      className="text-[11px] uppercase tracking-[0.16em] text-anthracite/55"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Stage {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p
                    className="text-[1.625rem] lg:text-[1.875rem] italic text-anthracite leading-none"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                  >
                    {stage.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: intro + items */}
          <div className="lg:mt-2">

            {/* Section intro */}
            <div className="max-w-[44rem] mx-auto text-center lg:text-left lg:max-w-none lg:mx-0 mb-14 lg:mb-12">
              <motion.div
                className="flex items-center justify-center lg:justify-start gap-3 mb-5"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.4, ease: EASE }}
              >
                <span className="w-7 h-[2px] bg-datum flex-shrink-0" aria-hidden="true" />
                <p
                  className="text-[13.5px] uppercase tracking-[0.14em] text-datum font-medium leading-none"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Our approach
                </p>
              </motion.div>
              <motion.h2
                id="model-heading"
                className="text-[1.875rem] lg:text-[2.625rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic mb-4"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: SPRING_EASE }}
              >
                Workforce architecture, not isolated training.
              </motion.h2>
              <motion.p
                className="text-[15.5px] text-anthracite/70 leading-[1.65]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: 0.09, ease: EASE }}
              >
                Aedifica designs the connections a pathway requires.
                Training matters. What surrounds training determines whether it leads somewhere.
                A learner should move cleanly from one stage to the next.
              </motion.p>
            </div>

            {/* Items */}
            <div className="max-w-[52rem] mx-auto lg:max-w-none lg:mx-0">
              {ITEMS.map(({ Icon: IconComp, title, body }, i) => (
                <motion.div
                  key={title}
                  className="flex items-start gap-6 lg:gap-10 py-8 lg:py-10 border-t border-sediment/25"
                  initial={reduce ? undefined : { opacity: 0, x: -16 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.6, delay: i * 0.1, ease: SPRING_EASE }}
                >
                  <IconComp
                    size={26}
                    weight="regular"
                    className="flex-shrink-0 text-datum mt-1"
                    aria-hidden={true}
                  />

                  <div className="min-w-0">
                    <h3
                      className="text-[1.0625rem] lg:text-[1.1875rem] font-semibold text-anthracite tracking-[-0.015em] mb-3 leading-snug"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {title}
                    </h3>
                    <p
                      className="text-[13.5px] text-anthracite/70 leading-[1.68] max-w-[55ch]"
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
        </div>

      </div>
    </section>
  )
}
