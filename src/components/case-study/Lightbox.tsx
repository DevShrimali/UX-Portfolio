"use client";
import { useState, useEffect, useCallback } from "react";
import { FiX, FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[80] bg-ink/95 backdrop-blur-sm flex items-center justify-center"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Image gallery"
    >
      <button
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-5 right-5 text-paper/50 hover:text-paper transition-colors z-10 p-2"
      >
        <FiX size={22} />
      </button>

      <p className="absolute top-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.2em] text-paper/40">
        {String(current + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
      </p>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); prev(); }}
          aria-label="Previous image"
          className="absolute left-4 md:left-8 text-paper/40 hover:text-paper transition-colors p-3 rounded-full hover:bg-paper/10"
        >
          <FiChevronLeft size={28} />
        </button>
      )}

      <div
        className="max-w-5xl max-h-[85vh] w-full mx-16 flex items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[current]}
          alt={`Gallery image ${current + 1}`}
          className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
        />
      </div>

      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); next(); }}
          aria-label="Next image"
          className="absolute right-4 md:right-8 text-paper/40 hover:text-paper transition-colors p-3 rounded-full hover:bg-paper/10"
        >
          <FiChevronRight size={28} />
        </button>
      )}

      {images.length > 1 && (
        <div className="absolute bottom-6 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
              aria-label={`Go to image ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === current ? "bg-accent w-5" : "bg-paper/20 w-1.5"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
