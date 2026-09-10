import React from 'react';
import { ProjectItem } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, ExternalLink, Github, Info, Mail } from 'lucide-react';

interface ProjectDemoModalProps {
  project: ProjectItem | null;
  type: 'demo' | 'github' | null;
  onClose: () => void;
  onContact: () => void;
}

export const ProjectDemoModal: React.FC<ProjectDemoModalProps> = ({
  project,
  type,
  onClose,
  onContact,
}) => {
  if (!project || !type) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#131b2e]/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md bg-white rounded-2xl p-6 flex flex-col gap-4 text-[#131b2e] shadow-2xl border border-[#ccc3d8]/40 animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#eaedff]">
          <div className="flex items-center gap-2">
            {type === 'demo' ? (
              <ExternalLink className="w-5 h-5 text-[#7c3aed]" />
            ) : (
              <Github className="w-5 h-5 text-[#131b2e]" />
            )}
            <span className="font-display font-bold text-base text-[#131b2e]">
              {type === 'demo' ? 'Live Demonstration' : 'GitHub Profile'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#4a4455] hover:bg-[#eaedff] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-3.5 rounded-xl bg-[#f2f3ff] border border-[#dae2fd] flex flex-col gap-1.5">
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#7c3aed] font-bold">
            {project.number} • {project.tag}
          </span>
          <h4 className="font-display font-bold text-sm text-[#131b2e]">
            {project.title}
          </h4>
        </div>

        <div className="p-3.5 rounded-xl bg-[#ffdcc6]/30 border border-[#ffdcc6] flex items-start gap-2.5">
          <Info className="w-5 h-5 text-[#7d3d00] shrink-0 mt-0.5" />
          <div className="text-xs text-[#7d3d00] leading-relaxed">
            <p className="font-semibold mb-1">
              {type === 'demo' ? 'Demonstration Notice' : 'GitHub Profile'}
            </p>
            <p>
              {type === 'demo'
                ? 'Live demonstration deployment is in progress. Walkthroughs and discussions are available upon request.'
                : 'Personal GitHub profile is available to view public repositories and projects.'}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 pt-2">
          {type === 'github' ? (
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>Open GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <button
              onClick={() => {
                onClose();
                onContact();
              }}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>
          )}
          <button
            onClick={onClose}
            className="w-full min-h-[44px] flex items-center justify-center px-4 py-2 rounded-xl bg-[#eaedff] hover:bg-[#dae2fd] text-[#131b2e] font-semibold text-sm transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
