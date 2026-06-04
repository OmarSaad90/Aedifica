import { Hero } from '../components/Hero'
import { CredibilityBar } from '../components/CredibilityBar'
import { TheGap } from '../components/TheGap'
import { AedificaModel } from '../components/AedificaModel'
import { FourGates } from '../components/FourGates'
import { Services } from '../components/Services'
import { RoleLadder } from '../components/RoleLadder'
import { Outcomes } from '../components/Outcomes'
import { Partnership } from '../components/Partnership'
import { PriorExperience } from '../components/PriorExperience'
import { FinalCTA } from '../components/FinalCTA'

export function Home() {
  return (
    <main>
      <Hero />
      <CredibilityBar />
      <TheGap />
      <AedificaModel />
      <FourGates />
      <Services />
      <RoleLadder />
      <Outcomes />
      <Partnership />
      <PriorExperience />
      <FinalCTA />
    </main>
  )
}
