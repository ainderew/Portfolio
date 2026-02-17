# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Dev server:** `npm run dev` (starts on localhost:3000)
- **Build:** `npm run build` (runs next build + next-sitemap)
- **Lint:** `npm run lint` (next lint --fix)
- **Run tests:** `npx jest`
- **Run single test:** `npx jest path/to/file.test.tsx`

## Architecture

This is a personal portfolio site built with **Next.js (Pages Router)**, **React 19**, **Tailwind CSS 3**, and **Framer Motion**.

### Key directories

- `pages/` — Next.js pages (index, mysetup, 404, _app, _document)
- `components/` — UI components, organized by page under `components/pages/`
- `components/pages/home/` — Home page sections (experience, projects)
- `core/` — Shared types (`core/types/`) and data (`core/data/`)
- `framer-animation/` — Framer Motion animation variants
- `hooks/` — Custom hooks (scroll observer, scroll hide)
- `styles/` — Global CSS and module styles
- `public/assets/` — Static assets (icons, images)

### App structure

- `_app.tsx` wraps all pages with `SmoothScroll` (Lenis) and `CustomCursor`
- Home page (`index.tsx`) composes sections: Intro, Banner, Experience, AboutMe, HorizontalProjects, WorkMobile, Contact
- Experience section has its own data layer at `components/pages/home/experience-section/data/`
- Project data lives in `core/data/projects.ts`

### Tailwind custom colors

- `accent`: `#DE682C` (orange)
- `lightAccent`: `hsl(200,100%,60%)` (blue)
