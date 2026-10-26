export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  href: string;
  images: Record<"dark" | "light", string>;
}

const projects: Project[] = [
  {
    title: "Portfolio-Cyberspace",
    category: "An immersive portfolio experience",
    year: "2026",
    description:
      "A richly interactive portfolio built around cinematic themes, expressive motion, and detailed project stories. It blends a responsive React interface with Three.js atmospheres, synthesized audio, and a hidden secret archive for a distinctive way to explore my creative work.",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Three.js / WebGL",
      "Framer Motion",
      "GSAP",
      "Web Audio API",
    ],
    href: "https://faizanshaikh212.vercel.app/",
    images: {
      dark: "/assets/images/portfolio-cyberspace-preview.png",
      light: "/assets/images/portfolio-cyberspace-preview.png",
    },
  },
  {
    title: "Financial Cryosis",
    category: "Private finance, made clear",
    year: "2026",
    description:
      "A local-first finance desk that brings everyday money data together without turning it into a social feed.",
    technologies: ["Electron", "React", "Tailwind CSS", "SQLite", "Zustand", "Recharts"],
    href: "https://financial-cryosis.vercel.app/",
    images: {
      dark: "/assets/images/financial-cryosis-dark.webp",
      light: "/assets/images/financial-cryosis-light.webp",
    },
  },
  {
    title: "Mobile Konekt",
    category: "A phone becomes a gamepad",
    year: "2026",
    description:
      "A browser-based controller that lets phones connect to Linux games, wired or wireless.",
    technologies: ["Electron", "React", "Tailwind CSS", "Cryptography", "WebSocket", "Evdev"],
    href: "https://github.com/faizanshaikh212/mobile-konekt",
    images: {
      dark: "/assets/images/mobile-konekt-dark.webp",
      light: "/assets/images/mobile-konekt-light.webp",
    },
  },
  {
    title: "LifeBoat",
    category: "Personal life management",
    year: "2026",
    description:
      "A privacy-first desktop app for everyday planning and personal life management, designed to work entirely offline.",
    technologies: ["Python", "PyQt6", "Peewee", "PyYAML"],
    href: "https://github.com/faiz-n-shk/LifeBoat",
    images: {
      dark: "/assets/images/life-boat-dark.webp",
      light: "/assets/images/life-boat-light.webp",
    },
  },
  {
    title: "AcademicVault-Connect",
    category: "Academic resource sharing",
    year: "2025–2026",
    description:
      "A full-stack platform that helps students, teachers, and academic staff organize, share, and discover learning resources.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "Cloudinary", "MongoDB"],
    href: "https://academic-vault-connect.vercel.app/",
    images: {
      dark: "/assets/images/academic-vault-dark.webp",
      light: "/assets/images/academic-vault-light.webp",
    },
  },
  {
    title: "Portfolio-Minimal",
    category: "A minimal-bento styled portfolio",
    year: "2026",
    description:
      "The site you’re viewing now: a responsive portfolio built with React, TypeScript, and Vite. Its bento-style layout uses a cohesive light and dark blue-glass theme, with projects and skills organized as editable data and site-wide presentation options kept in config. It also features a dedicated About page, live age counter, animated technology belt, and theme-aware project previews.",
    technologies: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "Lucide React", "React Icons"],
    href: "/",
    images: {
      dark: "/assets/images/portfolio-minimal-preview.webp",
      light: "/assets/images/portfolio-minimal-preview.webp",
    },
  },
  
];

export default projects;
