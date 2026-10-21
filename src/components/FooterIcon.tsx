export type FooterIconName = "website" | "github" | "linkedin" | "email" | "discord";

export function FooterIcon({ name }: { name: FooterIconName }) {
  return (
    <span className={`footer-icon-mark footer-icon-mark--${name}`} aria-hidden="true" />
  );
}
