import type { PrepItem } from './types';

export const prepItems: PrepItem[] = [
  // ─── Documents ──────────────────────────────────────────────────────────
  {
    id: 'passport',
    title: 'Check passport validity',
    description: 'Must be valid for at least 3 months past your return date and have 2+ blank pages.',
    category: 'documents',
    appliesTo: [],
    deadline: '6 months before',
  },
  {
    id: 'driver-license',
    title: 'International Driving Permit (if renting a car)',
    description: 'Recommended for Spain. Get from AAA in the US (~$20, same day).',
    category: 'documents',
    appliesTo: [],
    deadline: '1 month before',
  },

  // ─── Tech & connectivity ────────────────────────────────────────────────
  {
    id: 'mobile-data',
    title: 'Mobile data in Spain',
    description:
      'eSIMs are the easiest option if your phone supports them — no SIM swap, install before you leave. Holafly is our recommendation: flat-rate unlimited data plans for Spain / Europe, no hidden fees, English support.',
    category: 'tech',
    appliesTo: [],
    deadline: '2 weeks before',
    links: [{ label: 'Holafly eSIM', url: 'https://esim.holafly.com' }],
  },
  {
    id: 'outlet-adapters',
    title: 'EU outlet adapters (Type F / Schuko)',
    description:
      'Spain uses Type F outlets at 230V. Bring 1–2 per traveler. A multi-port USB-C adapter saves outlet space — most modern phones, tablets, and laptops can share one. Two suggestions below.',
    category: 'tech',
    appliesTo: [],
    deadline: '1 month before',
    links: [
      { label: 'Adapter option 1 (Amazon)', url: 'https://a.co/d/0emHlvKO' },
      { label: 'Adapter option 2 (Amazon)', url: 'https://a.co/d/0fqNDcrI' },
    ],
  },
  {
    id: 'offline-maps',
    title: 'Download offline maps',
    description:
      'In Google Maps, search a city → tap the place name → ⋮ menu → "Download offline map". Download Madrid, Salamanca / Topas, and Mallorca (covering Inca and Palma). Useful on trains, in the country, or whenever data is sketchy.',
    category: 'tech',
    appliesTo: [],
    deadline: 'Week of trip',
  },
  {
    id: 'install-trip-app',
    title: 'Save this trip site as an app on your phone',
    description:
      "Adds an icon to your home screen, opens like a regular app, and keeps the itinerary, lodging info, and contacts available offline. Tap below for step-by-step instructions for your device.",
    category: 'tech',
    appliesTo: [],
    deadline: 'Anytime before the trip',
    action: 'open-install-modal',
    actionLabel: 'Show install instructions',
  },

  // ─── Health ─────────────────────────────────────────────────────────────
  {
    id: 'travel-insurance',
    title: 'Travel insurance',
    description:
      "Before buying a separate policy, check what's already covered by your credit card — many travel cards (Chase Sapphire, Amex Platinum, etc.) include trip cancellation, baggage protection, and emergency medical coverage abroad. If you do buy supplemental coverage, save the policy number and 24-hour assistance phone somewhere you can reach offline.",
    category: 'health',
    appliesTo: [],
    deadline: '1 month before',
  },
  {
    id: 'medications',
    title: 'Prescription medications + copies',
    description: 'Bring in original containers; pack in carry-on. Bring a copy of prescriptions in case of loss.',
    category: 'health',
    appliesTo: [],
    deadline: '2 weeks before',
  },

  // ─── Money ──────────────────────────────────────────────────────────────
  {
    id: 'credit-cards',
    title: 'Notify banks and bring a no-foreign-fee card',
    description:
      'Most places take cards. Carry ~€100 cash per person for small vendors and tipping. Avoid airport currency exchanges — they\'re the worst rate you\'ll see.',
    category: 'money',
    appliesTo: [],
    deadline: '2 weeks before',
  },
];
