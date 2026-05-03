'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function Production() {
  return (
    <section id="process" className="py-32 bg-[#f5f5f5] text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col items-center text-center space-y-4 mb-20">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#092E20]/60">
            05 — Production & Infrastructure
          </span>
          <h2 className="text-4xl lg:text-6xl font-serif text-[#092E20] leading-tight">
            State-of-the-Art <br/><span className="italic font-light">Manufacturing</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="relative h-[400px] rounded overflow-hidden">
              <Image
                src="/Machine.png.png"
                alt="Printing Process"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-white p-8 md:p-12 rounded border border-gray-100 flex-1 flex flex-col justify-center">
               <h3 className="text-2xl font-serif text-[#092E20] mb-4">Precision Printing Lines</h3>
               <p className="text-gray-600 font-light leading-relaxed">
                 Our facility is equipped with advanced rotary and semi-rotary printing machines capable of handling complex jobs with high speed and flawless precision.
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-8 lg:flex-col-reverse"
          >
            <div className="relative h-[400px] rounded overflow-hidden">
              <Image
                src="/Machine.png.png"
                alt="Warehouse Setup"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="bg-[#092E20] text-white p-8 md:p-12 rounded flex-1 flex flex-col justify-center relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <div className="w-32 h-32 border border-[#D4AF37] rounded-full" />
                 <div className="w-24 h-24 border border-[#D4AF37] rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
               </div>
               <h3 className="text-2xl font-serif text-[#D4AF37] mb-4 relative z-10">Dedicated Quality Control</h3>
               <p className="text-gray-300 font-light leading-relaxed relative z-10">
                 From raw material inspection to final product dispatch, our stringent quality checks ensure that every label meets global packaging standards.
               </p>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
