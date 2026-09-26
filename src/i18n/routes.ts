import type { Lang } from './ui';

/** Every page has one key; each key maps to its Turkish and English path. */
export const routes = {
  home: { tr: '/', en: '/en/' },

  aboutUs: { tr: '/hakkimizda', en: '/en/about' },
  visionMission: { tr: '/hakkimizda/vizyon-misyon', en: '/en/about/vision-mission' },

  services: { tr: '/hizmetler', en: '/en/services' },
  serviceAir: { tr: '/hizmetler/havayolu-tasimaciligi', en: '/en/services/air-freight' },
  serviceRoad: { tr: '/hizmetler/karayolu-tasimaciligi', en: '/en/services/road-freight' },
  serviceSea: { tr: '/hizmetler/denizyolu-tasimaciligi', en: '/en/services/sea-freight' },
  serviceRail: { tr: '/hizmetler/demiryolu-tasimaciligi', en: '/en/services/rail-freight' },
  serviceIntermodal: { tr: '/hizmetler/intermodal-tasimacilik', en: '/en/services/intermodal-transport' },
  serviceWarehousing: { tr: '/hizmetler/depolama', en: '/en/services/warehousing' },

  logipedia: { tr: '/logipedia', en: '/en/logipedia' },
  incoterms: { tr: '/logipedia/incoterms', en: '/en/logipedia/incoterms' },
  containers: { tr: '/logipedia/konteyner-tipleri', en: '/en/logipedia/container-types' },
  trucks: { tr: '/logipedia/tir-dorse-olculeri', en: '/en/logipedia/truck-trailer-dimensions' },
  glossary: { tr: '/logipedia/lojistik-sozlugu', en: '/en/logipedia/logistics-glossary' },

  blog: { tr: '/blog', en: '/en/blog' },
  quote: { tr: '/teklif-al', en: '/en/get-a-quote' },
  contact: { tr: '/iletisim', en: '/en/contact' },

  kvkk: { tr: '/kvkk-aydinlatma-metni', en: '/en/privacy-notice' },
  cookies: { tr: '/cerez-politikasi', en: '/en/cookie-policy' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;

export function path(key: RouteKey, lang: Lang): string {
  return routes[key][lang];
}
