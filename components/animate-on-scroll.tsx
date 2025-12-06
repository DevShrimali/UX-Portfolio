"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

interface AnimateOnScrollProps {
  children: ReactNode
  animation?: "fade-in-up" | "fade-in" | "scale-in" | "slide-in-left" | "slide-in-right"
  delay?: number
  threshold?: number
  className?: string
}

export function AnimateOnScroll({
  children,
  animation = "fade-in-up",
  delay = 0,
  threshold = 0.1,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  const animationClass = {
    "fade-in-up": "animate-fade-in-up",
    "fade-in": "animate-fade-in",
    "scale-in": "animate-scale-in",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
  }[animation]

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  )
}
