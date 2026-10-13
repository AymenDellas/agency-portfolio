import React from 'react';
import { SERVICES_DATA } from '../data/services';

interface ServicesSectionProps {
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onInquireService }) => {
  return (
    <section id="services" className="section-padding surface-ink border-b border-white/10 relative">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-[48px] sm:mb-[64px] pb-[24px] border-b border-white/15">
          <div>
            <span className="font-mono text-[13px] uppercase tracking-widest text-[#0000FF] mb-[8px] block font-semibold">
              03 / SERVICES
            </span>
            <h2 className="font-serif text-[38px] sm:text-[48px] lg:text-[56px] text-white font-normal leading-tight">
              Structured Offerings
            </h2>
          </div>
          <p className="font-sans text-[15px] sm:text-[16px] text-neutral-300 mt-[16px] md:mt-0 max-w-[420px] leading-relaxed">
            Practical creative capabilities and technical solutions tailored for founders, brands, and digital creators.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-[32px]">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="border border-white/15 bg-neutral-900/60 p-[32px] sm:p-[44px] hover:border-white transition-colors duration-300 grid grid-cols-1 lg:grid-cols-12 gap-[32px] items-start"
            >
              {/* Number & Title */}
              <div className="lg:col-span-5 space-y-[16px]">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[13px] text-[#0000FF] font-semibold tracking-wider">
                    // 0{service.number}
                  </span>
                  <span className="font-mono text-[12px] text-neutral-400 uppercase tracking-widest">
                    SERVICE CAPABILITY
                  </span>
                </div>
                <h3 className="font-serif text-[28px] sm:text-[34px] text-white font-normal leading-tight">
                  {service.title}
                </h3>
                <p className="font-sans text-neutral-300 text-[15px] sm:text-[16px] leading-[1.65]">
                  {service.summary}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="lg:col-span-4 space-y-[14px] border-t lg:border-t-0 lg:border-l border-white/10 pt-[24px] lg:pt-0 lg:pl-[36px]">
                <span className="font-mono text-[12px] text-neutral-400 uppercase tracking-wider block font-semibold">
                  DELIVERABLES:
                </span>
                <ul className="space-y-[10px] font-sans text-[14px] sm:text-[15px] text-neutral-200">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-[10px]">
                      <span className="text-[#0000FF] font-bold mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Value Rationale & Trigger */}
              <div className="lg:col-span-3 space-y-[20px] border-t lg:border-t-0 lg:border-l border-white/10 pt-[24px] lg:pt-0 lg:pl-[36px] flex flex-col justify-between h-full">
                <div>
                  <span className="font-mono text-[12px] text-neutral-400 uppercase tracking-wider block mb-[6px] font-semibold">
                    TARGET FIT:
                  </span>
                  <p className="font-sans text-[14px] text-neutral-300 leading-relaxed">
                    {service.idealFor}
                  </p>
                </div>

                <button
                  onClick={() => onInquireService(service.title)}
                  className="btn-primary w-full text-center text-[13px] py-[13px]"
                >
                  Inquire service →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
