'use client';

interface ClientCardProps {
  name: string;
  description: string;
  industry: string;
  logoUrl?: string;
}

export default function ClientCard({ name, description, industry, logoUrl }: ClientCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-8 border border-rule hover:border-accent-warm hover:bg-paper transition-all duration-300">
      {logoUrl ? (
        <div className="mb-6 h-24 flex items-center justify-center">
          <img
            src={logoUrl}
            alt={`${name} logo`}
            className="max-h-24 max-w-full object-contain"
          />
        </div>
      ) : (
        <div className="mb-6 h-24 flex items-center justify-center bg-paper-dark rounded">
          <span className="text-ink-light text-sm">Logo</span>
        </div>
      )}
      <h3 className="font-serif text-xl font-normal mb-2 text-ink">{name}</h3>
      <p className="text-xs font-medium tracking-widest uppercase text-accent-warm mb-4">{industry}</p>
      <p className="text-sm font-light leading-relaxed text-ink-mid">{description}</p>
    </div>
  );
}
