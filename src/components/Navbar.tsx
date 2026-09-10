import React, { useState } from 'react';
import { PageId } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Home,
  User,
  Terminal,
  FolderCode,
  Award,
  Trophy,
  Mail,
  Menu,
  X,
  Sparkles,
} from 'lucide-react';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Terminal className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FolderCode className="w-4 h-4" /> },
    { id: 'certifications', label: 'Certifications', icon: <Award className="w-4 h-4" /> },
    { id: 'achievements', label: 'Achievements', icon: <Trophy className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8ff]/85 backdrop-blur-xl border-b border-[#ccc3d8]/30 shadow-[0_1px_8px_rgba(19,27,46,0.04)]">
      <div className="max-w-[1240px] mx-auto h-16 px-4 md:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
          aria-label="Monika.A Portfolio Home"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#630ed4] to-[#7c3aed] flex items-center justify-center text-white font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            <span className="font-mono text-sm tracking-tighter">M.A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-[#131b2e] text-lg leading-tight tracking-tight group-hover:text-[#630ed4] transition-colors">
              Monika.A
            </span>
            <span className="text-[10px] font-mono uppercase text-[#006a61] tracking-wider font-semibold">
              Web Developer | Data Science Enthusiast
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-[#eaedff]/70 p-1.5 rounded-full border border-[#ccc3d8]/40">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#7c3aed] text-white shadow-sm font-semibold'
                    : 'text-[#4a4455] hover:text-[#630ed4] hover:bg-white/70'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#7c3aed] hover:bg-[#630ed4] text-white text-sm font-semibold shadow-[0_4px_14px_rgba(124,58,237,0.25)] transition-all active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Get in Touch</span>
          </button>

          {/* Profile Mini Avatar */}
          <div
            onClick={() => handleNavClick('about')}
            className="relative cursor-pointer group"
            title="Monika.A - View About Profile"
          >
            <img
              src={PERSONAL_INFO.photoAvatar}
              alt="Monika A - Avatar"
              className="w-9 h-9 rounded-full object-cover ring-2 ring-[#7c3aed]/30 group-hover:ring-[#7c3aed] transition-all"
            />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#006a61] ring-2 ring-white"></span>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-[#eaedff] text-[#131b2e] hover:bg-[#dae2fd] transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#630ed4]" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu - All 7 Pages */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-2xl border-b border-[#ccc3d8]/40 shadow-2xl px-4 py-4 animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#eaedff]">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#4a4455] font-semibold">
              Menu Navigation
            </span>
            <span className="text-xs font-mono text-[#006a61] font-semibold">All 7 Pages</span>
          </div>

          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between min-h-[44px] px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all text-left cursor-pointer ${
                    isActive
                      ? 'bg-[#7c3aed] text-white font-semibold shadow-sm'
                      : 'bg-[#f2f3ff] text-[#131b2e] hover:bg-[#eaedff]'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? 'text-white' : 'text-[#7c3aed]'}>{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#eaedff]">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full min-h-[44px] flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#7c3aed] text-white font-semibold text-sm shadow-md cursor-pointer active:scale-98 transition-transform"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Monika Directly</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
