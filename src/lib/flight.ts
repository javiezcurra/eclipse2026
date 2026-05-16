/**
 * Build a FlightAware tracking URL from a flight number like "DL 108" or "UX6079".
 *
 * FlightAware's URLs use ICAO airline codes (DAL, UAL, AEA, …), not the
 * IATA codes (DL, UA, UX, …) that appear on tickets and boarding passes.
 * For example: DL 108 → /live/flight/DAL108 — using DL108 returns a 404.
 *
 * For airlines not in the mapping below, the IATA code is used as-is. That
 * sometimes resolves via redirect and sometimes doesn't, so it's worth
 * adding a new entry whenever we add a new carrier to the trip.
 */
const IATA_TO_ICAO: Record<string, string> = {
  // Airlines used on this trip
  DL: 'DAL', // Delta Air Lines
  UA: 'UAL', // United Airlines
  UX: 'AEA', // Air Europa
  LH: 'DLH', // Lufthansa (operating carrier for the UA-numbered Wheelocks legs)
  IB: 'IBE', // Iberia

  // Common partners likely to come up
  AA: 'AAL', // American Airlines
  AF: 'AFR', // Air France
  BA: 'BAW', // British Airways
  KL: 'KLM', // KLM
  VS: 'VIR', // Virgin Atlantic
};

export function flightTrackingUrl(flightNumber: string): string {
  const cleaned = flightNumber.replace(/\s+/g, '').toUpperCase();
  const match = cleaned.match(/^([A-Z]+)0*(\d+)$/);
  if (!match) return `https://flightaware.com/live/flight/${cleaned}`;
  const [, prefix, number] = match;
  const icao = IATA_TO_ICAO[prefix] ?? prefix;
  return `https://flightaware.com/live/flight/${icao}${number}`;
}
