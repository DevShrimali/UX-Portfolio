"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { CheckCircle2, Layers, Rocket, Users } from "lucide-react"

const highlights = [
  {
    icon: Layers,
    text: "30+ projects delivered",
  },
  {
    icon: Rocket,
    text: "Web & mobile products used by real users",
  },
  {
    icon: CheckCircle2,
    text: "Led design from research to handoff",
  },
  {
    icon: Users,
    text: "Worked directly with founders & dev teams",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-20 lg:px-40 bg-background border-b border-white/5">
      <AnimateOnScroll animation="fade-in-up">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">01 / About</h3>
      </AnimateOnScroll>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-24">
        <div className="w-full">
          <AnimateOnScroll animation="fade-in-up" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-syne)] font-bold leading-tight mb-8">
              I design scalable, user-centric digital products that balance clarity, usability, and business goals.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-up" delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I’m Dev Shrimali lead UI/UX designer with 6+ years of experience designing mobile apps, web platforms, and marketing websites. I lead end-to-end design and work closely with developers to ensure solutions are practical, scalable, and implemented accurately—creating experiences that are usable, equitable, enjoyable, and genuinely useful while balancing user needs, technical constraints, and business goals.
            </p>
          </AnimateOnScroll>
        </div>
      </div>

      {/* Impact Highlights Merged Here */}
      <div className="w-full">
        <AnimateOnScroll animation="fade-in-up" delay={0.3}>
          <div className="mb-12">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
              Impact Highlights
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-6 h-6" />
                </div>
                <p className="text-lg font-medium leading-snug text-foreground/90">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>

    </section>
  )
}
