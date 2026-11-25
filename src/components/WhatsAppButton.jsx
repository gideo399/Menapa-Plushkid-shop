import { MessageCircle } from 'lucide-react';
import { whatsappLink } from '../config';
export default function WhatsAppButton({ message, children, className = 'btn btn-primary', icon = true }) {
  return (
    <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className={className}>
      {icon && <MessageCircle size={18} aria-hidden="true" />}{children}
    </a>
  );
}
