"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type BadgeProps = {
  label: string;
  x: string;
  y: string;
  delay?: number;
};

export default function FloatingBadge({
  label,
  x,
  y,
  delay = 0,
}: BadgeProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) {
      gsap.set(el, { scale: 1, opacity: 1 });
      return;
    }

    // Entry animation
    gsap.fromTo(
      el,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)", delay }
    );

    // Floating loop
    gsap.to(el, {
      y: "-=10",
      duration: 2 + delay * 0.5,
      ease: "sine.inOut",
      yoyo: true,
      repeat: -1,
    });
  }, [delay]);

  return (
    <div
      ref={ref}
      className="absolute z-10 px-4 py-2 rounded-full border border-white/20 bg-black/60 backdrop-blur-sm text-xs font-medium text-white/80 whitespace-nowrap pointer-events-none"
      style={{ left: x, top: y }}
    >
      {label}
    </div>
  );
}
