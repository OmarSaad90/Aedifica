'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'
import { CalendarBlank, HandCoins, UsersFour, ShieldCheck, DoorOpen, type Icon } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const FACTS: { Icon: Icon; label: string; value: string; emphasis?: boolean }[] = [
  { Icon: CalendarBlank, label: 'Ages & stages', value: 'Middle school · high school · adults' },
  { Icon: HandCoins, label: 'Cost to your family', value: 'None, programs are free to scholars', emphasis: true },
  { Icon: UsersFour, label: 'Who teaches', value: 'Working construction-management and engineering professionals' },
  { Icon: ShieldCheck, label: 'Safety & privacy', value: 'Background-check policy, supervision ratios, and FERPA-aligned data practices, confirmed before launch' },
  { Icon: DoorOpen, label: 'How to start', value: 'Ask if Aedifica is partnering with your school' },
]

const MINI_LIST = [
  'Hands-on learning in the built environment, taught by working professionals',
  'Exposure to respected, well-paying careers in construction management and engineering',
  "Mentors and classmates who stay in your child's corner well beyond the program",
  'For high-schoolers and adults, a path toward real credentials and real job connections',
] as const

export function Families() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero: dark, no picture, wine-split emphasis ── */}
      <section
        className="bg-anthracite min-h-[54vh] flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="families-h1">

        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-[62ch]">

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/80 px-3 py-1 mb-10 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              For Families
            </motion.span>

            <motion.h1
              id="families-h1"
              className="text-[2.5rem] lg:text-[4rem] xl:text-[4.75rem] leading-[1] tracking-[-0.032em] text-white italic mb-8 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              A real path into careers that build our communities, <span className="text-wine-light">at no cost to your child.</span>
            </motion.h1>

            <motion.p
              className="text-[14.5px] text-white/70 leading-[1.7] max-w-[54ch]"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
              If your child is curious about how roads, bridges, schools, and neighborhoods get
              built, Aedifica helps them explore those careers with real professionals and
              hands-on projects, starting as early as middle school.
            </motion.p>

          </div>
        </div>
      </section>

      {/* ── Why Aedifica for your family ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-label="Why Aedifica for your family">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 xl:gap-20 lg:items-start">
            <div className="space-y-4 max-w-[64ch]">
              <motion.p
                className="text-[14.5px] text-anthracite/75 leading-[1.72]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
                Aedifica provides transformative experiences that bolster confidence, create lifelong
                community, and build an exciting, challenging foundation for a future in engineering and
                construction management. We build pathways that run from early exposure in middle school
                all the way to training programs for adults returning to the job market.
              </motion.p>
              <motion.p
                className="text-[14.5px] text-anthracite/75 leading-[1.72]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.06, ease: EASE }}>
                Our programs are designed to increase opportunity and access in construction management,
                with particular focus on scholars from underserved and under-resourced backgrounds. We
                create new pathways for our scholars, help them develop the skills they need and a genuine
                sense of belonging in the STEM fields, and empower them to use what they learn to address
                urgent issues facing their own communities.
              </motion.p>
              <motion.p
                className="text-[14.5px] text-anthracite/75 leading-[1.72]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
                Together, all of us at Aedifica, our staff, our instructors, and our scholars, are here to
                build something that outlasts us.
              </motion.p>
            </div>
            <motion.div
              className="mt-10 lg:mt-0"
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              <p className="text-[10.5px] uppercase tracking-[0.18em] text-ink-soft font-semibold mb-4 select-none" style={{ fontFamily: 'var(--font-body)' }}>What we believe</p>
              <p className="text-[1.5rem] lg:text-[1.75rem] text-anthracite leading-[1.3] italic" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                Your child already has what this field needs. Our job is to make sure the door is open.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Facts + mini-list ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20" aria-label="What to expect">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-20 lg:items-start">

            <div>
              {FACTS.map(({ Icon: IconComp, label, value, emphasis }, i) => (
                <motion.div
                  key={label}
                  className="flex items-start gap-4 py-5 border-t border-sediment/25 last:border-b"
                  initial={reduce ? undefined : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.4, delay: i * 0.05, ease: EASE }}>
                  <IconComp size={19} weight="regular" className="text-ink-soft flex-shrink-0 mt-0.5" aria-hidden={true} />
                  <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-1 sm:gap-4 flex-1">
                    <p className="text-[12.5px] uppercase tracking-[0.13em] text-ink-soft font-semibold pt-0.5" style={{ fontFamily: 'var(--font-body)' }}>{label}</p>
                    <p
                      className={`text-[14px] leading-[1.55] ${emphasis ? 'text-anthracite font-medium' : 'text-anthracite/82'}`}
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 lg:mt-0 overflow-hidden"
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, ease: EASE }}>
              <img
                src="/images/partnership-event.jpg"
                alt="Families and students at an Aedifica program event"
                className="w-full h-[260px] lg:h-[320px] object-cover"
                style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                loading="lazy"
              />
            </motion.div>

          </div>

          <ul className="list-none flex flex-wrap justify-center gap-x-10 gap-y-4 mt-14 lg:mt-16 pt-10 border-t border-sediment/25 max-w-[900px] mx-auto">
            {MINI_LIST.map(item => (
              <li key={item} className="flex gap-3 items-start max-w-[26ch]">
                <span className="flex-shrink-0 w-[6px] h-[6px] rotate-45 bg-datum mt-[7px]" aria-hidden="true" />
                <span className="text-[13.5px] text-anthracite/78 leading-[1.55]" style={{ fontFamily: 'var(--font-body)' }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── CTA ── bg-snow wrapper, bg-bone card (no reserved program color for this page) ── */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Get your child started">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-bone px-10 pt-14 pb-12 lg:px-16 lg:pt-16 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>


            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
              <Link href="/partner"
                className="inline-flex items-center justify-center gap-2 bg-anthracite text-white text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-anthracite/85 group">
                Find a program for your child
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <Link href="/partner"
                className="inline-flex items-center justify-center gap-2 border border-anthracite text-anthracite text-[13.5px] tracking-[-0.01em] px-7 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-anthracite/6 group">
                Ask if Aedifica is coming to your school
                <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
            </div>

            <p className="text-[12.5px] text-anthracite/80 leading-[1.65] max-w-[58ch] mx-auto">
              <strong className="font-medium text-anthracite">For parents and families:</strong> your child
              discovers real careers, learns from working professionals, and finishes with
              something to show for it, at no cost to you.
            </p>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
