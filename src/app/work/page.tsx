"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import gsap from "gsap";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowLeft, FiGrid, FiList, FiArrowRight } from "react-icons/fi";

import WorkCard from "@/components/WorkCard";
import AnimatedLogoThumbnail from "@/components/AnimatedLogoThumbnail";
import ProjectVideo from "@/components/ProjectVideo";
import { projects, categories, getYtId } from "@/data/projects";

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const headerRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? projects
        : projects.filter((p) => p.category === activeFilter),
    [activeFilter]
  );

  // Header entrance
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll(".anim"),
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: "power3.out", delay: 0.1 }
      );
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* ── Header ── */}
      <div ref={headerRef} className="px-6 md:px-12 pt-16 pb-12 md:pt-24 md:pb-16 border-b border-white/5">

        {/* Back button */}
        <Link
          href="/"
          className="anim inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors mb-10 group"
        >
          <FiArrowLeft className="group-hover:-translate-x-1 transition-transform duration-200" size={14} />
          Back to Home
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="anim text-[11px] uppercase tracking-[0.2em] text-neutral-500 mb-4">
              Selected Work
            </p>
            <h1 className="anim text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none">
              Case <span className="text-accent">Studies</span>
            </h1>
          </div>

          <p className="anim text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right">
            A curated selection of {projects.length} projects across Fintech, Healthcare, SaaS, and E-Commerce.
          </p>
        </div>

        {/* Filter pills and View Toggle */}
        <div className="anim flex flex-col lg:flex-row lg:items-center justify-between gap-6 mt-10">
          <div className="flex flex-wrap gap-3 flex-1">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  aria-pressed={isActive}
                  className={`relative px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.15em] font-medium border transition-colors duration-300 cursor-pointer active:scale-95 ${
                    isActive
                      ? "text-black border-accent"
                      : "bg-transparent text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="filter-pill"
                      className="absolute inset-0 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10">
                    {cat}
                    {cat !== "All" && (
                      <span className="ml-2 opacity-50">
                        {projects.filter((p) => p.category === cat).length}
                      </span>
                    )}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between lg:justify-end gap-6 w-full lg:w-auto">
            {/* Live count */}
            <span className="text-[11px] text-neutral-600 uppercase tracking-widest shrink-0" aria-live="polite">
              {filtered.length} project{filtered.length !== 1 ? "s" : ""}
            </span>

            {/* View Toggle */}
            <div className="flex items-center gap-1 border border-white/10 rounded-full p-1 bg-neutral-950/50 shrink-0">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-full transition-colors active:scale-90 ${
                  viewMode === "grid" ? "bg-accent text-black" : "text-neutral-500 hover:text-white hover:bg-white/5"
                }`}
                aria-label="Grid View"
                aria-pressed={viewMode === "grid"}
              >
                <FiGrid size={15} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-full transition-colors active:scale-90 ${
                  viewMode === "list" ? "bg-accent text-black" : "text-neutral-500 hover:text-white hover:bg-white/5"
                }`}
                aria-label="List View"
                aria-pressed={viewMode === "list"}
              >
                <FiList size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Grid / List ── */}
      <div className="px-6 md:px-12 py-12 md:py-16">
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            viewMode === "grid" ? (
              <motion.div
                key={`${activeFilter}-grid`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
              >
                {filtered.map((project, i) => (
                  <Link key={project.id} href={`/work/${project.slug}`} className="block w-full h-full outline-none">
                    <WorkCard project={project} index={i} />
                  </Link>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key={`${activeFilter}-list`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col border-t border-white/10"
              >
                {filtered.map((project, index) => {
                  const ytId = project.video ? getYtId(project.video) : null;
                  const thumb = ytId ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg` : project.image;
                  return (
                    <Link
                      key={project.id}
                      href={`/work/${project.slug}`}
                      className="group flex flex-col md:flex-row md:items-center justify-between py-6 md:py-8 border-b border-white/10 hover:border-white/30 transition-colors gap-6"
                    >
                      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 flex-1">
                        <div className="relative w-full md:w-56 aspect-[16/10] rounded-xl overflow-hidden shrink-0 border border-white/10 bg-surface">
                          {project.slug === "logo-design-showcase" ? (
                            <AnimatedLogoThumbnail />
                          ) : project.video && ytId ? (
                            <ProjectVideo ytId={ytId} thumbSrc={thumb} alt={project.title} delay={index * 2000} />
                          ) : (
                            <img
                              src={thumb}
                              alt={project.title}
                              loading="lazy"
                              decoding="async"
                              className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                            />
                          )}
                          <div className="absolute inset-0 z-10" />
                        </div>
                        <div className="flex-1 flex flex-col items-start gap-3 md:gap-2">
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-accent">{project.category}</span>
                            <span className="w-1 h-1 rounded-full bg-white/20 hidden md:block" />
                            <span className="text-[10px] uppercase tracking-[0.1em] text-neutral-500 hidden md:block">{project.year}</span>
                          </div>
                          <h3 className="text-2xl font-bold tracking-tight text-white group-hover:text-accent transition-colors">{project.title}</h3>
                          <p className="text-sm text-neutral-400 line-clamp-2 md:line-clamp-1 max-w-2xl">{project.description}</p>
                        </div>
                      </div>

                      <div className="flex items-center justify-between md:justify-end gap-6 md:w-32 shrink-0">
                        <div className="flex md:hidden items-center gap-2">
                          <span className="text-[10px] uppercase tracking-[0.1em] text-neutral-500">{project.year}</span>
                        </div>
                        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-colors">
                          <FiArrowRight size={20} className="text-white group-hover:text-black transition-colors group-hover:-rotate-45 duration-300" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </motion.div>
            )
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-32 text-neutral-600 text-sm uppercase tracking-widest"
            >
              No projects in this category yet.
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/5 px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-neutral-500 hover:text-white transition-colors group"
        >
          <FiArrowLeft size={13} className="group-hover:-translate-x-1 transition-transform duration-200" />
          Back to Home
        </Link>

        <p className="text-[11px] uppercase tracking-widest text-neutral-700">
          © 2026 Dev Shrimali
        </p>
      </div>
    </main>
  );
}
