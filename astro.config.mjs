import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
  site: 'https://javiezcurra.github.io',
  base: '/eclipse2026',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    AstroPWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Eclipse 2026 — Spain Trip',
        short_name: 'Eclipse 2026',
        description: 'Itinerary and trip info for our August 2026 Spain eclipse trip',
        theme_color: '#f59e0b',
        background_color: '#0b1220',
        display: 'standalone',
        start_url: '/eclipse2026/',
        scope: '/eclipse2026/',
        icons: [
          { src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          { src: 'icons/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
      },
      workbox: {
        // HTML is intentionally NOT in the precache. Workbox precache routes
        // always win over runtime caching, so to make navigation requests
        // honor a NetworkFirst strategy (and never serve stale HTML when
        // online), the HTML files must be excluded from precache.
        globPatterns: ['**/*.{css,js,svg,png,ico,txt,woff2}'],
        cleanupOutdatedCaches: true,
        runtimeCaching: [
          {
            // Navigation requests: prefer fresh HTML from the network.
            // Falls back to whatever's in the runtime cache when offline.
            // Pages the user has visited at least once will be available
            // offline; pages they haven't visited won't be.
            urlPattern: ({ request, sameOrigin }) => sameOrigin && request.mode === 'navigate',
            handler: 'NetworkFirst',
            options: {
              cacheName: 'pages',
              networkTimeoutSeconds: 3,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 days
              },
            },
          },
        ],
      },
    }),
  ],
});
