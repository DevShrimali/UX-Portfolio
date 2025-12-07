"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimateOnScroll } from "./animate-on-scroll"

export function CTASection() {
  return (
    <section className="py-24 md:py-32 px-6 md:px-20 lg:px-40 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <AnimateOnScroll animation="fade-in-up">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-[family-name:var(--font-syne)] mb-8 leading-tight">
            Have a project in mind?
            <br />
            <span className="text-accent">Let&apos;s talk.</span>
          </h2>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in-up" delay={0.2}>
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            I&apos;m currently available for freelance projects and full-time opportunities. Let&apos;s create something
            amazing together.
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll animation="scale-in" delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="mailto:devloper.ds@gmail.com"
              className="group px-8 py-4 bg-accent text-black rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(190,242,100,0.4)] transition-all flex items-center gap-2"
            >
              Start a Project
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider text-sm hover:bg-accent transition-all"
            >
              View All Work
            </Link>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  )
}
