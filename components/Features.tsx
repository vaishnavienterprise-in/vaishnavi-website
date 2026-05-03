'use client';

import { motion } from 'motion/react';

const FEATURES = [
  { num: '01', title: 'Advanced Printing Technology' },
  { num: '02', title: 'Superior Print Quality' },
  { num: '03', title: 'Competitive Pricing' },
  { num: '04', title: 'Timely Delivery' },
  { num: '05', title: 'Bulk Manufacturing Capability' },
  { num: '06', title: 'Customized Solutions' },
];

export default function Features() {
  return (
    <section className="py-24 bg-[#092E20] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16 border-b border-white/10 pb-8">
           <h2 className="text-4xl lg:text-5xl font-serif leading-tight max-w-lg">
             Why Partner With Vaishnavi Enterprise?
           </h2>
           <p className="text-gray-300 font-light max-w-sm">
             We combine state-of-the-art technology with decades of printing expertise to deliver unmatched quality.
           </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
           {FEATURES.map((feat, index) => (
             <motion.div
               key={feat.num}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               className="relative pl-8 group"
             >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 group-hover:bg-[#D4AF37] transition-colors duration-500" />
                <span className="block text-2xl font-serif text-[#D4AF37] mb-4 opacity-80">{feat.num}.</span>
                <h3 className="text-lg font-medium tracking-wide uppercase text-gray-200 group-hover:text-white transition-colors">
                  {feat.title}
                </h3>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}
