import { content } from "../../data/content";

export function HeroSection() {
  const { profile, home } = content;

  return (
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
  );
}
