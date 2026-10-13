import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CaseStudyData } from '../types';

interface CaseStudyModalProps {
  project: CaseStudyData | null;
  onClose: () => void;
  onSelectNext: (nextProject: CaseStudyData) => void;
  allProjects: CaseStudyData[];
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onSelectNext,
  allProjects,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  const surfaceClass = 
    project.surfaceTheme === 'paper' 
      ? 'surface-paper' 
      : project.surfaceTheme === 'black'
      ? 'surface-ink'
      : project.surfaceTheme === 'blue'
      ? 'surface-blue'
      : 'surface-white';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-0 sm:p-4 md:p-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className={`w-full max-w-5xl min-h-screen sm:min-h-0 border border-white/20 shadow-2xl relative flex flex-col justify-between ${surfaceClass}`}
        >
          {/* Modal Sticky Top Navigation Bar */}
          <div className="sticky top-0 z-20 px-6 sm:px-8 py-4 border-b border-current/15 bg-inherit backdrop-blur-md flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[12px] font-bold text-[#0000FF] uppercase tracking-widest border border-[#0000FF]/40 px-2.5 py-1">
                CASE STUDY 0{currentIndex + 1}
              </span>
              <span className="font-sans font-bold text-[14px] sm:text-[15px] tracking-wider uppercase">
                {project.title}
              </span>
            </div>

            <button
              onClick={onClose}
              className="font-mono text-[12px] font-bold uppercase tracking-widest px-4 py-2 bg-black text-white hover:bg-[#0000FF] hover:text-white transition-colors cursor-pointer border border-white/20"
              aria-label="Close Case Study"
            >
              [✕ CLOSE]
            </button>
          </div>

          {/* Modal Main Content Container */}
          <div className="p-6 sm:p-12 space-y-16">
            {/* 1. OPENING SECTION */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[13px] text-current/80 border-b border-current/15 pb-4">
                <div>CLIENT: <strong className="text-current font-semibold">{project.client}</strong></div>
                <div>YEAR: <strong className="text-current font-semibold">{project.year}</strong></div>
                <div>DISCIPLINE: <strong className="text-[#0000FF] font-semibold">{project.discipline}</strong></div>
              </div>

              <h1 className="font-serif text-4xl sm:text-6xl font-normal leading-tight">
                {project.tagline}
              </h1>

              <p className="font-sans text-[17px] sm:text-[19px] text-current/85 font-normal leading-relaxed max-w-3xl">
                {project.summary}
              </p>

              {/* Roles Badge List with High Visual Hierarchy */}
              <div className="pt-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-current/60 block mb-2">
                  DISCIPLINES & DELIVERABLES:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {project.role.map((r) => (
                    <span
                      key={r}
                      className="font-mono text-[12px] sm:text-[13px] px-3 py-1.5 bg-current/10 border border-current/25 font-medium flex items-center gap-1.5 uppercase tracking-wider"
                    >
                      <span className="text-[#0000FF] font-bold">//</span>
                      <span>{r}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Cover Showcase Image */}
              <div className="pt-6">
                <div className="border border-current/20 overflow-hidden shadow-lg bg-neutral-950">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 2. THE CHALLENGE */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-current/15">
              <div className="md:col-span-4">
                <span className="font-mono text-[12px] text-[#0000FF] font-bold uppercase tracking-widest">
                  01 / THE CHALLENGE
                </span>
                <h3 className="font-serif text-3xl font-normal mt-2">
                  Problem & Constraints
                </h3>
              </div>
              <div className="md:col-span-8 space-y-4 font-sans text-[16px] sm:text-[17px] leading-relaxed text-current/85">
                <p>{project.challenge}</p>
              </div>
            </div>

            {/* 3. CREATIVE DIRECTION & RATIONALE */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-current/15">
              <div className="md:col-span-4">
                <span className="font-mono text-[12px] text-[#0000FF] font-bold uppercase tracking-widest">
                  02 / DIRECTION
                </span>
                <h3 className="font-serif text-3xl font-normal mt-2">
                  Visual Concept & Rationale
                </h3>
              </div>
              <div className="md:col-span-8 space-y-4 font-sans text-[16px] sm:text-[17px] leading-relaxed text-current/85">
                <p>{project.direction}</p>
                <p className="font-serif italic text-xl text-[#0000FF] pt-2">
                  "{project.systemDescription}"
                </p>
              </div>
            </div>

            {/* 4. SYSTEM & ARTIFACTS SHOWCASE */}
            <div className="space-y-8 pt-8 border-t border-current/15">
              <div>
                <span className="font-mono text-[12px] text-[#0000FF] font-bold uppercase tracking-widest">
                  03 / SYSTEM ARTIFACTS
                </span>
                <h3 className="font-serif text-3xl font-normal mt-2">
                  Identity Elements & Tokens
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.artifacts.map((artifact, i) => (
                  <div
                    key={i}
                    className="p-6 border border-current/20 bg-current/5 flex flex-col justify-between space-y-4"
                  >
                    <div>
                      <div className="font-mono text-[12px] text-[#0000FF] font-bold uppercase tracking-widest mb-1">
                        ARTIFACT {String(i + 1).padStart(2, '0')} // {artifact.type}
                      </div>
                      <h4 className="font-serif text-2xl mb-2">{artifact.title}</h4>
                      <p className="font-sans text-[15px] text-current/80 leading-relaxed">
                        {artifact.caption}
                      </p>
                    </div>

                    {/* Render Palette Swatches */}
                    {artifact.paletteColors && (
                      <div className="flex gap-2 pt-4 border-t border-current/10">
                        {artifact.paletteColors.map((color) => (
                          <div key={color} className="flex-1 text-center">
                            <div
                              className="h-12 border border-black/20 mb-1"
                              style={{ backgroundColor: color }}
                            />
                            <span className="font-mono text-[11px] uppercase font-semibold">
                              {color}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Render Code Snippets */}
                    {artifact.codeSnippet && (
                      <pre className="font-mono text-[13px] p-4 bg-black text-white overflow-x-auto border border-white/10 leading-normal">
                        <code>{artifact.codeSnippet}</code>
                      </pre>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* 5. RESPONSIVE EXECUTION & LINKS */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-current/15">
              <div className="md:col-span-4">
                <span className="font-mono text-[12px] text-[#0000FF] font-bold uppercase tracking-widest">
                  04 / EXECUTION
                </span>
                <h3 className="font-serif text-3xl font-normal mt-2">
                  Responsive Frontend Implementation
                </h3>
              </div>
              <div className="md:col-span-8 space-y-6">
                <p className="font-sans text-[16px] sm:text-[17px] leading-relaxed text-current/85">
                  {project.responsiveShowcase.description}
                </p>

                {/* External Links */}
                <div className="flex flex-wrap gap-4 pt-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] font-bold uppercase tracking-widest px-5 py-3 bg-[#0000FF] text-white hover:bg-black transition-colors border border-[#0000FF] no-underline"
                    >
                      VISIT LIVE DEMO →
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[13px] font-bold uppercase tracking-widest px-5 py-3 bg-transparent text-current border border-current hover:bg-current hover:text-black transition-colors no-underline"
                    >
                      VIEW GITHUB CODEBASE →
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* 6. REFLECTION & LESSONS */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-8 border-t border-current/15">
              <div className="md:col-span-4">
                <span className="font-mono text-[12px] text-[#0000FF] font-bold uppercase tracking-widest">
                  05 / REFLECTION
                </span>
                <h3 className="font-serif text-3xl font-normal mt-2">
                  Lessons & Impact
                </h3>
              </div>
              <div className="md:col-span-8 font-sans text-[16px] sm:text-[17px] leading-relaxed text-current/85">
                <p>{project.reflection}</p>
              </div>
            </div>
          </div>

          {/* Modal Footer: Next Project Switcher */}
          <div className="px-6 sm:px-12 py-8 border-t border-current/15 bg-black/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <span className="font-mono text-[12px] text-current/70 uppercase tracking-widest block mb-1">
                NEXT CASE STUDY [{(currentIndex + 2) > allProjects.length ? '01' : String(currentIndex + 2).padStart(2, '0')}]
              </span>
              <h4 className="font-serif text-2xl text-current font-normal">
                {nextProject.title} — {nextProject.discipline}
              </h4>
            </div>

            <button
              onClick={() => onSelectNext(nextProject)}
              className="font-mono text-[13px] font-bold uppercase tracking-widest px-6 py-3 bg-[#0000FF] text-white hover:bg-white hover:text-black transition-colors cursor-pointer border border-[#0000FF]"
            >
              NEXT PROJECT →
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
