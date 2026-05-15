import type { Flight } from './types';

// Placeholder flights. Replace with real bookings.
export const flights: Flight[] = [
  {
    id: 'flight-ezcurra-outbound',
    airline: 'Iberia',
    flightNumber: 'IB6250',
    travelers: ['Add traveler', 'Add traveler'],
    families: ['ezcurra'],
    departDate: '2026-08-05',
    departTime: '21:55',
    departAirport: 'JFK',
    departAirportName: 'New York–JFK',
    arriveDate: '2026-08-06',
    arriveTime: '11:15',
    arriveAirport: 'MAD',
    arriveAirportName: 'Madrid–Barajas',
    status: 'tentative',
    notes: 'Overnight, ~7h flight.',
  },
  {
    id: 'flight-ezcurra-return',
    airline: 'Iberia',
    flightNumber: 'IB6251',
    travelers: ['Add traveler', 'Add traveler'],
    families: ['ezcurra'],
    departDate: '2026-08-19',
    departTime: '11:20',
    departAirport: 'BCN',
    departAirportName: 'Barcelona–El Prat',
    arriveDate: '2026-08-19',
    arriveTime: '14:05',
    arriveAirport: 'JFK',
    arriveAirportName: 'New York–JFK',
    status: 'tentative',
  },
];
