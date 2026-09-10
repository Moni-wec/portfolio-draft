export type PageId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'certifications'
  | 'achievements'
  | 'contact';

export interface ProjectItem {
  id: string;
  number: string;
  tag: string;
  categoryBadge: string;
  title: string;
  description: string;
  technologies: string[];
  problem?: string;
  solution?: string;
  features: { label: string; icon: string }[];
  contribution?: string;
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  provider: string;
  status?: 'ACTIVE ENROLLMENT' | 'CONFIRMED SCHEDULE' | 'SPECIALIZATION' | 'COMPLETED' | string;
  statusColor?: string;
  description?: string;
  durationLabel?: string;
  durationValue?: string;
  completionLabel: string;
  completionValue: string;
  credentialId?: string;
  issuingAuthority?: string;
  certificateUrl?: string;
}

export interface AchievementItem {
  id: string;
  number: string;
  category: string;
  badgeType: string;
  title: string;
  subtitle: string;
  description: string;
  highlightTag: string;
  subTag: string;
  icon: string;
}

export interface SkillDomain {
  id: string;
  number: string;
  title: string;
  focus: string;
  skills: string[];
  description: string;
  icon: string;
}
