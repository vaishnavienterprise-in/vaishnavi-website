'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
  </svg>
);

const TRUST_FEATURES = [
  'Premium Quality',
  'Customized Solutions',
  'Timely Delivery',
  'Bulk Order Capability'
];

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden bg-[#05110B]">

      {/* ✅ BACKGROUND IMAGE */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/bg-hero.jpg"
          alt="Background"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#092E20]/95 via-[#0A2F1D]/80 to-[#05110B]/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8 max-w-2xl"
          >

            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Self Adhesive Label
              <span className="text-[#D4AF37]"> Manufacturer</span>
              <br />in Ahmedabad
            </h1>

            <p className="text-lg text-gray-300">
              Barcode Labels | Roll Labels | Hologram Labels
              <br />Best Price • Fast Delivery • Bulk Orders
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-4">

              <a
                href="tel:+918238290762"
                className="bg-[#D4AF37] text-black px-6 py-3 rounded font-semibold"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918238290762?text=Hi I need label quotation"
                target="_blank"
                className="bg-[#25D366] text-white px-6 py-3 rounded font-semibold flex items-center gap-2"
              >
                <WhatsAppIcon className="w-5 h-5" />
                WhatsApp
              </a>

              <a
                href="#calculator"
                className="border border-white text-white px-6 py-3 rounded"
              >
                Get Quote
              </a>

            </div>

            {/* TRUST FEATURES */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6">
              {TRUST_FEATURES.map((f, i) => (
                <span key={i} className="text-sm text-white">{f}</span>
              ))}
            </div>

          </motion.div>

          {/* ✅ RIGHT SIDE IMAGE (THIS WAS MISSING EARLIER) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <Image
              src="/plates.jpg"
              alt="Printing Machine"
              width={500}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
