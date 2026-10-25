# Changelog

Versions use `MAJOR.MINOR.PATCH`: major redesigns, feature releases, and fixes.
Each release records the user-visible changes and the main implementation choices.

## 0.11.2 — 2026-10-25

- Add Portfolio-Cyberspace with its preview artwork, deployed link, detailed summary, and technology stack.
- Add Portfolio-Minimal before AcademicVault-Connect with the provided site screenshot, project details, and technology stack.

## 0.11.1 — 2026-10-25

- Slightly widen the Cyberspace card and rebalance the Skills card to use the remaining desktop grid width; preserve tablet and mobile layouts.

## 0.11.0 — 2026-10-25

- Add an animated, interactive technology-logo belt inside the Skills card, adapted from the CyberSpace portfolio component.

## 0.10.0 — 2026-10-25

- Optically align the large headings in the status, About, location, and contact cards with their eyebrow and supporting copy without changing card sizing or padding.

## 0.8.2 — 2026-10-25

- Crossfade project previews to their opposite-theme images on hover, using the same delayed blur-and-crossfade effect as the Cyberspace card.

## 0.8.1 — 2026-10-25

- Increase the infinity stat in the About profile card while keeping the card’s size, padding, and spacing unchanged.
- Make the text size consistent across all stats

## 0.8.0 — 2026-10-25

- Add a live decimal age display to the About profile card, with date of birth configurable in `config/app.ts`.
- Show the age to eight decimal places in the fourth matching profile stat card.

## 0.7.2 — 2026-10-25

- Center Home/About navigation links in the header and add softer theme-specific active/hover states.
- Use complementary blue action-button colors in both themes for the hero work link.

## 0.7.1 — 2026-10-25

- Keep the About profile card sticky below the navigation while the page scrolls on wider screens; restore normal flow on mobile.

## 0.7.0 — 2026-10-25

- Add Home and About pages with navigation and direct `/about` routing.
- Add configurable About sections and profile, skills, experience, and education content sourced from Portfolio_CyberSpace.
- Simplify the About layout by moving its profile subtitle above the portrait and removing the redundant heading, skill chips, and overview pill.

## 0.6.2 — 2026-10-25

- Remove the green dot from the hero eyebrow and align the hero copy consistently along the left edge.

## 0.6.1 — 2026-10-25

- Optically align the hero headline and introduction with the neighboring copy.
- Remove the availability-card badge and evenly space its remaining content without changing card dimensions.

## 0.6.0 — 2026-10-25

- Remove unused and duplicated content fields; use the profile name as the single source for the header identity.
- Avoid repeated project-index searches when assigning mobile display order.
- Consolidate duplicate footer icon cursor rules without changing styling.

## 0.5.3 — 2026-10-25

- Centralize remaining page and accessibility copy in content data, and keep website metadata in `config/app.ts` for both the app title and generated HTML.

## 0.5.2 — 2026-10-25

- Rebalance the location card's content and match its typography to the adjacent contact card while preserving the original card proportions.

## 0.5.1 — 2026-10-25

- Add a subtle continuous spin to the decorative asterisk marks and disable it for reduced-motion preferences.

## 0.5.0 — 2026-10-25

- Extract footer icon rendering and Discord clipboard interaction into dedicated components.
- Move Cyberspace hover timing and video blur transitions into a reusable hook.

## 0.4.5 — 2026-10-25

- Make the Discord footer icon copy the username and temporarily change its tooltip to “Copied”.

## 0.4.4 — 2026-10-25

- Move the Cyberspace card label into the centralized home content data.
- Link the Cyberspace card and footer Website link to the portfolio website.
- Replace footer link text with accessible icons and hover tooltips, using the site favicon for the Website link.
- Refine footer icon assets, align text and icons along their bottom edge, and improve contrast in the light theme.

## 0.4.3 — 2026-10-25

- Change the Cyberspace card prompt to “Click to Enter the Cyberspace”.
- Wait one second of continuous hover before switching to the moon video.
- Crossfade the two video layers over 900ms while both briefly blur up to 4px to create a soft, blended transition; honor reduced-motion preferences.

## 0.4.2 — 2026-10-25

- Flow project cards in independent columns so each following card starts directly after the previous card in its column, without row-sized blank gaps.
- Preserve card widths and restore the original project order on narrow screens.

## 0.4.1 — 2026-10-25

- Prevent project artwork from being cropped by fitting each theme-specific image fully inside its preview frame.
- Retain uniform preview dimensions across the project grid while showing each image's complete composition.

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