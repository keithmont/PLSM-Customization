import React, { useState } from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { PlsmLogo } from './PlsmLogo';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  onOpenQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'services', label: 'Services' },
    { id: 'about', label: 'About & Studio' },
    { id: 'faq', label: 'FAQs' }
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#080808] text-white shadow-2xl border-b border-white/10">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand Name */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
            <div className="h-12 w-auto flex items-center">
              <PlsmLogo className="h-10 sm:h-11 w-auto transition-transform group-hover:scale-105" />
            </div>
            <div className="hidden sm:block border-l border-white/20 pl-3">
              <p className="text-[10px] text-neutral-300 font-mono uppercase tracking-[0.2em]">
                Columbia, MO • Studio
              </p>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-2 bg-black/80 px-3 py-1.5 border border-white/10">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-4 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#00E5FF] border-b-2 border-[#00E5FF] font-bold'
                      : 'text-neutral-300 hover:text-[#00E5FF]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center space-x-3">
            <button
              onClick={onOpenQuote}
              className="flex items-center px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-black bg-[#00E5FF] hover:bg-cyan-300 shadow-lg shadow-[#00E5FF]/25 transition-all transform hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 mr-1.5 text-black" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2">
            <button
              onClick={onOpenQuote}
              className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-black bg-[#00E5FF]"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white bg-neutral-900 border border-white/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#080808] border-b border-white/10 px-4 pt-2 pb-6 space-y-3">
          <div className="grid grid-cols-1 gap-1 pt-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center justify-between px-4 py-3 text-left text-xs uppercase tracking-widest font-medium ${
                  activeTab === item.id
                    ? 'bg-[#00E5FF]/10 text-[#00E5FF] border-l-2 border-[#00E5FF]'
                    : 'text-neutral-300 hover:bg-neutral-900'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 space-y-2">
            <button
              onClick={() => {
                onOpenQuote();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center py-3 px-4 bg-[#00E5FF] text-black text-xs font-bold uppercase tracking-widest shadow-md"
            >
              Book Studio Appointment
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
