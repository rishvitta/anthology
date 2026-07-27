'use client';

interface ClientCardProps {
  name: string;
  description: string;
  industry: string;
  logoUrl?: string;
}

export default function ClientCard({ name, description, industry, logoUrl }: ClientCardProps) {
  return (
    <div className="card flex flex-col items-center text-center p-8">
      {logoUrl && (
        <div className="mb-6 h-28 w-full flex items-center justify-center">
          <img
            src={logoUrl}
            alt={`${name} logo`}
            width={112}
            height={112}
            className="h-28 w-28 shrink-0 object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
      )}
      <h3 className="font-serif text-xl font-normal mb-3 text-ink">{name}</h3>
      <p className="eyebrow mb-4">{industry}</p>
      <p className="text-sm font-light leading-relaxed text-ink-mid">{description}</p>
    </div>
  );
}
