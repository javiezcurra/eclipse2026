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
        navigateFallback: '/eclipse2026/',
        globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
      },
    }),
  ],
});
