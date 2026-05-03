'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const PRODUCTS = [
  { name: 'Barcode Labels', image: '/B-l.png.png' },
  { name: 'Pharma Labels', image: '/p-l.png.jpg' },
  { name: 'FMCG Labels', image: '/FMCG.png.png' },
  { name: 'Food & Beverage Labels', image: '/F-B.png.png' },
  { name: 'Cosmetic Labels', image: '/C-l.png.jpg' },
  { name: 'Hologram Labels', image: '/Hologram1.png.png' },
  { name: 'Customized Labels', image: '/BE-image.png.jpg' },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 bg-[#f5f5f5] text-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#092E20]/60">
              02 — Our Label Solutions
            </span>
            <h2 className="text-4xl lg:text-5xl font-serif text-[#092E20] leading-tight">
              Crafted for Every Industry
            </h2>
          </div>
          <p className="text-gray-600 max-w-md font-light">
            Discover our comprehensive range of high-performance label solutions tailored to match your precise specifications.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((prod, index) => (
            <motion.div
              key={prod.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white overflow-hidden border border-gray-200 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-500 rounded"
            >
              <div className="aspect-[4/3] relative overflow-hidden bg-gray-100">
                <Image
                  src={prod.image}
                  alt={prod.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#092E20]/0 group-hover:bg-[#092E20]/10 transition-colors duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-lg text-[#092E20] mb-2">{prod.name}</h3>
                <div className="w-8 h-px bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
