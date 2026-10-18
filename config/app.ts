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
        page: "#0d0f11",
        text: "#f2f5f7",
        surface: "rgba(13, 22, 29, 0.82)",
        raised: "rgba(21, 33, 41, 0.86)",
        muted: "#a0a8ae",
        line: "rgba(126, 183, 204, 0.2)",
        accent: "#65d6ff",
        accentSoft: "rgba(62, 186, 226, 0.16)",
        ambient: "rgba(20, 126, 158, 0.13)",
        gridLine: "rgba(150, 190, 204, 0.055)",
        glassHighlight: "rgba(255, 255, 255, 0.075)",
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
        gridLine: "rgba(58, 112, 153, 0.07)",
        glassHighlight: "rgba(255, 255, 255, 0.72)",
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
