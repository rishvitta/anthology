import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Anthology Solutions Inc.',
};

export default function TermsOfService() {
  return (
    <section className="pt-32 pb-16 px-[5%]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-5xl font-light mb-8">Terms of Service</h1>
        <div className="prose prose-sm max-w-none text-ink">
          <p className="text-ink-mid mb-6">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Agreement to Terms</h2>
          <p className="mb-6 text-ink-mid">
            These Terms of Service and all related policies, rules and regulations constitute the entire agreement between you and Anthology Solutions Inc. with respect to the www.anthology.ooo Service and supersede all prior negotiations, representations or agreements, both written and oral.
          </p>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Use License</h2>
          <p className="mb-6 text-ink-mid">
            Permission is granted to temporarily download one copy of the materials (information or software) from www.anthology.ooo for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul className="list-disc pl-6 mb-6 text-ink-mid space-y-2">
            <li>Modifying or copying the materials</li>
            <li>Using the materials for any commercial purpose, or for any public display</li>
            <li>Attempting to decompile or reverse engineer any software contained on www.anthology.ooo</li>
            <li>Removing any copyright or other proprietary notations from the materials</li>
            <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
          </ul>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Disclaimer</h2>
          <p className="mb-6 text-ink-mid">
            The materials on www.anthology.ooo are provided on an 'as is' basis. Anthology Solutions Inc. makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Limitations</h2>
          <p className="mb-6 text-ink-mid">
            In no event shall Anthology Solutions Inc. or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on www.anthology.ooo.
          </p>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Accuracy of Materials</h2>
          <p className="mb-6 text-ink-mid">
            The materials appearing on www.anthology.ooo could include technical, typographical, or photographic errors. Anthology Solutions Inc. does not warrant that any of the materials on www.anthology.ooo are accurate, complete or current.
          </p>
          <h2 className="text-2xl font-semibold mt-12 mb-4">Contact Us</h2>
          <p className="mb-6 text-ink-mid">
            If you have any questions about these Terms of Service, please contact us at rish@anthology.ooo.
          </p>
        </div>
      </div>
    </section>
  );
}
