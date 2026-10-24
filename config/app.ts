export type Theme = "light" | "dark";

const siteName = "Faizan Shaikh";

export const siteConfig = {
  siteName,
  metadata: {
    title: `${siteName}`,
    description:
      "Faizan Shaikh is a creative developer building thoughtful digital experiences through expressive code and design.",
    author: siteName,
  },
  defaultTheme: "dark" satisfies Theme,
  layout: {
    maxWidth: "1220px",
    navMaxWidth: "1220px",
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
        navActiveBg: "rgba(101, 214, 255, 0.16)",
        navActiveText: "#d9f7ff",
        navHoverBg: "rgba(101, 214, 255, 0.09)",
        navHoverText: "#bfeeff",
        actionBg: "#1b526a",
        actionText: "#eaf9ff",
        actionHoverBg: "#246781",
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
        navActiveBg: "rgba(22, 124, 190, 0.1)",
        navActiveText: "#315f7c",
        navHoverBg: "rgba(22, 124, 190, 0.07)",
        navHoverText: "#315f7c",
        actionBg: "#dcecf5",
        actionText: "#315f7c",
        actionHoverBg: "#cfe4f1",
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
  about: {
    showProfile: true,
    showOverview: true,
    showExperience: true,
    showEducation: true,
  },
} as const;
