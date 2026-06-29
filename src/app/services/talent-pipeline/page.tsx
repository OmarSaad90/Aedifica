import type { Metadata } from 'next'
import { TalentPipeline } from '@/src/views/TalentPipeline'
import { TALENT_PIPELINE_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Talent Pipeline | Employer Engagement for Emerging CM Talent · NJ',
  description:
    "Aedifica's Talent Pipeline connects New Jersey construction employers with prepared emerging construction-management talent through employer-informed pathways.",
  alternates: { canonical: `${SITE_URL}/services/talent-pipeline` },
  openGraph: {
    title: 'Talent Pipeline | Employer Engagement for Emerging CM Talent · NJ',
    description:
      "Aedifica's Talent Pipeline connects New Jersey construction employers with prepared emerging construction-management talent through employer-informed pathways.",
    url: `${SITE_URL}/services/talent-pipeline`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TALENT_PIPELINE_SCHEMA) }}
      />
      <TalentPipeline />
    </>
  )
}
