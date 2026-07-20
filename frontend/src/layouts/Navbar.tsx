import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Dashboard', path: '/dashboard' },
    { label: 'Certifications', path: '/certifications' },
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
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-3 lg:grid-cols-[220px_1fr_220px] items-center h-12 w-full">
        {/* Column 1: Brand Logo */}
        <div className="flex justify-start h-full items-center">
          <Link to="/" className="flex items-center gap-3 group h-full">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold-premium to-gold flex items-center justify-center shadow-lg shadow-gold/20 transform group-hover:scale-105 transition-transform duration-300">
              <span className="font-display font-bold text-black text-xl tracking-tighter">A</span>
            </div>
            <div className="flex flex-col justify-center text-left">
              <span className="font-display font-bold text-lg leading-none tracking-wider text-white group-hover:text-gold transition-colors duration-300">
                AUREX
              </span>
              <span className="text-[9px] tracking-[0.25em] text-gold-premium uppercase font-medium mt-1">
                CAPITAL
              </span>
            </div>
          </Link>
        </div>

        {/* Column 2: Centered Desktop Nav Items */}
        <div className="hidden lg:flex justify-center items-center gap-8 h-full">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative py-1 hover:text-white flex items-center h-full whitespace-nowrap ${
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

        {/* Column 3: Mobile Menu Trigger (hidden on desktop) */}
        <div className="flex justify-end items-center h-full">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white transition-colors duration-200 flex items-center justify-center"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
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
        </div>
      </div>
    </nav>
  );
};
