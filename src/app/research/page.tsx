import type { Metadata } from 'next'
import { Research } from '@/src/views/Research'
import { RESEARCH_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Research: Two Investigations in Progress',
  description:
    "Aedifica's research agenda: the supervisor gap in New Jersey's green-construction workforce, the Bridging Brilliance case study, and a five-publication research archive.",
  alternates: { canonical: `${SITE_URL}/research` },
  openGraph: {
    title: 'Aedifica Research: Two Investigations in Progress',
    description:
      "Aedifica's research agenda: the supervisor gap in New Jersey's green-construction workforce, the Bridging Brilliance case study, and a five-publication research archive.",
    url: `${SITE_URL}/research`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(RESEARCH_SCHEMA) }}
      />
      <Research />
    </>
  )
}
