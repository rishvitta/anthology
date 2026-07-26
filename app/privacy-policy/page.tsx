import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Anthology Solutions Inc.',
};

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-16 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl font-light mb-8">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none text-ink">
          <p className="text-ink-mid mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="mb-6 text-ink-mid">
            Anthology Solutions Inc. ("we", "us", "our", or "Company") operates www.anthology.ooo (hereinafter referred to as the "Service").
          </p>
          <p className="mb-6 text-ink-mid">
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Information Collection and Use</h2>
          <p className="mb-6 text-ink-mid">
            We collect several different types of information for various purposes to provide and improve our Service to you.
          </p>
          <h3 className="text-xl font-semibold mt-8 mb-4">Types of Data Collected</h3>
          <ul className="list-disc pl-6 mb-6 text-ink-mid space-y-2">
            <li>Personal Data: Name, email address, organisation, phone number (if provided)</li>
            <li>Usage Data: Automatically collected when using the Service (e.g., pages visited, time spent)</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Use of Data</h2>
          <p className="mb-6 text-ink-mid">
            Anthology Solutions Inc. uses the collected data for various purposes:
          </p>
          <ul className="list-disc pl-6 mb-6 text-ink-mid space-y-2">
            <li>To provide and maintain our Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features</li>
            <li>To provide customer support</li>
            <li>To gather analysis or valuable information so we can improve our Service</li>
            <li>To monitor the usage of our Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Us</h2>
          <p className="mb-6 text-ink-mid">
            If you have any questions about this Privacy Policy, please contact us at rish@anthology.ooo.
          </p>
        </div>
      </div>
    </section>
  );
}
