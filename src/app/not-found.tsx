import Link from "next/link";
import { FiArrowUpRight, FiArrowLeft } from "react-icons/fi";

export const metadata = {
  title: "Page not found — Dev Shrimali",
};

const STAR =
  "M 152 70.059 L 201.539 20.519 L 235.48 54.461 L 185.941 104 L 256 104 L 256 152 L 185.941 152 L 235.48 201.539 L 201.539 235.48 L 152 185.941 L 152 256 L 104 256 L 104 185.941 L 54.46 235.48 L 20.52 201.539 L 70.059 152 L 0 152 L 0 104 L 70.059 104 L 20.519 54.46 L 54.461 20.52 L 104 70.059 L 104 0 L 152 0 Z";

export default function NotFound() {
  return (
    <main className="relative min-h-screen bg-paper text-ink flex flex-col items-center justify-center px-6 overflow-hidden">
      {/* Warm glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(closest-side, rgba(232,89,12,0.12), transparent)" }}
        aria-hidden
      />

      {/* Giant 404 with orbiting star as the zero */}
      <div className="relative z-10 flex items-center gap-2 md:gap-5 mb-10">
        <span className="font-display text-[7rem] md:text-[14rem] leading-none text-ink">4</span>
        <svg
          viewBox="0 0 256 256"
          className="w-24 h-24 md:w-44 md:h-44 text-accent"
          fill="currentColor"
          style={{ animation: "spin 16s linear infinite" }}
          aria-hidden
        >
          <path d={STAR} />
        </svg>
        <span className="font-display text-[7rem] md:text-[14rem] leading-none text-ink">4</span>
      </div>

      <h1 className="relative z-10 font-display text-2xl md:text-4xl text-ink text-center mb-4">
        This page wandered off the <em className="italic text-accent">canvas.</em>
      </h1>
      <p className="relative z-10 text-muted text-center max-w-md mb-12 leading-relaxed">
        The link may be broken or the page moved. The work, the journey, and the
        case studies are all still right here.
      </p>

      <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2.5 px-7 py-4 rounded-full bg-accent text-paper text-[12px] font-bold uppercase tracking-[0.18em] hover:bg-ink transition-colors duration-300 active:scale-95"
        >
          <FiArrowLeft size={15} className="group-hover:-translate-x-1 transition-transform" />
          Back home
        </Link>
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 px-7 py-4 rounded-full border border-ink/20 text-ink text-[12px] font-bold uppercase tracking-[0.18em] hover:border-accent hover:text-accent transition-colors duration-300 active:scale-95"
        >
          Browse case studies
          <FiArrowUpRight size={15} />
        </Link>
      </div>

      <p className="absolute bottom-8 text-[11px] uppercase tracking-[0.18em] text-muted/60">
        © 2026 Dev Shrimali
      </p>
    </main>
  );
}
