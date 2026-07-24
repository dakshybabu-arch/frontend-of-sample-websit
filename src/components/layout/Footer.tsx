import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { SITE_CONFIG, NAV_LINKS } from '@/lib/constants';

const SERVICE_LINKS = [
  { label: 'Transportation', href: '/services#transportation' },
  { label: 'Devotional Trips', href: '/services#devotional' },
  { label: 'Family Trips', href: '/services#family' },
  { label: 'Corporate Trips', href: '/services#corporate' },
  { label: 'Holiday Packages', href: '/services#holiday' },
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-primary text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/0 via-primary to-black/90 pointer-events-none" />

      <div className="relative">
        <Container className="pt-16 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
            <div className="sm:col-span-2 lg:col-span-1">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                  <span className="text-white font-bold text-lg font-serif">A</span>
                </div>
                <div>
                  <p className="font-serif font-bold text-lg leading-tight">Amar</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/60 font-medium -mt-0.5">Tours & Travels</p>
                </div>
              </Link>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Your trusted travel partner for comfortable, safe, and memorable journeys across India. Creating unforgettable experiences since 2012.
              </p>
              <div className="flex gap-3">
                {Object.entries(SITE_CONFIG.socialMedia).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent transition-colors text-sm capitalize"
                    aria-label={platform}
                  >
                    {platform[0].toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Quick Links</h3>
              <ul className="space-y-2.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link to="/login" className="text-white/50 hover:text-white text-sm transition-colors">
                    Login
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Our Services</h3>
              <ul className="space-y-2.5">
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link to={link.href} className="text-white/50 hover:text-white text-sm transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm uppercase tracking-wider mb-4 text-white/80">Contact Us</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-white/50 text-sm leading-relaxed">{SITE_CONFIG.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={16} className="text-accent shrink-0" />
                  <a href={`tel:${SITE_CONFIG.phone}`} className="text-white/50 hover:text-white text-sm transition-colors">
                    {SITE_CONFIG.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-accent shrink-0" />
                  <a href={`mailto:${SITE_CONFIG.email}`} className="text-white/50 hover:text-white text-sm transition-colors">
                    {SITE_CONFIG.email}
                  </a>
                </li>
              </ul>

              <div className="mt-6">
                <h4 className="text-xs font-medium text-white/60 mb-2 uppercase tracking-wider">Newsletter</h4>
                <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 rounded-lg bg-white/10 border border-white/10 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-accent/50 transition-colors"
                  />
                  <button className="px-4 py-2 rounded-lg gradient-bg text-white text-sm font-medium hover:opacity-90 transition-opacity">
                    Join
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link to="/privacy" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/40 hover:text-white/70 text-sm transition-colors">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </Container>

        <button
          onClick={scrollToTop}
          className="absolute bottom-8 right-8 w-10 h-10 rounded-full gradient-bg text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      </div>
    </footer>
  );
}
