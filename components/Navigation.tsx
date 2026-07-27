'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-100 h-20 flex items-center justify-between px-[5%] bg-paper/90 backdrop-blur-xl border-b border-rule/70">
      <Link
        href="/"
        className="font-serif text-2xl font-semibold tracking-[0.22em] uppercase text-ink transition-colors hover:text-accent"
      >
        Anth<span className="text-accent">o</span>l<span className="text-accent">o</span>gy
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-12">
        <ul className="flex items-center gap-12 list-none">
          <li>
            <a
              href="/#services"
              className="text-[13px] font-medium tracking-[0.14em] uppercase text-ink-mid transition-colors hover:text-accent"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="/#ai-governance"
              className="text-[13px] font-medium tracking-[0.14em] uppercase text-ink-mid transition-colors hover:text-accent"
            >
              AI Governance
            </a>
          </li>
          <li>
            <a
              href="/#approach"
              className="text-[13px] font-medium tracking-[0.14em] uppercase text-ink-mid transition-colors hover:text-accent"
            >
              Our Approach
            </a>
          </li>
          <li>
            <Link
              href="/products"
              className="text-[13px] font-medium tracking-[0.14em] uppercase text-ink-mid transition-colors hover:text-accent"
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              href="/clients"
              className="text-[13px] font-medium tracking-[0.14em] uppercase text-ink-mid transition-colors hover:text-accent"
            >
              Clients
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden md:block">
        <a href="/#contact" className="btn btn-accent !px-7 !py-3">
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
        <div className="absolute top-20 left-0 right-0 bg-paper border-b border-rule shadow-lg md:hidden">
          <ul className="flex flex-col gap-0 list-none p-4">
            <li>
              <a
                href="/#services"
                className="block px-4 py-2 text-sm font-normal text-ink-mid hover:text-ink"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/#ai-governance"
                className="block px-4 py-2 text-sm font-normal text-ink-mid hover:text-ink"
                onClick={() => setIsOpen(false)}
              >
                AI Governance
              </a>
            </li>
            <li>
              <a
                href="/#approach"
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
            <li>
              <Link
                href="/clients"
                className="block px-4 py-2 text-sm font-normal text-ink-mid hover:text-ink"
                onClick={() => setIsOpen(false)}
              >
                Clients
              </Link>
            </li>
            <li className="pt-4 mt-2 border-t border-rule">
              <a
                href="/#contact"
                className="btn btn-accent block text-center"
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
