"use client";
import { useCallback, useRef } from "react";

export default function useMouseTilt(intensity: number = 12) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.transform = `perspective(800px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(8px)`;
      el.style.transition = "transform 0.1s ease-out";
    },
    [intensity]
  );

  const handleMouseLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform =
      "perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
    el.style.transition = "transform 0.6s ease-out";
  }, []);

  return { ref, handleMouseMove, handleMouseLeave };
}
