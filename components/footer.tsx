"use client"

import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { AnimateOnScroll } from "./animate-on-scroll"
import { BehanceIcon } from "./behance-icon"
import { DribbbleIcon } from "./dribbble-icon"

export function Footer() {
  return (
    <footer
      id="contact"
      className="py-24 md:py-32 px-6 md:px-20 lg:px-40 bg-background relative overflow-hidden text-center border-t border-white/5"
    >
      {/* Background decorations form CTA */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Main Content from CTA */}
      <div className="relative z-10 max-w-4xl mx-auto mb-20">
        <AnimateOnScroll animation="fade-in-up">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold font-[family-name:var(--font-syne)] mb-8 leading-tight uppercase">
            LET&apos;S WORK
            <br />
            <span className="text-accent">TOGETHER</span>
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
              href="mailto:devuxstudio@gmail.com"
              className="group px-8 py-4 bg-accent text-black rounded-full font-bold uppercase tracking-wider text-sm hover:scale-105 hover:shadow-[0_0_30px_rgba(190,242,100,0.4)] transition-all flex items-center gap-2"
            >
              devuxstudio@gmail.com
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 bg-white text-black rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#bef264] transition-all"
            >
              View All Work
            </Link>
          </div>
        </AnimateOnScroll>
      </div>

      {/* Footer Links */}
      <div className="relative z-10">
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm text-gray-500 uppercase tracking-widest border-t border-white/10 pt-12">
          <a
            href="https://www.behance.net/dev-shrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <BehanceIcon className="w-4 h-4" /> Behance
          </a>
          <span className="text-gray-800 hidden md:inline">|</span>
          <a
            href="https://dribbble.com/dev-shrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors flex items-center gap-2"
          >
            <DribbbleIcon className="w-4 h-4" /> Dribbble
          </a>
          <span className="text-gray-800 hidden md:inline">|</span>
          <a
            href="https://www.linkedin.com/in/dev-shrimali/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-800 hidden md:inline">|</span>
          <span className="text-gray-500">Ahmedabad, India</span>
        </div>
        <div className="mt-12 text-xs text-gray-700">© 2025 Dev Shrimali. All rights reserved.</div>
      </div>
    </footer>
  )
}

