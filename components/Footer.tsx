'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-ink text-paper pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-[5%]">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <h3 className="text-sm font-semibold tracking-widest uppercase mb-4">Anthology</h3>
            <p className="text-sm text-paper/60 italic max-w-xs">
              "We would like to make your story a part of our Anthology."
            </p>
            <div className="mt-6 flex flex-col gap-2">
              <a href="tel:+12142147474" className="text-sm text-paper hover:text-white transition">
                +1 (214) 214-7474
              </a>
              <a href="https://www.anthology.ooo" className="text-sm text-paper hover:text-white transition">
                www.anthology.ooo
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-sm text-paper hover:text-white transition">
                  Product Development
                </a>
              </li>
              <li>
                <a href="#ai-governance" className="text-sm text-paper hover:text-white transition">
                  AI Governance
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-paper hover:text-white transition">
                  Staff Augmentation
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#approach" className="text-sm text-paper hover:text-white transition">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-paper hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://www.anthology.ooo" className="text-sm text-paper hover:text-white transition">
                  anthology.ooo
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold tracking-widest uppercase text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-paper hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-paper hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-paper/60">
            © 2025 Anthology Solutions Inc. All rights reserved.
          </p>
          <p className="text-xs text-paper/60">Anthology Solutions Inc. — Irving, Texas, USA</p>
        </div>
      </div>
    </footer>
  );
}
