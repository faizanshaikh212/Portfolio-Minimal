import { siteConfig } from "../../config/app";
import { content } from "../../data/content";
import skills from "../../data/skills";

export function ProfileCards() {
  const { profile, home } = content;

  return (
    <>
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
    </>
  );
}
