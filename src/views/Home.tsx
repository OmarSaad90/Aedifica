'use client'
import { Hero } from '../components/Hero'
import { CredibilityBar } from '../components/CredibilityBar'
import { TheGap } from '../components/TheGap'
import { AedificaModel } from '../components/AedificaModel'
import { FourGates } from '../components/FourGates'
import { Services } from '../components/Services'
import { CurriculumStrip } from '../components/CurriculumStrip'
import { Partnership } from '../components/Partnership'
import { CostCallout } from '../components/CostCallout'
import { LearnerStory } from '../components/LearnerStory'
import { PriorExperience } from '../components/PriorExperience'
import { FinalCTA } from '../components/FinalCTA'

export function Home() {
  return (
    <main>
      <Hero />
      <CredibilityBar />
      <TheGap />
      <AedificaModel />
      <LearnerStory />
      <FourGates />
      <Services />
      <CurriculumStrip />
      <Partnership />
      <CostCallout />
      <PriorExperience />
      <FinalCTA />
    </main>
  )
}
