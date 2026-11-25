// Single source of truth for business details. Edit here only.
export const BRAND = 'Menapa Plush Kids';
export const WHATSAPP_NUMBER = '233596776672';
export const WHATSAPP_DISPLAY = '+233 59 677 6672';
export const DEFAULT_MESSAGE =
  "Hello Menapa Plush Kids! I visited your website and would like to enquire about your children's fashion collection.";
export const productMessage = (name) =>
  `Hello Menapa Plush Kids! I visited your website and would like to order / enquire about: ${name}. Please share the price, available sizes and colours.`;
export const whatsappLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const MAPS_URL =
  'https://share.google/PVr81rn8fi8TYF0MW';

export const TIKTOK_URL =
  'https://www.tiktok.com/@menapa_plushkidsfashion?is_from_webapp=1&sender_device=pc';
