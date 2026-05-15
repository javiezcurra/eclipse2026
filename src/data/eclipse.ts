export const eclipse = {
  date: '2026-08-12',
  /** Spain local time (CEST). Update once a final viewing site is chosen. */
  c1: '19:32',      // partial begins
  c2: '20:27:30',   // totality begins
  max: '20:28:20',  // greatest eclipse
  c3: '20:29:10',   // totality ends
  c4: '21:20',      // partial ends
  durationOfTotality: '~1m 40s',
  /** Sun altitude at greatest eclipse, degrees above horizon. Very low — viewing site needs a clear western horizon. */
  sunAltitude: '~3°',
  viewingSite: {
    name: 'TBD — northern Spain (path of totality)',
    notes: 'The path crosses northern Spain (Galicia, Asturias, Cantabria, La Rioja, Aragón, Catalonia). Sun is very low near sunset, so the viewing site must have a clear western horizon — coast, hilltop, or open plain.',
  },
  backupSites: [
    'Have a "Plan B" 50–100 km along the path in case of clouds.',
    'Monitor satellite forecasts the morning of and the day before.',
  ],
  totalityChecklist: [
    'Eclipse glasses ON for the entire partial phase. Off ONLY during totality.',
    'Watch for the diamond ring effect 5–10 seconds before C2.',
    'During totality: take ONE photo if you must, then put the camera down and look up.',
    'Watch for the corona, planets, and 360° sunset colors on the horizon.',
    'Glasses BACK ON the instant the diamond ring reappears at C3.',
  ],
  safety: [
    'Only ISO 12312-2 certified eclipse glasses are safe for the partial phases.',
    'Never look at the partial sun through a camera, binoculars, or telescope without a proper solar filter — even with eclipse glasses on.',
    'During totality (and only during totality), it is safe to look at the sun with the naked eye.',
  ],
};
