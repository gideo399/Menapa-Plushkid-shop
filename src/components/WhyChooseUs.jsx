import { Shirt, Feather, PartyPopper, MessagesSquare } from 'lucide-react';
import Reveal from './Reveal';
const items = [
  { icon: Shirt, title: 'Beautiful Fashion', text: 'Colourful, playful pieces children love to wear.' },
  { icon: Feather, title: 'Style & Comfort', text: 'Looks great and feels easy for busy little days.' },
  { icon: PartyPopper, title: 'Memorable Moments', text: 'Outfits and accessories for school, play and celebrations.' },
  { icon: MessagesSquare, title: 'Friendly Service', text: 'Chat with us directly on WhatsApp for quick help.' },
];
export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Why Choose Us</p>
          <h2 className="h2 mt-3">Made for children, loved by parents</h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 80} className="rounded-3xl bg-gradient-to-b from-white to-blush-50 p-7 text-center ring-1 ring-blush-100 transition hover:-translate-y-1 hover:shadow-soft">
              <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-blush-100 text-rose"><Icon size={26} /></span>
              <h3 className="mt-5 font-display text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-ink/70">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
