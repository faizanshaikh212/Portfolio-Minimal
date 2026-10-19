# Changelog

Versions use `MAJOR.MINOR.PATCH`: major redesigns, feature releases, and fixes.
Each release records the user-visible changes and the main implementation choices.

## 0.4.0 — 2026-10-25

- Switch the hero portrait by theme: animated `profile-dark.gif` in dark mode and `profile-light.jpg` in light mode.
- Replace the CSS-drawn project preview artwork with the supplied dark/light project images; use optimized WebP copies for efficient loading.
- Set the Cyberspace background to `gargantua.mp4` in dark mode and `clouds.mp4` in light mode, switching to `moon.mp4` while hovered.
- Generate matching poster frames for the three videos and use them as video loading fallbacks.

## 0.3.1 — 2026-10-25

- Increase the desktop content width from 1120px to 1220px so the cards, project grid, and footer have more horizontal space.
- Widen the fixed navigation bar to align with the wider content container.
- Preserve responsive side gutters and existing tablet/mobile grid breakpoints.

## 0.3.0 — 2026-10-25

- Refresh the dark palette with near-black surfaces, soft cyan accents, and muted cool-gray text inspired by the provided reference.
- Add a quiet, theme-aware grid and ambient glow behind the page in both light and dark modes.
- Unify content cards under a shared translucent glass treatment with layered highlights, soft borders, backdrop blur, and inset lighting.
- Keep the navigation bar sticky near its existing top position while scrolling.

## 0.2.2 — 2026-10-25

- Increase supporting text sizes across navigation, status and skills cards, project details, contact content, and footer links while retaining the existing heading hierarchy.
- Set a legible 17px body-text baseline and adjust the hero portrait placement at tablet widths to prevent overlap with the larger type.
- Remove the colored disk behind the navbar favicon so the transparent favicon displays without a background, and update its visibility on light theme.

## 0.2.1 — 2026-10-25

- Reposition the About card directly beneath Current Status in the desktop bento grid.
- Remove decorative section numbering from the hero and projects heading.
- Add all four project entries from the CyberSpace reference: Financial Cryosis, Mobile Konekt, LifeBoat, and AcademicVault-Connect.
- Add an animated, non-interactive “Enter the cyberspace” teaser card; its navigation and experience are intentionally deferred.
- Replace the navbar monogram with the site's favicon asset.
- Expand historical release notes with implementation and typography details.

## 0.2.0 — 2026-10-25

- Migrate page and component presentation from custom component CSS to Tailwind CSS utility classes.
- Add Tailwind CSS 4 and its Vite plugin; keep only global theme tokens and browser defaults in `src/styles/index.css`.
- Keep light/dark palette values in `config/app.ts` and apply them to the document from `useSiteTheme`.
- Preserve responsive layouts with Tailwind breakpoint variants in component class names.

## 0.1.3 — 2026-10-25

- Separate global styles from component code into `src/styles/`.
- Organize CSS into base, layout, component, responsive, and theme-toggle files, with `index.css` as the ordered entry point.
- Rename and move the toggle stylesheet to `src/styles/themeToggle.css`.

## 0.1.2 — 2026-10-25

- Split the original page into reusable header, hero, profile, project, contact, and footer components.
- Move theme initialization, persistence, document metadata, and palette application into `src/hooks/useSiteTheme.ts`.
- Remove the decorative border and padding around the profile portrait.
- Add component and styling structure notes to the project README.

## 0.1.1 — 2026-10-25

- Establish the initial minimal bento portfolio with editable settings in `config/app.ts` and structured profile, header, home, footer, skills, and projects data under `data/`.
- Add persisted light/dark switching, glass-style cards, responsive layouts, project previews, profile links, and contact actions.
- Use React 19.3.1, React DOM 19.3.1, TypeScript 7.0.2, and Vite 8.3.5.
- Use a local system font stack beginning with Inter, followed by UI/system sans-serif fallbacks; no remote font download is required.
- Seed profile, skills, and project content from the existing CyberSpace portfolio.

## 0.1.0 — 2026-10-25

- Initialize the portfolio project as a private ESM React and TypeScript application built with Vite.
- Add the initial npm scripts for local development, production builds, type checking, and previewing builds.