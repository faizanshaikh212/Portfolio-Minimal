export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  href: string;
  visual: "finance" | "controller" | "lifeboat" | "academic";
}

const projects: Project[] = [
  {
    title: "Financial Cryosis",
    category: "Private finance, made clear",
    year: "2026",
    description:
      "A local-first finance desk that brings everyday money data together without turning it into a social feed.",
    technologies: ["Electron", "React", "Tailwind CSS", "SQLite", "Zustand", "Recharts"],
    href: "https://financial-cryosis.vercel.app/",
    visual: "finance",
  },
  {
    title: "Mobile Konekt",
    category: "A phone becomes a gamepad",
    year: "2026",
    description:
      "A browser-based controller that lets phones connect to Linux games, wired or wireless.",
    technologies: ["Electron", "React", "Tailwind CSS", "Cryptography", "WebSocket", "Evdev"],
    href: "https://github.com/faizanshaikh212/mobile-konekt",
    visual: "controller",
  },
  {
    title: "LifeBoat",
    category: "Personal life management",
    year: "2026",
    description:
      "A privacy-first desktop app for everyday planning and personal life management, designed to work entirely offline.",
    technologies: ["Python", "PyQt6", "Peewee", "PyYAML"],
    href: "https://github.com/faiz-n-shk/LifeBoat",
    visual: "lifeboat",
  },
  {
    title: "AcademicVault-Connect",
    category: "Academic resource sharing",
    year: "2025–2026",
    description:
      "A full-stack platform that helps students, teachers, and academic staff organize, share, and discover learning resources.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "Cloudinary", "MongoDB"],
    href: "https://academic-vault-connect.vercel.app/",
    visual: "academic",
  },
];

export default projects;
