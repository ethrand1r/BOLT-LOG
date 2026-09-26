import type { RouteKey } from '../i18n/routes';
import type { UiKey } from '../i18n/ui';

export interface NavLink {
  route: RouteKey;
  label: UiKey;
  icon?: string;
}

export interface NavGroup {
  id: string;
  label: UiKey;
  links: NavLink[];
  /** Optional overview link shown last in the menu, e.g. "All Services". */
  overview?: NavLink;
  /** Wider two-column panel with icons. */
  wide?: boolean;
}

export type NavItem = NavGroup | NavLink;

export const serviceLinks: NavLink[] = [
  { route: 'serviceAir', label: 'services.air', icon: 'ph:airplane-tilt' },
  { route: 'serviceRoad', label: 'services.road', icon: 'ph:truck' },
  { route: 'serviceSea', label: 'services.sea', icon: 'ph:boat' },
  { route: 'serviceRail', label: 'services.rail', icon: 'ph:train' },
  { route: 'serviceIntermodal', label: 'services.intermodal', icon: 'ph:shipping-container' },
  { route: 'serviceWarehousing', label: 'services.warehousing', icon: 'ph:warehouse' },
];

export const logipediaLinks: NavLink[] = [
  { route: 'incoterms', label: 'logipedia.incoterms' },
  { route: 'containers', label: 'logipedia.containers' },
  { route: 'trucks', label: 'logipedia.trucks' },
  { route: 'glossary', label: 'logipedia.glossary' },
];

export const mainNav: NavItem[] = [
  {
    id: 'about',
    label: 'nav.about',
    links: [
      { route: 'aboutUs', label: 'nav.aboutUs' },
      { route: 'visionMission', label: 'nav.visionMission' },
    ],
  },
  {
    id: 'services',
    label: 'nav.services',
    links: serviceLinks,
    overview: { route: 'services', label: 'nav.allServices' },
    wide: true,
  },
  {
    id: 'logipedia',
    label: 'nav.logipedia',
    links: logipediaLinks,
    overview: { route: 'logipedia', label: 'nav.allTopics' },
  },
  { route: 'contact', label: 'nav.contact' },
];

export function isGroup(item: NavItem): item is NavGroup {
  return 'links' in item;
}
