import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { SITE_METADATA } from '../constants';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Performance Dashboard', path: '/performance' },
    { label: 'Certifications', path: '/certifications' },
    { label: 'Schedule Consultation', path: '/consultation' },
    { label: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || isOpen
          ? 'bg-black/85 backdrop-blur-md border-b border-gold-premium/15 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-premium to-gold flex items-center justify-center shadow-lg shadow-gold/20 transform group-hover:scale-105 transition-transform duration-300">
            <span className="font-display font-bold text-black text-xl tracking-tighter">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-tight tracking-wider text-white group-hover:text-gold transition-colors duration-300">
              AURELIUS
            </span>
            <span className="text-[9px] tracking-[0.25em] text-gold-premium uppercase font-medium">
              CAPITAL
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium tracking-wide uppercase transition-all duration-300 relative py-1 hover:text-white ${
                  isActive ? 'text-gold' : 'text-zinc-400'
                }`
              }
            >
              {item.label}
              {((item.path === '/' && pathname === '/') || (item.path !== '/' && pathname.startsWith(item.path))) && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-gold-premium rounded-full" />
              )}
            </NavLink>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href={`https://wa.me/${SITE_METADATA.whatsapp.replace('+', '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/30 bg-green-500/5 hover:bg-green-500/10 text-green-400 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
          >
            <Phone className="w-3.5 h-3.5 fill-current" />
            WhatsApp
          </a>
          <Link
            to="/consultation"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-gold-premium via-gold to-gold-dark hover:from-gold hover:to-gold-premium text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-gold/10 hover:shadow-gold/25 transform hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-200"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 top-[72px] bg-black/95 backdrop-blur-lg z-40 lg:hidden transition-transform duration-500 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col p-8 gap-6 h-full justify-between">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-lg font-display font-medium tracking-wider uppercase border-b border-zinc-900 pb-3 block ${
                    isActive ? 'text-gold pl-2 border-gold-premium/30' : 'text-zinc-400'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex flex-col gap-4 mb-12">
            <a
              href={`https://wa.me/${SITE_METADATA.whatsapp.replace('+', '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-3.5 rounded-xl border border-green-500/30 bg-green-500/5 text-green-400 text-sm font-semibold uppercase tracking-wider transition-all duration-300"
            >
              <Phone className="w-4 h-4 fill-current" />
              WhatsApp Quick Connect
            </a>
            <Link
              to="/consultation"
              className="flex items-center justify-center gap-3 py-3.5 rounded-xl bg-gradient-to-r from-gold-premium to-gold-dark text-black text-sm font-bold uppercase tracking-wider shadow-lg shadow-gold/15 transition-all duration-300 cursor-pointer text-center"
            >
              <Calendar className="w-4 h-4" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
