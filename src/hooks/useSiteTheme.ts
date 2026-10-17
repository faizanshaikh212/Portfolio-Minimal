import { useLayoutEffect, useState } from "react";
import {
  createCraterLayout,
  INITIAL_CRATERS,
  type MoonCrater,
} from "../components/ThemeToggle";
import { siteConfig, type Theme } from "../../config/app";

function getInitialTheme(): Theme {
  try {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : siteConfig.defaultTheme;
  } catch (error) {
    console.warn("The saved theme could not be restored.", error);
    return siteConfig.defaultTheme;
  }
}

export function useSiteTheme(pageTitle: string): {
  theme: Theme;
  craters: MoonCrater[];
  toggleTheme: () => void;
} {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [craters, setCraters] = useState(INITIAL_CRATERS);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const colors = siteConfig.theme.colors[theme];

    document.title = pageTitle;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.style.setProperty("--theme-transition", siteConfig.theme.transition);
    root.style.setProperty("--max-width", siteConfig.layout.maxWidth);
    root.style.setProperty("--page-gutter", siteConfig.layout.pageGutter);
    root.style.setProperty("--card-radius", siteConfig.layout.cardRadius);
    root.style.setProperty("--card-gap", siteConfig.layout.cardGap);

    for (const [name, value] of Object.entries(colors)) {
      const propertyName = name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
      root.style.setProperty(`--${propertyName}`, value);
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", colors.page);
  }, [pageTitle, theme]);

  useLayoutEffect(() => {
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      console.warn("The theme preference could not be saved.", error);
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === "light") {
      setCraters(createCraterLayout());
    }
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return { theme, craters, toggleTheme };
}
