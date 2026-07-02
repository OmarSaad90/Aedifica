'use client'
import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'

const VIEWPORT = { once: true, margin: '100px 0px' } as const
const EASE = [0.25, 0.1, 0.25, 1] as const
const SPRING = [0.32, 0.72, 0, 1] as const

const LESSONS = [
  {
    number: 'Lesson 1',
    title: 'Introduction',
    subtitle: 'Engineering, Infrastructure, Society',
    topics: [
      'Engineering and planning professions and their roles',
      'Infrastructure and its relationship to society',
      'Course overview and project requirements',
      'Expectations and program structure',
    ],
  },
  {
    number: 'Lesson 2',
    title: 'Sustainable Development',
    subtitle: 'Global Challenges, SDGs, Climate Change',
    topics: [
      'Global challenges and the Sustainable Development Goals',
      'Population growth and resource management',
      'Climate change: causes, impacts, and responses',
      'The engineer\'s role in a resource-constrained world',
    ],
  },
  {
    number: 'Lesson 3',
    title: 'Engineering Design Process',
    subtitle: 'Problem Solving, Design Cycle, Prototyping',
    topics: [
      'Problem identification and research',
      'Concept generation and analysis',
      'Prototyping and physical testing',
      'Iterative design and evaluation cycles',
    ],
  },
  {
    number: 'Lesson 4',
    title: 'Design Form vs. Function',
    subtitle: 'Constraints, Optimization, Trade-offs',
    topics: [
      'The relationship between aesthetics and performance',
      'Functional requirements and design constraints',
      'Trade-off analysis in engineering decisions',
      'Optimization within real-world limits',
    ],
  },
  {
    number: 'Lesson 5',
    title: 'Engineering Design and Architecture',
    subtitle: 'Structural Design, Built Environment',
    topics: [
      'Engineering and architectural collaboration',
      'Structural systems and how buildings stand',
      'Innovative design solutions and landmark projects',
      'The built environment as a product of decisions',
    ],
  },
  {
    number: 'Lesson 6',
    title: 'Bridge Design',
    subtitle: 'Structures, Loads, Materials',
    topics: [
      'Types of bridges and their structural behavior',
      'Load paths: how force travels through a structure',
      'Materials selection and structural trade-offs',
      'Bridge design considerations and constraints',
    ],
  },
  {
    number: 'Lesson 7',
    title: 'Financial Evaluation',
    subtitle: 'Cost Analysis, ROI, Life-Cycle Costing',
    topics: [
      'Project economics and cost-benefit analysis',
      'Life-cycle costing and return on investment',
      'Sustainable financial decision-making',
      'How engineers communicate value to clients',
    ],
  },
  {
    number: 'Lesson 8',
    title: 'Environmental and Social Sustainability',
    subtitle: 'Environmental Impact, Stakeholders, Equity',
    topics: [
      'Environmental impacts of infrastructure projects',
      'Social equity and community stakeholder engagement',
      'Sustainable infrastructure approaches',
      'How engineers balance competing community interests',
    ],
  },
  {
    number: 'Lesson 9',
    title: 'Traps in Decision Making',
    subtitle: 'Biases, Risk, Decision Analysis',
    topics: [
      'Cognitive biases engineers face: anchoring, groupthink, confirmation bias',
      'Risk perception and decision frameworks',
      'How to evaluate options under uncertainty',
      'Applying structured reasoning to real engineering choices',
    ],
  },
  {
    number: 'Final Project',
    title: 'Engineering Solution Development',
    subtitle: 'Full Design Cycle, Presentation',
    topics: [
      'Identify a real-world engineering or infrastructure challenge',
      'Apply the engineering design process end to end',
      'Evaluate sustainability impacts and conduct a financial assessment',
      'Develop a proposed solution and deliver a professional presentation',
    ],
  },
] as const

const CAMPS = [
  {
    name: 'High School Infrastructure and Civil Engineering Camp',
    grade: 'Grades 9–12',
    duration: '2 weeks',
    objectives: 'Infrastructure systems, resilience, structural behavior, water, transportation, and project delivery.',
    activities: [
      'Bridge testing and structural load analysis',
      'Stormwater management model design and analysis',
      'Traffic count and transportation data exercise',
      'Cost and schedule simulation for a construction project',
      'Local NJ site analysis and infrastructure planning',
    ],
    project: 'Resilient infrastructure proposal for a local New Jersey site.',
  },
  {
    name: 'Climate, Sustainability and Resilient Cities Camp',
    grade: 'Grades 7–12',
    duration: '2 weeks',
    objectives: 'Climate data, adaptation and mitigation strategies, green infrastructure, and environmental justice.',
    activities: [
      'Heat island mapping and urban temperature analysis',
      'Water quality testing and watershed analysis',
      'Solar audit and renewable energy modeling',
      'Flood mitigation model design and testing',
    ],
    project: 'Resilient school or neighborhood redesign proposal.',
  },
  {
    name: 'Smart Cities and Transportation Camp',
    grade: 'Grades 8–12',
    duration: '2 weeks',
    objectives: 'Mobility systems, sensors, data science, GIS, optimization, and public transportation planning.',
    activities: [
      'Traffic counts and congestion pattern analysis',
      'Bus route and transit network efficiency review',
      'Pedestrian safety audit with field data collection',
      'Sensor prototype and smart infrastructure design challenge',
    ],
    project: 'Smart mobility proposal with a data dashboard and policy memo.',
  },
  {
    name: 'Research Methods and Innovation Bootcamp',
    grade: 'Grades 10–12',
    duration: '3 weeks + optional fall mentorship',
    objectives: 'Research questions, literature review, methods, data collection, ethics, scientific writing, and presentation.',
    activities: [
      'Research proposal development and peer critique',
      'Primary and secondary data collection and analysis',
      'Research poster design and layout',
      'Mentor feedback sessions throughout the three weeks',
    ],
    project: 'Research poster, abstract, and short oral defense.',
  },
] as const

const QUOTES = [
  {
    text: 'I was initially apprehensive about attending this class because of the knowledge it would require. However, it proved to be an amazing experience. By the end, the projects and lessons left me with much more knowledge about engineering and enlightened me on the fun of college life.',
    year: '2023',
    featured: true,
  },
  {
    text: 'I really enjoyed my teacher; he really opened up my mind and made me more confident in myself.',
    year: '2022',
    featured: false,
  },
  {
    text: 'I learned how to think and design like an engineer, and to be aware of how I\'m impacting the environment around me.',
    year: '2024',
    featured: false,
  },
  {
    text: 'I really enjoyed presenting our final project because everyone was able to ask questions and give constructive feedback.',
    year: '2023',
    featured: false,
  },
  {
    text: 'I learned a lot of new vocabulary that my friends and I started using casually; we now look at the buildings and structures around us in a new light, as form or function.',
    year: '2024',
    featured: false,
  },
  {
    text: 'I became more interested in civil engineering and now have future support as I prepare for college.',
    year: '2024',
    featured: false,
  },
] as const

export function Pathway() {
  const reduce = useReducedMotion()
  const [openCamp, setOpenCamp] = useState<number | null>(null)

  return (
    <main>

      {/* ── Hero ── */}
      <section
        className="bg-quarry min-h-[65vh] relative overflow-hidden flex flex-col justify-end pt-24 lg:pt-28 pb-16 lg:pb-24"
        aria-labelledby="pathway-h1">

        <motion.div
          className="hidden lg:block absolute inset-y-0 right-0 w-[40%]"
          style={{ willChange: 'opacity, transform' }}
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={reduce ? undefined : { duration: 0.9, delay: 0.25, ease: EASE }}>
          <img
            src="/images/stevens-students.jpg"
            alt="Construction-management pathway students at Stevens Institute of Technology, New Jersey"
            className="w-full h-full object-cover"
            style={{ filter: 'grayscale(25%) contrast(1.08)' }}
            loading="eager"
            fetchPriority="high"
          />
        </motion.div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="lg:max-w-[58%] lg:pr-8 xl:pr-12">

            <motion.span
              className="inline-block text-[11px] uppercase tracking-[0.18em] bg-anthracite/10 text-anthracite px-3 py-1 mb-10 select-none"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.45, delay: 0.1, ease: EASE }}>
              School Curriculum
            </motion.span>

            <motion.h1
              id="pathway-h1"
              className="text-[2.75rem] lg:text-[4.5rem] xl:text-[5.5rem] leading-[0.97] tracking-[-0.035em] text-anthracite italic mb-10 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
              initial={reduce ? undefined : { opacity: 0, y: 40 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.8, delay: 0.18, ease: SPRING }}>
              Built for the high-school classroom and the career beyond it.
            </motion.h1>

            <motion.div
              className="flex flex-wrap items-center gap-x-0 gap-y-3"
              initial={reduce ? undefined : { opacity: 0, y: 14 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.38, ease: EASE }}>
              {(['High school', 'New Jersey', 'Civil engineering'] as const).map((item, i) => (
                <span
                  key={item}
                  className="text-[13px] text-anthracite tracking-[-0.01em]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {item}
                  {i < 2 && <span className="mx-4 text-anthracite/20" aria-hidden="true">·</span>}
                </span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── The Curriculum ── bg-snow */}
      <section className="bg-snow py-14 lg:py-22 overflow-hidden" aria-labelledby="curriculum-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="curriculum-h2"
            className="text-[2.5rem] lg:text-[4rem] xl:text-[5rem] leading-[1.04] tracking-[-0.035em] text-anthracite italic mb-10 lg:mb-14 max-w-[24ch] [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 32 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.7, ease: SPRING }}>
            Nine lessons. One design cycle. A course built around real engineering decisions.
          </motion.h2>

          <motion.p
            className="text-[15.5px] text-anthracite/72 leading-[1.72] max-w-[68ch] mb-14 lg:mb-18"
            style={{ fontFamily: 'var(--font-body)' }}
            initial={reduce ? undefined : { opacity: 0, y: 18 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.55, delay: 0.08, ease: EASE }}>
            Principles of Civil Engineering is the Pathway core course: a full semester introducing students to sustainable development, infrastructure planning, structural design, financial evaluation, and the decision-making processes that connect them. Students work through case studies, project challenges, and a defended capstone from the first week to the last.
          </motion.p>

          {/* Lessons grid — 9 lessons in 3-col, final project full-width below */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 lg:gap-x-12 border-t border-sediment/20"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.08, ease: EASE }}>
            {LESSONS.slice(0, 9).map(({ number, title, subtitle, topics }, i) => (
              <motion.div
                key={title}
                className="border-b border-sediment/15 py-6 lg:py-7"
                initial={reduce ? undefined : { opacity: 0, y: 12 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.38, delay: (i % 3) * 0.05, ease: EASE }}>
                <p
                  className="text-[10.5px] text-datum uppercase tracking-[0.1em] mb-2"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {number}
                </p>
                <p
                  className="text-[15px] text-anthracite italic leading-[1.25] tracking-[-0.015em] mb-1"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  {title}
                </p>
                <p
                  className="text-[12px] text-anthracite/75 leading-none mb-3.5"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  {subtitle}
                </p>
                <ul className="space-y-1.5">
                  {topics.map(topic => (
                    <li key={topic} className="flex gap-2 items-start">
                      <span className="w-[3px] h-[3px] bg-datum/40 rounded-full flex-shrink-0 mt-[6px]" aria-hidden="true" />
                      <span
                        className="text-[12.5px] text-anthracite/65 leading-[1.55]"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Project — full-width highlighted row */}
          <motion.div
            className="bg-bone/60 border-b border-sediment/15 py-7 lg:py-8"
            initial={reduce ? undefined : { opacity: 0, y: 10 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.4, delay: 0.12, ease: EASE }}>
            <div className="sm:grid sm:grid-cols-[140px_1fr] sm:gap-8 lg:gap-12 sm:items-start">
              <div className="mb-3 sm:mb-0">
                <p
                  className="text-[10.5px] text-datum uppercase tracking-[0.1em] mb-1"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Final Project
                </p>
                <p
                  className="text-[12px] text-anthracite/75 leading-none"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Full design cycle
                </p>
              </div>
              <div>
                <p
                  className="text-[15px] text-anthracite italic leading-[1.25] tracking-[-0.015em] mb-4"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                  Engineering Solution Development
                </p>
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-1.5">
                  {LESSONS[9].topics.map(topic => (
                    <div key={topic} className="flex gap-2 items-start">
                      <span className="w-[3px] h-[3px] bg-datum/40 rounded-full flex-shrink-0 mt-[6px]" aria-hidden="true" />
                      <span
                        className="text-[12.5px] text-anthracite/65 leading-[1.55]"
                        style={{ fontFamily: 'var(--font-body)' }}>
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* ── Sample Summer Programs ── bg-bone */}
      <section className="bg-bone py-12 lg:py-18" aria-labelledby="camps-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-16 xl:gap-24 lg:items-start mb-10 lg:mb-12">
            <div>
              <motion.h2
                id="camps-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-4 [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                Four summer program models for high-school learners.
              </motion.h2>
            </div>
            <motion.p
              className="text-[14.5px] text-anthracite/70 leading-[1.72] lg:pt-2"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.5, delay: 0.1, ease: EASE }}>
              Pathway summer programs extend the curriculum into immersive formats: infrastructure resilience, climate and sustainability, smart cities and transportation, and a three-week research bootcamp for upper-classmen. Each model targets a different depth of engagement, from two-week intensive experiences through independent research with mentor critique.
            </motion.p>
          </div>

          {/* Camp accordion */}
          <motion.div
            className="bg-snow"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.5, delay: 0.12, ease: EASE }}>

            {CAMPS.map(({ name, grade, duration, objectives, activities, project }, i) => (
              <div key={name} className="border-t border-sediment/15">
                <button
                  className="w-full text-left px-7 lg:px-10 py-5 flex items-start gap-5 hover:bg-bone/50 transition-colors duration-150"
                  onClick={() => setOpenCamp(openCamp === i ? null : i)}
                  aria-expanded={openCamp === i}
                  aria-controls={`camp-body-${i}`}>

                  <div className="flex-shrink-0 w-[104px] mt-0.5">
                    <span
                      className="text-[11px] font-medium text-datum block leading-none mb-1"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {grade}
                    </span>
                    <span
                      className="text-[11.5px] text-anthracite/75 uppercase tracking-[0.05em] block"
                      style={{ fontFamily: 'var(--font-body)' }}>
                      {duration}
                    </span>
                  </div>

                  <span
                    className="flex-1 text-[15px] lg:text-[1.0625rem] text-anthracite italic leading-[1.3] tracking-[-0.015em]"
                    style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                    {name}
                  </span>

                  <motion.span
                    className="flex-shrink-0 text-anthracite/35 mt-1"
                    animate={{ rotate: openCamp === i ? 180 : 0 }}
                    transition={{ duration: 0.2, ease: EASE }}>
                    <CaretDown size={13} aria-hidden="true" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openCamp === i && (
                    <motion.div
                      id={`camp-body-${i}`}
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22, ease: EASE }}
                      style={{ overflow: 'hidden' }}>
                      <div className="px-7 lg:px-10 pb-7 lg:pl-[calc(2.5rem+104px)]">
                        <p
                          className="text-[13.5px] text-anthracite/70 leading-[1.68] mb-5 italic"
                          style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>
                          {objectives}
                        </p>
                        <div className="lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-10">
                          <div>
                            <p
                              className="text-[11px] uppercase tracking-[0.12em] text-anthracite/75 mb-3"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              Major activities
                            </p>
                            <ul className="space-y-2">
                              {activities.map(act => (
                                <li key={act} className="flex gap-2.5 items-start">
                                  <span className="w-[4px] h-[4px] bg-datum/50 rounded-full flex-shrink-0 mt-[7px]" aria-hidden="true" />
                                  <span
                                    className="text-[13px] text-anthracite/70 leading-[1.6]"
                                    style={{ fontFamily: 'var(--font-body)' }}>
                                    {act}
                                  </span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-6 lg:mt-0">
                            <p
                              className="text-[11px] uppercase tracking-[0.12em] text-anthracite/75 mb-3"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              Final project
                            </p>
                            <p
                              className="text-[13.5px] text-anthracite/75 leading-[1.6]"
                              style={{ fontFamily: 'var(--font-body)' }}>
                              {project}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <div className="border-t border-sediment/15" />
          </motion.div>

        </div>
      </section>

      {/* ── What Students Say ── bg-anthracite */}
      <section className="bg-anthracite py-10 lg:py-16" aria-labelledby="pathway-quotes-h2">
        <div className="max-w-7xl mx-auto px-6">

          <div className="lg:grid lg:grid-cols-[1fr_1.8fr] lg:gap-20 xl:gap-28 lg:items-start mb-8 lg:mb-12">
            <div>
              <motion.h2
                id="pathway-quotes-h2"
                className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.07] tracking-[-0.03em] text-white italic [text-wrap:balance]"
                style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
                initial={reduce ? undefined : { opacity: 0, y: 24 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
                What students say.
              </motion.h2>
            </div>
            <motion.p
              className="text-[15px] text-white/60 leading-[1.72] lg:pt-14 xl:pt-16"
              style={{ fontFamily: 'var(--font-body)' }}
              initial={reduce ? undefined : { opacity: 0, y: 18 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              Three summers of the Civil Engineering and Design Pathway at Stevens Institute of Technology (2022, 2023, and 2024) produced consistent survey results: roughly three-quarters of students rated the program excellent, and near-zero rated it fair or poor. These are their words, anonymized by cohort year and reproduced from post-program surveys.
            </motion.p>
          </div>

          {/* Featured quote */}
          <motion.div
            className="border-t border-white/12 pt-7 lg:pt-9 pb-7 lg:pb-9 border-b border-white/12"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.6, ease: SPRING }}>
            <p
              className="text-[1.625rem] lg:text-[2.375rem] xl:text-[2.875rem] text-white italic leading-[1.12] tracking-[-0.03em] max-w-[30ch] [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              "{QUOTES[0].text}"
            </p>
            <p
              className="text-[12px] text-white/60 mt-5 uppercase tracking-[0.1em]"
              style={{ fontFamily: 'var(--font-body)' }}>
              Student reflection · {QUOTES[0].year} Civil Engineering and Design Pathway
            </p>
          </motion.div>

          {/* Remaining quotes */}
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 divide-white/10">
            {QUOTES.slice(1).map(({ text, year }, i) => (
              <motion.div
                key={text}
                className={[
                  'py-5 lg:py-7',
                  i % 2 === 0 ? 'lg:pr-14 xl:pr-20 lg:border-r lg:border-white/10' : 'lg:pl-14 xl:pl-20',
                ].join(' ')}
                initial={reduce ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                viewport={reduce ? undefined : VIEWPORT}
                transition={reduce ? undefined : { duration: 0.45, delay: (i % 2) * 0.07, ease: EASE }}>
                <p
                  className="text-[1.0625rem] lg:text-[1.25rem] xl:text-[1.4375rem] text-white/88 italic leading-[1.35] tracking-[-0.02em] mb-3 [text-wrap:balance]"
                  style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
                  "{text}"
                </p>
                <p
                  className="text-[11.5px] text-white/60 uppercase tracking-[0.1em]"
                  style={{ fontFamily: 'var(--font-body)' }}>
                  Student reflection · {year} Civil Engineering and Design Pathway
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Program Rationale ── bg-snow */}
      <section className="bg-snow py-14 lg:py-20" aria-labelledby="pathway-rationale-h2">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            id="pathway-rationale-h2"
            className="text-[1.75rem] lg:text-[2.25rem] xl:text-[2.75rem] leading-[1.1] tracking-[-0.028em] text-anthracite italic mb-8 lg:mb-10 [text-wrap:balance]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}
            initial={reduce ? undefined : { opacity: 0, y: 24 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>
            The curriculum foundation.
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 mb-4 lg:mb-6">
            <motion.div
              className="bg-bone px-7 py-8"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.1, ease: EASE }}>
              <p
                className="text-[10.5px] text-datum uppercase tracking-[0.18em] mb-4 select-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Curriculum design
              </p>
              <p
                className="text-[14.5px] text-anthracite/75 leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Pathway is a structured civil engineering and construction-management course built for secondary education. Each lesson advances through real engineering decisions: infrastructure planning, structural analysis, financial evaluation, and a final defended design project, building portfolio evidence that aligns with what engineering programs and employers evaluate.
              </p>
            </motion.div>

            <motion.div
              className="bg-bone px-7 py-8"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.15, ease: EASE }}>
              <p
                className="text-[10.5px] text-datum uppercase tracking-[0.18em] mb-4 select-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Delivery foundation
              </p>
              <p
                className="text-[14.5px] text-anthracite/75 leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Pathway design is informed by Dr. Karam's prior pre-college engineering workshop delivery through Stevens Institute of Technology: three summers of high-school student engagement in the Civil Engineering and Design Pathway, rated excellent by 73–80% of participants each year.
              </p>
              <p
                className="text-[12px] text-anthracite/78 leading-[1.6] mt-3"
                style={{ fontFamily: 'var(--font-body)' }}>
                Prior educational delivery experience, not Aedifica workforce outcomes.
              </p>
            </motion.div>
          </div>

          <div className="flex justify-center">
            <motion.div
              className="bg-bone px-7 py-8 w-full lg:max-w-[calc(50%-0.75rem)]"
              initial={reduce ? undefined : { opacity: 0, y: 20 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={reduce ? undefined : VIEWPORT}
              transition={reduce ? undefined : { duration: 0.55, delay: 0.2, ease: EASE }}>
              <p
                className="text-[10.5px] text-datum uppercase tracking-[0.18em] mb-4 select-none"
                style={{ fontFamily: 'var(--font-body)' }}>
                Who it fits
              </p>
              <p
                className="text-[14.5px] text-anthracite/75 leading-[1.7]"
                style={{ fontFamily: 'var(--font-body)' }}>
                Pathway can be adapted for grades 10–12 across engineering courses, architecture and construction programs, after-school academies, and summer bridge programs. Delivery options include curriculum licensing, school contracts, district partnerships, grants, and Aedifica-led instruction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ── bg-snow pb-0, contained quarry block */}
      <section className="bg-snow pt-10 lg:pt-16 pb-0" aria-label="Register interest in Pathway">
        <div className="max-w-[1100px] mx-auto px-6">
          <motion.div
            className="bg-quarry px-10 pt-16 pb-12 lg:px-16 lg:pt-20 lg:pb-14 text-center rounded-t-[2rem]"
            initial={reduce ? undefined : { opacity: 0, y: 28 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={reduce ? undefined : VIEWPORT}
            transition={reduce ? undefined : { duration: 0.65, ease: SPRING }}>

            <h2
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.08] tracking-[-0.03em] text-anthracite italic mb-6 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Register interest before the program launches.
            </h2>

            <p
              className="text-[15px] text-anthracite leading-[1.7] max-w-[52ch] mx-auto mb-10"
              style={{ fontFamily: 'var(--font-body)' }}>
              Aedifica is documenting interest from districts, vocational institutions, and education partners for Pathway before it launches. No commitment required.
            </p>

            <Link href="/partner"
              className="inline-flex items-center justify-center gap-2 bg-anthracite text-white text-[13.5px] tracking-[-0.01em] px-8 py-3.5 active:scale-[0.98] transition-transform duration-100 hover:bg-anthracite/85 group"
              style={{ fontFamily: 'var(--font-body)' }}>
              Register interest in Pathway
              <span className="transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>

          </motion.div>
        </div>
      </section>

    </main>
  )
}
