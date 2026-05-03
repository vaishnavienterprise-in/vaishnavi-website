'use client';

import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handled abstractly or via mailto/api later
  };

  return (
    <section id="contact" className="py-24 bg-[#092E20] text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#05110B] -skew-x-12 translate-x-32 hidden lg:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          <div className="space-y-12">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#D4AF37]">
                06 — Get In Touch
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif mt-4 mb-6 leading-tight">
                Let&apos;s Discuss Your <br />
                <span className="italic text-[#D4AF37]">Packaging Needs</span>
              </h2>
            </div>

            <div className="grid gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Call Us</p>
                  <p className="font-medium">+91 8200223356</p>
                  <p className="font-medium">+91 8238290762</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Email Us</p>
                  <a href="mailto:info@vaishnavienterprise.in" className="block hover:text-[#D4AF37] transition-colors">info@vaishnavienterprise.in</a>
                  <a href="mailto:vaishnavienterprise.print@gmail.com" className="block hover:text-[#D4AF37] transition-colors">vaishnavienterprise.print@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Office Address</p>
                  <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
                    315, Suncor Plaza, Nr. Jashodanagar BRTS Bus Stand, N.H. - 8, Jashodanagar, Ahmedabad - 380026
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0 mt-1" />
                <div>
                  <p className="text-xs uppercase tracking-widest text-gray-400 mb-1">Factory Address</p>
                  <p className="text-sm text-gray-300 leading-relaxed max-w-sm">
                    9, P.A. Ind. Estate, 15, Amba Estate, Nr. G Colony, B/h. Old Navneet Press, Sukhramnagar Rd, Rakhial, Ahmedabad, Gujarat - 380021
                  </p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white text-[#111111] p-8 md:p-12 rounded shadow-2xl"
          >
            <h3 className="text-2xl font-serif text-[#092E20] mb-8">Quick Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Full Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 focus:outline-none focus:border-[#092E20] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Company Name</label>
                <input 
                  type="text" 
                  className="w-full bg-transparent border-b border-gray-300 pb-2 focus:outline-none focus:border-[#092E20] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Phone Number</label>
                <input 
                  type="tel" 
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 focus:outline-none focus:border-[#092E20] transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-500">Requirement Details</label>
                <textarea 
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-gray-300 pb-2 focus:outline-none focus:border-[#092E20] transition-colors resize-none"
                />
              </div>

              <button 
                type="submit"
                className="group w-full flex items-center justify-center gap-2 bg-[#092E20] text-white py-4 rounded font-medium hover:bg-[#062016] transition-all uppercase tracking-wider text-sm mt-4"
              >
                Send Inquiry
                <Send className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
