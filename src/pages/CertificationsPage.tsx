import React from 'react';
import { PageId, CertificationItem } from '../types';
import { CERTIFICATIONS } from '../data/portfolioData';
import {
  Calendar,
  Clock,
  ExternalLink,
  ShieldCheck,
  ArrowRight,
  Mail,
} from 'lucide-react';

interface CertificationsPageProps {
  onNavigate: (page: PageId) => void;
  onSelectCert: (cert: CertificationItem) => void;
}

export const CertificationsPage: React.FC<CertificationsPageProps> = ({
  onNavigate,
  onSelectCert,
}) => {
  return (
    <div className="w-full flex flex-col gap-8 md:gap-12 animate-in fade-in duration-300">
      {/* Header Section */}
      <section className="flex flex-col gap-3">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
          Certifications
        </h1>

        <p className="text-base text-[#4a4455] max-w-3xl leading-relaxed">
          Coursework and certifications completed across accredited platforms including NPTEL, Cisco, and Udemy.
        </p>
      </section>

      {/* Certification Cards List */}
      <div className="flex flex-col gap-4">
        {CERTIFICATIONS.map((cert) => (
          <article
            key={cert.id}
            className="w-full rounded-2xl bg-white p-5 sm:p-6 border border-[#ccc3d8]/40 shadow-xs hover:shadow-md transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
          >
            <div className="flex flex-col gap-2.5 flex-1 min-w-0">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3 py-1 rounded-md bg-[#f2f3ff] text-[#131b2e] font-mono text-xs font-bold border border-[#dae2fd]">
                  {cert.provider}
                </span>
              </div>

              <div>
                <h2 className="font-display text-lg sm:text-xl font-bold text-[#131b2e]">
                  {cert.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-4 pt-1 text-xs text-[#4a4455]">
                {cert.durationValue && (
                  <div className="flex items-center gap-1.5 font-mono">
                    <Clock className="w-3.5 h-3.5 text-[#7c3aed]" />
                    <span>
                      Duration:{' '}
                      <strong className="text-[#131b2e]">
                        {cert.durationValue}
                      </strong>
                    </span>
                  </div>
                )}

                <div className="flex items-center gap-1.5 font-mono">
                  <Calendar className="w-3.5 h-3.5 text-[#006a61]" />
                  <span>
                    Completion:{' '}
                    <strong className="text-[#131b2e]">
                      {cert.completionValue}
                    </strong>
                  </span>
                </div>
              </div>
            </div>

            {/* View Certificate Button */}
            <div className="w-full md:w-auto shrink-0 pt-2 md:pt-0">
              <button
                onClick={() => {
                  if (cert.certificateUrl) {
                    window.open(
                      cert.certificateUrl,
                      '_blank',
                      'noopener,noreferrer'
                    );
                  }
                }}
                className="w-full md:w-auto min-h-[44px] px-5 py-2.5 rounded-xl bg-[#eaedff] hover:bg-[#7c3aed] text-[#131b2e] hover:text-white font-display font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>View Certificate</span>

                <ExternalLink className="w-4 h-4 text-[#7c3aed] group-hover:text-white transition-colors" />
              </button>
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
            Continuous Learning &amp; Development
          </h3>

          <p className="text-xs sm:text-sm text-[#4a4455] leading-relaxed">
            Interested in learning more about coursework, projects, or technical topics?
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
            onClick={() => onNavigate('projects')}
            className="min-h-[44px] px-6 py-2.5 rounded-xl bg-white hover:bg-[#f2f3ff] text-[#131b2e] border border-[#ccc3d8]/60 font-display font-semibold text-sm shadow-xs transition-all active:scale-95 cursor-pointer flex items-center justify-center gap-2"
          >
            <span>View Projects</span>
            <ArrowRight className="w-4 h-4 text-[#7c3aed]" />
          </button>
        </div>
      </section>
    </div>
  );
};