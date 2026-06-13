"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import gsap from "gsap";
import { smoothScrollTo } from "@/components/layout/SmoothScroll";
import { identity } from "@/data/profile";

const NAV = [
  { label: "Work", href: "/#work", section: "work" },
  { label: "Capabilities", href: "/#capabilities", section: "capabilities" },
  { label: "Journey", href: "/#journey", section: "journey" },
  { label: "About", href: "/#about", section: "about" },
];

function Wordmark() {
  const starRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const star = starRef.current;
    if (!star) return;
    const tween = gsap.to(star, {
      rotation: 360,
      duration: 14,
      ease: "none",
      repeat: -1,
      transformOrigin: "center center",
    });
    return () => { tween.kill(); };
  }, []);

  return (
    <Link href="/" className="flex items-center gap-2.5 group" aria-label="Home">
      <svg
        ref={starRef}
        viewBox="0 0 256 256"
        className="w-[18px] h-[18px] text-accent transition-transform duration-300 group-hover:scale-125"
        fill="currentColor"
        aria-hidden
      >
        <path d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z" />
      </svg>
      <span className="font-display text-lg text-ink leading-none">
        Dev<em className="italic text-accent">.</em>
      </span>
    </Link>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const lastY = useRef(0);

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (y) => {
    setHidden(y > 120 && y > lastY.current);
    lastY.current = y;
  });

  // Body scroll lock + escape for the mobile sheet
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const onNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Same-page anchor: smooth-scroll through Lenis instead of jumping
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault();
      smoothScrollTo(href.slice(1));
    }
    setMenuOpen(false);
  };

  return (
    <>
      <motion.header
        animate={{ y: hidden && !menuOpen ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 inset-x-0 z-50 bg-paper/85 backdrop-blur-md border-b border-line"
      >
        <div className="max-w-[90rem] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <Wordmark />

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => onNavClick(e, item.href)}
                className="relative text-[12px] uppercase tracking-[0.16em] font-medium text-muted hover:text-ink transition-colors duration-200 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <a
              href={identity.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] uppercase tracking-[0.16em] font-semibold text-ink border-b-2 border-accent pb-0.5 hover:text-accent transition-colors duration-200"
            >
              Resume
              <FiArrowUpRight size={13} />
            </a>
          </nav>

          {/* Mobile trigger */}
          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="md:hidden flex items-center justify-center w-11 h-11 text-ink active:scale-90 transition-transform"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </motion.header>

      {/* Mobile sheet */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-paper flex flex-col"
            role="dialog"
            aria-modal="true"
          >
            <div className="h-16 px-5 flex items-center justify-between border-b border-line">
              <Wordmark />
              <button
                aria-label="Close menu"
                autoFocus
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center w-11 h-11 text-ink active:scale-90 transition-transform"
              >
                <FiX size={24} />
              </button>
            </div>
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {NAV.map((item, i) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => onNavClick(e, item.href)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.35 }}
                  className="flex items-baseline gap-4 py-4 border-b border-line group"
                >
                  <span className="font-mono text-[11px] text-accent">0{i + 1}</span>
                  <span className="font-display text-4xl text-ink group-active:text-accent">
                    {item.label}
                  </span>
                </motion.a>
              ))}
              <motion.a
                href={identity.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
                onClick={() => setMenuOpen(false)}
                className="mt-10 self-start inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ink text-paper text-[12px] font-bold uppercase tracking-[0.18em] active:bg-accent transition-colors"
              >
                Resume <FiArrowUpRight size={14} />
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
