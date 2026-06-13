"use client";
import gsap from "gsap";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function ParallaxImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const containerRef = useGsapReveal<HTMLDivElement>((container) => {
    const img = container.querySelector("img");
    if (!img) return;
    gsap.fromTo(
      img,
      { yPercent: -15 },
      {
        yPercent: 15,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  });

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="w-full h-[130%] object-cover absolute top-0 left-0"
        style={{ willChange: "transform" }}
      />
    </div>
  );
}
