# Portfolio Minimal

A minimal, glass-inspired portfolio built with React, TypeScript, Vite, and
Tailwind CSS.

## Development

```sh
npm install
npm run dev
```

Run `npm run typecheck` or `npm run build` to verify the project.

## Editing the site

- `config/app.ts` controls site-wide visual settings, theme palettes, layout
  sizing, and homepage feature switches.
- `data/content/` contains the profile, header, homepage, and footer copy.
- `data/skills.ts` and `data/projects.ts` contain the portfolio cards.
- `data/content.ts` is the single entry point for the content modules.
- `src/components/` contains the homepage sections and reusable project cards;
  `src/hooks/useSiteTheme.ts` owns theme persistence and document theme setup.
- Tailwind utilities handle component styling; `src/styles/index.css` loads
  Tailwind and defines the small set of global theme variables.

The site is intentionally being built in small releases. See
[`changelogs.md`](./changelogs.md) for the current milestone and next release.
