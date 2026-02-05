# Repository Guidelines

## Project Structure & Module Organization
- `pages/`: Next.js routes and page entry points (e.g., `pages/index.tsx`).
- `components/`: Reusable UI components.
- `hooks/`: Custom React hooks.
- `core/`: Shared logic/utilities used across the app.
- `styles/`: Global styles and Tailwind setup.
- `public/`: Static assets served at the site root.
- `framer-animation/`: Animation experiments and helpers.
- `dotfiles/`: Editor and tooling configuration backups.

## Build, Test, and Development Commands
- `npm run dev`: Start the Next.js dev server on `http://localhost:3000`.
- `npm run build`: Create a production build.
- `npm run start`: Run the production build locally.
- `npm run lint`: Run ESLint with auto-fix enabled.

## Coding Style & Naming Conventions
- Indentation: 2 spaces.
- Quotes: single quotes; Semicolons required.
- Line endings: Unix.
- TypeScript preferred for React components and pages (`.ts`/`.tsx`).
- Component files use `PascalCase` (e.g., `HeroBanner.tsx`), hooks use `useCamelCase` (e.g., `useScrollLock.ts`).
- Linting: ESLint (`eslint:recommended`, `plugin:react/recommended`, `@typescript-eslint/recommended`, and `next/core-web-vitals`).

## Testing Guidelines
- No automated test framework is configured in this repository.
- If tests are added, keep them near the code they cover (e.g., `components/__tests__/`).
- Document the chosen test runner and add a `npm run test` script.

## Commit & Pull Request Guidelines
- Commits follow Conventional Commits style (`feat:`, `fix:`), as seen in recent history.
- Pull requests should include:
  - A short summary of changes and any affected pages.
  - Screenshots or clips for UI changes.
  - Notes on testing (e.g., “ran `npm run lint`”).

## Configuration Notes
- Tailwind is configured in `tailwind.config.js` with global styles in `styles/`.
- Next.js configuration lives in `next.config.js`.
