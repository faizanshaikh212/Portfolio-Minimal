import { content } from "../../data/content";

export function ContactCards() {
  const { profile, home } = content;

  return (
    <>
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
    </>
  );
}
