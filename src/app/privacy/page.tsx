import type { Metadata } from 'next'
import { Privacy } from '@/src/views/Privacy'
import { PRIVACY_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Privacy Statement',
  description:
    'How Aedifica collects, uses, shares, and protects personal information, including student data under FERPA, COPPA, SOPPA-NJ, and the NJDPA.',
  alternates: { canonical: `${SITE_URL}/privacy` },
  openGraph: {
    title: 'Privacy Statement | Aedifica',
    description:
      'How Aedifica collects, uses, shares, and protects personal information, including student data under FERPA, COPPA, SOPPA-NJ, and the NJDPA.',
    url: `${SITE_URL}/privacy`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(PRIVACY_SCHEMA) }}
      />
      <Privacy />
    </>
  )
}
