"use client"

import { AnimateOnScroll } from "./animate-on-scroll"
import { AnimatedCounter } from "./animated-counter"

const stats = [
  { number: 50, suffix: "+", label: "Projects Delivered", description: "Across multiple industries" },
  { number: 6, suffix: "+", label: "Years Experience", description: "Professional design work" },
  { number: 30, suffix: "+", label: "Collaboration", description: "Worldwide partnerships" },
  { number: 15, suffix: "+", label: "Design Awards", description: "Recognition & achievements" },
]

export function StatsSection() {
  return (
    <section className="py-24 px-6 md:px-20 lg:px-40 bg-[#080808] border-b border-white/5 overflow-hidden">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {stats.map((stat, index) => (
          <AnimateOnScroll key={stat.label} animation="fade-in-up" delay={index * 0.1}>
            <div className="text-center md:text-left group">
              <div className="text-4xl md:text-6xl lg:text-7xl font-bold font-[family-name:var(--font-syne)] text-white mb-2 group-hover:text-accent transition-colors duration-300">
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{stat.label}</h3>
              <p className="text-sm text-gray-500">{stat.description}</p>
            </div>
          </AnimateOnScroll>
        ))}
      </div>
    </section>
  )
}
