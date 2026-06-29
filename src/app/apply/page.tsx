import type { Metadata } from 'next'
import { Apply } from '@/src/views/Apply'
import { APPLY_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Apply to an Aedifica Program',
  description:
    'Apply to Aedifica construction-management pathway programs. Eligibility overview, materials checklist, and next steps for learners, schools, and partners.',
  alternates: { canonical: `${SITE_URL}/apply` },
  openGraph: {
    title: 'Apply to an Aedifica Program',
    description:
      'Apply to Aedifica construction-management pathway programs. Eligibility overview, materials checklist, and next steps for learners, schools, and partners.',
    url: `${SITE_URL}/apply`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(APPLY_SCHEMA) }}
      />
      <Apply />
    </>
  )
}
