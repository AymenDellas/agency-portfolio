import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-colors duration-200 border-b ${
        scrolled 
          ? 'bg-[#F5F1E8]/95 backdrop-blur-md border-[#171717]/15 text-[#171717]' 
          : 'bg-[#F5F1E8] border-[#171717]/10 text-[#171717]'
      }`}
    >
      <div className="site-container h-full flex items-center justify-between">
        {/* Left: Wordmark / Identity */}
        <div className="flex items-center">
          <button 
            onClick={() => onNavigate('hero')}
            className="font-sans text-[16px] sm:text-[17px] font-bold tracking-tight text-[#171717] hover:text-[#0000FF] transition-colors border-none bg-transparent cursor-pointer p-0 text-left uppercase flex items-center gap-2"
          >
            <span>Sami Ben</span>
            <span className="font-mono text-[12px] font-normal text-[#171717]/50 lowercase hidden sm:inline">
              // portfolio
            </span>
          </button>
        </div>

        {/* Center: Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`nav-link text-[15px] font-medium border-none bg-transparent cursor-pointer ${
                  isActive ? 'active text-[#0000FF]' : 'text-[#171717] hover:text-[#0000FF]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right: Primary Action CTA & Mobile Trigger */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => onNavigate('contact')}
            className="btn-primary hidden sm:inline-flex text-[13px] py-2.5 px-5"
          >
            Start a project
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden font-mono text-[13px] font-semibold text-[#171717] border border-[#171717]/30 px-3.5 py-2 bg-transparent hover:border-[#171717] transition-colors cursor-pointer flex items-center gap-2 uppercase tracking-wider"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span>{mobileMenuOpen ? 'Close' : 'Menu'}</span>
            <span className="text-[#0000FF]">{mobileMenuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-[#F5F1E8] z-40 p-6 sm:p-8 flex flex-col justify-between border-t border-[#171717]/10 overflow-y-auto">
          <nav className="flex flex-col gap-2 pt-4" aria-label="Mobile Navigation">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className="text-left font-serif text-[32px] sm:text-[36px] font-normal text-[#171717] hover:text-[#0000FF] border-b border-[#171717]/10 py-4 bg-transparent border-t-0 border-x-0 cursor-pointer flex items-center justify-between transition-colors"
              >
                <span>{item.label}</span>
                <span className="font-mono text-[13px] text-[#0000FF]">0{index + 1}</span>
              </button>
            ))}
          </nav>

          <div className="pt-8 pb-4 space-y-4">
            <button
              onClick={() => {
                onNavigate('contact');
                setMobileMenuOpen(false);
              }}
              className="btn-primary w-full text-center py-4 text-[14px]"
            >
              Start a project →
            </button>
            <div className="text-center font-mono text-[12px] text-[#171717]/60">
              ALGIERS, DZ // AVAILABLE FOR COMMISSIONS
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
