import type { Metadata } from 'next'
import { Rebuild } from '@/src/views/Rebuild'
import { REBUILD_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Rebuild | Adult Construction-Management Bridge Cohort in NJ',
  description:
    "Rebuild is Aedifica's 12-week adult bridge cohort designed for credible entry and progression in construction-management careers in New Jersey.",
  alternates: { canonical: `${SITE_URL}/services/rebuild` },
  openGraph: {
    title: 'Rebuild | Adult Construction-Management Bridge Cohort in NJ',
    description:
      "Rebuild is Aedifica's 12-week adult bridge cohort designed for credible entry and progression in construction-management careers in New Jersey.",
    url: `${SITE_URL}/services/rebuild`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(REBUILD_SCHEMA) }}
      />
      <Rebuild />
    </>
  )
}
