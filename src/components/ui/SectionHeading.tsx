import ScrollReveal from "./ScrollReveal";

/**
 * Standard section opener: small uppercase eyebrow with an accent tick,
 * followed by a large serif title. `accentWord` is rendered in italic orange.
 */
export default function SectionHeading({
  eyebrow,
  title,
  accentWord,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  accentWord?: string;
  align?: "left" | "center";
}) {
  const parts = accentWord ? title.split(accentWord) : [title];

  return (
    <ScrollReveal>
      <div className={align === "center" ? "text-center" : ""}>
        <p
          className={`text-[11px] font-bold tracking-[0.22em] uppercase text-muted flex items-center gap-3 mb-5 ${
            align === "center" ? "justify-center" : ""
          }`}
        >
          <span className="w-7 h-px bg-accent inline-block" />
          {eyebrow}
          {align === "center" && <span className="w-7 h-px bg-accent inline-block" />}
        </p>
        <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.05] text-ink">
          {accentWord ? (
            <>
              {parts[0]}
              <em className="italic text-accent">{accentWord}</em>
              {parts[1]}
            </>
          ) : (
            title
          )}
        </h2>
      </div>
    </ScrollReveal>
  );
}
