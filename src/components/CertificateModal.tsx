import React from 'react';
import { CertificationItem } from '../types';
import { X, Award, Calendar, Clock } from 'lucide-react';

interface CertificateModalProps {
  certificate: CertificationItem | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
}) => {
  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#131b2e]/50 backdrop-blur-sm flex items-end sm:items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg bg-white rounded-2xl p-6 flex flex-col gap-4 text-[#131b2e] shadow-2xl border border-[#ccc3d8]/40 animate-in slide-in-from-bottom-4 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-2 border-b border-[#eaedff]">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-[#7c3aed]" />
            <span className="font-display font-bold text-lg text-[#131b2e]">
              Certification Details
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full text-[#4a4455] hover:bg-[#eaedff] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-3 p-5 rounded-xl bg-[#f2f3ff] border border-[#dae2fd]">
          <span className="text-xs font-mono uppercase text-[#7c3aed] font-bold tracking-wider">
            Platform: {certificate.provider}
          </span>
          <h4 className="font-display font-bold text-lg text-[#131b2e] leading-snug">
            {certificate.title}
          </h4>

          <div className="flex flex-wrap gap-4 pt-2 text-xs text-[#4a4455] border-t border-[#dae2fd]/70">
            {certificate.durationValue && (
              <div className="flex items-center gap-1.5 font-mono">
                <Clock className="w-4 h-4 text-[#7c3aed]" />
                <span>
                  Duration: <strong className="text-[#131b2e]">{certificate.durationValue}</strong>
                </span>
              </div>
            )}
            <div className="flex items-center gap-1.5 font-mono">
              <Calendar className="w-4 h-4 text-[#006a61]" />
              <span>
                Completion: <strong className="text-[#131b2e]">{certificate.completionValue}</strong>
              </span>
            </div>
          </div>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="w-full sm:w-auto min-h-[44px] px-6 py-2 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-semibold text-sm shadow-md transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
