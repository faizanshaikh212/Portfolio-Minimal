import { content } from "../../data/content";

export function SiteFooter() {
  const { footer, profile } = content;

  return (
    <footer className="flex min-h-[90px] items-center justify-between gap-4 text-[0.8rem] text-[var(--muted)] max-[820px]:flex-wrap max-[820px]:justify-center max-[820px]:py-5 max-[820px]:text-center">
      <span className="max-[600px]:hidden">{footer.note}</span>
      <span>{footer.copyright}</span>
      <div className="flex items-center gap-4 [&_a]:transition-colors [&_a:hover]:text-[var(--text)]">
        <a href={profile.links.github} target="_blank" rel="noreferrer">{footer.links.github}</a>
        <a href={profile.links.linkedin} target="_blank" rel="noreferrer">{footer.links.linkedin}</a>
        <a href={`mailto:${profile.email}`}>{footer.links.email}</a>
        <span>{footer.links.discord} · {profile.discord}</span>
      </div>
    </footer>
  );
}
