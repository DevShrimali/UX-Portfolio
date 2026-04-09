"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

type MarqueeItem =
  | { type: "text"; value: string }
  | { type: "image"; src: string; alt: string }
  | { type: "svg"; d: string };

export default function MarqueeStrip({
  items,
  speed = 60,
}: {
  items: MarqueeItem[];
  speed?: number;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReduced) return;

    const tween = gsap.to(track, {
      xPercent: -50,
      duration: speed,
      ease: "none",
      repeat: -1,
    });

    return () => {
      tween.kill();
    };
  }, [speed]);

  const renderItems = () =>
    items.map((item, i) => {
      if (item.type === "text") {
        return (
          <span
            key={i}
            className="text-[6vw] font-light tracking-tight text-white/60 mx-6"
          >
            {item.value}
          </span>
        );
      } else if (item.type === "image") {
        return (
          <img
            key={i}
            src={item.src}
            alt={item.alt}
            className="inline-block w-16 h-16 rounded-xl object-cover mx-4 opacity-80 align-middle"
          />
        );
      } else if (item.type === "svg") {
        return (
          <svg
            key={i}
            viewBox="0 0 256 256"
            className="inline-block w-16 h-16 mx-6 text-[#bef264] align-middle"
            fill="currentColor"
          >
            <path d={item.d} />
          </svg>
        );
      }
      return null;
    });

  return (
    <div className="overflow-hidden w-full py-8 border-t border-b border-white/5">
      <div
        ref={trackRef}
        className="flex items-center whitespace-nowrap"
        style={{ width: "max-content" }}
      >
        {/* Duplicate for seamless loop */}
        <div className="flex items-center">{renderItems()}</div>
        <div className="flex items-center">{renderItems()}</div>
      </div>
    </div>
  );
}
