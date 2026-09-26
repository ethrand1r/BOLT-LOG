import type { ImageMetadata } from 'astro';
import type { Lang } from '../i18n/ui';
import type { RouteKey } from '../i18n/routes';
import air from '../assets/images/service-air.jpg';
import road from '../assets/images/service-road.jpg';
import sea from '../assets/images/service-sea.jpg';
import rail from '../assets/images/service-rail.jpg';
import intermodal from '../assets/images/service-intermodal.jpg';
import warehousing from '../assets/images/service-warehousing.jpg';

export type ServiceKey = 'air' | 'road' | 'sea' | 'rail' | 'intermodal' | 'warehousing';

interface ServiceCopy {
  metaTitle: string;
  metaDescription: string;
  lead: string;
  imageAlt: string;
  body: [string, string, string];
  benefits: string[];
  /** Cargo types / scope. [TBD] in CLAUDE.md: leave empty to hide the section. */
  scope: string[];
  faqs: { q: string; a: string }[];
  ctaTitle: string;
}

export interface Service {
  key: ServiceKey;
  route: RouteKey;
  icon: string;
  image: ImageMetadata;
  /** Logipedia page to cross-link from the body, if any. */
  related?: RouteKey;
  copy: Record<Lang, ServiceCopy>;
}

export const services: Service[] = [
  {
    key: 'air',
    route: 'serviceAir',
    icon: 'ph:airplane-tilt',
    image: air,
    copy: {
      tr: {
        metaTitle: 'Havayolu Taşımacılığı | Bolt Logistics',
        metaDescription:
          "Zamana duyarlı yükleriniz için havayolu kargo çözümleri. Bolt Logistics, İstanbul'dan dünyaya havayolu taşımacılığını planlar ve takip eder. Hemen teklif alın.",
        lead: 'Zamanın maliyetten önemli olduğu yükler için hızlı ve güvenli havayolu taşımacılığı.',
        imageAlt: 'Gün batımında altın rengi bulutların önünde bir uçak silüeti',
        body: [
          'Havayolu taşımacılığı, uzun mesafeleri en kısa sürede aşmanın yoludur. Acil yedek parçalar, numuneler, yüksek değerli ürünler ve raf ömrü kısa mallar için çoğu zaman en doğru seçenek odur.',
          'Yükünüzün ağırlığını, hacmini ve teslim tarihini birlikte değerlendiriyor, uygun havalimanı ve hat bağlantısıyla rezervasyonu planlıyoruz. Dünya genelindeki acente ağımız, varış havalimanındaki işlemleri ve son teslimatı yerinde takip ediyor.',
          'Havayolunda ücret, yükün gerçek ağırlığı ile hacimsel ağırlığından hangisi büyükse ona göre hesaplanır. Bu yüzden ambalaj ve paletleme önerilerimizle maliyetinizi kontrol altında tutmanıza yardımcı oluyoruz.',
        ],
        benefits: [
          'Uzun mesafede en kısa transit süre',
          'Değerli ve hassas yükler için daha az elleçleme',
          'Havalimanından havalimanına ya da kapıya kadar planlama',
          'Hacimsel ağırlığa göre ambalaj önerisi',
          'Süreç boyunca düzenli durum bilgisi',
        ],
        scope: [],
        faqs: [
          {
            q: 'Havayolu navlunu nasıl hesaplanır?',
            a: "Ücret, yükün gerçek brüt ağırlığı ile hacimsel ağırlığından büyük olanı üzerinden hesaplanır. Hacimsel ağırlık genellikle santimetre cinsinden en x boy x yükseklik çarpımının 6000'e bölünmesiyle bulunur.",
          },
          {
            q: 'Hangi yükler havayoluna uygundur?',
            a: 'Zamana duyarlı, yüksek değerli ya da hacmine göre hafif yükler için havayolu idealdir. Tehlikeli madde içeren yükler özel kurallara tabidir. Yükünüzün cinsini baştan paylaşmanız planlamayı kolaylaştırır.',
          },
          {
            q: 'Teklif için hangi bilgilere ihtiyacınız var?',
            a: 'Çıkış ve varış noktası, koli sayısı, her kolinin ölçüleri ve ağırlığı, yükün cinsi ve hazır olma tarihi yeterlidir.',
          },
        ],
        ctaTitle: 'Havayolu yükünüz için teklif alın.',
      },
      en: {
        metaTitle: 'Air Freight | Bolt Logistics',
        metaDescription:
          'Air freight solutions for time-critical cargo. Bolt Logistics plans and tracks air shipments from Istanbul to destinations worldwide. Request a quote.',
        lead: 'Fast, secure air freight for shipments where time matters more than cost.',
        imageAlt: 'An aircraft silhouetted against golden clouds at sunset',
        body: [
          'Air freight is the quickest way to cover long distances. For urgent spare parts, samples, high-value goods and products with a short shelf life, it is often the right call.',
          'We look at your cargo’s weight, volume and deadline together, then plan the booking with the right airport and airline connection. Our worldwide agent network handles the destination airport and the final delivery on the ground.',
          'Air freight is charged on whichever is greater: the actual weight or the volumetric weight. Our packing and palletising advice helps keep that cost under control.',
        ],
        benefits: [
          'The shortest transit time over long distances',
          'Less handling for valuable and fragile goods',
          'Airport-to-airport or door-to-door planning',
          'Packing advice based on volumetric weight',
          'Regular status updates along the way',
        ],
        scope: [],
        faqs: [
          {
            q: 'How is air freight charged?',
            a: 'Rates are based on whichever is greater, the actual gross weight or the volumetric weight. Volumetric weight is usually length x width x height in centimetres divided by 6,000.',
          },
          {
            q: 'What kind of cargo suits air freight?',
            a: 'Time-sensitive, high-value or light-for-its-size cargo. Dangerous goods follow special rules, so sharing the nature of your cargo upfront makes planning easier.',
          },
          {
            q: 'What do you need for a quote?',
            a: 'Origin and destination, the number of packages, the dimensions and weight of each, the type of goods and the ready date.',
          },
        ],
        ctaTitle: 'Get a quote for your air shipment.',
      },
    },
  },
  {
    key: 'road',
    route: 'serviceRoad',
    icon: 'ph:truck',
    image: road,
    related: 'trucks',
    copy: {
      tr: {
        metaTitle: 'Karayolu Taşımacılığı | Bolt Logistics',
        metaDescription:
          'Kapıdan kapıya, esnek planlanan karayolu taşımacılığı. Bolt Logistics yükünüz için doğru aracı ve rotayı belirler. Karayolu nakliyesi için teklif alın.',
        lead: 'Esnek planlama ve kapıdan kapıya erişimle karayolu taşımacılığı.',
        imageAlt: 'Sonbahar ormanının ortasından geçen yolda ilerleyen bir tırın havadan görünümü',
        body: [
          'Karayolu, yükünüzü fabrikanızdan alıcınızın deposuna aktarma yapmadan ulaştırabilen tek taşıma türüdür. Kısa ve orta mesafede hem hızlı hem ekonomik bir seçenektir.',
          'Yükünüzün hacmine ve takviminize göre uygun araç tipini belirliyor, yükleme gününü ve rotayı sizinle birlikte planlıyoruz. Yol boyunca durumdan haberdar oluyor, teslim anında bilgilendiriliyorsunuz.',
          "Standart tenteli tırdan frigorifik araçlara kadar farklı araç tiplerinin ölçü ve kapasite bilgilerini Logipedia'da bulabilirsiniz.",
        ],
        benefits: [
          'Aktarmasız, kapıdan kapıya taşıma',
          'Yükünüze göre araç tipi seçimi',
          'Takviminize uyan esnek yükleme planı',
          'Kısa ve orta mesafede dengeli maliyet',
          'Yolculuk boyunca durum bilgisi',
        ],
        scope: [],
        faqs: [
          {
            q: 'Bir tır kaç palet alır?',
            a: '13,60 metrelik standart bir tır dorsesine 33 adet euro palet (120 x 80 cm) ya da 26 adet endüstriyel palet (120 x 100 cm) yüklenebilir. Kesin kapasite yükün ağırlığına ve istiflenebilirliğine göre değişir.',
          },
          {
            q: 'Karayolu mu, denizyolu mu daha uygun?',
            a: 'Mesafe, yükün hacmi ve teslim tarihi belirleyicidir. Karayolu genellikle daha hızlıdır, denizyolu ise büyük hacimlerde daha ekonomik olabilir. Talebinize göre iki seçeneği karşılaştırıp sunuyoruz.',
          },
          {
            q: 'Yükleme için ne kadar önceden haber vermeliyim?',
            a: 'Ne kadar erken, o kadar iyi. Yükün hazır olma tarihini paylaştığınız anda araç planlamasına başlıyoruz.',
          },
        ],
        ctaTitle: 'Karayolu yükünüz için teklif alın.',
      },
      en: {
        metaTitle: 'Road Freight | Bolt Logistics',
        metaDescription:
          'Door-to-door road freight with flexible planning. Bolt Logistics chooses the right vehicle and route for your cargo. Request a road freight quote.',
        lead: 'Road freight with flexible planning and door-to-door reach.',
        imageAlt: 'Aerial view of a truck on a road through an autumn forest',
        body: [
          'Road is the only mode that can take your cargo from your factory to your buyer’s warehouse without transshipment. Over short and medium distances it is both quick and cost-effective.',
          'We pick the right vehicle for your volume and schedule and plan the loading day and route with you. You stay updated on the road and hear from us the moment the cargo is delivered.',
          'You will find the dimensions and capacity of each vehicle type, from standard curtainsiders to refrigerated trailers, in Logipedia.',
        ],
        benefits: [
          'Door-to-door, without transshipment',
          'The right vehicle type for your cargo',
          'Loading plans that fit your schedule',
          'A balanced cost over short and medium distances',
          'Status updates throughout the journey',
        ],
        scope: [],
        faqs: [
          {
            q: 'How many pallets fit on a truck?',
            a: 'A standard 13.6 m trailer takes 33 Euro pallets (120 x 80 cm) or 26 industrial pallets (120 x 100 cm). The exact capacity depends on the weight and stackability of the cargo.',
          },
          {
            q: 'Road or sea: which is better?',
            a: 'Distance, volume and deadline decide. Road is usually faster, while sea can be cheaper for large volumes. We compare both options for your request.',
          },
          {
            q: 'How much notice do you need before loading?',
            a: 'The earlier, the better. We start planning the vehicle as soon as you share the ready date.',
          },
        ],
        ctaTitle: 'Get a quote for your road shipment.',
      },
    },
  },
  {
    key: 'sea',
    route: 'serviceSea',
    icon: 'ph:boat',
    image: sea,
    related: 'containers',
    copy: {
      tr: {
        metaTitle: 'Denizyolu Taşımacılığı | Bolt Logistics',
        metaDescription:
          'Konteyner yükleriniz için ekonomik denizyolu taşımacılığı. Bolt Logistics hat, liman ve konteyner tipini yükünüze göre planlar. Deniz nakliyesi için teklif alın.',
        lead: 'Büyük hacimli yükler için ekonomik ve güvenilir denizyolu taşımacılığı.',
        imageAlt: 'Koyu bir koyda ilerleyen konteyner gemisinin havadan görünümü',
        body: [
          'Denizyolu, dünya ticaretinin büyük bölümünü taşıyan omurgadır. Büyük hacimli ve ağır yüklerde birim maliyeti en düşük seçenek olmaya devam eder.',
          'Yükünüzün hacmine göre uygun konteyner tipini belirliyor, yükleme ve varış limanlarını, hat seçeneklerini ve transit süreleri karşılaştırıyoruz. Varış limanındaki süreçleri acente ağımızla birlikte yönetiyoruz.',
          "Konteyner tiplerinin iç ölçüleri, hacimleri ve taşıma kapasiteleri için Logipedia'daki rehberimize göz atabilirsiniz.",
        ],
        benefits: [
          'Büyük hacimde düşük birim maliyet',
          'Yükünüze uygun konteyner tipi seçimi',
          'Hat ve transit süre karşılaştırması',
          'Varış limanında acente desteği',
          'Ağır ve hacimli yükler için uygun çözüm',
        ],
        scope: [],
        faqs: [
          {
            q: "20'lik ve 40'lık konteyner arasındaki fark nedir?",
            a: "20 feet'lik standart konteynerin iç hacmi yaklaşık 33 m³, 40 feet'lik standart konteynerin ise yaklaşık 67 m³'tür. High cube konteynerler yaklaşık 30 cm daha yüksektir. Ağır yüklerde 20'lik, hacimli ve hafif yüklerde 40'lık konteyner genellikle daha avantajlıdır.",
          },
          {
            q: 'Konteyner dolduracak kadar yüküm yoksa ne olur?',
            a: 'Konteyneri tek başına doldurmayan yükler, başka gönderilerle aynı konteynerde birleştirilerek taşınabilir. Bu yöntemin yükünüz için uygun olup olmadığını teklif aşamasında birlikte değerlendiriyoruz.',
          },
          {
            q: 'Demuraj nedir?',
            a: 'Demuraj, konteynerin limanda ücretsiz bekleme süresi dolduktan sonra kalması karşılığında hat tarafından alınan ücrettir. Belgelerin zamanında hazırlanması bu masrafın önüne geçer.',
          },
        ],
        ctaTitle: 'Denizyolu yükünüz için teklif alın.',
      },
      en: {
        metaTitle: 'Sea Freight | Bolt Logistics',
        metaDescription:
          'Cost-efficient ocean freight for containerised cargo. Bolt Logistics plans carriers, ports and container types around your shipment. Request a sea freight quote.',
        lead: 'Cost-efficient, reliable ocean freight for large volumes.',
        imageAlt: 'Aerial view of a container ship sailing through a dark bay',
        body: [
          'Ocean freight carries most of the world’s trade. For large and heavy shipments it is still the option with the lowest unit cost.',
          'We choose the right container for your volume and compare ports of loading and discharge, carriers and transit times. At the destination port we manage the process together with our agent network.',
          'For inside dimensions, volumes and payloads of each container type, see our guide in Logipedia.',
        ],
        benefits: [
          'Low unit cost for large volumes',
          'The right container type for your cargo',
          'Carrier and transit time comparison',
          'Agent support at the destination port',
          'A good fit for heavy and bulky cargo',
        ],
        scope: [],
        faqs: [
          {
            q: 'What is the difference between a 20ft and a 40ft container?',
            a: 'A standard 20ft container holds about 33 m³ and a standard 40ft about 67 m³. High cube containers are roughly 30 cm taller. Heavy cargo usually suits a 20ft, while bulky, light cargo suits a 40ft.',
          },
          {
            q: 'What if my cargo does not fill a container?',
            a: 'Cargo that does not fill a container can be consolidated with other shipments in the same box. We will look at whether that works for your cargo when we prepare the quote.',
          },
          {
            q: 'What is demurrage?',
            a: 'Demurrage is the charge a carrier applies when a container stays at the port beyond its free time. Getting documents ready on time avoids it.',
          },
        ],
        ctaTitle: 'Get a quote for your sea shipment.',
      },
    },
  },
  {
    key: 'rail',
    route: 'serviceRail',
    icon: 'ph:train',
    image: rail,
    copy: {
      tr: {
        metaTitle: 'Demiryolu Taşımacılığı | Bolt Logistics',
        metaDescription:
          'Uzun mesafede büyük hacimli yükler için demiryolu taşımacılığı. Bolt Logistics terminal bağlantılarını ve karayolu ayaklarını tek planda yönetir. Teklif alın.',
        lead: 'Uzun mesafede büyük hacimli yükler için dengeli maliyetli ve çevreci demiryolu taşımacılığı.',
        imageAlt: 'Mavi gökyüzü altında konteyner yüklü bir yük treni',
        body: [
          'Demiryolu, karayolundan daha ekonomik, denizyolundan ise çoğu rotada daha hızlı olabilen bir ara çözümdür. Uzun mesafede büyük hacimli ve ağır yükler için özellikle avantajlıdır.',
          'Yükünüzü konteyner ya da vagonla taşımak için uygun terminalleri ve bağlantıları belirliyor, terminale kadar ve terminalden sonraki karayolu ayağını da aynı plan içinde yönetiyoruz.',
          'Demiryolu, taşınan ton ve kilometre başına karayoluna göre çok daha az karbon salımı yapar. Sürdürülebilirlik hedefleri olan firmalar için güçlü bir seçenektir.',
        ],
        benefits: [
          'Uzun mesafede dengeli maliyet',
          'Büyük hacimli ve ağır yüklere uygun',
          'Terminal öncesi ve sonrası karayolu bağlantısı',
          'Karayoluna göre daha düşük karbon salımı',
          'Düzenli sevkiyatlar için planlanabilir takvim',
        ],
        scope: [],
        faqs: [
          {
            q: 'Demiryolu hangi yükler için uygundur?',
            a: 'Uzun mesafeye gidecek, büyük hacimli ya da ağır ve teslim tarihinde birkaç günlük esneklik tanıyan yükler için uygundur.',
          },
          {
            q: 'Demiryolu kapıdan kapıya olabilir mi?',
            a: 'Evet. Yük, çıkışta karayoluyla terminale getirilir, varışta yine karayoluyla teslim edilir. Bu ayakları da tek plan içinde yönetiyoruz.',
          },
          {
            q: 'Transit süreyi ne belirler?',
            a: 'Hat, terminal bağlantıları, sınır geçişleri ve aktarma sayısı belirleyicidir. Talebinize göre güncel süreyi teklifimizde belirtiyoruz.',
          },
        ],
        ctaTitle: 'Demiryolu yükünüz için teklif alın.',
      },
      en: {
        metaTitle: 'Rail Freight | Bolt Logistics',
        metaDescription:
          'Rail freight for large volumes over long distances. Bolt Logistics manages terminal connections and the road legs in a single plan. Request a quote.',
        lead: 'Rail freight for large volumes over long distances, at a steady cost and a lower carbon footprint.',
        imageAlt: 'A freight train loaded with containers under a blue sky',
        body: [
          'Rail sits between road and sea: often cheaper than road and, on many routes, faster than sea. It works especially well for large, heavy shipments travelling long distances.',
          'We find the right terminals and connections to move your cargo by container or wagon, and we manage the road legs to and from the terminal in the same plan.',
          'Per tonne-kilometre, rail emits far less carbon than road. It is a strong choice for companies with sustainability goals.',
        ],
        benefits: [
          'A steady cost over long distances',
          'Suited to large and heavy cargo',
          'Road connections before and after the terminal',
          'Lower carbon emissions than road',
          'A predictable schedule for recurring shipments',
        ],
        scope: [],
        faqs: [
          {
            q: 'What cargo suits rail freight?',
            a: 'Large or heavy cargo travelling long distances, where a few days of flexibility on the delivery date is acceptable.',
          },
          {
            q: 'Can rail freight be door to door?',
            a: 'Yes. The cargo goes to the terminal by road at origin and is delivered by road at destination. We manage those legs in the same plan.',
          },
          {
            q: 'What determines the transit time?',
            a: 'The line, terminal connections, border crossings and the number of transfers. We state the current transit time in our quote.',
          },
        ],
        ctaTitle: 'Get a quote for your rail shipment.',
      },
    },
  },
  {
    key: 'intermodal',
    route: 'serviceIntermodal',
    icon: 'ph:shipping-container',
    image: intermodal,
    copy: {
      tr: {
        metaTitle: 'İntermodal Taşımacılık | Bolt Logistics',
        metaDescription:
          'Karayolu, denizyolu ve demiryolunu tek planda birleştiren intermodal taşımacılık. Bolt Logistics maliyet, süre ve güvenliği yükünüze göre dengeler.',
        lead: 'Farklı taşıma türlerini tek planda birleştirerek maliyet, süre ve güvenliği dengeliyoruz.',
        imageAlt: 'Limanda vinçlerin altında yükleme yapılan konteyner gemisinin havadan görünümü',
        body: [
          'İntermodal taşımacılıkta yük, aynı konteyner ya da taşıma birimi içinde kalarak birden fazla taşıma türüyle yol alır. Örneğin tırla limana, gemiyle varış limanına, oradan da trenle ya da tırla alıcıya ulaşır.',
          'Her ayağı ayrı ayrı değil, uçtan uca tek bir plan olarak ele alıyoruz. Yük aktarma sırasında açılmadığı için elleçleme azalır, hasar ve kayıp riski düşer.',
          'Doğru kombinasyon, maliyet ile süre arasında en iyi dengeyi yakalamanızı sağlar. Hangi rotanın yükünüz için en mantıklı olduğunu birlikte belirliyoruz.',
        ],
        benefits: [
          'Maliyet ve süre arasında denge',
          'Uçtan uca tek plan',
          'Aktarmada daha az elleçleme',
          'Daha düşük hasar ve kayıp riski',
          'Rota ve taşıma türü kombinasyonu önerisi',
        ],
        scope: [],
        faqs: [
          {
            q: 'İntermodal ile multimodal arasındaki fark nedir?',
            a: 'İki yöntemde de birden fazla taşıma türü kullanılır. İntermodalde yük aynı taşıma biriminde kalır ve aktarmada elleçlenmez. Multimodal taşımacılık ise genellikle tüm yolculuğun tek bir sözleşme altında yürütülmesini ifade eder.',
          },
          {
            q: 'Hangi durumlarda intermodal tercih edilmeli?',
            a: 'Uzun ve birden fazla bölgeden geçen rotalarda, tek bir taşıma türünün ya çok pahalı ya da çok yavaş kaldığı durumlarda intermodal iyi bir çözümdür.',
          },
          {
            q: 'Süreç boyunca nasıl bilgi alırım?',
            a: 'Her ayağın başlangıcında ve bitişinde sizi bilgilendiriyoruz. Aklınıza takılan her an bize telefon, WhatsApp ya da e-postayla ulaşabilirsiniz.',
          },
        ],
        ctaTitle: 'İntermodal taşıma için teklif alın.',
      },
      en: {
        metaTitle: 'Intermodal Transport | Bolt Logistics',
        metaDescription:
          'Intermodal transport combining road, sea and rail in one plan. Bolt Logistics balances cost, time and security around your cargo. Request a quote.',
        lead: 'We combine transport modes in one plan to balance cost, time and security.',
        imageAlt: 'Aerial view of a container ship being loaded under gantry cranes',
        body: [
          'In intermodal transport the cargo stays in the same container or loading unit while it travels by more than one mode. It might go by truck to the port, by ship to the destination port, and on by train or truck to the buyer.',
          'We treat the journey as one end-to-end plan rather than separate legs. Because the cargo is not unpacked at each transfer, handling goes down and so does the risk of damage or loss.',
          'The right combination gives you the best balance of cost and time. We work out together which route makes the most sense for your cargo.',
        ],
        benefits: [
          'A balance of cost and transit time',
          'One end-to-end plan',
          'Less handling at transfers',
          'Lower risk of damage and loss',
          'Route and mode combinations proposed for you',
        ],
        scope: [],
        faqs: [
          {
            q: 'What is the difference between intermodal and multimodal?',
            a: 'Both use more than one transport mode. In intermodal transport the cargo stays in the same unit and is not handled at transfers. Multimodal usually means the whole journey runs under a single contract.',
          },
          {
            q: 'When does intermodal make sense?',
            a: 'On long routes crossing several regions, where a single mode would be either too expensive or too slow.',
          },
          {
            q: 'How do I stay informed along the way?',
            a: 'We update you at the start and end of every leg, and you can reach us by phone, WhatsApp or email whenever you have a question.',
          },
        ],
        ctaTitle: 'Get a quote for intermodal transport.',
      },
    },
  },
  {
    key: 'warehousing',
    route: 'serviceWarehousing',
    icon: 'ph:warehouse',
    image: warehousing,
    copy: {
      tr: {
        metaTitle: 'Depolama | Bolt Logistics',
        metaDescription:
          'Taşıma ile entegre, kısa ya da uzun süreli depolama çözümleri. Bolt Logistics yükünüzün depoya girişini ve sevkiyatını tek süreç olarak yönetir.',
        lead: 'Yükünüz yola çıkmadan önce ve sonra güvenli, esnek depolama.',
        imageAlt: 'Raflarında paletli ürünlerin istiflendiği geniş bir depo',
        body: [
          'Her yük, üretimden çıktığı gün yola çıkmaz. Sipariş birikebilir, teslim tarihi değişebilir ya da stoğunuzu alıcılarınıza yakın tutmak isteyebilirsiniz. Depolama, tedarik zincirinizdeki bu boşlukları kapatır.',
          'Yükünüzün cinsine, hacmine ve depoda kalacağı süreye göre uygun depolama çözümünü planlıyor, depolamayı taşıma ile birlikte tek süreç olarak yönetiyoruz.',
          'Böylece yükünüz depodan çıktığı anda doğru araçla yola çıkar. Siz de stok ve sevkiyat planınızı tek bir iş ortağıyla yürütürsünüz.',
        ],
        benefits: [
          'Kısa ya da uzun süreli depolama',
          'Taşıma ile entegre planlama',
          'Yükünüze göre depolama çözümü',
          'Envanter yönetimini kolaylaştıran süreç',
          'Tedarik zincirinizde esneklik',
        ],
        scope: [],
        faqs: [
          {
            q: 'Depolama süresi ne kadar olabilir?',
            a: 'Birkaç günlük ara depolamadan uzun süreli stok tutmaya kadar farklı ihtiyaçlar için çözüm planlıyoruz. Süreyi ve koşulları teklif aşamasında netleştiriyoruz.',
          },
          {
            q: 'Depolama ücreti nasıl belirlenir?',
            a: 'Genellikle palet ya da metrekare başına, depoda kalınan süreye göre hesaplanır. Giriş ve çıkış elleçlemesi gibi işlemler ayrıca fiyatlandırılabilir.',
          },
          {
            q: 'Depolama ile taşımayı birlikte alabilir miyim?',
            a: 'Evet. Yükünüzün depoya girişini ve depodan sevkiyatını taşıma planıyla birlikte tek süreç olarak yönetiyoruz.',
          },
        ],
        ctaTitle: 'Depolama ihtiyacınız için teklif alın.',
      },
      en: {
        metaTitle: 'Warehousing | Bolt Logistics',
        metaDescription:
          'Short or long-term warehousing integrated with transport. Bolt Logistics manages your goods in, storage and dispatch as one process. Request a quote.',
        lead: 'Secure, flexible storage for your goods before and after transit.',
        imageAlt: 'A large warehouse with palletised goods stacked on racks',
        body: [
          'Not every shipment leaves the day it is produced. Orders build up, delivery dates move, or you may want stock closer to your buyers. Warehousing closes those gaps in your supply chain.',
          'We plan the right storage for your type of goods, volume and storage period, and manage it together with transport as a single process.',
          'That way your goods leave the warehouse on the right vehicle the moment they are needed, and you run stock and shipping with one partner.',
        ],
        benefits: [
          'Short or long-term storage',
          'Planning integrated with transport',
          'Storage matched to your goods',
          'A process that makes inventory easier to manage',
          'More flexibility in your supply chain',
        ],
        scope: [],
        faqs: [
          {
            q: 'How long can goods be stored?',
            a: 'From a few days of interim storage to long-term stockholding. We agree the period and conditions when we prepare the quote.',
          },
          {
            q: 'How is storage priced?',
            a: 'Usually per pallet or per square metre, based on how long the goods stay. Handling in and out may be priced separately.',
          },
          {
            q: 'Can I combine warehousing and transport?',
            a: 'Yes. We manage goods in and dispatch together with the transport plan as a single process.',
          },
        ],
        ctaTitle: 'Get a quote for your storage needs.',
      },
    },
  },
];

export const serviceByRoute = (route: RouteKey) => services.find((s) => s.route === route);
