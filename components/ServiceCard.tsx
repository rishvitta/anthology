'use client';

interface ServiceCardProps {
  number: string;
  title: string;
  description: string;
  items: string[];
}

export default function ServiceCard({ number, title, description, items }: ServiceCardProps) {
  return (
    <div className="p-12 border-r border-b border-rule hover:bg-paper transition-colors relative group cursor-default last:border-r-0">
      {/* Hover underline animation */}
      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500"></div>

      <span className="font-serif text-5xl font-light text-rule block mb-7 leading-none">
        {number}
      </span>

      <h3 className="font-serif text-2xl font-normal leading-tight mb-3">
        {title}
      </h3>

      <p className="text-sm font-light leading-relaxed text-ink-mid mb-8 max-w-xs">
        {description}
      </p>

      <ul className="space-y-2">
        {items.map((item, idx) => (
          <li key={idx} className="text-xs font-normal tracking-wide text-ink-mid flex items-start gap-2.4">
            <span className="text-accent flex-shrink-0 mt-1">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
