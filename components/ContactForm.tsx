'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    organisation: '',
    email: '',
    serviceInterest: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          fullName: '',
          organisation: '',
          email: '',
          serviceInterest: '',
          message: '',
        });
        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-paper p-8 text-center">
        <p className="text-lg font-light text-ink-mid">
          Thank you for reaching out. We'll get back to you soon.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl">
      <div className="space-y-0 border-t border-rule">
        <div className="py-5 border-b border-rule">
          <label className="text-xs font-medium tracking-widest uppercase text-ink-light block mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full text-base font-light text-ink bg-transparent border-none outline-none placeholder:text-rule"
          />
        </div>

        <div className="py-5 border-b border-rule">
          <label className="text-xs font-medium tracking-widest uppercase text-ink-light block mb-2">
            Organisation
          </label>
          <input
            type="text"
            name="organisation"
            value={formData.organisation}
            onChange={handleChange}
            placeholder="Your organisation"
            required
            className="w-full text-base font-light text-ink bg-transparent border-none outline-none placeholder:text-rule"
          />
        </div>

        <div className="py-5 border-b border-rule">
          <label className="text-xs font-medium tracking-widest uppercase text-ink-light block mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="your@email.com"
            required
            className="w-full text-base font-light text-ink bg-transparent border-none outline-none placeholder:text-rule"
          />
        </div>

        <div className="py-5 border-b border-rule">
          <label className="text-xs font-medium tracking-widest uppercase text-ink-light block mb-2">
            Service Interest
          </label>
          <select
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            required
            className="w-full text-base font-light text-ink bg-transparent border-none outline-none"
          >
            <option value="">Select a service</option>
            <option value="Product Development">Product Development</option>
            <option value="AI Governance">AI Governance</option>
            <option value="Staff Augmentation">Staff Augmentation</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>

        <div className="py-5 border-b border-rule">
          <label className="text-xs font-medium tracking-widest uppercase text-ink-light block mb-2">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project or requirement"
            required
            className="w-full text-base font-light text-ink bg-transparent border-none outline-none placeholder:text-rule min-h-24 resize-none"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="mt-8 w-full text-xs font-medium tracking-widest uppercase text-white bg-ink px-9 py-4 transition-all hover:bg-ink-mid hover:translate-y-[-2px] disabled:opacity-50"
      >
        {loading ? 'Sending...' : 'Send Enquiry'}
      </button>
    </form>
  );
}
