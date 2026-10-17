import {
  ThemeToggle,
  type MoonCrater,
} from "./ThemeToggle";
import type { Theme } from "../../config/app";
import { content } from "../../data/content";

type Props = {
  theme: Theme;
  craters: MoonCrater[];
  onToggleTheme: () => void;
};

export function SiteHeader({ theme, craters, onToggleTheme }: Props) {
  const { profile, header } = content;

  return (
    <header className="site-header glass">
      <a className="brand" href="#top" aria-label={`${profile.name}, home`}>
        <span className="brand__mark">{profile.monogram}</span>
        <span>{header.homeLabel}</span>
      </a>
      <nav className="site-nav" aria-label="Main navigation">
        <a href="#work">{header.workLabel}</a>
        <a href="#contact">{header.contactLabel}</a>
        <ThemeToggle theme={theme} craters={craters} onToggle={onToggleTheme} />
      </nav>
    </header>
  );
}
