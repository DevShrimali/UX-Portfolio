"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const wowRef = useRef<HTMLSpanElement>(null);
  const bottomLeftRef = useRef<HTMLDivElement>(null);
  const bottomRightRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<SVGSVGElement>(null);

  const wowText = "Empathize";

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced || !wowRef.current) return;

    const chars = wowRef.current.querySelectorAll(".wow-char");
    const tl = gsap.timeline();

    tl.fromTo(
      chars,
      { opacity: 0, x: -15, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.08,
        duration: 0.3,
        delay: 0.5,
        ease: "power2.out",
      }
    );

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    // Bottom text entrance
    const leftEls = bottomLeftRef.current?.children;
    const rightEls = bottomRightRef.current?.children;

    if (leftEls) {
      gsap.fromTo(
        Array.from(leftEls),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 1.0,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }

    if (rightEls) {
      gsap.fromTo(
        Array.from(rightEls),
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          delay: 1.2,
          duration: 1.2,
          ease: "power3.out",
        }
      );
    }
  }, []);

  // Idle star rotation
  useEffect(() => {
    const star = starRef.current;
    if (!star) return;
    const tween = gsap.to(star, {
      rotation: 360,
      duration: 8,
      ease: "none",
      repeat: -1,
      transformOrigin: "center center",
    });
    return () => { tween.kill(); };
  }, []);

  return (
    <section
      id="welcome"
      className="relative w-full min-h-[100svh] h-[100svh] overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-[1]">
        <img
          src="/bg.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 z-[2] bg-black/40" />

      {/* Bottom gradient */}
      <div className="absolute inset-0 z-[3] bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

      {/* Noise texture */}
      <div
        className="absolute inset-0 z-[5] opacity-[0.15] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(https://assets.codepen.io/7558/noise-002.png)",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Person image — overlay, visually centered */}
      <div className="absolute inset-0 z-[10] flex items-end justify-center pointer-events-none overflow-hidden pb-8 md:pb-0">
        <img
          src="/person.png"
          alt="Dev Shrimali"
          className="h-[65vh] sm:h-[75vh] md:h-[85vh] lg:h-[95vh] w-auto max-w-none object-contain object-bottom"
        />
      </div>

      {/* Hero heading — behind person */}
      <div
        className="absolute inset-0 z-[6] flex items-center pointer-events-none"
      >
        <div className="w-full uppercase relative -mt-[4vh] md:-mt-[8vh]">
          {/* Line 1: spread out, using clamp for typography */}
          <div className="flex justify-between items-baseline w-full px-4 sm:px-4 md:px-8">
            <span
              className="font-black text-white leading-[0.9] md:leading-[0.85] tracking-tighter break-keep whitespace-nowrap inline-flex items-center gap-[2vw]"
              style={{ fontSize: "clamp(2.5rem, 11.5vw, 12vw)" }}
            >
              Every
              <svg
                ref={starRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="none"
                className="inline-block text-[#bef264]"
                style={{ width: "clamp(1.8rem, 7vw, 8vw)", height: "clamp(1.8rem, 7vw, 8vw)" }}
              >
                <path d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z" fill="none" stroke="currentColor" strokeWidth="8" strokeLinejoin="round" />
              </svg>
            </span>
            <span
              className="font-black text-white leading-[0.9] md:leading-[0.85] tracking-tighter break-keep whitespace-nowrap"
              style={{ fontSize: "clamp(2.5rem, 11.5vw, 12vw)" }}
            >
              design.
            </span>
          </div>

          {/* Line 2: "Start / with" left */}
          <div className="flex items-end w-full px-4 sm:px-4 md:px-8 mt-[-1vw]">
            <span
              className="font-black text-white leading-[0.9] md:leading-[0.85] tracking-tighter break-keep"
              style={{ fontSize: "clamp(2.5rem, 11.5vw, 12vw)" }}
            >
              start<br />
              <span className="inline-block pl-[6vw] sm:pl-[8vw] md:pl-[12vw]">with</span>
            </span>
          </div>
        </div>
      </div>

      {/* "Wow" accent — absolute positioned for perfect placement */}
      <div className="absolute inset-0 z-[15] pointer-events-none overflow-hidden">
        <div className="absolute right-[5%] md:right-[5%] top-[68%] md:top-[60%] -translate-y-1/2 rotate-[-12deg] md:rotate-[-6deg]">
          <span
            ref={wowRef}
            className="inline-flex text-[18vw] sm:text-[15vw] md:text-[14vw] text-[#bef264] leading-[0.85] tracking-tight"
            style={{
              fontFamily: "var(--font-playball)",
              perspective: "600px",
            }}
          >
            {wowText.split("").map((char, i) => (
              <span
                key={i}
                className="wow-char inline-block opacity-0"
                style={{ transformStyle: "preserve-3d" }}
              >
                {char}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-0 inset-x-0 z-20 px-4 sm:px-6 md:px-8 pb-6 sm:pb-8 md:pb-12 flex flex-row justify-between items-end gap-2 md:gap-8">
        <div ref={bottomLeftRef} className="max-w-[45%]">
          <p className="text-[9px] sm:text-[10px] md:text-[12px] uppercase tracking-[0.25em] text-neutral-300">
            Based in Ahmedabad,<br className="sm:hidden" /> Gujarat, India
          </p>
        </div>
        <div ref={bottomRightRef} className="text-right">
          <div className="h-[1px] w-8 md:w-12 bg-white/30 mb-2 md:mb-4 ml-auto"></div>
          <p className="text-[11px] sm:text-xl md:text-3xl lg:text-5xl font-light">
            Senior UI/UX Designer
          </p>
          <p className="text-[11px] sm:text-xl md:text-3xl lg:text-5xl font-light text-neutral-400">
            Fintech, SaaS &amp; Healthcare
          </p>
        </div>
      </div>
    </section>
  );
}
