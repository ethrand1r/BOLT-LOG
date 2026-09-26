import tr from './tr.json';
import en from './en.json';

export const languages = { tr: 'Türkçe', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'tr';

const dictionaries = { tr, en } as const;

type Dict = typeof tr;
type Leaves<T, P extends string = ''> = {
  [K in keyof T & string]: T[K] extends string ? `${P}${K}` : Leaves<T[K], `${P}${K}.`>;
}[keyof T & string];
export type UiKey = Leaves<Dict>;

/** Returns t('nav.services') style lookups for one language. Falls back to Turkish. */
export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    const read = (dict: unknown) =>
      key.split('.').reduce<unknown>((node, part) => (node as Record<string, unknown> | undefined)?.[part], dict);
    const value = read(dictionaries[lang]) ?? read(dictionaries[defaultLang]);
    return typeof value === 'string' ? value : key;
  };
}

export function otherLang(lang: Lang): Lang {
  return lang === 'tr' ? 'en' : 'tr';
}
