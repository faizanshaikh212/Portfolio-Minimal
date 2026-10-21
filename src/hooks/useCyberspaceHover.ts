import { useEffect, useRef, useState } from "react";

export function useCyberspaceHover() {
  const [isHovered, setIsHovered] = useState(false);
  const videoElements = useRef<Array<HTMLVideoElement | null>>([]);
  const hoverTimer = useRef<number | null>(null);

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

  return {
    isHovered,
    videoElements,
    handlePointerEnter,
    handlePointerLeave,
  };
}
