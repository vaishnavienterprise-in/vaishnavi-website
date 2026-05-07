'use client';

import { useState } from 'react';

export default function QuotationPage() {
  const [customer, setCustomer] = useState('');
  const [material, setMaterial] = useState('Chromo');
  const [quantity, setQuantity] = useState('');
  const [rate, setRate] = useState('');
  const [additionalNote, setAdditionalNote] = useState('');

  const generatePDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white p-8 text-black">
      <div className="max-w-4xl mx-auto border border-gray-300 p-8 rounded-lg">

        <div className="flex justify-between items-start border-b pb-6">
          <div>
            <h1 className="text-3xl font-bold text-[#092E20]">
              Vaishnavi Enterprise
            </h1>

            <p className="mt-2 text-sm">
              GSTIN: 24ESJPS9568G2ZX
            </p>

            <p className="text-sm">
              Self Adhesive Label Manufacturer
            </p>
          </div>

          <div className="text-right">
            <h2 className="text-2xl font-bold">
              QUOTATION
            </h2>

            <p className="text-sm mt-2">
              HSN: 48211020
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-8">

          <div>
            <label className="block text-sm font-semibold mb-2">
              Customer Name
            </label>

            <input
              type="text"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Material
            </label>

            <select
              value={material}
              onChange={(e) => setMaterial(e.target.value)}
              className="w-full border p-3 rounded"
            >
              <option>Chromo</option>
              <option>White PP</option>
              <option>Silver PP</option>
              <option>Hologram</option>
              <option>Barcode</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Quantity (Nos.)
            </label>

            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full border p-3 rounded"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">
              Rate
            </label>

            <input
              type="number"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full border p-3 rounded"
            />
          </div>
        </div>

        <div className="mt-8">
          <table className="w-full border border-collapse">
            <thead className="bg-[#092E20] text-white">
              <tr>
                <th className="border p-3">Material</th>
                <th className="border p-3">Qty</th>
                <th className="border p-3">Rate</th>
                <th className="border p-3">GST</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="border p-3">{material}</td>
                <td className="border p-3">{quantity}</td>
                <td className="border p-3">₹ {rate}</td>
                <td className="border p-3">18%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <label className="block text-sm font-semibold mb-2">
            Additional Notes
          </label>

          <textarea
            value={additionalNote}
            onChange={(e) => setAdditionalNote(e.target.value)}
            className="w-full border p-3 rounded min-h-[120px]"
          />
        </div>

        <div className="mt-10 border-t pt-6">
          <h3 className="font-bold mb-4">
            Terms & Conditions
          </h3>

          <ul className="space-y-2 text-sm list-disc pl-5">
            <li>Prices mentioned are exclusive of GST, transportation, and other applicable taxes unless otherwise specified.</li>
            <li>Delivery timeline applicable after order confirmation and advance payment.</li>
            <li>Material once approved and supplied will not be taken back or exchanged.</li>
            <li>50% advance with order confirmation and balance against dispatch.</li>
            <li>Quantity/specification variation may affect pricing and delivery.</li>
          </ul>
        </div>

        <div className="mt-10 border-t pt-6">
          <h3 className="font-bold mb-4">
            Bank Details
          </h3>

          <div className="text-sm space-y-1">
            <p>BANK NAME: Yes Bank</p>
            <p>ACC. NO.: 039461900006152</p>
            <p>IFSC: YESB0000394</p>
          </div>
        </div>

        <div className="mt-10 flex gap-4">
          <button
            onClick={generatePDF}
            className="bg-[#092E20] text-white px-6 py-3 rounded"
          >
            Download PDF
          </button>
        </div>

      </div>
    </div>
  );
}
