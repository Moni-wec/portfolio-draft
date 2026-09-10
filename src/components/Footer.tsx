import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ArrowUp, Mail, Linkedin, Github } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenGithubPlaceholder?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenGithubPlaceholder }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full mt-16 px-4 sm:px-8 py-10 bg-[#f2f3ff] text-[#4a4455] border-t border-[#ccc3d8]/30">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
        <div className="flex items-center justify-between flex-wrap gap-3">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onNavigate('home')}
              className="font-display font-bold text-lg text-[#131b2e] hover:text-[#630ed4] transition-colors cursor-pointer"
            >
              {PERSONAL_INFO.name}
            </button>
            <span className="text-[11px] font-mono tracking-wider text-[#006a61] px-2.5 py-0.5 rounded-full bg-[#86f2e4]/30 font-semibold uppercase">
              PORTFOLIO
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#630ed4] hover:text-[#7c3aed] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
            <span>Back to Top</span>
          </button>
        </div>

        <p className="text-sm text-[#4a4455] max-w-2xl leading-relaxed">
          {PERSONAL_INFO.title} • {PERSONAL_INFO.name}
        </p>

        <div className="flex flex-wrap gap-5 items-center font-mono text-xs text-[#4a4455]">
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="flex items-center gap-1.5 hover:text-[#630ed4] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#7c3aed]" />
            <span>{PERSONAL_INFO.email}</span>
          </a>

          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#630ed4] transition-colors"
          >
            <Linkedin className="w-4 h-4 text-[#006a61]" />
            <span>LinkedIn Profile</span>
          </a>

          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-[#630ed4] transition-colors"
          >
            <Github className="w-4 h-4 text-[#4a4455]" />
            <span>GitHub Profile</span>
          </a>
        </div>

        <div className="pt-4 border-t border-[#ccc3d8]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] font-mono text-[#7b7487] tracking-wider">
          <span>© {new Date().getFullYear()} MONIKA.A • ALL RIGHTS RESERVED</span>
          <span>WEB DEVELOPER • DATA SCIENCE ENTHUSIAST</span>
        </div>
      </div>
    </footer>
  );
};
