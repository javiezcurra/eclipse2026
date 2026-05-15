/** Join the site base with a path, normalizing slashes. */
export function url(path: string): string {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}

/** Friendly label for a lodging listing URL. Strips query strings, picks
 *  well-known host labels ("View on Airbnb") so long share-link URLs
 *  don't pollute the modal. */
export function listingLabel(rawUrl: string): string {
  try {
    const u = new URL(rawUrl);
    const host = u.hostname.replace(/^www\./, '');
    if (host === 'airbnb.com' || host.endsWith('.airbnb.com')) return 'View on Airbnb';
    if (host === 'vrbo.com') return 'View on Vrbo';
    if (host === 'booking.com') return 'View on Booking.com';
    return `${host}${u.pathname && u.pathname !== '/' ? u.pathname : ''}`;
  } catch {
    return rawUrl;
  }
}
