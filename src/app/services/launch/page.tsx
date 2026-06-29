import type { Metadata } from 'next'
import { Launch } from '@/src/views/Launch'
import { LAUNCH_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Launch | Workforce Grant Strategy & Proposal Authoring · NJ',
  description:
    'Fixed-fee workforce grant strategy and proposal-authoring support for New Jersey community organizations, education institutions, and training providers.',
  alternates: { canonical: `${SITE_URL}/services/launch` },
  openGraph: {
    title: 'Launch | Workforce Grant Strategy & Proposal Authoring · NJ',
    description:
      'Fixed-fee workforce grant strategy and proposal-authoring support for New Jersey community organizations, education institutions, and training providers.',
    url: `${SITE_URL}/services/launch`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LAUNCH_SCHEMA) }}
      />
      <Launch />
    </>
  )
}
