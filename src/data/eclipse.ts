export const eclipse = {
  date: '2026-08-12',
  /** Spain local time (CEST) — values from timeanddate.com for Palma de Mallorca.
   *  Accurate to within a few seconds for Palma; will vary by a few seconds
   *  across the island (Inca / Pollença / Alcúdia etc.). */
  c1: '19:38:03',   // partial begins
  c2: '20:31:05',   // totality begins
  max: '20:31:53',  // greatest eclipse
  c3: '20:32:41',   // totality ends
  sunset: '20:49:22',
  c4: '21:22:33',   // partial ends (sun below horizon by this point)
  durationOfTotality: '1m 36s',
  /** Sun altitude at greatest eclipse — very low, this is a sunset eclipse. */
  sunAltitude: '2.8° above the WNW horizon (287°)',

  /** Eclipse glasses — already procured by Javi for the whole group. */
  glasses: {
    status: 'provided',
    headline: 'Eclipse glasses already covered for everyone — kids included.',
    notes: "Javi has ISO 12312-2 certified glasses in hand for all 13 travelers, including the kids. They'll be distributed before viewing day; no one needs to buy their own.",
  },

  viewingSite: {
    summary: 'Three options under consideration · final pick TBD.',
    notes: 'Totality happens with the sun only ~2.8° above the horizon, bearing roughly WNW (287°). Whichever site we pick needs an unobstructed view in that direction — sea, hilltop, or open plain. Cloud cover on Mallorca can be local, so be ready to relocate the morning of.',
  },

  /** Candidate viewing sites; mark `chosen: true` on whichever we pick. */
  viewingOptions: [
    {
      id: 'beach',
      icon: '🏖️',
      name: 'A beach (specific one TBD)',
      pros: [
        'Easiest option logistically — pick the morning of based on weather',
        'A west-facing north-coast beach (Pollença, Alcúdia, Can Picafort) gives a clear horizon',
      ],
      cons: [
        'Will be busy — popular beaches will pack with eclipse-watchers',
        'Arrive several hours early to claim space',
      ],
      mapQuery: null,
    },
    {
      id: 'boat',
      icon: '⛵',
      name: 'Rent a boat',
      pros: [
        'Total freedom to position for a clean western horizon',
        'No crowds, no parking, no walking',
        'Unforgettable vantage point',
      ],
      cons: [
        'Most expensive option',
        'Demand for charters around eclipse day will be intense — book well in advance',
        'Weather-dependent (sea state + visibility)',
      ],
      mapQuery: null,
    },
    {
      id: 'puig-santa-magdalena',
      icon: '⛰️',
      name: 'Puig de Santa Magdalena',
      pros: [
        '~15 minute drive from the Airbnb in Inca',
        '~287 m elevation gives an unobstructed western horizon',
        'Plan: arrive plenty early, spend the whole afternoon up there — picnic, hang out, ease into the eclipse',
        'Historic chapel at the summit — a memorable backdrop',
      ],
      cons: [
        'A known viewpoint — likely to draw a crowd',
        'Need to arrive well before C1 to claim a good spot',
        'Bring water, layers, and decent shoes',
      ],
      mapQuery: 'Puig de Santa Magdalena, Inca, Mallorca',
    },
  ],

  backupPlan: [
    'Pick a clear-skies Plan B 30–60 km along the path on Mallorca and have it pre-loaded in maps.',
    'Morning-of forecast checks: AEMET (Spanish met service), Windy, and sat24.com for satellite cloud cover.',
    'Be ready to leave by mid-morning if the chosen site is under cloud — we lose if we wait.',
  ],

  totalityChecklist: [
    'Eclipse glasses ON for the entire partial phase. Off ONLY during totality.',
    'Watch for the diamond ring effect 5–10 seconds before C2.',
    'During totality: take ONE photo if you must, then put the camera down and look up.',
    'Watch for the corona, planets popping out, and 360° sunset colors on every horizon.',
    'Glasses BACK ON the instant the diamond ring reappears at C3.',
  ],

  safety: [
    'Only ISO 12312-2 certified eclipse glasses are safe for the partial phases — already on hand for the whole group.',
    'Never look at the partial sun through a camera, binoculars, or telescope without a proper solar filter — even with eclipse glasses on.',
    'During totality (and only during totality), it is safe to look at the sun with the naked eye.',
  ],

  /** External reference — official Palma tourism info on the eclipse. */
  learnMore: {
    label: 'Solar Eclipse in Palma — Visit Palma',
    url: 'https://visitpalma.com/en/solar-eclipse-palma/',
  },
};
