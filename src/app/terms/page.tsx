import type { Metadata } from 'next'
import { Terms } from '@/src/views/Terms'
import { TERMS_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'The terms that govern your use of the Aedifica website.',
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: 'Terms of Use | Aedifica',
    description: 'The terms that govern your use of the Aedifica website.',
    url: `${SITE_URL}/terms`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(TERMS_SCHEMA) }}
      />
      <Terms />
    </>
  )
}
