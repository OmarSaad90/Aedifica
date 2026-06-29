import type { Metadata } from 'next'
import { ServicesOverview } from '@/src/views/ServicesOverview'
import { SERVICES_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Services | Aedifica Construction-Management Workforce Pathways',
  description:
    'Explore Aedifica Rebuild and Launch, the initial services building measurable construction-management pathways for New Jersey talent, institutions, and employers.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: 'Services | Aedifica Construction-Management Workforce Pathways',
    description:
      'Explore Aedifica Rebuild and Launch, the initial services building measurable construction-management pathways for New Jersey talent, institutions, and employers.',
    url: `${SITE_URL}/services`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICES_SCHEMA) }}
      />
      <ServicesOverview />
    </>
  )
}
