import WhatsAppButton from './WhatsAppButton';
import Reveal from './Reveal';
export default function CTA() {
  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose to-[#F06292] px-6 py-16 text-center text-white shadow-soft sm:px-12">
        <div className="absolute -left-10 -top-10 h-40 w-40 rounded-full bg-white/10" aria-hidden="true" />
        <div className="absolute -bottom-12 -right-8 h-52 w-52 rounded-full bg-white/10" aria-hidden="true" />
        <h2 className="relative font-display text-3xl font-bold sm:text-5xl">Ready to Give Your Little Ones a Stylish Look?</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg text-white/90">Explore our collections and get in touch with us today.</p>
        <WhatsAppButton className="btn relative mt-8 bg-white !px-8 !py-4 text-rose-dark shadow-lg hover:-translate-y-0.5 hover:bg-blush-50">Chat With Us on WhatsApp</WhatsAppButton>
      </Reveal>
    </section>
  );
}
