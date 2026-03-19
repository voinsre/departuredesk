import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-navy-900 border-t border-white/10">
      <div className="max-w-content mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-display text-white text-lg font-bold mb-4">DEPARTURE DESK</h3>
            <p className="text-white/60 text-sm leading-relaxed">
              We close your Dubai chapter.<br />
              You never have to come back.
            </p>
            <p className="text-white/40 text-xs mt-6">
              Dubai, UAE | In partnership with Euro Fast Track
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="section-label text-gold-400 mb-6">Quick Links</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/services" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Services &amp; Pricing
              </Link>
              <Link href="/assessment" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Free Assessment
              </Link>
              <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-content mx-auto px-6 lg:px-8 py-6 flex justify-center">
          <p className="text-white/40 text-xs">
            &copy; 2026 Departure Desk. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
