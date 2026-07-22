'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const QUOTES = [
  { text: 'I became more interested in civil engineering and now have future support as I prepare for college.', footer: 'A 2023 Pathway student' },
  { text: 'I learned a lot of new vocabulary that my friends and I started using casually; we now look at the buildings and structures around us in a new light, as form or function.', footer: 'A 2024 Pathway student' },
  { text: "I learned how to think and design like an engineer, and to be aware of how I'm impacting the environment around me.", footer: 'A 2024 Pathway student' },
  { text: 'I really enjoyed presenting our final project because everyone was able to ask questions and give constructive feedback.', footer: 'A 2023 Pathway student' },
  { text: "The class started off very slow but once it picked up, it became the most enjoyable class I've ever attended.", footer: 'A Pathway student · Stevens pre-college' },
  { text: 'I had absolutely zero experience prior to it, but now I feel much more accomplished and learned in the subject.', footer: 'A Pathway student · Stevens pre-college' },
  { text: 'He made us all think on our feet and think outside the box while considering the needs and happiness of the client.', footer: 'A Pathway student, on their instructor · Stevens pre-college' },
  { text: 'I felt like I was living the life of a real engineer while in the classroom.', footer: 'A 2022 Pathway student · Stevens pre-college' },
  { text: 'It allowed me to understand what civil engineering is and presented it in a way that would make me want to become a civil engineer.', footer: 'A 2024 Pathway student · Stevens pre-college' },
  { text: 'It made me excited for my major and college life in the future.', footer: 'A 2024 Pathway student · Stevens pre-college' },
] as const

export function PathwayQuotes() {
  const reduce = useReducedMotion()

  return (
    <section className="bg-anthracite py-14 lg:py-20" aria-labelledby="pathway-quotes-h2">
      <div className="max-w-7xl mx-auto px-6">

        {/* Mirrored from Explore: image left, text right, instead of repeating
            the same text-left/image-right order in the same colors reversed. */}
        <div className="lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-16 xl:gap-20 mb-12 lg:mb-16">
          <div className="lg:order-2">
            <motion.div
              className="flex items-center gap-3 mb-4"
              initial={reduce ? undefined : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
              <span className="w-7 h-[2px] bg-quarry flex-shrink-0" aria-hidden="true" />
              <p className="text-[12px] uppercase tracking-[0.14em] text-white/70 font-medium" style={{ fontFamily: 'var(--font-body)' }}>High school · Stevens pre-college</p>
            </motion.div>
            <motion.h2
              id="pathway-quotes-h2"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-white italic [text-wrap:balance] scroll-mt-24 mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
              Aedifica Pathway.
            </motion.h2>
            <motion.p
              className="text-[15px] text-white/60 leading-[1.72]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              Three summers of the Civil Engineering and Design Pathway at Stevens Institute of Technology (2022, 2023, and 2024) produced consistent survey results. These are their words, anonymized by cohort year and reproduced from post-program surveys.
            </motion.p>
          </div>

          {/* Absolutely positioned so its own intrinsic size can't inflate the grid
              row — the row height comes only from the text column. */}
          <motion.div
            className="relative mt-10 lg:mt-0 lg:order-1 min-h-[280px] overflow-hidden"
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
            <img
              src="/images/campus-group.jpg"
              alt="Stevens pre-college Pathway students presenting their work"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'grayscale(15%) contrast(1.05) brightness(0.94)' }}
              loading="lazy"
            />
          </motion.div>
        </div>

        {/* A dense numbered list instead of a hero quote plus a grid — the same
            hover-wake pattern used for Rebuild's 17-stage journey: numerals rest
            dim and wake to full quarry on hover. Two columns keep ten quotes
            compact instead of running the section long. */}
        <ol className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-14 xl:gap-x-20 border-t border-white/12">
          {QUOTES.map(({ text, footer }, i) => (
            <motion.li
              key={text}
              className="group flex gap-5 lg:gap-6 py-6 lg:py-7 border-b border-white/12"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.4, delay: Math.min(i * 0.04, 0.3), ease: EASE }}>
              <span
                className="flex-shrink-0 w-8 text-[1.25rem] text-quarry/55 italic leading-none pt-0.5 tabular-nums select-none transition-colors duration-200 group-hover:text-quarry"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <p
                  className="text-[1.0625rem] lg:text-[1.125rem] text-white/85 italic leading-[1.4] tracking-[-0.015em] mb-2 [text-wrap:balance] transition-colors duration-200 group-hover:text-white"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  "{text}"
                </p>
                <p className="text-[11px] text-white/55 uppercase tracking-[0.1em]" style={{ fontFamily: 'var(--font-body)' }}>
                  {footer}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

      </div>
    </section>
  )
}
