import { Metadata } from 'next';
import ProductCard from '@/components/ProductCard';

export const metadata: Metadata = {
  title: 'Products — Anthology Solutions Inc.',
  description: 'Explore Anthology Solutions Inc. product portfolio including Codarev, Vitta Realty, and REFinancials.',
};

const PRODUCTS = [
  {
    title: 'Codarev',
    description:
      'Claim validation platform powered by AI. Streamline medical claims processing, reduce denials, and improve revenue cycle management with intelligent claim analysis and validation.',
    category: 'Medical/Healthcare',
    status: 'active' as const,
    link: 'https://www.codarev.com',
  },
  {
    title: 'Vitta Realty',
    description:
      'Content marketing and lead generation platform for real estate professionals. Generate qualified leads through SEO-optimized content, gated resources, and investor engagement tools.',
    category: 'Real Estate',
    status: 'active' as const,
    link: 'https://www.vittarealty.com',
  },
  {
    title: 'REFinancials',
    description:
      'Professional financial calculator suite for real estate professionals, investors, and buyers. Mortgage analysis, property valuation, investment projections, and cash flow modeling.',
    category: 'Real Estate',
    status: 'in-development' as const,
    link: 'https://github.com/rishvitta/refinancials',
  },
];

export default function ProductsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-[5%] bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-px bg-accent-warm"></div>
              <span className="text-xs font-medium tracking-widest uppercase text-ink-light">Our Portfolio</span>
            </div>
            <h1 className="font-serif text-6xl font-light leading-tight max-w-3xl">
              Technology products that solve real problems
            </h1>
          </div>
          <p className="text-base font-light leading-relaxed text-ink-mid max-w-2xl">
            Anthology builds and maintains a portfolio of technology products addressing critical challenges in healthcare and real estate. Each product represents our commitment to thoughtful design, responsible implementation, and continuous innovation.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-28 px-[5%] bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <ProductCard key={product.title} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-28 px-[5%] bg-paper">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-light leading-tight mb-6">
            Interested in our products or services?
          </h2>
          <p className="text-base font-light leading-relaxed text-ink-mid mb-12">
            Learn more about how Anthology can help your organisation build, scale, and govern technology.
          </p>
          <a
            href="/#contact"
            className="inline-block text-xs font-medium tracking-widest uppercase text-white bg-ink px-9 py-4 transition-all hover:bg-ink-mid hover:translate-y-[-2px]"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
