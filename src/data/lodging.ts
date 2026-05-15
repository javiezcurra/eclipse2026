import type { Lodging } from './types';

// Placeholder lodging. Replace with real bookings.
export const lodging: Lodging[] = [
  {
    id: 'lodging-madrid',
    name: 'Madrid apartment (TBD)',
    kind: 'Airbnb',
    address: 'Madrid (neighborhood TBD)',
    checkInDate: '2026-08-06',
    checkInTime: '15:00',
    checkOutDate: '2026-08-10',
    checkOutTime: '11:00',
    guests: ['Allison', 'Javi', 'Luna'],
    families: ['sorianos'],
    status: 'tentative',
    notes: 'Looking at La Latina or Malasaña.',
  },
  {
    id: 'lodging-eclipse-base',
    name: 'Eclipse-night base (TBD)',
    kind: 'Casa rural',
    address: 'Near path of totality, northern Spain',
    checkInDate: '2026-08-11',
    checkOutDate: '2026-08-13',
    guests: [],
    families: [],
    status: 'needs-action',
    notes: 'Book well in advance — lodging in the path will sell out.',
  },
  {
    id: 'lodging-barcelona',
    name: 'Barcelona hotel (TBD)',
    kind: 'Hotel',
    address: 'Barcelona',
    checkInDate: '2026-08-15',
    checkInTime: '16:00',
    checkOutDate: '2026-08-19',
    checkOutTime: '11:00',
    guests: [],
    families: [],
    status: 'tentative',
  },
];
