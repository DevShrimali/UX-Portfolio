"use client"

import { useState, useEffect } from "react"
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"
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
              href="https://dribbble.com/devshrimali"
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
            href="https://drive.google.com/file/d/13tq82Ju293V6cpKx9NS5kK8YQ0N5EcTU/view?usp=sharing"
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
              className="text-4xl md:text-6xl font-[family-name:var(--font-syne)] font-bold text-transparent hover:text-white transition-colors duration-300"
              style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}
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
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.behance.net/dev-shrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <BehanceIcon className="w-6 h-6" />
          </a>
          <a
            href="https://dribbble.com/devshrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <DribbbleIcon className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/DevShrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@dev-shrimali"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </>
  )
}
