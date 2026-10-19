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
    <header className="glass-panel fixed left-1/2 top-5 z-50 flex min-h-[68px] w-[calc(100%-2*var(--page-gutter))] max-w-[var(--nav-max-width)] -translate-x-1/2 items-center justify-between rounded-full border px-[1.125rem] py-3 transition-colors duration-200 max-[600px]:top-3 max-[600px]:min-h-[60px] max-[600px]:px-3 max-[600px]:py-[0.6rem]">
      <a className="flex items-center gap-[0.7rem] text-base font-semibold tracking-[-0.025em] max-[600px]:gap-2 max-[600px]:text-[0.9rem]" href="#top" aria-label={`${profile.name}, home`}>
        <img
          className="size-[28px] object-contain max-[600px]:size-6"
          src="/favicon.svg"
          alt=""
          style={{ filter: theme === "light" ? "brightness(0)" : undefined }}
        />
        <span>{header.homeLabel}</span>
      </a>
      <nav className="flex items-center gap-[clamp(0.8rem,2.5vw,1.6rem)] text-[0.9rem] text-[var(--muted)] max-[600px]:gap-3 max-[600px]:text-[0.78rem]" aria-label="Main navigation">
        <a className="transition-colors hover:text-[var(--text)] max-[600px]:hidden" href="#work">{header.workLabel}</a>
        <a className="transition-colors hover:text-[var(--text)]" href="#contact">{header.contactLabel}</a>
        <ThemeToggle theme={theme} craters={craters} onToggle={onToggleTheme} />
      </nav>
    </header>
  );
}
