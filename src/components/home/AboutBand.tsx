"use client";
import gsap from "gsap";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ParallaxImage from "@/components/media/ParallaxImage";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { facts } from "@/data/profile";

/**
 * About section: word-by-word serif statement, portrait with parallax,
 * and a quick-facts column.
 */
export default function AboutBand() {
  const statementRef = useGsapReveal<HTMLDivElement>((container) => {
    gsap.fromTo(
      container.querySelectorAll(".about-word"),
      { opacity: 0.12 },
      {
        opacity: 1,
        stagger: 0.06,
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start: "top 78%",
          end: "top 30%",
          scrub: true,
        },
      }
    );
  });

  const statement =
    "I design clarity into complex systems — turning messy problem statements into products people genuinely enjoy using.";

  return (
    <section id="about" className="bg-paper py-24 md:py-36">
      <div className="max-w-[80rem] mx-auto px-5 md:px-10">
        {/* Scroll-scrubbed statement */}
        <div ref={statementRef} className="mb-20 md:mb-28">
          <p className="text-[11px] font-bold tracking-[0.22em] uppercase text-muted flex items-center gap-3 mb-8">
            <span className="w-7 h-px bg-accent" />
            About
          </p>
          <p className="font-display text-3xl md:text-5xl lg:text-[3.6rem] leading-[1.18] tracking-tight text-ink max-w-5xl">
            {statement.split(" ").map((word, i) => (
              <span key={i} className="about-word inline-block mr-[0.28em]">
                {word === "clarity" ? <em className="italic text-accent">{word}</em> : word}
              </span>
            ))}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-start">
          {/* Portrait */}
          <ScrollReveal>
            <div className="relative">
              <ParallaxImage
                src="/hero-bg.jpg"
                alt="Dev Shrimali at work"
                className="aspect-[4/3] rounded-[2rem] border border-line"
              />
              <span className="absolute -bottom-4 left-8 px-5 py-2.5 rounded-full bg-ink text-paper text-xs font-medium shadow-[0_12px_30px_rgba(43,33,24,0.25)] rotate-[-2deg]">
                Designing with empathy since 2019
              </span>
            </div>
          </ScrollReveal>

          {/* Facts + philosophy */}
          <div>
            <ScrollReveal delay={0.1}>
              <p className="text-muted text-base leading-relaxed mb-4">
                Outside of pixels and prototypes, I explore design philosophy,
                mentor junior designers, and stay curious about what makes great
                products resonate with people.
              </p>
              <p className="text-muted text-base leading-relaxed mb-12">
                I believe in intentional design — every decision, every
                interaction, every pixel should serve a purpose and bring
                clarity to complexity.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
                {facts.map((fact) => (
                  <div key={fact.label} className="border-t border-line py-5">
                    <dt className="text-[10px] uppercase tracking-[0.18em] text-accent mb-2">
                      {fact.label}
                    </dt>
                    <dd className="text-sm text-ink leading-relaxed">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
