import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

export const MainLayout: React.FC = () => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white relative flex flex-col justify-between selection:bg-gold-premium selection:text-black">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col pt-24 min-h-[calc(100vh-80px)]">
        <Outlet />
      </main>

      {/* Corporate Footer */}
      <Footer />
    </div>
  );
};
