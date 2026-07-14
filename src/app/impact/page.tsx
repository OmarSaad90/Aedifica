import type { Metadata } from 'next'
import { Impact } from '@/src/views/Impact'
import { IMPACT_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Student Stories & Impact',
  description:
    'Real outcomes from Aedifica programs: student stories, verified impact data, and the measurable shifts the Building Bridges cohort showed in Spring 2025.',
  alternates: { canonical: `${SITE_URL}/impact` },
  openGraph: {
    title: 'Student Stories & Impact | Aedifica',
    description:
      'Real outcomes from Aedifica programs: student stories, verified impact data, and the measurable shifts the Building Bridges cohort showed in Spring 2025.',
    url: `${SITE_URL}/impact`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(IMPACT_SCHEMA) }}
      />
      <Impact />
    </>
  )
}
