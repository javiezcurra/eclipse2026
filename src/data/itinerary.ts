import type { ItineraryEvent } from './types';

// Placeholder events spanning the trip. Replace with real plans as they firm up.
// `families: []` means everyone; otherwise list the family ids that participate.
export const itinerary: ItineraryEvent[] = [
  {
    id: 'arrive-mad-sorianos',
    date: '2026-08-06',
    startTime: '08:45',
    type: 'flight',
    title: 'Sorianos land in Madrid (MAD)',
    location: 'Madrid-Barajas Airport',
    families: ['sorianos'],
    status: 'tentative',
    refId: 'flight-sorianos-outbound',
  },
  {
    id: 'madrid-checkin',
    date: '2026-08-06',
    startTime: '15:00',
    type: 'lodging-checkin',
    title: 'Check in: Madrid apartment',
    location: 'Madrid',
    families: ['sorianos'],
    status: 'tentative',
    refId: 'lodging-madrid',
  },
  {
    id: 'madrid-tapas-walk',
    date: '2026-08-07',
    startTime: '19:00',
    type: 'activity',
    title: 'Tapas walk in La Latina',
    location: 'La Latina, Madrid',
    families: [],
    status: 'tentative',
  },
  {
    id: 'train-to-zaragoza',
    date: '2026-08-10',
    startTime: '10:00',
    type: 'transport',
    title: 'AVE train: Madrid → Zaragoza',
    location: 'Madrid Atocha → Zaragoza-Delicias',
    families: [],
    status: 'needs-action',
  },
  {
    id: 'eclipse-viewing',
    date: '2026-08-12',
    startTime: '20:30',
    endTime: '21:15',
    type: 'eclipse',
    title: '🌑 TOTALITY — Eclipse viewing',
    location: 'Northern Spain (TBD viewing site)',
    details: 'Totality crosses northern Spain just before sunset. See the Eclipse Day page for the full plan, backup sites, and weather.',
    families: [],
    status: 'confirmed',
  },
  {
    id: 'barcelona-checkin',
    date: '2026-08-15',
    startTime: '16:00',
    type: 'lodging-checkin',
    title: 'Check in: Barcelona',
    location: 'Barcelona',
    families: [],
    status: 'tentative',
  },
  {
    id: 'depart-bcn',
    date: '2026-08-19',
    startTime: '11:20',
    type: 'flight',
    title: 'Group departs from Barcelona (BCN)',
    location: 'Barcelona–El Prat Airport',
    families: [],
    status: 'tentative',
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
