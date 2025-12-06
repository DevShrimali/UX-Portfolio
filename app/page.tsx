import { HeroSection } from "@/components/hero-section"
import { ClientsMarquee } from "@/components/clients-marquee"
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
      <ClientsMarquee />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <ExperienceSection />

      <ConnectSection />
    </main>
  )
}
