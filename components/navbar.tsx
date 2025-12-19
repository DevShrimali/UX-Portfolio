"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Menu, X, Linkedin, Github, Youtube, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import { BehanceIcon } from "./behance-icon"
import { DribbbleIcon } from "./dribbble-icon"

import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Skills" },
  { href: "/#process", label: "Process" },
  { href: "/work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Connect" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const menuAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    menuAudioRef.current = new Audio("/woosh.mp3")
    menuAudioRef.current.volume = 0.5

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"

    // Play sound directly
    try {
      const audio = new Audio("/woosh.mp3")
      audio.volume = 0.5
      audio.play().catch((e) => console.error("Audio play failed:", e))
    } catch (error) {
      console.error("Audio initialization failed:", error)
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 w-full px-6 py-6 md:px-12 flex justify-between items-center z-50 transition-all duration-300",
          isScrolled && "nav-scrolled",
        )}
      >
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter font-[family-name:var(--font-syne)] z-50 text-foreground hover:tracking-widest transition-all duration-300"
        >
          DEV.
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-12 text-sm uppercase tracking-widest font-medium text-foreground">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-muted-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4 z-50">
          {/* Social Icons - Added Dribbble icon */}
          <div className="hidden sm:flex gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/dev-shrimali/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-50 transition-opacity"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.behance.net/dev-shrimali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-50 transition-opacity"
            >
              <BehanceIcon className="w-5 h-5" />
            </a>
            <a
              href="https://dribbble.com/dev-shrimali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-50 transition-opacity"
            >
              <DribbbleIcon className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/DevShrimali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-50 transition-opacity"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/@dev-shrimali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:opacity-50 transition-opacity"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <ThemeToggle />

          <Link
            href="/document/Dev-UX-Designer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden xl:inline-flex items-center gap-2 text-xs font-bold border border-foreground/20 px-6 py-3 rounded-full hover:bg-foreground hover:text-background transition-all uppercase tracking-widest text-foreground"
          >
            <Download className="w-4 h-4" />
            Resume
          </Link>



          {/* Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-foreground focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-out",
          isMenuOpen ? "translate-y-0" : "-translate-y-full",
        )}
      >
        {/* Background Noise */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}
        />

        <nav className="flex flex-col items-center gap-8 text-center relative z-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="text-4xl md:text-6xl font-[family-name:var(--font-syne)] font-bold text-transparent hover:text-foreground transition-colors duration-300 mobile-menu-link"
              style={{ WebkitTextStroke: "1px var(--foreground)" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            onClick={closeMenu}
            className="text-4xl md:text-6xl font-[family-name:var(--font-syne)] font-bold text-accent mt-8"
          >
            Contact Me
          </Link>
        </nav>

        <div className="flex gap-8 mt-16 sm:hidden">
          <a
            href="https://www.linkedin.com/in/dev-shrimali/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.behance.net/dev-shrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <BehanceIcon className="w-6 h-6" />
          </a>
          <a
            href="https://dribbble.com/dev-shrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <DribbbleIcon className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/DevShrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@dev-shrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  )
}
