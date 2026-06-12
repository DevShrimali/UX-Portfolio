"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const logoImages = [
  "/brand-logos/Yowza-logo.png",
  "/brand-logos/Avron-bgs.png",
  "/brand-logos/BC-R.png",
  "/brand-logos/Janny-point.png",
  "/brand-logos/Metrolink.png",
  "/brand-logos/Shehnai.png",
  "/brand-logos/kp.png",
  "/brand-logos/lone-app.png",
  "/brand-logos/msq.png",
  "/brand-logos/old-automotive.png",
  "/brand-logos/raise-fitness.png",
  "/brand-logos/rj-build.png",
  "/brand-logos/vishwashetra.png",
];

const ANIMATION_TYPES = [
  "slideLeft",
  "slideRight",
  "slideUp",
  "slideDown",
  "rotateFlip"
];

export default function AnimatedLogoThumbnail() {
  const containerRef = useRef<HTMLDivElement>(null);
  const currentImgRef = useRef<HTMLImageElement>(null);
  const prevImgRef = useRef<HTMLImageElement>(null);

  const [currentIdx, setCurrentIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(0);
  const [animType, setAnimType] = useState("slideLeft");
  const [trigger, setTrigger] = useState(0);

  // Cycle interval to change logos
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick next index
      setCurrentIdx((prevVal) => {
        let newIdx = Math.floor(Math.random() * logoImages.length);
        while (newIdx === prevVal) {
          newIdx = Math.floor(Math.random() * logoImages.length);
        }
        setPrevIdx(prevVal);
        return newIdx;
      });
      // Pick a random animation
      const nextAnim = ANIMATION_TYPES[Math.floor(Math.random() * ANIMATION_TYPES.length)];
      setAnimType(nextAnim);
      setTrigger((t) => t + 1);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  // GSAP animation triggered when trigger increments
  useEffect(() => {
    if (trigger === 0) return; // Skip initial mount

    const container = containerRef.current;
    const currentImg = currentImgRef.current;
    const prevImg = prevImgRef.current;
    if (!container || !currentImg || !prevImg) return;

    // Kill existing tweens on these elements to prevent overlaps
    gsap.killTweensOf([currentImg, prevImg]);

    // Reset styles
    gsap.set(currentImg, { clearProps: "all" });
    gsap.set(prevImg, { clearProps: "all" });

    // Set z-indices and visibility: current sits on top, prev sits underneath
    gsap.set(currentImg, { zIndex: 10, display: "block" });
    gsap.set(prevImg, { zIndex: 5, display: "block" });

    const duration = 0.85;
    const ease = "power2.inOut";

    switch (animType) {
      case "slideLeft":
        gsap.set(currentImg, { xPercent: 100, scale: 1.05 });
        gsap.to(currentImg, { xPercent: 0, scale: 1, duration, ease });
        gsap.to(prevImg, { xPercent: -30, opacity: 0.5, duration, ease });
        break;

      case "slideRight":
        gsap.set(currentImg, { xPercent: -100, scale: 1.05 });
        gsap.to(currentImg, { xPercent: 0, scale: 1, duration, ease });
        gsap.to(prevImg, { xPercent: 30, opacity: 0.5, duration, ease });
        break;

      case "slideUp":
        gsap.set(currentImg, { yPercent: 100, scale: 1.05 });
        gsap.to(currentImg, { yPercent: 0, scale: 1, duration, ease });
        gsap.to(prevImg, { yPercent: -30, opacity: 0.5, duration, ease });
        break;

      case "slideDown":
        gsap.set(currentImg, { yPercent: -100, scale: 1.05 });
        gsap.to(currentImg, { yPercent: 0, scale: 1, duration, ease });
        gsap.to(prevImg, { yPercent: 30, opacity: 0.5, duration, ease });
        break;

      case "scaleFade":
        gsap.set(currentImg, { scale: 1.3, opacity: 0 });
        gsap.to(currentImg, { scale: 1, opacity: 1, duration, ease });
        gsap.to(prevImg, { scale: 0.8, opacity: 0, duration, ease });
        break;

      case "clipCircle":
        gsap.set(currentImg, { clipPath: "circle(0% at 50% 50%)" });
        gsap.to(currentImg, { clipPath: "circle(150% at 50% 50%)", duration: 1.0, ease: "power3.inOut" });
        break;

      case "blurFade":
        gsap.set(currentImg, { opacity: 0, filter: "blur(20px)", scale: 0.95 });
        gsap.to(currentImg, { opacity: 1, filter: "blur(0px)", scale: 1, duration: 0.9, ease });
        gsap.to(prevImg, { opacity: 0, filter: "blur(15px)", scale: 1.05, duration: 0.9, ease });
        break;

      case "rotateFlip":
        gsap.set(container, { perspective: 1000 });
        gsap.set(currentImg, { rotationY: 90, opacity: 0, transformOrigin: "50% 50%" });
        gsap.to(prevImg, { rotationY: -90, opacity: 0, duration: 0.45, ease: "power2.in" });
        gsap.to(currentImg, { rotationY: 0, opacity: 1, duration: 0.5, delay: 0.35, ease: "power2.out" });
        break;

      default:
        // Crossfade fallback
        gsap.set(currentImg, { opacity: 0 });
        gsap.to(currentImg, { opacity: 1, duration: 0.8, ease });
        gsap.to(prevImg, { opacity: 0, duration: 0.8, ease });
    }
  }, [trigger, animType]);

  return (
    <div ref={containerRef} className="relative w-full h-full overflow-hidden bg-black select-none pointer-events-none">
      {/* Outgoing Image */}
      <img
        ref={prevImgRef}
        src={logoImages[prevIdx]}
        alt="Logo showcase previous"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ display: trigger === 0 ? "none" : "block", transformStyle: "preserve-3d" }}
      />
      {/* Incoming Image */}
      <img
        ref={currentImgRef}
        src={logoImages[currentIdx]}
        alt="Logo showcase current"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
        style={{ transformStyle: "preserve-3d" }}
      />
    </div>
  );
}
