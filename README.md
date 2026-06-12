# Commando Training Center (CTC) Website

Premium multi-page military-style website for Commando Training Center, built with React, Tailwind CSS, Framer Motion, and React Router.

## Tech Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion
- Lucide React icons
- React Router v7

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

## Build for Production

```bash
npm run build
npm run preview
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/about` | About |
| `/training` | Training Activities |
| `/events` | Events |
| `/gallery` | Gallery |
| `/contact` | Contact |

## Adding Real Photos

Place images in `public/images/placeholders/` using filenames from `src/data/siteData.ts`. See `public/images/placeholders/README.md`.

## Customization

- **Colors & theme:** `src/index.css` (`@theme` block)
- **Content:** `src/data/siteData.ts`
- **Google Maps:** Replace the map placeholder in `src/pages/Contact.tsx`

## Features

- Sticky transparent navbar with scroll state
- Scroll progress indicator
- Back-to-top button
- Animated loading screen
- Fade-in on scroll, parallax hero, animated counters
- Masonry gallery with lightbox
- Fully responsive design
