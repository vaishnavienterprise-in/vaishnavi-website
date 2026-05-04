'use client';

import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const name = (form.elements.namedItem('name') as HTMLInputElement).value;
    const phone = (form.elements.namedItem('phone') as HTMLInputElement).value;
    const message = (form.elements.namedItem('message') as HTMLTextAreaElement).value;

    const text = `Hi Vaishnavi Enterprise,%0A
Name: ${name}%0A
Phone: ${phone}%0A
Requirement: ${message}`;

    const whatsappURL = `https://wa.me/918238290762?text=${text}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-[#092E20] text-white">

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* LEFT SIDE */}
          <div className="space-y-10">

            <div>
              <h2 className="text-4xl font-bold">
                Contact Us
              </h2>
              <p className="text-gray-300 mt-2">
                Get best label quotation instantly
              </p>
            </div>

            {/* PHONE */}
            <div className="flex items-center gap-3">
              <Phone className="text-[#D4AF37]" />
              <a href="tel:+918238290762" className="hover:text-[#D4AF37]">
                +91 8238290762
              </a>
            </div>

            {/* EMAIL (ONLY ONE) */}
            <div className="flex items-center gap-3">
              <Mail className="text-[#D4AF37]" />
              <a href="mailto:vaishnavienterprise.print@gmail.com" className="hover:text-[#D4AF37]">
                vaishnavienterprise.print@gmail.com
              </a>
            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/918238290762?text=Hi I need label quotation"
              target="_blank"
              className="bg-[#25D366] px-6 py-3 rounded inline-block"
            >
              Chat on WhatsApp
            </a>

            {/* ADDRESS */}
            <div className="text-sm text-gray-300">
              <p>315, Suncor Plaza, Ahmedabad</p>
              <p>Rakhial, Ahmedabad</p>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <motion.div className="bg-white text-black p-8 rounded">

            <h3 className="text-2xl mb-6">Get Quote</h3>

            <form onSubmit={handleSubmit} className="space-y-6">

              <input 
                name="name"
                type="text" 
                placeholder="Your Name"
                required
                className="w-full border-b pb-2 outline-none"
              />

              <input 
                name="phone"
                type="tel" 
                placeholder="Phone Number"
                required
                className="w-full border-b pb-2 outline-none"
              />

              <textarea 
                name="message"
                placeholder="Your Requirement"
                rows={4}
                required
                className="w-full border-b pb-2 outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#092E20] text-white py-3 rounded"
              >
                Send on WhatsApp
              </button>

            </form>

          </motion.div>

        </div>
      </div>

    </section>
  );
}
