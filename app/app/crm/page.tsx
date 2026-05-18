'use client';

import { useState, useEffect } from 'react';

interface Lead {
  name: string;
  company: string;
  phone: string;
  status: string;
  followup: string;
}

export default function CRMPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('New');
  const [followup, setFollowup] = useState('');

  useEffect(() => {
    const savedLeads = localStorage.getItem('ve-leads');

    if (savedLeads) {
      setLeads(JSON.parse(savedLeads));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('ve-leads', JSON.stringify(leads));
  }, [leads]);

  const addLead = () => {
    if (!name || !phone) return;

    const newLead = {
      name,
      company,
      phone,
      status,
      followup,
    };

    setLeads([newLead, ...leads]);

    setName('');
    setCompany('');
    setPhone('');
    setStatus('New');
    setFollowup('');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold text-[#092E20] mb-8">
          Vaishnavi Enterprise CRM
        </h1>

        <div className="bg-white rounded-2xl shadow p-6 mb-10">

          <div className="grid md:grid-cols-2 gap-4">

            <input
              placeholder="Customer Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <input
              placeholder="Company Name"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <input
              placeholder="Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="border p-3 rounded-xl"
            />

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border p-3 rounded-xl"
            >
              <option>New</option>
              <option>Quotation Sent</option>
              <option>Follow Up</option>
              <option>Closed</option>
            </select>

            <input
              type="date"
              value={followup}
              onChange={(e) => setFollowup(e.target.value)}
              className="border p-3 rounded-xl"
            />

          </div>

          <button
            onClick={addLead}
            className="mt-6 bg-[#092E20] text-white px-6 py-3 rounded-xl"
          >
            Add Lead
          </button>

        </div>

        <div className="space-y-4">

          {leads.map((lead, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow p-6"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div>
                  <h2 className="text-2xl font-semibold">
                    {lead.name}
                  </h2>

                  <p>{lead.company}</p>

                  <p>{lead.phone}</p>

                  <p className="mt-2">
                    Status:
                    <span className="font-semibold ml-2">
                      {lead.status}
                    </span>
                  </p>

                  <p>
                    Follow Up:
                    <span className="font-semibold ml-2">
                      {lead.followup || 'Not Set'}
                    </span>
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">

                  <a
                    href={`tel:${lead.phone}`}
                    className="bg-green-600 text-white px-4 py-2 rounded-xl"
                  >
                    Call
                  </a>

                  <a
                    href={`https://wa.me/91${lead.phone}`}
                    target="_blank"
                    className="bg-green-500 text-white px-4 py-2 rounded-xl"
                  >
                    WhatsApp
                  </a>

                  <a
                    href={`https://wa.me/91${lead.phone}?text=Hello ${lead.name}, sharing Vaishnavi Enterprise company introduction.`}
                    target="_blank"
                    className="bg-[#092E20] text-white px-4 py-2 rounded-xl"
                  >
                    Send Intro
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}
