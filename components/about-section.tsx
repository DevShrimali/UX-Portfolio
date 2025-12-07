"use client"

import { Briefcase, MapPin, Download } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

const aboutCards = [
  {
    icon: Briefcase,
    title: "Experience",
    description: "6 Years 8 Months • Web & Mobile",
  },
  {
    icon: MapPin,
    title: "Location",
    description: "Ahmedabad, India • Remote Ready",
  },
  {
    icon: Download,
    title: "Resume",
    description: "Download PDF",
    isLink: true,
    link: "https://drive.google.com/file/d/13tq82Ju293V6cpKx9NS5kK8YQ0N5EcTU/view?usp=sharing",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 md:px-20 lg:px-40 bg-[#080808] border-b border-white/5">
      <AnimateOnScroll animation="fade-in-up">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">01 / About</h3>
      </AnimateOnScroll>

      <div className="max-w-4xl">
        <AnimateOnScroll animation="fade-in-up" delay={0.1}>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-syne)] font-bold leading-tight mb-8">
            I&apos;m Dev, a UI/UX Designer bridging the gap between{" "}
            <span className="text-gray-500">complex problems</span> and{" "}
            <span className="text-accent">simple solutions.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={0.2}>
          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            With over 6 years of experience, I specialize in designing scalable user-centered products for Fintech,
            HealthTech, and E-commerce. Based in Ahmedabad, India, I focus on user research, design systems, and
            high-fidelity prototyping to deliver impactful digital experiences.
          </p>
        </AnimateOnScroll>
      </div>



      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-4 md:py-8">
          {aboutCards.map((card, index) => (
            <AnimateOnScroll key={card.title} animation="fade-in-up" delay={0.3 + index * 0.1}>
              {card.isLink ? (
                <a
                  href={card.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full p-6 border border-white/10 rounded-xl bg-card card-hover flex flex-col justify-center group"
                >
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <card.icon className="w-4 h-4 text-accent group-hover:animate-bounce" /> {card.title}
                  </h4>
                  <p className="text-gray-500 text-sm group-hover:text-accent transition-colors">{card.description}</p>
                </a>
              ) : (
                <div className="w-full p-6 border border-white/10 rounded-xl bg-card card-hover">
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <card.icon className="w-4 h-4 text-accent" /> {card.title}
                  </h4>
                  <p className="text-gray-500 text-sm">{card.description}</p>
                </div>
              )}
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
