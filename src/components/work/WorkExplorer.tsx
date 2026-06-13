"use client";
import { useMemo, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectVideo from "@/components/media/ProjectVideo";
import AnimatedLogoThumbnail from "@/components/media/AnimatedLogoThumbnail";
import { useGsapReveal } from "@/hooks/useGsapReveal";
import { projects, categories, getYtId, ytThumb, type Project } from "@/data/projects";

function RowMedia({ project, index }: { project: Project; index: number }) {
  const ytId = getYtId(project.video);
  const thumb = ytId ? ytThumb(ytId) : project.image;

  return (
    <div className="relative w-full sm:w-64 lg:w-80 aspect-[16/10] rounded-2xl overflow-hidden border border-line bg-cream shrink-0">
      {project.slug === "logo-design-showcase" ? (
        <AnimatedLogoThumbnail />
      ) : project.video && ytId ? (
        <ProjectVideo ytId={ytId} thumbSrc={thumb} alt={project.title} delay={2500 + index * 2500} />
      ) : (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={thumb}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.04]"
        />
      )}
      <div className="absolute inset-0 z-10" />
    </div>
  );
}

/**
 * Filterable editorial list of every project. Single list layout —
 * each row is media + title + meta, alternating feel via generous spacing.
 */
export default function WorkExplorer() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter]
  );

  const headerRef = useGsapReveal<HTMLDivElement>((el) => {
    gsap.fromTo(
      el.querySelectorAll(".wx-anim"),
      { y: 36, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.09, duration: 0.85, ease: "power3.out", delay: 0.1 }
    );
  });

  return (
    <div className="max-w-[90rem] mx-auto px-5 md:px-10">
      {/* ── Page header ── */}
      <div ref={headerRef} className="pt-28 md:pt-40 pb-12 md:pb-16">
        <p className="wx-anim text-[11px] font-bold tracking-[0.22em] uppercase text-muted flex items-center gap-3 mb-6">
          <span className="w-7 h-px bg-accent" />
          The archive
        </p>
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <h1 className="wx-anim font-display text-[clamp(3rem,8vw,6.5rem)] leading-[0.98] tracking-tight text-ink">
            Every project<em className="italic text-accent">,</em>
            <br />
            one shelf<em className="text-accent">.</em>
          </h1>
          <p className="wx-anim text-muted text-sm max-w-xs leading-relaxed lg:pb-3 lg:text-right">
            {projects.length} projects across fintech, healthcare, SaaS,
            e-commerce, and brand identity — research to final interface.
          </p>
        </div>

        {/* Filters */}
        <div className="wx-anim flex flex-wrap items-center gap-2.5 mt-12">
          {categories.map((cat) => {
            const isActive = filter === cat;
            const count =
              cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                aria-pressed={isActive}
                className={`relative px-4.5 py-2 px-5 rounded-full text-[11px] uppercase tracking-[0.14em] font-medium border transition-colors duration-300 cursor-pointer active:scale-95 ${
                  isActive
                    ? "text-paper border-accent"
                    : "text-muted border-line hover:border-ink/30 hover:text-ink"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="wx-filter"
                    className="absolute inset-0 bg-accent rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className="relative z-10">
                  {cat} <span className="opacity-50 ml-1">{count}</span>
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Project rows ── */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="border-t border-line pb-20"
        >
          {filtered.map((project, i) => (
            <Link
              key={project.id}
              href={`/work/${project.slug}`}
              className="group flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-10 py-8 md:py-10 border-b border-line transition-colors duration-300 hover:bg-cream/60 -mx-4 px-4 rounded-2xl"
            >
              <RowMedia project={project} index={i} />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-accent">
                    {project.category}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-line" />
                  <span className="text-[11px] text-muted">{project.year}</span>
                </div>
                <h2 className="font-display text-2xl md:text-4xl text-ink leading-snug group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h2>
                <p className="text-sm text-muted leading-relaxed mt-2 line-clamp-2 max-w-2xl">
                  {project.description}
                </p>
              </div>

              <span className="hidden sm:flex w-14 h-14 rounded-full border border-line items-center justify-center text-ink group-hover:bg-accent group-hover:border-accent group-hover:text-paper group-hover:rotate-12 transition-all duration-300 shrink-0">
                <FiArrowUpRight size={20} />
              </span>
            </Link>
          ))}

          {filtered.length === 0 && (
            <p className="text-center py-32 text-muted text-sm uppercase tracking-widest">
              No projects in this category yet.
            </p>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
