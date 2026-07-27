import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import ClientCard from '@/components/ClientCard';
import ContactForm from '@/components/ContactForm';

const SERVICES = [
  {
    number: '01',
    title: 'Product Development',
    description:
      'We partner with organisations to design and build digital products from the ground up — or evolve existing platforms into modern, scalable solutions. Our approach is end-to-end: strategy, architecture, build, and launch.',
    items: [
      'Discovery, scoping & roadmap planning',
      'Full-stack web & mobile development',
      'UX/UI design & prototyping',
      'API design, integration & system architecture',
      'QA, testing & performance optimisation',
      'Post-launch support & iteration',
    ],
  },
  {
    number: '02',
    title: 'AI Governance',
    description:
      'As AI becomes central to every business function, the organisations that thrive will be those who deploy it responsibly. We are specialists in building the governance frameworks that make AI trustworthy, auditable, and compliant.',
    items: [
      'AI policy & governance framework design',
      'Risk assessment & bias auditing',
      'Regulatory compliance (EU AI Act & beyond)',
      'Ethical AI strategy & advisory',
      'AI procurement review & due diligence',
      'Executive & team AI literacy programmes',
    ],
  },
  {
    number: '03',
    title: 'Staff Augmentation',
    description:
      'The right people, at the right time. We provide highly skilled technology professionals on a flexible, scalable basis — taking the friction out of hiring and letting organisations move faster.',
    items: [
      'Software engineers & architects',
      'AI/ML engineers & data scientists',
      'Product managers & delivery leads',
      'QA engineers & DevOps specialists',
      'Short, mid & long-term engagements',
      'Global talent network, remote-first ready',
    ],
  },
];

const STAFF_AUG_FEATURES = [
  { title: 'Rapid Deployment', desc: 'We move quickly. From requirement brief to first day on-site or remote, our screening and placement process is streamlined.' },
  { title: 'Vetted Senior Talent', desc: 'Every professional in our network has been rigorously assessed — technically and culturally. We place talent, not just bodies.' },
  { title: 'Flexible Contracts', desc: 'From a two-week sprint to a multi-year programme, our engagement models are built around your reality, not ours.' },
];

const APPROACH_STEPS = [
  { num: '01', title: 'Discover', subtitle: 'Understand before we build', desc: 'Every engagement begins with deep discovery. We invest time understanding your business context, competitive landscape, and success metrics.' },
  { num: '02', title: 'Design', subtitle: 'Architecture with intention', desc: 'Whether designing a product, a governance framework, or an augmentation structure, we approach every decision with clarity and rigour.' },
  { num: '03', title: 'Deliver', subtitle: 'Execution without compromise', desc: 'We deliver — on time, on brief, and to a standard we are proud of. Our teams communicate proactively and operate with ownership.' },
  { num: '04', title: 'Govern', subtitle: 'Oversight that enables', desc: 'Good governance is not bureaucracy — it is the structure that lets organisations move with confidence and visibility.' },
  { num: '05', title: 'Evolve', subtitle: 'Partnerships that last', desc: 'Technology and business never stand still, and neither do we. Our engagements are designed to evolve as your needs evolve.' },
];

const FEATURED_CLIENTS = [
  {
    name: 'CVS Health',
    industry: 'Healthcare',
    description: 'Largest pharmacy health care provider in the US',
    logoUrl: 'https://www.cvshealth.com/favicon.ico',
  },
  {
    name: 'Catalent Pharmaceuticals',
    industry: 'Pharmaceutical',
    description: 'Leading pharmaceutical and CDMO services provider',
    logoUrl: 'https://www.catalent.com/favicon.ico',
  },
  {
    name: 'Solventum',
    industry: 'Healthcare Technology',
    description: 'Global healthcare company with AI-powered solutions',
    logoUrl: 'https://www.solventum.com/favicon.ico',
  },
  {
    name: 'HAVCOG',
    industry: 'Non-Profit Healthcare',
    description: 'Community health center network across US',
    logoUrl: 'https://www.havcog.org/favicon.ico',
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      {/* SERVICES */}
      <section id="services" className="bg-white py-28 px-[5%]">
        <div className="max-w-7xl mx-auto mb-20 pb-12 border-b border-rule">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-accent-primary"></div>
                <span className="text-xs font-medium tracking-widest uppercase text-ink-light">What We Do</span>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-serif text-5xl font-light leading-tight mb-6">Our Services</h2>
              <p className="text-base font-light leading-relaxed text-ink-mid max-w-2xl">
                From conception to deployment and beyond — Anthology delivers integrated technology services that let organisations build faster, scale smarter, and operate with confidence.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-rule">
          {SERVICES.map((service) => (
            <ServiceCard key={service.number} {...service} />
          ))}
        </div>
      </section>

      {/* STAFF AUGMENTATION */}
      <section className="bg-paper py-28 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-px bg-accent-primary"></div>
                <span className="text-xs font-medium tracking-widest uppercase text-ink-light">Staff Augmentation</span>
              </div>
            </div>
            <div className="lg:col-span-2">
              <h2 className="font-serif text-5xl font-light leading-tight mb-6">The right talent, when you need it</h2>
              <p className="text-base font-light leading-relaxed text-ink-mid max-w-2xl">
                Anthology's staff augmentation practice connects organisations with vetted, senior-level technology professionals. We handle screening, vetting, placement, and ongoing support.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STAFF_AUG_FEATURES.map((feature) => (
              <div key={feature.title}>
                <h3 className="font-serif text-2xl font-normal mb-4">{feature.title}</h3>
                <p className="text-sm font-light leading-relaxed text-ink-mid">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI GOVERNANCE SPECIALIZATION */}
      <section id="ai-governance" className="bg-white py-28 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-accent-primary"></div>
              <span className="text-xs font-medium tracking-widest uppercase text-ink-light">Our Specialisation</span>
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight">
              AI Governance for the <em className="italic font-normal">next decade</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 pb-12 border-b border-rule">
            <div>
              <h3 className="font-serif text-xl font-normal mb-4">Policy & Framework Design</h3>
              <p className="text-sm font-light leading-relaxed text-ink-mid">
                Custom AI governance policies built around your industry, risk appetite, and regulatory environment.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal mb-4">Auditing & Risk Assessment</h3>
              <p className="text-sm font-light leading-relaxed text-ink-mid">
                Systematic reviews of AI systems for bias, fairness, reliability, and accountability. Clear findings, clear recommendations.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal mb-4">Regulatory Compliance</h3>
              <p className="text-sm font-light leading-relaxed text-ink-mid">
                Preparation for EU AI Act obligations, sector-specific regulations, and emerging international frameworks.
              </p>
            </div>
            <div>
              <h3 className="font-serif text-xl font-normal mb-4">Executive Advisory</h3>
              <p className="text-sm font-light leading-relaxed text-ink-mid">
                Board-level and C-suite guidance on responsible AI adoption — from procurement decisions to public disclosure.
              </p>
            </div>
          </div>

          <blockquote className="font-serif text-2xl italic font-light leading-tight text-ink max-w-3xl">
            "Responsible AI is not a constraint on innovation — it is the foundation on which lasting innovation is built."
          </blockquote>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="bg-paper py-28 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-accent-primary"></div>
              <span className="text-xs font-medium tracking-widest uppercase text-ink-light">How We Work</span>
            </div>
            <h2 className="font-serif text-5xl font-light leading-tight">Our Approach</h2>
            <p className="text-base font-light leading-relaxed text-ink-mid max-w-2xl mt-8">
              We operate with the discipline of a consultancy and the directness of a partner. No jargon, no over-engineering, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {APPROACH_STEPS.map((step) => (
              <div key={step.num} className="p-6 border border-rule rounded-lg hover:border-accent-primary hover:bg-paper-dark transition-all duration-300">
                <span className="text-xs font-medium tracking-widest uppercase text-accent-primary block mb-4">
                  {step.num} — {step.subtitle}
                </span>
                <h3 className="font-serif text-xl font-normal mb-4">{step.title}</h3>
                <p className="text-xs font-light leading-relaxed text-ink-mid">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CLIENTS */}
      <section className="bg-white py-28 px-[5%]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 pb-12 border-b border-rule">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-accent-primary"></div>
              <span className="text-xs font-medium tracking-widest uppercase text-ink-light">Our Clients</span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div>
                <h2 className="font-serif text-5xl font-light leading-tight mb-4">Trusted partners</h2>
              </div>
              <div className="lg:col-span-2">
                <p className="text-base font-light leading-relaxed text-ink-mid max-w-2xl mb-4">
                  Anthology has partnered with innovative healthcare, pharmaceutical, and government organizations to deliver transformative technology solutions and strategic advisory services.
                </p>
                <a href="/clients" className="text-sm font-medium text-accent-warm hover:text-accent-primary/80 transition inline-block">
                  View all clients →
                </a>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {FEATURED_CLIENTS.map((client) => (
              <ClientCard key={client.name} {...client} />
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-white py-28 px-[5%]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h2 className="font-serif text-5xl font-light leading-tight mb-6">Let's build something together.</h2>
            <p className="text-base font-light leading-relaxed text-ink-mid max-w-2xl">
              Whether you are exploring a specific service or simply want to understand how Anthology might be relevant to your organisation, we'd like to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-ink-light mb-4">Phone</h3>
              <a href="tel:+12142147474" className="text-base font-normal hover:text-accent-primary transition">
                +1 (214) 214-7474
              </a>
            </div>
            <div>
              <h3 className="text-xs font-medium tracking-widest uppercase text-ink-light mb-4">Website</h3>
              <a href="https://www.anthology.ooo" className="text-base font-normal hover:text-accent-primary transition">
                www.anthology.ooo
              </a>
            </div>
          </div>

          <div className="mb-8 pb-8 border-t border-rule">
            <h3 className="text-xs font-medium tracking-widest uppercase text-ink-light mb-2">Registered</h3>
            <p className="text-base font-normal text-ink">
              Anthology Solutions Inc. — Irving, Texas, USA
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}
