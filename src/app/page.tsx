import type { Metadata } from 'next'
import { Home } from '@/src/views/Home'
import { HOME_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Aedifica | Construction-Management Workforce Pathways for New Jersey',
  description:
    'Aedifica builds disciplined, employer-informed construction-management workforce pathways for overlooked talent, institutions, and employers in New Jersey.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: 'Aedifica | Construction-Management Workforce Pathways for New Jersey',
    description:
      'Aedifica builds disciplined, employer-informed construction-management workforce pathways for overlooked talent, institutions, and employers in New Jersey.',
    url: SITE_URL,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(HOME_SCHEMA) }}
      />
      <Home />
    </>
  )
}
