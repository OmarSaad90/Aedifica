import type { Metadata } from 'next'
import { Experience } from '@/src/views/Experience'
import { EXPERIENCE_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Learner Experience',
  description:
    "In their own words: reflections from Aedifica Explore's Building Bridges cohort and Aedifica Pathway's Civil Engineering & Design Pathway students at Stevens Institute of Technology.",
  alternates: { canonical: `${SITE_URL}/experience` },
  openGraph: {
    title: 'Learner Experience | Aedifica',
    description:
      "In their own words: reflections from Aedifica Explore's Building Bridges cohort and Aedifica Pathway's Civil Engineering & Design Pathway students at Stevens Institute of Technology.",
    url: `${SITE_URL}/experience`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EXPERIENCE_SCHEMA) }}
      />
      <Experience />
    </>
  )
}
