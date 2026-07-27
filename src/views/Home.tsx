'use client'
import { Hero } from '../components/Hero'
import { HomePrograms } from '../components/HomePrograms'
import { TheGap } from '../components/TheGap'
import { WhatWeDo } from '../components/WhatWeDo'
import { FindYourDoor } from '../components/FindYourDoor'
import { AedificaModel } from '../components/AedificaModel'

export function Home() {
  return (
    <main>
      <Hero />
      <TheGap />
      <FindYourDoor />
      <WhatWeDo />
      <AedificaModel />
      <HomePrograms />
    </main>
  )
}
