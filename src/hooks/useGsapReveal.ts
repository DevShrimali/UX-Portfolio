"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * Runs a GSAP setup function scoped to a container element.
 * Animations are created inside gsap.context(), so cleanup reverts ONLY this
 * component's tweens/triggers — never other components' ScrollTriggers.
 * Skips entirely when the user prefers reduced motion.
 */
export function useGsapReveal<T extends HTMLElement>(
  setup: (container: T) => void,
  deps: React.DependencyList = []
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => setup(container), container);
    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}
