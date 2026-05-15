import type { Contact } from './types';

export const contacts: Contact[] = [
  {
    id: 'eu-emergency',
    label: 'Spain / EU emergency',
    category: 'emergency',
    phone: '112',
    notes: 'Spain\'s equivalent of 911 in the US — one number for police, fire, and medical. English-speaking dispatchers available.',
  },
  {
    id: 'us-embassy-madrid',
    label: 'U.S. Embassy — Madrid',
    category: 'embassy',
    phone: '+34 91 587 2200',
    address: 'Calle de Serrano 75, 28006 Madrid',
    website: 'https://es.usembassy.gov',
    notes: 'For lost passports, emergencies abroad.',
  },
  {
    id: 'us-consulate-barcelona',
    label: 'U.S. Consulate — Barcelona',
    category: 'embassy',
    phone: '+34 93 280 2227',
    address: 'Paseo Reina Elisenda de Montcada 23, 08034 Barcelona',
    website: 'https://es.usembassy.gov/embassy-consulate/barcelona/',
  },
];
