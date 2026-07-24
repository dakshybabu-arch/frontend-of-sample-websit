import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { NAV_LINKS, SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { isDark, toggle } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileOpen]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b-2 border-cyan-500/30',
        isScrolled
          ? 'bg-surface-secondary/95 shadow-lg shadow-cyan-500/20 py-3'
          : 'bg-surface/80 py-5'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="flex items-center gap-2 group" aria-label="Home">
            <div className="w-10 h-10 rounded-none border-2 border-cyan-500/50 bg-cyan-500/20 flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-shadow">
              <span className="text-cyan-400 font-bold text-lg font-mono neon-text">A</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-mono font-bold text-lg text-primary uppercase neon-text">{SITE_CONFIG.name.split(' ')[0]}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-cyan-400 font-medium -mt-0.5">// TOURS_SYSTEM</p>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  'relative px-3 py-2 text-sm font-medium rounded-none transition-colors font-mono uppercase',
                  location.pathname === link.href
                    ? 'text-cyan-400 neon-text'
                    : 'text-text-secondary hover:text-cyan-400'
                )}
              >
                {link.label}
                {location.pathname === link.href && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-cyan-500 shadow-lg shadow-cyan-500/50"
                    transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="p-2.5 rounded-none border border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isDark ? 'moon' : 'sun'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isDark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </AnimatePresence>
            </button>

            <Link to="/book" className="hidden sm:block">
              <Button size="sm">Book Now</Button>
            </Link>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden p-2.5 rounded-none border border-cyan-500/30 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-colors"
              aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileOpen ? 'close' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="lg:hidden overflow-hidden border-t-2 border-cyan-500/30 bg-surface-secondary/95"
          >
            <Container className="py-6">
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={link.href}
                      className={cn(
                        'block px-4 py-3 rounded-none text-base font-medium transition-colors font-mono uppercase',
                        location.pathname === link.href
                          ? 'text-cyan-400 bg-cyan-500/10 neon-text'
                          : 'text-text-secondary hover:text-cyan-400 hover:bg-cyan-500/10'
                      )}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NAV_LINKS.length * 0.05 }}
                  className="pt-4 mt-2 border-t-2 border-cyan-500/30"
                >
                  <Link to="/book" className="block">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </motion.div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
