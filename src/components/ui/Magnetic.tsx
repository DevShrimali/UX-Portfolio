"use client";
import { useRef, useCallback } from "react";
import gsap from "gsap";

/**
 * Wraps an element with a magnetic hover micro-interaction:
 * the child gently follows the cursor and springs back on leave.
 * No-op for touch devices and reduced-motion users.
 */
export default function Magnetic({
  children,
  strength = 0.35,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power3.out",
      });
    },
    [strength]
  );

  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    gsap.to(el, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.4)" });
  }, []);

  return (
    <div
      ref={ref}
      className={`inline-block ${className ?? ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  );
}
