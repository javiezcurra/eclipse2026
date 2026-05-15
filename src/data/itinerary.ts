import type { ItineraryEvent } from './types';

// `families: []` means everyone; otherwise list the family ids that participate.
// `refId` on flight events points to a Flight in flights.ts so the modal can show full details.
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

  // ─── Madrid week ─────────────────────────────────────────────────────────
  {
    id: 'evt-madrid-checkin',
    date: '2026-08-03',
    startTime: '15:00',
    type: 'lodging-checkin',
    title: 'Check in: Madrid lodging (TBD)',
    location: 'Madrid',
    families: ['sorianos', 'hykers'],
    status: 'tentative',
    refId: 'lodging-madrid',
  },
  {
    id: 'evt-madrid-tapas-walk',
    date: '2026-08-07',
    startTime: '19:00',
    type: 'activity',
    title: 'Tapas walk in La Latina (placeholder)',
    location: 'La Latina, Madrid',
    families: [],
    status: 'tentative',
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
  {
    id: 'evt-mallorca-checkin',
    date: '2026-08-09',
    startTime: '20:00',
    type: 'lodging-checkin',
    title: 'Check in: Mallorca lodging (TBD)',
    location: 'Palma de Mallorca',
    families: ['sorianos', 'hykers', 'dev-kev', 'gemma'],
    status: 'tentative',
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
    location: 'Mallorca area (viewing site TBD)',
    details: 'Totality crosses near Mallorca just before sunset. See the Eclipse Day page for the full plan, backup sites, and weather.',
    families: [],
    status: 'confirmed',
  },

  // ─── Mallorca → Madrid (Sorianos + Hykers + Dev-Kev + Gemma) ─────────────
  {
    id: 'evt-mallorca-checkout',
    date: '2026-08-14',
    startTime: '11:00',
    type: 'lodging-checkout',
    title: 'Check out: Mallorca lodging',
    location: 'Palma de Mallorca',
    families: ['sorianos', 'hykers', 'dev-kev', 'gemma'],
    status: 'tentative',
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
