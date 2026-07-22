import type { Metadata } from 'next'
import { Programs } from '@/src/views/Programs'
import { PROGRAMS_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Programs: Construction-Management Pathways, NJ',
  description:
    'All five Aedifica programs in one view: Explore and Pathway for students and schools, Launch for institutions, Rebuild for adults, and Talent Pipeline for employers.',
  alternates: { canonical: `${SITE_URL}/programs` },
  openGraph: {
    title: 'Programs | Aedifica Construction-Management Workforce Pathways',
    description:
      'All five Aedifica programs in one view: Explore and Pathway for students and schools, Launch for institutions, Rebuild for adults, and Talent Pipeline for employers.',
    url: `${SITE_URL}/programs`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PROGRAMS_SCHEMA) }}
      />
      <Programs />
    </>
  )
}
