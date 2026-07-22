import type { Metadata } from 'next'
import { Partner } from '@/src/views/Partner'
import { PARTNER_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: "Partner With Us: NJ Construction-Management Pathways",
  description:
    'Partner with Aedifica as an education institution, workforce organization, employer, or funding partner to build accountable construction-management pathways in New Jersey.',
  alternates: { canonical: `${SITE_URL}/partner` },
  openGraph: {
    title: "Partner with Aedifica | Build New Jersey's CM Workforce Pathway",
    description:
      'Partner with Aedifica as an education institution, workforce organization, employer, or funding partner to build accountable construction-management pathways in New Jersey.',
    url: `${SITE_URL}/partner`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PARTNER_SCHEMA) }}
      />
      <Partner />
    </>
  )
}
