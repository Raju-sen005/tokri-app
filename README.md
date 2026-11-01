# Tokri – Brand Landing Page

Landing page for **Tokri** ("Apne Shehar Ki Apni Online Dukaan"), a local grocery and daily-essentials app for Gulabpura and Bijainagar, Rajasthan. The goal of the site is app downloads.

Stack: React, TypeScript, Vite, Tailwind CSS v4, Lucide React, Framer Motion, self-hosted Nunito Sans.

## Run locally

```bash
npm install
npm run dev        # http://localhost:4817
npm run build      # type-check + production build into dist/
npm run preview    # serve dist/ on http://localhost:4817
npm run lint
```

## Build status

- [x] Header (sticky, mobile menu), Hero, phone mockup, download buttons
- [x] Categories section (driven by `src/config/categories.ts`)
- [x] How It Works section (steps in `src/config/steps.ts`)
- [x] Why Choose Tokri section (`src/config/features.ts`, anchor `#about`)
- [x] App Download section with QR (live only when a Play Store URL is set)
- [x] Footer (links, service areas, contact and socials hidden until configured)
- [ ] Legal pages (`/faqs`, `/privacy-policy`, `/terms-and-conditions` are linked from the footer but not built yet), SEO files (sitemap, robots, OG image), deployment guide

Header links to sections that are not built yet (`#how-it-works`, `#categories`, `#about`, `#download`) will work as those sections land.

## Where things live

| Path | Purpose |
| --- | --- |
| `src/styles/index.css` | Design tokens (`@theme`): colors, radii, shadows, type scale. Single theme source. |
| `src/config/site.ts` | Brand, contact, social links, service locations, app store links. |
| `src/config/categories.ts` | Category list. Set `available: false` to hide a category not in inventory. |
| `src/config/navigation.ts` | Section ids and nav items. |
| `src/lib/appLinks.ts` | Reads the Play Store URL and decides live vs coming-soon. |
| `src/components/ui/DownloadButton.tsx` | The only download CTA component (button and Google Play badge). |
| `src/components/app/AppMockup.tsx` | Phone mockup. Set `appLinks.screenshotSrc` to use a real screenshot. |
| `src/components/art/ProductArt.tsx` | Inline SVG grocery illustrations (no raster images, zero image requests). |

## Activating the Play Store listing

Until a real URL exists the site shows a "coming soon" state: the Google Play badge is not clickable, and the main CTA scrolls to the download section. No fake URL is ever used.

When the listing is published, set it in either place:

- `appLinks.playStoreUrl` in `src/config/site.ts`, or
- the `VITE_PLAY_STORE_URL` environment variable (see `.env.example`) at build time.

Only `https://play.google.com/...` URLs are accepted. Every download button (and the QR code, once added) switches to live from that one value.

## Adding a town

Add an entry to `serviceLocations` in `src/config/site.ts`.

## Notes

- Contact numbers, email and social links are intentionally empty placeholders in `site.ts`; nothing is invented.
- The logo is an interim flat mark (basket glyph plus wordmark in brand colors). Swap `src/components/ui/Logo.tsx` and `public/favicon.svg` when the final logo files are available. `favicon.svg` is a static file, so it repeats the brand hex values.
- The Google Play badge is drawn in SVG. Replace it with Google's official badge asset before launch to follow their brand guidelines.
