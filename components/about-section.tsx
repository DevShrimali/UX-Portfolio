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




    </section >
  )
}
