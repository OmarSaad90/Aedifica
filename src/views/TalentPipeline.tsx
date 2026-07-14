'use client'
import Link from 'next/link'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const FUNCTIONS = [
  {
    num: '01',
    title: 'Curriculum validation',
    body: 'Named employer validators confirm that what a cohort is taught matches the work mid-market New Jersey general contractors are doing today. Curriculum that cannot survive a project executive’s review does not enter a cohort.',
  },
  {
    num: '02',
    title: 'Role definition',
    body: 'Employers define the roles a pathway targets: assistant project manager, project coordinator, field engineer assistant, safety or sustainability coordinator. Instruction aims at a real opening, not a job title we imagined.',
  },
  {
    num: '03',
    title: 'Capstone review',
    body: 'Practicing managers scope and review the capstone. Learners defend estimates, schedules, risk registers, and safety plans in front of the people who would sign off on them at work.',
  },
  {
    num: '04',
    title: 'Interview commitment',
    body: 'Participating employers commit to a defined interview opportunity for qualified completers. An interview is a commitment Aedifica will publish. A job offer is not, and is never promised.',
  },
  {
    num: '05',
    title: 'Role-model exposure',
    body: 'Guest engineers, judges, and reviewers appear in youth programs as well as adult cohorts. In Explore and Pathway this is career exposure, visible people in visible roles, not hiring.',
  },
  {
    num: '06',
    title: 'Outcome feedback',
    body: 'What employers observe in interviews feeds back into the next cohort’s curriculum. The loop closes, or the pathway is not working.',
  },
] as const

const LOOP = [
  { actor: 'Employers say',       line: 'This is the work, and these are the roles.' },
  { actor: 'Aedifica builds',     line: 'Curriculum, capstone, and assessment against it.' },
  { actor: 'Learners produce',    line: 'Artifacts a manager can actually evaluate.' },
  { actor: 'Employers interview', line: 'Qualified completers, by prior commitment.' },
  { actor: 'Outcomes return',     line: 'Published, then folded into the next cohort.' },
] as const

export function TalentPipeline() {
  const reduce = useReducedMotion()

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[65vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="pipeline-h1">

        {/* Full-bleed right-half photo — desktop only */}
        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-[40%]"
          style={{ willChange: 'opacity, transform' }}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="/images/campus-group.jpg"
            alt="Construction-management students in program classroom at Stevens Institute of Technology, New Jersey"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(25%) contrast(1.08)' }}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-[58%] lg:pr-8 xl:pr-12">

          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-datum/20 text-datum-light px-3 py-1 mb-10 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            Cross-Cutting Employer Connector
          </motion.span>

          <motion.h1
            id="pipeline-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-10"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            The employer side of the architecture.
          </motion.h1>

          <motion.div
            className="flex flex-wrap items-center gap-x-0 gap-y-3"
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.38, ease: EASE }}>
            {(['Not a fifth program', 'No program color', 'Runs across all four'] as const).map((item, i) => (
              <span
                key={item}
                className="text-[13px] text-white/60 tracking-[-0.01em]"
                style={{ fontFamily: 'var(--font-body)' }}>
                {item}
                {i < 2 && <span className="mx-4 text-white/15" aria-hidden="true">·</span>}
              </span>
            ))}
          </motion.div>
          </div>

        </div>
      </section>

      {/* ── What it is ── bg-snow, asymmetric */}
      <section className="bg-snow py-16 lg:py-24" aria-labelledby="pipeline-about-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Left: framing */}
            <div className="mb-12 lg:mb-0">
              <motion.h2
                id="pipeline-about-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-8 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                It is what turns a curriculum into <span className="text-datum">a pathway.</span>
              </motion.h2>

              <motion.p
                className="text-[15px] text-anthracite/78 leading-[1.72] mb-6 max-w-[58ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
                Talent Pipeline is the employer side of the architecture. It carries no program color
                because it is not a fifth program: it is the connective tissue that runs across Explore,
                Pathway, Launch, and Rebuild.
              </motion.p>

              <motion.p
                className="text-[15px] text-anthracite/78 leading-[1.72] mb-10 max-w-[58ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, delay: 0.14, ease: EASE }}>
                Employers do three things here that no curriculum can do for itself: they tell us whether
                what we teach matches the work, they review the capstones learners build, and they commit
                to interviewing qualified completers.
              </motion.p>

              <motion.p
                className="text-[1.25rem] lg:text-[1.5rem] italic text-anthracite leading-[1.45] border-t border-sediment/30 pt-8 max-w-[46ch]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, delay: 0.2, ease: SPRING }}>
                Aedifica does not start a workforce cohort until an employer has committed to interview its
                completers. That commitment is the difference between a class and a pathway.
              </motion.p>
            </div>

            {/* Right: honest status */}
            <motion.div
              className="bg-bone px-8 py-9 lg:px-10 lg:py-11 lg:mt-4"
              initial={reduce ? undefined : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.6, delay: 0.12, ease: EASE }}>
              <div className="flex items-center gap-3 mb-6">
                <span className="flex-shrink-0 w-[9px] h-[9px] rotate-45 bg-sediment" aria-hidden="true" />
                <p
                  className="text-[10.5px] uppercase tracking-[0.2em] text-anthracite/80 select-none leading-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Status, published honestly
                </p>
              </div>
              <p
                className="text-[1.375rem] lg:text-[1.625rem] italic text-anthracite leading-[1.15] mb-5"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                In development.
              </p>
              <p
                className="text-[14px] text-anthracite/80 leading-[1.72] mb-5"
                style={{ fontFamily: 'var(--font-body)' }}>
                Talent Pipeline membership, candidate referral, and placement services launch after the
                first Aedifica workforce cohort delivers and publishes its outcomes.
              </p>
              <p
                className="text-[14px] text-anthracite/80 leading-[1.72]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Employers can join the advisory work now. The placement service is not yet live and is not
                being sold as though it were.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Six functions ── bg-bone */}
      <section className="bg-bone py-14 lg:py-20" aria-labelledby="pipeline-functions-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="pipeline-functions-h2"
            className="text-[1.875rem] lg:text-[2.625rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic mb-12 lg:mb-14 max-w-[30ch]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 22 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
            Six functions, carried by employers.
          </motion.h2>

          {/* 2-col divided grid — the numbering is his; these are typed functions, in order */}
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-sediment/30">
            {FUNCTIONS.map(({ num, title, body }, i) => (
              <motion.div
                key={num}
                className={[
                  'py-8 lg:py-9 border-b border-sediment/30',
                  i % 2 === 0 ? 'lg:pr-12 xl:pr-16 lg:border-r lg:border-sediment/30' : 'lg:pl-12 xl:pl-16',
                ].join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: (i % 2) * 0.07, ease: EASE }}>
                <div className="flex items-baseline gap-4 mb-3.5">
                  <span
                    className="text-[12px] tracking-[0.08em] text-datum tabular-nums select-none"
                    style={{ fontFamily: 'var(--font-body)' }}
                    aria-hidden="true">
                    {num}
                  </span>
                  <h3
                    className="text-[1.375rem] lg:text-[1.5rem] italic text-anthracite leading-[1.15] tracking-[-0.018em]"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {title}
                  </h3>
                </div>
                <p
                  className="text-[13.5px] text-anthracite/80 leading-[1.7] max-w-[52ch]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {body}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── The connector loop ── bg-anthracite */}
      <section className="bg-anthracite py-14 lg:py-20" aria-labelledby="pipeline-loop-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.25fr] lg:gap-16 xl:gap-24 lg:items-start">

            <div className="mb-12 lg:mb-0 lg:sticky lg:top-28">
              <motion.h2
                id="pipeline-loop-h2"
                className="text-[1.875rem] lg:text-[2.5rem] leading-[1.12] tracking-[-0.025em] text-white italic mb-6 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 22 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
                How employer input travels through the architecture.
              </motion.h2>
              <motion.p
                className="text-[14px] text-white/75 leading-[1.72] max-w-[46ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
                Read the loop as a cycle, not a funnel. Nothing in this diagram promises a job. It promises
                that the curriculum answers to the work, and that the work answers back.
              </motion.p>
            </div>

            {/* Vertical loop: line + diamond nodes, same vocabulary as HeroPathway.
                The line draws downward as the section enters view. */}
            <div className="relative pl-8 lg:pl-10">
              <motion.span
                className="absolute left-[5px] lg:left-[7px] top-2 bottom-2 w-px bg-white/15"
                style={{ originY: 0 }}
                initial={reduce ? undefined : { scaleY: 0 }}
                whileInView={reduce ? undefined : { scaleY: 1 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 1.1, delay: 0.1, ease: EASE }}
                aria-hidden="true"
              />
              {LOOP.map(({ actor, line }, i) => (
                <motion.div
                  key={actor}
                  className={`relative ${i < LOOP.length - 1 ? 'pb-9 lg:pb-10' : ''}`}
                  initial={reduce ? undefined : { opacity: 0, x: 14 }}
                  whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.5, delay: i * 0.09, ease: EASE }}>
                  <span
                    className="absolute -left-8 lg:-left-10 top-[7px] w-[11px] h-[11px] rotate-45 bg-datum-light"
                    style={{ boxShadow: '0 0 0 5px var(--color-anthracite)' }}
                    aria-hidden="true"
                  />
                  <p
                    className="text-[1.375rem] lg:text-[1.625rem] italic text-white leading-[1.1] mb-1.5"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {actor}
                  </p>
                  <p
                    className="text-[13.5px] text-white/70 leading-[1.6]"
                    style={{ fontFamily: 'var(--font-body)' }}>
                    {line}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── What it is not ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="pipeline-not-h2">
        <div className="max-w-[52rem] mx-auto px-6">
          <motion.h2
            id="pipeline-not-h2"
            className="text-[1.625rem] lg:text-[2rem] leading-[1.15] tracking-[-0.022em] text-anthracite italic mb-6"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
            What Talent Pipeline is not.
          </motion.h2>
          <motion.p
            className="text-[15px] text-anthracite/80 leading-[1.75] mb-5"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            It is not a staffing agency, not a placement guarantee, and not a fifth program with its own
            learners. Aedifica does not claim employment outcomes it has not measured, and it does not name
            employer partners before those partnerships are signed.
          </motion.p>
          <motion.p
            className="text-[13.5px] text-anthracite/75 leading-[1.7]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0 }}
            whileInView={reduce ? undefined : { opacity: 1 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.14, ease: EASE }}>
            Confirmed employer partners will be listed here once those partnerships are signed.
          </motion.p>
        </div>
      </section>

      {/* ── CTA ── bg-snow pb-0, contained datum block */}
      <section className="bg-snow pt-4 lg:pt-8 pb-0" aria-label="Start an employer partnership">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-datum px-10 pt-16 pb-12 lg:px-16 lg:pt-20 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-white italic mb-6"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              No cohort starts without you.
            </h2>

            <p
              className="text-[15px] text-white/90 leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Validate the curriculum against the work, scope and review the capstone, and commit to a
              defined interview opportunity for qualified completers.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/partner"
                className="inline-flex items-center justify-center bg-white text-datum text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-[transform,background-color] duration-150 hover:bg-white/92"
                style={{ fontFamily: 'var(--font-body)' }}>
                Start an employer partnership
              </Link>
              <Link href="/partner"
                className="inline-flex items-center justify-center border border-white/55 text-white text-[14px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-colors duration-150 hover:bg-white/10"
                style={{ fontFamily: 'var(--font-body)' }}>
                Request the employer brief
              </Link>
            </div>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
