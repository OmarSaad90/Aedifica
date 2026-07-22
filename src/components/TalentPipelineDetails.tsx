'use client'
import { motion, useReducedMotion } from 'motion/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const FUNCTIONS = [
  { num: '01', title: 'Curriculum validation', body: "Named employer validators confirm that what a cohort is taught matches the work mid-market New Jersey general contractors are doing today. Curriculum that cannot survive a project executive's review does not enter a cohort." },
  { num: '02', title: 'Role definition', body: 'Employers define the roles a pathway targets: assistant project manager, project coordinator, field engineer assistant, safety or sustainability coordinator. Instruction aims at a real opening, not a job title we imagined.' },
  { num: '03', title: 'Capstone review', body: 'Practicing managers scope and review the capstone. Learners defend estimates, schedules, risk registers, and safety plans in front of the people who would sign off on them at work.' },
  { num: '04', title: 'Interview commitment', body: 'Participating employers commit to a defined interview opportunity for qualified completers. An interview is a commitment Aedifica will publish. A job offer is not, and is never promised.' },
  { num: '05', title: 'Role-model exposure', body: 'Guest engineers, judges, and reviewers appear in youth programs as well as adult cohorts. In Explore and Pathway this is career exposure, visible people in visible roles, not hiring.' },
  { num: '06', title: 'Outcome feedback', body: "What employers observe in interviews feeds back into the next cohort's curriculum. The loop closes, or the pathway is not working." },
] as const

const LOOP = [
  { actor: 'Employers say', line: 'This is the work, and these are the roles.' },
  { actor: 'Aedifica builds', line: 'Curriculum, capstone, and assessment against it.' },
  { actor: 'Learners produce', line: 'Artifacts a manager can actually evaluate.' },
  { actor: 'Employers interview', line: 'Qualified completers, by prior commitment.' },
  { actor: 'Outcomes return', line: 'Published, then folded into the next cohort.' },
] as const

export function TalentPipelineDetails() {
  const reduce = useReducedMotion()

  return (
    <>
      <section className="bg-snow py-16 lg:py-24" aria-labelledby="pipeline-about-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.1fr_1fr] lg:gap-16 xl:gap-24 lg:items-start">
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
              <p className="text-[15px] text-anthracite/78 leading-[1.72] mb-6 max-w-[58ch]" style={{ fontFamily: 'var(--font-body)' }}>
                Talent Pipeline is the employer side of the architecture. It carries no program color
                because it is not a fifth program: it is the connective tissue that runs across Explore,
                Pathway, Launch, and Rebuild.
              </p>
              <p className="text-[15px] text-anthracite/78 leading-[1.72] mb-10 max-w-[58ch]" style={{ fontFamily: 'var(--font-body)' }}>
                Employers do three things here that no curriculum can do for itself: they tell us whether
                what we teach matches the work, they review the capstones learners build, and they commit
                to interviewing qualified completers.
              </p>
              <p className="text-[1.25rem] lg:text-[1.5rem] italic text-anthracite leading-[1.45] border-t border-sediment/30 pt-8 max-w-[46ch]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                Aedifica does not start a workforce cohort until an employer has committed to interview its
                completers. That commitment is the difference between a class and a pathway.
              </p>
            </div>
            <div className="bg-bone px-8 py-9 lg:px-10 lg:py-11 lg:mt-4">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex-shrink-0 w-[9px] h-[9px] rotate-45 bg-sediment" aria-hidden="true" />
                <p className="text-[10.5px] uppercase tracking-[0.2em] text-anthracite/80 select-none leading-none" style={{ fontFamily: 'var(--font-body)' }}>Status, published honestly</p>
              </div>
              <p className="text-[1.375rem] lg:text-[1.625rem] italic text-anthracite leading-[1.15] mb-5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>In development.</p>
              <p className="text-[14px] text-anthracite/80 leading-[1.72] mb-5" style={{ fontFamily: 'var(--font-body)' }}>
                Talent Pipeline membership, candidate referral, and placement services launch after the
                first Aedifica workforce cohort delivers and publishes its outcomes.
              </p>
              <p className="text-[14px] text-anthracite/80 leading-[1.72]" style={{ fontFamily: 'var(--font-body)' }}>
                Employers can join the advisory work now. The placement service is not yet live and is not
                being sold as though it were.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone py-14 lg:py-20" aria-labelledby="pipeline-functions-h2">
        <div className="max-w-7xl mx-auto px-6">
          <h2 id="pipeline-functions-h2" className="text-[1.875rem] lg:text-[2.625rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic mb-12 lg:mb-14 max-w-[30ch]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
            Six functions, carried by employers.
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-sediment/30">
            {FUNCTIONS.map(({ num, title, body }, i) => (
              <div key={num} className={['py-8 lg:py-9 border-b border-sediment/30', i % 2 === 0 ? 'lg:pr-12 xl:pr-16 lg:border-r lg:border-sediment/30' : 'lg:pl-12 xl:pl-16'].join(' ')}>
                <div className="flex items-baseline gap-4 mb-3.5">
                  <span className="text-[12px] tracking-[0.08em] text-datum tabular-nums select-none" style={{ fontFamily: 'var(--font-body)' }} aria-hidden="true">{num}</span>
                  <h3 className="text-[1.375rem] lg:text-[1.5rem] italic text-anthracite leading-[1.15] tracking-[-0.018em]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{title}</h3>
                </div>
                <p className="text-[13.5px] text-anthracite/80 leading-[1.7] max-w-[52ch]" style={{ fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-14 lg:py-20" aria-labelledby="pipeline-loop-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.25fr] lg:gap-16 xl:gap-24 lg:items-start">
            <div className="mb-12 lg:mb-0 lg:sticky lg:top-28">
              <h2 id="pipeline-loop-h2" className="text-[1.875rem] lg:text-[2.5rem] leading-[1.12] tracking-[-0.025em] text-white italic mb-6 [text-wrap:balance]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                How employer input travels through the architecture.
              </h2>
              <p className="text-[14px] text-white/75 leading-[1.72] max-w-[46ch]" style={{ fontFamily: 'var(--font-body)' }}>
                Read the loop as a cycle, not a funnel. Nothing in this diagram promises a job. It promises
                that the curriculum answers to the work, and that the work answers back.
              </p>
            </div>
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
                  <span className="absolute -left-8 lg:-left-10 top-[7px] w-[11px] h-[11px] rotate-45 bg-datum-light" style={{ boxShadow: '0 0 0 5px var(--color-anthracite)' }} aria-hidden="true" />
                  <p className="text-[1.375rem] lg:text-[1.625rem] italic text-white leading-[1.1] mb-1.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{actor}</p>
                  <p className="text-[13.5px] text-white/70 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{line}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-snow py-14 lg:py-20" aria-labelledby="pipeline-not-h2">
        <div className="max-w-[52rem] mx-auto px-6">
          <h2 id="pipeline-not-h2" className="text-[1.625rem] lg:text-[2rem] leading-[1.15] tracking-[-0.022em] text-anthracite italic mb-6" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
            What Talent Pipeline is not.
          </h2>
          <p className="text-[15px] text-anthracite/80 leading-[1.75] mb-5" style={{ fontFamily: 'var(--font-body)' }}>
            It is not a staffing agency, not a placement guarantee, and not a fifth program with its own
            learners. Aedifica does not claim employment outcomes it has not measured, and it does not name
            employer partners before those partnerships are signed.
          </p>
          <p className="text-[13.5px] text-anthracite/75 leading-[1.7]" style={{ fontFamily: 'var(--font-body)' }}>
            Confirmed employer partners will be listed here once those partnerships are signed.
          </p>
        </div>
      </section>
    </>
  )
}
