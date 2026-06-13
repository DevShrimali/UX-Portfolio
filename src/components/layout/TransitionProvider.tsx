"use client";
import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TransitionContext = createContext<{
  triggerTransition: (href: string) => void;
} | null>(null);

export const useTransition = () => {
  const context = useContext(TransitionContext);
  if (!context) throw new Error("useTransition must be used within a TransitionProvider");
  return context;
};

export default function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<SVGSVGElement>(null);
  const numberRef = useRef<HTMLDivElement>(null);
  
  const [count, setCount] = useState(0);
  const [isInitialLoading, setIsInitialLoading] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pendingOpenRef = useRef(false);

  useEffect(() => {
    const hasVisited = sessionStorage.getItem("hasVisited");
    if (!hasVisited) {
      // Deferred so the state update lands after the hydration paint,
      // avoiding a cascading render inside the effect body.
      const t = setTimeout(() => setIsInitialLoading(true), 0);
      return () => clearTimeout(t);
    }
    // Sync GSAP state with the CSS class transforms
    if (topPanelRef.current && bottomPanelRef.current) {
      gsap.set(topPanelRef.current, { yPercent: -100 });
      gsap.set(bottomPanelRef.current, { yPercent: 100 });
    }
  }, []);

  function runInitialPreloader() {
    // Continuous rotation for star logo
    const spin = gsap.to(starRef.current, {
      rotation: 360,
      duration: 2.5,
      ease: "none",
      repeat: -1,
      transformOrigin: "center center",
    });

    // Fade logo and numbers in
    gsap.fromTo(
      [brandRef.current, numberRef.current],
      { opacity: 0, y: 24 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" }
    );

    let progress = 0;
    
    const triggerExit = () => {
      const tl = gsap.timeline();
      
      // Fade out logo and percentage numbering overlay together before the curtain opens
      tl.to([brandRef.current, numberRef.current], {
        opacity: 0,
        y: -20,
        duration: 0.4,
        ease: "power2.in",
      });

      tl.to(topPanelRef.current, {
        yPercent: -100,
        duration: 0.85,
        ease: "power3.inOut",
      }, "-=0.05");

      tl.to(bottomPanelRef.current, {
        yPercent: 100,
        duration: 0.85,
        ease: "power3.inOut",
      }, "<");

      tl.call(() => {
        spin.kill();
        sessionStorage.setItem("hasVisited", "true");
        setIsInitialLoading(false);
        // Add class to document to persistent-CSS-hide the preloader overlay on refresh
        document.documentElement.classList.add("has-visited");
        ScrollTrigger.refresh();
      });
    };

    const interval = setInterval(() => {
      const isReady = document.readyState === "complete";
      if (progress < 99) {
        progress += Math.random() * 3 + 1;
        if (progress >= 99) progress = 99;
        setCount(Math.floor(progress));
      } else {
        if (isReady) {
          clearInterval(interval);
          setCount(100);
          setTimeout(triggerExit, 200);
        }
      }
    }, 40);
  }

  function triggerTransition(href: string) {
    if (isTransitioning || isInitialLoading) return;
    setIsTransitioning(true);
    
    const tl = gsap.timeline();
    // Slide top and bottom curtain panels shut
    tl.to(topPanelRef.current, {
      yPercent: 0,
      duration: 0.55,
      ease: "power3.inOut",
    });
    tl.to(bottomPanelRef.current, {
      yPercent: 0,
      duration: 0.55,
      ease: "power3.inOut",
    }, "<");
    
    tl.call(() => {
      pendingOpenRef.current = true;
      router.push(href);
    });
  }

  function slideCurtainOpen() {
    const tl = gsap.timeline();
    // Slide top and bottom curtain panels open
    tl.to(topPanelRef.current, {
      yPercent: -100,
      duration: 0.6,
      ease: "power3.inOut",
      delay: 0.1,
    });
    tl.to(bottomPanelRef.current, {
      yPercent: 100,
      duration: 0.6,
      ease: "power3.inOut",
    }, "<");
    
    tl.call(() => {
      setIsTransitioning(false);
      ScrollTrigger.refresh();
    });
  }

  // Trigger preloader animations only after elements are mounted and refs are bound
  useEffect(() => {
    if (isInitialLoading && brandRef.current && numberRef.current) {
      runInitialPreloader();
    }
  }, [isInitialLoading]);

  // Slide open once NextJS has completed the route change/pathname change
  useEffect(() => {
    console.log("pathname changed:", pathname, "pendingOpenRef:", pendingOpenRef.current);
    if (pendingOpenRef.current) {
      pendingOpenRef.current = false;
      slideCurtainOpen();
    }
  }, [pathname]);

  // Intercept normal document clicks to internal links to handle route transitions
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      const targetAttr = anchor.getAttribute("target");
      const isDownload = anchor.hasAttribute("download");
      
      // Intercept internal relative links, exclude downloads, anchors, blank targets
      if (
        href &&
        href.startsWith("/") &&
        !href.startsWith("/#") &&
        targetAttr !== "_blank" &&
        !isDownload &&
        !e.metaKey &&
        !e.ctrlKey
      ) {
        console.log("Intercepted click to:", href);
        e.preventDefault();
        e.stopPropagation();
        triggerTransition(href);
      }
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => document.removeEventListener("click", handleLinkClick, { capture: true });
  }, [isTransitioning, isInitialLoading]);

  return (
    <TransitionContext.Provider value={{ triggerTransition }}>
      {children}

      {/* Global Preloader and Transition Curtain Overlay */}
      <div 
        className={`fixed inset-0 z-[999] ${
          isInitialLoading || isTransitioning ? "pointer-events-auto cursor-wait" : "pointer-events-none"
        }`}
      >
        {/* Top panel */}
        <div
          ref={topPanelRef}
          className="absolute inset-x-0 top-0 h-1/2 bg-surface panel-top"
        />

        {/* Bottom panel */}
        <div
          ref={bottomPanelRef}
          className="absolute inset-x-0 bottom-0 h-1/2 bg-surface panel-bottom"
        />

        {/* Brand visual (only visible on initial session loader) */}
        {isInitialLoading && (
          <>
            <div
              ref={brandRef}
              className="absolute inset-0 flex flex-col items-center justify-center opacity-0 z-10"
            >
              {/* Rotating star logo */}
              <svg
                ref={starRef}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                className="w-16 h-16 text-accent mb-6"
                fill="currentColor"
              >
                <path d="M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z" />
              </svg>

              {/* Wordmark */}
              <p className="text-paper text-lg tracking-[0.4em] uppercase">
                <span className="font-light">DEV</span>
                <span className="font-bold">UX.</span>
              </p>
            </div>

            {/* Percentage numbering overlay */}
            <div ref={numberRef} className="absolute bottom-8 left-8 z-10 pointer-events-none opacity-0">
              <span
                className="text-paper leading-none select-none flex items-baseline"
                style={{ fontWeight: 400, opacity: 0.12, letterSpacing: "-0.04em" }}
              >
                <span style={{ fontSize: "clamp(5rem, 12vw, 8rem)" }}>
                  {String(count).padStart(2, "0")}
                </span>
                <span style={{ fontSize: "clamp(1.8rem, 4vw, 2.5rem)", marginLeft: "0.5rem" }}>%</span>
              </span>
            </div>
          </>
        )}
      </div>
    </TransitionContext.Provider>
  );
}
