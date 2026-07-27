'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '-60px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

type ColorKey = 'datum' | 'quarry' | 'sediment' | 'patina'

// quarry (~2.76:1) and sediment (~1.9:1) fail WCAG as text on snow; only datum and patina clear 4.5:1.
// `quote` is aria-hidden decoration only, so it can safely use the true color regardless.
const COLOR_MAP: Record<ColorKey, { border: string; text: string; quote: string }> = {
  datum: { border: 'border-datum', text: 'text-datum', quote: 'text-datum' },
  quarry: { border: 'border-quarry', text: 'text-anthracite', quote: 'text-quarry' },
  sediment: { border: 'border-sediment', text: 'text-anthracite', quote: 'text-sediment' },
  patina: { border: 'border-patina', text: 'text-patina', quote: 'text-patina' },
}

const GLANCE = [
  'Build trust early.',
  'Let students do real work.',
  'Give them responsibility.',
  'Make learning relatable.',
  'Use competition as celebration.',
  'Define success clearly.',
  'Build balanced teams.',
  'Cultivate institutional buy-in.',
  'Respect students deeply.',
  'Partner across boundaries.',
] as const

type Lesson = {
  num: string
  color: ColorKey
  title: string
  paragraphs: string[]
  pull?: string
  pullAfter?: number
}

const LESSONS: Lesson[] = [
  {
    num: '01',
    color: 'datum',
    title: 'Build genuine relationships to foster empathy and trust',
    paragraphs: [
      'One of the most important lessons I learned is that rapport is not a soft add-on to program design; it is part of the learning architecture. Students engage differently when they feel known, respected, and safe enough to take intellectual risks.',
      "There is a meaningful difference between assuming we understand a student's background and actually listening to their experiences. This year, giving students space to speak freely helped us understand not only how they learn, but what motivates them, what makes them hesitant, and what helps them feel confident. That human connection changed the tone of the program.",
      'The presence of returning scholars also made a visible difference. Because they already knew us, they entered the program with greater comfort and trust. That trust spread across the cohort. The classroom became more relaxed, more collaborative, and more open to challenge. For leaders designing youth STEM programs, the implication is clear: relationships should be built early, intentionally, and consistently. Trust accelerates learning.',
    ],
    pull: 'Trust accelerates learning.',
    pullAfter: 0,
  },
  {
    num: '02',
    color: 'quarry',
    title: 'Learning by doing is more powerful than learning by watching',
    paragraphs: [
      'The strongest learning moments did not come when students were watching us explain engineering concepts. They came when students were building, testing, debating, revising, and presenting their own work.',
      'Hands-on learning turned abstract ideas into lived experiences. Concepts such as tension, compression, buckling, material selection, cost, and structural performance became more understandable because students encountered them through their own prototypes. They were not simply told that engineering is iterative; they experienced iteration. They learned that a failed test is not the end of the process. It is data. It is feedback. It is the beginning of a better design.',
      'This is especially important for middle school learners. At this age, students benefit from seeing that complex problems can be broken into manageable decisions. When they are allowed to touch the materials, test their assumptions, and defend their reasoning, they begin to internalize the habits of engineers: observe carefully, measure what matters, work with constraints, and improve through evidence.',
    ],
    pull: 'A failed test is not the end of the process. It is data. It is feedback. It is the beginning of a better design.',
    pullAfter: 0,
  },
  {
    num: '03',
    color: 'sediment',
    title: 'Students thrive when given real responsibility',
    paragraphs: [
      'One of the most rewarding parts of the program was watching students rise to the level of responsibility we placed before them. Middle school students are often underestimated. Yet when they were assigned clear roles within their teams, they demonstrated maturity, accountability, and pride.',
      'Responsibility changed their posture. Students began to see themselves not just as participants, but as contributors. They had jobs to do. Their teammates depended on them. Their design decisions mattered. Their presentations would be heard by peers, instructors, judges, and families.',
      'This sense of ownership helped build confidence. It also strengthened collaboration. Students learned that leadership is not always about being the loudest voice in the room. Sometimes it is about listening carefully, helping a teammate, organizing materials, explaining an idea clearly, or making sure the group stays focused. Those are the kinds of leadership behaviors that strong programs should intentionally cultivate.',
    ],
  },
  {
    num: '04',
    color: 'patina',
    title: 'Relatability matters: meet students where they are',
    paragraphs: [
      'To reach students, we had to be willing to meet them where they were. That meant making the learning environment academically serious without making it emotionally distant.',
      'Music, games, humor, pop culture references, and informal conversations helped create a setting where students felt comfortable engaging. These moments did not distract from learning. They made learning more accessible. They signaled that students did not need to leave their personalities at the door in order to participate in STEM.',
      'Relatability is not about lowering expectations. It is about opening the door wider. When students recognize that instructors understand something about their world, they are more willing to enter ours. That exchange creates the conditions for deeper learning.',
    ],
    pull: 'Relatability is not about lowering expectations. It is about opening the door wider.',
    pullAfter: 0,
  },
  {
    num: '05',
    color: 'datum',
    title: 'Healthy competition can unlock motivation',
    paragraphs: [
      'The final presentation and bridge competition brought a special energy to the program. Students knew their work would be evaluated, and that knowledge pushed them to refine their designs, strengthen their explanations, and collaborate more effectively.',
      'Competition, when framed well, can become a tool for growth rather than pressure. In this case, it gave students a reason to go the extra mile. They wanted their bridge to perform well. They wanted their team to be proud. They wanted to answer the judges’ questions with confidence.',
      'The key was to make the competition celebratory and developmental. The goal was not simply to name a winner. It was to create a public moment where students could demonstrate what they had learned and see themselves as capable STEM communicators. That kind of experience can stay with a young person long after the prototype is taken apart.',
    ],
  },
  {
    num: '06',
    color: 'quarry',
    title: 'A clear vision for success matters',
    paragraphs: [
      'Programs like Bridging Brilliance require many moving parts: school leadership, university partners, instructors, families, transportation, materials, schedules, and student expectations. Without a clear vision, activity can easily be mistaken for impact.',
      "A shared definition of success helped us stay focused. We were not only trying to complete projects. We were trying to expand students' view of engineering, demystify pathways into STEM careers, and increase their confidence to pursue advanced opportunities. That clarity shaped the curriculum, the tone of instruction, the final showcase, and the way we evaluated progress.",
      'For program leaders, the lesson is to define success early and return to it often. A clear vision gives teams a common language. It helps partners understand their role. Most importantly, it ensures that the student experience remains at the center.',
    ],
  },
  {
    num: '07',
    color: 'sediment',
    title: 'Balanced teams make strong programs possible',
    paragraphs: [
      'No successful program is delivered by one person alone. This year reinforced the importance of building a team with complementary strengths. Strong instruction, operational coordination, school-based support, university engagement, family communication, and student mentorship all had to work together.',
      'A balanced team does more than divide tasks. It improves judgment. Different team members see different things. Some understand student dynamics more clearly. Others anticipate logistical risks. Others bring technical expertise, institutional knowledge, or experience managing youth programs. When those perspectives are aligned, the program becomes more adaptive and resilient.',
      'The best teams are not identical. They balance one another. They share commitment, but they bring different strengths to the table.',
    ],
  },
  {
    num: '08',
    color: 'patina',
    title: 'A can-do mentality creates institutional buy-in',
    paragraphs: [
      'Institutional buy-in is not created by vision statements alone. It is built through reliability, responsiveness, and a can-do mentality.',
      'Programs that cross institutional boundaries inevitably encounter friction: scheduling constraints, transportation needs, budget questions, communication gaps, and competing priorities. A solutions-oriented culture matters. When partners see that a team is prepared, flexible, and committed to making things work, confidence grows.',
      'That confidence becomes a form of capital. It helps schools, universities, funders, and families believe that the program is worth investing in, not only financially, but with time, trust, and attention.',
    ],
  },
  {
    num: '09',
    color: 'datum',
    title: 'Students engage more deeply when they feel respected and seen',
    paragraphs: [
      'Perhaps the most human lesson is also the most important: students learn more deeply when they feel respected and seen.',
      'Our scholars were talented, curious, funny, ambitious, and sometimes unsure of themselves. They did not need us to simplify the work. They needed us to believe they could do it, and then support them as they proved it to themselves.',
      'Respect showed up in small ways: listening to their ideas, taking their questions seriously, giving them real responsibilities, expecting them to present with clarity, and encouraging them when their first design did not work. Over time, those gestures became part of the program culture. Students began to speak with more confidence, use more precise academic language, and take greater pride in their work.',
    ],
  },
  {
    num: '10',
    color: 'quarry',
    title: 'Cross-institutional partnerships are essential to building a diverse STEM talent pipeline',
    paragraphs: [
      'Bridging Brilliance also reinforced the importance of partnership. No single institution can build a diverse STEM talent pipeline alone. Schools bring deep knowledge of students, families, and community context. Universities bring exposure, technical expertise, role models, facilities, and pathways into future study. Funders and community partners help make the work sustainable.',
      'When these pieces come together, students gain more than a program. They gain a network of possibility. They see a college campus. They meet people studying and practicing engineering. They present in professional settings. They begin to imagine themselves in spaces that may have once felt unfamiliar.',
      'That exposure matters. It can turn aspiration into a plan.',
    ],
    pull: 'That exposure matters. It can turn aspiration into a plan.',
    pullAfter: 0,
  },
]

export function BridgingBrillianceCaseStudy() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section className="bg-bone pt-24 lg:pt-28 pb-16 lg:pb-20" aria-labelledby="bb-h1">
        <div className="max-w-7xl mx-auto px-6">
          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-anthracite/8 text-anthracite/75 px-3 py-1 mb-8 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Aedifica Research · R-02 · Field notes
          </motion.span>

          <motion.h1
            id="bb-h1"
            className="text-[2.25rem] lg:text-[3.75rem] xl:text-[4.5rem] leading-[1.02] tracking-[-0.032em] text-anthracite italic mb-8 max-w-[22ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Building trust, ownership, and opportunity in STEM learning.
          </motion.h1>

          <motion.p
            className="text-[16px] lg:text-[17px] text-anthracite/78 leading-[1.65] max-w-[62ch] mb-6"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.32, ease: EASE }}>
            Lessons from HIA Bridging Brilliance. When we launched this year&rsquo;s program, we knew
            we were designing more than a STEM enrichment experience. <strong className="font-medium text-anthracite">We were building a
            bridge</strong>: between middle school and high school, between curiosity and confidence,
            between Hillside and Hoboken, and between students&rsquo; current sense of what is possible
            and the much wider horizon that engineering can offer.
          </motion.p>

          <motion.p
            className="text-[12px] uppercase tracking-[0.12em] text-anthracite/60"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            animate={reduce ? undefined : { opacity: 1 }}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.4, ease: EASE }}>
            HIA Bridging Brilliance &middot; Lessons from the instructor
          </motion.p>
        </div>
      </section>

      {/* ── Overview ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="bb-overview-h2">
        <div className="max-w-[68ch] mx-auto px-6">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            <p className="text-[13px] uppercase tracking-[0.14em] text-ink-soft font-medium" style={{ fontFamily: 'var(--font-body)' }}>Overview</p>
          </motion.div>
          <motion.h2
            id="bb-overview-h2"
            className="text-[1.75rem] lg:text-[2.25rem] leading-[1.15] tracking-[-0.026em] text-anthracite italic mb-6 max-w-[24ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            More than content: the architecture of a strong program.
          </motion.h2>
          <motion.p
            className="text-[17px] text-anthracite leading-[1.6] mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
            At its best, STEM education is not simply about introducing students to technical
            vocabulary, design tools, or formulas. It is about helping young people see themselves as
            problem-solvers. It is about giving them the confidence to ask better questions, the
            resilience to test and revise an idea, and the language to explain their thinking to
            others. Over the course of the program, I saw students move from uncertainty to
            ownership, from passive participation to active leadership, and from seeing engineering
            as something distant to seeing it as something they could do, shape, and belong to.
          </motion.p>
          <motion.p
            className="text-[14.5px] text-anthracite/78 leading-[1.7] mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.06, ease: EASE }}>
            The program&rsquo;s success was certainly supported by curriculum design. The structure
            mattered. The projects mattered. The exposure to Stevens Institute of Technology mattered.
            But the deeper lesson is that strong programs are built on more than content. They depend
            on relationships, trust, institutional commitment, team chemistry, student agency, and a
            shared belief that middle school students are capable of far more than they are often
            asked to demonstrate.
          </motion.p>
          <motion.p
            className="text-[13px] text-anthracite/60 italic"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, delay: 0.1, ease: EASE }}>
            Several lessons stand out.
          </motion.p>
        </div>
      </section>

      {/* ── At a glance ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20" aria-labelledby="bb-glance-h2">
        <div className="max-w-[68ch] mx-auto px-6">
          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            <p className="text-[13px] uppercase tracking-[0.14em] text-anthracite/75 font-medium" style={{ fontFamily: 'var(--font-body)' }}>At a glance</p>
          </motion.div>
          <motion.h2
            id="bb-glance-h2"
            className="text-[1.75rem] lg:text-[2.25rem] leading-[1.15] tracking-[-0.026em] text-anthracite italic mb-8"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            Ten lessons, in sequence.
          </motion.h2>
          <ol className="border-t border-sediment/25">
            {GLANCE.map((item, i) => (
              <motion.li
                key={item}
                className="grid grid-cols-[3rem_1fr] gap-4 py-3.5 border-b border-sediment/25 items-baseline"
                initial={reduce ? undefined : { opacity: 0, y: 10 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={reduce ? undefined : { duration: 0.35, delay: Math.min(i * 0.03, 0.3), ease: EASE }}>
                <span className="text-[13px] text-anthracite/50" style={{ fontFamily: 'var(--font-body)' }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-[15px] text-anthracite" style={{ fontFamily: 'var(--font-body)' }}>{item}</span>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── Lessons ── bg-snow, one continuous editorial column, colored top-rule per lesson ── */}
      <section className="bg-snow py-14 lg:py-20" aria-label="The ten lessons, in full">
        <div className="max-w-[68ch] mx-auto px-6">
          {LESSONS.map((lesson) => {
            const c = COLOR_MAP[lesson.color]
            return (
              <motion.article
                key={lesson.num}
                id={`lesson-${lesson.num}`}
                className={`pt-10 pb-12 lg:pt-12 lg:pb-14 border-t-[3px] ${c.border} scroll-mt-24`}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>

                <div className="grid grid-cols-[auto_1fr] gap-5 lg:gap-7 items-start mb-6">
                  <p
                    className={`text-[2.75rem] lg:text-[3.75rem] italic leading-[0.85] ${c.text} select-none`}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                    aria-hidden="true">
                    {lesson.num}
                  </p>
                  <div>
                    <p className={`text-[11px] uppercase tracking-[0.14em] mb-2 ${c.text}`} style={{ fontFamily: 'var(--font-body)' }}>
                      Lesson {lesson.num} of 10
                    </p>
                    <h3
                      className="text-[1.375rem] lg:text-[1.75rem] leading-[1.15] tracking-[-0.02em] text-anthracite italic max-w-[26ch] [text-wrap:balance]"
                      style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                      {lesson.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-4">
                  {lesson.paragraphs.map((p, i) => (
                    <div key={i}>
                      <p className="text-[14.5px] text-anthracite/82 leading-[1.72]" style={{ fontFamily: 'var(--font-body)' }}>
                        {p}
                      </p>
                      {lesson.pull && lesson.pullAfter === i && (
                        <blockquote className="relative my-6 pl-8">
                          <span
                            className={`absolute left-0 -top-2 text-[3rem] leading-none select-none ${c.quote} opacity-25`}
                            aria-hidden="true"
                            style={{ fontFamily: 'var(--font-heading)' }}>
                            &ldquo;
                          </span>
                          <p className="text-[1.25rem] lg:text-[1.4375rem] italic leading-[1.4] tracking-[-0.015em] text-anthracite" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                            {lesson.pull}
                          </p>
                        </blockquote>
                      )}
                    </div>
                  ))}
                </div>

              </motion.article>
            )
          })}
        </div>
      </section>

      {/* ── Conclusion ── bg-anthracite */}
      <section className="bg-anthracite py-16 lg:py-24" aria-labelledby="bb-conclusion-h2">
        <div className="max-w-[68ch] mx-auto px-6">
          <motion.p
            className="text-[13px] uppercase tracking-[0.16em] text-sediment mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, ease: EASE }}>
            Looking ahead
          </motion.p>
          <motion.h2
            id="bb-conclusion-h2"
            className="text-[2rem] lg:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-white italic mb-8 max-w-[16ch]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            Practical, and hopeful.
          </motion.h2>

          <motion.p
            className="text-[15px] text-white/88 leading-[1.7] mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, ease: EASE }}>
            The lessons from HIA Bridging Brilliance are both practical and hopeful. Build trust
            early. Let students do real work. Give them responsibility. Make learning relatable. Use
            competition as celebration. Define success clearly. Build balanced teams. Cultivate
            institutional buy-in. Respect students deeply. Partner across boundaries.
          </motion.p>
          <motion.p
            className="text-[14px] text-white/65 leading-[1.72] mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.06, ease: EASE }}>
            These are not complicated ideas, but they require discipline and care. They require
            adults to design programs that are rigorous and humane, structured and flexible,
            ambitious and joyful.
          </motion.p>
          <motion.p
            className="text-[14px] text-white/65 leading-[1.72] mb-8"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
            As we look to the future, the opportunity is to build on what worked and continue
            refining the model. Programs like Bridging Brilliance can help reshape how young people
            experience STEM, not as a distant field reserved for a few, but as a living, creative,
            collaborative discipline that welcomes their ideas and rewards their persistence.
          </motion.p>

          <motion.p
            className="text-[1.25rem] lg:text-[1.5rem] italic text-white leading-[1.4] tracking-[-0.015em] border-t border-white/20 pt-8 max-w-[36ch]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.14, ease: EASE }}>
            The bridge we built this year was not only made of prototypes, presentations, and
            engineering concepts. It was built from trust, confidence, ownership, and opportunity.
            And for many students, that bridge may be the first step toward a much larger journey.
          </motion.p>
        </div>
      </section>

      {/* ── Back to archive ── bg-snow */}
      <section className="bg-snow py-10 lg:py-14" aria-label="Return to research archive">
        <div className="max-w-[68ch] mx-auto px-6">
          <Link href="/research"
            className="inline-flex items-center gap-2 text-[13.5px] text-anthracite underline underline-offset-4 decoration-anthracite/30 hover:decoration-anthracite transition-colors duration-150"
            style={{ fontFamily: 'var(--font-body)' }}>
            <span aria-hidden="true">&larr;</span>
            Back to the research archive
          </Link>
        </div>
      </section>

    </main>
  )
}
