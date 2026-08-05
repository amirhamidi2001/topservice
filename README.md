# TopService

A fast, single-page marketing website for **TopService**, a specialized washing-machine repair business operating in Pakdasht, Iran. Built with React + Vite, fully in Persian (RTL).

🔗 **Live site:** [toopservice](https://toopservice)
📦 **Repository:** [github.com/amirhamidi2001/topservice](https://github.com/amirhamidi2001/topservice)

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?logo=tailwind-css&logoColor=white)

## Overview

The site presents the business's services, featured repairs, technician expertise, customer testimonials, and contact information — all on a single scrolling page with smooth anchor navigation. It's built to be lightweight, fast on mobile, and easy to maintain.

## Features

- 🖥️ Fully responsive layout, tuned for real mobile breakpoints (320–768px) as well as tablet and desktop
- 🔁 RTL-first design and typography for Persian content
- 🎞️ Scroll-triggered entrance animations via [AOS](https://michalsnik.github.io/aos/)
- 🎠 Testimonials carousel via [Swiper](https://swiperjs.com/), code-split and lazy-loaded to keep the initial bundle small
- 🔍 SEO-ready: meta tags, Open Graph / Twitter cards, `robots.txt`, `sitemap.xml`, and JSON-LD `LocalBusiness` schema
- ♿ Accessible markup: semantic headings, `aria-*` attributes on interactive elements, descriptive alt text
- ⚡ Optimized production build with vendor code-splitting and lazy-loaded images

## Tech Stack

| | |
|---|---|
| Framework | [React 19](https://react.dev/) |
| Build tool | [Vite](https://vite.dev/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animations | [AOS](https://michalsnik.github.io/aos/) |
| Carousel | [Swiper](https://swiperjs.com/) |
| Linting | ESLint |

## Project Structure

```
topservice/                  # repo root
├── LICENSE
├── README.md                # you are here
└── topservice/               # the React + Vite application
    ├── public/
    │   ├── assets/img/       # static images
    │   ├── favicon.ico, apple-touch-icon.png
    │   └── robots.txt, sitemap.xml, ads.txt
    ├── src/
    │   ├── components/       # one component per page section
    │   │   ├── Header.jsx
    │   │   ├── Hero.jsx
    │   │   ├── About.jsx
    │   │   ├── FeaturedProperties.jsx
    │   │   ├── FeaturedServices.jsx
    │   │   ├── Testimonials.jsx
    │   │   ├── WhyUs.jsx
    │   │   ├── CallToAction.jsx
    │   │   ├── ContactInfo.jsx
    │   │   └── Footer.jsx
    │   ├── data/
    │   │   └── content.js    # static content (nav links, services, testimonials, etc.)
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── tailwind.config.js
    ├── vite.config.js
    └── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- npm (or another package manager of your choice)

### Installation

```bash
git clone https://github.com/amirhamidi2001/topservice.git
cd topservice/topservice
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server with hot module replacement, typically at `http://localhost:5173`.

### Production Build

```bash
npm run build
```

Outputs an optimized, production-ready build to `dist/`.

```bash
npm run preview
```

Serves the `dist/` build locally to preview it before deploying.

### Linting

```bash
npm run lint
```

## Deployment

`npm run build` produces a fully static site (`dist/`), so it can be deployed to any static host — Vercel, Netlify, GitHub Pages, or a plain Nginx/Apache server. No server-side runtime is required. The live site is deployed at [toopservice](https://toopservice).

## Contact

For business inquiries related to TopService, use the contact section on [toopservice](https://toopservice).

## License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.
