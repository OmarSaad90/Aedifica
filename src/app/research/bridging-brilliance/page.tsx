import type { Metadata } from 'next'
import { BridgingBrillianceCaseStudy } from '@/src/views/BridgingBrillianceCaseStudy'
import { BB_RESEARCH_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Bridging Brilliance: Lessons from the Instructor',
  description:
    'Ten lessons on trust, ownership, and opportunity in STEM learning, from the instructor who delivered HIA Bridging Brilliance: what building a program that works actually requires.',
  alternates: { canonical: `${SITE_URL}/research/bridging-brilliance` },
  openGraph: {
    title: 'Bridging Brilliance: Lessons from the Instructor | Aedifica Research',
    description:
      'Ten lessons on trust, ownership, and opportunity in STEM learning, from the instructor who delivered HIA Bridging Brilliance: what building a program that works actually requires.',
    url: `${SITE_URL}/research/bridging-brilliance`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BB_RESEARCH_SCHEMA) }}
      />
      <BridgingBrillianceCaseStudy />
    </>
  )
}
