import { MapPin, Phone, Store } from 'lucide-react';
import { BRAND, MAPS_URL, TIKTOK_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../config';
import WhatsAppButton from './WhatsAppButton';
import Reveal from './Reveal';

function TikTokIcon({ size = 22, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export default function Contact() {
  const rows = [
    { icon: Store, label: 'Brand', value: BRAND },
    { icon: Phone, label: 'WhatsApp', value: <a className="underline-offset-2 hover:underline" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a> },
    { icon: TikTokIcon, label: 'TikTok', value: <a className="underline-offset-2 hover:underline hover:text-rose" href={TIKTOK_URL} target="_blank" rel="noopener noreferrer">@menapa_plushkidsfashion</a> },
    { icon: MapPin, label: 'Location', value: <a className="underline underline-offset-2 hover:text-rose" href={MAPS_URL} target="_blank" rel="noopener noreferrer">Find us on Google</a> },
  ];
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="h2 mt-3">Let's chat about your little one's style</h2>
          <p className="mt-4 text-ink/80">The quickest way to order or ask a question is on WhatsApp.</p>
          <ul className="mt-8 space-y-4">
            {rows.map(({ icon: Icon, label, value }) => (
              <li key={label} className="flex items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-blush-100">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blush-100 text-rose"><Icon size={22} /></span>
                <div><p className="text-xs font-bold uppercase tracking-wider text-ink/50">{label}</p><p className="font-semibold">{value}</p></div>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton>Chat on WhatsApp</WhatsAppButton>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline"><MapPin size={18} />View on Google</a>
          </div>
        </Reveal>
        <Reveal delay={120} className="grid place-items-center rounded-[2rem] bg-blush-50 p-8 ring-1 ring-blush-100">
          <img src="/images/logo.jpg" alt="Menampa Plush Kids Fashion logo" loading="lazy" className="w-full max-w-sm object-contain mix-blend-multiply" />
        </Reveal>
      </div>
    </section>
  );
}
