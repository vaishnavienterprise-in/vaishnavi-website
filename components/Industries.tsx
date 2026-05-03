'use client';

import { motion } from 'motion/react';
import { Pill, ShoppingCart, UtensilsCrossed, Sparkles } from 'lucide-react';

const INDUSTRIES = [
  { name: 'Pharmaceuticals', icon: Pill },
  { name: 'FMCG', icon: ShoppingCart },
  { name: 'Food & Beverage', icon: UtensilsCrossed },
  { name: 'Cosmetics', icon: Sparkles },
];

export default function Industries() {
  return (
    <section id="industries" className="py-24 bg-white text-[#111111] overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#092E20]/60">
            04 — Industries We Serve
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif text-[#092E20] leading-tight">
            Specialized Solutions for Every Sector
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1px bg-gray-200 border border-gray-200">
          {INDUSTRIES.map((ind, index) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white p-8 lg:p-12 flex flex-col items-center justify-center text-center gap-6 group hover:bg-[#0A2F1D] hover:text-white transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-[#f5f5f5] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
                  <Icon className="w-8 h-8 text-[#092E20] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-lg md:text-xl">{ind.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
