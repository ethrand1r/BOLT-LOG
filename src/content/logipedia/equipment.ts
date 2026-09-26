import type { Lang } from '../../i18n/ui';

/**
 * Typical inside dimensions and capacities. Values are approximate and vary by
 * carrier, manufacturer and national rules; the pages say so explicitly.
 * Lengths in metres, volume in m³, weights in kg.
 */
export interface Equipment {
  id: string;
  length: number;
  width: number;
  height: number;
  volume: number;
  payload: number;
  euroPallets?: string;
  industrialPallets?: string;
  door?: { width: number; height: number };
  copy: Record<Lang, { name: string; text: string }>;
}

export const containers: Equipment[] = [
  {
    id: '20dc',
    length: 5.9,
    width: 2.35,
    height: 2.39,
    volume: 33.2,
    payload: 28000,
    euroPallets: '11',
    industrialPallets: '9-10',
    door: { width: 2.34, height: 2.28 },
    copy: {
      tr: { name: "20' Standart (DC)", text: 'En yaygın konteyner tipi. Ağır ve yoğun yükler için uygundur.' },
      en: { name: "20' Standard (DC)", text: 'The most common container type. Well suited to heavy, dense cargo.' },
    },
  },
  {
    id: '40dc',
    length: 12.03,
    width: 2.35,
    height: 2.39,
    volume: 67.7,
    payload: 26700,
    euroPallets: '23-24',
    industrialPallets: '20-21',
    door: { width: 2.34, height: 2.28 },
    copy: {
      tr: { name: "40' Standart (DC)", text: "20'liğin iki katı hacim. Hacimli ama çok ağır olmayan yükler için idealdir." },
      en: { name: "40' Standard (DC)", text: 'Twice the volume of a 20ft. Ideal for bulky cargo that is not too heavy.' },
    },
  },
  {
    id: '40hc',
    length: 12.03,
    width: 2.35,
    height: 2.69,
    volume: 76.3,
    payload: 26500,
    euroPallets: '23-24',
    industrialPallets: '20-21',
    door: { width: 2.34, height: 2.58 },
    copy: {
      tr: { name: "40' High Cube (HC)", text: "Standart 40'lıktan yaklaşık 30 cm daha yüksek. Hafif ve hacimli yüklerde avantaj sağlar." },
      en: { name: "40' High Cube (HC)", text: 'About 30 cm taller than a standard 40ft. An advantage for light, bulky cargo.' },
    },
  },
  {
    id: '20rf',
    length: 5.44,
    width: 2.29,
    height: 2.27,
    volume: 28.3,
    payload: 27400,
    copy: {
      tr: { name: "20' Reefer", text: 'Sıcaklık kontrollü konteyner. Gıda, ilaç gibi soğuk zincir gerektiren yükler içindir.' },
      en: { name: "20' Reefer", text: 'Temperature-controlled container for cold-chain cargo such as food and pharmaceuticals.' },
    },
  },
  {
    id: '40rf',
    length: 11.58,
    width: 2.29,
    height: 2.55,
    volume: 67.7,
    payload: 29000,
    copy: {
      tr: { name: "40' High Cube Reefer", text: 'Büyük hacimli soğuk zincir sevkiyatları için yüksek tavanlı reefer konteyner.' },
      en: { name: "40' High Cube Reefer", text: 'A tall reefer container for large cold-chain shipments.' },
    },
  },
  {
    id: '20ot',
    length: 5.89,
    width: 2.35,
    height: 2.35,
    volume: 32.5,
    payload: 28100,
    copy: {
      tr: { name: "20' Open Top", text: 'Üstü açılabilen, brandalı konteyner. Yukarıdan vinçle yüklenen yüksek yükler içindir.' },
      en: { name: "20' Open Top", text: 'A container with a removable tarpaulin roof, for tall cargo loaded from above by crane.' },
    },
  },
  {
    id: '40ot',
    length: 12.03,
    width: 2.35,
    height: 2.35,
    volume: 66.4,
    payload: 26500,
    copy: {
      tr: { name: "40' Open Top", text: 'Uzun ve yüksek yükler için üstten yüklemeli 40 feet konteyner.' },
      en: { name: "40' Open Top", text: 'A 40ft top-loading container for long, tall cargo.' },
    },
  },
  {
    id: '20fr',
    length: 5.62,
    width: 2.2,
    height: 2.23,
    volume: 0,
    payload: 30000,
    copy: {
      tr: { name: "20' Flat Rack", text: 'Yan duvarları olmayan platform konteyner. Makine gibi standart ölçülere sığmayan yükler içindir.' },
      en: { name: "20' Flat Rack", text: 'A platform container without side walls, for machinery and other out-of-gauge cargo.' },
    },
  },
  {
    id: '40fr',
    length: 12.08,
    width: 2.12,
    height: 1.96,
    volume: 0,
    payload: 39000,
    copy: {
      tr: { name: "40' Flat Rack", text: 'Uzun ve ağır proje yükleri için yan duvarsız 40 feet platform.' },
      en: { name: "40' Flat Rack", text: 'A 40ft platform without side walls for long, heavy project cargo.' },
    },
  },
];

export const trucks: Equipment[] = [
  {
    id: 'standard',
    length: 13.6,
    width: 2.45,
    height: 2.7,
    volume: 90,
    payload: 24000,
    euroPallets: '33',
    industrialPallets: '26',
    copy: {
      tr: { name: 'Standart tenteli tır', text: 'Avrupa ve Türkiye karayolu taşımacılığının temel aracı. Yandan, arkadan ve üstten yüklenebilir.' },
      en: { name: 'Standard curtainsider', text: 'The workhorse of European and Turkish road freight. Loads from the side, rear or top.' },
    },
  },
  {
    id: 'mega',
    length: 13.6,
    width: 2.45,
    height: 3.0,
    volume: 100,
    payload: 24000,
    euroPallets: '33',
    industrialPallets: '26',
    copy: {
      tr: { name: 'Mega tır', text: 'İç yüksekliği yaklaşık 3 metreye ulaşan dorse. Hacimli ve hafif yükler için uygundur.' },
      en: { name: 'Mega trailer', text: 'A trailer with an inside height of about 3 metres, suited to bulky, light cargo.' },
    },
  },
  {
    id: 'reefer',
    length: 13.4,
    width: 2.46,
    height: 2.6,
    volume: 86,
    payload: 22000,
    euroPallets: '33',
    industrialPallets: '26',
    copy: {
      tr: { name: 'Frigorifik tır', text: 'Soğutma ünitesi olan, sıcaklık kontrollü dorse. Gıda ve ilaç taşımacılığında kullanılır.' },
      en: { name: 'Refrigerated trailer', text: 'A temperature-controlled trailer with a cooling unit, used for food and pharmaceuticals.' },
    },
  },
  {
    id: 'jumbo',
    length: 15.4,
    width: 2.45,
    height: 3.0,
    volume: 115,
    payload: 22000,
    euroPallets: '38',
    industrialPallets: '30',
    copy: {
      tr: { name: 'Jumbo (kamyon ve römork)', text: 'İki adet yaklaşık 7,7 metrelik kasadan oluşan kombinasyon. En yüksek hacmi sunar.' },
      en: { name: 'Jumbo (truck and trailer)', text: 'A combination of two bodies of about 7.7 m each, offering the largest volume.' },
    },
  },
  {
    id: 'rigid',
    length: 7.2,
    width: 2.45,
    height: 2.6,
    volume: 45,
    payload: 10000,
    euroPallets: '18',
    industrialPallets: '14',
    copy: {
      tr: { name: 'Kamyon', text: 'Şehir içi ve bölgesel dağıtımda, daha küçük hacimli yükler için tek gövdeli araç.' },
      en: { name: 'Rigid truck', text: 'A single-body vehicle for smaller loads in urban and regional distribution.' },
    },
  },
];
