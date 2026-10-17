import { ContactCards } from "./components/ContactCards";
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
    <main className="site-shell">
      <SiteHeader theme={theme} craters={craters} onToggleTheme={toggleTheme} />
      <section className="bento-grid" id="top" aria-label="Introduction">
        <HeroSection />
        <ProfileCards />
        <ProjectsSection />
        <ContactCards />
      </section>
      <SiteFooter />
    </main>
  );
}
