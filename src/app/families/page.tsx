import type { Metadata } from 'next'
import { Families } from '@/src/views/Families'
import { FAMILIES_SCHEMA } from '@/src/lib/schemas'
import { SITE_URL } from '@/src/lib/config'

export const metadata: Metadata = {
  title: 'For Families',
  description:
    'A real path into careers that build our communities, at no cost to your child. How Aedifica works for parents and families, from middle school through adult programs.',
  alternates: { canonical: `${SITE_URL}/families` },
  openGraph: {
    title: 'For Families | Aedifica',
    description:
      'A real path into careers that build our communities, at no cost to your child. How Aedifica works for parents and families, from middle school through adult programs.',
    url: `${SITE_URL}/families`,
  },
}

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAMILIES_SCHEMA) }}
      />
      <Families />
    </>
  )
}
