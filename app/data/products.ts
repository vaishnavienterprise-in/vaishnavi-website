'use client';

import { useState } from 'react';
import { materials } from '@/app/data/products';

export default function QuotationForm() {
  const [selectedProduct, setSelectedProduct] = useState(materials[0]);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-[#092E20]">
        Quotation Generator
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Customer Name */}
        <div>
          <label className="block mb-2 font-medium">
            Customer Name
          </label>

          <input
            type="text"
            placeholder="Enter customer name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block mb-2 font-medium">
            Company Name
          </label>

          <input
            type="text"
            placeholder="Enter company name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>

        {/* Material */}
        <div>
          <label className="block mb-2 font-medium">
            Material
          </label>

          <select
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            value={selectedProduct.name}
            onChange={(e) => {
              const selected = materials.find(
                (item) => item.name === e.target.value
              );

              if (selected) {
                setSelectedProduct(selected);
              }
            }}
          >
            {materials.map((item) => (
              <option key={item.name} value={item.name}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        {/* HSN */}
        <div>
          <label className="block mb-2 font-medium">
            HSN Code
          </label>

          <input
            type="text"
            value={selectedProduct.hsn}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100"
          />
        </div>

        {/* GST */}
        <div>
          <label className="block mb-2 font-medium">
            GST %
          </label>

          <input
            type="text"
            value={selectedProduct.gst}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100"
          />
        </div>

        {/* Unit */}
        <div>
          <label className="block mb-2 font-medium">
            Unit
          </label>

          <input
            type="text"
            value={selectedProduct.unit}
            readOnly
            className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100"
          />
        </div>
      </div>

      <button className="mt-8 bg-[#092E20] text-white px-6 py-3 rounded-xl hover:bg-[#0d402c] transition">
        Generate Quotation
      </button>
    </div>
  );
}
