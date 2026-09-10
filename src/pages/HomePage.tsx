import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO, CORE_TOOLS } from '../data/portfolioData';
import {
  Layers,
  BarChart2,
  Brain,
  ArrowRight,
  Mail,
  Cpu,
  Star,
  ArrowUpRight,
  Github,
  Linkedin,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenGithubPlaceholder: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenGithubPlaceholder,
}) => {
  return (
    <div className="w-full flex flex-col gap-10 md:gap-14 animate-in fade-in duration-300">
      {/* Hero Section */}
      <section className="relative w-full pt-2 md:pt-6">
        {/* Ambient background glow */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[#7c3aed]/10 rounded-full blur-3xl pointer-events-none -z-10" />
        <div className="absolute top-40 left-0 w-64 h-64 bg-[#86f2e4]/20 rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Hero Text Column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left flex-1 max-w-xl">
            <span className="font-mono text-xs uppercase tracking-widest text-[#4a4455] font-semibold mb-1">
              PORTFOLIO
            </span>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#131b2e] tracking-tight leading-none mb-3">
              {PERSONAL_INFO.name}
            </h1>

            <div className="inline-block px-3.5 py-1.5 rounded-xl bg-[#eaedff] text-[#630ed4] font-display font-bold text-sm sm:text-base mb-5 border border-[#ccc3d8]/40">
              Web Developer <span className="text-[#ccc3d8] mx-1">|</span> Data Science Enthusiast
            </div>

            {/* Mobile Profile Photo (Visible on mobile/tablet, desktop has it on side) */}
            <div className="lg:hidden relative w-full max-w-[280px] mx-auto my-3">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl p-2 border border-[#ccc3d8]/40">
                <div className="relative aspect-[0.78] w-full overflow-hidden rounded-xl bg-[#eaedff]">
                  <img
                    src={PERSONAL_INFO.photoHero}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <p className="text-base text-[#4a4455] leading-relaxed mb-6 max-w-lg">
              {PERSONAL_INFO.bioHome}
            </p>

            {/* Focus Areas */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f3ff] border border-[#dae2fd] text-[#131b2e] text-xs font-medium">
                <Layers className="w-3.5 h-3.5 text-[#7c3aed]" />
                Web Development
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f3ff] border border-[#dae2fd] text-[#131b2e] text-xs font-medium">
                <BarChart2 className="w-3.5 h-3.5 text-[#006a61]" />
                Data Science
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f2f3ff] border border-[#dae2fd] text-[#131b2e] text-xs font-medium">
                <Brain className="w-3.5 h-3.5 text-[#7d3d00]" />
                Software Engineering
              </span>
            </div>

            {/* Action Buttons */}
            <div className="w-full flex flex-col sm:flex-row gap-3 pt-1">
              <button
                onClick={() => onNavigate('projects')}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-display font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-[0_6px_20px_rgba(124,58,237,0.25)] active:scale-95 transition-all cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="min-h-[48px] px-6 py-3 rounded-xl bg-white hover:bg-[#f2f3ff] text-[#131b2e] border border-[#ccc3d8]/60 font-display font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs active:scale-95 transition-all cursor-pointer"
              >
                <Mail className="w-4 h-4 text-[#7c3aed]" />
                <span>Contact Me</span>
              </button>
            </div>

            {/* Quick Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-4 pt-2">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#eaedff] text-[#4a4455] hover:text-[#630ed4] font-mono text-xs transition-colors cursor-pointer"
              >
                <Github className="w-4 h-4" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#eaedff] text-[#4a4455] hover:text-[#630ed4] font-mono text-xs transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#006a61]" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Desktop Profile Card Column (Visible on lg screens) */}
          <div className="hidden lg:block relative w-full max-w-[340px] shrink-0">
            <div className="relative overflow-hidden rounded-2xl bg-white shadow-2xl p-2.5 border border-[#ccc3d8]/40">
              <div className="relative aspect-[0.78] w-full overflow-hidden rounded-xl bg-[#eaedff]">
                <img
                  src={PERSONAL_INFO.photoHero}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Tooling Section */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="w-5 h-5 text-[#7c3aed]" />
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#131b2e]">
              Technical Tooling
            </h2>
          </div>
          <span className="font-mono text-xs text-[#4a4455] uppercase tracking-wider">
            Core Stack
          </span>
        </div>

        <div className="flex flex-wrap gap-2.5 p-4 rounded-2xl bg-white border border-[#ccc3d8]/40 shadow-xs">
          {CORE_TOOLS.map((tool) => (
            <span
              key={tool.name}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#f2f3ff] text-[#131b2e] font-mono text-xs sm:text-sm font-semibold border border-[#dae2fd] hover:bg-[#eaedff] transition-colors"
            >
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: tool.color }}
              />
              {tool.name}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Works Preview Section */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-[#006a61]" />
            <h2 className="font-display text-xl sm:text-2xl font-bold text-[#131b2e]">
              Featured Works
            </h2>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="font-mono text-xs sm:text-sm text-[#7c3aed] hover:text-[#630ed4] flex items-center gap-1 font-semibold cursor-pointer"
          >
            <span>See all</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Project Card */}
        <div
          onClick={() => onNavigate('projects')}
          className="group flex flex-col rounded-2xl bg-white p-5 sm:p-6 border border-[#ccc3d8]/40 shadow-sm hover:shadow-xl transition-all cursor-pointer hover:border-[#7c3aed]/40"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#006a61] font-semibold mb-1">
                Web Development &amp; AI
              </span>
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#131b2e] group-hover:text-[#630ed4] transition-colors">
                LearnAI – Personalized Education Platform
              </h3>
            </div>
            <div className="w-10 h-10 rounded-full bg-[#f2f3ff] flex items-center justify-center text-[#7c3aed] shrink-0 group-hover:bg-[#7c3aed] group-hover:text-white transition-all">
              <ArrowUpRight className="w-5 h-5" />
            </div>
          </div>

          <p className="text-sm text-[#4a4455] mt-2 leading-relaxed">
            An AI-driven learning platform featuring personalized learning paths, interactive quizzes, automated summaries, and student progress tracking.
          </p>

          <div className="flex flex-wrap items-center gap-2 mt-4 pt-3 border-t border-[#f2f3ff]">
            <span className="px-2.5 py-1 rounded bg-[#eaedff] text-[#131b2e] font-mono text-xs">
              Python
            </span>
            <span className="px-2.5 py-1 rounded bg-[#eaedff] text-[#131b2e] font-mono text-xs">
              Flask
            </span>
            <span className="px-2.5 py-1 rounded bg-[#eaedff] text-[#131b2e] font-mono text-xs">
              HTML
            </span>
            <span className="px-2.5 py-1 rounded bg-[#eaedff] text-[#131b2e] font-mono text-xs">
              CSS
            </span>
            <span className="ml-auto font-mono text-xs text-[#630ed4] bg-[#eaedff] px-2.5 py-1 rounded-full font-semibold">
              Featured Project
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
