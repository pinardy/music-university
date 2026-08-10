import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  base: '/music-university/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // icon.svg is already picked up by the workbox glob below; listing it
      // here as well precaches it twice.
      // Otherwise the plugin adds the manifest's install icons to the
      // precache; they are only needed when the app is actually installed.
      includeManifestIcons: false,
      manifest: {
        name: 'Music University — Bachelor of Music Curriculum',
        short_name: 'Music University',
        description:
          'A four-year Bachelor of Music curriculum with weekly lessons, adapted from leading conservatories.',
        theme_color: '#1a1423',
        background_color: '#1a1423',
        display: 'standalone',
        start_url: '/music-university/',
        icons: [
          {
            src: 'icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any',
          },
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            // Full-bleed square: a maskable icon with transparent corners
            // gets cut into by whatever shape the platform masks it with.
            src: 'icon-maskable-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,woff2}'],
        // Precache the shell only. The eight semester chunks are ~900 kB of
        // lesson prose, the library's source cross-reference ~90 kB, and the
        // install icons ~70 kB; precaching them made every first visit
        // download the whole degree before anything was readable. All are
        // content-hashed and immutable, so CacheFirst keeps whatever the
        // reader opens available offline, and warmOffline.ts fills the rest
        // in at idle.
        globIgnores: ['assets/y?s?-*.js', 'assets/LibraryPage-*.js', 'icon-*.png'],
        navigateFallback: '/music-university/index.html',
        runtimeCaching: [
          {
            urlPattern: /\/assets\/(y\ds\d|LibraryPage)-[^/]+\.js$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'curriculum-data',
              expiration: { maxEntries: 16 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
          {
            urlPattern: /\/icon-[^/]+\.png$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'icons',
              expiration: { maxEntries: 8 },
              cacheableResponse: { statuses: [0, 200] },
            },
          },
        ],
      },
    }),
  ],
})
