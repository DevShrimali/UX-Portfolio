"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import {
  FiArrowLeft,
  FiArrowRight,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiLayers,
} from "react-icons/fi";
import { FaBehance, FaGooglePlay } from "react-icons/fa6";
import ScrollReveal from "@/components/ScrollReveal";
import {
  getProject,
  getRelated,
  getNext,
  getYtId,
  ytThumb,
  logosMetadata,
  type Project,
} from "@/data/projects";

/* ─── SMALL BUILDING BLOCKS ─── */

function SectionLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-4 mb-8">
      <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-accent shrink-0">{n}</span>
      <div className="h-px bg-white/10 flex-1" />
      <span className="text-[10px] uppercase tracking-[0.15em] text-neutral-600 shrink-0">{title}</span>
    </div>
  );
}

function SkillPill({ label }: { label: string }) {
  return (
    <span className="text-[10px] uppercase tracking-[0.12em] px-3 py-1.5 rounded-full border border-white/10 text-neutral-400 bg-white/[0.03] transition-colors duration-300 hover:border-accent/40 hover:text-accent cursor-default">
      {label}
    </span>
  );
}

function InsightCard({ text, i }: { text: string; i: number }) {
  return (
    <div className="group flex gap-4 py-5 border-b border-white/5 last:border-0 transition-colors duration-300 hover:bg-white/[0.02] -mx-3 px-3 rounded-lg">
      <span className="text-[10px] font-mono text-accent shrink-0 mt-0.5">0{i + 1}</span>
      <p className="text-sm text-neutral-300 leading-relaxed">{text}</p>
    </div>
  );
}

function ResultStat({ text }: { text: string }) {
  const words = text.split(" ");
  const stat = words[0];
  const label = words.slice(1).join(" ");
  const isStat = /^\d/.test(stat) || stat.length <= 3;

  return (
    <div className="border border-white/8 rounded-xl p-5 bg-white/[0.02] transition-all duration-300 hover:border-accent/30 hover:-translate-y-0.5">
      {isStat && label ? (
        <>
          <p className="text-xl font-bold text-accent leading-none mb-1">{stat}</p>
          <p className="text-[10px] uppercase tracking-[0.1em] text-neutral-500">{label}</p>
        </>
      ) : (
        <p className="text-sm text-neutral-300 font-medium leading-snug">{text}</p>
      )}
    </div>
  );
}

/* ─── LIGHTBOX ─── */
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    // Lock background scroll while the lightbox is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-5 right-5 text-white/50 hover:text-white transition-colors z-10 p-2"
      >
        <FiX size={22} />
      </button>

      <p className="absolute top-5 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </p>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous image"
          className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
        >
          <FiChevronLeft size={28} />
        </button>
      )}

      <div
        className="max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={`Gallery image ${current + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      </div>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next image"
          className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors p-3 rounded-full hover:bg-white/10"
        >
          <FiChevronRight size={28} />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              aria-label={`Go to image ${i + 1}`}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                i === current ? "bg-accent w-4" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── VIDEO COVER (click-to-play) ─── */
function VideoCover({ videoUrl, title }: { videoUrl: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYtId(videoUrl) ?? "";
  const thumbnail = ytThumb(videoId);

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden border border-white/8 bg-surface mb-12 group">
      {playing ? (
        <iframe
          src={`${videoUrl}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      ) : (
        <>
          <img
            src={thumbnail}
            alt={`${title} video thumbnail`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center group-hover:bg-accent/20 group-hover:border-accent/40 transition-all duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-8 md:h-8 fill-white ml-1" aria-hidden>
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </button>
          <div className="absolute bottom-4 left-4">
            <span className="text-[9px] uppercase tracking-[0.15em] text-white/40">Design Walkthrough</span>
          </div>
        </>
      )}
    </div>
  );
}

/* ─── META GRID ─── */
function MetaGrid({ project }: { project: Project }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 border border-white/8 rounded-2xl divide-x divide-y md:divide-y-0 divide-white/8 mb-20">
      {[
        { label: "Role", value: project.role },
        { label: "Year", value: project.year },
        { label: "Tools", value: project.tools.join(", ") },
        { label: "Category", value: project.categoryLabel },
      ].map(({ label, value }) => (
        <div key={label} className="p-6">
          <p className="text-[9px] uppercase tracking-[0.2em] text-neutral-600 mb-2">{label}</p>
          <p className="text-sm font-medium text-white leading-snug">{value}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── NEXT PROJECT BANNER ─── */
function NextProjectBanner({ next }: { next: Project }) {
  return (
    <Link
      href={`/work/${next.slug}`}
      className="group block border-t border-white/8 mt-8"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-24 flex items-center justify-between gap-8">
        <div className="min-w-0">
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-4 group-hover:text-accent transition-colors duration-300">
            Next case study
          </p>
          <h2 className="text-3xl md:text-6xl font-black tracking-tight leading-[1.05] text-white/80 group-hover:text-white transition-colors duration-300 truncate">
            {next.title}
          </h2>
          <p className="text-sm text-neutral-500 mt-3">{next.subtitle}</p>
        </div>
        <div className="w-14 h-14 md:w-20 md:h-20 shrink-0 rounded-full border border-white/15 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-all duration-300">
          <FiArrowRight
            size={24}
            className="text-white group-hover:text-black group-hover:translate-x-0.5 transition-all duration-300"
          />
        </div>
      </div>
    </Link>
  );
}

/* ─── RELATED PROJECTS ─── */
function RelatedProjects({ related }: { related: Project[] }) {
  if (related.length === 0) return null;
  return (
    <div className="border-t border-white/8 pt-20 pb-28">
      <div className="flex items-end justify-between mb-12">
        <div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 mb-2">More work</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Keep Exploring</h2>
        </div>
        <Link
          href="/work"
          className="text-[11px] uppercase tracking-[0.15em] text-neutral-500 hover:text-accent transition-colors hidden md:block"
        >
          View all →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {related.map((rel) => {
          const ytId = rel.video ? getYtId(rel.video) : null;
          const thumb = ytId
            ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
            : rel.image;
          return (
            <Link key={rel.id} href={`/work/${rel.slug}`} className="group block">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl mb-4 bg-neutral-900 border border-white/6">
                <img
                  src={thumb}
                  alt={rel.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-black/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                    View Case
                  </span>
                </div>
              </div>
              <p className="text-[9px] uppercase tracking-[0.15em] text-accent mb-1">{rel.category}</p>
              <h3 className="text-base font-bold tracking-tight group-hover:text-accent transition-colors duration-300 leading-snug">
                {rel.title}
              </h3>
              <p className="text-xs text-neutral-600 mt-1">{rel.subtitle}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ─── STICKY SUBNAV ─── */
function Subnav({ project, special }: { project: Project; special?: boolean }) {
  return (
    <div className="sticky top-0 z-40 bg-surface/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform" size={13} />
          Back to Work
        </Link>
        <span className={`text-[10px] uppercase tracking-[0.15em] ${special ? "text-accent" : "text-neutral-600"}`}>
          {special ? "Special Project" : "Case Study"} · {String(project.id).padStart(2, "0")}
        </span>
      </div>
    </div>
  );
}

/* ─── FOOTER BAR ─── */
function FooterBar() {
  return (
    <div className="border-t border-white/5 px-6 md:px-12 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors group"
        >
          <FiArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform" />
          Back to Work
        </Link>
        <p className="text-[11px] uppercase tracking-widest text-neutral-700">© 2026 Dev Shrimali</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════ PAGE ═══════════════════════════ */

export default function CaseStudyClient() {
  const { slug } = useParams();
  const project = getProject(String(slug));
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  if (!project) {
    return (
      <main className="min-h-screen bg-surface text-white flex flex-col items-center justify-center gap-4">
        <p className="text-[11px] uppercase tracking-widest text-accent">404</p>
        <h1 className="text-4xl font-bold">Case study not found</h1>
        <Link href="/work" className="text-sm text-neutral-400 hover:text-white underline underline-offset-4">
          ← Back to work
        </Link>
      </main>
    );
  }

  const related = getRelated(project);
  const next = getNext(project);

  /* ── Logo showcase: special layout ── */
  if (project.slug === "logo-design-showcase") {
    return (
      <main className="min-h-screen bg-surface text-white">
        <Subnav project={project} special />

        <article className="max-w-6xl mx-auto px-6 md:px-12">
          <header className="pt-20 pb-12 md:pt-32 md:pb-16 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-6">
              {project.title}
            </h1>
            <p className="text-lg md:text-xl text-neutral-400 font-light mb-8 max-w-3xl mx-auto leading-relaxed">
              {project.description}
            </p>
          </header>

          {/* Logo grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {logosMetadata.map((logo, i) => (
              <button
                key={logo.name}
                onClick={() => setLightboxIndex(i)}
                aria-label={`View ${logo.name} logo`}
                className="relative border border-white/10 rounded-2xl overflow-hidden aspect-[4/3] w-full flex items-center justify-center bg-neutral-900 group hover:border-accent/45 hover:shadow-[0_12px_30px_rgba(190,242,100,0.05)] cursor-zoom-in transition-all duration-300 text-left"
              >
                <img
                  src={logo.file}
                  alt={`${logo.name} — ${logo.category}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                {/* Hover info overlay */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <p className="text-sm font-bold text-white">{logo.name}</p>
                  <p className="text-[10px] uppercase tracking-[0.12em] text-accent">{logo.category}</p>
                </div>
              </button>
            ))}
          </div>

          {lightboxIndex !== null && (
            <Lightbox
              images={project.gallery}
              startIndex={lightboxIndex}
              onClose={() => setLightboxIndex(null)}
            />
          )}

          <MetaGrid project={project} />

          <div className="max-w-3xl mx-auto space-y-24 mb-32">
            <ScrollReveal>
              <section>
                <SectionLabel n="01" title="Philosophy & Approach" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Visual Clarity & Meaning</h2>
                <p className="text-base md:text-lg text-neutral-400 leading-[1.8] mb-6">
                  Logo design is the distillation of a brand&apos;s essence into a singular, memorable graphic mark.
                  Every curve, typographic angle, and color choice carries conceptual weight. My approach emphasizes
                  geometric precision, functional versatility, and concept-driven storytelling.
                </p>
                <p className="text-base md:text-lg text-neutral-400 leading-[1.8]">
                  Whether designing a monogram like Yowza or structural layouts like Vishvashetra, the target is
                  always to build identities that remain highly legible at 16px on a mobile screen and visually
                  striking on large-scale signage.
                </p>
              </section>
            </ScrollReveal>

            <ScrollReveal>
              <section>
                <SectionLabel n="02" title="Responsive Adaptability" />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">The Grid & Geometry</h2>
                <p className="text-base md:text-lg text-neutral-400 leading-[1.8] mb-6">
                  A premium logo should adapt seamlessly to any medium. During the design process, each mark is
                  refined using precise vector grids to ensure proportional integrity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <div className="border border-white/5 rounded-xl p-6 bg-white/[0.01]">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">01. Scalability</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Ensuring details aren&apos;t lost when scaled down. Testing marks as favicons, app icons, and
                      horizontal header structures.
                    </p>
                  </div>
                  <div className="border border-white/5 rounded-xl p-6 bg-white/[0.01]">
                    <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-2">02. Contrast Testing</h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      Validating designs in high-contrast formats. Ensuring the mark works perfectly in pure black
                      and white before introducing color palettes.
                    </p>
                  </div>
                </div>
              </section>
            </ScrollReveal>
          </div>

          <RelatedProjects related={related} />
        </article>

        <NextProjectBanner next={next} />
        <FooterBar />
      </main>
    );
  }

  /* ── Standard case study ── */
  const researchInsights = project.research
    .split(". ")
    .filter(Boolean)
    .map((s) => s.trim().replace(/\.$/, ""));

  return (
    <main className="min-h-screen bg-surface text-white">
      <Subnav project={project} />

      <article className="max-w-6xl mx-auto px-6 md:px-12">
        {/* ════════ HEADER ════════ */}
        <header className="pt-20 pb-10 md:pt-32 md:pb-14">
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-accent bg-accent/8 border border-accent/20 px-3 py-1 rounded-full">
              {project.categoryLabel}
            </span>
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[9px] uppercase tracking-[0.1em] px-2.5 py-1 border border-white/10 text-neutral-500 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.02] mb-4 max-w-4xl">
            {project.title}
          </h1>
          <p className="text-lg md:text-2xl text-neutral-500 font-light mb-6">{project.subtitle}</p>
          <p className="text-base text-neutral-400 leading-relaxed max-w-2xl mb-10">{project.description}</p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            {project.websiteUrl && (
              <a
                href={project.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-accent transition-all duration-300 active:scale-95"
              >
                <FiExternalLink size={13} /> Live Site
              </a>
            )}
            {project.appStoreUrl && (
              <a
                href={project.appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1A73E8] text-white text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#2083FF] transition-all duration-300 active:scale-95"
              >
                <FaGooglePlay size={13} /> Get it on Play Store
              </a>
            )}
            {project.behanceUrl && (
              <a
                href={project.behanceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] transition-all duration-300 active:scale-95 ${
                  project.behanceLabel
                    ? "bg-neutral-900 border border-white/20 text-white hover:bg-accent hover:text-black hover:border-accent"
                    : "bg-[#0057ff] text-white hover:bg-[#0046cc]"
                }`}
              >
                {project.behanceLabel ? (
                  <FiLayers size={13} className="shrink-0" />
                ) : (
                  <FaBehance size={13} className="shrink-0" />
                )}
                <span className="truncate max-w-[200px]">{project.behanceLabel || "Behance Case Study"}</span>
              </a>
            )}
          </div>
        </header>

        {/* ════════ HERO MEDIA ════════ */}
        {project.video ? (
          <VideoCover videoUrl={project.video} title={project.title} />
        ) : (
          <div className="w-full rounded-2xl overflow-hidden border border-white/8 mb-12">
            <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* ════════ META GRID ════════ */}
        <MetaGrid project={project} />

        {/* ════════ NARRATIVE ════════ */}
        <div className="max-w-3xl mx-auto space-y-24 md:space-y-28 mb-24">
          {/* 01 — Challenge */}
          <ScrollReveal>
            <section>
              <SectionLabel n="01" title="Problem & Context" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">The Challenge</h2>
              <p className="text-base md:text-lg text-neutral-400 leading-[1.8]">{project.challenge}</p>
            </section>
          </ScrollReveal>

          {/* 02 — Role */}
          <ScrollReveal>
            <section>
              <SectionLabel n="02" title="Role & Responsibilities" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">My Role</h2>
              <p className="text-base md:text-lg text-neutral-400 leading-[1.8] mb-8">
                {project.responsibilities}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.skills.map((s) => (
                  <SkillPill key={s} label={s} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* 03 — Research */}
          <ScrollReveal>
            <section>
              <SectionLabel n="03" title="Research & Insights" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">What I Found</h2>
              <div className="border-t border-white/8">
                {researchInsights.slice(0, 4).map((insight, i) => (
                  <InsightCard key={i} text={insight} i={i} />
                ))}
              </div>
            </section>
          </ScrollReveal>

          {/* 04 — Solution */}
          <ScrollReveal>
            <section>
              <SectionLabel n="04" title="Final Solution & Impact" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">The Solution</h2>
              <p className="text-base md:text-lg text-neutral-400 leading-[1.8] mb-12">{project.solution}</p>

              {project.results.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {project.results.map((r, i) => (
                    <ResultStat key={i} text={r} />
                  ))}
                </div>
              )}
            </section>
          </ScrollReveal>
        </div>

        {/* ════════ GALLERY — visual proof after the story ════════ */}
        {project.gallery.length > 0 && (
          <ScrollReveal>
            <div className="mb-24">
              <div className="flex items-center justify-between mb-6 border-b border-white/8 pb-4">
                <p className="text-[10px] uppercase tracking-[0.2em] text-neutral-600">Final Screens</p>
                <span className="text-[10px] text-neutral-700">
                  {project.gallery.length} screens — click to expand
                </span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {project.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setLightboxIndex(i)}
                    aria-label={`Open screen ${i + 1} in gallery`}
                    className="relative group aspect-[4/3] overflow-hidden rounded-xl border border-white/8 bg-neutral-900 cursor-zoom-in"
                  >
                    <img
                      src={img}
                      alt={`${project.title} — Screen ${String(i + 1).padStart(2, "0")}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-bold uppercase tracking-[0.15em] text-white bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
                        View
                      </span>
                    </div>
                    <div className="absolute bottom-2 left-2">
                      <span className="text-[9px] font-mono text-white/30">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {lightboxIndex !== null && (
          <Lightbox
            images={project.gallery}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}

        <RelatedProjects related={related} />
      </article>

      <NextProjectBanner next={next} />
      <FooterBar />
    </main>
  );
}
