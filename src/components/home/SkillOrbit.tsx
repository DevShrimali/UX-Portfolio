"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { heroSkills } from "@/data/profile";

const SIZE = 640;
const C = SIZE / 2;
const INNER_R = 158;
const OUTER_R = 252;

const STAR_PATH =
  "M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z";

type Node = { label: string; x: number; y: number; accent: boolean };

function ringNodes(labels: string[], radius: number, offsetDeg: number): Node[] {
  return labels.map((label, i) => {
    const angle = ((360 / labels.length) * i + offsetDeg) * (Math.PI / 180);
    return {
      label,
      x: C + radius * Math.cos(angle),
      y: C + radius * Math.sin(angle),
      accent: i % 3 === 0,
    };
  });
}

function SkillPill({ node }: { node: Node }) {
  // Approximate pill width from label length (12px font, generous padding)
  const w = node.label.length * 7.4 + 34;
  const h = 32;
  return (
    <g className="orbit-node" transform={`translate(${node.x}, ${node.y})`}>
      <g className="orbit-node-inner">
        <rect
          x={-w / 2}
          y={-h / 2}
          width={w}
          height={h}
          rx={h / 2}
          className={node.accent ? "fill-accent" : "fill-card"}
          stroke={node.accent ? "none" : "var(--color-line)"}
          strokeWidth="1.5"
        />
        <text
          textAnchor="middle"
          dominantBaseline="central"
          className={node.accent ? "fill-paper" : "fill-ink"}
          style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.04em" }}
        >
          {node.label}
        </text>
      </g>
    </g>
  );
}

/**
 * Animated SVG: skills orbiting a spinning brand asterisk on two rings.
 * Rings rotate in opposite directions; each pill counter-rotates so the
 * labels stay readable. Static when the user prefers reduced motion.
 */
export default function SkillOrbit({ className }: { className?: string }) {
  const rootRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const spin = (sel: string, dur: number, dir: 1 | -1) => {
        gsap.to(sel, {
          rotation: 360 * dir,
          duration: dur,
          ease: "none",
          repeat: -1,
          svgOrigin: `${C} ${C}`,
        });
      };

      // Rings drift in opposite directions; pills counter-rotate to stay upright
      spin(".orbit-ring-inner", 55, 1);
      gsap.to(".orbit-ring-inner .orbit-node-inner", {
        rotation: -360,
        duration: 55,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
      });

      spin(".orbit-ring-outer", 80, -1);
      gsap.to(".orbit-ring-outer .orbit-node-inner", {
        rotation: 360,
        duration: 80,
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
      });

      // Center star: slow rotation + heartbeat scale
      gsap.to(".orbit-star", {
        rotation: 360,
        duration: 24,
        ease: "none",
        repeat: -1,
        svgOrigin: `${C} ${C}`,
      });

      // Sonar pulses expanding from the center
      gsap.utils.toArray<SVGCircleElement>(".orbit-pulse").forEach((el, i) => {
        gsap.fromTo(
          el,
          { attr: { r: 60 }, opacity: 0.5 },
          {
            attr: { r: OUTER_R },
            opacity: 0,
            duration: 4,
            ease: "power1.out",
            repeat: -1,
            delay: i * 2,
          }
        );
      });

      // Entrance: pills pop in with stagger
      gsap.fromTo(
        ".orbit-node-inner",
        { scale: 0, opacity: 0, transformOrigin: "center center" },
        {
          scale: 1,
          opacity: 1,
          duration: 0.7,
          stagger: 0.07,
          delay: 0.6,
          ease: "back.out(1.6)",
        }
      );
    }, root);

    return () => ctx.revert();
  }, []);

  const inner = ringNodes(heroSkills.inner, INNER_R, -45);
  const outer = ringNodes(heroSkills.outer, OUTER_R, 12);

  return (
    <svg
      ref={rootRef}
      viewBox={`-60 -30 ${SIZE + 120} ${SIZE + 60}`}
      className={className}
      role="img"
      aria-label={`Skills: ${[...heroSkills.inner, ...heroSkills.outer].join(", ")}`}
    >
      {/* Orbit guides */}
      <circle
        cx={C}
        cy={C}
        r={INNER_R}
        fill="none"
        stroke="var(--color-line)"
        strokeWidth="1.5"
        strokeDasharray="3 7"
      />
      <circle
        cx={C}
        cy={C}
        r={OUTER_R}
        fill="none"
        stroke="var(--color-line)"
        strokeWidth="1.5"
      />

      {/* Sonar pulses */}
      <circle className="orbit-pulse" cx={C} cy={C} r={60} fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0" />
      <circle className="orbit-pulse" cx={C} cy={C} r={60} fill="none" stroke="var(--color-accent)" strokeWidth="1" opacity="0" />

      {/* Center: tinted disc + spinning asterisk */}
      <circle cx={C} cy={C} r={86} className="fill-accent-soft" />
      <g className="orbit-star">
        <g transform={`translate(${C - 44}, ${C - 44}) scale(0.344)`}>
          <path d={STAR_PATH} className="fill-accent" />
        </g>
      </g>

      {/* Inner ring */}
      <g className="orbit-ring-inner">
        {inner.map((n) => (
          <SkillPill key={n.label} node={n} />
        ))}
      </g>

      {/* Outer ring */}
      <g className="orbit-ring-outer">
        {outer.map((n) => (
          <SkillPill key={n.label} node={n} />
        ))}
        {/* Accent dots between pills */}
        {[40, 160, 285].map((deg) => {
          const a = (deg * Math.PI) / 180;
          return (
            <circle
              key={deg}
              cx={C + OUTER_R * Math.cos(a)}
              cy={C + OUTER_R * Math.sin(a)}
              r={5}
              className="fill-accent"
            />
          );
        })}
      </g>
    </svg>
  );
}
