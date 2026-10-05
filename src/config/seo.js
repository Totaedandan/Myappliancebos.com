// src/config/seo.js
// Метаданные страниц. Используются и в браузере (компонент Seo),
// и при пререндере (scripts/prerender.js), поэтому описаны в одном месте.
import { SITE, SERVICE_CITIES, fullAddress } from './site.js';

export const PAGES = [
  {
    path: '/',
    title: 'Appliance Repair in Greater Boston | Same-Day Service | MyApplianceBos',
    description:
      'Same-day appliance repair in Boston, Newton, Brookline & Cambridge. Refrigerators, washers, dryers, ovens and dishwashers, all major brands. Call (603) 320-9578.',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/about',
    title: 'About Us | Local Boston Appliance Repair Technicians | MyApplianceBos',
    description:
      'Meet MyApplianceBos (KASS Home Services): certified local technicians providing honest, same-day appliance repair across Greater Boston.',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/brands',
    title: 'Brands We Repair | Samsung, LG, Bosch, Sub-Zero & More | MyApplianceBos',
    description:
      'Certified repair for Samsung, LG, Whirlpool, GE, Bosch, Sub-Zero, Viking, Thermador and other major appliance brands in Greater Boston.',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/service-areas',
    title: 'Service Areas | Appliance Repair in Boston, Newton, Cambridge | MyApplianceBos',
    description:
      'We repair appliances in Boston, Cambridge, Brookline, Newton, Somerville, Quincy, Watertown and nearby towns. Same-day service available.',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/contact',
    title: 'Contact Us | Book Appliance Repair in Boston | MyApplianceBos',
    description:
      'Call (603) 320-9578, email kasshomesvc@gmail.com or book online. Fast appliance repair across the Greater Boston Area.',
    changefreq: 'monthly',
    priority: '0.6',
  },
];

export const NOT_FOUND_PAGE = {
  path: '/404',
  title: 'Page Not Found | MyApplianceBos',
  description: 'The page you are looking for does not exist.',
  noindex: true,
};

export const getPage = (pathname) =>
  PAGES.find((p) => p.path === pathname) ?? NOT_FOUND_PAGE;

export const canonicalUrl = (path) => (path === '/' ? `${SITE.url}/` : `${SITE.url}${path}`);

// Разметка schema.org для локального бизнеса (ставится на все страницы).
export const localBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  '@id': `${SITE.url}/#business`,
  name: SITE.name,
  alternateName: SITE.legalName,
  url: `${SITE.url}/`,
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: '$$',
  description:
    'Same-day appliance repair for refrigerators, washers, dryers, ovens, dishwashers and ice makers across the Greater Boston Area.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    postalCode: SITE.address.postalCode,
    addressCountry: SITE.address.country,
  },
  areaServed: SERVICE_CITIES.map((name) => ({ '@type': 'City', name: `${name}, MA` })),
  openingHoursSpecification: SITE.hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.days,
    opens: h.opens,
    closes: h.closes,
  })),
  sameAs: Object.values(SITE.social),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Appliance Repair Services',
    itemListElement: [
      'Refrigerator Repair', 'Washer Repair', 'Dryer Repair',
      'Oven & Stove Repair', 'Dishwasher Repair', 'Ice Maker Repair',
    ].map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
  },
});

export { fullAddress };
