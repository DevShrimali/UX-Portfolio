"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function PageLoader({ onComplete }: { onComplete: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<SVGSVGElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Spin the star continuously
    const spin = gsap.to(starRef.current, {
      rotation: 360,
      duration: 2.5,
      ease: "none",
      repeat: -1,
      transformOrigin: "center center",
    });

    // Counter 0 → 100 over ~2.4s
    let frame = 0;
    const totalFrames = 90;
    const interval = setInterval(() => {
      frame++;
      setCount(Math.min(Math.round((frame / totalFrames) * 100), 100));
      if (frame >= totalFrames) clearInterval(interval);
    }, 26);

    const tl = gsap.timeline();

    // Fade brand in
    tl.fromTo(
      brandRef.current,
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );

    // Wait, then fade brand out and split
    tl.to(brandRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.4,
      ease: "power2.in",
      delay: 1.8,
    });

    tl.to(topRef.current, {
      yPercent: -100,
      duration: 0.85,
      ease: "power3.inOut",
    }, "-=0.05");

    tl.to(bottomRef.current, {
      yPercent: 100,
      duration: 0.85,
      ease: "power3.inOut",
    }, "<");

    tl.call(() => {
      spin.kill();
      clearInterval(interval);
      onComplete();
    });

    return () => {
      spin.kill();
      clearInterval(interval);
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={overlayRef} className="fixed inset-0 z-[999] pointer-events-none">
      {/* Top panel */}
      <div
        ref={topRef}
        className="absolute inset-x-0 top-0 h-1/2 bg-[#0a0a0a]"
      />

      {/* Bottom panel */}
      <div
        ref={bottomRef}
        className="absolute inset-x-0 bottom-0 h-1/2 bg-[#0a0a0a]"
      />

      {/* Centered brand — above both panels */}
      <div
        ref={brandRef}
        className="absolute inset-0 flex flex-col items-center justify-center opacity-0 z-10"
      >
        {/* Rotating star logo */}
        <svg
          ref={starRef}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="w-16 h-16 text-[#bef264] mb-6"
          fill="currentColor"
        >
          <path d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z" />
        </svg>

        {/* Wordmark */}
        <p className="text-white text-lg tracking-[0.4em] uppercase">
          <span className="font-light">DEV</span>
          <span className="font-bold">UX.</span>
        </p>
      </div>

      {/* Percentage — bottom left, big editorial font */}
      <div className="absolute bottom-8 left-8 z-10 pointer-events-none">
        <span
          className="text-white leading-none select-none"
          style={{ fontSize: "clamp(12rem, 36vw, 30rem)", fontWeight: 400, opacity: 0.12, letterSpacing: "-0.04em" }}
        >
          {String(count).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}
