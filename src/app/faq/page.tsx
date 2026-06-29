import type { Metadata } from 'next'
import { FAQ } from '@/src/views/FAQ'
import { FAQ_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'FAQ & Eligibility | Aedifica',
  description:
    'Answers to common questions about Aedifica construction-management pathway programs: eligibility, applications, cost, and participation.',
  alternates: { canonical: `${SITE_URL}/faq` },
  openGraph: {
    title: 'FAQ & Eligibility | Aedifica',
    description:
      'Answers to common questions about Aedifica construction-management pathway programs: eligibility, applications, cost, and participation.',
    url: `${SITE_URL}/faq`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }}
      />
      <FAQ />
    </>
  )
}
