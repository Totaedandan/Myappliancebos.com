// src/config/site.js
// Единый источник данных о бизнесе (NAP: name, address, phone).
// Для локального SEO важно, чтобы эти данные совпадали везде: на сайте,
// в Google Business Profile, Yelp и других каталогах.

export const SITE = {
  name: 'MyApplianceBos',
  legalName: 'KASS Home Services',
  url: 'https://www.myappliancebos.com',
  phone: '+1 (603) 320-9578',
  phoneHref: 'tel:+16033209578',
  email: 'kasshomesvc@gmail.com',
  address: {
    street: '71 Bryon Rd',
    city: 'Chestnut Hill',
    region: 'MA',
    postalCode: '02467',
    country: 'US',
  },
  serviceArea: 'Greater Boston Area',
  // Часы как в Yelp-профиле (его ведёт сам бизнес). Сверить с Google Business Profile.
  hours: [
    { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '18:00' },
    { days: ['Saturday', 'Sunday'], opens: '08:00', closes: '14:00' },
  ],
  hoursText: ['Mon - Fri: 8am - 6pm', 'Sat - Sun: 8am - 2pm'],
  social: {
    facebook: 'https://www.facebook.com/share/1D7ZWrt82H/?mibextid=wwXIfr',
    instagram: 'https://www.instagram.com/kasshomesvc?igsh=ankzdXozOW9nenIx&utm_source=qr',
    yelp: 'https://www.yelp.com/biz/kass-home-services-chestnut-hill',
  },
  bookingScriptSrc:
    'https://online-booking.housecallpro.com/script.js?token=a255c4d3ed8e4a23950ac0aaeb98863a&orgName=KASSHomeServices',
};

export const SERVICE_CITIES = [
  'Boston', 'Cambridge', 'Brookline', 'Newton', 'Somerville', 'Quincy',
  'Medford', 'Everett', 'Revere', 'Chelsea', 'Arlington', 'Watertown', 'Chestnut Hill',
];

export const fullAddress = () => {
  const a = SITE.address;
  return `${a.street}, ${a.city}, ${a.region} ${a.postalCode}`;
};
