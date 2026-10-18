export type Theme = "light" | "dark";

export const siteConfig = {
  siteName: "Faizan Shaikh",
  defaultTheme: "dark" satisfies Theme,
  layout: {
    maxWidth: "1120px",
    pageGutter: "clamp(1rem, 4vw, 2.25rem)",
    cardRadius: "28px",
    cardGap: "1rem",
  },
  theme: {
    colors: {
      dark: {
        page: "#081326",
        text: "#eaf4ff",
        surface: "rgba(137, 178, 224, 0.075)",
        raised: "rgba(137, 178, 224, 0.12)",
        muted: "#9bb1ca",
        line: "rgba(163, 196, 230, 0.16)",
        accent: "#8dc8ff",
        accentSoft: "rgba(141, 200, 255, 0.16)",
        ambient: "rgba(45, 128, 202, 0.2)",
      },
      light: {
        page: "#eaf5fc",
        text: "#18334a",
        surface: "rgba(255, 255, 255, 0.58)",
        raised: "rgba(255, 255, 255, 0.82)",
        muted: "#617d94",
        line: "rgba(58, 112, 153, 0.16)",
        accent: "#167cbe",
        accentSoft: "rgba(22, 124, 190, 0.13)",
        ambient: "rgba(88, 163, 216, 0.22)",
      },
    } satisfies Record<Theme, Record<string, string>>,
    transition: "220ms",
  },
  home: {
    showAvailability: true,
    showSkills: true,
    showProjects: true,
  },
} as const;
