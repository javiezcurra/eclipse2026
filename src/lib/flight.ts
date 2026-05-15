/**
 * Build a FlightAware tracking URL from a flight number like "DL 108" or "UX6079".
 * FlightAware accepts IATA codes; we strip whitespace and leading zeros from the
 * numeric portion so "DL 0108" and "DL108" both work.
 */
export function flightTrackingUrl(flightNumber: string): string {
  const cleaned = flightNumber.replace(/\s+/g, '').toUpperCase();
  const match = cleaned.match(/^([A-Z]+)0*(\d+)$/);
  const code = match ? `${match[1]}${match[2]}` : cleaned;
  return `https://flightaware.com/live/flight/${code}`;
}
