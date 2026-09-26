// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// Pages marked noindex stay out of the sitemap. Update this list when they go live:
// the KVKK notice once the approved text is in, the blog once the first post exists.
const excluded = ['/kvkk-aydinlatma-metni', '/en/privacy-notice', '/blog', '/en/blog', '/404'];

// TR and EN pages use different slugs (e.g. /teklif-al vs /en/get-a-quote),
// so locale routing is handled by src/i18n/routes.ts instead of Astro's i18n config.
export default defineConfig({
  site: 'https://bolt-log.com',
  // Clean URLs without trailing slashes, as in CLAUDE.md section 4 (/hizmetler/havayolu-tasimaciligi).
  trailingSlash: 'never',
  // Inline the (small) CSS so it does not block first paint.
  build: { format: 'file', inlineStylesheets: 'always' },
  integrations: [
    icon(),
    sitemap({
      filter: (page) => !excluded.some((p) => new URL(page).pathname.replace(/\/$/, '') === p),
    }),
  ],
});
