'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 h-16 flex items-center justify-between px-[5%] bg-paper/95 backdrop-blur-md border-b border-rule">
      <Link href="/" className="text-xs font-semibold tracking-widest uppercase text-ink">
        Anthology
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-12">
        <ul className="flex items-center gap-12 list-none">
          <li>
            <a
              href="#services"
              className="text-sm font-normal tracking-wide text-ink-mid transition-colors hover:text-accent-primary hover:font-medium"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#ai-governance"
              className="text-sm font-normal tracking-wide text-ink-mid transition-colors hover:text-accent-primary hover:font-medium"
            >
              AI Governance
            </a>
          </li>
          <li>
            <a
              href="#approach"
              className="text-sm font-normal tracking-wide text-ink-mid transition-colors hover:text-accent-primary hover:font-medium"
            >
              Our Approach
            </a>
          </li>
          <li>
            <Link
              href="/products"
              className="text-sm font-normal tracking-wide text-ink-mid transition-colors hover:text-accent-primary hover:font-medium"
            >
              Products
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <a
          href="#contact"
          className="text-xs font-medium tracking-widest uppercase text-white bg-ink px-5.5 py-2.4 transition-all hover:bg-ink-mid hover:translate-y-[-2px]"
        >
          Get in Touch
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-ink"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-paper border-b border-rule md:hidden">
          <ul className="flex flex-col gap-0 list-none p-4">
            <li>
              <a
                href="#services"
                className="block px-4 py-2 text-sm font-normal text-ink-mid hover:text-ink"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#ai-governance"
                className="block px-4 py-2 text-sm font-normal text-ink-mid hover:text-ink"
                onClick={() => setIsOpen(false)}
              >
                AI Governance
              </a>
            </li>
            <li>
              <a
                href="#approach"
                className="block px-4 py-2 text-sm font-normal text-ink-mid hover:text-ink"
                onClick={() => setIsOpen(false)}
              >
                Our Approach
              </a>
            </li>
            <li>
              <Link
                href="/products"
                className="block px-4 py-2 text-sm font-normal text-ink-mid hover:text-ink"
                onClick={() => setIsOpen(false)}
              >
                Products
              </Link>
            </li>
            <li className="pt-2 border-t border-rule">
              <a
                href="#contact"
                className="block px-4 py-2 text-xs font-medium tracking-widest uppercase text-white bg-ink hover:bg-ink-mid"
                onClick={() => setIsOpen(false)}
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
