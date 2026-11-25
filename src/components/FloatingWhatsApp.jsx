import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../config';
export default function FloatingWhatsApp() {
  return (
    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with Menampa Plush Kids on WhatsApp"
      className="fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110">
      <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" aria-hidden="true" />
      <MessageCircle className="relative" size={28} />
    </a>
  );
}
