import type { Metadata } from 'next'
import { Pathway } from '@/src/views/Pathway'
import { PATHWAY_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Pathway | High-School Civil Engineering Curriculum · NJ',
  description:
    'Aedifica Pathway is a high-school construction-management and civil engineering curriculum designed for career readiness and articulation in New Jersey.',
  alternates: { canonical: `${SITE_URL}/programs/pathway` },
  openGraph: {
    title: 'Pathway | High-School Civil Engineering Curriculum · NJ',
    description:
      'Aedifica Pathway is a high-school construction-management and civil engineering curriculum designed for career readiness and articulation in New Jersey.',
    url: `${SITE_URL}/programs/pathway`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PATHWAY_SCHEMA) }}
      />
      <Pathway />
    </>
  )
}
