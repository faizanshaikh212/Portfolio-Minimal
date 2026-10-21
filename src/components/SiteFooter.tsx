import { content } from "../../data/content";
import { DiscordCopyButton } from "./DiscordCopyButton";
import { FooterIcon } from "./FooterIcon";

export function SiteFooter() {
  const { footer, profile } = content;

  return (
    <footer className="flex min-h-[90px] items-end justify-between gap-4 pb-5 text-lg font-medium leading-6 text-[var(--text)] max-[820px]:flex-wrap max-[820px]:justify-center max-[820px]:text-center">
      <span className="max-[600px]:hidden">{footer.note}</span>
      <span>{footer.copyright}</span>
      <div className="flex items-end gap-4">
        <a className="footer-icon-link" href={profile.links.website} target="_blank" rel="noreferrer" aria-label={footer.links.website} data-tooltip={footer.links.website} title={footer.links.website}>
          <FooterIcon name="website" />
        </a>
        <a className="footer-icon-link" href={profile.links.github} target="_blank" rel="noreferrer" aria-label={footer.links.github} data-tooltip={footer.links.github} title={footer.links.github}>
          <FooterIcon name="github" />
        </a>
        <a className="footer-icon-link" href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label={footer.links.linkedin} data-tooltip={footer.links.linkedin} title={footer.links.linkedin}>
          <FooterIcon name="linkedin" />
        </a>
        <a className="footer-icon-link" href={`mailto:${profile.email}`} aria-label={footer.links.email} data-tooltip={footer.links.email} title={footer.links.email}>
          <FooterIcon name="email" />
        </a>
        <DiscordCopyButton />
      </div>
    </footer>
  );
}
