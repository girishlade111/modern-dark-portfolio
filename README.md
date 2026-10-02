# Modern Dark Portfolio

A modern, dark-mode-first portfolio / design-system landing page built with Next.js 16, React 19, Tailwind CSS 4 and shadcn/ui — styled in the spirit of Linear's design language: animated ambient backgrounds, mouse-tracking spotlight cards, gradient typography, bento grids and scroll-linked parallax.

## Features

- **Dark-first design system** — design tokens, ambient blobs, shimmer and gradient keyframe animations
- **Landing page sections** — navbar with scroll-aware blur, parallax hero, bento feature grid, animated stat counters, testimonials, CTA and multi-column footer
- **Custom UI components** — `AmbientBackground`, `SpotlightCard`, `GradientText`, animated navbar/hero sections
- **Framer Motion animations** — staggered entrances, scroll-linked transforms, animated counters
- **Backend scaffolding** — Prisma ORM (SQLite), a sample `src/app/api` route, and a `mini-services/` directory of task experiments
- **Standalone build output** — `next.config.ts` uses `output: "standalone"` for containerized deployment

## Tech Stack

- Next.js 16, React 19, TypeScript
- Tailwind CSS 4, shadcn/ui (Radix primitives), Framer Motion
- Prisma 6 (SQLite datasource), ESLint

## Quick Start

```bash
npm install
cp .env.example .env   # set DATABASE_URL
npx prisma db push
npm run dev            # http://localhost:3000
```

Production:

```bash
npm run build
npm start
```

## Project Structure

```
modern-dark-portfolio/
├── src/
│   ├── app/            # App Router pages (page.tsx, layout.tsx, api/route.ts)
│   ├── components/     # Landing sections + UI components
│   └── lib/            # Utilities
├── mini-services/      # Task-based service experiments
├── prisma/             # Prisma schema (SQLite)
├── public/             # Static assets
├── db/ examples/ download/  # Supporting data/demos
├── next.config.ts      # Standalone output config
└── Caddyfile           # Reverse-proxy config
```

## Deploy Notes

Dynamic app: it has an API route and Prisma/SQLite persistence, so it needs a runtime server (Node/standalone) and a `DATABASE_URL`. Deploy via `npm run build && npm start`, Docker, or a Node host — not a static host.

## License

MIT — see the repository for details.

---

**Built by Girish Lade** — https://ladestack.in
