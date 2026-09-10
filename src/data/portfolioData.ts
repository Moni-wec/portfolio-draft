import { ProjectItem, CertificationItem, AchievementItem, SkillDomain } from '../types';

export const PERSONAL_INFO = {
  name: 'Monika.A',
  title: 'Web Developer | Data Science Enthusiast',
  email: 'arivazhaganmonika@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/monika-arivazhagan-495491375/',
  githubUrl: 'https://github.com/Moni-wec',
  bioHome:
    'I am an Information Science and Engineering student with an interest in web development, data science, software testing, networking, cybersecurity, embedded systems, IoT, and cloud technologies.',
  bioAbout:
    'I am an Information Science and Engineering student with an interest in web development, data science, software testing, networking, cybersecurity, embedded systems, IoT, and cloud technologies.',
  photoHero:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA6nLXy5hZcnATJTR4jckolc8uGgIL8xONe7V15lT41mPW6IgRpf0iSowWo0G03oAMpUZiZsRZN4JFLmPciL9PGPRsmYKQ_Vejey1etSQ3XgHFtQ7Y02mGDgK6_id9kBRlvKyfyvFqzoBjFcG1Xw7N9SwlDY5WYmYzRNiXJT4-P-pAUDtbH8ZzzOVv7_4aDL4X1V1wTgJXrX2_30h6scEDGwKjG5mVarIWpTRPoeTR8YjZ6MCy8jXJE4KhIcyDw7YT16Q',
  photoAvatar:
    'https://lh3.googleusercontent.com/aida/AEtjO1VqD5vhhIqLP4PwLI7k326WeJUbndnBcI1WUR-BZCagkx3ZsY98WXdLlG0Ci4V5zJvtBh518Ok03QWevMb_lweCQfqo3rXNgkJETItTyTjqN3Wfg-jQy7YvPCbyuaN6rgNItT2W0T5U78psPll-5njpCdvru2btp7kRJ_BVS6kYXKdtbFszLBiTOSl6r1VhRV4_zfBbvArOYMUErGOE0Kt7wFMBq6CTGVuZ2fLYiSm9vpcUpxsrvubUbDeVtFCtw257xWN5Q-NV',
  photoAbout:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuAdc9LJE1P7-syhLQk0oP7NQWS0mKkN9vEQreQXi9vrCWeGa0VyWlO_fLCaRKeybgyfBXXesgh14cytQc6yuWOF7Cf-PtAGjpnU3xh8154py7CHHQKSMmWd_m6iK01ZGt99WQ6ozUIjvB15BSpGRPExPFE7HgLW3E3PPghsw5-FStcSlZYOl-mG9sz5CLqbirTXVR7BfWY5QdBilKIwi5aa6M3iF544g1v_fz4vBOKA_sg2n_ck4UWp0cPAK_88nyE5Fg',
};

export const CORE_TOOLS = [
  { name: 'Python', color: '#7c3aed' },
  { name: 'Java', color: '#006a61' },
  { name: 'HTML', color: '#7d3d00' },
  { name: 'CSS', color: '#7c3aed' },
  { name: 'Flask', color: '#006a61' },
  { name: 'FastAPI', color: '#7d3d00' },
  { name: 'MySQL', color: '#7c3aed' },
  { name: 'GitHub', color: '#4a4455' },
  { name: 'Visual Studio Code', color: '#006a61' },
  { name: 'Scikit-learn', color: '#7c3aed' },
];

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    id: 'prog',
    number: '01',
    title: 'Programming',
    focus: 'Programming Languages',
    skills: ['Python', 'Java'],
    description: 'Object-oriented programming and core computational logic.',
    icon: 'terminal',
  },
  {
    id: 'webdev',
    number: '02',
    title: 'Web Development',
    focus: 'Web & APIs',
    skills: ['HTML', 'CSS', 'Flask', 'FastAPI'],
    description: 'Front-end structure, styling, and lightweight backend API services.',
    icon: 'code',
  },
  {
    id: 'data-ai',
    number: '03',
    title: 'Data & AI',
    focus: 'Data & Machine Learning',
    skills: ['Scikit-learn', 'OCR', 'TF-IDF', 'Cosine Similarity', 'Basic Machine Learning Concepts'],
    description: 'Machine learning fundamentals, feature extraction, text similarity, and character recognition.',
    icon: 'brain',
  },
  {
    id: 'db',
    number: '04',
    title: 'Database',
    focus: 'Relational Database',
    skills: ['MySQL'],
    description: 'Relational database schema structure, tables, and data querying.',
    icon: 'database',
  },
  {
    id: 'tools',
    number: '05',
    title: 'Tools',
    focus: 'Development & Version Control',
    skills: ['Visual Studio Code', 'GitHub'],
    description: 'Source code editing, repository management, and version control.',
    icon: 'git-branch',
  },
  {
    id: 'other',
    number: '06',
    title: 'Other Technical Skills',
    focus: 'Document & Quality Assurance',
    skills: ['PDF Text Extraction', 'Manual Software Testing', 'Tesseract OCR'],
    description: 'Programmatic document parsing, OCR text extraction, and software verification.',
    icon: 'check-circle-2',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-1',
    number: '#01',
    tag: 'WEB DEVELOPMENT & AI',
    categoryBadge: 'Web Platform',
    title: 'LearnAI – Personalized Education Platform',
    description:
      'An AI-driven learning platform featuring personalized learning paths, interactive quizzes, automated summaries, and student progress tracking.',
    technologies: ['Python', 'Flask', 'HTML', 'CSS'],
    features: [
      { label: 'Personalized Learning Paths', icon: 'route' },
      { label: 'Interactive Quizzes', icon: 'help-circle' },
      { label: 'Summaries', icon: 'file-text' },
      { label: 'Progress Tracking', icon: 'bar-chart-3' },
    ],
    contribution:
      'Developed personalized learning features and implemented quizzes, summaries, and learning progress tracking.',
  },

  {
    id: 'project-2',
    number: '#02',
    tag: 'INFORMATION RETRIEVAL',
    categoryBadge: 'Search System',
    title: 'E-Book Chapter & Section Search System',
    description:
      'A search system that finds relevant chapters and sections from PDF-based e-books using keyword queries, improving navigation through large documents.',
    technologies: ['Python', 'Flask', 'Scikit-learn', 'TF-IDF', 'PDF Text Extraction'],
    features: [
      { label: 'PDF Text Extraction', icon: 'layers' },
      { label: 'Keyword Query Search', icon: 'search' },
      { label: 'Chapter & Section Retrieval', icon: 'list-ordered' },
      { label: 'Document Navigation', icon: 'zap' },
    ],
    contribution:
      'Developed PDF text extraction and search functionality and implemented the content retrieval system.',

    liveDemoUrl: 'https://ebook-search-system-monika-1.onrender.com/search',
    githubUrl: 'https://github.com/Moni-wec/ebook-search-system-monika',
  },

  {
    id: 'project-3',
    number: '#03',
    tag: 'OCR & COMPLIANCE',
    categoryBadge: 'Compliance Verification',
    title: 'Legal Metrology Compliance Checker',
    description:
      'An AI-assisted system that scans packaged product labels and checks mandatory declarations using OCR, identifying potential compliance issues.',
    technologies: ['Python', 'FastAPI', 'Tesseract OCR', 'OCR'],
    features: [
      { label: 'Packaged Product Label Scanning', icon: 'scan' },
      { label: 'Mandatory Declarations Check', icon: 'check-square' },
      { label: 'OCR Text Extraction', icon: 'layers' },
      { label: 'Compliance Issue Reporting', icon: 'file-spreadsheet' },
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    provider: 'NPTEL',
    durationLabel: 'Duration',
    durationValue: '12 Weeks',
    completionLabel: 'Completion',
    completionValue: 'April 2026',
    certificateUrl: 'https://drive.google.com/file/d/1R1Fm71vBadU_MpVMZU44wsvMA14rUEzX/view?usp=sharing',
  },
  {
    id: 'cert-2',
    title: 'Developing Soft Skills and Personality',
    provider: 'NPTEL',
    durationLabel: 'Duration',
    durationValue: '8 Weeks',
    completionLabel: 'Completion',
    completionValue: 'October 2025',
    certificateUrl: 'https://drive.google.com/file/d/1c1WatFTi7yujAsNqImXEZmMVOB3CKl1O/view?usp=sharing',
  },
  {
    id: 'cert-3',
    title: 'Introduction to Data Science',
    provider: 'Cisco',
    completionLabel: 'Completion',
    completionValue: 'February 2026',
    certificateUrl: 'https://drive.google.com/file/d/1Ng1mz9_ommdT9zPHR8LBWKD73jsQ_b2Z/view?usp=sharing',
  },
  {
    id: 'cert-4',
    title: 'Build a PDF File Handling Tool from Scratch',
    provider: 'Udemy',
    durationLabel: 'Duration',
    durationValue: '1 Hour',
    completionLabel: 'Completion',
    completionValue: 'February 2025',
    certificateUrl: 'https://drive.google.com/file/d/1FcKSNVSW8rNGOgaogi93eMNkc0rpoH3v/view?usp=sharing',
  },
  {
    id: 'cert-5',
    title: 'Python for Data Science Pro: The Complete Mastery Course',
    provider: 'Udemy',
    durationLabel: 'Duration',
    durationValue: '4 Hours',
    completionLabel: 'Completion',
    completionValue: 'February 2025',
    certificateUrl: 'https://drive.google.com/file/d/10v76QZm8wm0sgVqn9mjbiO2Bsq47Cffp/view?usp=sharing',
  },
];
export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-1',
    number: '#01',
    category: 'Academic Competition',
    badgeType: 'star',
    title: 'Quiz Competition',
    subtitle: '1st Prize Winner',
    description:
      'Won First Prize in a Quiz Competition, demonstrating domain recall, analytical thinking, and quick problem-solving.',
    highlightTag: 'First Prize',
    subTag: 'Quiz',
    icon: 'trophy',
  },
  {
    id: 'ach-2',
    number: '#02',
    category: 'Student Volunteering',
    badgeType: 'dot',
    title: 'Job Fair Volunteering',
    subtitle: 'Event Coordination Support',
    description:
      'Volunteered at a Job Fair, assisting with event coordination, registration desk activities, and logistics support for participants and recruiters.',
    highlightTag: 'Volunteer',
    subTag: 'Event Support',
    icon: 'users',
  },
  {
    id: 'ach-3',
    number: '#03',
    category: 'Civic Activity',
    badgeType: 'dot',
    title: 'Election-related Activities',
    subtitle: 'Coordination & Community Support',
    description:
      'Volunteered in election-related activities, contributing to coordination, voter assistance, and logistics support.',
    highlightTag: 'Civic Volunteer',
    subTag: 'Community',
    icon: 'vote',
  },
  {
    id: 'ach-4',
    number: '#04',
    category: 'Technical Workshop',
    badgeType: 'tag',
    title: 'Vibe with Coding Workshop',
    subtitle: 'NIT Karaikal',
    description:
      'Participated in the Vibe with Coding Workshop at NIT Karaikal, gaining exposure to coding, modern technology, and practical sessions.',
    highlightTag: 'Workshop Participant',
    subTag: 'NIT Karaikal',
    icon: 'code',
  },
];
