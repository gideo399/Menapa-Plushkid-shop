import { products } from '../data';
import { productMessage } from '../config';
import WhatsAppButton from './WhatsAppButton';
import Reveal from './Reveal';

export default function Collections() {
  return (
    <section id="collections" className="bg-blush-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Featured Collections</p>
          <h2 className="h2 mt-3">Pick your little one's next favourite</h2>
          <p className="mt-4 text-ink/80">Tap “Order on WhatsApp” on any item to chat with us about price, sizes and colours.</p>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 min-[480px]:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 80} className="group flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-blush-100 transition duration-300 hover:-translate-y-1.5 hover:shadow-soft">
              <div className="aspect-square overflow-hidden bg-white">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-display text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 flex-1 text-sm text-ink/70">{p.description}</p>
                <p className="mt-3 text-sm font-bold text-rose">{p.price ?? 'Ask for price on WhatsApp'}</p>
                <WhatsAppButton message={productMessage(p.name)} className="btn btn-primary mt-4 !py-2.5 text-sm">Order on WhatsApp</WhatsAppButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
