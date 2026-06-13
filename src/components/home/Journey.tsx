"use client";
import gsap from "gsap";
import { LuGraduationCap } from "react-icons/lu";
import SectionHeading from "@/components/ui/SectionHeading";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { experience, education } from "@/data/profile";

/**
 * Career timeline along a central spine (alternating sides on desktop),
 * followed by a compact education & certification grid.
 */
export default function Journey() {
  const timelineRef = useGsapReveal<HTMLDivElement>((container) => {
    gsap.fromTo(
      container.querySelectorAll(".tl-entry"),
      { y: 36, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 0.85,
        ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 78%", once: true },
      }
    );
    gsap.fromTo(
      container.querySelector(".tl-spine"),
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1.4,
        ease: "power2.inOut",
        transformOrigin: "top center",
        scrollTrigger: { trigger: container, start: "top 78%", once: true },
      }
    );
  });

  const eduRef = useGsapReveal<HTMLDivElement>((container) => {
    gsap.fromTo(
      container.querySelectorAll(".edu-card"),
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.07,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 85%", once: true },
      }
    );
  });

  return (
    <section id="journey" className="bg-paper py-24 md:py-36">
      <div className="max-w-[80rem] mx-auto px-5 md:px-10">
        <div className="text-center mb-16 md:mb-24">
          <SectionHeading
            eyebrow="Journey"
            title="Seven years, five teams"
            accentWord="Seven years,"
            align="center"
          />
        </div>

        {/* ── Career spine ── */}
        <div ref={timelineRef} className="relative">
          {/* Central line */}
          <div className="tl-spine absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-line md:-translate-x-1/2" />

          <div className="flex flex-col gap-12 md:gap-16">
            {experience.map((exp, i) => {
              const left = i % 2 === 0;
              return (
                <div
                  key={`${exp.company}-${exp.dates}`}
                  className={`tl-entry relative grid md:grid-cols-2 gap-4 md:gap-16 pl-12 md:pl-0 ${
                    left ? "" : ""
                  }`}
                >
                  {/* Node dot */}
                  <span
                    className={`absolute left-5 md:left-1/2 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full border-[3px] border-paper z-10 ${
                      exp.current ? "bg-accent" : "bg-ink/30"
                    }`}
                  />
                  {exp.current && (
                    <span className="absolute left-5 md:left-1/2 top-2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-accent animate-ping opacity-50" />
                  )}

                  {/* Date side */}
                  <div
                    className={`md:flex md:items-start ${
                      left ? "md:justify-end md:pr-10 md:order-1" : "md:justify-start md:pl-10 md:order-2"
                    }`}
                  >
                    <p className="text-[12px] uppercase tracking-[0.18em] text-muted pt-1.5">
                      {exp.dates}
                      {exp.current && (
                        <span className="ml-3 text-[10px] font-bold text-accent bg-accent-soft border border-accent/20 px-2.5 py-1 rounded-full normal-case tracking-[0.1em]">
                          Now
                        </span>
                      )}
                    </p>
                  </div>

                  {/* Content side */}
                  <div
                    className={`${
                      left ? "md:order-2 md:pl-10" : "md:order-1 md:pr-10 md:text-right"
                    }`}
                  >
                    <h3 className="font-display text-2xl md:text-3xl text-ink leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-accent text-sm font-semibold mt-1.5">{exp.company}</p>
                    <p className="text-muted text-xs mt-1">{exp.location}</p>
                    <p className="text-muted/90 text-[13px] leading-relaxed mt-3 max-w-md md:inline-block">
                      {exp.skills}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── Education & certification ── */}
        <div ref={eduRef} className="mt-24 md:mt-32">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-muted flex items-center gap-3 mb-10">
            <LuGraduationCap size={15} className="text-accent" />
            Education & certification
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {education.map((edu) => (
              <div
                key={`${edu.course}-${edu.dates}`}
                className="edu-card group bg-card border border-line rounded-2xl p-6 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1"
              >
                <p className="text-[11px] text-muted tracking-wide mb-3">{edu.dates}</p>
                <h4 className="font-semibold text-ink text-[15px] leading-snug mb-1.5">
                  {edu.course}
                </h4>
                <p className="text-sm text-accent">{edu.institution}</p>
                {edu.details && (
                  <p className="text-[12px] text-muted leading-relaxed mt-3">{edu.details}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
