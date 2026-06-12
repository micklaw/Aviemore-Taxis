export const SITE_NAME = 'Aviemore Taxis';
export const TAGLINE = "Aviemore's reliable taxi company";

export const PHONE = '01479 811111';
export const PHONE_HREF = 'tel:+441479811111';
export const PHONE_SECONDARY = '01479 810118';
export const PHONE_SECONDARY_HREF = 'tel:+441479810118';
export const PHONE_FREEPHONE = '0800 585623';
export const PHONE_FREEPHONE_HREF = 'tel:+44800585623';
export const EMAIL = 'aviemoretaxis@gmail.com';

export const FACEBOOK = 'https://www.facebook.com/aviemore.taxis';
export const TWITTER = 'https://twitter.com/AviemoreTaxis';

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICES_NAV = [
  { label: 'Local Family Business', href: '/services/fleet/local-family-business' },
  { label: 'Our Cars', href: '/services/fleet/cars' },
  { label: '24/7 Availability', href: '/services/availability/24-7' },
  { label: 'Tariff & Prices', href: '/services/prices/tariff' },
];

export const TARIFFS = [
  {
    name: 'Tariff 1',
    applies: 'The standard daytime rate.',
    flagfall: { distance: 'For the first 785 yards or part', price: '£2.50' },
    increment: { distance: 'For each additional 130 yards or part', price: '£0.10' },
  },
  {
    name: 'Tariff 2',
    applies:
      'Applies on Boxing Day and the 2nd of January, every day between 9pm and 7am, all day Sunday, and when 5 or more passengers are carried at any one time.',
    flagfall: { distance: 'For the first 560 yards or part', price: '£3.00' },
    increment: { distance: 'For each additional 92 yards or part', price: '£0.10' },
  },
  {
    name: 'Tariff 3',
    applies: "Applies on Christmas Day and New Year's Day.",
    flagfall: { distance: 'For the first 444 yards or part', price: '£3.60' },
    increment: { distance: 'For each additional 74 yards or part', price: '£0.10' },
  },
];

export const SERVICE_HIGHLIGHTS = [
  'High quality, comfortable vehicles',
  'Polite, friendly drivers and staff',
  'We will wait if your flight is delayed',
  'Airport and railway meet and greet provided',
  'High quality airport transfers',
  'Reliable service at all times',
  'Contracts available',
  'Highland tours',
];
