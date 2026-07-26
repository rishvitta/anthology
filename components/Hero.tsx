'use client';

export default function Hero() {
  return (
    <section className="pt-16 min-h-screen flex items-stretch">
      {/* Left Side */}
      <div className="w-full lg:w-1/2 bg-paper px-[6%] py-[10vh] flex flex-col justify-center border-r border-rule relative">
        {/* Accent bar */}
        <div className="absolute left-0 top-[15%] bottom-[15%] w-0.75 bg-accent-warm"></div>

        <div className="mb-10 flex items-center gap-4">
          <div className="w-10 h-px bg-accent-warm"></div>
          <span className="text-xs font-medium tracking-widest uppercase text-ink-light">
            Anthology Solutions Inc.
          </span>
        </div>

        <h1 className="font-serif text-5xl lg:text-6xl font-light leading-tight mb-10 text-ink">
          Technology{' '}
          <strong className="font-semibold italic block">Governed.</strong>
          <span>Intelligence</span>
          <strong className="font-semibold italic block">Applied.</strong>
        </h1>

        <p className="text-base font-light leading-relaxed text-ink-mid max-w-md mb-12">
          We build, govern, and scale intelligent technology — partnering with organisations to deliver product
          excellence, responsible AI, and the right talent at every stage of growth.
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
          <a
            href="#services"
            className="text-xs font-medium tracking-widest uppercase text-white bg-ink px-9 py-4 transition-all hover:bg-ink-mid hover:translate-y-[-2px]"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="text-xs font-medium tracking-widest uppercase text-ink border-b border-rule px-0 pb-0.5 transition-all hover:border-accent-warm hover:text-accent-warm"
          >
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
            <div key={stat.number} className="py-7 border-t border-white/10 flex items-baseline gap-5">
              <span className="font-serif text-4xl font-light text-paper leading-none min-w-fit">
                {stat.number}
              </span>
              <span className="text-xs font-normal tracking-widest uppercase text-paper/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
