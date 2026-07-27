import ClientCard from '@/components/ClientCard';

const CLIENTS = [
  {
    name: 'CVS Health',
    industry: 'Healthcare',
    description: 'Largest pharmacy health care provider in the US, serving millions of patients with integrated health solutions and digital innovation.',
    logoUrl: '/logos/cvs-health.svg',
  },
  {
    name: 'Catalent Pharmaceuticals',
    industry: 'Pharmaceutical',
    description: 'Leading pharmaceutical and CDMO services provider delivering advanced clinical and commercial manufacturing solutions globally.',
    logoUrl: '/logos/catalent.svg',
  },
  {
    name: 'Solventum',
    industry: 'Healthcare Technology',
    description: 'Global healthcare company providing AI-powered software, IT solutions, and healthcare services to improve patient outcomes.',
    logoUrl: '/logos/solventum.svg',
  },
  {
    name: 'Heart & Vascular Care of Georgia',
    industry: 'Cardiovascular Care',
    description: 'Specialist cardiology practice delivering cardiovascular diagnostics, treatment, and preventative care.',
    logoUrl: '/logos/havcog.svg',
  },
  {
    name: 'Caresource',
    industry: 'Healthcare Insurance',
    description: 'Managed care provider serving Medicaid and Marketplace members with innovative health plans and community-focused solutions.',
    logoUrl: '/logos/caresource.svg',
  },
  {
    name: 'United Technologies',
    industry: 'Aerospace & Defense (Government)',
    description: 'Leading aerospace, defense, and security company supporting U.S. government missions with advanced technology and engineering.',
    logoUrl: '/logos/united-technologies.svg',
  },
  {
    name: 'Raytheon',
    industry: 'Aerospace & Defense (Government)',
    description: 'Major defense contractor providing advanced systems and solutions to U.S. and international defense and security customers.',
    logoUrl: '/logos/raytheon.svg',
  },
];

export const metadata = {
  title: 'Clients | Anthology Solutions',
  description: 'Trusted by leading healthcare, pharmaceutical, and government organizations.',
};

export default function ClientsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink text-paper pt-40 pb-28 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="rule-accent"></div>
              <span className="eyebrow">Our Clients</span>
            </div>
          </div>
          <h1 className="display text-5xl lg:text-7xl mb-6 max-w-3xl">
            Trusted by <em className="italic font-normal text-accent-soft">leading</em> organizations
          </h1>
          <p className="text-lg font-light leading-relaxed text-paper/80 max-w-2xl">
            Anthology has partnered with innovative healthcare, pharmaceutical, and government organizations to deliver transformative technology solutions and strategic advisory services.
          </p>
        </div>
      </section>

      {/* CLIENTS GRID */}
      <section className="bg-paper py-28 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {CLIENTS.map((client) => (
              <ClientCard key={client.name} {...client} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-paper-dark py-24 px-[5%]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="display text-4xl lg:text-5xl mb-6">
            Ready to partner with Anthology?
          </h2>
          <p className="text-base font-light leading-relaxed text-ink-mid max-w-2xl mx-auto mb-8">
            Whether you're looking to transform a product, establish AI governance, or augment your team with specialized talent, we'd like to hear from you.
          </p>
          <a href="/#contact" className="btn btn-primary">
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
