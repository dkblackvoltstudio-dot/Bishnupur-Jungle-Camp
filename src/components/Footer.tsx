import { Link } from 'react-router-dom';
import { Trees, MapPin, Phone, ExternalLink } from 'lucide-react';
import { COMPANY_INFO } from '../data';

export function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Properties", path: "/properties" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-stone-300 py-12 md:py-16 border-t border-stone-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">
        
        {/* Brand Section */}
        <div className="md:col-span-5 lg:col-span-4 flex flex-col space-y-4">
          <Link to="/" className="flex items-center gap-3 text-white transition-opacity hover:opacity-80 w-fit">
            <Trees className="w-8 h-8 text-lime-500" />
            <span className="font-bold tracking-widest uppercase text-lg text-white">
              Bishnupur<br/>Jungle Camp
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-stone-400 mt-2 pr-4 lg:pr-8">
            {COMPANY_INFO.description}
          </p>
          <div className="pt-2">
            <p className="text-xs uppercase tracking-wider text-stone-500 font-bold mb-1">Managed By</p>
            <p className="text-emerald-400 font-medium">{COMPANY_INFO.parentCompany}</p>
            <p className="text-xs italic text-stone-400 mt-1">"{COMPANY_INFO.tagline}"</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:col-span-3 lg:col-span-4 flex flex-col space-y-4 md:items-center">
          <div className="flex flex-col space-y-4 w-fit">
            <h3 className="text-white font-semibold tracking-wide uppercase text-sm mb-1">Explore</h3>
            <ul className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    className="text-stone-400 hover:text-white hover:pl-1 transition-all text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="md:col-span-4 flex flex-col space-y-5">
          <h3 className="text-white font-semibold tracking-wide uppercase text-sm mb-1">Contact & Location</h3>
          
          <a 
            href={`tel:${COMPANY_INFO.contact.replace(/\s/g, '')}`} 
            className="flex items-start gap-3 group text-stone-400 hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="text-lg font-medium text-stone-200">{COMPANY_INFO.contact}</span>
              <span className="text-xs text-stone-500 uppercase tracking-widest mt-1">WhatsApp Preferred</span>
            </div>
          </a>

          {COMPANY_INFO.email && (
            <a 
              href={`mailto:${COMPANY_INFO.email}`} 
              className="flex items-start gap-3 group text-stone-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.0000.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-500 shrink-0 mt-0.5"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <div className="flex flex-col">
                <span className="leading-snug">{COMPANY_INFO.email}</span>
              </div>
            </a>
          )}

          <a 
            href={COMPANY_INFO.mapLink} 
            target="_blank" 
            rel="noreferrer" 
            className="flex items-start gap-3 group text-stone-400 hover:text-white transition-colors"
          >
            <MapPin className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div className="flex flex-col">
              <span className="leading-snug">{COMPANY_INFO.address || COMPANY_INFO.location}</span>
              <span className="text-xs text-emerald-500/80 uppercase tracking-widest mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Open in Maps <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800/60 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500">
        <p>&copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Operated by {COMPANY_INFO.parentCompany}</p>
      </div>
    </footer>
  );
}
