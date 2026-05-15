export const eclipse = {
  date: '2026-08-12',
  /** Approximate Spain local time (CEST) for the Mallorca area.
   *  These are placeholder estimates — confirm precisely from a calculator
   *  (xjubier.free.fr or NASA) once a viewing site is locked in. */
  c1: '19:32',      // partial begins
  c2: '20:27:30',   // totality begins
  max: '20:28:20',  // greatest eclipse
  c3: '20:29:10',   // totality ends
  c4: '21:20',      // partial ends
  durationOfTotality: '~1m 40s',
  /** Sun altitude at greatest eclipse — very low, this is essentially a sunset eclipse. */
  sunAltitude: '~3° above the western horizon',

  /** Eclipse glasses — already procured by Javi for the whole group. */
  glasses: {
    status: 'provided',
    headline: 'Eclipse glasses already covered for everyone — kids included.',
    notes: "Javi has ISO 12312-2 certified glasses in hand for all 13 travelers, including the kids. They'll be distributed before viewing day; no one needs to buy their own.",
  },

  viewingSite: {
    summary: 'Three options under consideration · final pick TBD.',
    notes: 'The eclipse happens late afternoon with the sun very low to the west, so any site we choose needs a clear western horizon. Cloud cover on Mallorca can be local — we should be ready to relocate the morning of.',
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
      mapQuery: "Port d'Alcúdia, Mallorca",
    },
    {
      id: 'puig-santa-magdalena',
      icon: '⛰️',
      name: 'Puig de Santa Magdalena',
      pros: [
        'Walking distance from the Airbnb in Inca',
        '~287 m elevation gives an unobstructed western horizon',
        'Historic chapel at the summit — a memorable backdrop',
      ],
      cons: [
        'A known viewpoint — likely to draw a crowd',
        'Arrive well before C1 to find a good spot',
        'Hiking trail; bring water and decent shoes',
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
};
