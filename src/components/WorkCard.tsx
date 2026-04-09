"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectVideo from "./ProjectVideo";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

export type Project = {
  id: number;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  image: string;
  video?: string;
  year?: string;
};

function getYtId(url: string) {
  const m = url.match(/embed\/([^?]+)/);
  return m ? m[1] : null;
}

export default function WorkCard({ project, index }: { project: Project; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    gsap.fromTo(
      card,
      { y: 48, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, delay: (index % 3) * 0.12,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 88%", once: true } }
    );
  }, [index]);

  const ytId = project.video ? getYtId(project.video) : null;
  const thumb = ytId
    ? `https://img.youtube.com/vi/${ytId}/maxresdefault.jpg`
    : project.image;

  return (
    <div
      ref={cardRef}
      className="group flex flex-col gap-5 cursor-pointer w-full"
    >
      {/* ── Media – edge to edge video ── */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-[20px] bg-[#0a0a0a] border border-white/5 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1.5 group-hover:shadow-[0_12px_40px_rgba(190,242,100,0.08)]">
        
        {project.video && ytId ? (
          <ProjectVideo ytId={ytId} thumbSrc={thumb} alt={project.title} delay={4500 + index * 5000} />
        ) : (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-80" />
        )}

        {/* click blocker */}
        <div className="absolute inset-0 z-10" />

        {/* Year badge */}
        {project.year && (
          <span className="absolute top-4 right-4 z-30 text-[10px] font-bold uppercase tracking-[0.1em] text-black bg-[#bef264] px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.year}
          </span>
        )}

        {/* Premium Arrow Hover Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] shadow-xl">
             <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-white stroke-2 group-hover:stroke-[#bef264] transition-colors">
               <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
             </svg>
          </div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col px-2">
        <div className="flex items-center gap-4 mb-2">
          <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#bef264]">
            {project.category}
          </p>
          <span className="w-4 h-px bg-white/20" />
          <div className="flex gap-2">
            {project.tags.slice(0, 2).map((tag) => (
              <span key={tag} className="text-[9px] uppercase tracking-[0.1em] px-2 py-0.5 rounded-full border border-white/10 text-neutral-400">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="text-2xl font-bold tracking-tight text-white mb-2 transition-colors duration-300 group-hover:text-white">
          {project.title}
        </h3>
        
        <p className="text-sm text-neutral-400 leading-relaxed max-w-sm">
          {project.desc}
        </p>
      </div>
    </div>
  );
}
