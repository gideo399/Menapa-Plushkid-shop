import { MapPin, Phone, Store } from 'lucide-react';
import { BRAND, MAPS_URL, WHATSAPP_DISPLAY, WHATSAPP_NUMBER } from '../config';
import WhatsAppButton from './WhatsAppButton';
import Reveal from './Reveal';

export default function Contact() {
  const rows = [
    { icon: Store, label: 'Brand', value: BRAND },
    { icon: Phone, label: 'WhatsApp', value: <a className="underline-offset-2 hover:underline" href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">{WHATSAPP_DISPLAY}</a> },
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
