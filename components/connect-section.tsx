"use client"

import { Linkedin, ImageIcon, Mail, Youtube, Dribbble, Phone } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"

export function ConnectSection() {
  return (
    <section className="py-24 px-6 md:px-20 lg:px-40 bg-background border-t border-white/5">
      <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-16">05 / Connect</h3>

      <AnimateOnScroll animation="scale-in">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <a
            href="https://www.linkedin.com/in/dev-shrimali/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-card border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-[#0077b5] hover:bg-[#0077b5]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Linkedin className="w-5 h-5 text-gray-300 group-hover:text-[#0077b5]" />
            </div>
            <span className="font-bold text-lg">LinkedIn</span>
          </a>

          <a
            href="https://www.behance.net/dev-shrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-card border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-[#1769ff] hover:bg-[#1769ff]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <ImageIcon className="w-5 h-5 text-gray-300 group-hover:text-[#1769ff]" />
            </div>
            <span className="font-bold text-lg">Behance</span>
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-card border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-[#ff0000] hover:bg-[#ff0000]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Youtube className="w-5 h-5 text-gray-300 group-hover:text-[#ff0000]" />
            </div>
            <span className="font-bold text-lg">YouTube</span>
          </a>

          <a
            href="https://dribbble.com/dev-shrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 bg-card border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-[#ea4c89] hover:bg-[#ea4c89]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Dribbble className="w-5 h-5 text-gray-300 group-hover:text-[#ea4c89]" />
            </div>
            <span className="font-bold text-lg">Dribbble</span>
          </a>

          <a
            href="mailto:devuxstudio@gmail.com"
            className="p-8 bg-card border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-[#ea4335] hover:bg-[#ea4335]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-gray-300 group-hover:text-[#ea4335]" />
            </div>
            <span className="font-bold text-lg">Email</span>
          </a>

          <a
            href="tel:+919876543210"
            className="p-8 bg-card border border-white/5 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-[#34c759] hover:bg-[#34c759]/10 transition-all duration-300 group"
          >
            <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <Phone className="w-5 h-5 text-gray-300 group-hover:text-[#34c759]" />
            </div>
            <span className="font-bold text-lg">Call</span>
          </a>
        </div>
      </AnimateOnScroll>
    </section>
  )
}
