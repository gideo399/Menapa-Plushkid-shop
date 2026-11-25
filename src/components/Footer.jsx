import { nav } from '../data';
import { BRAND } from '../config';
import WhatsAppButton from './WhatsAppButton';
export default function Footer() {
  return (
    <footer className="bg-ink pb-24 pt-14 text-white/80 sm:pb-14">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
        <img src="/images/logo.jpg" alt={`${BRAND} logo`} className="h-20 w-20 rounded-full bg-white object-contain p-1" />
        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {nav.map((n) => <li key={n.href}><a href={n.href} className="hover:text-white">{n.label}</a></li>)}
        </ul>
        <WhatsAppButton>Order on WhatsApp</WhatsAppButton>
        <p className="text-sm text-white/50">© {new Date().getFullYear()} {BRAND}. All rights reserved.</p>
      </div>
    </footer>
  );
}
