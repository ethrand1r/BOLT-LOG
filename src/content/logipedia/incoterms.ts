import type { Lang } from '../../i18n/ui';

export type Party = 'seller' | 'buyer';

export interface Incoterm {
  code: string;
  english: string;
  /** 'any' = any mode of transport, 'sea' = sea and inland waterway only (Incoterms 2020). */
  group: 'any' | 'sea';
  mainCarriage: Party;
  exportClearance: Party;
  importClearance: Party;
  /** Insurance the seller must buy: CIF (minimum cover, ICC C) and CIP (ICC A). */
  insurance: 'seller-min' | 'seller-all' | null;
  copy: Record<Lang, { name: string; summary: string; risk: string }>;
}

// Ordered from the least to the most seller responsibility.
export const incoterms: Incoterm[] = [
  {
    code: 'EXW',
    english: 'Ex Works',
    group: 'any',
    mainCarriage: 'buyer',
    exportClearance: 'buyer',
    importClearance: 'buyer',
    insurance: null,
    copy: {
      tr: {
        name: 'İşyerinde Teslim',
        summary: 'Satıcı malı kendi tesisinde alıcının kullanımına hazır eder. Yükleme, ihracat gümrüğü ve tüm taşıma alıcıya aittir.',
        risk: 'Mal, satıcının tesisinde alıcının kullanımına hazır edildiğinde.',
      },
      en: {
        name: 'Ex Works',
        summary: 'The seller makes the goods available at its own premises. Loading, export clearance and all transport are the buyer’s responsibility.',
        risk: 'When the goods are made available at the seller’s premises.',
      },
    },
  },
  {
    code: 'FCA',
    english: 'Free Carrier',
    group: 'any',
    mainCarriage: 'buyer',
    exportClearance: 'seller',
    importClearance: 'buyer',
    insurance: null,
    copy: {
      tr: {
        name: 'Taşıyıcıya Teslim',
        summary: 'Satıcı, ihracat gümrüğü yapılmış malı alıcının belirlediği taşıyıcıya, kararlaştırılan yerde teslim eder.',
        risk: 'Mal, belirlenen yerde alıcının taşıyıcısına teslim edildiğinde.',
      },
      en: {
        name: 'Free Carrier',
        summary: 'The seller delivers the goods, cleared for export, to the carrier nominated by the buyer at the agreed place.',
        risk: 'When the goods are handed to the buyer’s carrier at the named place.',
      },
    },
  },
  {
    code: 'FAS',
    english: 'Free Alongside Ship',
    group: 'sea',
    mainCarriage: 'buyer',
    exportClearance: 'seller',
    importClearance: 'buyer',
    insurance: null,
    copy: {
      tr: {
        name: 'Gemi Doğrultusunda Teslim',
        summary: 'Satıcı malı yükleme limanında, alıcının belirlediği geminin yanına bırakır. Genellikle dökme ve ağır yüklerde kullanılır.',
        risk: 'Mal, yükleme limanında geminin yanına bırakıldığında.',
      },
      en: {
        name: 'Free Alongside Ship',
        summary: 'The seller places the goods alongside the buyer’s vessel at the port of shipment. Mostly used for bulk and heavy cargo.',
        risk: 'When the goods are placed alongside the ship at the port of shipment.',
      },
    },
  },
  {
    code: 'FOB',
    english: 'Free On Board',
    group: 'sea',
    mainCarriage: 'buyer',
    exportClearance: 'seller',
    importClearance: 'buyer',
    insurance: null,
    copy: {
      tr: {
        name: 'Gemide Teslim',
        summary: 'Satıcı malı yükleme limanında alıcının belirlediği gemiye yükler. Navlunu ve deniz sigortasını alıcı karşılar.',
        risk: 'Mal, yükleme limanında gemiye yüklendiğinde.',
      },
      en: {
        name: 'Free On Board',
        summary: 'The seller loads the goods on board the buyer’s vessel at the port of shipment. The buyer pays the freight and marine insurance.',
        risk: 'When the goods are on board the vessel at the port of shipment.',
      },
    },
  },
  {
    code: 'CFR',
    english: 'Cost and Freight',
    group: 'sea',
    mainCarriage: 'seller',
    exportClearance: 'seller',
    importClearance: 'buyer',
    insurance: null,
    copy: {
      tr: {
        name: 'Masraflar ve Navlun',
        summary: 'Satıcı, varış limanına kadar olan navlunu öder. Ancak risk, yükleme limanında mal gemiye yüklendiği anda alıcıya geçer.',
        risk: 'Mal, yükleme limanında gemiye yüklendiğinde.',
      },
      en: {
        name: 'Cost and Freight',
        summary: 'The seller pays the freight to the port of destination, but the risk passes to the buyer once the goods are on board at the port of shipment.',
        risk: 'When the goods are on board the vessel at the port of shipment.',
      },
    },
  },
  {
    code: 'CIF',
    english: 'Cost, Insurance and Freight',
    group: 'sea',
    mainCarriage: 'seller',
    exportClearance: 'seller',
    importClearance: 'buyer',
    insurance: 'seller-min',
    copy: {
      tr: {
        name: 'Masraflar, Sigorta ve Navlun',
        summary: 'CFR ile aynıdır, ek olarak satıcı varış limanına kadar asgari teminatlı (ICC C) bir nakliyat sigortası yaptırır.',
        risk: 'Mal, yükleme limanında gemiye yüklendiğinde.',
      },
      en: {
        name: 'Cost, Insurance and Freight',
        summary: 'As CFR, plus the seller buys cargo insurance with minimum cover (ICC C) up to the port of destination.',
        risk: 'When the goods are on board the vessel at the port of shipment.',
      },
    },
  },
  {
    code: 'CPT',
    english: 'Carriage Paid To',
    group: 'any',
    mainCarriage: 'seller',
    exportClearance: 'seller',
    importClearance: 'buyer',
    insurance: null,
    copy: {
      tr: {
        name: 'Taşıma Ödenmiş Olarak Teslim',
        summary: 'Satıcı, belirlenen varış yerine kadar taşıma ücretini öder. Risk ise mal ilk taşıyıcıya teslim edildiğinde alıcıya geçer.',
        risk: 'Mal, ilk taşıyıcıya teslim edildiğinde.',
      },
      en: {
        name: 'Carriage Paid To',
        summary: 'The seller pays the carriage to the named destination, while the risk passes to the buyer when the goods are handed to the first carrier.',
        risk: 'When the goods are handed to the first carrier.',
      },
    },
  },
  {
    code: 'CIP',
    english: 'Carriage and Insurance Paid To',
    group: 'any',
    mainCarriage: 'seller',
    exportClearance: 'seller',
    importClearance: 'buyer',
    insurance: 'seller-all',
    copy: {
      tr: {
        name: 'Taşıma ve Sigorta Ödenmiş Olarak Teslim',
        summary: 'CPT ile aynıdır, ek olarak satıcı varış yerine kadar geniş teminatlı (ICC A) bir nakliyat sigortası yaptırır.',
        risk: 'Mal, ilk taşıyıcıya teslim edildiğinde.',
      },
      en: {
        name: 'Carriage and Insurance Paid To',
        summary: 'As CPT, plus the seller buys all-risks cargo insurance (ICC A) up to the named destination.',
        risk: 'When the goods are handed to the first carrier.',
      },
    },
  },
  {
    code: 'DAP',
    english: 'Delivered at Place',
    group: 'any',
    mainCarriage: 'seller',
    exportClearance: 'seller',
    importClearance: 'buyer',
    insurance: null,
    copy: {
      tr: {
        name: 'Belirlenen Yerde Teslim',
        summary: 'Satıcı malı, boşaltmaya hazır şekilde belirlenen varış yerine getirir. İthalat gümrüğü ve vergiler alıcıya aittir.',
        risk: 'Mal, varış yerinde araç üzerinde boşaltmaya hazır olduğunda.',
      },
      en: {
        name: 'Delivered at Place',
        summary: 'The seller brings the goods to the named destination, ready for unloading. Import clearance and duties are the buyer’s.',
        risk: 'When the goods are at the destination, ready for unloading from the vehicle.',
      },
    },
  },
  {
    code: 'DPU',
    english: 'Delivered at Place Unloaded',
    group: 'any',
    mainCarriage: 'seller',
    exportClearance: 'seller',
    importClearance: 'buyer',
    insurance: null,
    copy: {
      tr: {
        name: 'Belirlenen Yerde Boşaltılmış Olarak Teslim',
        summary: 'Satıcı malı belirlenen varış yerine getirir ve boşaltır. Boşaltmayı satıcının üstlendiği tek Incoterms kuralıdır.',
        risk: 'Mal, varış yerinde boşaltıldığında.',
      },
      en: {
        name: 'Delivered at Place Unloaded',
        summary: 'The seller brings the goods to the named destination and unloads them. It is the only rule where the seller handles unloading.',
        risk: 'When the goods have been unloaded at the destination.',
      },
    },
  },
  {
    code: 'DDP',
    english: 'Delivered Duty Paid',
    group: 'any',
    mainCarriage: 'seller',
    exportClearance: 'seller',
    importClearance: 'seller',
    insurance: null,
    copy: {
      tr: {
        name: 'Gümrük Vergileri Ödenmiş Olarak Teslim',
        summary: 'Satıcı, ithalat gümrüğü ve vergileri de dahil olmak üzere malı varış yerine kadar tüm masraf ve riskleri üstlenerek getirir.',
        risk: 'Mal, ithalat işlemleri tamamlanmış olarak varış yerinde boşaltmaya hazır olduğunda.',
      },
      en: {
        name: 'Delivered Duty Paid',
        summary: 'The seller bears every cost and risk up to the destination, including import clearance and duties.',
        risk: 'When the goods, cleared for import, are ready for unloading at the destination.',
      },
    },
  },
];
