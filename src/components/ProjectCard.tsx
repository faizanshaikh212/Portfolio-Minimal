import { content } from "../../data/content";
import type { Project } from "../../data/projects";
import type { Theme } from "../../config/app";

export function ProjectCard({
  project,
  theme,
  mobileOrder,
}: {
  project: Project;
  theme: Theme;
  mobileOrder: number;
}) {
  return (
    <article
      className="glass-panel group h-fit self-start overflow-hidden rounded-[var(--card-radius)] border transition duration-200 hover:-translate-y-1 hover:border-[color-mix(in_srgb,var(--accent)_48%,var(--line))]"
      style={{ order: mobileOrder }}
    >
      <a
        className="block"
        href={project.href}
        target="_blank"
        rel="noreferrer"
        aria-label={`${project.title} — ${content.home.projectOpenLabel}`}
      >
        <div className="relative overflow-hidden bg-[var(--raised)]" aria-hidden="true">
          <img
            className="block h-auto w-full"
            src={project.images[theme]}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span className="absolute right-4 top-4 grid size-[30px] place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[0.9rem] text-[var(--text)] backdrop-blur-xl">↗</span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-[0.6rem] p-5">
          <div>
            <p className="mb-[0.3rem] mt-0 text-[0.78rem] text-[var(--muted)]">{project.category}</p>
            <h3 className="m-0 text-[1.25rem] font-medium tracking-[-0.04em]">{project.title}</h3>
          </div>
          <span className="text-[0.78rem] text-[var(--muted)]">{project.year}</span>
          <p className="col-span-full m-0 max-w-[500px] text-[0.9rem] leading-[1.65] text-[var(--muted)]">{project.description}</p>
          <div className="col-span-full flex flex-wrap gap-[0.4rem]" aria-label="Technologies">
            {project.technologies.map((technology) => (
              <span className="inline-flex min-h-[30px] items-center rounded-full border border-[var(--line)] px-[0.65rem] py-1 text-[0.75rem] leading-tight text-[var(--muted)]" key={technology}>
                {technology}
              </span>
            ))}
          </div>
        </div>
      </a>
    </article>
  );
}
