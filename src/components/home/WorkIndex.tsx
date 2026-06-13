"use client";
import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { featuredProjects, getYtId, ytThumb } from "@/data/projects";

function previewSrc(project: (typeof featuredProjects)[number]) {
  const ytId = getYtId(project.video);
  return ytId ? ytThumb(ytId) : project.image;
}

/**
 * Editorial index of featured projects: numbered serif rows with a
 * cursor-following image preview on desktop, inline thumbs on mobile.
 */
export default function WorkIndex() {
  const sectionRef = useRef<HTMLElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const moveX = useRef<((v: number) => void) | null>(null);
  const moveY = useRef<((v: number) => void) | null>(null);
  const [active, setActive] = useState<number | null>(null);

  const rowsRef = useGsapReveal<HTMLDivElement>((container) => {
    gsap.fromTo(
      container.querySelectorAll(".work-row"),
      { y: 44, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.09,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 82%", once: true },
      }
    );
  });

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    const section = sectionRef.current;
    const preview = previewRef.current;
    if (!section || !preview) return;
    if (!moveX.current) {
      moveX.current = gsap.quickTo(preview, "x", { duration: 0.45, ease: "power3.out" });
      moveY.current = gsap.quickTo(preview, "y", { duration: 0.45, ease: "power3.out" });
    }
    const rect = section.getBoundingClientRect();
    moveX.current(e.clientX - rect.left + 28);
    moveY.current?.(e.clientY - rect.top - 110);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-paper py-24 md:py-36"
      onMouseMove={onMouseMove}
    >
      <div className="max-w-[90rem] mx-auto px-5 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-20">
          <SectionHeading
            eyebrow="Selected work"
            title="Case studies"
            accentWord="studies"
          />
          <ScrollReveal delay={0.1}>
            <p className="text-muted max-w-xs text-sm leading-relaxed md:text-right md:pb-2">
              Six projects that show how I think — strategy, structure,
              interface, and outcome.
            </p>
          </ScrollReveal>
        </div>

        {/* Index rows */}
        <div ref={rowsRef} className="border-t border-line">
          {featuredProjects.map((project, i) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="work-row group grid grid-cols-[2.5rem_1fr_auto] md:grid-cols-[5rem_1fr_auto_3.5rem] items-center gap-4 md:gap-8 py-7 md:py-9 border-b border-line transition-colors duration-300 hover:bg-cream/70 -mx-4 px-4 rounded-2xl"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <span className="font-mono text-xs text-muted group-hover:text-accent transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="min-w-0 flex items-center gap-5">
                {/* Mobile-only thumb */}
                <span className="lg:hidden relative w-16 h-16 rounded-xl overflow-hidden border border-line shrink-0 bg-cream">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewSrc(project)}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-2xl md:text-4xl text-ink leading-snug truncate group-hover:translate-x-2 transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                    {project.title}
                  </span>
                  <span className="block text-sm text-muted mt-1 truncate">
                    {project.subtitle}
                  </span>
                </span>
              </div>

              <span className="hidden md:flex flex-col items-end gap-1 shrink-0">
                <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                  {project.category}
                </span>
                <span className="text-[11px] text-muted">{project.year}</span>
              </span>

              <span className="hidden md:flex w-12 h-12 rounded-full border border-line items-center justify-center text-ink group-hover:bg-accent group-hover:border-accent group-hover:text-paper transition-all duration-300 shrink-0">
                <FiArrowUpRight size={18} />
              </span>
            </Link>
          ))}
        </div>

        <ScrollReveal delay={0.15}>
          <div className="mt-14 flex justify-center">
            <Button href="/work" variant="dark" magnetic arrow>
              All 19 projects
            </Button>
          </div>
        </ScrollReveal>
      </div>

      {/* Cursor-following preview (desktop, mouse only) */}
      <div
        ref={previewRef}
        aria-hidden
        className={`hidden lg:block absolute top-0 left-0 w-[22rem] aspect-[16/11] rounded-2xl overflow-hidden border border-line shadow-[0_30px_60px_rgba(43,33,24,0.18)] pointer-events-none z-20 transition-opacity duration-300 ${
          active !== null ? "opacity-100" : "opacity-0"
        }`}
      >
        {featuredProjects.map((project, i) => (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            key={project.id}
            src={previewSrc(project)}
            alt=""
            loading="lazy"
            decoding="async"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              active === i ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
