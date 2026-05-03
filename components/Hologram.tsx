'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

export default function Hologram() {
  return (
    <section className="relative py-32 bg-[#05110B] overflow-hidden">
      {/* Background with subtle holographic gradient effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#092E20] via-[#05110B] to-[#121a15] opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.15)_0,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(9,46,32,0.4)_0,transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
             initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
             whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 1 }}
             className="relative aspect-square max-w-md mx-auto lg:w-full rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(212,175,55,0.1)] p-4"
          >
             <div className="relative w-full h-full rounded-full overflow-hidden animate-[spin_30s_linear_infinite]">
                 <Image
                    src="/Hologram2.png.png"
                    alt="Premium Hologram Labels"
                    fill
                    className="object-cover mix-blend-screen"
                    referrerPolicy="no-referrer"
                 />
                 <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-fuchsia-400/20 to-yellow-400/20 mix-blend-overlay" />
             </div>
             {/* Center fixed element */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#05110B] w-32 h-32 rounded-full border border-[#D4AF37]/50 flex items-center justify-center backdrop-blur-md">
                 <ShieldCheck className="w-12 h-12 text-[#D4AF37]" />
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
             <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                03 — Premium Security
              </span>
              <h2 className="text-4xl lg:text-6xl font-serif text-white leading-tight">
                Authentic <br />
                <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-white to-gray-400">
                  Hologram
                </span> Labels
              </h2>
              <p className="text-xl text-gray-300 font-light leading-relaxed border-l border-[#D4AF37] pl-4">
                Enhance security. Build trust. Protect your brand identity.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                 {[
                   'Anti-Counterfeit Protection',
                   'Premium Shine Effects',
                   'Modern Hologram Textures',
                   'Custom Security Features'
                 ].map((feature, i) => (
                   <div key={i} className="flex items-center gap-3">
                     <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                     <p className="text-sm text-gray-400 uppercase tracking-widest">{feature}</p>
                   </div>
                 ))}
              </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
