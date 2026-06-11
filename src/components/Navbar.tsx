import { useState, useEffect } from 'react';
import { Trees, Search, Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Properties", path: "/properties" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" }
  ];
  
  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-stone-900/40 border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 text-white transition-opacity hover:opacity-80 relative z-50"
        >
          <Trees className="w-8 h-8 text-lime-500" />
          <span className="font-bold tracking-wider uppercase text-xs sm:text-sm md:text-xl text-white leading-tight">
            Bishnupur<br className="sm:hidden" /> Jungle Camp
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-1.5 transition-colors text-sm font-medium rounded-sm ${
                  isActive 
                    ? 'bg-stone-900/90 text-white' 
                    : 'text-stone-100 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
          <button className="text-stone-100 hover:text-white transition-colors flex items-center justify-center p-2 ml-2">
            <Search className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-white focus:outline-none relative z-50"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 w-full h-[100dvh] bg-stone-950 flex flex-col pt-24 px-6 z-40 lg:hidden"
          >
            <div className="flex flex-col gap-6 overflow-y-auto pb-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-2xl font-medium tracking-wide ${
                      isActive ? 'text-lime-400' : 'text-stone-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>
            <div className="mt-auto pb-12 flex flex-col gap-4">
              <div className="h-px w-full bg-white/10"></div>
              <p className="text-stone-400 text-sm">For bookings and inquiries:</p>
              <a 
                href={`tel:${COMPANY_INFO.contact.replace(/\s/g, '')}`} 
                className="text-xl font-bold tracking-widest text-white"
              >
                {COMPANY_INFO.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
