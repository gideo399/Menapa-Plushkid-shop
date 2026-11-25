import { Check } from 'lucide-react';
import Reveal from './Reveal';
export default function About() {
  const points = ['Playful, colourful designs', 'Comfortable everyday pieces', 'School bags, clothing and accessories'];
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="relative">
          <div className="absolute -inset-3 -rotate-2 rounded-[2rem] bg-blush-200" aria-hidden="true" />
          <img src="/images/store-rack.jpg" alt="Printed shirts and sportswear on a rail inside the Menampa Plush Kids shop" loading="lazy" className="relative aspect-[4/5] w-full rounded-[2rem] object-cover shadow-soft" />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">About Us</p>
          <h2 className="h2 mt-3">Fashion that makes little ones feel special</h2>
          <p className="mt-5 text-lg text-ink/80">
            Menapa Plush Kids is a children's fashion brand built around style and comfort. We love helping children look and feel their best, whether it's for school, play or a special day out.
          </p>
          <p className="mt-4 text-ink/80">
            Browse our collection online, then chat with us on WhatsApp to ask about styles, sizes and ordering.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-3 font-semibold">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-rose text-white"><Check size={16} /></span>{p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
