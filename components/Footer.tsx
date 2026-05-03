'use client';

import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#05110B] pt-20 pb-10 text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center w-fit">
              <div className="relative w-64 h-32">
                <Image src="/VE_Logo_+_Font-removebg-preview.png" alt="Vaishnavi Enterprise Logo" fill className="object-contain object-left" quality={100} />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Premium self-adhesive label printing solutions. Delivering precision, quality, and reliability to businesses across India.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#092E20] transition-colors"><Facebook className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#092E20] transition-colors"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#D4AF37] hover:text-[#092E20] transition-colors"><Linkedin className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 text-[#D4AF37]">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Our Solutions</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries Serve</a></li>
              <li><a href="#calculator" className="hover:text-white transition-colors">Cost Estimator</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg mb-6 text-[#D4AF37]">Products</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#solutions" className="hover:text-white transition-colors">Barcode Labels</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Pharma Labels</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">FMCG Labels</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Hologram Labels</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Customized Labels</a></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
             <h3 className="font-serif text-lg mb-6 text-[#D4AF37]">Contact Us</h3>
             <ul className="space-y-3 text-sm text-gray-400 mb-6">
               <li>+91 8200223356</li>
               <li>+91 8238290762</li>
               <li>info@vaishnavienterprise.in</li>
               <li className="mt-4 pt-4 border-t border-white/10">
                 <span className="text-white font-medium mb-1 block">Office Address:</span>
                 315, Suncor Plaza, Nr. Jashodanagar BRTS Bus Stand, N.H. - 8, Jashodanagar, Ahmedabad - 380026
               </li>
             </ul>
             <div className="w-full h-32 rounded-lg overflow-hidden relative">
               <iframe 
                 src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=315,%20Suncor%20Plaza,%20Jashodanagar,%20Ahmedabad+(Vaishnavi%20Enterprise)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
               ></iframe>
             </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 uppercase tracking-widest">
          <p>&copy; {new Date().getFullYear()} Vaishnavi Enterprise. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
