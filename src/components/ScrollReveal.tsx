"use client";
import gsap from "gsap";
import { useGsapReveal } from "@/hooks/useGsapReveal";

export default function ScrollReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const ref = useGsapReveal<HTMLDivElement>(
    (el) => {
      gsap.fromTo(
        el,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power3.out",
          delay,
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    },
    [delay]
  );

  return <div ref={ref}>{children}</div>;
}
