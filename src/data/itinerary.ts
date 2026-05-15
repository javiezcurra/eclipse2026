import type { ItineraryEvent } from './types';

// `families: []` means everyone; otherwise list the family ids that participate.
// `refId` on flight/lodging events points to a Flight or Lodging entry for full details.
export const itinerary: ItineraryEvent[] = [
  // ─── Atlanta → Madrid (Sorianos + Hykers) ────────────────────────────────
  {
    id: 'evt-dl108-out',
    date: '2026-08-02',
    endDate: '2026-08-03',
    startTime: '21:55',
    endTime: '12:15',
    type: 'flight',
    title: 'Atlanta → Madrid (DL 108)',
    location: 'ATL → MAD · overnight',
    families: ['sorianos', 'hykers'],
    status: 'booked',
    refId: 'dl108-out',
  },

  // ─── Madrid leg 1 · Aug 3–6 (Sorianos + Hykers) ──────────────────────────
  {
    id: 'evt-madrid-1-in',
    date: '2026-08-03',
    startTime: '15:00',
    type: 'lodging-checkin',
    title: 'Check in: Apartment in Madrid',
    location: 'Calle de Zaragoza, 11, Madrid',
    families: ['sorianos', 'hykers'],
    status: 'booked',
    refId: 'lodging-madrid-1',
  },
  {
    id: 'evt-madrid-1-out',
    date: '2026-08-06',
    startTime: '11:00',
    type: 'lodging-checkout',
    title: 'Check out: Apartment in Madrid',
    location: 'Madrid',
    families: ['sorianos', 'hykers'],
    status: 'booked',
    refId: 'lodging-madrid-1',
  },

  // ─── Salamanca · Aug 6–9 (Sorianos + Hykers + Dev-Kev) ───────────────────
  {
    id: 'evt-salamanca-in',
    date: '2026-08-06',
    startTime: '16:00',
    type: 'lodging-checkin',
    title: 'Check in: Castillo del Buen Amor',
    location: 'Topas, Salamanca',
    families: ['sorianos', 'hykers', 'dev-kev'],
    status: 'booked',
    refId: 'lodging-salamanca',
  },
  {
    id: 'evt-salamanca-out',
    date: '2026-08-09',
    startTime: '12:00',
    type: 'lodging-checkout',
    title: 'Check out: Castillo del Buen Amor',
    location: 'Topas, Salamanca',
    families: ['sorianos', 'hykers', 'dev-kev'],
    status: 'booked',
    refId: 'lodging-salamanca',
  },

  // ─── Wheelocks · Atlanta → Frankfurt → Palma de Mallorca ─────────────────
  {
    id: 'evt-ua8830-out',
    date: '2026-08-08',
    endDate: '2026-08-09',
    startTime: '15:55',
    endTime: '06:35',
    type: 'flight',
    title: 'Atlanta → Frankfurt (UA 8830)',
    location: 'ATL → FRA · overnight',
    families: ['wheelocks'],
    status: 'booked',
    refId: 'ua8830-out',
  },
  {
    id: 'evt-ua8999-out',
    date: '2026-08-09',
    startTime: '09:00',
    endTime: '11:10',
    type: 'flight',
    title: 'Frankfurt → Palma de Mallorca (UA 8999)',
    location: 'FRA → PMI',
    families: ['wheelocks'],
    status: 'booked',
    refId: 'ua8999-out',
  },

  // ─── Madrid → Mallorca (Sorianos + Hykers + Dev-Kev + Gemma) ─────────────
  {
    id: 'evt-ux6079-out',
    date: '2026-08-09',
    startTime: '17:05',
    endTime: '18:25',
    type: 'flight',
    title: 'Madrid → Palma de Mallorca (UX 6079)',
    location: 'MAD → PMI',
    families: ['sorianos', 'hykers', 'dev-kev', 'gemma'],
    status: 'booked',
    refId: 'ux6079-out',
  },

  // ─── Mallorca · Aug 9–14 (everyone) ──────────────────────────────────────
  {
    id: 'evt-mallorca-in',
    date: '2026-08-09',
    startTime: '17:00',
    type: 'lodging-checkin',
    title: 'Check in: Cottage in the Balearic Islands',
    location: 'Polígono 7, parcela 332, Mallorca',
    families: [], // everyone
    status: 'booked',
    refId: 'lodging-mallorca',
  },

  // ─── Eclipse Day ─────────────────────────────────────────────────────────
  {
    id: 'evt-eclipse',
    date: '2026-08-12',
    startTime: '19:30',
    endTime: '21:20',
    type: 'eclipse',
    title: '🌑 TOTALITY — Eclipse viewing',
    location: 'Mallorca',
    details: 'See the Eclipse Day page for the full plan, timing, and safety checklist.',
    families: [],
    status: 'confirmed',
  },

  // ─── Mallorca → Madrid (Sorianos + Hykers + Dev-Kev + Gemma) ─────────────
  {
    id: 'evt-mallorca-out',
    date: '2026-08-14',
    startTime: '11:00',
    type: 'lodging-checkout',
    title: 'Check out: Mallorca cottage',
    location: 'Polígono 7, parcela 332, Mallorca',
    families: [],
    status: 'booked',
    refId: 'lodging-mallorca',
  },
  {
    id: 'evt-ux6066-ret',
    date: '2026-08-14',
    startTime: '16:45',
    endTime: '18:10',
    type: 'flight',
    title: 'Palma de Mallorca → Madrid (UX 6066)',
    location: 'PMI → MAD',
    families: ['sorianos', 'hykers', 'dev-kev', 'gemma'],
    status: 'booked',
    refId: 'ux6066-ret',
  },

  // ─── Wheelocks · Palma de Mallorca → Frankfurt → Atlanta ─────────────────
  {
    id: 'evt-ua8967-ret',
    date: '2026-08-14',
    startTime: '16:05',
    endTime: '18:30',
    type: 'flight',
    title: 'Palma de Mallorca → Frankfurt (UA 8967)',
    location: 'PMI → FRA · overnight layover',
    families: ['wheelocks'],
    status: 'booked',
    refId: 'ua8967-ret',
  },
  {
    id: 'evt-ua8831-ret',
    date: '2026-08-15',
    startTime: '10:10',
    endTime: '13:45',
    type: 'flight',
    title: 'Frankfurt → Atlanta (UA 8831)',
    location: 'FRA → ATL',
    families: ['wheelocks'],
    status: 'booked',
    refId: 'ua8831-ret',
  },

  // ─── Madrid leg 2 · Aug 14–16 (Sorianos + Hykers) ────────────────────────
  {
    id: 'evt-madrid-2-in',
    date: '2026-08-14',
    startTime: '19:00',
    type: 'lodging-checkin',
    title: 'Check in: Apartment in Madrid (return leg)',
    location: 'Calle de Bocángel, 4, Madrid',
    families: ['sorianos', 'hykers'],
    status: 'booked',
    refId: 'lodging-madrid-2',
  },
  {
    id: 'evt-madrid-2-out',
    date: '2026-08-16',
    startTime: '08:00',
    type: 'lodging-checkout',
    title: 'Check out: Apartment in Madrid',
    location: 'Madrid',
    families: ['sorianos', 'hykers'],
    status: 'booked',
    refId: 'lodging-madrid-2',
  },

  // ─── Madrid → Atlanta (Sorianos + Hykers) ────────────────────────────────
  {
    id: 'evt-dl109-ret',
    date: '2026-08-16',
    startTime: '09:50',
    endTime: '13:22',
    type: 'flight',
    title: 'Madrid → Atlanta (DL 109)',
    location: 'MAD → ATL',
    families: ['sorianos', 'hykers'],
    status: 'booked',
    refId: 'dl109-ret',
  },
];

/** Sorted by date then start time, with all-day events first within a day. */
export function sortedItinerary(): ItineraryEvent[] {
  return [...itinerary].sort((a, b) => {
    if (a.date !== b.date) return a.date < b.date ? -1 : 1;
    const at = a.startTime ?? '00:00';
    const bt = b.startTime ?? '00:00';
    return at < bt ? -1 : at > bt ? 1 : 0;
  });
}

/** All unique dates in the itinerary, sorted ascending. */
export function itineraryDates(): string[] {
  return Array.from(new Set(itinerary.map((e) => e.date))).sort();
}
