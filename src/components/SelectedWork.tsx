import React from 'react';
import { PROJECTS_DATA } from '../data/projects';
import { CaseStudyData } from '../types';

interface SelectedWorkProps {
  onSelectProject: (project: CaseStudyData) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="section-padding surface-ink border-b border-white/10 relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[48px] sm:mb-[64px] pb-[24px] border-b border-white/15">
          <div>
            <span className="font-mono text-[13px] uppercase tracking-widest text-[#0000FF] mb-[10px] block font-semibold">
              01 / SELECTED WORK
            </span>
            <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] text-white font-normal leading-tight">
              Featured Case Studies & Systems
            </h2>
          </div>
          <p className="font-sans text-[15px] sm:text-[16px] text-neutral-300 mt-[16px] md:mt-0 max-w-[420px] leading-relaxed">
            Curated projects highlighting the synthesis of brand identity systems, graphic design, and frontend engineering.
          </p>
        </div>

        {/* Rebalanced 3-Project Editorial Grid */}
        <div className="site-grid">
          {PROJECTS_DATA.map((project, index) => {
            const isPrimary = index === 0;
            // Primary project gets full 12-column span; other two split 6 columns each on desktop
            const colSpan = isPrimary
              ? 'col-span-4 sm:col-span-6 lg:col-span-12'
              : 'col-span-4 sm:col-span-6 lg:col-span-6';

            return (
              <article
                key={project.id}
                onClick={() => onSelectProject(project)}
                className={`group cursor-pointer border border-white/15 bg-neutral-900/60 hover:border-white transition-colors duration-300 flex flex-col justify-between ${colSpan}`}
              >
                {/* Visual Preview Banner */}
                <div className={`relative overflow-hidden ${isPrimary ? 'aspect-[16/9] lg:aspect-[21/9]' : 'aspect-[16/10]'} border-b border-white/15 bg-neutral-950`}>
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-[1.015] transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-[16px] left-[16px] bg-[#171717] text-white font-mono text-[12px] px-[12px] py-[5px] uppercase tracking-widest border border-white/20 font-medium">
                    PROJECT 0{index + 1}
                  </div>
                  <div className="absolute top-[16px] right-[16px] bg-[#0000FF] text-white font-mono text-[12px] px-[12px] py-[5px] uppercase tracking-widest font-semibold">
                    {project.discipline}
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-[28px] sm:p-[36px] flex flex-col justify-between flex-grow">
                  <div>
                    {/* Client & Year Metadata */}
                    <div className="flex items-center justify-between text-neutral-400 font-mono text-[13px] sm:text-[14px] mb-[12px] tracking-wide">
                      <span className="font-medium text-neutral-300">{project.client}</span>
                      <span className="text-[#0000FF] font-semibold">{project.year}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className={`font-serif ${isPrimary ? 'text-[36px] sm:text-[44px]' : 'text-[30px] sm:text-[36px]'} text-white group-hover:text-[#F5F1E8] transition-colors mb-[12px] leading-tight`}>
                      {project.title}
                    </h3>

                    {/* Tagline / Description */}
                    <p className="font-sans text-neutral-300 text-[16px] sm:text-[17px] leading-relaxed mb-[24px]">
                      {project.tagline}
                    </p>

                    {/* Project Tags (Distinct Visual Hierarchy) */}
                    <div className="mb-[24px]">
                      <span className="font-mono text-[11px] text-neutral-400 uppercase tracking-widest block mb-[10px]">
                        CORE DISCIPLINES & ROLES:
                      </span>
                      <div className="flex flex-wrap gap-[8px]">
                        {project.role.map((r) => (
                          <span key={r} className="tag-editorial">
                            <span className="text-[#0000FF] font-mono text-[11px]">//</span>
                            <span>{r}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action Row */}
                  <div className="pt-[20px] border-t border-white/10 flex items-center justify-between">
                    <span className="font-mono text-[12px] text-neutral-400 uppercase tracking-wider">
                      CASE STUDY SPEC
                    </span>
                    <span className="font-sans text-[14px] sm:text-[15px] font-semibold uppercase tracking-wider text-white group-hover:text-[#0000FF] transition-colors flex items-center gap-[8px]">
                      <span>Explore Case Study</span>
                      <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
