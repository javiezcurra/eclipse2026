# Eclipse 2026 — Spain Trip

A small, mobile-first PWA that holds our trip plans for the August 12, 2026 total solar eclipse across northern Spain.

## What's here

- **Home** — Happening Now / Up Next, trip overview, links to every section.
- **Itinerary** — Chronological timeline. Filter by family, jump to any day.
- **Eclipse Day** — Timing, viewing site, totality checklist, eye safety.
- **Prep** — Things to do before the trip (passports, eclipse glasses, mobile data, adapters).
- **Flights & Lodging** — Quick reference for every booking.
- **Contacts** — Embassy, emergency numbers, key contacts.

## Stack

- [Astro 5](https://astro.build) (static site, content-driven, near-zero JS shipped by default)
- Tailwind CSS v4
- `@vite-pwa/astro` for PWA support (installable, offline-capable)
- Deploys to GitHub Pages via GitHub Actions

## Local development

```bash
npm install
npm run dev      # http://localhost:4321/eclipse2026/
npm run build    # outputs to dist/
npm run preview  # preview the built site
```

## Editing trip content

All trip data lives in `src/data/` as TypeScript files. Each file has a clear shape (see `src/data/types.ts`). Edit, save, and the site rebuilds.

| File | What goes here |
| --- | --- |
| `trip.ts` | Trip name, tagline, start/end dates |
| `families.ts` | The families/groups on the trip, with a color each |
| `itinerary.ts` | The chronological timeline of events |
| `flights.ts` | All flight bookings |
| `lodging.ts` | All lodging bookings |
| `prep.ts` | Before-the-trip checklist items |
| `contacts.ts` | Emergency contacts, embassy, etc. |
| `eclipse.ts` | Eclipse-day timing, viewing site, safety info |

## Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`. To enable, go to **Settings → Pages → Build and deployment** and set Source to **GitHub Actions**.

## Notes

- All times are shown in Spain local time (CEST / UTC+2).
- The site is public, so don't put passport numbers, confirmation codes you wouldn't share, or personal phone numbers in the data files.
- PWA: visitors can "Add to Home Screen" on iOS/Android for offline access to the itinerary.
