"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowLeft } from "react-icons/fi";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);


/* ─── PROJECTS DATA ─── */
function getYtId(url: string) {
  const m = url.match(/embed\/([^?]+)/);
  return m ? m[1] : null;
}

import ProjectVideo from "@/components/ProjectVideo";

const allProjects = [
  {
    id: 1, slug: "transact-os",
    title: "TransactOS — Unified B2B Operations Dashboard",
    category: "SaaS",
    desc: "Unified B2B Operations Dashboard designed to streamline complex business transactions and operational workflows.",
    tags: ["B2B", "Dashboard UI", "SaaS"],
    image: "/project%20assets/532shots_so.png",
    year: "2024",
  },
  {
    id: 2, slug: "fintech-app",
    title: "Fintech Mobile App",
    category: "Fintech",
    desc: "Payments & Wallet Experience — A fintech app UX case study focused on seamless money transfers and financial management.",
    tags: ["UX Research", "Mobile", "Fintech"],
    image: "/project%20assets/financial-app.png",
    video: "https://www.youtube.com/embed/VGJqwOx-qAY",
    year: "2024",
  },
  {
    id: 3, slug: "event-ticket-booking",
    title: "Event & Club Ticket Booking App",
    category: "Events",
    desc: "A clean, intuitive flight and event ticket booking experience with smart search, seat selection, and one-tap checkout.",
    tags: ["UX/UI Case Study", "Mobile App", "Booking"],
    image: "/project%20assets/flight-booking-cover-hq.jpg",
    year: "2024",
  },
  {
    id: 4, slug: "auto-repair-brotomotive",
    title: "Auto Repair: Web Driving Sales",
    category: "Web Design",
    desc: "A professional, responsive website for Brotomotive — connecting vehicle owners with reliable auto repair and maintenance services.",
    tags: ["Web Design", "Branding", "Automotive"],
    image: "/project%20assets/brotomotive-cover.png",
    year: "2024",
  },
  {
    id: 5, slug: "crypto-trading-app",
    title: "Crypto Trading App",
    category: "Fintech",
    desc: "Buy, Sell & Portfolio Management — A crypto trading application focused on real-time market tracking, secure transactions, and portfolio visibility.",
    tags: ["Fintech", "Crypto", "Mobile App"],
    image: "/project%20assets/crypto-app/cover.png",
    year: "2024",
  },
  {
    id: 6, slug: "cleaning-brand-msquare",
    title: "Cleaning Brand: A Visual Sparkle",
    category: "Brand Identity",
    desc: "A comprehensive brand identity and website design for MSquare Cleaning Services — sparkle in every detail.",
    tags: ["Branding", "Logo Design", "Web Design"],
    image: "/project%20assets/msquare/cover.png",
    year: "2024",
  },
  {
    id: 7, slug: "furniture-ecommerce",
    title: "Furniture & Home Décor E-Commerce",
    category: "E-Commerce",
    desc: "A web-based e-commerce platform offering a modern, visually engaging shopping experience for furniture and home décor products.",
    tags: ["UI Design", "E-Commerce", "Web"],
    image: "/project%20assets/furniture-cover-new.png",
    video: "https://www.youtube.com/embed/McOQzo-6PoA",
    year: "2024",
  },
  {
    id: 8, slug: "healthcare-app",
    title: "Healthcare App",
    category: "Healthcare",
    desc: "Appointment Booking & Patient Records — A mobile healthcare app streamlining scheduling and secure access to patient medical records.",
    tags: ["Healthcare", "Mobile App", "UX Research"],
    image: "/project%20assets/healthcare-app/cover.jpg",
    year: "2024",
  },
  {
    id: 9, slug: "interior-brand-vishva-kshetra",
    title: "Interior Brand: Designing Elegance",
    category: "Brand Identity",
    desc: "A complete branding identity and website design for Vishva Kshetra, a premium interior designing firm.",
    tags: ["Branding", "Interior Design", "Web Design"],
    image: "/project%20assets/vishva-kshetra-branding.jpg",
    year: "2023",
  },
  {
    id: 10, slug: "sports-news-app",
    title: "Sports News App",
    category: "Sports",
    desc: "Daily Engagement Game Feature — A sports news application with an interactive daily game to boost user engagement and retention.",
    tags: ["Mobile App", "Sports", "Gamification"],
    image: "/project%20assets/sport%20news/cover.png",
    year: "2023",
  },
  {
    id: 11, slug: "vr-gaming-experience",
    title: "VR Gaming Experience",
    category: "Gaming",
    desc: "Immersive Interaction Design — A virtual reality gaming concept focused on immersive interaction and intuitive control systems.",
    tags: ["VR", "Gaming", "Interaction Design"],
    image: "/project%20assets/vr-football.png",
    video: "https://www.youtube.com/embed/w8lNGT98gzk",
    year: "2023",
  },
  {
    id: 12, slug: "banking-app",
    title: "Banking App: Secure and Simple",
    category: "Fintech",
    desc: "A secure and user-friendly mobile banking application designed to simplify personal finance management on the go.",
    tags: ["Fintech", "Mobile App", "UX Research"],
    image: "/project%20assets/financial-app/cover.png",
    year: "2023",
  },
  {
    id: 13, slug: "agritech-ai",
    title: "AgriTech AI: Smart Quality Control",
    category: "AgriTech",
    desc: "AI-Powered Agriculture Quality Control System — optimizing inspection processes with real-time defect detection and smart reporting.",
    tags: ["AI/ML", "AgriTech", "Dashboard"],
    image: "/project%20assets/agri-tech/cover.jpg",
    year: "2023",
  },
  {
    id: 14, slug: "ai-health-chatbot",
    title: "AI Chatbot: Your Health Buddy",
    category: "Healthcare",
    desc: "An AI-powered healthcare assistant providing instant medical support, symptom checking, and appointment scheduling.",
    tags: ["AI", "Healthcare", "Chatbot"],
    image: "/project%20assets/ai-chatbot.png",
    video: "https://www.youtube.com/embed/Lq87TMxFI8w",
    year: "2024",
  },
  {
    id: 15, slug: "job-portal-ai",
    title: "Job Portal: AI Career Matchmaker",
    category: "SaaS",
    desc: "AI-Powered Job Portal App — smart hiring and career growth platform connecting job seekers with the right opportunities.",
    tags: ["AI", "SaaS", "Mobile App"],
    image: "/project%20assets/job-portal-cover-new.png",
    video: "https://www.youtube.com/embed/4RxCHb3m8M4",
    year: "2023",
  },
  {
    id: 16, slug: "finance-management-app",
    title: "Finance Management App",
    category: "Fintech",
    desc: "Smart UPI, KPIs & Secure Money Tracking — A modern finance management app designed for fast, intuitive, and secure personal finance control.",
    tags: ["Fintech", "UI Design", "Mobile App"],
    image: "/project%20assets/finance-management/cover.jpg",
    video: "https://www.youtube.com/embed/2F0TF7iKCgs",
    year: "2025",
  },
];


const categories = ["All", "Fintech", "Healthcare", "SaaS", "E-Commerce", "Brand Identity", "Web Design", "Events", "Sports", "Gaming", "AgriTech"];

/* ─── helpers ─── */
function loopUrl(id: string) {
  return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=0&showinfo=0&modestbranding=1&start=4&playsinline=1&disablekb=1&iv_load_policy=3`;
}

import WorkCard from "@/components/WorkCard";
export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.title = "Selected Work — Dev Shrimali | UI/UX Designer";
    return () => { document.title = "Dev Shrimali — Senior UI/UX Designer"; };
  }, []);

  const filtered = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p) => p.category === activeFilter);

  // Header entrance
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    gsap.fromTo(
      el.querySelectorAll(".anim"),
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.9, ease: "power3.out", delay: 0.1 }
    );
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
              Case <span className="text-[#bef264]">Studies</span>
            </h1>
          </div>

          <p className="anim text-sm text-neutral-500 max-w-xs leading-relaxed md:text-right">
            A curated selection of {allProjects.length} projects across Fintech, Healthcare, SaaS, and E-Commerce.
          </p>
        </div>

        {/* Filter pills */}
        <div className="anim flex flex-wrap gap-3 mt-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-full text-[11px] uppercase tracking-[0.15em] font-medium border transition-all duration-300 cursor-pointer ${
                activeFilter === cat
                  ? "bg-[#bef264] text-black border-[#bef264]"
                  : "bg-transparent text-neutral-400 border-white/10 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
              {cat !== "All" && (
                <span className="ml-2 opacity-50">
                  {allProjects.filter((p) => p.category === cat).length}
                </span>
              )}
            </button>
          ))}

          {/* Live count */}
          <span className="ml-auto self-center text-[11px] text-neutral-600 uppercase tracking-widest">
            {filtered.length} project{filtered.length !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="px-6 md:px-12 py-12 md:py-16">
        <div
          key={activeFilter}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filtered.map((project, i) => (
             <Link key={project.id} href={`/work/${project.slug}`} className="block w-full h-full transform transition-transform duration-300 outline-none">
               <WorkCard project={project} index={i} />
             </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-32 text-neutral-600 text-sm uppercase tracking-widest">
            No projects in this category yet.
          </div>
        )}
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
