'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '80px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const FAQS = [
  {
    category: 'General',
    items: [
      {
        q: 'Which program is right for me?',
        a: 'Choose Explore if your goal is early awareness for younger learners. Choose Pathway if your goal is school-based curriculum for secondary students. Choose Rebuild if your goal is adult learner advancement into construction-management-track roles. Choose Launch if your organization needs to design, fund, and implement a workforce pathway. Employers seeking talent connection should ask about Talent Pipeline. If you are not sure, contact Aedifica and we will help identify the right model.',
      },
      {
        q: 'What is Aedifica?',
        a: 'Aedifica is a New Jersey-based curriculum and program design organization that builds construction-management career pathways for students, adult learners, schools, and employers. Programs span youth exploration, school-based sequences, adult bridge cohorts, and employer talent pipelines. Aedifica works through institutional partners rather than directly as a standalone school or training center.',
      },
      {
        q: 'What does "construction-management workforce pathway" mean?',
        a: 'A structured sequence of learning, work readiness, and credential attainment that moves a person from limited or no experience toward roles in construction project management, scheduling, estimating, field coordination, BIM, or safety leadership. The pathway connects education to employer expectations and to clear career entry points, the piece most programs leave undefined.',
      },
      {
        q: 'Is Aedifica a school, a training provider, or a partner platform?',
        a: 'Aedifica designs and delivers programs through institutional partners: schools, community colleges, workforce systems, and employers provide the cohort, facility, and funding. Aedifica provides the curriculum, instruction design, employer advisory structure, and evaluation framework. The model is designed to scale through partners rather than requiring learners to come to a fixed location.',
      },
      {
        q: 'Where are programs offered?',
        a: 'Programs are currently offered in New Jersey through partner institutions. Sites vary by cohort and program type. Contact Aedifica to ask about opportunities in a specific district, county, or employer region.',
      },
      {
        q: 'Do programs focus on trades, management, or both?',
        a: 'Aedifica programs focus on construction management-track roles: scheduling, estimating, project coordination, BIM, safety leadership, and field management. Programs are not trade apprenticeships and do not replace them. The goal is to create a visible, structured path into the management side of the industry, the route most overlooked in traditional career education.',
      },
    ],
  },
  {
    category: 'Eligibility',
    items: [
      {
        q: 'Who can apply to Rebuild?',
        a: 'Rebuild is designed for adults motivated to enter or advance in the construction industry, including career changers, veterans, returning citizens, caregivers returning to work, and workers looking to move from field roles into management-track positions. Final eligibility is set by the funding partner or cohort sponsor and may vary by program run.',
      },
      {
        q: 'Can high school students participate?',
        a: 'Yes. Explore programs serve grades 6-12 through camps and workshops. Pathway programs are designed for high school students through school or district partnerships. Contact Aedifica or your school administrator to ask about availability in your area.',
      },
      {
        q: 'Can adults with no construction experience apply?',
        a: 'Yes. Rebuild is specifically designed for adults with no prior construction experience. No background in the field is required. Commitment to the cohort schedule and willingness to engage in hands-on, project-based work are the core expectations.',
      },
      {
        q: 'Can veterans, returning citizens, or caregivers apply?',
        a: 'Yes. These groups are among the participants Rebuild is built for. Individual cohorts may have additional criteria set by the funder or partner, but background category alone is not a barrier. Aedifica uses a pathway-first approach: if one program is not the right fit, the goal is to identify the next possible step.',
      },
      {
        q: 'Do I need to live in New Jersey?',
        a: 'Most programs are currently offered in New Jersey and prioritize New Jersey residents. Some cohorts have specific geographic or district requirements set by the funder or partner. Contact Aedifica to confirm eligibility for a specific cohort.',
      },
    ],
  },
  {
    category: 'Application',
    items: [
      {
        q: 'How do I apply?',
        a: 'Start by identifying the program that fits your situation. Submit a brief statement of interest through the Apply page or contact a partner organization that referred you. Aedifica will follow up with next steps, which vary by cohort and program type.',
      },
      {
        q: 'When is the deadline?',
        a: 'Deadlines vary by cohort. When a specific cohort is announced, its application timeline is shared on this site and through partner channels. Contact Aedifica to be notified when the next cohort for a program of interest opens.',
      },
      {
        q: 'What documents are required?',
        a: 'Most applications ask for basic contact information, a short statement of interest, and a brief description of your education or work background. Some cohorts require additional materials or a brief readiness conversation. Specific requirements are communicated when a cohort is announced.',
      },
      {
        q: 'Will there be an interview?',
        a: 'Some cohorts include a brief interview or information session as part of the intake process. This is a conversation designed to confirm fit and readiness, not a test of prior knowledge. Requirements vary by program and funding source.',
      },
      {
        q: 'Can a school or organization refer learners?',
        a: 'Yes. Schools, workforce organizations, community-based organizations, and employers can refer candidates or submit learner groups. Use the partner inquiry page to begin that conversation.',
      },
    ],
  },
  {
    category: 'Cost',
    items: [
      {
        q: 'Is there a cost to participate?',
        a: 'Aedifica does not charge participants directly. Programs are funded through institutional partners who secure support through WIOA, workforce grants, employer contributions, philanthropic funding, or school and district budgets. Whether any cost is passed to a participant depends on the cohort\'s specific funding arrangement.',
      },
      {
        q: 'Are scholarships, stipends, or grants available?',
        a: 'Availability varies by cohort. Some programs include stipends for participants. Others are fully subsidized. Contact Aedifica to ask what is available for a specific program or your situation.',
      },
      {
        q: 'Who pays when a school or workforce partner hosts a program?',
        a: 'The institutional partner secures funding, which may come from federal or state workforce grants, employer contributions, philanthropy, or district budgets. Aedifica works with partners during the design phase to identify and frame funding sources before a cohort launches.',
      },
      {
        q: 'Are materials, credentials, transportation, or childcare included?',
        a: 'This depends on the cohort\'s funding and partner agreement. Some programs include materials and credential exam fees. Supports such as transportation assistance or childcare are available in select cohorts. Ask what is included when you inquire about a specific program.',
      },
    ],
  },
  {
    category: 'Participation',
    items: [
      {
        q: 'How long is the program?',
        a: 'It varies by offering. Explore workshops run from single sessions to multi-week series, with a featured 12-week Bridging Brilliance curriculum and 1-2-week summer camps. Pathway modules run by semester or year, with 12-week and multi-unit studio formats. Rebuild cohorts run 12 or 24 weeks. The featured BUILD NJ GREEN pathway design under Launch runs 16 weeks and 240 hours. Final calendars are set per cohort.',
      },
      {
        q: 'Is attendance required?',
        a: 'Yes. All Aedifica programs require consistent attendance. Cohort-based learning depends on team collaboration, and absences affect both individual progress and group work. Specific attendance expectations are shared at enrollment.',
      },
      {
        q: 'Are sessions in person, online, or hybrid?',
        a: 'It varies by program. Rebuild uses a hybrid format with in-person and online components. Explore camps are in-person. Pathway programs follow the schedule and format of the partner school. Specific session details are included in each cohort announcement.',
      },
      {
        q: 'What will I build or complete?',
        a: 'Depending on the program: Explore participants complete engineering design challenges. Pathway students complete a semester-long capstone. Rebuild participants build a portfolio of construction-management work products and prepare for professional credential exams. All programs are project-based and include applied work.',
      },
      {
        q: 'Will I receive a credential or certificate?',
        a: 'It depends on the program design. Youth programs (Explore, Pathway) are enrichment and pathway programs, not credentialing programs; participants receive completion certificates. Some adult and institutional pathway designs include credential preparation: the featured BUILD NJ GREEN design, for example, prepares participants for OSHA 30, LEED Green Associate, and PMI-CAPM. Credentials are never guaranteed; exam attempts and targets are published per program, and each cohort confirms its own credential coverage before enrollment.',
      },
    ],
  },
  {
    category: 'Partners & Outcomes',
    items: [
      {
        q: 'How can a school host a program?',
        a: 'Schools and districts can host Explore workshops and camps or implement the Pathway curriculum through licensing, contracts, district partnerships, grants, teacher professional development, or Aedifica-led instruction. Start with a school planning call through the partner inquiry page.',
      },
      {
        q: 'How can an employer participate?',
        a: 'Employers participate through the Talent Pipeline: validating curriculum relevance, informing capstone expectations, serving as reviewers and guest speakers, and committing to defined interview opportunities for qualified completers. Aedifica does not start a workforce cohort until an employer has committed to interview its completers.',
      },
      {
        q: 'How does Launch work?',
        a: 'Launch is a proposal-based institutional service. It moves through partner discovery, learner and labor-market need definition, program architecture, curriculum mapping, credential alignment, budget and funding strategy, employer advisory setup, an implementation calendar and staffing plan, an evaluation framework, outcome reporting design, and pilot-cohort planning. The deliverable is a fundable, outcomes-ready pathway your organization can run.',
      },
      {
        q: 'How are outcomes measured?',
        a: 'Aedifica tracks participation, completion, skill growth, portfolio development, partner engagement, and post-program next steps, and, for workforce cohorts, placement rate, credential attainment, wage at placement, and apprenticeship articulation. Every program publishes outcome data using the same definitions every cohort; only verified numbers are published.',
      },
      {
        q: 'How is student privacy protected?',
        a: 'Student names are withheld on this site and quotes are anonymized by cohort year. Photos, named students, and video are published only with written permission, and parent or guardian consent for minors. Program data is reported at the cohort level, and outcome claims are limited to what source reports verify.',
      },
    ],
  },
  {
    category: 'Technical Support',
    items: [
      {
        q: 'What technology do I need?',
        a: 'A laptop or tablet with a browser and stable internet connection covers most online or hybrid session requirements. Specific software needs are shared at enrollment. Aedifica partners work to ensure technology access is not a barrier to participation.',
      },
      {
        q: 'How do I access the application?',
        a: 'Applications are submitted through the Apply page on this site or through a partner referral link. If you were referred by a school, organization, or employer, they may provide a direct intake form. Contact Aedifica if you have difficulty accessing the application.',
      },
      {
        q: 'Who do I contact if a form does not work?',
        a: 'Use the contact page or partner inquiry form to report a technical issue. Include a brief description of what you were trying to do and what error or problem appeared.',
      },
      {
        q: 'How do partner organizations submit learner lists or referrals?',
        a: 'Use the partnership inquiry page to begin the conversation. Organizations with an existing partnership agreement have a direct intake process. New partners should reach out through the inquiry form to get set up.',
      },
    ],
  },
] as const

export function FAQ() {
  const reduce = useReducedMotion()
  const [open, setOpen] = useState<string | null>(null)

  const toggle = (key: string) => setOpen(prev => (prev === key ? null : key))

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-anthracite min-h-[44vh] flex flex-col justify-end pb-14 lg:pb-20 relative overflow-hidden"
        aria-labelledby="faq-h1">

        <div className="max-w-7xl mx-auto px-6 w-full">
          <motion.span
            className="inline-block text-[11px] uppercase tracking-[0.18em] bg-white/10 text-white/70 px-3 py-1 mb-6 select-none"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
            FAQ &amp; Eligibility
          </motion.span>

          <motion.h1
            id="faq-h1"
            className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-white italic mb-8 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 40 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
            Frequently asked questions.
          </motion.h1>

          <motion.p
            className="text-[14.5px] text-white/60 leading-[1.65] max-w-[56ch]"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.36, ease: EASE }}>
            Answers about Aedifica programs, eligibility, applications, cost, and participation. If your question is not here, contact us directly.
          </motion.p>
        </div>
      </section>

      {/* ── FAQ accordion ── paired grid: each row's two categories start level
          (General|Cost, Eligibility|Participation, Application|Partners & Outcomes),
          with Technical Support centered below. */}
      <section className="bg-snow py-14 lg:py-20" aria-label="Frequently asked questions">
        <div className="max-w-7xl mx-auto px-6">

          {(() => {
            // Explicit grid placement keeps the logical reading order in the DOM
            // (mobile + screen readers) while pairing rows visually at lg.
            const GRID_POS: Record<string, string> = {
              'General':             'lg:col-start-1 lg:row-start-1',
              'Eligibility':         'lg:col-start-1 lg:row-start-2',
              'Application':         'lg:col-start-1 lg:row-start-3',
              'Cost':                'lg:col-start-2 lg:row-start-1',
              'Participation':       'lg:col-start-2 lg:row-start-2',
              'Partners & Outcomes': 'lg:col-start-2 lg:row-start-3',
            }

            const renderCategory = (category: string, items: readonly { q: string; a: string }[], extraClass: string, centered: boolean) => {
              const ci = FAQS.findIndex(g => g.category === category)
              return (
                <motion.div
                  key={category}
                  className={extraClass}
                  initial={reduce ? undefined : { opacity: 0, y: 20 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={reduce ? undefined : VIEWPORT}
                  transition={reduce ? undefined : { duration: 0.5, delay: 0.05, ease: EASE }}>

                  <h2
                    className={`text-[1.625rem] lg:text-[1.875rem] italic text-anthracite leading-[1.1] tracking-[-0.022em] mb-5 pb-4 border-b border-sediment/25 ${centered ? 'text-center' : ''}`}
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                    {category}
                  </h2>

                  <div className="divide-y divide-sediment/18">
                    {items.map((item, qi) => {
                      const key = `${ci}-${qi}`
                      const isOpen = open === key
                      return (
                        <div key={qi}>
                          <button
                            onClick={() => toggle(key)}
                            aria-expanded={isOpen}
                            aria-controls={`faq-panel-${key}`}
                            className="w-full flex items-start justify-between gap-6 py-5 text-left group">
                            <span
                              className="text-[15px] lg:text-[15.5px] text-anthracite leading-[1.45] tracking-[-0.01em]"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              {item.q}
                            </span>
                            <motion.span
                              animate={reduce ? undefined : { rotate: isOpen ? 180 : 0 }}
                              transition={reduce ? undefined : { duration: 0.25, ease: EASE }}
                              className="flex-shrink-0 mt-0.5 text-anthracite/40 transition-colors duration-150 group-hover:text-datum"
                              aria-hidden="true">
                              <CaretDown size={16} weight="bold" />
                            </motion.span>
                          </button>

                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                id={`faq-panel-${key}`}
                                key="panel"
                                initial={reduce ? undefined : { height: 0, opacity: 0 }}
                                animate={reduce ? undefined : { height: 'auto', opacity: 1 }}
                                exit={reduce ? undefined : { height: 0, opacity: 0 }}
                                transition={reduce ? undefined : { duration: 0.3, ease: EASE }}
                                style={{ overflow: 'hidden' }}>
                                <p
                                  className="text-[14px] text-anthracite/80 leading-[1.75] pb-6 max-w-[70ch]"
                                  style={{ fontFamily: 'var(--font-body)' }}>
                                  {item.a}
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      )
                    })}
                  </div>

                </motion.div>
              )
            }

            const paired = FAQS.filter(g => g.category !== 'Technical Support')
            const tech = FAQS.find(g => g.category === 'Technical Support')

            return (
              <>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-12 lg:gap-y-16 lg:gap-x-14 xl:gap-x-20 items-start">
                  {paired.map(({ category, items }) =>
                    renderCategory(category, items, GRID_POS[category] ?? '', false)
                  )}
                </div>
                {tech && (
                  <div className="mt-12 lg:mt-16 lg:max-w-3xl lg:mx-auto">
                    {renderCategory(tech.category, tech.items, '', true)}
                  </div>
                )}
              </>
            )
          })()}

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-bone py-12 lg:py-16" aria-label="Contact Aedifica">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] lg:items-center gap-8">
            <div>
              <motion.h2
                className="text-[1.75rem] lg:text-[2.25rem] italic text-anthracite leading-[1.1] tracking-[-0.025em] mb-3 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 20 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.55, ease: SPRING }}>
                Still have a question?
              </motion.h2>
              <motion.p
                className="text-[14px] text-anthracite/80 leading-[1.65] max-w-[54ch]"
                style={{ fontFamily: 'var(--font-body)' }}
                initial={reduce ? undefined : { opacity: 0, y: 14 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
                Contact Aedifica directly. We respond to questions from learners, families, schools, and partner organizations.
              </motion.p>
            </div>
            <motion.div
              className="flex flex-wrap gap-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>
              <Link href="/partner"
                className="inline-flex items-center gap-2 bg-anthracite text-white text-[13.5px] tracking-[-0.01em] px-7 py-3 hover:bg-anthracite/88 active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: 'var(--font-body)' }}>
                Contact Aedifica
              </Link>
              <Link href="/apply"
                className="inline-flex items-center gap-2 border border-anthracite/25 text-anthracite text-[13.5px] tracking-[-0.01em] px-7 py-3 hover:border-anthracite/50 active:scale-[0.98] transition-all duration-150"
                style={{ fontFamily: 'var(--font-body)' }}>
                View Apply page
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  )
}
