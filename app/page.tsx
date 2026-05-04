import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Hologram from '@/components/Hologram';
import Industries from '@/components/Industries';
import Features from '@/components/Features';
import Production from '@/components/Production';
import Calculator from '@/components/Calculator';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Solutions />
      <Hologram />
      <Industries />
      <Features />
      <Production />
      <Calculator />
      <Contact />

      {/* ✅ ADD THIS SECTION */}
      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h2>Our Products</h2>
        <p>
          <a href="/barcode-labels">Barcode Labels</a> |{' '}
          <a href="/roll-labels">Roll Labels</a> |{' '}
          <a href="/hologram-labels">Hologram Labels</a>
        </p>
      </div>

      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
