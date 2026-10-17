import { content } from "../../data/content";
import type { Project } from "../../data/projects";

function FinancePreview() {
  const bars = [32, 45, 38, 62, 51, 76, 60, 88, 70, 100, 82, 112];

  return (
    <div className="finance-preview">
      <span className="finance-preview__label">TOTAL BALANCE</span>
      <span className="finance-preview__amount">$12,840.50</span>
      <span className="finance-preview__chart">
        {bars.map((height, index) => (
          <i key={index} style={{ height }} />
        ))}
      </span>
    </div>
  );
}

function ControllerPreview() {
  return (
    <div className="controller-preview">
      <span className="controller-preview__dpad">
        <i />
      </span>
      <span className="controller-preview__center">MK</span>
      <span className="controller-preview__buttons">
        <i />
        <i />
        <i />
        <i />
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card project-card--${project.visual}`}>
      <a
        className="project-card__link"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} — ${content.home.projectOpenLabel}`}
      >
        <div className="project-visual" aria-hidden="true">
          {project.visual === "finance" ? <FinancePreview /> : <ControllerPreview />}
          <span className="project-visual__open">↗</span>
        </div>
        <div className="project-card__details">
          <div>
            <p className="project-card__category">{project.category}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-card__year">{project.year}</span>
          <p className="project-card__description">{project.description}</p>
          <div className="tag-list" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <span className="tag" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
