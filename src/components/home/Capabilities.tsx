import SectionHeading from "@/components/ui/SectionHeading";
import { capabilities } from "@/data/profile";

/**
 * Sticky-stacking capability cards: each card pins below the previous one
 * while scrolling, building a layered deck. Pure CSS sticky — no JS.
 */
export default function Capabilities() {
  return (
    <section id="capabilities" className="bg-cream rounded-[2.5rem] mx-3 md:mx-6 py-24 md:py-32">
      <div className="max-w-[80rem] mx-auto px-5 md:px-10">
        <div className="max-w-2xl mb-16 md:mb-24">
          <SectionHeading
            eyebrow="Capabilities"
            title="What I bring to a product team"
            accentWord="bring"
          />
        </div>

        <div className="flex flex-col gap-6">
          {capabilities.map((cap, i) => (
            <div
              key={cap.num}
              className="sticky"
              style={{ top: `${6 + i * 1.25}rem` }}
            >
              <div className="bg-card border border-line rounded-[1.8rem] p-7 md:p-12 shadow-[0_-8px_30px_rgba(43,33,24,0.05)]">
                <div className="grid grid-cols-1 md:grid-cols-[5rem_1fr_auto] gap-5 md:gap-10 items-start">
                  <span className="font-mono text-sm text-accent">{cap.num}</span>

                  <div>
                    <h3 className="font-display text-2xl md:text-4xl text-ink mb-4">
                      {cap.title}
                    </h3>
                    <p className="text-muted text-sm md:text-base leading-relaxed max-w-xl">
                      {cap.desc}
                    </p>
                  </div>

                  <ul className="flex md:flex-col flex-wrap gap-2 md:gap-2.5 md:pt-1">
                    {cap.points.map((point) => (
                      <li
                        key={point}
                        className="text-[11px] uppercase tracking-[0.12em] text-muted border border-line rounded-full px-3.5 py-1.5 whitespace-nowrap"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
