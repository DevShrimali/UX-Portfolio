"use client";
import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

let activeLenis: Lenis | null = null;

/**
 * Scroll to a selector/element through Lenis when active, so anchor
 * navigation doesn't fight the smooth-scroll loop. Falls back to native.
 */
export function smoothScrollTo(target: string | HTMLElement, offset = 0) {
  if (activeLenis) {
    activeLenis.scrollTo(target, { offset, duration: 1.1 });
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    activeLenis = lenis;

    // Keep ScrollTrigger in sync with Lenis so reveals fire exactly on time
    lenis.on("scroll", ScrollTrigger.update);

    // Drive Lenis from GSAP's ticker — one rAF loop for everything
    const update = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(update);
      lenis.destroy();
      if (activeLenis === lenis) activeLenis = null;
    };
  }, []);

  return <>{children}</>;
}
