'use client'
import { Hero } from '../components/Hero'
import { HomePrograms } from '../components/HomePrograms'
import { TheGap } from '../components/TheGap'
import { AedificaModel } from '../components/AedificaModel'
import { FourGates } from '../components/FourGates'
import { WhoWeServe } from '../components/WhoWeServe'
import { FinalCTA } from '../components/FinalCTA'

export function Home() {
  return (
    <main>
      <Hero />
      <HomePrograms />
      <TheGap />
      <AedificaModel />
      <FourGates />
      <WhoWeServe />
      <FinalCTA />
    </main>
  )
}
