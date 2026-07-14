'use client'
import { Hero } from '../components/Hero'
import { TheGap } from '../components/TheGap'
import { MissingChannel } from '../components/MissingChannel'
import { AedificaModel } from '../components/AedificaModel'
import { FourGates } from '../components/FourGates'
import { Services } from '../components/Services'
import { CurriculumIndex } from '../components/CurriculumIndex'
import { Partnership } from '../components/Partnership'
import { CostCallout } from '../components/CostCallout'
import { LearnerStory } from '../components/LearnerStory'
import { PriorExperience } from '../components/PriorExperience'
import { WhoWeServe } from '../components/WhoWeServe'
import { FinalCTA } from '../components/FinalCTA'

export function Home() {
  return (
    <main>
      <Hero />
      <TheGap />
      <MissingChannel />
      <AedificaModel />
      <Services />
      <CurriculumIndex />
      <FourGates />
      <PriorExperience />
      <WhoWeServe />
      <LearnerStory />
      <Partnership />
      <CostCallout />
      <FinalCTA />
    </main>
  )
}
