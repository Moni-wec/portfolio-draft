import React from 'react';
import { PageId, ProjectItem } from '../types';
import { PROJECTS, PERSONAL_INFO } from '../data/portfolioData';
import {
  Code,
  ShieldCheck,
  PlayCircle,
  Github,
  MessageSquare,
  Settings,
  Route,
  HelpCircle,
  FileText,
  BarChart3,
  Layers,
  Search,
  ListOrdered,
  Zap,
  Scan,
  CheckSquare,
  AlertTriangle,
  CheckCircle,
  FileSpreadsheet,
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDemoModal: (project: ProjectItem, type: 'demo' | 'github') => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onNavigate,
  onOpenDemoModal,
}) => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'route':
        return <Route className="w-4 h-4 text-[#7c3aed]" />;
      case 'help-circle':
        return <HelpCircle className="w-4 h-4 text-[#7c3aed]" />;
      case 'file-text':
        return <FileText className="w-4 h-4 text-[#7c3aed]" />;
      case 'bar-chart-3':
        return <BarChart3 className="w-4 h-4 text-[#7c3aed]" />;
      case 'layers':
        return <Layers className="w-4 h-4 text-[#006a61]" />;
      case 'search':
        return <Search className="w-4 h-4 text-[#006a61]" />;
      case 'list-ordered':
        return <ListOrdered className="w-4 h-4 text-[#006a61]" />;
      case 'zap':
        return <Zap className="w-4 h-4 text-[#006a61]" />;
      case 'scan':
        return <Scan className="w-4 h-4 text-[#7d3d00]" />;
      case 'check-square':
        return <CheckSquare className="w-4 h-4 text-[#7d3d00]" />;
      case 'alert-triangle':
        return <AlertTriangle className="w-4 h-4 text-[#7d3d00]" />;
      case 'file-spreadsheet':
        return <FileSpreadsheet className="w-4 h-4 text-[#7d3d00]" />;
      default:
        return <CheckCircle className="w-4 h-4 text-[#7c3aed]" />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 md:gap-12 animate-in fade-in duration-300">
      {/* Header Section */}
      <section className="flex flex-col gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#86f2e4]/30 text-[#005049] font-mono text-xs font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006a61]"></span>
            FEATURED WORK
          </span>

          <span className="px-3 py-1 rounded-full bg-[#eaedff] text-[#4a4455] font-mono text-xs font-semibold">
            SELECTED PROJECTS
          </span>
        </div>

        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
          My Projects
        </h1>

        <p className="text-base text-[#4a4455] max-w-3xl leading-relaxed">
          A showcase of practical engineering solutions across full-stack development, NLP-powered retrieval, and automated document compliance.
        </p>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#ccc3d8]/40 shadow-xs text-[#131b2e] font-mono text-xs font-semibold">
            <Code className="w-4 h-4 text-[#7c3aed]" />
            <span>03 Selected Builds</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-[#ccc3d8]/40 shadow-xs text-[#131b2e] font-mono text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-[#006a61]" />
            <span>Verifiable Codebases</span>
          </div>
        </div>
      </section>

      {/* Exactly 3 Project Cards */}
      <div className="flex flex-col gap-8">
        {PROJECTS.map((project, idx) => {
          const isViolet = idx === 0;
          const isTeal = idx === 1;
          const isAmber = idx === 2;

          const badgeBg = isViolet
            ? 'bg-[#7c3aed] text-white'
            : isTeal
            ? 'bg-[#006a61] text-white'
            : 'bg-[#7d3d00] text-white';

          const categoryColor = isViolet
            ? 'text-[#630ed4] bg-[#eaedff]'
            : isTeal
            ? 'text-[#006a61] bg-[#86f2e4]/30'
            : 'text-[#7d3d00] bg-[#ffdcc6]/40';

          const contributionBg = isViolet
            ? 'bg-[#7c3aed]/10 text-[#630ed4]'
            : isTeal
            ? 'bg-[#006a61]/10 text-[#006a61]'
            : 'bg-[#7d3d00]/10 text-[#7d3d00]';

          return (
            <article
              key={project.id}
              className="w-full flex flex-col rounded-2xl bg-white border border-[#ccc3d8]/40 shadow-sm overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="p-6 sm:p-8 flex flex-col gap-5">
                {/* Header Row */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded-md font-bold ${badgeBg}`}
                    >
                      {project.number}
                    </span>

                    <span
                      className={`font-mono text-xs px-2.5 py-1 rounded-md font-semibold ${categoryColor}`}
                    >
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#131b2e]">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm sm:text-base text-[#4a4455] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[#f2f3ff] text-[#131b2e] font-mono text-xs font-semibold border border-[#dae2fd]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Key Features Grid */}
                <div className="flex flex-col gap-2 pt-1">
                  <span className="font-mono text-xs text-[#4a4455] uppercase font-bold tracking-wider">
                    Key Features
                  </span>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {project.features.map((feat) => (
                      <div
                        key={feat.label}
                        className="flex items-center gap-2 p-3 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]"
                      >
                        {getFeatureIcon(feat.icon)}

                        <span className="text-xs sm:text-sm font-medium text-[#131b2e]">
                          {feat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* My Contribution */}
                {project.contribution && (
                  <div className="p-4 rounded-xl bg-[#eaedff]/60 border border-[#ccc3d8]/40 flex flex-col gap-1">
                    <span
                      className={`font-mono text-xs uppercase font-bold tracking-wider ${
                        contributionBg.split(' ')[1]
                      }`}
                    >
                      My Contribution
                    </span>

                    <p className="text-xs sm:text-sm text-[#131b2e] leading-relaxed">
                      {project.contribution}
                    </p>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {/* Live Demo */}
                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-display font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      onClick={() => onOpenDemoModal(project, 'demo')}
                      className="min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-display font-semibold text-sm transition-all shadow-md active:scale-98 cursor-pointer"
                    >
                      <PlayCircle className="w-4 h-4" />
                      <span>Live Demo</span>
                    </button>
                  )}

                  {/* GitHub */}
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-[#f2f3ff] hover:bg-[#eaedff] text-[#131b2e] border border-[#ccc3d8]/60 font-display font-semibold text-sm transition-all active:scale-98 cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Repository</span>
                    </a>
                  ) : (
                    <a
                      href={PERSONAL_INFO.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] flex items-center justify-center gap-2 rounded-xl bg-[#f2f3ff] hover:bg-[#eaedff] text-[#131b2e] border border-[#ccc3d8]/60 font-display font-semibold text-sm transition-all active:scale-98 cursor-pointer"
                    >
                      <Github className="w-4 h-4" />
                      <span>GitHub Profile</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Bottom CTA Card */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#eaedff] border border-[#dae2fd] flex flex-col items-center text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#7c3aed]/15 flex items-center justify-center text-[#7c3aed]">
          <Code className="w-6 h-6" />
        </div>

        <div className="flex flex-col gap-1 max-w-xl">
          <h3 className="font-display text-xl font-bold text-[#131b2e]">
            Interested in Project Discussions or Code Walkthroughs?
          </h3>

          <p className="text-xs sm:text-sm text-[#4a4455] leading-relaxed">
            Feel free to connect to discuss technical implementation, project workflows, or collaboration.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1">
          <button
            onClick={() => onNavigate('contact')}
            className="min-h-[44px] px-6 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-display font-semibold text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Me</span>
          </button>

          <button
            onClick={() => onNavigate('skills')}
            className="min-h-[44px] px-6 py-2.5 rounded-xl bg-white hover:bg-[#f2f3ff] text-[#131b2e] border border-[#ccc3d8]/60 font-display font-semibold text-sm shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Settings className="w-4 h-4 text-[#7c3aed]" />
            <span>View Technical Skills</span>
          </button>
        </div>
      </section>
    </div>
  );
};