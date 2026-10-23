import { ContactCards } from "../components/ContactCards";
import { CyberspaceCard } from "../components/CyberspaceCard";
import { HeroSection } from "../components/HeroSection";
import { ProfileCards } from "../components/ProfileCards";
import { ProjectsSection } from "../components/ProjectsSection";
import { content } from "../../data/content";
import type { Theme } from "../../config/app";

export function HomePage({ theme }: { theme: Theme }) {
  return (
    <section className="mt-4 grid grid-cols-12 gap-[var(--card-gap)] max-[600px]:mt-3 max-[600px]:gap-3" id="top" aria-label={content.accessibility.introductionSection}>
      <HeroSection theme={theme} />
      <ProfileCards />
      <CyberspaceCard theme={theme} />
      <ProjectsSection theme={theme} />
      <ContactCards />
    </section>
  );
}
