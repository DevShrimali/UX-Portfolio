
"use client"

import { Linkedin, Mail, Youtube, Dribbble, Github, MessageCircle, ArrowUpRight, Copy, Check, LucideIcon } from "lucide-react"
import { AnimateOnScroll } from "./animate-on-scroll"
import { BehanceIcon } from "./behance-icon"
import { FigmaIcon } from "./figma-icon"
import { useState } from "react"
import { cn } from "@/lib/utils"

export function ConnectSection() {
  const [copied, setCopied] = useState(false)
  const email = "devloper.ds@gmail.com"

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-32 px-6 md:px-20 lg:px-40 bg-secondary dark:bg-[color-mix(in_oklab,var(--accent)_5%,transparent)] border-t border-border">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">06 / Connect</h3>
          <h2 className="text-5xl md:text-7xl font-[family-name:var(--font-syne)] font-bold uppercase leading-none">
            Get <br /> <span className="text-muted-foreground/30">In Touch</span>
          </h2>
        </div>
        <p className="md:max-w-xs text-lg text-muted-foreground font-medium">
          Whether you have a project in mind or just want to say hi, I'm always open to discussing new ideas and opportunities.
        </p>
      </div>

      <AnimateOnScroll animation="scale-in">
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-3 gap-4 h-auto md:h-[600px]">
          {/* Email - Primary Action (Large Square) */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 relative group overflow-hidden bg-primary text-primary-foreground rounded-[2rem] p-8 flex flex-col justify-between transition-all hover:scale-[1.02] duration-500 shadow-xl border border-white/10">
            <div className="absolute right-[-20px] top-[-20px] opacity-5 rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
              <Mail className="w-80 h-80" />
            </div>
            <div className="flex justify-between items-start z-10">
              <div className="bg-white/20 p-4 rounded-full backdrop-blur-sm">
                <Mail className="w-8 h-8" />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={copyEmail}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm flex items-center gap-2 text-sm font-medium"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? "Copied" : "Copy"}</span>
                </button>
                <a
                  href={`mailto:${email}`}
                  className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="z-10 mt-12 md:mt-0">
              <h4 className="text-3xl md:text-5xl font-[family-name:var(--font-syne)] font-bold mb-4">Ready to Scale?</h4>
              <a href={`mailto:${email}`} className="text-lg md:text-2xl opacity-90 hover:opacity-100 hover:underline decoration-2 underline-offset-4 break-all font-medium">
                {email}
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <SocialCard
            href="https://www.linkedin.com/in/dev-shrimali/"
            icon={Linkedin}
            label="LinkedIn"
            subLabel="Professional Network"
            color="bg-[#0077b5]"
            className="col-span-1 md:col-span-2"
          />

          {/* Behance */}
          <SocialCard
            href="https://www.behance.net/dev-shrimali"
            icon={BehanceIcon}
            label="Behance"
            subLabel="Portfolio"
            color="bg-[#1769ff]"
            className="col-span-1"
          />

          {/* WhatsApp */}
          <SocialCard
            href="https://wa.me/918758084842"
            icon={MessageCircle}
            label="WhatsApp"
            subLabel="Chat Now"
            color="bg-[#25D366]"
            className="col-span-1"
          />

          {/* YouTube */}
          <SocialCard
            href="https://www.youtube.com/@dev-shrimali"
            icon={Youtube}
            label="YouTube"
            subLabel="Video Content"
            color="bg-[#ff0000]"
            className="col-span-1"
          />

          {/* Figma */}
          <SocialCard
            href="https://www.figma.com/@itsdevshrimali"
            icon={FigmaIcon}
            label="Figma"
            subLabel="Design Files"
            color="bg-[#A259FF]" // Figma Purple
            className="col-span-1"
          />

          {/* GitHub */}
          <SocialCard
            href="https://github.com/DevShrimali"
            icon={Github}
            label="GitHub"
            subLabel="Code Repositories"
            color="bg-[#1a1a1a] dark:bg-[#333]"
            className="col-span-1"
          />

          {/* Dribbble */}
          <SocialCard
            href="https://dribbble.com/dev-shrimali"
            icon={Dribbble}
            label="Dribbble"
            subLabel="Design Shots"
            color="bg-[#ea4c89]"
            className="col-span-1"
          />
        </div>
      </AnimateOnScroll>
    </section>
  )
}

function SocialCard({
  href,
  icon: Icon,
  label,
  subLabel,
  color,
  className,
}: {
  href: string
  icon: React.ElementType
  label: string
  subLabel: string
  color: string
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "relative rounded-[2rem] p-6 md:p-8 flex flex-col justify-between group hover:scale-[1.02] transition-all duration-500 overflow-hidden text-white shadow-lg",
        color,
        className
      )}
    >
      {/* Background Icon Watermark */}
      <div className="absolute right-[-20px] top-[-20px] opacity-10 rotate-12 group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
        <Icon className="w-40 h-40 md:w-64 md:h-64" />
      </div>

      <div className="flex justify-between items-start z-10">
        <Icon className="w-8 h-8" />
        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm group-hover:bg-white/30 transition-colors">
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>

      <div className="z-10 mt-12 md:mt-0">
        <h4 className="text-xl md:text-2xl font-bold font-[family-name:var(--font-syne)] mb-1">{label}</h4>
        <span className="text-white/80 text-xs md:text-sm font-medium tracking-wide uppercase">{subLabel}</span>
      </div>
    </a>
  )
}
