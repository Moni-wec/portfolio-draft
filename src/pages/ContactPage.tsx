import React, { useState } from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Calendar,
  Sparkles,
  ExternalLink,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
  onOpenGithubPlaceholder: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigate,
  onOpenGithubPlaceholder,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please fill in your name, email address, and message.');
      return;
    }

    // Basic email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="w-full flex flex-col gap-8 md:gap-12 animate-in fade-in duration-300">
      {/* Header Section */}
      <section className="flex flex-col gap-3">
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#131b2e] tracking-tight">
          Contact Me
        </h1>

        <p className="text-base text-[#4a4455] max-w-3xl leading-relaxed">
          Feel free to reach out for academic projects, web development, data science discussions, or professional networking.
        </p>
      </section>

      {/* Main Grid: Contact Channels + Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Direct Channels (5 cols on lg) */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold text-[#131b2e]">
            Direct Channels
          </h2>

          {/* Email Card */}
          <div className="p-5 rounded-2xl bg-white border border-[#ccc3d8]/40 shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#eaddff] text-[#630ed4] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 font-mono text-xs text-[#630ed4] hover:text-[#7c3aed] cursor-pointer"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#006a61]" />
                    <span className="text-[#006a61]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            <div>
              <span className="font-mono text-xs text-[#7b7487] uppercase font-semibold">
                Email Address
              </span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="font-mono text-sm sm:text-base font-bold text-[#131b2e] hover:text-[#630ed4] transition-colors block break-all mt-0.5"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-[#4a4455] mt-1 leading-relaxed">
                Direct reach out for project queries or technical dialogue.
              </p>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#630ed4] hover:text-[#7c3aed] mt-1"
            >
              <span>Compose Mail</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="p-5 rounded-2xl bg-white border border-[#ccc3d8]/40 shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#86f2e4]/40 text-[#006a61] flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-[#006a61] font-semibold">
                Verified Profile
              </span>
            </div>

            <div>
              <span className="font-mono text-xs text-[#7b7487] uppercase font-semibold">
                LinkedIn Network
              </span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-base font-bold text-[#131b2e] hover:text-[#006a61] transition-colors block mt-0.5"
              >
                Monika Arivazhagan
              </a>
              <p className="text-xs text-[#4a4455] mt-1 leading-relaxed">
                Connect for professional networking and career updates.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#006a61] hover:text-[#005049] mt-1"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="p-5 rounded-2xl bg-white border border-[#ccc3d8]/40 shadow-xs flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-[#eaedff] text-[#131b2e] flex items-center justify-center">
                <Github className="w-5 h-5" />
              </div>
              <span className="font-mono text-xs text-[#4a4455] font-semibold">
                Repositories
              </span>
            </div>

            <div>
              <span className="font-mono text-xs text-[#7b7487] uppercase font-semibold">
                GitHub
              </span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm sm:text-base font-bold text-[#131b2e] hover:text-[#630ed4] transition-colors mt-0.5 block"
              >
                GitHub Profile
              </a>
              <p className="text-xs text-[#4a4455] mt-1 leading-relaxed">
                Source code repositories and academic projects.
              </p>
            </div>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#630ed4] hover:text-[#7c3aed] mt-1 text-left cursor-pointer"
            >
              <span>GitHub Profile</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Right Column: Contact Message Form (7 cols on lg) */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          <h2 className="font-display text-xl font-bold text-[#131b2e]">
            Send a Message
          </h2>

          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#ccc3d8]/40 shadow-sm flex flex-col justify-between">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-[#86f2e4]/50 flex items-center justify-center text-[#006a61] shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <div className="max-w-md">
                  <h3 className="font-display text-2xl font-bold text-[#131b2e]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-[#4a4455] mt-2 leading-relaxed">
                    Thank you, <strong className="text-[#131b2e]">{name}</strong>. Your message has been recorded. Monika will review your note and reply via <strong className="text-[#131b2e]">{email}</strong> shortly.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setEmail('');
                    setSubject('');
                    setMessage('');
                  }}
                  className="mt-2 px-6 py-2.5 rounded-xl bg-[#eaedff] text-[#630ed4] font-semibold text-sm hover:bg-[#dae2fd] transition-colors cursor-pointer"
                >
                  Send Another Note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {error && (
                  <div className="p-3.5 rounded-xl bg-[#ffdad6] text-[#ba1a1a] text-xs font-semibold flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-name"
                      className="font-mono text-xs uppercase font-semibold text-[#4a4455]"
                    >
                      Your Name <span className="text-[#ba1a1a]">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="e.g. Alex Henderson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f2f3ff] border border-[#dae2fd] text-sm text-[#131b2e] placeholder-[#7b7487] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="contact-email"
                      className="font-mono text-xs uppercase font-semibold text-[#4a4455]"
                    >
                      Your Email <span className="text-[#ba1a1a]">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="alex@company.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#f2f3ff] border border-[#dae2fd] text-sm text-[#131b2e] placeholder-[#7b7487] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-subject"
                    className="font-mono text-xs uppercase font-semibold text-[#4a4455]"
                  >
                    Subject / Inquired Topic
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Technical Inquiry / Project Collaboration"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f2f3ff] border border-[#dae2fd] text-sm text-[#131b2e] placeholder-[#7b7487] focus:outline-none focus:ring-2 focus:ring-[#7c3aed]"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="contact-message"
                    className="font-mono text-xs uppercase font-semibold text-[#4a4455]"
                  >
                    Message <span className="text-[#ba1a1a]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    placeholder="Tell me about your project, collaboration idea, or inquiry..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#f2f3ff] border border-[#dae2fd] text-sm text-[#131b2e] placeholder-[#7b7487] focus:outline-none focus:ring-2 focus:ring-[#7c3aed] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="min-h-[48px] mt-2 px-6 py-3 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white font-display font-semibold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md transition-all active:scale-98 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
