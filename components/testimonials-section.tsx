"use client"

import { Quote } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"
import { useEffect, useRef, useState } from "react"

const testimonials = [
  {
    quote:
      "Dev's design work transformed our product. His attention to detail and user-centric approach resulted in a 40% increase in user engagement.",
    author: "Sarah Chen",
    role: "CEO, TechFlow",
    avatar: "https://i.pravatar.cc/150?u=Sarah+Chen",
  },
  {
    quote:
      "Working with Dev was an absolute pleasure. He understood our vision immediately and delivered beyond expectations.",
    author: "Michael Roberts",
    role: "Founder, FinanceHub",
    avatar: "https://i.pravatar.cc/150?u=Michael+Roberts",
  },
  {
    quote: "The design system Dev created for us has been invaluable. Our development speed increased significantly.",
    author: "Emily Watson",
    role: "Product Lead, HealthTech",
    avatar: "https://i.pravatar.cc/150?u=Emily+Watson",
  },
  {
    quote:
      "Dev brings creativity and strategic thinking to every project. His designs are not just beautiful but also highly functional.",
    author: "James Miller",
    role: "CTO, StartupX",
    avatar: "https://i.pravatar.cc/150?u=James+Miller",
  },
  {
    quote:
      "Outstanding collaboration skills and a keen eye for detail. Dev exceeded all our expectations with his innovative solutions.",
    author: "Lisa Park",
    role: "Marketing Director, BrandCo",
    avatar: "https://i.pravatar.cc/150?u=Lisa+Park",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const animate = () => {
      if (!isPaused && scrollContainer) {
        scrollPosition += scrollSpeed
        if (scrollPosition >= scrollContainer.scrollWidth / 2) {
          scrollPosition = 0
        }
        scrollContainer.scrollLeft = scrollPosition
      }
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationId)
  }, [isPaused])

  return (
    <section className="py-24 bg-[#080808] border-b border-white/5 overflow-hidden">
      <div className="px-6 md:px-20 lg:px-40">
        <AnimateOnScroll animation="fade-in-up">
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-4">Testimonials</h3>
          <h2 className="text-3xl md:text-5xl font-[family-name:var(--font-syne)] font-bold mb-16">
            What my employees & clients <span className="text-accent">say</span>
          </h2>
        </AnimateOnScroll>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing py-10"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Duplicate testimonials for infinite scroll effect */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={`${testimonial.author}-${index}`}
            className="flex-shrink-0 w-[350px] md:w-[450px] p-8 border border-white/10 rounded-2xl bg-card card-hover relative ml-6 first:ml-6"
          >
            <Quote className="w-10 h-10 text-accent/20 absolute top-6 right-6" />
            <p className="text-gray-300 mb-8 leading-relaxed relative z-10">&ldquo;{testimonial.quote}&rdquo;</p>
            <div className="flex items-center gap-4">
              <img
                src={testimonial.avatar || "/placeholder.svg?height=48&width=48&query=professional headshot"}
                alt={testimonial.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-bold text-white">{testimonial.author}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
