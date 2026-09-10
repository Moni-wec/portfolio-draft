import React from 'react';
import { PageId } from '../types';
import { SKILL_DOMAINS } from '../data/portfolioData';
import {
  Terminal,
  Code2,
  Brain,
  Database,
  GitBranch,
  ShieldCheck,
  ArrowRight,
  Mail,
} from 'lucide-react';

interface SkillsPageProps {
  onNavigate: (page: PageId) => void;
}

export const SkillsPage: React.FC<SkillsPageProps> = ({ onNavigate }) => {
  const getDomainIcon = (iconName: string) => {
    switch (iconName) {
      case 'terminal':
        return <Terminal className="w-5 h-5" />;
      case 'code':
        return <Code2 className="w-5 h-5" />;
      case 'brain':
        return <Brain className="w-5 h-5" />;
      case 'database':
        return <Database className="w-5 h-5" />;
      case 'git-branch':
        return <GitBranch className="w-5 h-5" />;
      default:
        return <ShieldCheck className="w-5 h-5" />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 md:gap-12 animate-in fade-in duration-300">
      {/* Header Section */}
      <section className="flex flex-col gap-3">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
          Skills
        </h1>

        <p className="text-base text-[#4a4455] max-w-3xl leading-relaxed">
          A technical overview of programming languages, frameworks, data science concepts, databases, and tools applied across coursework and projects.
        </p>
      </section>

      {/* 6 Skill Domain Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {SKILL_DOMAINS.map((domain) => (
          <div
            key={domain.id}
            className="w-full rounded-2xl bg-white p-5 sm:p-6 border border-[#ccc3d8]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="font-display font-bold text-lg text-[#131b2e]">
                    {domain.title}
                  </h2>
                  <p className="font-mono text-xs uppercase text-[#006a61] tracking-wider font-semibold mt-0.5">
                    {domain.focus}
                  </p>
                </div>

                <div className="w-8 h-8 rounded-full bg-[#f2f3ff] flex items-center justify-center text-[#4a4455] shrink-0">
                  {getDomainIcon(domain.icon)}
                </div>
              </div>

              {/* Skills Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {domain.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#f2f3ff] text-[#131b2e] font-mono text-xs font-semibold border border-[#dae2fd]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7c3aed]" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 pt-3 border-t border-[#f2f3ff] text-xs sm:text-sm text-[#4a4455] leading-relaxed">
              {domain.description}
            </p>
          </div>
        ))}
      </div>

      {/* Bottom Navigation CTA */}
      <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#eaedff] to-[#dae2fd] flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs border border-[#ccc3d8]/40">
        <div className="flex flex-col gap-1 text-center sm:text-left">
          <h3 className="font-display text-lg sm:text-xl font-bold text-[#131b2e]">
            See Skills in Action
          </h3>
          <p className="text-xs sm:text-sm text-[#4a4455]">
            Explore the projects built using these technical skills.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => onNavigate('projects')}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-display font-semibold text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => onNavigate('contact')}
            className="min-h-[44px] px-5 py-2.5 rounded-xl bg-white hover:bg-[#f2f3ff] text-[#131b2e] border border-[#ccc3d8]/60 font-display font-semibold text-sm shadow-xs transition-all active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-[#7c3aed]" />
            <span>Contact Me</span>
          </button>
        </div>
      </section>
    </div>
  );
};
