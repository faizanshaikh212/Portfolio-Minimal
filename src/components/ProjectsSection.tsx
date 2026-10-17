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
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">{home.projectsEyebrow}</p>
          <h2 id="work-title">{home.projectsTitle}</h2>
        </div>
        <span className="section-heading__count" aria-label={home.projectCountLabel}>
          {String(visibleProjects.length).padStart(2, "0")}
        </span>
      </div>
      <div className="project-grid">
        {visibleProjects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
