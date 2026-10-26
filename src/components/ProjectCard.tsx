import { useEffect, useState } from "react";
import { content } from "../../data/content";
import type { Project } from "../../data/projects";
import type { Theme } from "../../config/app";
import { slideshowConfig } from "../../config/slideshow";
import { useMediaHover } from "../hooks/useMediaHover";

export function ProjectCard({
  project,
  theme,
  mobileOrder,
}: {
  project: Project;
  theme: Theme;
  mobileOrder: number;
}) {
  const alternateTheme = theme === "dark" ? "light" : "dark";
  const projectSlideshow = slideshowConfig.projects[project.title];
  const slides = projectSlideshow?.images ?? [];
  const hasSlideshow = projectSlideshow?.enabled === true && slides.length > 1;
  const [activeSlide, setActiveSlide] = useState(0);
  const { isHovered, mediaElements, handlePointerEnter, handlePointerLeave } = useMediaHover();

  useEffect(() => {
    if (!hasSlideshow || !isHovered) {
      setActiveSlide(0);
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveSlide((currentSlide) => (currentSlide + 1) % slides.length);
    }, slideshowConfig.intervalMs);

    return () => window.clearInterval(intervalId);
  }, [hasSlideshow, isHovered, slides.length]);

  return (
    <article
      className="glass-panel group h-fit self-start overflow-hidden rounded-[var(--card-radius)] border"
      style={{ order: mobileOrder }}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      onFocus={handlePointerEnter}
      onBlur={(event) => {
        const nextTarget = event.relatedTarget;
        if (!(nextTarget instanceof Node) || !event.currentTarget.contains(nextTarget)) {
          handlePointerLeave();
        }
      }}
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
            ref={(element) => { mediaElements.current[0] = element; }}
            className={`project-card-image block h-auto w-full ${isHovered && hasSlideshow ? "opacity-0" : "opacity-100"}`}
            src={project.images[theme]}
            alt=""
            loading="lazy"
            decoding="async"
          />
          {hasSlideshow ? (
            slides.map((image, index) => (
              <img
                ref={(element) => { mediaElements.current[index + 1] = element; }}
                className={`project-card-image absolute inset-0 size-full object-cover ${isHovered && activeSlide === index ? "opacity-100" : "opacity-0"}`}
                src={image}
                alt=""
                loading="lazy"
                decoding="async"
                key={image}
              />
            ))
          ) : (
            <img
              ref={(element) => { mediaElements.current[1] = element; }}
              className={`project-card-image absolute inset-0 size-full object-cover ${isHovered ? "opacity-100" : "opacity-0"}`}
              src={project.images[alternateTheme]}
              alt=""
              loading="lazy"
              decoding="async"
            />
          )}
          <span className="absolute right-4 top-4 grid size-[30px] place-items-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[0.9rem] text-[var(--text)] backdrop-blur-xl">↗</span>
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-[0.6rem] p-5">
          <div>
            <p className="mb-[0.3rem] mt-0 text-[0.78rem] text-[var(--muted)]">{project.category}</p>
            <h3 className="m-0 text-[1.25rem] font-medium tracking-[-0.04em]">{project.title}</h3>
          </div>
          <span className="text-[0.78rem] text-[var(--muted)]">{project.year}</span>
          <p className="col-span-full m-0 max-w-[500px] text-[0.9rem] leading-[1.65] text-[var(--muted)]">{project.description}</p>
          <div className="col-span-full flex flex-wrap gap-[0.4rem]" aria-label={content.accessibility.projectTechnologies}>
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
