export type FamilyId = string;

export interface Family {
  id: FamilyId;
  name: string;
  /** Tailwind-compatible color name used for badges and timeline accents. */
  color: 'amber' | 'sky' | 'emerald' | 'rose' | 'violet' | 'cyan' | 'orange' | 'lime' | 'fuchsia';
  members: string[];
}

export type EventStatus = 'confirmed' | 'booked' | 'tentative' | 'needs-action';

export type EventType =
  | 'flight'
  | 'lodging-checkin'
  | 'lodging-checkout'
  | 'transport'
  | 'activity'
  | 'meal'
  | 'eclipse'
  | 'free-time'
  | 'note';

export interface ItineraryEvent {
  id: string;
  /** ISO date in Spain local time, e.g. 2026-08-10 */
  date: string;
  /** 24h local time, e.g. "14:30". Omit for all-day events. */
  startTime?: string;
  endTime?: string;
  /** ISO date if the event spans multiple days */
  endDate?: string;
  type: EventType;
  title: string;
  location?: string;
  /** Optional Google Maps query or URL */
  mapQuery?: string;
  details?: string;
  /** Which families are part of this event. Empty = everyone. */
  families: FamilyId[];
  status: EventStatus;
  /** Optional reference to a flight or lodging entry */
  refId?: string;
}

export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  /** e.g. "Boeing 737-800", "Airbus A330-900neo" */
  aircraft?: string;
  /** Operating carrier if different from the marketing airline. */
  operatedBy?: string;
  /** Fare description e.g. "Standard · Economy P" */
  fareClass?: string;
  /** Total flight time e.g. "1h 20m" */
  duration?: string;
  confirmation?: string;
  travelers: string[];
  families: FamilyId[];
  /** ISO date + local time at departure airport */
  departDate: string;
  departTime: string;
  departAirport: string;
  departAirportName: string;
  arriveDate: string;
  arriveTime: string;
  arriveAirport: string;
  arriveAirportName: string;
  status: EventStatus;
  notes?: string;
}

export interface Lodging {
  id: string;
  name: string;
  /** e.g. "Hotel", "Airbnb", "Casa rural" */
  kind: string;
  /** First name of the host, where applicable (Airbnb etc.). */
  host?: string;
  address?: string;
  mapQuery?: string;
  phone?: string;
  website?: string;
  confirmation?: string;
  checkInDate: string;
  checkInTime?: string;
  checkOutDate: string;
  checkOutTime?: string;
  guests: string[];
  families: FamilyId[];
  status: EventStatus;
  notes?: string;
}

export interface PrepItem {
  id: string;
  title: string;
  description?: string;
  category: 'documents' | 'health' | 'tech' | 'money' | 'packing' | 'other';
  /** Who this applies to. Empty = everyone. */
  appliesTo: FamilyId[];
  /** Soft deadline relative to trip start, e.g. "2 months before" */
  deadline?: string;
}

export interface Contact {
  id: string;
  label: string;
  category: 'emergency' | 'embassy' | 'medical' | 'lodging' | 'transport' | 'other';
  phone?: string;
  address?: string;
  website?: string;
  notes?: string;
}
