import type { Metadata } from 'next'
import { Votech } from '@/src/views/Votech'
import { VOTECH_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'For Vocational & Trade Schools',
  description:
    'Aedifica adds the construction-management layer above your trade program: scope, schedule, cost, safety, quality, and supervisory skills for advancement.',
  alternates: { canonical: `${SITE_URL}/trade-schools` },
  openGraph: {
    title: 'For Vocational & Trade Schools | Aedifica',
    description:
      "We don't replace your program, we add the construction-management layer above it: scope, schedule, cost, safety, quality, and the supervisory skills that move a skilled tradesperson toward coordinator, estimator, scheduler, or field supervisor.",
    url: `${SITE_URL}/trade-schools`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(VOTECH_SCHEMA) }}
      />
      <Votech />
    </>
  )
}
