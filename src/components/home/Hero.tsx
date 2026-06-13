"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "@/components/ui/Button";
import SkillOrbit from "./SkillOrbit";
import { smoothScrollTo } from "@/components/layout/SmoothScroll";
import { identity, stats } from "@/data/profile";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1, defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-line",
        { y: 100, opacity: 0, rotateX: -16 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1.1, stagger: 0.13 }
      ).fromTo(
        ".hero-fade",
        { y: 26, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.85, stagger: 0.09 },
        "-=0.7"
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative bg-paper overflow-hidden"
    >
      {/* Warm glow behind the orbit */}
      <div
        className="absolute top-0 right-0 w-[44rem] h-[44rem] -translate-y-1/4 translate-x-1/4 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(232,89,12,0.10), transparent)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-[90rem] mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-14 md:pb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[92svh]">
        {/* ── Statement ── */}
        <div style={{ perspective: "900px" }}>
          <p className="hero-fade text-[12px] uppercase tracking-[0.22em] text-muted mb-7 flex items-center gap-3">
            <span className="w-7 h-px bg-accent" />
            {identity.name} — {identity.role}
          </p>

          <h1 className="font-display text-ink tracking-tight leading-[1.0] text-[clamp(3rem,7.6vw,6.2rem)]">
            <span className="hero-line block">Complex</span>
            <span className="hero-line block">
              systems<em className="text-accent">.</em>
            </span>
            <span className="hero-line block">
              <em className="italic text-accent">Calm</em> interfaces<em className="text-accent">.</em>
            </span>
          </h1>

          <p className="hero-fade mt-8 max-w-md text-base md:text-lg text-muted leading-relaxed">
            {identity.yearsOfExperience} years of designing fintech, healthcare and SaaS
            products — from research and architecture to polished, shipped interfaces.
          </p>

          <div className="hero-fade mt-10 flex flex-wrap gap-4">
            <Button
              href="#work"
              magnetic
              arrow
              onClick={(e) => { e.preventDefault(); smoothScrollTo("#work"); }}
            >
              Explore case studies
            </Button>
            <Button
              href="#journey"
              variant="outline"
              onClick={(e) => { e.preventDefault(); smoothScrollTo("#journey"); }}
            >
              My journey
            </Button>
          </div>
        </div>

        {/* ── Skill orbit ── */}
        <div className="hero-fade relative flex justify-center lg:justify-end">
          <SkillOrbit className="w-full max-w-[34rem] lg:max-w-[40rem] h-auto" />
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div className="hero-fade relative z-10 border-t border-line">
        <div className="max-w-[90rem] mx-auto px-5 md:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-line">
          {stats.map((s) => (
            <div key={s.label} className="py-7 md:py-9 px-4 md:px-8 first:pl-0">
              <p className="font-display text-3xl md:text-5xl text-ink">
                {s.value.replace("+", "")}
                {s.value.includes("+") && <span className="text-accent">+</span>}
              </p>
              <p className="text-[11px] uppercase tracking-[0.16em] text-muted mt-1.5">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
