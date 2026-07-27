'use client';

import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  category: string;
  status: 'active' | 'in-development';
  link: string;
}

export default function ProductCard({
  title,
  description,
  category,
  status,
  link,
}: ProductCardProps) {
  return (
    <div className="card flex flex-col h-full p-8 group">
      <div className="flex-grow">
        <div className="flex items-start justify-between mb-4">
          <h3 className="font-serif text-2xl font-normal text-ink">{title}</h3>
          {status === 'active' && (
            <span className="eyebrow border border-accent/30 bg-accent/5 px-3 py-1 rounded-full whitespace-nowrap ml-4">
              Active
            </span>
          )}
          {status === 'in-development' && (
            <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-light border border-rule bg-paper-dark px-3 py-1 rounded-full whitespace-nowrap ml-4">
              In Development
            </span>
          )}
        </div>

        <p className="text-sm font-light leading-relaxed text-ink-mid mb-6">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="text-[11px] font-medium tracking-[0.18em] uppercase text-ink-light bg-paper-dark px-3 py-1 rounded-md">
            {category}
          </span>
        </div>
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="eyebrow inline-flex items-center gap-2 transition-all group-hover:translate-x-1"
      >
        Explore Project
        <ExternalLink size={16} />
      </a>
    </div>
  );
}
