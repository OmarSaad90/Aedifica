'use client'
import { motion, useReducedMotion } from 'motion/react'
import { Gear, Microphone, ArrowsClockwise, UsersThree, Compass } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '80px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const SHIFTS = [
  {
    Icon: Gear,
    heading: 'Engineering became real',
    body: "Students moved from defining engineering as 'fixing things' to 'designing, creating, testing, and improving solutions.' A visit to Stevens' Innovation Expo showed them the range and genuine rewards of the work.",
    quote: "Engineering is 'building a prototype' and 'using serious critical thinking skills.' Student reflection",
  },
  {
    Icon: Microphone,
    heading: 'Confidence grew through presentation',
    body: "Preparing for the competition and answering judges' questions built real public-speaking and technical-communication skill. Instructors described it as an unexpected, standout development of the program.",
    quote: 'Students "both reported and demonstrated increased confidence in public speaking." EIF report',
  },
  {
    Icon: ArrowsClockwise,
    heading: 'Failure became part of the design process',
    body: 'Testing prototypes taught students that a failed test is data, not defeat. They came to embrace the messy, iterative nature of real engineering.',
    quote: '"When we mess up, this only sets you up for a new door to open." Student reflection',
  },
  {
    Icon: UsersThree,
    heading: 'Teamwork and leadership were practiced',
    body: 'Mixed-grade teams with assigned roles let students discover that leadership can mean listening, helping a teammate, organizing the work, or explaining an idea clearly.',
    quote: 'Teamwork, time management, and leadership were "frequently cited" outcomes. EIF report',
  },
  {
    Icon: Compass,
    heading: 'Pathways became visible',
    body: 'By working alongside undergraduates, graduate researchers, and faculty, students saw engineering as a reachable career with many roles. For the eighth-grade cohort, the next step became concrete: 55% were accepted into selective STEM high schools.',
    quote: '"It is as important to learn as to succeed." Student reflection',
  },
] as const

export function ImpactStudentShifts() {
  const reduce = useReducedMotion()
  return (
    <section id="changed" className="bg-anthracite py-14 lg:py-20" aria-labelledby="changed-h2">
      <div className="max-w-7xl mx-auto px-6">

        <div className="mb-8 lg:mb-10">
          <motion.h2
            id="changed-h2"
            className="text-[2rem] lg:text-[2.75rem] xl:text-[3.75rem] leading-[1.04] tracking-[-0.035em] text-white italic mb-4"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            Five shifts, in students' own words.
          </motion.h2>
          <motion.p
            className="text-[14px] text-white/55 leading-[1.7] max-w-[56ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            Drawn from student reflections and the Engineering Information Foundation report, the changes the program team and the data both named.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-px bg-white/10">
          {SHIFTS.map(({ Icon, heading, body, quote }, i) => (
            <motion.div
              key={heading}
              className={`bg-anthracite px-6 py-6 lg:py-7 flex flex-col gap-3 ${i === 4 ? 'lg:col-span-2 xl:col-span-1' : ''}`}
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: (i % 2) * 0.07, ease: EASE }}>
              <Icon size={32} className="text-datum" weight="regular" />
              <h3
                className="text-[1.125rem] italic text-white leading-[1.2] tracking-[-0.018em]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                {heading}
              </h3>
              <p
                className="text-[13px] text-white/60 leading-[1.65]"
                style={{ fontFamily: 'var(--font-body)' }}>
                {body}
              </p>
              <p
                className="text-[12px] italic text-white/65 leading-[1.6]"
                style={{ fontFamily: 'var(--font-body)' }}>
                {quote}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
