import { Trees, Search, Menu } from 'lucide-react';
import { COMPANY_INFO } from '../data';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const location = useLocation();
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
        <Link to="/" className="flex items-center gap-3 text-white transition-opacity hover:opacity-80">
          <Trees className="w-8 h-8 text-lime-500" />
          <span className="font-bold tracking-[0.05em] sm:tracking-[0.1em] uppercase text-sm sm:text-base md:text-xl text-white">
            Bishnupur Jungle Camp
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
        <button className="lg:hidden p-2 text-white focus:outline-none">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
}
