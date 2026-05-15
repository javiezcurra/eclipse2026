import type { Lodging } from './types';

export const lodging: Lodging[] = [
  // Aug 3–6 · Madrid (Sorianos + Hykers)
  {
    id: 'lodging-madrid-1',
    name: 'Apartment in Madrid',
    kind: 'Airbnb',
    host: 'Ramon',
    address: 'Calle de Zaragoza, 11, 28012 Madrid, Spain',
    mapQuery: 'Calle de Zaragoza 11, 28012 Madrid, Spain',
    website: 'https://www.airbnb.com/rooms/40410512?unique_share_id=568534c7-d3cf-4791-8d4d-3e0c4ae9a3de&viralityEntryPoint=1&s=76',
    checkInDate: '2026-08-03',
    checkInTime: '15:00',
    checkOutDate: '2026-08-06',
    checkOutTime: '11:00',
    guests: ['Javier', 'Allison', 'Luna', 'David', 'Kit'],
    families: ['sorianos', 'hykers'],
    status: 'booked',
  },

  // Aug 6–9 · Castillo del Buen Amor, Salamanca (Sorianos + Hykers + Dev-Kev)
  {
    id: 'lodging-salamanca',
    name: 'Castillo del Buen Amor',
    kind: 'Castle hotel · B&B',
    address: 'Topas, Salamanca, Spain',
    mapQuery: 'Castillo del Buen Amor, Topas, Salamanca',
    website: 'https://www.buenamor.net/en',
    confirmation: 'HPLLRQW',
    checkInDate: '2026-08-06',
    checkInTime: '16:00',
    checkOutDate: '2026-08-09',
    checkOutTime: '12:00',
    guests: ['Javier', 'Allison', 'Luna', 'David', 'Kit', 'Devon', 'Kevin'],
    families: ['sorianos', 'hykers', 'dev-kev'],
    status: 'booked',
    notes:
      'Bed & breakfast. Three suites booked: Paso de Guardia (Mazmorra), Suite con Torreón, and Gran Suite Fonseca. Request on file: extra bed in the kid\'s room.',
  },

  // Aug 9–14 · Mallorca cottage (everyone — all 13 travelers)
  {
    id: 'lodging-mallorca',
    name: 'Cottage in the Balearic Islands',
    kind: 'Airbnb cottage',
    host: 'Agustín M.',
    address: 'Polígono 7, parcela 332, 07300 Islas Baleares, Spain',
    mapQuery: 'Polígono 7 parcela 332, 07300 Inca, Mallorca',
    website: 'https://www.airbnb.com/rooms/868566439724900782?unique_share_id=c9d71728-7c5b-48d8-b4f0-50f89e8aa95f&viralityEntryPoint=1&s=76',
    checkInDate: '2026-08-09',
    checkInTime: '17:00',
    checkOutDate: '2026-08-14',
    checkOutTime: '11:00',
    guests: ['Everyone (13)'],
    families: [], // empty = everyone
    status: 'booked',
    notes: 'Eclipse-viewing base. The 8 travelers on UX 6079 land at PMI 18:25; arrival at the cottage will be ~19:30–20:00.',
  },

  // Aug 9–11 · Ibiza side trip (Hykers only) ─── placeholder, not booked yet
  {
    id: 'lodging-ibiza',
    name: 'Ibiza hotel (TBD)',
    kind: 'Hotel · placeholder',
    address: 'Ibiza, Spain',
    mapQuery: 'Ibiza, Spain',
    checkInDate: '2026-08-09',
    checkInTime: '23:30',
    checkOutDate: '2026-08-11',
    checkOutTime: '11:00',
    guests: ['David', 'Kit'],
    families: ['hykers'],
    status: 'needs-action',
    notes: 'Two-night side trip from Mallorca. The Mallorca cottage is still booked for the Hykers across this window — pick which lodging makes sense.',
  },

  // Aug 14–16 · Madrid return leg (Sorianos + Hykers)
  {
    id: 'lodging-madrid-2',
    name: 'Apartment in Madrid (return leg)',
    kind: 'Airbnb',
    host: 'Hui Min',
    address: 'Calle de Bocángel, 4, 28028 Madrid, Spain',
    mapQuery: 'Calle de Bocángel 4, 28028 Madrid, Spain',
    website: 'https://www.airbnb.com/rooms/1513728914443264830?unique_share_id=ad8f41b4-dfdf-4005-bf7a-248d9d9343d7&viralityEntryPoint=1&s=76',
    checkInDate: '2026-08-14',
    checkInTime: '16:00',
    checkOutDate: '2026-08-16',
    checkOutTime: '11:00',
    guests: ['Javier', 'Allison', 'Luna', 'David', 'Kit'],
    families: ['sorianos', 'hykers'],
    status: 'booked',
    notes: 'Two nights before the DL 109 return. Check-out is well before the 09:50 flight, so leave for MAD early.',
  },
];

export function lodgingById(id: string): Lodging | undefined {
  return lodging.find((l) => l.id === id);
}
