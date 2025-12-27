"use client"
import { NoiseBackground } from "./noise-background"
import { ArrowDownRight, ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background flex flex-col md:block">
      {/* 1. Full Screen Noise Background (z-0) */}
      <div className="absolute inset-0 z-0 hidden dark:block">
        <NoiseBackground />
      </div>

      {/* 2. Decorative Grid (z-10) */}
      <div className="absolute inset-0 grid-bg scanline opacity-30 pointer-events-none z-10" />

      {/* 3. Layout Container for Image (z-10) */}
      <div className="relative h-[35vh] w-full pt-20 md:pt-0 md:absolute md:inset-0 md:h-full flex flex-col md:flex-row pointer-events-none z-10">
        {/* Left spacer - transparent */}
        <div className="hidden md:block w-1/2 h-full" />

        {/* Right Image Container */}
        <div className="w-full md:w-1/2 h-full relative overflow-hidden pointer-events-auto flex items-end justify-end">
          <div className={`relative w-full h-[90%] md:h-[90%] mt-10 md:mt-0 transition-transform duration-1000 ${isLoaded ? "scale-100" : "scale-110"}`}>
            <Image
              src="/dev-pro.png"
              alt="INTERFACE_V1.0"
              fill
              priority
              className="object-contain md:object-cover md:object-[center_top] opacity-100 md:opacity-90 mix-blend-overlay hover:mix-blend-normal transition-all duration-500"
              style={{ transition: "mix-blend-mode 0.5s" }}
            />
          </div>
          {/* Gradient fade to integrate image with background */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 md:to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>

      {/* 4. Content - Above All (z-30) */}
      <div className="relative z-30 h-[65vh] md:h-full flex flex-col justify-center px-6 md:px-20 lg:px-40 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <div className="overflow-hidden mb-2">
            <h2
              className={`text-xs md:text-sm font-bold font-mono text-muted-foreground uppercase tracking-[0.2em] ${isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: "0.2s" }}
            >
              6+ Years Experience • Ahmedabad, India
            </h2>
          </div>

          <div className="overflow-hidden">
            <h1
              className={`text-4xl md:text-7xl lg:text-8xl xl:text-[9rem] font-bold leading-[0.9] font-[family-name:var(--font-syne)] mb-8 mix-blend-difference text-foreground ${isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: "0.4s" }}
            >
              UI/UX <br />
              <span className="outline-text text-3xl md:text-6xl lg:text-7xl xl:text-[9rem]">DESIGNER</span>
            </h1>
          </div>

          <p
            className={`text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 font-light leading-relaxed ${isLoaded ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "0.6s" }}
          >
            Simplifying user journeys in fintech & healthcare products. I create scalable interfaces shaped by user insights and purposeful interaction design.
          </p>

          <div
            className={`flex flex-wrap items-center gap-4 md:gap-6 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <Link
              href="#work"
              className="magnetic-btn px-6 md:px-8 py-3 md:py-4 bg-primary text-primary-foreground rounded-full font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-accent hover:scale-105 transition-all"
            >
              See Case Studies
            </Link>

            <Link
              href="#work"
              aria-label="Scroll to work section"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#ddf2ff] dark:bg-accent flex items-center justify-center text-[#33a3ff] dark:text-accent-foreground hover:bg-[#33a3ff] hover:text-white dark:hover:bg-accent/80 dark:hover:text-accent-foreground hover:scale-110 hover:rotate-90 transition-all duration-300"
            >
              <ArrowDownRight className="w-5 h-5 md:w-6 md:h-6" />
            </Link>

            <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground uppercase tracking-widest ml-0 md:ml-2 mt-4 md:mt-0 w-full md:w-auto">
              <span className="link-underline cursor-default">• Figma</span>
              <span className="link-underline cursor-default">• Notion</span>
              <span className="link-underline cursor-default">• Miro</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-50 animate-bounce z-20 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  )
}
