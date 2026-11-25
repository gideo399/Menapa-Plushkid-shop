import { Heart, Sparkles, Star } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-blush-100 via-blush-50 to-ivory pt-28 pb-16 lg:pt-32 lg:pb-24">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-blush-200/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-lavender blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="text-center lg:text-left">
          <p className="eyebrow inline-flex items-center gap-2"><Sparkles size={16} /> Children's Fashion</p>
          <h1 className="mt-4 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Little Styles, <span className="text-rose">Big Smiles!</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ink/80 lg:mx-0">
            Discover beautiful, comfortable and stylish outfits made to make every little moment special.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <a href="#collections" className="btn btn-outline bg-white/60">Explore Our Collection</a>
            <WhatsAppButton>Shop on WhatsApp</WhatsAppButton>
          </div>
        </div>

        <div className="relative mx-auto grid w-full max-w-lg grid-cols-2 gap-3 sm:gap-4">
          <div className="space-y-3 sm:space-y-4">
            <img src="/images/mamas-mini.jpeg" alt="Beige Mama's Mini sweatshirt" className="aspect-[3/4] w-full rounded-t-[999px] rounded-b-3xl object-cover shadow-soft ring-4 ring-white" fetchPriority="high" />
            <img src="/images/adventure-tee.jpeg" alt="Colourful adventure print kids T-shirt" className="aspect-square w-full rounded-3xl object-cover shadow-soft ring-4 ring-white" />
          </div>
          <div className="mt-10 space-y-3 sm:space-y-4">
            <img src="/images/overalls.webp" alt="Light denim kids dungarees" className="aspect-square w-full rounded-3xl bg-white object-cover shadow-soft ring-4 ring-white" />
            <img src="/images/tropical-shirt.jpeg" alt="Tropical fruit print shirt" className="aspect-[3/4] w-full rounded-t-3xl rounded-b-[999px] object-cover shadow-soft ring-4 ring-white" />
          </div>
          <Star className="absolute -left-2 top-1/3 fill-yellow-300 text-yellow-400" size={36} aria-hidden="true" />
          <Heart className="absolute -right-2 top-8 fill-rose text-rose" size={30} aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
