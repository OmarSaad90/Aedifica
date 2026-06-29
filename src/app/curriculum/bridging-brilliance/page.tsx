import type { Metadata } from 'next'
import { BridgingBrilliance } from '@/src/views/BridgingBrilliance'
import { BB_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Bridging Brilliance: Engineering the Hudson | Aedifica',
  description:
    'A twelve-week middle school engineering program where students design, build, test, and present a sustainable bridge across the Hudson River. NGSS, Common Core, and NJ Life and Careers aligned.',
  alternates: { canonical: `${SITE_URL}/curriculum/bridging-brilliance` },
  openGraph: {
    title: 'Bridging Brilliance: Engineering the Hudson | Aedifica',
    description:
      'A twelve-week middle school engineering program where students design, build, test, and present a sustainable bridge across the Hudson River. NGSS, Common Core, and NJ Life and Careers aligned.',
    url: `${SITE_URL}/curriculum/bridging-brilliance`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(BB_SCHEMA) }}
      />
      <BridgingBrilliance />
    </>
  )
}
