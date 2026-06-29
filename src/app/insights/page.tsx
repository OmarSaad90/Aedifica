import type { Metadata } from 'next'
import { Insights } from '@/src/views/Insights'
import { INSIGHTS_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Resources | Aedifica Workforce Pathway Programs',
  description:
    'Tools and resources for learners, families, educators, and partners building construction-management pathways in New Jersey. Available on request from Aedifica.',
  alternates: { canonical: `${SITE_URL}/insights` },
  openGraph: {
    title: 'Resources | Aedifica Workforce Pathway Programs',
    description:
      'Tools and resources for learners, families, educators, and partners building construction-management pathways in New Jersey. Available on request from Aedifica.',
    url: `${SITE_URL}/insights`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(INSIGHTS_SCHEMA) }}
      />
      <Insights />
    </>
  )
}
