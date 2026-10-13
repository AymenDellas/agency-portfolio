import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding surface-paper border-b border-[#171717]/10 relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[48px] sm:mb-[64px] pb-[24px] border-b border-[#171717]/15">
          <div>
            <span className="font-mono text-[13px] uppercase tracking-widest text-[#0000FF] mb-[8px] block font-semibold">
              02 / ABOUT
            </span>
            <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] text-[#171717] font-normal leading-tight">
              Design & Technical Craft
            </h2>
          </div>
          <p className="font-sans text-[15px] sm:text-[16px] text-[#171717]/75 mt-[16px] md:mt-0 max-w-[380px] leading-relaxed">
            Combining visual judgment with technical implementation to deliver complete digital solutions.
          </p>
        </div>

        {/* 12-Column Grid Layout */}
        <div className="site-grid">
          {/* Left Column: Intro & Approach */}
          <div className="col-span-4 sm:col-span-6 lg:col-span-7 space-y-[24px]">
            <h3 className="font-serif text-[28px] sm:text-[36px] text-[#171717] leading-snug font-normal">
              "I build complete creative solutions, combining brand design with modern frontend development."
            </h3>

            <p className="font-sans text-[#171717]/85 text-[17px] sm:text-[18px] leading-[1.65] font-normal">
              I am <strong className="font-semibold text-[#171717]">Sami Ben</strong> — a designer and developer based in Algiers. My work spans website design and development, brand identity systems, graphic design, and social media video editing & scripting.
            </p>

            <p className="font-sans text-[#171717]/85 text-[17px] sm:text-[18px] leading-[1.65] font-normal">
              By working across both visual design and engineering, I ensure that creative intent is preserved cleanly in production, creating digital experiences and media that perform reliably.
            </p>

            <div className="p-[24px] bg-[#171717]/5 border border-[#171717]/15 mt-[32px]">
              <span className="font-mono text-[12px] text-[#0000FF] font-semibold uppercase tracking-wider block mb-[8px]">
                CREDIBILITY & HONESTY
              </span>
              <p className="font-sans text-[14px] sm:text-[15px] text-[#171717]/80 leading-relaxed">
                Self-initiated projects are clearly identified. I do not invent fake client names, fabricated metrics, or synthetic awards.
              </p>
            </div>
          </div>

          {/* Right Column: Services & Capabilities Grid */}
          <div className="col-span-4 sm:col-span-6 lg:col-span-5 space-y-[24px]">
            <div className="border border-[#171717]/15 bg-white p-[32px] sm:p-[36px]">
              <span className="font-mono text-[12px] text-[#0000FF] font-semibold uppercase tracking-wider block mb-[20px] pb-[10px] border-b border-[#171717]/10">
                // CORE CAPABILITIES
              </span>
              <ul className="space-y-[14px] font-mono text-[13px] sm:text-[14px] text-[#171717]">
                <li className="flex items-center justify-between pb-[10px] border-b border-neutral-200">
                  <span className="font-medium">WEBSITE DESIGN & DEV</span>
                  <span className="font-semibold text-[#0000FF]">REACT / VITE</span>
                </li>
                <li className="flex items-center justify-between pb-[10px] border-b border-neutral-200">
                  <span className="font-medium">BRAND IDENTITY & LOGOS</span>
                  <span className="font-semibold text-[#0000FF]">SYSTEMS</span>
                </li>
                <li className="flex items-center justify-between pb-[10px] border-b border-neutral-200">
                  <span className="font-medium">GRAPHIC DESIGN</span>
                  <span className="font-semibold text-[#0000FF]">PRINT & DIGITAL</span>
                </li>
                <li className="flex items-center justify-between">
                  <span className="font-medium">SOCIAL VIDEO & SCRIPTING</span>
                  <span className="font-semibold text-[#0000FF]">REELS / SHORTS</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
