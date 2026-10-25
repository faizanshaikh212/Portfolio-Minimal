import { useEffect, useRef, useState } from "react";

type HoverMedia = HTMLImageElement | HTMLVideoElement;

export function useMediaHover() {
  const [isHovered, setIsHovered] = useState(false);
  const mediaElements = useRef<Array<HoverMedia | null>>([]);
  const hoverTimer = useRef<number | null>(null);

  function updateHoverState(hovered: boolean) {
    setIsHovered(hovered);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    for (const media of mediaElements.current) {
      if (!media) {
        continue;
      }

      const currentFilter = getComputedStyle(media).filter;
      media.getAnimations().forEach((animation) => animation.cancel());
      media.animate(
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
    mediaElements,
    handlePointerEnter,
    handlePointerLeave,
  };
}
