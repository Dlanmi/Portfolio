// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Dónde se publica el sitio. Para Vercel o un dominio propio basta con cambiar SITE_URL.
// Para GitHub Pages en dlanmi.github.io/Portfolio: SITE_URL=https://dlanmi.github.io BASE_PATH=/Portfolio
const site = process.env.SITE_URL ?? 'https://dlanmi.github.io';
const base = process.env.BASE_PATH ?? '/';

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
