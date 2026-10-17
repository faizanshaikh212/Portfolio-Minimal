import { siteConfig } from "../../config/app";
import { content } from "../../data/content";
import projects from "../../data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsSection() {
  const { home } = content;
  const visibleProjects = projects.slice(0, siteConfig.home.projectLimit);

  if (!siteConfig.home.showProjects) {
    return null;
  }

  return (
    <section className="col-span-full scroll-mt-6 pt-10 max-[600px]:pt-6" id="work" aria-labelledby="work-title">
      <div className="mb-4 flex items-end justify-between px-1">
        <div>
          <p className="m-0 flex items-center gap-[0.55rem] text-[0.65rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[var(--muted)]">{home.projectsEyebrow}</p>
          <h2 className="mb-0 mt-2 text-[clamp(1.9rem,4vw,2.65rem)] font-medium tracking-[-0.07em]" id="work-title">{home.projectsTitle}</h2>
        </div>
        <span className="text-xs text-[var(--muted)]" aria-label={home.projectCountLabel}>
          {String(visibleProjects.length).padStart(2, "0")}
        </span>
      </div>
      <div className="grid grid-cols-2 gap-[var(--card-gap)] max-[600px]:grid-cols-1 max-[600px]:gap-3">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
