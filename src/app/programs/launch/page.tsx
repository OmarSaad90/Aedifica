import type { Metadata } from 'next'
import { Launch } from '@/src/views/Launch'
import { LAUNCH_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'Launch: Institutional Pathways & BUILD NJ GREEN',
  description:
    'Aedifica Launch builds construction-management pathway architecture for workforce boards, county colleges, agencies, and institutions, anchored by the 16-week BUILD NJ GREEN curriculum.',
  alternates: { canonical: `${SITE_URL}/programs/launch` },
  openGraph: {
    title: 'Launch | Institutional Pathway Architecture & BUILD NJ GREEN · NJ',
    description:
      'Aedifica Launch builds construction-management pathway architecture for workforce boards, county colleges, agencies, and institutions, anchored by the 16-week BUILD NJ GREEN curriculum.',
    url: `${SITE_URL}/programs/launch`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(LAUNCH_SCHEMA) }}
      />
      <Launch />
    </>
  )
}
