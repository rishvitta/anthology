import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Anthology Solutions Inc.',
};

export default function PrivacyPolicy() {
  return (
    <section className="pt-32 pb-16 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl font-light mb-8">Privacy Policy</h1>
        <div className="prose prose-sm max-w-none text-ink space-y-6">
          <p className="text-ink-mid text-sm">
            Last updated: July 26, 2025
          </p>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">1. Introduction</h2>
            <p className="text-ink-mid">
              Anthology Solutions Inc. ("Company," "we," "us," or "our") operates the www.anthology.ooo website (the "Service"). This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and interact with our services.
            </p>
            <p className="text-ink-mid mt-4">
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Service. Your use of our Service indicates your acceptance of this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">2. Information We Collect</h2>
            <h3 className="text-lg font-semibold mt-8 mb-4 text-ink">2.1 Personal Information You Provide</h3>
            <p className="text-ink-mid mb-4">When you use our contact form or engage with us, we may collect:</p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li>Full name and email address</li>
              <li>Organization or company name</li>
              <li>Phone number (if provided)</li>
              <li>Message content and inquiries</li>
              <li>Any other information you voluntarily provide</li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-4 text-ink">2.2 Automatically Collected Information</h3>
            <p className="text-ink-mid mb-4">We automatically collect certain information about your visit:</p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on each page</li>
              <li>Referral source</li>
              <li>Device information (operating system, device type)</li>
              <li>General geographic location (country level)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">3. How We Use Your Information</h2>
            <p className="text-ink-mid mb-4">We use the information we collect for the following purposes:</p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To send you information about our services and capabilities</li>
              <li>To improve and optimize our website and user experience</li>
              <li>To monitor website performance and security</li>
              <li>To detect, prevent, and address technical or security issues</li>
              <li>To comply with legal obligations and protect our rights</li>
              <li>To send you marketing communications (with your consent)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">4. Data Security</h2>
            <p className="text-ink-mid">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Your information is stored securely in our Supabase database and is encrypted in transit using SSL/TLS protocols. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">5. Data Retention</h2>
            <p className="text-ink-mid">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law. Contact form submissions are retained for business communication purposes and may be retained longer for legal compliance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">6. Third-Party Services</h2>
            <p className="text-ink-mid mb-4">We use third-party services to support our operations:</p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li><strong>Supabase:</strong> Database hosting and storage</li>
              <li><strong>Brevo:</strong> Email service for contact form responses</li>
              <li><strong>Vercel:</strong> Website hosting and deployment</li>
            </ul>
            <p className="text-ink-mid mt-4">
              These third-party service providers are contractually obligated to protect your data and may not use your information for any purpose other than providing services to us.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">7. Your Rights and Choices</h2>
            <p className="text-ink-mid mb-4">Depending on your location, you may have certain rights regarding your personal information:</p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li>Right to access: Request a copy of your personal data</li>
              <li>Right to correction: Request correction of inaccurate information</li>
              <li>Right to deletion: Request deletion of your personal data</li>
              <li>Right to opt-out: Opt-out of marketing communications</li>
            </ul>
            <p className="text-ink-mid mt-4">
              To exercise these rights, please contact us at rish@anthology.ooo with your request.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">8. Cookies and Tracking Technologies</h2>
            <p className="text-ink-mid">
              Our website may use cookies and similar tracking technologies to enhance your browsing experience. You can control cookie settings through your browser preferences. However, disabling cookies may affect certain functionality of our website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">9. Children's Privacy</h2>
            <p className="text-ink-mid">
              Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child without parental consent, we will delete such information immediately.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">10. International Data Transfers</h2>
            <p className="text-ink-mid">
              Your information may be processed and stored in the United States or other countries where our service providers are located. By using our Service, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">11. Changes to This Privacy Policy</h2>
            <p className="text-ink-mid">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the "Last updated" date and may provide additional notice. Your continued use of the Service following the posting of revised Privacy Policy means you accept and agree to the changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">12. Contact Us</h2>
            <p className="text-ink-mid mb-4">
              If you have questions about this Privacy Policy, your personal information, or our privacy practices, please contact us:
            </p>
            <div className="bg-paper-dark p-6 rounded mt-4">
              <p className="text-ink font-semibold">Anthology Solutions Inc.</p>
              <p className="text-ink">Irving, Texas, USA</p>
              <p className="text-ink">Email: rish@anthology.ooo</p>
              <p className="text-ink">Phone: +1 (214) 214-7474</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
