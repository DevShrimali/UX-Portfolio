"use client";
import { useState, useRef, useEffect } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";

const links = [
  { label: "Skills", href: "#what-i-do", section: "what-i-do" },
  { label: "Work", href: "#selected-work", section: "selected-work" },
  { label: "Experience", href: "#experience", section: "experience" },
  { label: "About Me", href: "#bio", section: "bio" },
  { label: "Contact", href: "#footer", section: "footer" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const overlayRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 50));

  // Active section via IntersectionObserver
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    links.forEach(({ section }) => {
      const el = document.getElementById(section);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(section); },
        { threshold: 0.25, rootMargin: "-80px 0px -20% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Smooth scroll to section
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };


  // Idle slow spin animation on logo
  useEffect(() => {
    const logo = logoRef.current;
    if (!logo) return;
    const tween = gsap.to(logo, {
      rotation: 360,
      duration: 12,
      ease: "none",
      repeat: -1,
      transformOrigin: "center center",
    });
    return () => { tween.kill(); };
  }, []);

  // Handle escape key & focus trapping
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
        triggerRef.current?.focus();
      }
    };

    if (menuOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        animate={{
          paddingTop: scrolled ? "1rem" : "1.5rem",
          paddingBottom: scrolled ? "1rem" : "1.5rem",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 inset-x-0 z-50 px-4 md:px-8 flex items-baseline justify-between bg-transparent"
      >
        <a
          href="#welcome"
          className="mix-blend-difference z-50 relative flex items-baseline gap-2 group"
          onMouseEnter={() => {
            if (logoRef.current) {
              gsap.to(logoRef.current, {
                rotation: "+=180",
                scale: 1.2,
                duration: 0.5,
                ease: "power2.out",
                transformOrigin: "center center",
              });
            }
          }}
          onMouseLeave={() => {
            if (logoRef.current) {
              gsap.to(logoRef.current, {
                scale: 1,
                duration: 0.4,
                ease: "power2.inOut",
              });
            }
          }}
        >
          <svg
            ref={logoRef}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 256"
            className="w-[14px] h-[14px] text-[#bef264] self-center"
            fill="currentColor"
          >
            <path d="M 192 0 C 227.346 0 256 28.654 256 64 C 256 99.346 227.346 128 192 128 C 227.346 128 256 156.654 256 192 C 256 227.346 227.346 256 192 256 C 156.654 256 128 227.346 128 192 C 128 227.346 99.346 256 64 256 C 28.654 256 0 227.346 0 192 C 0 156.654 28.654 128 64 128 C 28.654 128 0 99.346 0 64 C 0 28.654 28.654 0 64 0 C 99.346 0 128 28.654 128 64 C 128 28.654 156.654 0 192 0 Z M 128 100 C 112.536 100 100 112.536 100 128 C 100 143.464 112.536 156 128 156 C 143.464 156 156 143.464 156 128 C 156 112.536 143.464 100 128 100 Z" />
          </svg>
          <span className="text-white text-[11px] uppercase tracking-[0.2em] leading-none">
            <span className="font-normal">DEV</span>
            <span className="font-bold">UX.</span>
          </span>
        </a>
        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-3 z-50 relative">
          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-4 py-2">
            {links.map((link) => {
              const isActive = activeSection === link.section;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="relative flex items-center text-[11px] uppercase tracking-[0.2em] font-medium leading-none px-3 py-1 rounded-full hover:bg-white/5 transition-colors"
                >
                  <span className={isActive ? "text-[#bef264]" : "text-neutral-300 hover:text-white"}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </div>
          <a
            href="/Dev_Shrimali_March_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-200 cursor-pointer leading-none"
          >
            Resume
          </a>
        </div>

        {/* Mobile Nav Trigger */}
        <button
          ref={triggerRef}
          aria-label="Open navigation menu"
          aria-expanded={menuOpen}
          className="lg:hidden flex items-center justify-center min-w-[44px] min-h-[44px] text-white z-50 relative mix-blend-difference active:scale-95 transition-transform duration-150 -mt-2"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu size={28} />
        </button>
      </motion.nav>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={overlayRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex flex-col pt-24 px-6 pb-8"
            role="dialog"
            aria-modal="true"
          >
            <button
              aria-label="Close navigation menu"
              autoFocus
              className="absolute top-6 right-4 flex items-center justify-center min-w-[44px] min-h-[44px] text-white active:scale-95 transition-transform duration-150"
              onClick={() => {
                setMenuOpen(false);
                triggerRef.current?.focus();
              }}
            >
              <FiX size={32} />
            </button>

            <div className="flex flex-col items-center justify-center flex-1 gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { scrollTo(e, link.href); setMenuOpen(false); }}
                  className="flex items-center justify-center min-h-[48px] text-xl uppercase tracking-[0.2em] text-neutral-300 active:opacity-60 transition-opacity duration-150 w-full"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/Dev_Shrimali_March_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-8 flex items-center justify-center px-8 py-4 rounded-full border-2 border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.1)] text-white text-sm font-semibold uppercase tracking-[0.2em] active:scale-95 active:bg-white active:text-black transition-all duration-150 min-h-[48px]"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
