import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// SITE_URL and BASE_PATH come from the GitHub repository Variables (see GESTIONE-SITO.md §7).
// Custom domain: BASE_PATH="/" · user.github.io/repo: BASE_PATH="/repo/"
export default defineConfig({
  site: process.env.SITE_URL || 'https://example.github.io',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  integrations: [react(), sitemap()],
});
