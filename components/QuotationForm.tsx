'use client';

import { useState } from 'react';
import materials from '@/app/data/products';

export default function QuotationForm() {
  const [selectedProduct, setSelectedProduct] = useState(materials[0]);

  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');

  const subtotal =
    Number(quantity || 0) * Number(rate || 0);

  const gstAmount = subtotal * 0.18;

  const total = subtotal + gstAmount;

  return (
    <section className="py-20 bg-[#F8F8F8]">
      <div className="max-w-5xl mx-auto px-4">

        <div className="mb-10 text-center">
          <h2 className="text-4xl font-serif text-[#092E20]">
            Instant Quotation Generator
          </h2>

          <p className="text-gray-600 mt-3">
            Generate professional quotations instantly
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-8">

          <div className="space-y-6">

            <div>
              <label className="block text-sm font-medium mb-2">
                Material
              </label>

              <select
                className="w-full border rounded-lg p-3"
                onChange={(e) => {
                  const product = materials.find(
                    (p) => p.name === e.target.value
                  );

                  if (product) setSelectedProduct(product);
                }}
              >
                {materials.map((product) => (
                  <option key={product.name}>
                    {product.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Quantity
              </label>

              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                className="w-full border rounded-lg p-3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Rate Per Nos
              </label>

              <input
                type="number"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="Enter rate"
                className="w-full border rounded-lg p-3"
              />
            </div>

          </div>

          <div className="bg-[#092E20] text-white rounded-2xl p-8 space-y-5">

            <h3 className="text-2xl font-semibold">
              Quotation Summary
            </h3>

            <div className="flex justify-between">
              <span>HSN Code</span>
              <span>{selectedProduct.hsn}</span>
            </div>

            <div className="flex justify-between">
              <span>GST</span>
              <span>{selectedProduct.gst}%</span>
            </div>

            <div className="flex justify-between">
              <span>Unit</span>
              <span>{selectedProduct.unit}</span>
            </div>

            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹ {subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>GST Amount</span>
              <span>₹ {gstAmount.toFixed(2)}</span>
            </div>

            <div className="border-t border-white/20 pt-4 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹ {total.toFixed(2)}</span>
            </div>

            <button className="w-full bg-[#D4AF37] text-[#092E20] py-4 rounded-xl font-semibold hover:opacity-90 transition">
              Generate Quotation PDF
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}
