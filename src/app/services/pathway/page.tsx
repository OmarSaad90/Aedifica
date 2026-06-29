import type { Metadata } from 'next'
import { Pathway } from '@/src/views/Pathway'
import { PATHWAY_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Pathway | High-School Civil Engineering Curriculum · NJ',
  description:
    'Aedifica Pathway is a high-school construction-management and civil engineering curriculum designed for career readiness and articulation in New Jersey, informed by three summers of pre-college engineering delivery at Stevens Institute of Technology.',
  alternates: { canonical: `${SITE_URL}/services/pathway` },
  openGraph: {
    title: 'Pathway | High-School Civil Engineering Curriculum · NJ',
    description:
      'Aedifica Pathway is a high-school construction-management and civil engineering curriculum designed for career readiness and articulation in New Jersey.',
    url: `${SITE_URL}/services/pathway`,
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
