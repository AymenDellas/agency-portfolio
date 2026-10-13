import React from 'react';

interface FooterProps {
  onScrollTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollTop }) => {
  return (
    <footer className="py-[36px] surface-ink border-t border-white/10 font-sans text-[14px] text-neutral-400">
      <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-[20px]">
        <div className="flex flex-col sm:flex-row items-center gap-[12px] sm:gap-[16px] text-center sm:text-left">
          <span className="text-white font-medium tracking-tight">
            Sami Ben © 2026
          </span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="font-mono text-[13px] text-neutral-400">
            Algiers, DZ // Design & Frontend Engineering
          </span>
        </div>

        <button
          onClick={onScrollTop}
          className="nav-link text-white text-[14px] border-none bg-transparent cursor-pointer"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
};
