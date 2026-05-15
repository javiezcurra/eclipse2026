export const trip = {
  name: 'Eclipse 2026 — Spain',
  tagline: 'August 12, 2026 · Total solar eclipse across northern Spain',
  /** Outer bounds of the trip; individual travelers may arrive/depart on different days. */
  startDate: '2026-07-30',
  endDate: '2026-08-16',
  /** Spain is on CEST (UTC+2) in August. */
  timeZone: 'Europe/Madrid',
  eclipseDate: '2026-08-12',
} as const;
