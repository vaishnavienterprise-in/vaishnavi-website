'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator as CalcIcon, ChevronDown } from 'lucide-react';

const MATERIALS = [
  { id: 'chromo', name: 'Chromo Paper', thickness: '65~70gsm', priceFactor: 1 },
  { id: 'pp-white', name: 'PP White (Non-tearable)', thickness: '65~70gsm', priceFactor: 1.5 },
  { id: 'pp-clear', name: 'Clear to Clear (Transparent)', thickness: '65~70gsm', priceFactor: 1.8 },
  { id: 'silver', name: 'Silver PP', thickness: '40gsm~60gsm', priceFactor: 2.2 },
  { id: 'hologram', name: 'Hologram Label', thickness: '36~40micron', priceFactor: 3.5 },
];

export default function Calculator() {
  const [material, setMaterial] = useState(MATERIALS[0].id);
  const [width, setWidth] = useState('50');
  const [height, setHeight] = useState('50');
  const [quantity, setQuantity] = useState('1000');
  const [estimate, setEstimate] = useState<number | null>(null);

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    const w = parseFloat(width);
    const h = parseFloat(height);
    const q = parseInt(quantity);
    
    if (isNaN(w) || isNaN(h) || isNaN(q)) return;

    let cost = 0;
    if (material === 'chromo') {
      cost = (((w * h) / 625) * 0.055) * q;
    } else {
      cost = (((w * h) / 625) * 0.095) * q;
    }
    
    setEstimate(cost);
  };

  return (
    <section id="calculator" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-[#092E20] rounded-[2rem] overflow-hidden shadow-2xl relative">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/10 blur-[100px] rounded-full pointer-events-none" />
          
          <div className="grid md:grid-cols-5 h-full">
            
            <div className="md:col-span-2 bg-[#092E20] p-10 flex flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/id/10/8/8')] opacity-5 mix-blend-overlay" />
              <div className="relative z-10">
                <CalcIcon className="w-10 h-10 text-[#D4AF37] mb-6" />
                <h3 className="text-3xl font-serif text-white leading-tight mb-4">
                  Sticker Cost <br/>
                  <span className="italic text-[#D4AF37]">Estimator</span>
                </h3>
                <p className="text-gray-300 font-light text-sm leading-relaxed">
                  Get a quick rough estimate for your custom label printing requirements. For exact bulk pricing, please contact our sales team.
                </p>
              </div>

              <div className="mt-12 relative z-10">
                <AnimatePresence mode="wait">
                  {estimate !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="bg-white/10 p-6 rounded border border-white/20 backdrop-blur-sm"
                    >
                      <p className="text-xs uppercase tracking-wider text-gray-300 mb-2">Estimated Cost</p>
                      <p className="text-3xl font-serif text-[#D4AF37]">₹{estimate.toLocaleString('en-IN', { maximumFractionDigits: 2 })}</p>
                      <p className="text-[10px] text-gray-400 mt-2">*This is an estimate. For an exact price, please provide us your contact number.</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="md:col-span-3 p-10 lg:p-12 relative z-10">
              <form onSubmit={handleCalculate} className="space-y-6">
                
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500 font-medium">Material Type</label>
                  <div className="relative">
                    <select
                      className="w-full bg-transparent border-b-2 border-gray-300 text-black pb-2 focus:outline-none focus:border-[#092E20] transition-colors appearance-none cursor-pointer pr-8"
                      value={material}
                      onChange={(e) => setMaterial(e.target.value)}
                    >
                      {MATERIALS.map(m => (
                        <option key={m.id} value={m.id} className="bg-white">{m.name}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                  </div>
                  <p className="text-sm text-[#092E20] mt-2 font-medium">
                    Thickness: {MATERIALS.find(m => m.id === material)?.thickness}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-500 font-medium">Width (mm)</label>
                    <input
                      type="number"
                      required
                      min="10"
                      className="w-full bg-transparent border-b-2 border-gray-300 text-black pb-2 focus:outline-none focus:border-[#092E20] transition-colors"
                      value={width}
                      onChange={(e) => setWidth(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-wider text-gray-500 font-medium">Height (mm)</label>
                    <input
                      type="number"
                      required
                      min="10"
                      className="w-full bg-transparent border-b-2 border-gray-300 text-black pb-2 focus:outline-none focus:border-[#092E20] transition-colors"
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-wider text-gray-500 font-medium">Quantity</label>
                  <input
                    type="number"
                    required
                    min="100"
                    step="100"
                    className="w-full bg-transparent border-b-2 border-gray-300 text-black pb-2 focus:outline-none focus:border-[#092E20] transition-colors"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>

                <div className="pt-6">
                  <button
                    type="submit"
                    className="w-full bg-[#092E20] text-white py-4 rounded font-medium hover:bg-[#062116] transition-all shadow-lg hover:shadow-[0_0_20px_rgba(9,46,32,0.4)] uppercase tracking-wider text-sm"
                  >
                    Calculate Estimate
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
