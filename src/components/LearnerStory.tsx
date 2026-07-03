import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

export function LearnerStory() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-anthracite py-12 lg:py-18" aria-labelledby="story-heading">
      <div className="max-w-7xl mx-auto px-6">

        <div className="lg:grid lg:grid-cols-[1.5fr_1fr] lg:gap-16 xl:gap-20 lg:items-start">

          {/* Left: quote arc */}
          <div className="lg:pt-4">
            <motion.h2
              id="story-heading"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-white italic mb-10 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              From zero experience to a first step they could name.
            </motion.h2>

            <div className="space-y-8">
              {([
                {
                  label: 'Before',
                  text: 'A learner arrived with curiosity about construction management but no clear map for how to move forward, and no prior experience in the field.',
                },
                {
                  label: 'During',
                  text: 'Through project challenges, career coaching, and exposure to real construction-management tools and terminology, the work became concrete rather than abstract.',
                },
                {
                  label: 'After',
                  text: '"I had absolutely zero experience prior to it, but now I feel much more accomplished and learned in the subject." A 2024 program participant',
                  isQuote: true,
                },
              ] as { label: string; text: string; isQuote?: boolean }[]).map(({ label, text, isQuote }, i) => (
                <motion.div
                  key={label}
                  className="grid grid-cols-[56px_1fr] gap-5 items-start"
                  initial={reduce ? undefined : { opacity: 0, y: 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.45, delay: i * 0.08, ease: EASE }}>
                  <span
                    className="text-[10.5px] text-datum-light uppercase tracking-[0.12em] pt-px"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {label}
                  </span>
                  <p
                    className={[
                      'leading-[1.65]',
                      isQuote
                        ? 'text-[15px] text-white/80 italic'
                        : 'text-[14px] text-white/58',
                    ].join(' ')}
                    style={{ fontFamily: isQuote ? 'var(--font-heading)' : 'var(--font-body)', fontWeight: isQuote ? 300 : undefined }}>
                    {text}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

          {/* Right: photo + caption */}
          <div className="mt-10 lg:mt-0">
            <motion.div
              className="overflow-hidden mb-5"
              initial={reduce ? undefined : { opacity: 0, x: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: EASE }}>
              <img
                src="/images/learner-story.jpg"
                alt="Aedifica program participant presenting bridge design at Stevens Institute of Technology"
                className="w-full h-[360px] lg:h-[440px] object-cover object-[50%_20%]"
                style={{ filter: 'grayscale(25%) contrast(1.07)' }}
                loading="lazy"
              />
            </motion.div>
            <motion.p
              className="text-[11px] text-white/55 uppercase tracking-[0.12em]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, delay: 0.2, ease: EASE }}>
              Learner story · Aedifica programs
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  )
}
