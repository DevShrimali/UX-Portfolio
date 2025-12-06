"use client"

import { useRef, useEffect, useState } from "react"
import { Briefcase, MapPin, Download, ChevronLeft, ChevronRight } from "lucide-react"
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
  },
]

export function AboutSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0)
      setCanScrollRight(
        scrollRef.current.scrollLeft < scrollRef.current.scrollWidth - scrollRef.current.clientWidth - 10,
      )
    }
  }

  useEffect(() => {
    updateScrollButtons()
  }, [])

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
      setTimeout(updateScrollButtons, 300)
    }
  }

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
        <div className="flex md:hidden justify-end gap-2 mb-4">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto scrollbar-hide py-4 md:py-8"
          onScroll={updateScrollButtons}
        >
          {aboutCards.map((card, index) => (
            <AnimateOnScroll key={card.title} animation="fade-in-up" delay={0.3 + index * 0.1}>
              {card.isLink ? (
                <a
                  href="#"
                  className="flex-shrink-0 w-[280px] md:w-auto p-6 border border-white/10 rounded-xl bg-card card-hover flex flex-col justify-center group"
                >
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                    <card.icon className="w-4 h-4 text-accent group-hover:animate-bounce" /> {card.title}
                  </h4>
                  <p className="text-gray-500 text-sm group-hover:text-accent transition-colors">{card.description}</p>
                </a>
              ) : (
                <div className="flex-shrink-0 w-[280px] md:w-auto p-6 border border-white/10 rounded-xl bg-card card-hover">
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
