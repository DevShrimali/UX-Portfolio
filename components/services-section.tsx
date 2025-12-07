"use client"

import { Monitor, Smartphone, Palette, Layers, Zap, Users } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: Monitor,
    title: "Web & Interface Design",
    description: "Creating responsive, user-friendly websites that convert visitors into customers.",
    capabilities: ["Wireframing", "High-Fidelity UI", "Responsive Design"],
  },
  {
    icon: Smartphone,
    title: "Mobile Experience Design",
    description: "Designing intuitive mobile experiences for iOS and Android platforms.",
    capabilities: ["iOS & Android", "Prototyping", "User Testing"],
  },
  {
    icon: Palette,
    title: "Brand Strategy",
    description: "Building memorable brand identities with logos, colors, and visual systems.",
    capabilities: ["Logo Design", "Brand Guidelines", "Visual Systems"],
  },
  {
    icon: Layers,
    title: "Design Systems",
    description: "Creating scalable component libraries for consistent product experiences.",
    capabilities: ["Component Libraries", "Documentation", "Token Systems"],
  },
  {
    icon: Zap,
    title: "Interaction Design",
    description: "High-fidelity interactive prototypes for user testing and stakeholder buy-in.",
    capabilities: ["Interactive Demos", "Micro-interactions", "Motion Design"],
  },
  {
    icon: Users,
    title: "UX Research & Strategy",
    description: "Understanding users through interviews, surveys, and usability testing.",
    capabilities: ["User Interviews", "Usability Testing", "Data Analysis"],
  },
]

export function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = scrollContainer.scrollLeft

    const animate = () => {
      // Always scroll, removed isPaused check
      scrollPosition += 0.5

      // Infinite loop logic: when we've scrolled past half the content (original set), jump back to 0
      // This assumes we've duplicated the content below
      if (scrollPosition >= (scrollContainer.scrollWidth / 2)) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [])

  return (
    <section id="services" className="py-24 bg-secondary dark:bg-[color-mix(in_oklab,var(--accent)_5%,transparent)] border-b border-border overflow-hidden">
      <div className="px-6 md:px-20 lg:px-40">
        <AnimateOnScroll animation="fade-in-up">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">02 / Skills</h3>
              <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-syne)] font-bold max-w-3xl">
                Core Competencies & <span className="text-accent">Expertise</span>
              </h2>
            </div>
          </div>
        </AnimateOnScroll>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden whitespace-nowrap px-0 pt-4 pb-12"
      >
        {/* Render services multiple times for seamless infinite scroll */}
        {[...services, ...services, ...services].map((service, index) => (
          <div
            key={`${service.title}-${index}`}
            className="inline-block flex-shrink-0 w-[280px] md:w-[320px] group p-6 md:p-8 border border-border rounded-2xl bg-card card-hover cursor-pointer whitespace-normal"
          >
            <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-[#33a3ff] group-hover:text-white dark:group-hover:bg-accent dark:group-hover:text-black transition-all duration-300">
              <service.icon className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-syne)] mb-3">{service.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.capabilities.map((cap) => (
                <span
                  key={cap}
                  className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground group-hover:bg-primary/10 transition-colors"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
