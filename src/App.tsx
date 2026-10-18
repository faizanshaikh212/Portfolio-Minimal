import { ContactCards } from "./components/ContactCards";
import { CyberspaceCard } from "./components/CyberspaceCard";
import { HeroSection } from "./components/HeroSection";
import { ProfileCards } from "./components/ProfileCards";
import { ProjectsSection } from "./components/ProjectsSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { useSiteTheme } from "./hooks/useSiteTheme";
import { siteConfig } from "../config/app";
import { content } from "../data/content";

export default function App() {
  const { profile } = content;
  const { theme, craters, toggleTheme } = useSiteTheme(
    `${siteConfig.siteName} — ${profile.role}`,
  );

  return (
    <main className="mx-auto w-[calc(100%-2*var(--page-gutter))] max-w-[var(--max-width)] pt-5 max-[600px]:pt-3">
      <SiteHeader theme={theme} craters={craters} onToggleTheme={toggleTheme} />
      <div className="h-[68px] max-[600px]:h-[60px]" aria-hidden="true" />
      <section className="mt-4 grid grid-cols-12 gap-[var(--card-gap)] max-[600px]:mt-3 max-[600px]:gap-3" id="top" aria-label="Introduction">
        <HeroSection />
        <ProfileCards />
        <CyberspaceCard />
        <ProjectsSection />
        <ContactCards />
      </section>
      <SiteFooter />
    </main>
  );
}
