'use client'
import { useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'motion/react'
import { CaretDown } from '@phosphor-icons/react'

const EASE = [0.25, 0.1, 0.25, 1] as const

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

export function PathwaySummerCamps() {
  const reduce = useReducedMotion()
  const [openCamp, setOpenCamp] = useState<number | null>(null)

  return (
    <section className="bg-bone py-12 lg:py-18" aria-labelledby="camps-h2">
      <div className="max-w-7xl mx-auto px-6">

        <div className="lg:grid lg:grid-cols-[1fr_1.5fr] lg:gap-16 xl:gap-24 lg:items-start mb-10 lg:mb-12">
          <div>
            <motion.h2
              id="camps-h2"
              className="text-[2rem] lg:text-[2.75rem] xl:text-[3.25rem] leading-[1.06] tracking-[-0.03em] text-anthracite italic mb-4 [text-wrap:balance]"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 300 }}>
              Four summer program models for high-school learners.
            </motion.h2>
          </div>
          <p
            className="text-[14.5px] text-anthracite/70 leading-[1.72] lg:pt-2"
            style={{ fontFamily: 'var(--font-body)' }}>
            Pathway summer programs extend the curriculum into immersive formats: infrastructure resilience, climate and sustainability, smart cities and transportation, and a three-week research bootcamp for upper-classmen. Each model targets a different depth of engagement, from two-week intensive experiences through independent research with mentor critique.
          </p>
        </div>

        <div className="bg-snow">
          {CAMPS.map(({ name, grade, duration, objectives, activities, project }, i) => (
            <div key={name} className="border-t border-sediment/15">
              <button
                className="w-full text-left px-7 lg:px-10 py-5 flex items-start gap-5 hover:bg-bone/50 transition-colors duration-150"
                onClick={() => setOpenCamp(openCamp === i ? null : i)}
                aria-expanded={openCamp === i}
                aria-controls={`camp-body-${i}`}>

                <div className="flex-shrink-0 w-[104px] mt-0.5">
                  <span className="text-[11px] font-medium text-datum block leading-none mb-1" style={{ fontFamily: 'var(--font-body)' }}>{grade}</span>
                  <span className="text-[11.5px] text-anthracite/75 uppercase tracking-[0.05em] block" style={{ fontFamily: 'var(--font-body)' }}>{duration}</span>
                </div>

                <span className="flex-1 text-[15px] lg:text-[1.0625rem] text-anthracite italic leading-[1.3] tracking-[-0.015em]" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{name}</span>

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
                      <p className="text-[13.5px] text-anthracite/70 leading-[1.68] mb-5 italic" style={{ fontFamily: 'var(--font-heading)', fontWeight: 400 }}>{objectives}</p>
                      <div className="lg:grid lg:grid-cols-[1.3fr_1fr] lg:gap-10">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.12em] text-anthracite/75 mb-3" style={{ fontFamily: 'var(--font-body)' }}>Major activities</p>
                          <ul className="space-y-2">
                            {activities.map(act => (
                              <li key={act} className="flex gap-2.5 items-start">
                                <span className="w-[4px] h-[4px] bg-datum/50 rounded-full flex-shrink-0 mt-[7px]" aria-hidden="true" />
                                <span className="text-[13px] text-anthracite/70 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{act}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6 lg:mt-0">
                          <p className="text-[11px] uppercase tracking-[0.12em] text-anthracite/75 mb-3" style={{ fontFamily: 'var(--font-body)' }}>Final project</p>
                          <p className="text-[13.5px] text-anthracite/75 leading-[1.6]" style={{ fontFamily: 'var(--font-body)' }}>{project}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
          <div className="border-t border-sediment/15" />
        </div>

      </div>
    </section>
  )
}
