import React from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Code,
  Database,
  CheckSquare,
  Shield,
  Cpu,
  Cloud,
  Handshake,
  Mail,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-12 animate-in fade-in duration-300">
      {/* Profile & Intro Card */}
      <section className="relative overflow-hidden bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-[#ccc3d8]/40 flex flex-col gap-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          <div className="relative shrink-0">
            <img
              src={PERSONAL_INFO.photoAbout}
              alt="Monika A - Profile"
              className="w-28 h-32 object-cover rounded-xl shadow-md border border-[#ccc3d8]/50"
            />
          </div>

          <div className="flex flex-col text-center sm:text-left min-w-0 flex-1">
            <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight">
              {PERSONAL_INFO.name}
            </h1>

            <p className="font-display font-semibold text-base sm:text-lg text-[#630ed4] mt-1">
              {PERSONAL_INFO.title}
            </p>

            <div className="mt-4 p-4 sm:p-5 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]">
              <p className="text-sm sm:text-base text-[#4a4455] leading-relaxed">
                {PERSONAL_INFO.bioAbout}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas of Interest */}
      <section className="flex flex-col gap-4">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-[#131b2e]">
          Areas of Interest
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Web Development */}
          <div className="bg-white p-4 rounded-xl border border-[#ccc3d8]/40 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#7c3aed] shrink-0">
              <Code className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-sm text-[#131b2e]">
                Web Development
              </span>
              <span className="text-xs text-[#4a4455]">
                Responsive web applications and lightweight APIs
              </span>
            </div>
          </div>

          {/* Data Science */}
          <div className="bg-white p-4 rounded-xl border border-[#ccc3d8]/40 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#006a61] shrink-0">
              <Database className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-sm text-[#131b2e]">
                Data Science
              </span>
              <span className="text-xs text-[#4a4455]">
                Data analysis, machine learning &amp; OCR
              </span>
            </div>
          </div>

          {/* Software Testing */}
          <div className="bg-white p-4 rounded-xl border border-[#ccc3d8]/40 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#7c3aed] shrink-0">
              <CheckSquare className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-sm text-[#131b2e]">
                Software Testing
              </span>
              <span className="text-xs text-[#4a4455]">
                Manual testing and quality verification
              </span>
            </div>
          </div>

          {/* Networking & Cybersecurity */}
          <div className="bg-white p-4 rounded-xl border border-[#ccc3d8]/40 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#006a61] shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-sm text-[#131b2e]">
                Networking &amp; Cybersecurity
              </span>
              <span className="text-xs text-[#4a4455]">
                Network fundamentals and security principles
              </span>
            </div>
          </div>

          {/* Embedded Systems & IoT */}
          <div className="bg-white p-4 rounded-xl border border-[#ccc3d8]/40 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#7d3d00] shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-sm text-[#131b2e]">
                Embedded Systems &amp; IoT
              </span>
              <span className="text-xs text-[#4a4455]">
                Sensors, microcontrollers, and Industry 4.0
              </span>
            </div>
          </div>

          {/* Cloud Technologies */}
          <div className="bg-white p-4 rounded-xl border border-[#ccc3d8]/40 shadow-xs flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#f2f3ff] flex items-center justify-center text-[#7c3aed] shrink-0">
              <Cloud className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-display font-bold text-sm text-[#131b2e]">
                Cloud Technologies
              </span>
              <span className="text-xs text-[#4a4455]">
                Cloud computing concepts and deployment
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Bottom CTA: Let's Connect */}
      <section className="bg-gradient-to-tr from-[#630ed4] to-[#7c3aed] text-white rounded-2xl p-6 sm:p-8 shadow-[0_12px_32px_rgba(124,58,237,0.2)] flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
            <Handshake className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Let's Connect
            </h3>
            <p className="text-sm text-[#ede0ff] mt-1 max-w-lg leading-relaxed">
              Interested in discussing web development, data science, or academic projects? Feel free to reach out.
            </p>
          </div>
        </div>

        <button
          onClick={() => onNavigate('contact')}
          className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-xl bg-white hover:bg-[#faf8ff] text-[#630ed4] font-display font-bold text-sm sm:text-base shadow-sm active:scale-95 transition-transform shrink-0 flex items-center justify-center gap-2 cursor-pointer"
        >
          <Mail className="w-4 h-4 text-[#7c3aed]" />
          <span>Contact Me</span>
        </button>
      </section>
    </div>
  );
};
