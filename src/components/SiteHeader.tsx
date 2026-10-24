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
  currentPage: "home" | "about";
  onNavigate: (path: "/" | "/about") => void;
};

export function SiteHeader({ theme, craters, onToggleTheme, currentPage, onNavigate }: Props) {
  const { profile, header, accessibility } = content;

  return (
    <header className="glass-panel fixed left-1/2 top-5 z-50 flex min-h-[68px] w-[calc(100%-2*var(--page-gutter))] max-w-[var(--nav-max-width)] -translate-x-1/2 items-center justify-between rounded-full border px-[1.125rem] py-3 transition-colors duration-200 max-[600px]:top-3 max-[600px]:min-h-[60px] max-[600px]:gap-1 max-[600px]:px-2 max-[600px]:py-[0.6rem]">
      <a className="flex items-center gap-[0.7rem] text-base font-semibold tracking-[-0.025em] max-[600px]:gap-2 max-[600px]:text-[0.9rem]" href="/" onClick={(event) => { event.preventDefault(); onNavigate("/"); }} aria-label={`${profile.name}, ${accessibility.homeLinkSuffix}`}>
        <img
          className="size-[28px] object-contain max-[600px]:size-6"
          src="/favicon.svg"
          alt=""
          style={{ filter: theme === "light" ? "brightness(0)" : undefined }}
        />
        <span>{profile.name}</span>
      </a>
      <nav className="absolute left-1/2 flex -translate-x-1/2 items-center gap-[clamp(0.8rem,2.5vw,1.6rem)] text-[0.9rem] text-[var(--muted)] max-[600px]:static max-[600px]:ml-auto max-[600px]:translate-x-0 max-[600px]:gap-1 max-[600px]:text-[0.78rem]" aria-label={header.navigationLabel}>
        <a className={`rounded-full px-3 py-2 transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)] max-[600px]:px-2 ${currentPage === "home" ? "bg-[var(--nav-active-bg)] text-[var(--nav-active-text)]" : ""}`} href="/" aria-current={currentPage === "home" ? "page" : undefined} onClick={(event) => { event.preventDefault(); onNavigate("/"); }}>{header.homeLabel}</a>
        <a className={`rounded-full px-3 py-2 transition-colors hover:bg-[var(--nav-hover-bg)] hover:text-[var(--nav-hover-text)] max-[600px]:px-2 ${currentPage === "about" ? "bg-[var(--nav-active-bg)] text-[var(--nav-active-text)]" : ""}`} href="/about" aria-current={currentPage === "about" ? "page" : undefined} onClick={(event) => { event.preventDefault(); onNavigate("/about"); }}>{header.aboutLabel}</a>
      </nav>
      <div className="ml-auto max-[600px]:ml-0">
        <ThemeToggle theme={theme} craters={craters} onToggle={onToggleTheme} />
      </div>
    </header>
  );
}
