import type { Lang } from '../../i18n/ui';

export interface GlossaryTerm {
  id: string;
  copy: Record<Lang, { term: string; definition: string }>;
}

export const glossary: GlossaryTerm[] = [
  {
    id: 'agent',
    copy: {
      tr: { term: 'Acente', definition: 'Bir lojistik firması adına başka bir ülke ya da bölgede yükleme, teslim ve evrak işlemlerini yürüten iş ortağı.' },
      en: { term: 'Agent', definition: 'A partner that handles loading, delivery and paperwork in another country or region on behalf of a logistics company.' },
    },
  },
  {
    id: 'adr',
    copy: {
      tr: { term: 'ADR', definition: 'Tehlikeli maddelerin karayoluyla uluslararası taşınmasına ilişkin Avrupa anlaşması. Ambalaj, etiketleme ve araç kurallarını belirler.' },
      en: { term: 'ADR', definition: 'The European agreement on the international carriage of dangerous goods by road. It sets rules for packaging, labelling and vehicles.' },
    },
  },
  {
    id: 'bonded',
    copy: {
      tr: { term: 'Antrepo', definition: 'Gümrük vergileri henüz ödenmemiş eşyanın gümrük gözetimi altında depolandığı alan.' },
      en: { term: 'Bonded warehouse', definition: 'A facility where goods on which duties have not yet been paid are stored under customs supervision.' },
    },
  },
  {
    id: 'atr',
    copy: {
      tr: { term: 'A.TR dolaşım belgesi', definition: 'Türkiye ile Avrupa Birliği arasındaki gümrük birliği kapsamında sanayi ürünlerinin serbest dolaşımda olduğunu gösteren belge.' },
      en: { term: 'A.TR movement certificate', definition: 'A document showing that industrial goods are in free circulation under the customs union between Türkiye and the European Union.' },
    },
  },
  {
    id: 'awb',
    copy: {
      tr: { term: 'AWB (havayolu konşimentosu)', definition: 'Havayolu taşımacılığında taşıma sözleşmesini ve yükün taşıyıcı tarafından teslim alındığını gösteren belge.' },
      en: { term: 'Air waybill (AWB)', definition: 'The air freight document that evidences the contract of carriage and the carrier’s receipt of the goods.' },
    },
  },
  {
    id: 'bl',
    copy: {
      tr: { term: 'Konşimento (B/L)', definition: 'Denizyolu taşımasında yükün gemiye yüklendiğini gösteren, taşıma sözleşmesine kanıt olan ve mülkiyeti temsil eden kıymetli evrak.' },
      en: { term: 'Bill of lading (B/L)', definition: 'The sea freight document that confirms loading on board, evidences the contract of carriage and serves as a document of title.' },
    },
  },
  {
    id: 'packing-list',
    copy: {
      tr: { term: 'Çeki listesi', definition: 'Gönderideki her kolinin içeriğini, ölçülerini ve ağırlığını gösteren liste. Gümrük ve teslim kontrollerinde kullanılır.' },
      en: { term: 'Packing list', definition: 'A list of the contents, dimensions and weight of each package in a shipment, used for customs and delivery checks.' },
    },
  },
  {
    id: 'cmr',
    copy: {
      tr: { term: 'CMR belgesi', definition: 'Uluslararası karayolu taşımacılığında kullanılan, taşıma sözleşmesini ve yükün teslim alındığını gösteren taşıma senedi.' },
      en: { term: 'CMR consignment note', definition: 'The international road freight document that evidences the contract of carriage and receipt of the goods.' },
    },
  },
  {
    id: 'cross-dock',
    copy: {
      tr: { term: 'Cross-dock', definition: 'Yükün depoda bekletilmeden gelen araçtan giden araca doğrudan aktarıldığı dağıtım yöntemi.' },
      en: { term: 'Cross-docking', definition: 'A distribution method where cargo moves straight from an inbound to an outbound vehicle without being stored.' },
    },
  },
  {
    id: 'demurrage',
    copy: {
      tr: { term: 'Demuraj', definition: 'Konteynerin limanda ücretsiz bekleme süresi dolduktan sonra kalması karşılığında hat tarafından alınan ücret.' },
      en: { term: 'Demurrage', definition: 'The charge a carrier applies when a container stays at the port beyond its free time.' },
    },
  },
  {
    id: 'detention',
    copy: {
      tr: { term: 'Detention', definition: 'Konteynerin limandan çıktıktan sonra ücretsiz süreyi aşarak alıcıda ya da göndericide kalması karşılığında alınan ücret.' },
      en: { term: 'Detention', definition: 'The charge applied when a container is kept outside the port by the shipper or consignee beyond its free time.' },
    },
  },
  {
    id: 'eta',
    copy: {
      tr: { term: 'ETA', definition: 'Tahmini varış zamanı (Estimated Time of Arrival).' },
      en: { term: 'ETA', definition: 'Estimated time of arrival.' },
    },
  },
  {
    id: 'etd',
    copy: {
      tr: { term: 'ETD', definition: 'Tahmini kalkış zamanı (Estimated Time of Departure).' },
      en: { term: 'ETD', definition: 'Estimated time of departure.' },
    },
  },
  {
    id: 'eur1',
    copy: {
      tr: { term: 'EUR.1 dolaşım belgesi', definition: 'Tercihli ticaret anlaşmaları kapsamında malın menşeini kanıtlayan ve gümrük vergisi avantajı sağlayan belge.' },
      en: { term: 'EUR.1 movement certificate', definition: 'A document proving the origin of goods under preferential trade agreements, giving access to reduced duties.' },
    },
  },
  {
    id: 'fcl',
    copy: {
      tr: { term: 'FCL', definition: 'Full Container Load. Konteynerin tek bir göndericinin yüküyle kullanıldığı taşıma şekli.' },
      en: { term: 'FCL', definition: 'Full container load: a container used for a single shipper’s cargo.' },
    },
  },
  {
    id: 'forwarder',
    copy: {
      tr: { term: 'Forwarder', definition: 'Taşımayı kendi araçlarıyla yapmadan, taşıyıcılar ve diğer hizmet sağlayıcılar aracılığıyla uçtan uca organize eden firma.' },
      en: { term: 'Freight forwarder', definition: 'A company that organises transport end to end through carriers and other providers rather than with its own vehicles.' },
    },
  },
  {
    id: 'free-time',
    copy: {
      tr: { term: 'Serbest süre', definition: 'Konteynerin demuraj ya da detention ücreti uygulanmadan kullanılabildiği süre.' },
      en: { term: 'Free time', definition: 'The period during which a container can be used without demurrage or detention charges.' },
    },
  },
  {
    id: 'ftl',
    copy: {
      tr: { term: 'Komple yük (FTL)', definition: 'Aracın tamamının tek bir göndericinin yükü için kullanıldığı karayolu taşıması.' },
      en: { term: 'Full truck load (FTL)', definition: 'A road shipment where the whole vehicle is used for one shipper’s cargo.' },
    },
  },
  {
    id: 'customs-declaration',
    copy: {
      tr: { term: 'Gümrük beyannamesi', definition: 'İthal ya da ihraç edilen eşyanın cinsini, miktarını ve değerini gümrük idaresine bildiren resmi belge.' },
      en: { term: 'Customs declaration', definition: 'The official document declaring the type, quantity and value of imported or exported goods to customs.' },
    },
  },
  {
    id: 'volumetric',
    copy: {
      tr: { term: 'Hacimsel ağırlık', definition: 'Yükün kapladığı hacme göre hesaplanan ağırlık. Navlun, gerçek ağırlık ile hacimsel ağırlıktan büyük olanı üzerinden hesaplanır.' },
      en: { term: 'Volumetric weight', definition: 'A weight calculated from the space cargo takes up. Freight is charged on whichever is greater, the actual or the volumetric weight.' },
    },
  },
  {
    id: 'imdg',
    copy: {
      tr: { term: 'IMDG Kodu', definition: 'Tehlikeli maddelerin denizyolu ile taşınmasına ilişkin uluslararası kurallar.' },
      en: { term: 'IMDG Code', definition: 'The international rules for carrying dangerous goods by sea.' },
    },
  },
  {
    id: 'incoterms',
    copy: {
      tr: { term: 'Incoterms', definition: 'Uluslararası Ticaret Odası (ICC) tarafından yayımlanan, alıcı ile satıcı arasında maliyet ve riskin nerede el değiştirdiğini belirleyen teslim şekilleri.' },
      en: { term: 'Incoterms', definition: 'Delivery terms published by the International Chamber of Commerce (ICC) that define where cost and risk pass from seller to buyer.' },
    },
  },
  {
    id: 'consolidation',
    copy: {
      tr: { term: 'Konsolidasyon', definition: 'Farklı göndericilere ait küçük yüklerin tek bir konteyner ya da araçta birleştirilmesi.' },
      en: { term: 'Consolidation', definition: 'Combining small shipments from different shippers into one container or vehicle.' },
    },
  },
  {
    id: 'lcl',
    copy: {
      tr: { term: 'LCL', definition: 'Less than Container Load. Konteyneri doldurmayan yüklerin başka gönderilerle aynı konteynerde taşındığı yöntem.' },
      en: { term: 'LCL', definition: 'Less than container load: cargo that shares a container with other shipments.' },
    },
  },
  {
    id: 'ldm',
    copy: {
      tr: { term: 'LDM (yükleme metresi)', definition: 'Yükün tır dorsesinde kapladığı uzunluk. Standart bir dorse 13,6 LDM, bir euro palet yaklaşık 0,4 LDM’dir.' },
      en: { term: 'Loading metre (LDM)', definition: 'The length of trailer floor a load takes up. A standard trailer is 13.6 LDM; one Euro pallet is about 0.4 LDM.' },
    },
  },
  {
    id: 'origin',
    copy: {
      tr: { term: 'Menşe şahadetnamesi', definition: 'Malın hangi ülkede üretildiğini gösteren ve genellikle ticaret odaları tarafından onaylanan belge.' },
      en: { term: 'Certificate of origin', definition: 'A document stating the country where goods were produced, usually certified by a chamber of commerce.' },
    },
  },
  {
    id: 'insurance',
    copy: {
      tr: { term: 'Nakliyat sigortası', definition: 'Taşıma sırasında yükün uğrayabileceği hasar ve kayıplara karşı yapılan sigorta.' },
      en: { term: 'Cargo insurance', definition: 'Insurance covering loss of or damage to goods in transit.' },
    },
  },
  {
    id: 'freight',
    copy: {
      tr: { term: 'Navlun', definition: 'Yükün bir noktadan diğerine taşınması karşılığında ödenen taşıma ücreti.' },
      en: { term: 'Freight rate', definition: 'The price paid to carry cargo from one point to another.' },
    },
  },
  {
    id: 'delivery-order',
    copy: {
      tr: { term: 'Ordino', definition: 'Yükün alıcıya teslim edilebilmesi için taşıyıcı ya da acentesinin düzenlediği teslim belgesi.' },
      en: { term: 'Delivery order', definition: 'A document issued by the carrier or its agent authorising release of the cargo to the consignee.' },
    },
  },
  {
    id: 'pallet',
    copy: {
      tr: { term: 'Palet', definition: 'Yükün üzerine istiflendiği taşıma platformu. Euro palet 120 x 80 cm, endüstriyel palet 120 x 100 cm ölçüsündedir.' },
      en: { term: 'Pallet', definition: 'A platform goods are stacked on for handling. A Euro pallet measures 120 x 80 cm and an industrial pallet 120 x 100 cm.' },
    },
  },
  {
    id: 'ltl',
    copy: {
      tr: { term: 'Parsiyel yük (LTL)', definition: 'Aracın tamamını doldurmayan ve başka göndericilerin yükleriyle birlikte taşınan yük.' },
      en: { term: 'Part load (LTL)', definition: 'A load that does not fill the vehicle and travels together with other shippers’ cargo.' },
    },
  },
  {
    id: 'proforma',
    copy: {
      tr: { term: 'Proforma fatura', definition: 'Satış gerçekleşmeden önce alıcıya fiyat ve koşulları bildirmek için düzenlenen ön fatura.' },
      en: { term: 'Proforma invoice', definition: 'A preliminary invoice sent before a sale to set out prices and terms.' },
    },
  },
  {
    id: 'reefer',
    copy: {
      tr: { term: 'Reefer (frigorifik)', definition: 'Belirli bir sıcaklığı koruyan, soğutma ünitesine sahip konteyner ya da araç.' },
      en: { term: 'Reefer', definition: 'A container or vehicle with a cooling unit that keeps cargo at a set temperature.' },
    },
  },
  {
    id: 'last-mile',
    copy: {
      tr: { term: 'Son kilometre', definition: 'Yükün son dağıtım noktasından alıcının kapısına ulaştırıldığı son teslimat aşaması.' },
      en: { term: 'Last mile', definition: 'The final delivery stage, from the last hub to the recipient’s door.' },
    },
  },
  {
    id: 't1',
    copy: {
      tr: { term: 'T1 transit belgesi', definition: 'Gümrük vergileri ödenmemiş eşyanın bir gümrük idaresinden diğerine gümrük gözetiminde taşınmasını sağlayan belge.' },
      en: { term: 'T1 transit document', definition: 'A document that lets goods move under customs supervision, with duties unpaid, from one customs office to another.' },
    },
  },
  {
    id: 'loading',
    copy: {
      tr: { term: 'Tahmil ve tahliye', definition: 'Yükün araca ya da gemiye yüklenmesi (tahmil) ve buradan boşaltılması (tahliye).' },
      en: { term: 'Loading and discharge', definition: 'Putting cargo onto a vehicle or ship (loading) and taking it off (discharge).' },
    },
  },
  {
    id: 'teu',
    copy: {
      tr: { term: 'TEU', definition: "Twenty-foot Equivalent Unit. 20 feet'lik konteyner eşdeğeri. Bir 40'lık konteyner 2 TEU sayılır." },
      en: { term: 'TEU', definition: 'Twenty-foot equivalent unit. One 40ft container counts as 2 TEU.' },
    },
  },
  {
    id: 'invoice',
    copy: {
      tr: { term: 'Ticari fatura', definition: 'Satışı belgeleyen, malın değerini ve koşullarını gösteren fatura. Gümrük işlemlerinin temel belgesidir.' },
      en: { term: 'Commercial invoice', definition: 'The invoice documenting the sale, the value of the goods and the terms. A key customs document.' },
    },
  },
  {
    id: 'transit-time',
    copy: {
      tr: { term: 'Transit süre', definition: 'Yükün çıkış noktasından varış noktasına ulaşması için geçen süre.' },
      en: { term: 'Transit time', definition: 'The time cargo takes to travel from origin to destination.' },
    },
  },
];
