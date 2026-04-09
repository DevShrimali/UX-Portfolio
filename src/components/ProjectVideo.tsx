"use client";
import { useEffect, useRef, useState, useId } from "react";

type Phase = "thumbnail" | "video" | "rest";

export default function ProjectVideo({
  ytId,
  thumbSrc,
  alt,
  delay = 4500,
}: {
  ytId: string;
  thumbSrc: string;
  alt: string;
  delay?: number;
}) {
  const [phase, setPhase] = useState<Phase>("thumbnail");
  const playerRef = useRef<any>(null);
  const mountedRef = useRef(true);

  const uniq = useId().replace(/:/g, "");
  const containerId = `yt-${ytId}-${uniq}`;

  // ─── Init YouTube Player (called after thumbnail phase) ───
  const initPlayer = () => {
    if (!mountedRef.current) return;

    const create = () => {
      if (!mountedRef.current) return;
      let endPoll: ReturnType<typeof setInterval> | null = null;

      const stopPoll = () => {
        if (endPoll) { clearInterval(endPoll); endPoll = null; }
      };

      const startPoll = (player: any) => {
        stopPoll();
        endPoll = setInterval(() => {
          if (!mountedRef.current) { stopPoll(); return; }
          try {
            const current = player.getCurrentTime();
            const duration = player.getDuration();
            // Treat as ended 3s before actual end
            if (duration > 0 && current >= duration - 3) {
              stopPoll();
              setPhase("rest");
              setTimeout(() => {
                if (!mountedRef.current) return;
                player.seekTo(3); // skip opening 3s on replay too
                player.mute();
                player.playVideo();
                setPhase("video");
                startPoll(player);
              }, 4000);
            }
          } catch (_) { stopPoll(); }
        }, 500);
      };

      playerRef.current = new (window as any).YT.Player(containerId, {
        videoId: ytId,
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          disablekb: 1,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          iv_load_policy: 3,
          start: 3, // skip first 3 seconds
        },
        events: {
          onReady: (e: any) => {
            if (!mountedRef.current) return;
            e.target.mute();
            e.target.seekTo(3); // ensure we start at 3s
            e.target.playVideo();
            setPhase("video");
            startPoll(e.target);
          },
          onStateChange: (e: any) => {
            if (!mountedRef.current) return;
            // Force play if stalled
            if (e.data === -1 || e.data === 5) {
              e.target.mute();
              e.target.playVideo();
            }
            // Native end fallback (in case poll misses it)
            if (e.data === 0) {
              stopPoll();
              setPhase("rest");
              setTimeout(() => {
                if (!mountedRef.current) return;
                e.target.seekTo(3);
                e.target.mute();
                e.target.playVideo();
                setPhase("video");
                startPoll(e.target);
              }, 4000);
            }
          },
        },
      });
    };

    if ((window as any).YT?.Player) {
      create();
    } else {
      // Load the API script once
      if (!document.querySelector('script[src*="youtube.com/iframe_api"]')) {
        const tag = document.createElement("script");
        tag.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(tag);
      }
      // Poll until ready
      const poll = setInterval(() => {
        if ((window as any).YT?.Player) {
          clearInterval(poll);
          create();
        }
      }, 100);
    }
  };

  useEffect(() => {
    mountedRef.current = true;

    // ① Show thumbnail for `delay` ms first, then load video
    const thumbTimer = setTimeout(() => {
      if (mountedRef.current) initPlayer();
    }, delay);

    return () => {
      mountedRef.current = false;
      clearTimeout(thumbTimer);
      if (playerRef.current?.destroy) playerRef.current.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ytId]);

  const showThumb = phase === "thumbnail" || phase === "rest";

  return (
    <>
      {/* YouTube iframe container — always rendered but hidden during thumb phases */}
      <div
        className="pointer-events-none absolute inset-0 w-full h-full flex items-center justify-center transform scale-[1.15]"
        style={{ opacity: phase === "video" ? 1 : 0, transition: "opacity 0.5s ease" }}
      >
        <div id={containerId} className="w-full h-full pointer-events-none" />
      </div>

      {/* Thumbnail overlay */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{ opacity: showThumb ? 1 : 0, transition: "opacity 0.5s ease" }}
      >
        <img src={thumbSrc} alt={alt} className="w-full h-full object-cover" />

        {/* Progress bar — only shown during rest phase */}
        {phase === "rest" && (
          <>
            <div
              className="absolute bottom-0 left-0 h-[3px] bg-[#bef264]"
              style={{ animation: "projectProgress 4s linear forwards" }}
            />
            <style>{`
              @keyframes projectProgress {
                0%   { width: 0%; }
                100% { width: 100%; }
              }
            `}</style>
          </>
        )}
      </div>
    </>
  );
}
