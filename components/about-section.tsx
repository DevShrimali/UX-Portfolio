"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { AnimatedCounter } from "./animated-counter"
import { projects } from "@/lib/projects-data"

export function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-24 px-6 md:px-20 lg:px-40 bg-background">
      <AnimateOnScroll animation="fade-in-up">
        <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-12">01 / About</h3>
      </AnimateOnScroll>

      <div className="flex flex-col md:flex-row gap-12 md:gap-24 mb-16">
        <div className="w-full md:w-2/3">
          <AnimateOnScroll animation="fade-in-up" delay={0.1}>
            <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-syne)] font-bold leading-tight mb-8">
              I design <span className="text-muted-foreground">user-centered products</span> where <span className="text-accent">clarity, usability, and meaningful detail</span> come together.
            </h2>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-up" delay={0.2}>
            <p className="text-muted-foreground text-lg leading-relaxed">
              With 6+ years of experience, I work as a design architect and visual storyteller, crafting high-performing digital products that balance strategy, creativity, and technical understanding. My expertise blends UI/UX design with front-end awareness, enabling me to translate complex requirements into structured design systems, refined user flows, and engaging interfaces. Skilled in Figma, Adobe Creative Suite, and modern web technologies, I conduct insight-driven research, create purposeful interactions, and develop motion graphics that enhance product usability. I stay aligned with evolving design practices while remaining grounded in timeless user experience principles—designing digital journeys that feel intuitive, human, and cohesive across platforms.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Stats on the right side */}
        <div className="w-full md:w-1/3 flex flex-col justify-center gap-8 md:gap-12 pl-0 md:pl-12 border-l-0 md:border-l border-border">
          <AnimateOnScroll animation="fade-in-up" delay={0.3}>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-syne)] text-foreground mb-2">
                <AnimatedCounter end={projects.length} suffix="+" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-1">Projects Delivered</h3>
              <p className="text-xs text-muted-foreground">Across multiple industries</p>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-in-up" delay={0.4}>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-syne)] text-foreground mb-2">
                <AnimatedCounter end={6} suffix="+" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-foreground mb-1">Years Experience</h3>
              <p className="text-xs text-muted-foreground">Professional design work</p>
            </div>
          </AnimateOnScroll>
        </div>
      </div>




    </section >
  )
}
