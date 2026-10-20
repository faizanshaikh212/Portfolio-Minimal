import { siteConfig } from "../../config/app";
import { content } from "../../data/content";
import projects from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import type { Theme } from "../../config/app";

export function ProjectsSection({ theme }: { theme: Theme }) {
  const { home } = content;

  if (!siteConfig.home.showProjects) {
    return null;
  }

  return (
    <section className="col-span-full scroll-mt-6 pt-10 max-[600px]:pt-6" id="work" aria-labelledby="work-title">
      <div className="mb-4 flex items-end justify-between px-1">
        <div>
          <p className="m-0 flex items-center gap-[0.55rem] text-[0.75rem] font-semibold uppercase leading-[1.5] tracking-[0.14em] text-[var(--muted)]">{home.projectsEyebrow}</p>
          <h2 className="mb-0 mt-2 text-[clamp(2.1rem,4.2vw,2.85rem)] font-medium tracking-[-0.07em]" id="work-title">{home.projectsTitle}</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 items-start gap-[var(--card-gap)] max-[600px]:grid-cols-1 max-[600px]:gap-3">
        {[projects.filter((_, index) => index % 2 === 0), projects.filter((_, index) => index % 2 === 1)].map((column, columnIndex) => (
          <div className="grid min-w-0 content-start gap-[var(--card-gap)] max-[600px]:contents" key={columnIndex}>
            {column.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                theme={theme}
                mobileOrder={projects.indexOf(project)}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
