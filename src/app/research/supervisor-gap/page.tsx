import type { Metadata } from 'next'
import { SupervisorGapFullReport } from '@/src/views/ResearchSupervisorGapFull'
import { SUPERVISOR_GAP_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'The Supervisor Gap: Full Report',
  description:
    "Why New Jersey's building-electrification mandates will require an estimated 2,000 to 3,000 green-fluent construction managers by 2030 against a credentialed supply near zero.",
  alternates: { canonical: `${SITE_URL}/research/supervisor-gap` },
  openGraph: {
    title: 'The Supervisor Gap: Full Report | Aedifica Research',
    description:
      "Why New Jersey's building-electrification mandates will require an estimated 2,000 to 3,000 green-fluent construction managers by 2030 against a credentialed supply near zero.",
    url: `${SITE_URL}/research/supervisor-gap`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(SUPERVISOR_GAP_SCHEMA) }}
      />
      <SupervisorGapFullReport />
    </>
  )
}
