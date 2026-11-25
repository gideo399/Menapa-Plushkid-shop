// Single source of truth for business details. Edit here only.
export const BRAND = 'Menampa Plush Kids';
export const WHATSAPP_NUMBER = '233596776672';
export const WHATSAPP_DISPLAY = '+233 59 677 6672';
export const DEFAULT_MESSAGE =
  "Hello Menampa Plush Kids! I visited your website and would like to enquire about your children's fashion collection.";
export const productMessage = (name) =>
  `Hello Menampa Plush Kids! I visited your website and would like to order / enquire about: ${name}. Please share the price, available sizes and colours.`;
export const whatsappLink = (message = DEFAULT_MESSAGE) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const MAPS_URL =
  'https://www.google.com/search?q=MENAPA+PLUSHKIDS+FASHION&stick=H4sIAAAAAAAA_-NgU1IxqEhLSbO0NEpOTDNMM041tLQyqEgxTjVKMTY0TU41M0tKTLNYxCrh6-rnGOCoEOATGuzh7ekSrODmGOzh6e8HAPSx-6RDAAAA&hl=en-GB&mat=CQ8vhSLPiBgdElYBzAmVZu_sPWpXTUG4gSsZlzJessG_OLnTnduFo_ywylO8TFKz15KkBgo2KFqGUKbOECG9cgBH6Jw_Vkgglu8HkQalb4ITli5-oXUhRH0eG4dkENncCQ&authuser=0&ved=2ahUKEwiZiuK8uMuXAxWQV0EAHZjLKi8Q-MgIegQIHhAf';
