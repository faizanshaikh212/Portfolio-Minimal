import { content } from "../../data/content";

export function SiteFooter() {
  const { footer, profile } = content;

  return (
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
  );
}
