'use client';

import { useState } from 'react';

type Lead = {
  id: number;
  customer: string;
  company: string;
  phone: string;
  product: string;
  status: string;
};

export default function LeadManager() {
  const [leads, setLeads] = useState<Lead[]>([]);

  const [customer, setCustomer] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [product, setProduct] = useState('');
  const [status, setStatus] = useState('New');

  const addLead = () => {
    if (!customer || !phone) return;

    const newLead: Lead = {
      id: Date.now(),
      customer,
      company,
      phone,
      product,
      status,
    };

    setLeads([newLead, ...leads]);

    setCustomer('');
    setCompany('');
    setPhone('');
    setProduct('');
    setStatus('New');
  };

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <h2 className="text-3xl font-bold mb-6 text-[#092E20]">
            Lead Manager
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <input
              type="text"
              placeholder="Customer Name"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-3 rounded-lg"
            />

            <input
              type="text"
              placeholder="Product Inquiry"
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              className="border p-3 rounded-lg"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border p-3 rounded-lg"
            >
              <option>New</option>
              <option>Follow-up</option>
              <option>Quotation Sent</option>
              <option>Closed</option>
            </select>

          </div>

          <button
            onClick={addLead}
            className="mt-6 bg-[#092E20] text-white px-6 py-3 rounded-xl"
          >
            Add Lead
          </button>
        </div>

        <div className="grid gap-4">

          {leads.map((lead) => (
            <div
              key={lead.id}
              className="bg-white rounded-2xl shadow-lg p-6"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                  <h3 className="text-2xl font-bold text-[#092E20]">
                    {lead.customer}
                  </h3>

                  <p className="text-gray-600">
                    {lead.company}
                  </p>

                  <p className="mt-2">
                    📞 {lead.phone}
                  </p>

                  <p>
                    📦 {lead.product}
                  </p>

                  <p className="mt-2 font-semibold">
                    Status: {lead.status}
                  </p>
                </div>

                <div className="flex gap-3">

                  <a
                    href={`tel:${lead.phone}`}
                    className="bg-green-600 text-white px-5 py-3 rounded-xl"
                  >
                    Call
                  </a>

                  <a
                    href={`https://wa.me/${lead.phone}`}
                    target="_blank"
                    className="bg-[#25D366] text-white px-5 py-3 rounded-xl"
                  >
                    WhatsApp
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
