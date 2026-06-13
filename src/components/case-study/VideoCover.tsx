"use client";
import { useState } from "react";
import { getYtId, ytThumb } from "@/data/projects";

/** Click-to-play YouTube cover with a custom play button. */
export default function VideoCover({ videoUrl, title }: { videoUrl: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  const videoId = getYtId(videoUrl) ?? "";
  const thumbnail = ytThumb(videoId);

  return (
    <div className="relative w-full aspect-video rounded-[1.8rem] overflow-hidden border border-line bg-ink group">
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={thumbnail}
            alt={`${title} video thumbnail`}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-ink/35 group-hover:bg-ink/25 transition-colors duration-300" />
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex items-center justify-center"
            aria-label="Play video"
          >
            <span className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-paper flex items-center justify-center shadow-[0_18px_40px_rgba(43,33,24,0.35)] transition-all duration-300 group-hover:scale-110 group-hover:bg-accent">
              <svg
                viewBox="0 0 24 24"
                className="w-6 h-6 md:w-7 md:h-7 fill-ink ml-1 group-hover:fill-paper transition-colors"
                aria-hidden
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
          <span className="absolute bottom-4 left-5 text-[9px] uppercase tracking-[0.18em] text-paper/60">
            Design walkthrough
          </span>
        </>
      )}
    </div>
  );
}
