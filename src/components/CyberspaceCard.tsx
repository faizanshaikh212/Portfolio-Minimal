import { useEffect, useRef, useState } from "react";
import type { Theme } from "../../config/app";

export function CyberspaceCard({ theme }: { theme: Theme }) {
  const [isHovered, setIsHovered] = useState(false);
  const videoElements = useRef<Array<HTMLVideoElement | null>>([]);
  const hoverTimer = useRef<number | null>(null);
  const themeVideo = theme === "light"
    ? {
        src: "/assets/videos/clouds.mp4",
        poster: "/assets/images/clouds-poster.jpg",
      }
    : {
        src: "/assets/videos/gargantua.mp4",
        poster: "/assets/images/gargantua-poster.jpg",
      };

  function updateHoverState(hovered: boolean) {
    setIsHovered(hovered);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    for (const video of videoElements.current) {
      if (!video) {
        continue;
      }

      const currentFilter = getComputedStyle(video).filter;
      video.getAnimations().forEach((animation) => animation.cancel());
      video.animate(
        [
          { filter: currentFilter, offset: 0 },
          { filter: "blur(2px)", offset: 0.24 },
          { filter: "blur(4px)", offset: 0.5 },
          { filter: "blur(2px)", offset: 0.76 },
          { filter: "blur(0px)", offset: 1 },
        ],
        {
          duration: 900,
          easing: "cubic-bezier(0.4, 0, 0.2, 1)",
        },
      );
    }
  }

  function handlePointerEnter() {
    if (isHovered || hoverTimer.current !== null) {
      return;
    }

    hoverTimer.current = window.setTimeout(() => {
      hoverTimer.current = null;
      updateHoverState(true);
    }, 1000);
  }

  function handlePointerLeave() {
    if (hoverTimer.current !== null) {
      window.clearTimeout(hoverTimer.current);
      hoverTimer.current = null;
    }

    if (isHovered) {
      updateHoverState(false);
    }
  }

  useEffect(() => () => {
    if (hoverTimer.current !== null) {
      window.clearTimeout(hoverTimer.current);
    }
  }, []);

  return (
    <article
      className="glass-panel cyberspace-card group relative isolate col-start-1 row-start-2 col-span-4 flex min-h-[250px] items-center overflow-hidden rounded-[var(--card-radius)] border p-8 transition duration-500 hover:border-[var(--accent)] max-[820px]:col-start-auto max-[820px]:row-start-auto max-[820px]:col-span-6 max-[820px]:p-6 max-[600px]:col-span-full max-[600px]:min-h-[220px] max-[600px]:px-5"
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      <video
        ref={(element) => { videoElements.current[0] = element; }}
        className={`cyberspace-video absolute inset-0 size-full object-cover ${isHovered ? "opacity-0" : "opacity-100"}`}
        src={themeVideo.src}
        poster={themeVideo.poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <video
        ref={(element) => { videoElements.current[1] = element; }}
        className={`cyberspace-video absolute inset-0 size-full object-cover ${isHovered ? "opacity-100" : "opacity-0"}`}
        src="/assets/videos/moon.mp4"
        poster="/assets/images/moon-poster.jpg"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(4,12,27,0.7),rgba(4,12,27,0.18))] transition-opacity duration-300 group-hover:opacity-70" aria-hidden="true" />
      <h2 className="relative z-[2] m-0 max-w-[260px] text-[clamp(2rem,4.2vw,3.2rem)] font-medium tracking-[-0.06em] text-white">
        Enter the Cyberspace
      </h2>
    </article>
  );
}
