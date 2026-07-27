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
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">1. Introduction and Definitions</h2>
            <p className="text-ink-mid">
              Anthology Solutions Inc. ("Company," "we," "us," "our," or "Anthology") operates the www.anthology.ooo website and associated services (the "Service"). This Privacy Policy explains how we collect, use, disclose, safeguard, and otherwise handle your information when you visit our website, use our services, and interact with us through various channels.
            </p>
            <p className="text-ink-mid mt-4">
              We are committed to protecting your privacy and ensuring you have a positive experience on our website. Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do not use our Service. Your access and use of our Service indicates your acceptance of this Privacy Policy and our data handling practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">2. Information Collection and Categories</h2>

            <h3 className="text-lg font-semibold mt-8 mb-4 text-ink">2.1 Information You Voluntarily Provide</h3>
            <p className="text-ink-mid mb-4">We collect information you voluntarily provide to us through various methods:</p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li><strong>Contact Forms:</strong> Full name, email address, organization, phone number, service interests, and message content</li>
              <li><strong>Direct Communication:</strong> Information provided via phone, email, or in-person meetings</li>
              <li><strong>Job Applications:</strong> Resume, cover letter, contact information, and professional qualifications (if applicable)</li>
              <li><strong>Subscription Services:</strong> Email addresses for newsletter sign-ups or service notifications</li>
              <li><strong>Feedback and Surveys:</strong> Responses to surveys, feedback forms, or user experience questionnaires</li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-4 text-ink">2.2 Automatically Collected Information</h3>
            <p className="text-ink-mid mb-4">We automatically collect certain information about your interaction with our Service:</p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li><strong>Technical Information:</strong> IP address, browser type and version, operating system, and device type</li>
              <li><strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, search queries, and referring/exit pages</li>
              <li><strong>Location Data:</strong> General geographic location (country/state level) based on IP address</li>
              <li><strong>Cookies and Tracking:</strong> Information from cookies, web beacons, and similar tracking technologies (see Section 8)</li>
              <li><strong>Performance Data:</strong> Website performance metrics, error logs, and crash reports</li>
            </ul>

            <h3 className="text-lg font-semibold mt-8 mb-4 text-ink">2.3 Information from Third Parties</h3>
            <p className="text-ink-mid">
              We may receive information about you from third-party sources, including business partners, public databases, data brokers, and marketing partners. We use this information only when legally permitted and in compliance with applicable data protection laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">3. Purpose and Legal Basis for Data Processing</h2>
            <p className="text-ink-mid mb-4">We process your personal information for the following purposes and legal bases:</p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li><strong>Service Delivery:</strong> To respond to inquiries, provide customer support, and fulfill contractual obligations</li>
              <li><strong>Business Communications:</strong> To send information about our services, products, capabilities, and updates</li>
              <li><strong>Service Improvement:</strong> To analyze usage patterns, optimize website functionality, and enhance user experience</li>
              <li><strong>Security and Compliance:</strong> To detect and prevent fraud, security threats, and unauthorized access</li>
              <li><strong>Legal Obligations:</strong> To comply with applicable laws, regulations, and governmental requests</li>
              <li><strong>Marketing and Outreach:</strong> To send promotional communications (with your prior consent)</li>
              <li><strong>Analytics and Research:</strong> To conduct statistical analysis and improve our products/services</li>
              <li><strong>Rights Protection:</strong> To establish, exercise, or defend legal claims and protect our rights</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">4. Data Security Measures</h2>
            <p className="text-ink-mid mb-4">
              We implement comprehensive technical, administrative, and organizational security measures to protect your personal information:
            </p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li><strong>Encryption:</strong> SSL/TLS encryption for data in transit; encrypted storage for sensitive data at rest</li>
              <li><strong>Access Controls:</strong> Role-based access controls and authentication mechanisms to restrict data access</li>
              <li><strong>Database Security:</strong> Secure database configuration with firewalls and intrusion detection systems</li>
              <li><strong>Regular Audits:</strong> Periodic security assessments and vulnerability testing</li>
              <li><strong>Employee Training:</strong> Staff training on data protection and privacy best practices</li>
              <li><strong>Incident Response:</strong> Procedures for detecting and responding to security incidents</li>
            </ul>
            <p className="text-ink-mid mt-4">
              However, no security system is impenetrable. While we strive to protect your information using industry-standard security practices, we cannot guarantee absolute security against all threats, breaches, or unauthorized access.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">5. Data Retention and Deletion</h2>
            <p className="text-ink-mid mb-4">
              We retain personal information only as long as necessary to fulfill the purposes outlined in this Privacy Policy or as required by law:
            </p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li><strong>Contact Form Submissions:</strong> Retained for 3 years for business communication and follow-up purposes</li>
              <li><strong>Website Analytics:</strong> Automatically aggregated and anonymized after 12 months</li>
              <li><strong>Marketing Communications:</strong> Retained until you unsubscribe</li>
              <li><strong>Legal/Compliance Records:</strong> Retained for the duration required by applicable law (often 7 years)</li>
            </ul>
            <p className="text-ink-mid mt-4">
              You may request deletion of your personal information at any time by contacting us at info@anthology.ooo, subject to legal retention requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">6. Third-Party Service Providers and Data Sharing</h2>
            <p className="text-ink-mid mb-4">
              We may share your personal information with third-party service providers who assist us in operating our website and providing services:
            </p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li><strong>Supabase (supabase.com):</strong> Cloud database hosting and storage services</li>
              <li><strong>Brevo (brevo.com):</strong> Email service provider for contact form responses and communications</li>
              <li><strong>Vercel (vercel.com):</strong> Website hosting, deployment, and CDN services</li>
              <li><strong>Google Analytics:</strong> Website analytics and traffic analysis</li>
            </ul>
            <p className="text-ink-mid mt-4">
              All third-party service providers are contractually bound to:
            </p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li>Protect your personal information with security measures equivalent to ours</li>
              <li>Use your information only for the specific purposes we authorize</li>
              <li>Not disclose your information to unauthorized parties</li>
              <li>Comply with applicable data protection laws and regulations</li>
            </ul>
            <p className="text-ink-mid mt-4">
              We do not sell or rent your personal information to third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">7. Your Privacy Rights and Choices</h2>
            <p className="text-ink-mid mb-4">
              Depending on your location, you have the following rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of all personal information we hold about you</li>
              <li><strong>Right to Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Right to Deletion:</strong> Request deletion of your personal data, subject to legal obligations</li>
              <li><strong>Right to Portability:</strong> Request your data in a structured, portable format</li>
              <li><strong>Right to Opt-Out:</strong> Opt out of marketing communications and promotional emails</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw any consent you previously provided</li>
              <li><strong>Right to Restrict Processing:</strong> Request restriction of data processing in certain circumstances</li>
            </ul>
            <p className="text-ink-mid mt-4">
              To exercise any of these rights, please contact us at info@anthology.ooo with a detailed request. We will respond within 30 days (or as required by applicable law).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">8. Cookies, Web Beacons, and Tracking Technologies</h2>
            <p className="text-ink-mid mb-4">
              Our website uses cookies and similar tracking technologies to enhance your experience:
            </p>
            <ul className="list-disc pl-6 text-ink-mid space-y-2">
              <li><strong>Essential Cookies:</strong> Required for website functionality (authentication, security)</li>
              <li><strong>Analytics Cookies:</strong> Collect information about how you use our website</li>
              <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
            </ul>
            <p className="text-ink-mid mt-4">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect certain website functionality. By continuing to use our Service, you consent to our use of cookies in accordance with this Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">9. GDPR and EU Data Subject Rights</h2>
            <p className="text-ink-mid">
              If you are located in the European Union, United Kingdom, or EEA, you have additional rights under the General Data Protection Regulation (GDPR). We are the data controller for your information. You have the right to lodge a complaint with your local data protection authority if you believe we have violated your privacy rights. Our representative for GDPR compliance can be contacted at info@anthology.ooo.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">10. CCPA and California Consumer Rights</h2>
            <p className="text-ink-mid">
              If you are a California resident, you have rights under the California Consumer Privacy Act (CCPA). You may request disclosure of what personal information we collect, use, or share; request deletion of your personal information; and opt out of any selling of your personal information (which we do not do).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">11. Data Breach Notification</h2>
            <p className="text-ink-mid">
              In the event of a data breach or unauthorized access to your personal information, we will notify affected individuals within 30 days (or as required by applicable law) and take appropriate remedial action. We maintain incident response procedures to minimize harm and protect your rights.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">12. Children's Privacy</h2>
            <p className="text-ink-mid">
              Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children under 18. If we become aware that we have collected personal information from a child without verifiable parental consent, we will immediately delete such information and comply with applicable children's privacy laws.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">13. International Data Transfers</h2>
            <p className="text-ink-mid">
              Your information may be processed and stored in the United States or other countries where our service providers are located. These countries may have different data protection laws than your country of residence. By using our Service, you consent to the transfer of your information to countries outside your country of residence for processing and storage.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">14. Third-Party Links and Services</h2>
            <p className="text-ink-mid">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy practices or content of external sites. Please review the privacy policies of any third-party sites before providing your information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">15. Changes to This Privacy Policy</h2>
            <p className="text-ink-mid">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of material changes by updating the "Last updated" date and may provide additional notice. Your continued use of the Service following the posting of revised Privacy Policy means you accept and agree to the changes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mt-12 mb-4 text-ink">16. Contact Us</h2>
            <p className="text-ink-mid mb-4">
              If you have questions about this Privacy Policy, your personal information, or our privacy practices, please contact us:
            </p>
            <div className="bg-paper-dark p-6 rounded-lg mt-4">
              <p className="text-ink font-semibold">Anthology Solutions Inc.</p>
              <p className="text-ink">Irving, Texas, USA</p>
              <p className="text-ink">Email: info@anthology.ooo</p>
              <p className="text-ink">Phone: +1 (214) 214-7474</p>
              <p className="text-ink mt-4 text-sm">Response Time: We aim to respond to all privacy requests within 30 days</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
