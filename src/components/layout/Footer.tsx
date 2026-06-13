"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { LuCheck, LuCopy } from "react-icons/lu";
import Magnetic from "@/components/ui/Magnetic";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { identity, socials } from "@/data/profile";

function ScrambleEmail() {
  const emailRef = useRef<HTMLAnchorElement>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [copied, setCopied] = useState(false);
  const email = identity.email;

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const scramble = () => {
    const el = emailRef.current;
    if (!el || intervalRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let i = 0;
    intervalRef.current = setInterval(() => {
      el.textContent = email
        .split("")
        .map((_, idx) => (idx < i ? email[idx] : chars[Math.floor(Math.random() * chars.length)]))
        .join("");
      i += 1 / 3;
      if (i >= email.length) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        intervalRef.current = null;
        el.textContent = email;
      }
    }, 30);
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable — mailto link still works */
    }
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <a
        ref={emailRef}
        href={`mailto:${email}`}
        onMouseEnter={scramble}
        className="font-display text-2xl md:text-4xl text-paper border-b border-paper/30 pb-1.5 hover:text-accent hover:border-accent transition-colors"
      >
        {email}
      </a>
      <button
        onClick={copy}
        aria-label="Copy email address"
        className="flex items-center justify-center w-10 h-10 rounded-full border border-paper/20 text-paper/60 hover:text-accent hover:border-accent/50 active:scale-90 transition-all duration-200"
      >
        {copied ? <LuCheck size={15} className="text-accent" /> : <LuCopy size={15} />}
      </button>
      <span
        aria-live="polite"
        className={`text-[10px] uppercase tracking-[0.15em] text-accent transition-opacity duration-300 ${copied ? "opacity-100" : "opacity-0"}`}
      >
        Copied
      </span>
    </div>
  );
}

export default function Footer() {
  const innerRef = useGsapReveal<HTMLDivElement>((container) => {
    gsap.fromTo(
      container.querySelectorAll(".ft-item"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 80%", once: true },
      }
    );
  });

  return (
    <footer id="contact" className="relative bg-surface overflow-hidden">
      {/* Faint rotating star backdrop */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.05]"
        style={{ width: "min(70vw, 56rem)", height: "min(70vw, 56rem)" }}
        aria-hidden
      >
        <svg
          viewBox="0 0 256 256"
          className="w-full h-full text-accent"
          fill="currentColor"
          style={{ animation: "spin 40s linear infinite" }}
        >
          <path d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z" />
        </svg>
      </div>

      <div
        ref={innerRef}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 py-28 md:py-36 flex flex-col items-center text-center"
      >
        <p className="ft-item text-[11px] uppercase tracking-[0.22em] text-paper/50 mb-8">
          Have a complex problem worth designing for?
        </p>

        <h2 className="ft-item font-display text-[3rem] md:text-[6rem] leading-[0.98] tracking-tight text-paper mb-12">
          Let&apos;s make it{" "}
          <em className="italic text-accent">make sense.</em>
        </h2>

        <div className="ft-item mb-16">
          <ScrambleEmail />
        </div>

        {/* Socials */}
        <div className="ft-item flex flex-wrap items-center justify-center gap-3">
          {socials.map((s) => (
            <Magnetic key={s.label} strength={0.25}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex items-center justify-center w-12 h-12 rounded-full border border-paper/15 text-paper/60 hover:text-paper hover:border-accent hover:bg-accent transition-all duration-300"
              >
                <s.icon size={17} />
              </a>
            </Magnetic>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-10 border-t border-paper/10">
        <div className="max-w-[90rem] mx-auto px-5 md:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] uppercase tracking-[0.18em] text-paper/40">
          <p>© 2026 {identity.name}. All rights reserved.</p>
          <p>
            {identity.role} · {identity.location.split(",")[0]}
          </p>
        </div>
      </div>
    </footer>
  );
}
