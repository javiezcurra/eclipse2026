import type { Family } from './types';

// The 13 travelers, grouped as filter groups on the itinerary.
// `color` controls the accent dot/chip for each group.
export const families: Family[] = [
  {
    id: 'sorianos',
    name: 'Sorianos',
    color: 'amber',
    members: ['Allison', 'Javi', 'Luna'],
  },
  {
    id: 'hykers',
    name: 'Hykers',
    color: 'sky',
    members: ['David', 'Kit'],
  },
  {
    id: 'wheelocks',
    name: 'Wheelocks',
    color: 'emerald',
    members: ['Merilee', 'Thomas', 'Cole', 'Noelle'],
  },
  {
    id: 'dev-kev',
    name: 'Dev-Kev',
    color: 'violet',
    members: ['Devon', 'Kevin'],
  },
  {
    id: 'vani',
    name: 'Vani',
    color: 'rose',
    members: ['Vani'],
  },
  {
    id: 'gemma',
    name: 'Gemma',
    color: 'cyan',
    members: ['Gemma'],
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
  amber:   { bg: 'bg-amber-500',   bgSoft: 'bg-amber-500/15',   text: 'text-amber-700 dark:text-amber-300',     border: 'border-amber-500/40',   ring: 'ring-amber-500/40',   dot: 'bg-amber-400' },
  sky:     { bg: 'bg-sky-500',     bgSoft: 'bg-sky-500/15',     text: 'text-sky-700 dark:text-sky-300',         border: 'border-sky-500/40',     ring: 'ring-sky-500/40',     dot: 'bg-sky-400' },
  emerald: { bg: 'bg-emerald-500', bgSoft: 'bg-emerald-500/15', text: 'text-emerald-700 dark:text-emerald-300', border: 'border-emerald-500/40', ring: 'ring-emerald-500/40', dot: 'bg-emerald-400' },
  rose:    { bg: 'bg-rose-500',    bgSoft: 'bg-rose-500/15',    text: 'text-rose-700 dark:text-rose-300',       border: 'border-rose-500/40',    ring: 'ring-rose-500/40',    dot: 'bg-rose-400' },
  violet:  { bg: 'bg-violet-500',  bgSoft: 'bg-violet-500/15',  text: 'text-violet-700 dark:text-violet-300',   border: 'border-violet-500/40',  ring: 'ring-violet-500/40',  dot: 'bg-violet-400' },
  cyan:    { bg: 'bg-cyan-500',    bgSoft: 'bg-cyan-500/15',    text: 'text-cyan-700 dark:text-cyan-300',       border: 'border-cyan-500/40',    ring: 'ring-cyan-500/40',    dot: 'bg-cyan-400' },
  orange:  { bg: 'bg-orange-500',  bgSoft: 'bg-orange-500/15',  text: 'text-orange-700 dark:text-orange-300',   border: 'border-orange-500/40',  ring: 'ring-orange-500/40',  dot: 'bg-orange-400' },
  lime:    { bg: 'bg-lime-500',    bgSoft: 'bg-lime-500/15',    text: 'text-lime-700 dark:text-lime-300',       border: 'border-lime-500/40',    ring: 'ring-lime-500/40',    dot: 'bg-lime-400' },
  fuchsia: { bg: 'bg-fuchsia-500', bgSoft: 'bg-fuchsia-500/15', text: 'text-fuchsia-700 dark:text-fuchsia-300', border: 'border-fuchsia-500/40', ring: 'ring-fuchsia-500/40', dot: 'bg-fuchsia-400' },
};
