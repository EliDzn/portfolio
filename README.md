# Eli Dizon Portfolio

My personal portfolio highlights both design and development expertise while building thoughtful digital experiences with React, TypeScript, and modern web technologies.

Credits for design inspiration go to:

- [SpaceTypeGenerator](https://spacetypegenerator.com/)
- [shadcn.io components](https://shadcn.io/)
- [Osmo Supply](https://www.osmo.supply/preview?resource=gradient-wave-text-on-scroll)
- [A24](https://a24films.com/)

## Live Portfolio

[elidizon.vercel.app](https://elidizon.vercel.app/)

## Screenshot

![Eli Dizon portfolio preview](./public/images/portfolio-preview.webp)

## Tech Stack

[![Tech Stack](https://skillicons.dev/icons?i=ts,react,nextjs,tailwind,threejs,vercel)](https://skillicons.dev)

- TypeScript
- React 19
- Next.js 16
- Tailwind CSS 4
- Three.js
- GSAP
- Vercel

## Features

- Reduced initial JavaScript transfer by ~200 kB by moving Three.js/React Three Fiber runtime into a separate dynamically loaded bundle
- Achieved 100/100 Lighthouse Performance, Best Practices, and SEO scores with 96/100 Accessibility, optimized to 0.5s LCP, 50ms TBT, and 0 CLS
- Three.js cylinder text
- Scroll-based philosophy text animation

## Project Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── layout.tsx
│   ├── template.tsx
│   ├── globals.css
│   └── projects/
│       ├── billease/
│       └── ust-technovation-society/
├── components/
│   ├── case-studies/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── hooks/
└── lib/
```

## Setup

### Requirements

- Node.js 20.9 or later
- npm

### Installation

```bash
git clone https://github.com/EliDzn/eli-dizon-portfolio.git
cd eli-dizon-portfolio
npm install
```
