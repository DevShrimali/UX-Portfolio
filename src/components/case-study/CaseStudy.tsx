"use client";
import { useState } from "react";
import Link from "next/link";
import { FiArrowLeft, FiArrowUpRight, FiExternalLink, FiLayers } from "react-icons/fi";
import { FaBehance, FaGooglePlay } from "react-icons/fa6";
import gsap from "gsap";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import Lightbox from "./Lightbox";
import VideoCover from "./VideoCover";
import { getRelated, getNext, logosMetadata, type Project } from "@/data/projects";

/* ─── Sticky meta sidebar ─── */
function MetaSidebar({ project }: { project: Project }) {
  const rows: { label: string; value: string }[] = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Category", value: project.categoryLabel },
    { label: "Tools", value: project.tools.join(", ") },
  ];

  return (
    <aside className="lg:sticky lg:top-24 h-max">
      <div className="bg-card border border-line rounded-[1.6rem] p-7 divide-y divide-line">
        {rows.map((row) => (
          <div key={row.label} className="py-4 first:pt-0 last:pb-0">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted/80 mb-1.5">{row.label}</p>
            <p className="text-sm font-medium text-ink leading-snug">{row.value}</p>
          </div>
        ))}
      </div>

      {/* External links */}
      <div className="mt-4 flex flex-col gap-3">
        {project.websiteUrl && (
          <a
            href={project.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-between gap-2 px-6 py-3.5 rounded-full bg-ink text-paper text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-accent transition-colors active:scale-95"
          >
            Live site <FiExternalLink size={14} />
          </a>
        )}
        {project.appStoreUrl && (
          <a
            href={project.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-between gap-2 px-6 py-3.5 rounded-full bg-[#1A73E8] text-white text-[11px] font-bold uppercase tracking-[0.14em] hover:bg-[#2083FF] transition-colors active:scale-95"
          >
            Play Store <FaGooglePlay size={13} />
          </a>
        )}
        {project.behanceUrl && (
          <a
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center justify-between gap-2 px-6 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.14em] transition-colors active:scale-95 ${
              project.behanceLabel
                ? "bg-card border border-line text-ink hover:bg-accent hover:text-paper hover:border-accent"
                : "bg-[#0057ff] text-white hover:bg-[#0046cc]"
            }`}
          >
            <span className="truncate">{project.behanceLabel || "Behance case study"}</span>
            {project.behanceLabel ? <FiLayers size={13} className="shrink-0" /> : <FaBehance size={13} className="shrink-0" />}
          </a>
        )}
      </div>
    </aside>
  );
}

/* ─── Numbered narrative block ─── */
function Chapter({
  n,
  kicker,
  title,
  children,
}: {
  n: string;
  kicker: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <ScrollReveal>
      <section className="grid md:grid-cols-[auto_1fr] gap-5 md:gap-10">
        <div className="flex md:flex-col items-center md:items-start gap-3">
          <span className="font-mono text-sm text-accent">{n}</span>
          <span className="hidden md:block w-px flex-1 bg-line" />
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted/80 mb-3">{kicker}</p>
          <h2 className="font-display text-3xl md:text-4xl tracking-tight text-ink mb-6">{title}</h2>
          {children}
        </div>
      </section>
    </ScrollReveal>
  );
}

function ResultStat({ text }: { text: string }) {
  const [head, ...rest] = text.split(" ");
  const isStat = /^\d/.test(head) || head.length <= 3;
  return (
    <div className="bg-card border border-line rounded-2xl p-5 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1">
      {isStat && rest.length ? (
        <>
          <p className="font-display text-3xl text-accent leading-none mb-1.5">{head}</p>
          <p className="text-[11px] uppercase tracking-[0.1em] text-muted">{rest.join(" ")}</p>
        </>
      ) : (
        <p className="text-sm text-ink font-medium leading-snug">{text}</p>
      )}
    </div>
  );
}

/* ─── Related / next ─── */
function NextProject({ next }: { next: Project }) {
  return (
    <Link href={`/work/${next.slug}`} className="group block bg-surface">
      <div className="max-w-[80rem] mx-auto px-5 md:px-10 py-20 md:py-28 flex items-center justify-between gap-8">
        <div className="min-w-0">
          <p className="text-[11px] uppercase tracking-[0.2em] text-paper/50 mb-4 group-hover:text-accent transition-colors">
            Next case study
          </p>
          <h2 className="font-display text-3xl md:text-6xl tracking-tight leading-[1.04] text-paper/80 group-hover:text-paper transition-colors truncate">
            {next.title}
          </h2>
          <p className="text-sm text-paper/40 mt-3">{next.subtitle}</p>
        </div>
        <span className="w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full border border-paper/20 flex items-center justify-center text-paper group-hover:bg-accent group-hover:border-accent group-hover:rotate-12 transition-all duration-300">
          <FiArrowUpRight size={26} />
        </span>
      </div>
    </Link>
  );
}

/* ═══════════════════════ MAIN ═══════════════════════ */
export default function CaseStudy({ project }: { project: Project }) {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const related = getRelated(project, 3);
  const next = getNext(project);
  const isLogoShowcase = project.slug === "logo-design-showcase";

  const researchInsights = project.research
    .split(". ")
    .filter(Boolean)
    .map((s) => s.trim().replace(/\.$/, ""));

  const galleryRef = useGsapReveal<HTMLDivElement>((container) => {
    gsap.fromTo(
      container.querySelectorAll(".gal-item"),
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.08,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 85%", once: true },
      }
    );
  });

  return (
    <main className="bg-paper text-ink">
      {/* ── Top bar ── */}
      <div className="sticky top-0 z-40 bg-paper/85 backdrop-blur-md border-b border-line">
        <div className="max-w-[80rem] mx-auto px-5 md:px-10 h-16 flex items-center justify-between">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-muted hover:text-ink transition-colors group"
          >
            <FiArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            All work
          </Link>
          <span className="text-[10px] uppercase tracking-[0.16em] text-muted/70">
            {isLogoShowcase ? "Special project" : "Case study"} · {String(project.id).padStart(2, "0")}
          </span>
        </div>
      </div>

      {/* ── Header ── */}
      <header className="max-w-[80rem] mx-auto px-5 md:px-10 pt-16 md:pt-24 pb-12 md:pb-16">
        <ScrollReveal>
          <div className="flex flex-wrap gap-2 mb-7">
            <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-accent bg-accent-soft border border-accent/20 px-3 py-1.5 rounded-full">
              {project.categoryLabel}
            </span>
            {project.tags
              .filter((t) => t.toLowerCase() !== project.category.toLowerCase())
              .map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] uppercase tracking-[0.1em] px-3 py-1.5 border border-line text-muted rounded-full"
                >
                  {tag}
                </span>
              ))}
          </div>
          <h1 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[1.02] tracking-tight text-ink max-w-5xl mb-5">
            {project.title}
          </h1>
          <p className="font-display italic text-xl md:text-3xl text-muted mb-7">{project.subtitle}</p>
          <p className="text-base md:text-lg text-muted leading-relaxed max-w-2xl">{project.description}</p>
        </ScrollReveal>
      </header>

      {/* ── Hero media ── */}
      <ScrollReveal>
        <div className="max-w-[80rem] mx-auto px-5 md:px-10 mb-16 md:mb-24">
          {project.video ? (
            <VideoCover videoUrl={project.video} title={project.title} />
          ) : (
            <div className="w-full rounded-[1.8rem] overflow-hidden border border-line bg-cream">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
            </div>
          )}
        </div>
      </ScrollReveal>

      {/* ── Body: narrative + sticky meta ── */}
      <div className="max-w-[80rem] mx-auto px-5 md:px-10 pb-24 md:pb-32">
        <div className="grid lg:grid-cols-[1fr_18rem] gap-12 lg:gap-20">
          {/* Narrative */}
          <div className="order-2 lg:order-1 flex flex-col gap-20 md:gap-28 max-w-2xl">
            <Chapter n="01" kicker="Problem & context" title="The challenge">
              <p className="text-base md:text-lg text-muted leading-[1.85]">{project.challenge}</p>
            </Chapter>

            <Chapter n="02" kicker="Role & responsibilities" title="What I owned">
              <p className="text-base md:text-lg text-muted leading-[1.85] mb-7">{project.responsibilities}</p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-line text-muted bg-card hover:border-accent/40 hover:text-accent transition-colors duration-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Chapter>

            <Chapter n="03" kicker="Research & insights" title="What I found">
              <div className="border-t border-line">
                {researchInsights.slice(0, 4).map((insight, i) => (
                  <div key={i} className="flex gap-4 py-5 border-b border-line">
                    <span className="font-mono text-[11px] text-accent shrink-0 mt-1">0{i + 1}</span>
                    <p className="text-sm md:text-base text-ink/85 leading-relaxed">{insight}</p>
                  </div>
                ))}
              </div>
            </Chapter>

            <Chapter n="04" kicker="Outcome & impact" title="The solution">
              <p className="text-base md:text-lg text-muted leading-[1.85] mb-10">{project.solution}</p>
              {project.results.length > 0 && (
                <div className="grid grid-cols-2 gap-3">
                  {project.results.map((r, i) => (
                    <ResultStat key={i} text={r} />
                  ))}
                </div>
              )}
            </Chapter>
          </div>

          {/* Sticky meta */}
          <div className="order-1 lg:order-2">
            <MetaSidebar project={project} />
          </div>
        </div>
      </div>

      {/* ── Gallery ── */}
      {project.gallery.length > 0 && (
        <div className="max-w-[80rem] mx-auto px-5 md:px-10 pb-24 md:pb-32">
          <div className="flex items-end justify-between mb-8 border-b border-line pb-5">
            <h2 className="font-display text-2xl md:text-3xl text-ink">
              {isLogoShowcase ? "The marks" : "Final screens"}
            </h2>
            <span className="text-[11px] uppercase tracking-[0.14em] text-muted/70">
              {project.gallery.length} {isLogoShowcase ? "logos" : "screens"} · click to expand
            </span>
          </div>

          <div
            ref={galleryRef}
            className={`grid gap-3 md:gap-4 ${
              isLogoShowcase ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" : "grid-cols-2 md:grid-cols-3"
            }`}
          >
            {project.gallery.map((img, i) => (
              <button
                key={img}
                onClick={() => setLightbox(i)}
                aria-label={`Open image ${i + 1}`}
                className="gal-item group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-cream cursor-zoom-in"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img}
                  alt={`${project.title} — ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full transition-transform duration-500 group-hover:scale-105 ${
                    isLogoShowcase ? "object-contain p-6" : "object-cover"
                  }`}
                />
                <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-[0.14em] text-paper bg-ink/70 backdrop-blur-md px-3 py-1.5 rounded-full">
                    View
                  </span>
                </span>
                {isLogoShowcase && logosMetadata[i] && (
                  <span className="absolute bottom-0 inset-x-0 p-3 text-left bg-gradient-to-t from-ink/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="block text-xs font-bold text-paper">{logosMetadata[i].name}</span>
                    <span className="block text-[9px] uppercase tracking-[0.1em] text-accent">{logosMetadata[i].category}</span>
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {lightbox !== null && (
        <Lightbox images={project.gallery} startIndex={lightbox} onClose={() => setLightbox(null)} />
      )}

      {/* ── Related ── */}
      {related.length > 0 && (
        <div className="max-w-[80rem] mx-auto px-5 md:px-10 pb-24 md:pb-32">
          <div className="flex items-end justify-between mb-12 border-t border-line pt-16">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted/80 mb-2">More work</p>
              <h2 className="font-display text-3xl md:text-4xl tracking-tight text-ink">Keep exploring</h2>
            </div>
            <Link href="/work" className="hidden md:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] text-muted hover:text-accent transition-colors">
              View all <FiArrowUpRight size={13} />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link key={rel.id} href={`/work/${rel.slug}`} className="group block">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-4 bg-cream border border-line">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={rel.image}
                    alt={rel.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                  />
                </div>
                <p className="text-[9px] uppercase tracking-[0.14em] text-accent mb-1">{rel.category}</p>
                <h3 className="font-display text-lg text-ink group-hover:text-accent transition-colors leading-snug">
                  {rel.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* ── Next ── */}
      <NextProject next={next} />
    </main>
  );
}
