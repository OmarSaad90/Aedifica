import type { Metadata } from 'next'
import { Accessibility } from '@/src/views/Accessibility'
import { ACCESSIBILITY_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'Aedifica’s commitment to WCAG 2.1 AA accessibility and how to report a barrier.',
  alternates: { canonical: `${SITE_URL}/accessibility` },
  openGraph: {
    title: 'Accessibility Statement | Aedifica',
    description: 'Aedifica’s commitment to WCAG 2.1 AA accessibility and how to report a barrier.',
    url: `${SITE_URL}/accessibility`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ACCESSIBILITY_SCHEMA) }}
      />
      <Accessibility />
    </>
  )
}
