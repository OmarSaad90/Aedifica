import type { Metadata } from 'next'
import { About } from '@/src/views/About'
import { ABOUT_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'About Aedifica | We Build the Builders',
  description:
    'Aedifica builds construction-management workforce pathways for overlooked talent in New Jersey through disciplined employer partnerships and measurable outcomes.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: 'About Aedifica | We Build the Builders',
    description:
      'Aedifica builds construction-management workforce pathways for overlooked talent in New Jersey through disciplined employer partnerships and measurable outcomes.',
    url: `${SITE_URL}/about`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ABOUT_SCHEMA) }}
      />
      <About />
    </>
  )
}
