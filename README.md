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

## Contact Form (Email to CTC)

The contact form sends messages to **commandotrainingcenter11@gmail.com** via [Web3Forms](https://web3forms.com) (free).

1. Go to [web3forms.com](https://web3forms.com) and create an access key using `commandotrainingcenter11@gmail.com`
2. Copy `.env.example` to `.env` and paste your key:
   ```bash
   cp .env.example .env
   ```
3. For **Vercel**: Project → Settings → Environment Variables → add `VITE_WEB3FORMS_ACCESS_KEY` with your key, then redeploy

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
