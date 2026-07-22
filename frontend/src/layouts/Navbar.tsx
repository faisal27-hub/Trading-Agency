import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

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

  // Disable page scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-black/90 backdrop-blur-md border-b border-gold-premium/15 py-3.5 sm:py-4'
            : 'bg-transparent py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between lg:grid lg:grid-cols-[200px_1fr_160px] h-12 w-full">
          {/* Brand Logo (Left on all screens) */}
          <div className="flex justify-start items-center h-full">
            <Link to="/" className="flex items-center group h-full py-1">
              <img 
                src="/assets/logo.svg" 
                alt="Aurex Capital Logo" 
                className="h-8 md:h-9 w-auto object-contain transform group-hover:scale-[1.02] transition-transform duration-300 select-none"
              />
            </Link>
          </div>

          {/* Desktop Nav Items (Center, hidden on mobile) */}
          <div className="hidden lg:flex justify-center items-center gap-7 h-full">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-xs font-semibold tracking-wider uppercase transition-all duration-300 relative py-1 hover:text-gold flex items-center h-full whitespace-nowrap ${
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

          {/* Right Action Area Desktop (Theme Toggle) */}
          <div className="hidden lg:flex justify-end items-center h-full">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-zinc-950/80 border border-gold-premium/30 text-gold-premium hover:text-gold hover:border-gold transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md active:scale-95 group"
              aria-label="Toggle Light/Dark Theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform duration-300" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400 group-hover:-rotate-12 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Right Controls (Theme Toggle + Hamburger Menu Trigger) */}
          <div className="flex justify-end items-center gap-2.5 h-full lg:hidden">
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-xl bg-zinc-950/80 border border-gold-premium/30 text-gold-premium hover:text-gold hover:border-gold transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md active:scale-95"
              aria-label="Toggle Light/Dark Theme"
              title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-400" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(true)}
              className="p-2.5 text-gold-premium hover:text-gold bg-zinc-950/80 border border-gold-premium/20 hover:border-gold-premium/50 rounded-xl transition-all duration-300 flex items-center justify-center cursor-pointer shadow-md active:scale-95"
              aria-label="Open Mobile Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Premium Mobile Overlay Navigation */}
      <div
        className={`fixed inset-0 z-[60] bg-[#000000] flex flex-col justify-between p-5 sm:p-6 lg:hidden transition-all duration-400 ease-in-out ${
          isOpen
            ? 'opacity-100 pointer-events-auto translate-x-0'
            : 'opacity-0 pointer-events-none translate-x-full'
        }`}
      >
        {/* Ambient Gold Glow Effects */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gold-premium/10 blur-[130px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-dark/10 blur-[130px] rounded-full pointer-events-none" />

        {/* Top Header Row inside Mobile Overlay */}
        <div className="flex items-center justify-between relative z-10 w-full pb-4 border-b border-zinc-900 shrink-0">
          <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center">
            <img 
              src="/assets/logo.svg" 
              alt="Aurex Capital Logo" 
              className="h-7 sm:h-8 w-auto object-contain select-none"
            />
          </Link>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-zinc-950 border border-gold-premium/30 text-gold-premium hover:text-gold hover:border-gold transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
              aria-label="Toggle Light/Dark Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-amber-400" />
              ) : (
                <Moon className="w-5 h-5 text-indigo-400" />
              )}
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl bg-zinc-950 border border-gold-premium/30 text-gold hover:text-white hover:border-gold transition-all duration-300 flex items-center justify-center cursor-pointer shadow-lg active:scale-95"
              aria-label="Close Mobile Navigation Menu"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>

        {/* Vertical Navigation Links */}
        <div className="flex flex-col justify-center gap-2 sm:gap-3 my-auto relative z-10 py-2 overflow-y-auto max-h-[calc(100vh-160px)]">
          {navItems.map((item, index) => {
            const isActive = (item.path === '/' && pathname === '/') || (item.path !== '/' && pathname.startsWith(item.path));
            return (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`group flex items-center justify-between text-base sm:text-lg font-display font-semibold uppercase tracking-wider py-2.5 px-3.5 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'text-gold bg-gradient-to-r from-gold-premium/20 to-transparent border-l-4 border-gold shadow-[0_0_20px_rgba(197,160,89,0.1)]'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-950/60 hover:pl-5'
                }`}
                style={{ transitionDelay: `${index * 35}ms` }}
              >
                <span>{item.label}</span>
                <ArrowRight
                  className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                    isActive ? 'text-gold translate-x-1' : 'text-zinc-600 group-hover:text-gold group-hover:translate-x-1'
                  }`}
                />
              </NavLink>
            );
          })}
        </div>

        {/* Bottom Action Footer inside Mobile Menu */}
        <div className="relative z-10 pt-4 border-t border-zinc-900 flex flex-col gap-3 shrink-0">
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="w-full py-3.5 rounded-xl bg-gradient-to-r from-gold-premium via-gold to-gold-dark hover:opacity-95 text-black font-display font-bold text-xs uppercase tracking-widest block text-center shadow-[0_0_25px_rgba(197,160,89,0.25)] transition-all duration-300 active:scale-[0.98]"
          >
            Schedule Consultation
          </Link>
          <p className="text-[10px] text-zinc-600 text-center font-light">
            &copy; {new Date().getFullYear()} Aurex Capital Global Markets.
          </p>
        </div>
      </div>
    </>
  );
};
