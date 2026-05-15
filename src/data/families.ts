import type { Family } from './types';

// Placeholder — replace with real family/group data.
// `color` controls timeline accent + filter chip color.
export const families: Family[] = [
  {
    id: 'ezcurra',
    name: 'The Ezcurras',
    color: 'amber',
    members: ['Add member', 'Add member'],
  },
  {
    id: 'family-b',
    name: 'Family B',
    color: 'sky',
    members: ['Add member'],
  },
  {
    id: 'family-c',
    name: 'Family C',
    color: 'emerald',
    members: ['Add member'],
  },
  {
    id: 'family-d',
    name: 'Family D',
    color: 'rose',
    members: ['Add member'],
  },
];

export function familyById(id: string): Family | undefined {
  return families.find((f) => f.id === id);
}

/** Tailwind class fragments keyed by family color, so we can render without dynamic class strings. */
export const familyColorClasses: Record<
  Family['color'],
  { bg: string; bgSoft: string; text: string; border: string; ring: string; dot: string }
> = {
  amber:   { bg: 'bg-amber-500',   bgSoft: 'bg-amber-500/15',   text: 'text-amber-300',   border: 'border-amber-500/40',   ring: 'ring-amber-500/40',   dot: 'bg-amber-400' },
  sky:     { bg: 'bg-sky-500',     bgSoft: 'bg-sky-500/15',     text: 'text-sky-300',     border: 'border-sky-500/40',     ring: 'ring-sky-500/40',     dot: 'bg-sky-400' },
  emerald: { bg: 'bg-emerald-500', bgSoft: 'bg-emerald-500/15', text: 'text-emerald-300', border: 'border-emerald-500/40', ring: 'ring-emerald-500/40', dot: 'bg-emerald-400' },
  rose:    { bg: 'bg-rose-500',    bgSoft: 'bg-rose-500/15',    text: 'text-rose-300',    border: 'border-rose-500/40',    ring: 'ring-rose-500/40',    dot: 'bg-rose-400' },
  violet:  { bg: 'bg-violet-500',  bgSoft: 'bg-violet-500/15',  text: 'text-violet-300',  border: 'border-violet-500/40',  ring: 'ring-violet-500/40',  dot: 'bg-violet-400' },
  cyan:    { bg: 'bg-cyan-500',    bgSoft: 'bg-cyan-500/15',    text: 'text-cyan-300',    border: 'border-cyan-500/40',    ring: 'ring-cyan-500/40',    dot: 'bg-cyan-400' },
  orange:  { bg: 'bg-orange-500',  bgSoft: 'bg-orange-500/15',  text: 'text-orange-300',  border: 'border-orange-500/40',  ring: 'ring-orange-500/40',  dot: 'bg-orange-400' },
  lime:    { bg: 'bg-lime-500',    bgSoft: 'bg-lime-500/15',    text: 'text-lime-300',    border: 'border-lime-500/40',    ring: 'ring-lime-500/40',    dot: 'bg-lime-400' },
  fuchsia: { bg: 'bg-fuchsia-500', bgSoft: 'bg-fuchsia-500/15', text: 'text-fuchsia-300', border: 'border-fuchsia-500/40', ring: 'ring-fuchsia-500/40', dot: 'bg-fuchsia-400' },
};
