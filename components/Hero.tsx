'use client';

export default function Hero() {
  return (
    <section className="pt-16 min-h-screen flex items-stretch">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-paper px-[6%] py-[10vh] flex flex-col justify-center border-r border-rule relative">
        {/* Accent bar */}
        <div className="absolute left-0 top-[15%] bottom-[15%] w-[3px] bg-gradient-to-b from-accent-soft via-accent to-accent-deep"></div>

        <div className="mb-10 flex items-center gap-4">
          <div className="rule-accent"></div>
          <span className="eyebrow">Anthology Solutions Inc.</span>
        </div>

        <h1 className="display text-5xl lg:text-7xl mb-10 text-ink">
          Technology{' '}
          <strong className="font-medium italic block text-accent">Governed.</strong>
          <span>Intelligence</span>
          <strong className="font-medium italic block text-accent">Applied.</strong>
        </h1>

        <p className="text-base font-light leading-relaxed text-ink-mid max-w-md mb-12">
          We build, govern, and scale intelligent technology — partnering with organisations to deliver product
          excellence, responsible AI, and the right talent at every stage of growth.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <a href="#services" className="btn btn-primary">
            Explore Services
          </a>
          <a href="#contact" className="eyebrow link-quiet !text-ink hover:!text-accent">
            Start a Conversation
          </a>
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden lg:flex w-1/2 bg-ink px-[6%] py-[10vh] flex-col justify-between">
        <blockquote className="font-serif text-3xl font-light italic leading-tight text-paper/75">
          "We would like to make
          <em className="block font-normal text-paper">your story a part of</em>
          our Anthology."
        </blockquote>

        <div className="space-y-0">
          {[
            { label: 'Product Development', number: '01' },
            { label: 'AI Governance', number: '02' },
            { label: 'Staff Augmentation', number: '03' },
          ].map((stat) => (
            <div
              key={stat.number}
              className="py-7 border-t border-white/10 flex items-baseline gap-5 group transition-colors hover:border-accent/50"
            >
              <span className="font-serif text-4xl font-light text-accent-soft leading-none min-w-fit">
                {stat.number}
              </span>
              <span className="text-xs font-normal tracking-[0.22em] uppercase text-paper/45 transition-colors group-hover:text-paper/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
