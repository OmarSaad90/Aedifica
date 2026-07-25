'use client'
import { Hero } from '../components/Hero'
import { HomePrograms } from '../components/HomePrograms'
import { TheGap } from '../components/TheGap'
import { WhatWeDo } from '../components/WhatWeDo'
import { AedificaModel } from '../components/AedificaModel'

export function Home() {
  return (
    <main>
      <Hero />
      <TheGap />
      <WhatWeDo />
      <AedificaModel />
      <HomePrograms />
    </main>
  )
}
