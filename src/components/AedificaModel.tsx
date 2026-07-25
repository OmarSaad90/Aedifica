import { motion, useReducedMotion } from 'motion/react'
import { HardHat, ChartLineUp, Handshake, type Icon } from '@phosphor-icons/react'

const VIEWPORT    = { once: true, margin: '-70px 0px' } as const
const EASE        = [0.25, 0.1, 0.25, 1] as const
const SPRING_EASE = [0.32, 0.72, 0, 1] as const

const ITEMS: { Icon: Icon; tag: string; title: string; body: string }[] = [
  {
    Icon: HardHat,
    tag:   'Field-built',
    title: 'Designed from the jobsite backward',
    body:  'Curriculum carries named employer validators who confirm what we teach matches the work New Jersey general contractors are doing today.',
  },
  {
    Icon: ChartLineUp,
    tag:   'Evidence-run',
    title: 'Measured by outcomes, not hours',
    body:  'Placement rate, credential attainment, wage at placement, and apprenticeship articulation, published with the same definitions, every cohort.',
  },
  {
    Icon: Handshake,
    tag:   'Partner-shaped',
    title: 'Built with institutions, not around them',
    body:  'Recruitment, fiscal capacity, and role definition stay with the partners who already do them well. Aedifica owns curriculum, instruction, and measurement. Where a vocational or trade school already trains the craft, we add the construction-management layer above it rather than a competing program.',
  },
]

const FLOW_STAGES = [
  {
    label: 'Exposure',
    color: 'var(--color-datum)',
    desc: 'Career awareness and hands-on discovery in the built environment, beginning in middle school.',
  },
  {
    label: 'Skills',
    color: 'var(--color-quarry)',
    desc: 'Construction-management thinking, technical fluency, and project literacy taught with classroom rigor.',
  },
  {
    label: 'Credentials',
    color: 'var(--color-sediment)',
    desc: 'Industry-recognized credentials anchored by an employer-validated capstone, every time.',
  },
  {
    label: 'Opportunity',
    color: 'var(--color-pipeline)',
    desc: 'Interview commitments, apprenticeship articulation, and employer-connected placement.',
  },
] as const

export function AedificaModel() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-bone py-14 lg:py-20" aria-labelledby="model-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className="lg:grid lg:grid-cols-[6fr_7fr] lg:gap-16 xl:gap-20 lg:items-start">

          {/* Left: sticky brand video */}
          <motion.div
            className="mb-10 lg:mb-0 lg:sticky lg:top-24"
            initial={reduce ? undefined : { opacity: 0, x: -20 }}
            whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
            {/* Bleeds past the container's left gutter and carries a hairline frame
                instead of overlaid text, since the footage shifts color too much
                underneath to guarantee any caption stays legible. */}
            <div className="overflow-hidden border border-anthracite/12 lg:-ml-6 lg:w-[calc(100%+1.5rem)]">
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
                  className="py-4 lg:py-5 border-b border-sediment/30"
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
                      className="text-[11px] uppercase tracking-[0.16em] text-anthracite/80"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      Stage {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p
                    className="text-[1.625rem] lg:text-[1.875rem] italic text-anthracite leading-none mb-2.5"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                  >
                    {stage.label}
                  </p>
                  <p
                    className="text-[12.5px] text-anthracite/70 leading-[1.6] max-w-[46ch]"
                    style={{ fontFamily: 'var(--font-body)' }}
                  >
                    {stage.desc}
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
                className="text-[1.875rem] lg:text-[2.625rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: SPRING_EASE }}
              >
                One disciplined pathway: from exposure to opportunity.
              </motion.h2>
            </div>

            {/* Items */}
            <div className="max-w-[52rem] mx-auto lg:max-w-none lg:mx-0">
              {ITEMS.map(({ Icon: IconComp, tag, title, body }, i) => (
                <motion.div
                  key={title}
                  className="flex items-start gap-6 lg:gap-10 py-6 lg:py-8 border-t border-sediment/25"
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
                    <span
                      className="block text-[10.5px] uppercase tracking-[0.12em] text-datum mb-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {tag}
                    </span>
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

              {/* Hand-off note: each stage passes to the next */}
              <motion.div
                className="flex items-start gap-3 mt-7"
                initial={reduce ? undefined : { opacity: 0 }}
                whileInView={reduce ? undefined : { opacity: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.4, ease: EASE }}
              >
                <span className="w-4 h-[1.5px] bg-anthracite/35 flex-shrink-0 mt-[9px]" aria-hidden="true" />
                <p
                  className="text-[12.5px] text-anthracite/70 leading-[1.65] max-w-[52ch]"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  Each program serves one stage for one audience, and hands off to the next. Curriculum
                  without that hand-off is a class. Aedifica is designed to build a pathway.
                </p>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
