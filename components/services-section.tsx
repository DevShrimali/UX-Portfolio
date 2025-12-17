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
    <section id="services" className="py-24 bg-secondary dark:bg-[color-mix(in_oklab,var(--accent)_5%,transparent)] border-b border-border">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* 1. Product & UX Strategy */}
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-syne)]">Product & UX Strategy</h3>
            <ul className="space-y-3">
              {["User research & usability testing", "Problem framing & requirement analysis", "User flows, journey mapping & IA", "Accessibility & equity-focused design"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 2. UI & Interaction Design */}
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Palette className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-syne)]">UI & Interaction Design</h3>
            <ul className="space-y-3">
              {["High-fidelity UI for mobile & web", "Scalable design systems & libraries", "Interaction design & micro-interactions", "Visual hierarchy, typography & layout"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Collaboration & Delivery */}
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-syne)]">Collaboration & Delivery</h3>
            <ul className="space-y-3">
              {["End-to-end design ownership", "Close developer collaboration", "Front-end awareness (HTML/CSS/JS)", "Client communication & alignment"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Tools & Platforms */}
          <div className="space-y-6">
            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-2">
              <Monitor className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold font-[family-name:var(--font-syne)]">Tools & Platforms</h3>
            <ul className="space-y-3">
              {["Figma (UI, prototyping, systems)", "Adobe Creative Suite (visual/motion)", "Miro & Notion (workshops/docs)"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
