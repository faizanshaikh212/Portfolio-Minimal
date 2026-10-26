type ProjectSlideshow = {
  enabled: boolean;
  images: readonly string[];
};

const projectSlideshows: Record<string, ProjectSlideshow> = {
    "Portfolio-Cyberspace": {
      enabled: true,
      images: [
        "/assets/images/clouds-poster.jpg",
        "/assets/images/gargantua-poster.jpg",
        "/assets/images/moon-poster.jpg",
        "/assets/images/portfolio-cyberspace-preview.png",
      ],
    },
};

export const slideshowConfig = {
  intervalMs: 2800,
  projects: projectSlideshows,
} as const;
