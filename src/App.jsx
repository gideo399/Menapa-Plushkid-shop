import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Collections from './components/Collections';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero /><About /><Collections /><WhyChooseUs /><Gallery /><CTA /><Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
