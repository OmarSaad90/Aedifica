import type { Metadata } from 'next'
import { Explore } from '@/src/views/Explore'
import { EXPLORE_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Explore | Hands-On STEM & Engineering Discovery · NJ',
  description:
    'Aedifica Explore brings engineering and construction-management career discovery to middle- and high-school students through workshops, summer camps, and school partnerships in New Jersey.',
  alternates: { canonical: `${SITE_URL}/programs/explore` },
  openGraph: {
    title: 'Explore | Hands-On STEM & Engineering Discovery · NJ',
    description:
      'Aedifica Explore brings engineering and construction-management career discovery to middle- and high-school students through workshops, summer camps, and school partnerships in New Jersey.',
    url: `${SITE_URL}/programs/explore`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(EXPLORE_SCHEMA) }}
      />
      <Explore />
    </>
  )
}
