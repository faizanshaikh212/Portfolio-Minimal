import { useLayoutEffect, useState } from "react";
import {
  createCraterLayout,
  INITIAL_CRATERS,
  ThemeToggle,
} from "./components/ThemeToggle";
import { siteConfig, type Theme } from "../config/app";
import { content } from "../data/content";
import projects, { type Project } from "../data/projects";
import skills from "../data/skills";

function getInitialTheme(): Theme {
  try {
    const savedTheme = window.localStorage.getItem("portfolio-theme");
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : siteConfig.defaultTheme;
  } catch (error) {
    console.warn("The saved theme could not be restored.", error);
    return siteConfig.defaultTheme;
  }
}

function ProjectCard({ project }: { project: Project }) {
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
          {project.visual === "finance" ? (
            <div className="finance-preview">
              <span className="finance-preview__label">TOTAL BALANCE</span>
              <span className="finance-preview__amount">$12,840.50</span>
              <span className="finance-preview__chart">
                {[32, 45, 38, 62, 51, 76, 60, 88, 70, 100, 82, 112].map(
                  (height, index) => (
                    <i key={index} style={{ height }} />
                  ),
                )}
              </span>
            </div>
          ) : (
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
          )}
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

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [craters, setCraters] = useState(INITIAL_CRATERS);
  const { profile, header, home, footer } = content;

  useLayoutEffect(() => {
    const root = document.documentElement;
    const colors = siteConfig.theme.colors[theme];

    document.title = `${siteConfig.siteName} — ${profile.role}`;
    root.dataset.theme = theme;
    root.style.colorScheme = theme;
    root.style.setProperty("--theme-transition", siteConfig.theme.transition);
    root.style.setProperty("--max-width", siteConfig.layout.maxWidth);
    root.style.setProperty("--page-gutter", siteConfig.layout.pageGutter);
    root.style.setProperty("--card-radius", siteConfig.layout.cardRadius);
    root.style.setProperty("--card-gap", siteConfig.layout.cardGap);

    for (const [name, value] of Object.entries(colors)) {
      root.style.setProperty(`--${name.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`, value);
    }

    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", colors.page);
  }, [theme]);

  useLayoutEffect(() => {
    try {
      window.localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      console.warn("The theme preference could not be saved.", error);
    }
  }, [theme]);

  function toggleTheme() {
    if (theme === "light") {
      setCraters(createCraterLayout());
    }
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <main className="site-shell">
      <header className="site-header glass">
        <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
          <span className="brand__mark">{profile.monogram}</span>
          <span>{header.homeLabel}</span>
        </a>
        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">{header.workLabel}</a>
          <a href="#contact">{header.contactLabel}</a>
          <ThemeToggle theme={theme} craters={craters} onToggle={toggleTheme} />
        </nav>
      </header>

      <section className="bento-grid" id="top" aria-label="Introduction">
        <article className="hero-card glass">
          <div className="hero-card__copy">
            <p className="eyebrow">
              <span className="status-dot" />
              {home.eyebrow}
            </p>
            <p className="hero-card__greeting">{home.greeting}</p>
            <h1>{home.headline}</h1>
            <p className="hero-card__intro">{home.introduction}</p>
            <div className="hero-actions">
              <a className="button button--primary" href="#work">
                {home.primaryAction} <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href={`mailto:${profile.email}`}>
                {home.secondaryAction}
              </a>
            </div>
          </div>
          <div className="hero-portrait">
            <img
              src="/assets/images/profile_glitched.gif"
              alt={`Portrait of ${profile.name}`}
              width="600"
              height="600"
              fetchPriority="high"
            />
          </div>
          <span className="hero-card__index">01 / PORTFOLIO</span>
        </article>

        {siteConfig.home.showAvailability && (
          <article className="availability-card glass">
            <span className="card-icon" aria-hidden="true">✳</span>
            <p className="eyebrow">{home.statusEyebrow}</p>
            <h2>{profile.availability}</h2>
            <p className="muted-copy">{home.availabilityLabel}</p>
            <div className="availability-card__bottom">
              <span className="status-pulse" />
              <span>{home.availabilityStatus}</span>
            </div>
          </article>
        )}

        <article className="about-card glass">
          <p className="eyebrow">{home.aboutEyebrow}</p>
          <h2>{profile.role}</h2>
          <p className="muted-copy">{profile.location}</p>
          <span className="about-card__mark" aria-hidden="true">✳</span>
        </article>

        {siteConfig.home.showSkills && (
          <article className="skills-card glass">
            <p className="eyebrow">{home.skillsEyebrow}</p>
            <div className="skill-groups">
              {skills.map((group) => (
                <div className="skill-group" key={group.category}>
                  <h3>{group.category}</h3>
                  <div className="tag-list">
                    {group.items.map((skill) => (
                      <span className="tag" key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </article>
        )}

        {siteConfig.home.showProjects && (
          <section className="work-section" id="work" aria-labelledby="work-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow">{home.projectsEyebrow}</p>
                <h2 id="work-title">{home.projectsTitle}</h2>
              </div>
              <span className="section-heading__count" aria-label={home.projectCountLabel}>
                {String(Math.min(projects.length, siteConfig.home.projectLimit)).padStart(2, "0")}
              </span>
            </div>
            <div className="project-grid">
              {projects.slice(0, siteConfig.home.projectLimit).map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        )}

        <article className="location-card glass">
          <span className="location-card__globe" aria-hidden="true">◎</span>
          <p className="eyebrow">{home.locationLabel}</p>
          <h2>{profile.city}</h2>
          <p className="muted-copy">{profile.timezone}</p>
        </article>

        <article className="contact-card glass" id="contact">
          <p className="eyebrow">HAVE A GOOD ONE IN MIND?</p>
          <h2>{home.contactTitle}</h2>
          <a href={`mailto:${profile.email}`} className="contact-card__link">
            {home.contactAction} <span aria-hidden="true">↗</span>
          </a>
        </article>
      </section>

      <footer className="site-footer">
        <span>{footer.note}</span>
        <span>{footer.copyright}</span>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noreferrer">{footer.links.github}</a>
          <a href={profile.links.linkedin} target="_blank" rel="noreferrer">{footer.links.linkedin}</a>
          <a href={`mailto:${profile.email}`}>{footer.links.email}</a>
          <span>{footer.links.discord} · {profile.discord}</span>
        </div>
      </footer>
    </main>
  );
}
