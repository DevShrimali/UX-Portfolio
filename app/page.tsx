import { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"

export const metadata: Metadata = {
  title: "Dev Shrimali | Senior UX/UI Designer Portfolio",
  description: "Senior UX/UI Designer creating immersive digital products with a focus on user-centered design and modern aesthetics.",
  alternates: {
    canonical: "https://devshrimali.com",
  },
}

import { ImpactHighlights } from "@/components/impact-highlights"
import { AboutSection } from "@/components/about-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { ProcessSection } from "@/components/process-section"
import { WorkSection } from "@/components/work-section"

import { ExperienceSection } from "@/components/experience-section"

import { ConnectSection } from "@/components/connect-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <ExperienceSection />

      <ConnectSection />
    </main>
  )
}
