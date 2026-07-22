'use client'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { UsersThree, GraduationCap, Buildings, Certificate, type Icon } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

type LaunchAudience = { type: string; desc: string; Icon: Icon }

const AUDIENCES: LaunchAudience[] = [
  { type: 'Community-based organizations', desc: 'Developing employment or pre-apprenticeship programming with limited internal capacity to navigate complex workforce funding structures.', Icon: UsersThree },
  { type: 'County colleges', desc: 'Connecting available funding to credentials, articulation agreements, and employment pathways for adult and non-traditional learners.', Icon: GraduationCap },
  { type: 'Districts and vocational institutions', desc: 'Pursuing career-connected learning resources, CTE expansion, and workforce-aligned program development.', Icon: Buildings },
  { type: 'Training providers', desc: 'Refining an apprenticeship or construction workforce proposal with competitive program architecture and measurable outcomes.', Icon: Certificate },
]

const GAIN_ITEMS = [
  { num: '01', name: 'A clear launch model and learner journey', body: 'A defined program model and a mapped learner journey: from recruitment and intake through completion, credential, and placement.' },
  { num: '02', name: 'A curriculum framework aligned to real roles', body: 'A curriculum framework mapped to actual construction-management roles and the credentials employers recognize and require.' },
  { num: '03', name: 'An employer advisory structure', body: 'A working employer advisory structure that keeps the program tied to hiring needs and builds the relationships that lead to placements.' },
  { num: '04', name: 'An implementation calendar and staffing plan', body: 'A realistic implementation calendar and staffing plan: who does what, when, and with what resources, from setup through first cohort.' },
  { num: '05', name: 'An evaluation and reporting framework', body: "An evaluation and reporting framework that defines outcomes up front and produces the data funders, boards, and agencies require." },
] as const

const PROCESS_STEPS = [
  { heading: 'Partner discovery workshop', body: 'A working session to surface your goals, constraints, assets, and the learners and employers you serve: the foundation for everything that follows.' },
  { heading: 'Labor-market and learner-need framing', body: 'A clear-eyed read of regional demand and learner need, framing the specific workforce gap the program will close.' },
  { heading: 'Curriculum map and credential alignment', body: 'A curriculum map aligned to construction-management roles and the industry-recognized credentials that make graduates employable.' },
  { heading: 'Employer advisory board setup', body: 'The structure and recruitment to stand up an employer advisory board that keeps the program accountable to real hiring needs.' },
  { heading: 'Grant narrative and budget support', body: 'Support on the grant narrative and budget: the funding strategy and documentation that make the program financially real.' },
  { heading: 'Pilot cohort launch plan', body: 'A concrete launch plan for the first cohort: timeline, staffing, recruitment, delivery, and the outcome measures you will report against.' },
] as const

const DELIVERABLES = [
  { num: '01', name: 'Opportunity and eligibility review', body: "Assessment of the most relevant funding vehicles for the organization's current program capacity, mission alignment, and geographic focus.", phase: 'Discovery' },
  { num: '02', name: 'Program architecture', body: 'Design of the program structure: delivery model, learning objectives, partner roles, and the measurable outcomes framework required for competitive proposals.', phase: 'Architecture' },
  { num: '03', name: 'Partner and evidence matrix', body: 'Documentation of the institutional partners, employer commitments, and evidence base required to make the program credible to reviewers.', phase: 'Architecture' },
  { num: '04', name: 'Narrative and proposal authoring', body: 'Development of the program narrative, participant-outcome projections, and a proposal document aligned to funder requirements and review criteria.', phase: 'Authoring' },
  { num: '05', name: 'Budget and measurement alignment', body: 'Budget construction, allowable cost review, and outcome metric calibration to ensure the request is fundable and the program is reportable.', phase: 'Authoring' },
  { num: '06', name: 'Submission readiness review', body: 'Final review of proposal completeness, required attachments, funder alignment, and submission logistics before the deadline.', phase: 'Submission' },
] as const

const DIFFERENTIATORS = [
  'Program structure designed before the proposal is written',
  'Partner and employer matrix built before the ask',
  'Outcomes framework calibrated to funder expectations from the start',
  'Budget and allowable cost review before submission',
] as const

export function LaunchEngagementModel() {
  const reduce = useReducedMotion()

  return (
    <>
      <section className="bg-snow py-12 lg:py-18" aria-labelledby="launch-serves-h2">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            id="launch-serves-h2"
            className="text-[2.25rem] lg:text-[4rem] xl:text-[5.25rem] leading-[1.04] tracking-[-0.03em] text-anthracite italic mb-14 lg:mb-20"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
            Built for institutions serious about funding programs the right way.
          </motion.h2>
          <div className="border-t border-sediment/25">
            {AUDIENCES.map(({ type, desc, Icon: IconComp }) => (
              <div key={type} className="grid grid-cols-1 lg:grid-cols-[0.4fr_1fr] lg:gap-16 xl:gap-24 border-b border-sediment/25 py-7 lg:py-8 lg:items-start">
                <div>
                  <IconComp size={20} weight="regular" className="text-anthracite/45 mb-2.5" aria-hidden={true} />
                  <h3 className="text-[1.125rem] lg:text-[1.375rem] xl:text-[1.875rem] text-anthracite italic leading-[1.2] tracking-[-0.02em] mb-2 lg:mb-0" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{type}</h3>
                </div>
                <p className="text-[14.5px] text-anthracite/75 leading-[1.7]" style={{ fontFamily: 'var(--font-body)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bone py-12 lg:py-18" aria-labelledby="gain-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.4fr_1fr] lg:gap-16 xl:gap-24 lg:items-start">
            <div className="lg:order-1 border-t border-sediment/20">
              {GAIN_ITEMS.map(({ num, name, body }) => (
                <div key={num} className="py-6 border-b border-sediment/20 grid grid-cols-[52px_1fr] gap-5 lg:gap-6">
                  <span className="text-[1.875rem] text-datum/35 italic leading-[1.1] mt-0.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }} aria-hidden="true">{num}</span>
                  <div>
                    <h3 className="text-[1rem] lg:text-[1.125rem] text-anthracite italic leading-[1.25] tracking-[-0.015em] mb-1.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{name}</h3>
                    <p className="text-[13.5px] text-anthracite/78 leading-[1.68]" style={{ fontFamily: 'var(--font-body)' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:order-2 mb-10 lg:mb-0 order-first">
              <h2 id="gain-h2" className="text-[2rem] lg:text-[2.75rem] xl:text-[3.5rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-8 [text-wrap:balance]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                Everything a program needs to launch well.
              </h2>
              <div className="hidden lg:block overflow-hidden min-h-[200px]" aria-hidden="true">
                <img src="/images/presentation-day.jpg" alt="Aedifica program planning session with institutional partners" className="w-full h-full object-cover" style={{ filter: 'grayscale(20%) contrast(1.05)' }} loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone py-12 lg:py-18" aria-labelledby="process-h2">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.5fr_1fr] lg:gap-16 xl:gap-24 lg:items-start">
            <div className="lg:order-2">
              <h2 id="process-h2" className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-anthracite italic mb-5 [text-wrap:balance]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                A structured path from intention to cohort.
              </h2>
              <p className="text-[14.5px] text-anthracite/78 leading-[1.7] mb-8" style={{ fontFamily: 'var(--font-body)' }}>
                Launch is a guided engagement. Aedifica leads partners through the work that turns a program idea into a funded, staffed, employer-backed pathway ready to enroll its first cohort.
              </p>
              <div className="hidden lg:block overflow-hidden min-h-[200px]" aria-hidden="true">
                <img src="/images/launch-workshop.jpg" alt="Aedifica collaborative workshop with program partners" className="w-full h-full object-cover" style={{ filter: 'grayscale(20%) contrast(1.05)' }} loading="lazy" />
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:order-1">
              {PROCESS_STEPS.map(({ heading, body }, i) => (
                <div key={heading} className="flex gap-4 py-5 border-b border-sediment/20 first:border-t first:border-sediment/20">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-anthracite/10 text-anthracite/80 flex items-center justify-center text-[11px] font-medium mt-0.5" style={{ fontFamily: 'var(--font-body)' }} aria-hidden="true">{i + 1}</span>
                  <div>
                    <h3 className="text-[1rem] lg:text-[1.0625rem] text-anthracite italic leading-[1.25] tracking-[-0.015em] mb-1.5" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{heading}</h3>
                    <p className="text-[13.5px] text-anthracite/78 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-anthracite py-14 lg:py-20 relative overflow-hidden" aria-labelledby="deliverables-h2">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-20 xl:gap-28 lg:items-start mb-14 lg:mb-16">
            <div>
              <p className="text-[10.5px] text-white/50 uppercase tracking-[0.22em] mb-6 select-none" style={{ fontFamily: 'var(--font-body)' }}>What Launch delivers</p>
              <h2 id="deliverables-h2" className="text-[2.25rem] lg:text-[3.25rem] xl:text-[4rem] leading-[1.07] tracking-[-0.03em] text-white italic" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                Six stages. One proposal-based engagement.
              </h2>
            </div>
            <p className="text-[15px] text-white/60 leading-[1.72] lg:pt-14 xl:pt-16" style={{ fontFamily: 'var(--font-body)' }}>
              Launch is scoped as a complete engagement, from identifying the right funding opportunity through final submission. Pricing is scoped by project complexity, grant requirements, cohort size, curriculum customization, and implementation support: a proposal-based model, with program-design work built in, not billed separately.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 border-t border-white/10">
            {DELIVERABLES.map(({ num, name, body, phase }) => (
              <div key={num} className="border-b border-white/10 py-6 lg:py-7 lg:odd:pr-12 xl:odd:pr-16 lg:even:pl-12 xl:even:pl-16 lg:even:border-l lg:even:border-white/10">
                <div className="flex items-baseline justify-between mb-3.5">
                  <span className="text-[1.875rem] lg:text-[2.25rem] text-white/22 italic leading-none" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }} aria-hidden="true">{num}</span>
                  <span className="text-[9.5px] text-white/50 uppercase tracking-[0.16em] bg-white/8 px-2.5 py-1 select-none" style={{ fontFamily: 'var(--font-body)' }}>{phase}</span>
                </div>
                <h3 className="text-[1.0625rem] lg:text-[1.1875rem] text-white italic leading-[1.2] tracking-[-0.02em] mb-2" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{name}</h3>
                <p className="text-[13.5px] text-white/60 leading-[1.68]" style={{ fontFamily: 'var(--font-body)' }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-snow py-12 lg:py-18" aria-label="What makes Launch different">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-[1.15fr_1fr] lg:gap-14 xl:gap-20 lg:items-start">
            <div>
              <div className="overflow-hidden mb-10 h-[220px] lg:h-[260px]">
                <img src="/images/stevens-students.jpg" alt="Program design students at Stevens Institute of Technology, New Jersey" className="w-full h-full object-cover" style={{ filter: 'grayscale(20%) contrast(1.05)' }} loading="lazy" />
              </div>
              <p className="text-[2rem] lg:text-[2.5rem] xl:text-[3rem] leading-[1.1] tracking-[-0.025em] text-anthracite italic" style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                A fundable proposal describes a program that can deliver. Launch designs the program first.
              </p>
            </div>
            <div className="lg:pt-6 mt-10 lg:mt-0">
              <p className="text-[15.5px] text-anthracite/75 leading-[1.72] mb-7" style={{ fontFamily: 'var(--font-body)' }}>
                Launch is an institutional pathway-design and implementation service, not a class learners enroll in directly. Aedifica works with partners to define the target learner, employer need, program model, curriculum map, budget, funding strategy, delivery plan, and outcome measures.
              </p>
              <p className="text-[15.5px] text-anthracite/75 leading-[1.72] mb-7" style={{ fontFamily: 'var(--font-body)' }}>
                Most grant-writing services produce proposals. Launch produces program architecture first: a defined delivery model, a realistic outcomes framework, and a partner matrix that funders and reviewers can evaluate on its own merits. Ideal Launch partners have a target audience, a delivery setting, and a willingness to coordinate across education, workforce, and employer stakeholders.
              </p>
              <p className="text-[15.5px] text-anthracite/75 leading-[1.72] mb-10" style={{ fontFamily: 'var(--font-body)' }}>
                When the narrative follows a credible architecture, the proposal is stronger. When the program is designed to be reportable, the funder's confidence is founded on something real.
              </p>
              <ul className="list-none space-y-3.5">
                {DIFFERENTIATORS.map(pt => (
                  <li key={pt} className="flex gap-3.5 items-start">
                    <span className="flex-shrink-0 w-[4px] h-[4px] bg-anthracite/30 mt-[8px]" aria-hidden="true" />
                    <span className="text-[14px] text-anthracite/75 leading-[1.65]" style={{ fontFamily: 'var(--font-body)' }}>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
