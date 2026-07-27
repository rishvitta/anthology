'use client';

interface ClientCardProps {
  name: string;
  description: string;
  industry: string;
  logoUrl?: string;
}

export default function ClientCard({ name, description, industry, logoUrl }: ClientCardProps) {
  return (
    <div className="flex flex-col items-center text-center p-8 border border-rule rounded-xl hover:border-accent-primary hover:bg-paper-dark hover:shadow-lg transition-all duration-300">
      {logoUrl && (
        <div className="mb-6 h-20 w-full flex items-center justify-center">
          <img
            src={logoUrl}
            alt={`${name} logo`}
            width={160}
            height={80}
            className="h-20 w-auto shrink-0 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <h3 className="font-serif text-xl font-normal mb-2 text-ink">{name}</h3>
      <p className="text-xs font-medium tracking-widest uppercase text-accent-warm mb-4">{industry}</p>
      <p className="text-sm font-light leading-relaxed text-ink-mid">{description}</p>
    </div>
  );
}
