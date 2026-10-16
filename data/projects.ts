export interface Project {
  title: string;
  category: string;
  year: string;
  description: string;
  technologies: string[];
  href: string;
  visual: "finance" | "controller";
}

const projects: Project[] = [
  {
    title: "Financial Cryosis",
    category: "Private finance, made clear",
    year: "2026",
    description:
      "A local-first finance desk that brings everyday money data together without turning it into a social feed.",
    technologies: ["React", "Electron", "SQLite"],
    href: "https://financial-cryosis.vercel.app/",
    visual: "finance",
  },
  {
    title: "Mobile Konekt",
    category: "A phone becomes a gamepad",
    year: "2026",
    description:
      "A browser-based controller that lets phones connect to Linux games, wired or wireless.",
    technologies: ["React", "Electron", "WebSocket"],
    href: "https://github.com/faizanshaikh212/mobile-konekt",
    visual: "controller",
  },
];

export default projects;
