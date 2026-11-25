import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { gallery } from '../data';
import Reveal from './Reveal';

export default function Gallery() {
  const [idx, setIdx] = useState(null);
  const n = gallery.length;
  useEffect(() => {
    if (idx === null) return;
    const key = (e) => {
      if (e.key === 'Escape') setIdx(null);
      if (e.key === 'ArrowRight') setIdx((i) => (i + 1) % n);
      if (e.key === 'ArrowLeft') setIdx((i) => (i - 1 + n) % n);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', key);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', key); };
  }, [idx, n]);

  return (
    <section id="gallery" className="bg-lavender/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">Fashion Gallery</p>
          <h2 className="h2 mt-3">A peek at our little world</h2>
        </Reveal>
        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 sm:auto-rows-[200px] sm:gap-4 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <button key={g.src} onClick={() => setIdx(i)} aria-label={`View larger: ${g.alt}`}
              className={`group relative overflow-hidden rounded-2xl bg-white shadow-sm focus:outline-none focus-visible:ring-4 focus-visible:ring-rose/50 ${g.span || ''}`}>
              <img src={g.src} alt={g.alt} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <span className="absolute inset-0 bg-rose/0 transition group-hover:bg-rose/15" />
            </button>
          ))}
        </div>
      </div>

      {idx !== null && (
        <div role="dialog" aria-modal="true" aria-label="Image viewer" className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4" onClick={() => setIdx(null)}>
          <button className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20" onClick={() => setIdx(null)} aria-label="Close"><X /></button>
          <button className="absolute left-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:left-6" onClick={(e) => { e.stopPropagation(); setIdx((idx - 1 + n) % n); }} aria-label="Previous"><ChevronLeft /></button>
          <img src={gallery[idx].src} alt={gallery[idx].alt} onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-full rounded-2xl object-contain" />
          <button className="absolute right-2 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 sm:right-6" onClick={(e) => { e.stopPropagation(); setIdx((idx + 1) % n); }} aria-label="Next"><ChevronRight /></button>
        </div>
      )}
    </section>
  );
}
