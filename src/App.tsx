import React, { useState, useEffect } from 'react';
import { PageId, ProjectItem, CertificationItem } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ProjectDemoModal } from './components/ProjectDemoModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { SkillsPage } from './pages/SkillsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { AchievementsPage } from './pages/AchievementsPage';
import { ContactPage } from './pages/ContactPage';
import { PERSONAL_INFO } from './data/portfolioData';

export default function App() {
  // Sync state with URL hash if present
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    const validPages: PageId[] = [
      'home',
      'about',
      'skills',
      'projects',
      'certifications',
      'achievements',
      'contact',
    ];
    return validPages.includes(hash as PageId) ? (hash as PageId) : 'home';
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
  const [demoModalProject, setDemoModalProject] = useState<ProjectItem | null>(null);
  const [demoModalType, setDemoModalType] = useState<'demo' | 'github' | null>(null);

  const handleOpenGithub = () => {
    window.open(PERSONAL_INFO.githubUrl, '_blank', 'noopener,noreferrer');
  };

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenDemoModal = (project: ProjectItem, type: 'demo' | 'github') => {
    setDemoModalProject(project);
    setDemoModalType(type);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenGithubPlaceholder={() => setShowGithubPlaceholder(true)}
          />
        );
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'skills':
        return <SkillsPage onNavigate={handleNavigate} />;
      case 'projects':
        return (
          <ProjectsPage
            onNavigate={handleNavigate}
            onOpenDemoModal={handleOpenDemoModal}
          />
        );
      case 'certifications':
        return (
          <CertificationsPage
            onNavigate={handleNavigate}
            onSelectCert={(cert) => setSelectedCert(cert)}
          />
        );
      case 'achievements':
        return <AchievementsPage onNavigate={handleNavigate} />;
      case 'contact':
        return (
          <ContactPage
            onNavigate={handleNavigate}
            onOpenGithubPlaceholder={handleOpenGithub}
          />
        );
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenGithubPlaceholder={handleOpenGithub}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-sans selection:bg-[#7c3aed] selection:text-white">
      {/* Top Navbar */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Container */}
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        {renderCurrentPage()}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenGithubPlaceholder={handleOpenGithub}
      />

      {/* Certificate Verification Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
      />

      {/* Project Demo / GitHub Modal */}
      <ProjectDemoModal
        project={demoModalProject}
        type={demoModalType}
        onClose={() => {
          setDemoModalProject(null);
          setDemoModalType(null);
        }}
        onContact={() => handleNavigate('contact')}
      />
    </div>
  );
}
