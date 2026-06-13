"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

/**
 * Infinite horizontal word band on the accent color.
 * Words are separated by spinning asterisks.
 */
export default function Marquee({
  words,
  speed = 50,
}: {
  words: string[];
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: speed,
      ease: "none",
      repeat: -1,
    });
    return () => { tween.kill(); };
  }, [speed]);

  const items = () =>
    words.map((word, i) => (
      <span key={i} className="flex items-center shrink-0">
        <span className="font-display italic text-[5vw] md:text-[3.4vw] tracking-tight text-paper mx-7">
          {word}
        </span>
        <svg
          viewBox="0 0 256 256"
          className="w-7 h-7 md:w-9 md:h-9 text-ink/30 shrink-0"
          fill="currentColor"
          style={{ animation: "spin 10s linear infinite" }}
          aria-hidden
        >
          <path d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z" />
        </svg>
      </span>
    ));

  return (
    <div className="overflow-hidden w-full py-7 md:py-9 bg-accent" aria-hidden>
      <div ref={trackRef} className="flex items-center w-max">
        <div className="flex items-center">{items()}</div>
        <div className="flex items-center">{items()}</div>
      </div>
    </div>
  );
}
