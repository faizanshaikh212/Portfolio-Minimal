import { useEffect, useState } from "react";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";
import { HomePage } from "./pages/HomePage";
import { useSiteTheme } from "./hooks/useSiteTheme";
import { siteConfig } from "../config/app";

type Page = "home" | "about" | "contact";

function currentPage(): Page {
  if (window.location.pathname === "/about") {
    return "about";
  }
  return window.location.pathname === "/contact" ? "contact" : "home";
}

export default function App() {
  const [page, setPage] = useState<Page>(currentPage);
  const pageTitle = page === "home"
    ? siteConfig.metadata.title
    : `${siteConfig.metadata.title} — ${page === "about" ? "About" : "Contact"}`;
  const { theme, craters, toggleTheme } = useSiteTheme(pageTitle);

  useEffect(() => {
    const syncPage = () => setPage(currentPage());
    window.addEventListener("popstate", syncPage);
    return () => window.removeEventListener("popstate", syncPage);
  }, []);

  function navigate(path: "/" | "/about" | "/contact") {
    if (window.location.pathname !== path) {
      window.history.pushState({}, "", path);
    }
    setPage(path === "/about" ? "about" : path === "/contact" ? "contact" : "home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="mx-auto w-[calc(100%-2*var(--page-gutter))] max-w-[var(--max-width)] pt-5 max-[600px]:pt-3">
      <SiteHeader theme={theme} craters={craters} onToggleTheme={toggleTheme} currentPage={page} onNavigate={navigate} />
      <div className="h-[68px] max-[600px]:h-[60px]" aria-hidden="true" />
      {page === "about" ? <AboutPage theme={theme} /> : page === "contact" ? <ContactPage /> : <HomePage theme={theme} />}
      <SiteFooter />
    </main>
  );
}
