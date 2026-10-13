import React from 'react';

interface HeroProps {
  onExploreWork: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onContactClick }) => {
  return (
    <section
      className="relative min-h-[calc(100vh-72px)] pt-[112px] sm:pt-[128px] pb-[64px] surface-paper border-b border-[#171717]/10 flex flex-col justify-between"
    >
      <div className="site-container w-full my-auto">
        <div className="site-grid">
          {/* Main Hero Headline - Spans full grid with stable editorial letter-spacing */}
          <div className="col-span-4 sm:col-span-6 lg:col-span-12">
            <h1
              className="font-serif text-[clamp(44px,7.8vw,124px)] leading-[0.98] text-[#171717] tracking-[-0.025em] select-none max-w-full"
            >
              Visual judgment{' '}
              <span className="font-serif italic text-[#0000FF] inline-block font-normal">
                meets
              </span>{' '}
              engineering{' '}
              <span className="font-sans font-extrabold uppercase tracking-tight text-[#171717]">
                PRECISION.
              </span>
            </h1>
          </div>

          {/* Intro Paragraph & Action Row */}
          <div className="col-span-4 sm:col-span-6 lg:col-span-8 mt-[32px] sm:mt-[40px] space-y-[32px]">
            <p className="font-sans text-[17px] sm:text-[19px] lg:text-[20px] leading-[1.6] text-[#171717]/85 font-normal max-w-[56ch]">
              I am <strong className="font-semibold text-[#171717]">Sami Ben</strong> — a designer and frontend developer based in Algiers. I create high-craft websites, brand identity systems, and engaging short-form social video content.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-[16px]">
              <button onClick={onContactClick} className="btn-primary">
                Start a project
              </button>
              <button onClick={onExploreWork} className="btn-secondary">
                View selected work
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Editorial Cue at bottom */}
      <div className="site-container w-full pt-[48px] flex flex-wrap justify-between items-center gap-4 text-[13px] font-mono text-[#171717]/70 border-t border-[#171717]/10 mt-[48px]">
        <div className="flex items-center gap-3">
          <span className="inline-block w-2 h-2 bg-[#0000FF]"></span>
          <span>[ALGIERS, DZ — GMT+1]</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline">SELECTED PROJECTS 2026</span>
          <span className="text-[#0000FF] font-semibold">SCROLL FOR WORK ↓</span>
        </div>
      </div>
    </section>
  );
};
