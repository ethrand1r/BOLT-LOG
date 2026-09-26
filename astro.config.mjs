// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// TR and EN pages use different slugs (e.g. /teklif-al vs /en/get-a-quote),
// so locale routing is handled by src/i18n/routes.ts instead of Astro's i18n config.
export default defineConfig({
  site: 'https://bolt-log.com',
  integrations: [icon(), sitemap()],
});
