'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white text-[#111111] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Imagery (Now in front) */}
          <motion.div
             initial={{ opacity: 0, filter: "blur(10px)" }}
             whileInView={{ opacity: 1, filter: "blur(0px)" }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1 }}
             className="relative h-[400px] sm:h-[500px] lg:h-auto lg:aspect-[4/3] xl:aspect-video rounded overflow-hidden bg-gray-100"
          >
             <Image
                src="/about-us.png.png"
                alt="Vaishnavi Enterprise Vision and Mission"
                fill
                className="object-contain lg:object-cover"
                referrerPolicy="no-referrer"
             />
             <div className="absolute inset-0 border-[1px] border-white/20 m-4 pointer-events-none rounded" />
             <div className="absolute bottom-0 left-0 bg-white p-8 w-[80%] rounded-tr-[40px]">
                <p className="font-serif italic text-2xl text-[#092E20] leading-snug">
                  &quot;Innovating the art of label printing with precision and scale.&quot;
                </p>
             </div>
          </motion.div>

          {/* Right Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex flex-col gap-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#092E20]/60">
                01 — Who We Are
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif text-[#092E20] leading-tight">
                About Vaishnavi Enterprise
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              Vaishnavi Enterprise specializes in high-quality self-adhesive label printing solutions for industries including FMCG, pharmaceuticals, cosmetics, food packaging, and manufacturing. 
            </p>
            <p className="text-lg text-gray-600 leading-relaxed font-light">
              We focus on precision printing, customized solutions, timely delivery, and premium print quality to empower businesses across India with packaging that stands out and stays secure.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <p className="text-4xl font-serif text-[#092E20] mb-2">10<span className="text-[#D4AF37]">+</span></p>
                <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-[#092E20] mb-2">High</p>
                <p className="text-sm uppercase tracking-wider text-gray-500 font-medium">Precision Printing</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
