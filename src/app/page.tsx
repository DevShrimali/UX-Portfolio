"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import Hero from "@/components/Hero";
import Card3D from "@/components/Card3D";
import CardDeck from "@/components/CardDeck";
import FloatingBadge from "@/components/FloatingBadge";
import MarqueeStrip from "@/components/MarqueeStrip";
import ParallaxImage from "@/components/ParallaxImage";
import PageLoader from "@/components/PageLoader";
import { FaBehance, FaDribbble, FaFigma, FaGithub, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import { LuBriefcase, LuGraduationCap } from "react-icons/lu";
if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/* ─── DATA ─── */
const projects = [
  {
    id: 12,
    title: "TransactOS",
    category: "SaaS Platform",
    desc: "Unified B2B Operations Dashboard designed to streamline complex business transactions.",
    tags: ["B2B", "Dashboard UI", "SaaS"],
    image: "/project%20assets/532shots_so.png",
    slug: "transact-os",
  },
  {
    id: 1,
    title: "Loan App",
    category: "Fintech Platform",
    desc: "Problem-solving product design for a loan application with a motion showcase.",
    tags: ["UI/UX Case Study", "Motion Showcase", "Mobile"],
    image: "/project-1.jpg",
    video: "https://www.youtube.com/embed/VGJqwOx-qAY",
    slug: "fintech-app",
  },
  {
    id: 11,
    title: "Plant-Based Meal Plan",
    category: "Healthcare",
    desc: "A comprehensive UX/UI case study for a plant-based meal planning application.",
    tags: ["UX/UI Case Study", "Mobile App", "Health"],
    image: "/Cover.png",
    slug: "plant-based-meal-plan",
  },
  {
    id: 2,
    title: "Grocery E-Commerce",
    category: "E-Commerce Website",
    desc: "Fresh, fast, and modern online shopping experience.",
    tags: ["UI Design", "E-Commerce", "Web"],
    image: "/project-2.jpg",
    video: "https://www.youtube.com/embed/78bCyDFaxsE",
    slug: "grocery-e-commerce",
  },
  {
    id: 3,
    title: "Job Portal",
    category: "Job Portal Website",
    desc: "Minimal job search, apply flow, and modern listings.",
    tags: ["UI Design", "UX Flow", "Web"],
    image: "/project-3.jpg",
    video: "https://www.youtube.com/embed/4RxCHb3m8M4",
    slug: "job-portal-ai",
  },
  {
    id: 4,
    title: "Cleaning Brand",
    category: "Brand Identity",
    desc: "A visual sparkle: comprehensive brand identity and logo design for MSquare Cleaning Services.",
    tags: ["Branding", "Visual Design", "Logo Design"],
    image: "/project%20assets/msquare/cover.png",
    slug: "cleaning-brand-msquare",
  },
];

const services = [
  {
    num: "01",
    title: "UX Research & Strategy",
    desc: "Generating insights, solving problems through empathy, and mapping journeys.",
  },
  {
    num: "02",
    title: "Information Architecture & User Flows",
    desc: "Organizing content, simplifying navigation, and guiding users through clear paths.",
  },
  {
    num: "03",
    title: "Wireframing & Low-Fi Prototyping",
    desc: "Exploring ideas, testing concepts early, and shaping flows before final design.",
  },
  {
    num: "04",
    title: "UI Design & Visual Design",
    desc: "Designing clean interfaces, maintaining consistency, and creating visually engaging experiences.",
  },
  {
    num: "05",
    title: "Design Systems & Component Libraries",
    desc: "Building reusable components, ensuring consistency, and scaling design across products.",
  },
  {
    num: "06",
    title: "Interaction Design & Prototyping",
    desc: "Defining interactions, adding meaningful motion, and bringing interfaces to life.",
  },
];

const experience = [
  {
    role: "UI / UX designer",
    company: "EnlightVision Technologies Private Limited",
    dates: "Aug 2024 — Present",
    location: "Ahmedabad, Gujarat, India",
    skills: "UserResearch, Communication & Collaboration, Visual Design, Interaction Design, Prototyping.",
    current: true,
  },
  {
    role: "UI / UX Designer",
    company: "Konzept Solutions",
    dates: "Mar 2021 — Mar 2024",
    location: "Ahmedabad, Gujarat, India",
    skills: "UserResearch, Communication & Collaboration, Wireframing, Adobe XD, Design Systems.",
    current: false,
  },
  {
    role: "Website & Graphic Designer",
    company: "VMG Software Solutions Pvt. Ltd.",
    dates: "Oct 2020 — Feb 2021",
    location: "Gandhinagar, Gujarat, India",
    skills: "User Research, Communication & Collaboration, Web Design, Graphic Design.",
    current: false,
  },
  {
    role: "Graphic Designer",
    company: "Pixeltec Digital Wallpaper",
    dates: "Apr 2019 — Oct 2020",
    location: "Ahmedabad, Gujarat, India",
    skills: "UserResearch, Visual Design, Print Design, Branding, Custom Wallpapers.",
    current: false,
  },
];

const education = [
  {
    course: "Bachelor of Technology - BTech, Computer Science",
    institution: "U.V. Patel College of Engineering",
    dates: "2016 - 2018",
    details: "Computer Science Engineering",
  },
  {
    course: "High School Diploma, Computer Science",
    institution: "Tolani Foundation, Gandhidham Polytechnic(SFI) 653",
    dates: "2011 - 2015",
    details: "Grade: A. Activities: Built a Tic Tac Toe Game (C#) and Static Website (Asp.net) in final year.",
  },
  {
    course: "UI & UX Assessment",
    institution: "LearnTube.ai",
    dates: "Aug 2024",
    details: "Skills: Visual / UI Design & Interaction, Figma, User Interface Design, Wireframing & Prototyping, UX Research.",
  },
  {
    course: "Learn Illustrator CC",
    institution: "LearnTube.ai",
    dates: "Aug 2024",
    details: "Skills: Adobe Illustrator, Vector Graphics, Illustration.",
  },
  {
    course: "UX UI Process & Adobe XD",
    institution: "Udemy",
    dates: "Nov 2020",
    details: "Skills: Visual / UI Design & Interaction, Wireframing & Prototyping, Adobe XD, UX Research.",
  },
  {
    course: "Zero To Mastery : Web Developer",
    institution: "Zero To Mastery Academy",
    dates: "Sep 2020",
    details: "Skills: DesignThinking, UserResearch, HTML5, GitHub, React.js.",
  }
];

const principles = [
  {
    num: "01",
    title: "Empathy First",
    desc: "Understanding the user is the foundation of every meaningful design decision.",
  },
  {
    num: "02",
    title: "Jakob's Law",
    desc: "Users spend most of their time on other sites. They prefer your site to work the same way as sites they already know.",
  },
  {
    num: "03",
    title: "Seamless Handoff",
    desc: "Great design is nothing without flawless execution. Ensuring close collaboration with developers is key.",
  },
];

const skills = [
  "UX Research",
  "Design Strategy",
  "Wireframes",
  "Design Systems",
  "Prototyping",
  "UED",
  "Design Thinking",
  "Retrospectives",
];

const socials = [
  { label: "Behance", href: "https://www.behance.net/dev-shrimali", icon: FaBehance },
  { label: "Dribbble", href: "https://dribbble.com/dev-shrimali", icon: FaDribbble },
  { label: "Figma", href: "https://www.figma.com/@devuxin", icon: FaFigma },
  { label: "Github", href: "https://github.com/DevShrimali", icon: FaGithub },
  { label: "YouTube", href: "https://www.youtube.com/@dev-shrimali", icon: FaYoutube },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dev-shrimali/", icon: FaLinkedinIn },
];

const marqueeItems = [
  { type: "text" as const, value: "UX Research" },
  { type: "svg" as const, d: "M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z" },
  { type: "text" as const, value: "Design Systems" },
  { type: "svg" as const, d: "M 64 192 L 128 192 L 128 256 L 64 256 C 28.654 256 0 227.346 0 192 L 0 128 L 64 128 Z M 192 192 L 256 192 L 256 256 L 192 256 C 156.654 256 128 227.346 128 192 L 128 128 L 192 128 Z M 64 64 L 128 64 L 128 0 L 192 0 C 227.346 0 256 28.654 256 64 L 256 128 L 192 128 L 192 64 L 128 64 L 128 128 L 64 128 C 28.654 128 0 99.346 0 64 L 0 0 L 64 0 Z" },
  { type: "text" as const, value: "Prototyping" },
  { type: "svg" as const, d: "M 160 88 L 194 34 L 216 0 L 256 0 L 256 40 L 221.5 93.5 L 200 128 L 256 128 L 256 256 L 96 256 L 96 168 L 64.246 220 L 40 256 L 0 256 L 0 216 L 34 162 L 56 128 L 0 128 L 0 0 L 160 0 Z" },
  { type: "text" as const, value: "Developer Handoff" },
  { type: "svg" as const, d: "M 256 256 L 128 256 L 0 128 L 128 128 Z M 256 128 L 128 128 L 0 0 L 128 0 Z" },
  { type: "text" as const, value: "User Research" },
  { type: "svg" as const, d: "M 192 0 C 227.346 0 256 28.654 256 64 C 256 99.346 227.346 128 192 128 C 227.346 128 256 156.654 256 192 C 256 227.346 227.346 256 192 256 C 156.654 256 128 227.346 128 192 C 128 227.346 99.346 256 64 256 C 28.654 256 0 227.346 0 192 C 0 156.654 28.654 128 64 128 C 28.654 128 0 99.346 0 64 C 0 28.654 28.654 0 64 0 C 99.346 0 128 28.654 128 64 C 128 28.654 156.654 0 192 0 Z M 128 100 C 112.536 100 100 112.536 100 128 C 100 143.464 112.536 156 128 156 C 143.464 156 156 143.464 156 128 C 156 112.536 143.464 100 128 100 Z" },
];

/* ─── SECTION LABEL COMPONENT ─── */
function SectionLabel({
  text,
  color = "text-neutral-400",
  lineColor = "bg-neutral-600",
}: {
  text: string;
  color?: string;
  lineColor?: string;
}) {
  return (
    <div className="w-full md:w-[200px] lg:w-[250px] shrink-0">
      <div className="sticky top-32">
        <ScrollReveal>
          <p
            className={`text-xs font-bold tracking-widest uppercase flex items-center gap-4 ${color}`}
          >
            <span className={`w-8 h-[1px] ${lineColor} block`} />
            {text}
          </p>
        </ScrollReveal>
      </div>
    </div>
  );
}

/* ─── BIO WORD REVEAL ─── */
function BioHeading() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const words = container.querySelectorAll(".bio-word");
    gsap.fromTo(
      words,
      { y: 60, opacity: 0, rotateX: -30 },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.08,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const line1 = ["Hi,", "I'm", "Dev"];
  const line2 = ["I", "design"];
  const line2accent = ["clarity"];
  const line2end = ["in"];
  const line3 = ["complex", "systems"];

  const wordClass =
    "bio-word inline-block mr-[0.3em] text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tighter leading-[1.05]";

  return (
    <div ref={containerRef} style={{ perspective: "800px" }}>
      <div className="mb-1">
        {line1.map((w, i) => (
          <span key={i} className={wordClass}>
            {w}
          </span>
        ))}
      </div>
      <div className="mb-1">
        {line2.map((w, i) => (
          <span key={i} className={wordClass}>
            {w}
          </span>
        ))}
        {line2accent.map((w, i) => (
          <span key={`a${i}`} className={`${wordClass} text-[#bef264]`}>
            {w}
          </span>
        ))}
        {line2end.map((w, i) => (
          <span key={`e${i}`} className={wordClass}>
            {w}
          </span>
        ))}
      </div>
      <div>
        {line3.map((w, i) => (
          <span key={i} className={wordClass}>
            {w}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── EXPERIENCE TIMELINE ─── */
function ExperienceTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    gsap.fromTo(
      container.querySelectorAll(".exp-row"),
      { y: 28, opacity: 0 },
      {
        y: 0, opacity: 1, stagger: 0.1, duration: 0.85, ease: "power3.out",
        scrollTrigger: { trigger: container, start: "top 82%", once: true },
      }
    );
    return () => { ScrollTrigger.getAll().forEach((t) => t.kill()); };
  }, []);

  return (
    <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">

      {/* ── Work Experience ── */}
      <div>
        <div className="flex items-center gap-2.5 mb-8 pb-8 border-b border-white/8">
          <LuBriefcase size={14} className="text-neutral-500" />
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-500">Work Experience</p>
        </div>

        <div className="flex flex-col">
          {experience.map((exp, i) => (
            <div key={i} className="exp-row group py-7 border-b border-white/[0.06] last:border-0">
              {/* Top row: role + badge */}
              <div className="flex items-center justify-between gap-4 mb-1">
                <h4 className="text-[15px] font-semibold text-white tracking-tight">
                  {exp.role}
                </h4>
                {exp.current && (
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#bef264] bg-[#bef264]/[0.08] border border-[#bef264]/20 px-2.5 py-0.5 rounded-full">
                    Present
                  </span>
                )}
              </div>

              {/* Company + dates */}
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="text-sm text-neutral-500">{exp.company}</p>
                <p className="text-[11px] text-neutral-600 tracking-wide shrink-0">{exp.dates}</p>
              </div>

              {/* Skills */}
              <p className="text-[12px] text-neutral-600 leading-relaxed">
                {exp.skills.replace(/\.$/, "")}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Education & Certification ── */}
      <div>
        <div className="flex items-center gap-2.5 mb-8 pb-8 border-b border-white/8">
          <LuGraduationCap size={14} className="text-neutral-500" />
          <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-neutral-500">Education & Certification</p>
        </div>

        <div className="flex flex-col">
          {education.map((edu, i) => (
            <div key={i} className="exp-row py-7 border-b border-white/[0.06] last:border-0">
              {/* Title + year */}
              <div className="flex items-start justify-between gap-6 mb-1">
                <h4 className="text-[15px] font-semibold text-white tracking-tight leading-snug">
                  {edu.course}
                </h4>
                <p className="text-[11px] text-neutral-600 tracking-wide shrink-0 pt-0.5">{edu.dates}</p>
              </div>

              {/* Institution */}
              <p className="text-sm text-neutral-500 mb-3">{edu.institution}</p>

              {/* Detail (only if meaningful) */}
              {edu.details && edu.details !== "Computer Science Engineering" && (
                <p className="text-[12px] text-neutral-600 leading-relaxed">
                  {edu.details}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── SERVICE CARDS ─── */
function ServiceCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const cards = container.querySelectorAll(".svc-card");
    gsap.fromTo(
      cards,
      { rotateX: -20, y: 60, opacity: 0 },
      {
        rotateX: 0,
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={cardsRef}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16"
    >
      {services.map((svc) => (
        <div key={svc.num} className="svc-card group border-t border-white/10 pt-6 cursor-default">
          <span className="text-xs text-neutral-600 font-mono">
            {svc.num}
          </span>
          <h3 className="text-2xl md:text-3xl font-light tracking-tight mt-3 mb-4 transition-colors duration-300 group-hover:text-[#bef264]">
            {svc.title}
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">
            {svc.desc}
          </p>
        </div>
      ))}
    </div>
  );
}

/* ─── PRINCIPLES CARDS ─── */
function PrinciplesCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const cards = container.querySelectorAll(".princ-card");
    gsap.fromTo(
      cards,
      { rotateY: -8, opacity: 0 },
      {
        rotateY: 0,
        opacity: 1,
        stagger: 0.12,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div
      ref={cardsRef}
      className="grid grid-cols-1 md:grid-cols-3 gap-8"
      style={{ perspective: "800px" }}
    >
      {principles.map((p) => (
        <div
          key={p.num}
          className="princ-card p-10 border border-white/5 bg-black/20 hover:bg-neutral-900 transition-colors h-full"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <span className="text-xs text-neutral-600 font-mono">{p.num}</span>
          <h3 className="text-2xl font-bold tracking-tight mt-4 mb-4">
            {p.title}
          </h3>
          <p className="text-sm text-neutral-400 leading-relaxed">{p.desc}</p>
        </div>
      ))}
    </div>
  );
}

/* ─── SKILLS BADGES ─── */
function SkillsBadges() {
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = badgesRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const badges = container.querySelectorAll(".skill-badge");
    gsap.fromTo(
      badges,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        stagger: 0.05,
        duration: 0.5,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: container,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={badgesRef} className="flex flex-wrap gap-3 mt-8">
      {skills.map((skill) => (
        <span
          key={skill}
          className="skill-badge px-5 py-2.5 rounded-full border border-white/20 text-xs font-medium hover:bg-white hover:text-black transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}

/* ─── FOOTER HEADING ─── */
function FooterHeading() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    gsap.fromTo(
      el,
      { rotateX: -20, y: 80, opacity: 0 },
      {
        rotateX: 0,
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <h2
      ref={headingRef}
      className="text-[4.5rem] md:text-[14vw] font-extrabold tracking-tighter leading-[0.85]"
      style={{ perspective: "800px", willChange: "transform" }}
    >
      LET&apos;S WORK<br />TOGETHER
    </h2>
  );
}

/* ─── FOOTER SOCIAL LINKS ─── */
function FooterSocials() {
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = listRef.current;
    if (!container) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    const links = container.querySelectorAll("a");
    gsap.fromTo(
      links,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 90%",
          once: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={listRef} className="flex flex-col gap-4">
      {socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white uppercase tracking-widest text-sm transition-colors flex items-center gap-3"
        >
          <s.icon className="text-base" />
          {s.label}
        </a>
      ))}
    </div>
  );
}

/* ─── EMAIL SCRAMBLE ─── */
function ScrambleEmail() {
  const emailRef = useRef<HTMLAnchorElement>(null);
  const originalText = "devloper.ds@gmail.com";

  const handleMouseEnter = () => {
    const el = emailRef.current;
    if (!el) return;
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    let iterations = 0;
    const interval = setInterval(() => {
      el.textContent = originalText
        .split("")
        .map((letter, index) => {
          if (index < iterations) return originalText[index];
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join("");
      iterations += 1 / 3;
      if (iterations >= originalText.length) {
        clearInterval(interval);
        el.textContent = originalText;
      }
    }, 30);
  };

  return (
    <a
      ref={emailRef}
      href="mailto:devloper.ds@gmail.com"
      className="text-xl border-b border-white pb-2 hover:text-neutral-400 transition-colors inline-block mt-6"
      onMouseEnter={handleMouseEnter}
    >
      {originalText}
    </a>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PAGE — ALL SECTIONS
   ═══════════════════════════════════════════════════════════════════ */

export default function Home() {
  const [loading, setLoading] = useState(true);
  const handleLoaderComplete = useCallback(() => setLoading(false), []);

  useEffect(() => {
    if (sessionStorage.getItem("hasVisited")) {
      setLoading(false);
    } else {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  return (
    <>
      {loading && <PageLoader onComplete={handleLoaderComplete} />}
      <SmoothScroll>
        <Navbar />

        {/* ─── SECTION 1: HERO ─── */}
        <Hero />

      {/* ─── SECTION 2: BIO ─── */}
      <section
        id="bio"
        className="bg-black min-h-screen flex items-center px-8 pt-24 pb-32 md:pb-48"
      >
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16">
          <SectionLabel
            text="Welcome"
            color="text-neutral-400"
            lineColor="bg-neutral-600"
          />
          <div className="flex-1 max-w-7xl">
            <BioHeading />
            <div className="mt-16 max-w-2xl space-y-8">
              <ScrollReveal>
                <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                  As a UX designer with 7 years of experience, I specialize in building scalable, structured experiences across fintech, healthcare, and SaaS.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
                  Clear thinking. Thoughtful systems. Meaningful design.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 3: WHAT I DO ─── */}
      <section
        id="what-i-do"
        className="relative min-h-screen bg-neutral-950 px-8 py-32 flex items-center overflow-hidden"
      >
        {/* Background animated shape */}
        <div
          className="absolute left-[-8%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.045]"
          style={{ width: "clamp(300px, 45vw, 680px)", height: "clamp(300px, 45vw, 680px)" }}
        >
          <svg
            viewBox="0 0 256 256"
            fill="white"
            className="w-full h-full"
            style={{ animation: "whatIdoShapeSpin 40s linear infinite reverse" }}
          >
            <path d="M 228 0 C 172.772 0 128 44.772 128 100 L 128 0 L 0 0 L 0 28 C 0 83.228 44.772 128 100 128 L 0 128 L 0 256 L 28 256 C 83.228 256 128 211.228 128 156 L 128 256 L 256 256 L 256 228 C 256 172.772 211.228 128 156 128 L 256 128 L 256 0 Z" />
          </svg>
        </div>

        <style>{`
          @keyframes whatIdoShapeSpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>

        <div className="relative z-10 w-full flex flex-col md:flex-row gap-8 md:gap-16">
          <SectionLabel
            text="What I Do"
            color="text-neutral-400"
            lineColor="bg-neutral-600"
          />
          <div className="flex-1 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
                Design that connects user needs with real outcomes.
              </h2>
            </ScrollReveal>
            <ServiceCards />
          </div>
        </div>
      </section>

      {/* ─── SECTION 4: SELECTED WORK ─── */}
      <section id="selected-work" className="bg-black px-8 py-32">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16">
          <SectionLabel
            text="Selected Work"
            color="text-neutral-400"
            lineColor="bg-neutral-600"
          />
          <div className="flex-1 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
                Featured{" "}
                <span className="text-[#bef264]">projects</span>
              </h2>
              <p className="text-neutral-400 text-lg md:text-xl max-w-3xl mb-16 mt-6">
                A curated selection of projects spanning product strategy,
                interface design, and design systems across multiple industries.
              </p>
            </ScrollReveal>
            <CardDeck projects={projects} />
            <ScrollReveal delay={0.2}>
              <div className="mt-16 flex justify-center">
                <Link
                  href="/work"
                  className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-white/15 text-[11px] uppercase tracking-[0.2em] text-neutral-400 hover:border-[#bef264] hover:text-[#bef264] transition-all duration-300"
                >
                  View All Projects
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-2 group-hover:translate-x-1 transition-transform duration-200">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─── SECTION 5: TIMELINE (Work & Education) ─── */}
      <section
        id="experience"
        className="bg-neutral-950 px-8 py-32 md:py-48 min-h-screen flex items-center"
      >
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16">
          <SectionLabel
            text="Experience"
            color="text-neutral-400"
            lineColor="bg-neutral-600"
          />
          <div className="flex-1 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16">
                My <span className="text-[#bef264]">journey</span> so far
              </h2>
            </ScrollReveal>
            <ExperienceTimeline />
          </div>
        </div>
      </section>

      {/* ─── SECTION 6: BEYOND PORTFOLIO ─── */}
      <section
        id="beyond-portfolio"
        className="bg-black px-8 py-32 md:py-48 min-h-screen flex items-center"
      >
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-16">
          <SectionLabel
            text="Beyond UX"
            color="text-neutral-400"
            lineColor="bg-neutral-600"
          />
          <div className="flex-1 max-w-7xl">
            <ScrollReveal>
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-16">
                Beyond the{" "}
                <span className="text-[#bef264]">portfolio</span>
              </h2>
            </ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Left sub-column */}
              <div>
                <div className="relative">
                  <ParallaxImage
                    src="/hero-bg.jpg"
                    alt="Dev Shrimali"
                    className="aspect-[4/3] rounded-2xl"
                  />
                  <FloatingBadge
                    label="@devshrimali"
                    x="10%"
                    y="15%"
                    delay={0.2}
                  />
                  <FloatingBadge
                    label="UX Designer"
                    x="60%"
                    y="75%"
                    delay={0.4}
                  />
                  <FloatingBadge
                    label="7 Years"
                    x="5%"
                    y="70%"
                    delay={0.6}
                  />
                </div>
                <div className="mt-10 space-y-6">
                  <ScrollReveal>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      Outside of pixels and prototypes, I spend my time
                      exploring design philosophy, mentoring junior designers,
                      and staying curious about what makes great products
                      resonate with people.
                    </p>
                  </ScrollReveal>
                  <ScrollReveal delay={0.1}>
                    <p className="text-sm text-neutral-400 leading-relaxed">
                      I believe in intentional design — every decision, every
                      interaction, every pixel should serve a purpose and bring
                      clarity to complexity.
                    </p>
                  </ScrollReveal>
                </div>
              </div>

              {/* Right sub-column */}
              <div>
                <ScrollReveal>
                  <div className="space-y-8">
                    {[
                      {
                        label: "BASED IN",
                        value: "Ahmedabad, Gujarat, India",
                      },
                      {
                        label: "EDUCATION",
                        value:
                          "B.Tech CS, U.V. Patel College / Zero To Mastery Academy",
                      },
                      {
                        label: "INDUSTRIES",
                        value:
                          "Fintech, Healthcare, SaaS, E-commerce, Travel",
                      },
                      {
                        label: "TOOLS",
                        value:
                          "Figma, Adobe XD, Illustrator, After Effects, Webflow, HTML, CSS",
                      },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="border-b border-white/5 pb-6"
                      >
                        <p className="text-[10px] uppercase tracking-widest text-neutral-600 mb-2">
                          {item.label}
                        </p>
                        <p className="text-sm text-neutral-300">
                          {item.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
                <SkillsBadges />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SECTION 7: MARQUEE STRIP ─── */}
      <MarqueeStrip items={marqueeItems} speed={50} />

      {/* Principles section removed temporarily */}

      {/* ─── SECTION 9: FOOTER ─── */}
      <footer
        id="footer"
        className="relative bg-black px-8 py-24 md:py-32 border-t border-white/5 overflow-hidden"
      >
        {/* Background animated shape */}
        <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.04]"
          style={{ width: "clamp(360px, 55vw, 780px)", height: "clamp(360px, 55vw, 780px)" }}
        >
          <svg
            viewBox="0 0 256 256"
            fill="white"
            className="w-full h-full"
            style={{ animation: "footerShapeSpin 30s linear infinite" }}
          >
            <path d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z" />
          </svg>
        </div>

        <style>{`
          @keyframes footerShapeSpin {
            from { transform: rotate(0deg); }
            to   { transform: rotate(360deg); }
          }
        `}</style>

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-16">
          {/* Left */}
          <div>
            <FooterHeading />
            <ScrambleEmail />
          </div>

          {/* Right */}
          <FooterSocials />
        </div>

        {/* Bottom bar */}
        <div className="relative z-10 mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between text-neutral-600 text-sm uppercase tracking-widest gap-4">
          <p>© 2026 Dev Shrimali. All rights reserved.</p>
          <p>Design with Empathy</p>
        </div>
      </footer>
    </SmoothScroll>
    </>
  );
}
