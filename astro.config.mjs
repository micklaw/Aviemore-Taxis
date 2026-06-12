// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// TODO: replace with the SWA default hostname once infra is deployed,
// then with the custom domain when DNS is switched over.
const SITE = 'https://swa-aviemore-taxis.azurestaticapps.net';

export default defineConfig({
  site: SITE,
  integrations: [react(), sitemap()],
});
