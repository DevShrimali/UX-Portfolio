"use client"
import { NoiseBackground } from "./noise-background"
import { ArrowDownRight, ArrowDown } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* 1. Full Screen Noise Background (z-0) */}
      <div className="absolute inset-0 z-0">
        <NoiseBackground />
      </div>

      {/* 2. Decorative Grid (z-10) */}
      <div className="absolute inset-0 grid-bg scanline opacity-30 pointer-events-none z-10" />

      {/* 3. Layout Container for Image (z-10) */}
      <div className="absolute inset-0 flex flex-col md:flex-row pointer-events-none z-10">
        {/* Left spacer - transparent */}
        <div className="hidden md:block w-1/2 h-full" />

        {/* Right Image Container */}
        <div className="w-full md:w-1/2 h-full relative overflow-hidden pointer-events-auto">
          <img
            src="/dev-pro.png"
            alt="INTERFACE_V1.0"
            className={`w-full h-full object-cover object-top opacity-100 md:opacity-90 mix-blend-overlay hover:mix-blend-normal transition-all duration-500 ${isLoaded ? "scale-100" : "scale-110"
              }`}
            style={{ transition: "transform 1.2s cubic-bezier(0.23, 1, 0.32, 1), mix-blend-mode 0.5s" }}
          />
          {/* Gradient fade to integrate image with background */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20 md:to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>

      {/* 4. Content - Above All (z-30) */}
      <div className="relative z-30 h-full flex flex-col justify-center px-6 md:px-20 lg:px-40 pointer-events-none">
        <div className="max-w-4xl pointer-events-auto">
          <div className="overflow-hidden mb-2">
            <h2
              className={`text-xs md:text-sm font-bold font-mono text-gray-400 md:text-gray-500 uppercase tracking-[0.2em] ${isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: "0.2s" }}
            >
              6+ Years Experience • Ahmedabad, India
            </h2>
          </div>

          <div className="overflow-hidden">
            <h1
              className={`text-5xl md:text-8xl lg:text-[9rem] font-bold leading-[0.9] font-[family-name:var(--font-syne)] mb-8 mix-blend-difference text-white ${isLoaded ? "animate-fade-in-up" : "opacity-0"
                }`}
              style={{ animationDelay: "0.4s" }}
            >
              UI/UX <br />
              <span className="outline-text">DESIGNER</span>
            </h1>
          </div>

          <p
            className={`text-lg md:text-xl text-gray-300 md:text-gray-400 max-w-2xl mb-12 font-light leading-relaxed ${isLoaded ? "animate-fade-in-up" : "opacity-0"
              }`}
            style={{ animationDelay: "0.6s" }}
          >
            I&apos;m Dev, a UI/UX Designer creating user-centered digital products for web and mobile. I&apos;ve
            designed solutions across e-commerce, healthcare, fintech, and AI-powered platforms.
          </p>

          <div
            className={`flex flex-wrap items-center gap-4 md:gap-6 ${isLoaded ? "animate-fade-in-up" : "opacity-0"}`}
            style={{ animationDelay: "0.8s" }}
          >
            <Link
              href="#work"
              className="magnetic-btn px-6 md:px-8 py-3 md:py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider text-xs md:text-sm hover:bg-accent hover:scale-105 transition-all"
            >
              View Selected Projects
            </Link>

            <Link
              href="#work"
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-accent flex items-center justify-center text-black hover:scale-110 hover:rotate-90 transition-all duration-300"
            >
              <ArrowDownRight className="w-5 h-5 md:w-6 md:h-6" />
            </Link>

            <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-400 md:text-gray-500 uppercase tracking-widest ml-2">
              <span className="link-underline cursor-default">• Figma</span>
              <span className="link-underline cursor-default">• Notion</span>
              <span className="link-underline cursor-default">• Webflow</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce z-20 pointer-events-none">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="w-4 h-4" />
      </div>
    </section>
  )
}
