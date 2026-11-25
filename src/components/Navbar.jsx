import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { nav } from '../data';
import WhatsAppButton from './WhatsAppButton';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10);
    on(); window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${scrolled || open ? 'bg-ivory/95 shadow-sm backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Main">
        <a href="#home" className="flex items-center gap-2" aria-label="Menampa Plush Kids – home">
          <img src="/images/logo.jpg" alt="Menampa Plush Kids Fashion logo" className="h-11 w-11 rounded-full object-contain bg-white ring-2 ring-blush-200" />
          <span className="font-display text-lg font-bold text-rose sm:hidden lg:inline">Menapa Plush Kids</span>
        </a>
        <ul className="hidden items-center gap-7 md:flex">
          {nav.map((n) => (
            <li key={n.href}><a href={n.href} className="font-semibold transition hover:text-rose">{n.label}</a></li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <WhatsAppButton className="btn btn-primary !px-4 !py-2 text-sm hidden sm:inline-flex">Shop on WhatsApp</WhatsAppButton>
          <button onClick={() => setOpen(!open)} className="rounded-full p-2 text-rose md:hidden" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-blush-100 bg-ivory px-4 pb-6 pt-2 md:hidden">
          <ul className="flex flex-col">
            {nav.map((n) => (
              <li key={n.href}><a href={n.href} onClick={() => setOpen(false)} className="block border-b border-blush-100 py-3 font-semibold">{n.label}</a></li>
            ))}
          </ul>
          <WhatsAppButton className="btn btn-primary mt-4 w-full">Shop on WhatsApp</WhatsAppButton>
        </div>
      )}
    </header>
  );
}
