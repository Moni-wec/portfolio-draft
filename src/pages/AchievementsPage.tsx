import React from 'react';
import { PageId } from '../types';
import { ACHIEVEMENTS } from '../data/portfolioData';
import {
  Trophy,
  HeartHandshake,
  Vote,
  Code,
  Award,
  ShieldCheck,
  ArrowRight,
  Mail,
  CheckCircle,
} from 'lucide-react';

interface AchievementsPageProps {
  onNavigate: (page: PageId) => void;
}

export const AchievementsPage: React.FC<AchievementsPageProps> = ({ onNavigate }) => {
  const getAchievementIcon = (iconName: string) => {
    switch (iconName) {
      case 'trophy':
        return <Trophy className="w-5 h-5 text-[#ba1a1a]" />;
      case 'users':
        return <HeartHandshake className="w-5 h-5 text-[#006a61]" />;
      case 'vote':
        return <Vote className="w-5 h-5 text-[#7d3d00]" />;
      case 'code':
        return <Code className="w-5 h-5 text-[#7c3aed]" />;
      default:
        return <Award className="w-5 h-5 text-[#7c3aed]" />;
    }
  };

  return (
    <div className="w-full flex flex-col gap-8 md:gap-12 animate-in fade-in duration-300">
      {/* Header Section */}
      <section className="flex flex-col gap-3">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
          Achievements &amp; Activities
        </h1>

        <p className="text-base text-[#4a4455] max-w-3xl leading-relaxed">
          Competitions, campus volunteering, community engagement, and technical workshops.
        </p>
      </section>

      {/* 4 Achievement Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {ACHIEVEMENTS.map((ach) => (
          <article
            key={ach.id}
            className="rounded-2xl bg-white p-5 sm:p-6 border border-[#ccc3d8]/40 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl bg-[#f2f3ff] flex items-center justify-center shrink-0">
                    {getAchievementIcon(ach.icon)}
                  </div>
                  <div>
                    <span className="font-mono text-xs uppercase tracking-wider text-[#006a61] font-semibold block">
                      {ach.category}
                    </span>
                    <h2 className="font-display text-lg sm:text-xl font-bold text-[#131b2e] mt-0.5">
                      {ach.title}
                    </h2>
                  </div>
                </div>

                <span className="px-2.5 py-0.5 rounded-full bg-[#f2f3ff] text-[#4a4455] font-mono text-[11px] font-semibold border border-[#dae2fd]">
                  {ach.subTag}
                </span>
              </div>

              <p className="font-display text-xs text-[#7c3aed] font-medium mt-2">
                {ach.subtitle}
              </p>

              <p className="mt-3 text-xs sm:text-sm text-[#4a4455] leading-relaxed">
                {ach.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#f2f3ff] flex items-center justify-between text-xs">
              <span className="inline-flex items-center gap-1.5 font-mono text-[#005049] bg-[#86f2e4]/30 px-2.5 py-1 rounded-full font-semibold">
                <CheckCircle className="w-3.5 h-3.5 text-[#006a61]" />
                {ach.highlightTag}
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <section className="p-6 sm:p-8 rounded-2xl bg-[#eaedff] border border-[#dae2fd] flex flex-col items-center text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#7c3aed]/15 flex items-center justify-center text-[#7c3aed]">
          <ShieldCheck className="w-6 h-6" />
        </div>

        <div className="flex flex-col gap-1 max-w-xl">
          <h3 className="font-display text-xl font-bold text-[#131b2e]">
            Involvement &amp; Experience
          </h3>
          <p className="text-xs sm:text-sm text-[#4a4455] leading-relaxed">
            Interested in connecting or learning more about my projects and activities?
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-1">
          <button
            onClick={() => onNavigate('contact')}
            className="min-h-[44px] px-6 py-2.5 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-display font-semibold text-sm shadow-md transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Contact Me</span>
          </button>

          <button
            onClick={() => onNavigate('certifications')}
            className="min-h-[44px] px-6 py-2.5 rounded-xl bg-white hover:bg-[#f2f3ff] text-[#131b2e] border border-[#ccc3d8]/60 font-display font-semibold text-sm shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>View Certifications</span>
            <ArrowRight className="w-4 h-4 text-[#7c3aed]" />
          </button>
        </div>
      </section>
    </div>
  );
};
