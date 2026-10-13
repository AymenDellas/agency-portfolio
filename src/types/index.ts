export interface ProjectArtifact {
  title: string;
  type: 'image' | 'palette' | 'typography' | 'code' | 'interactive';
  caption: string;
  url?: string;
  codeSnippet?: string;
  paletteColors?: string[];
}

export interface CaseStudyData {
  id: string;
  title: string;
  tagline: string;
  subtitle: string;
  client: string;
  year: string;
  role: string[];
  discipline: string;
  surfaceTheme: 'white' | 'black' | 'paper' | 'blue';
  coverImage: string;
  summary: string;
  challenge: string;
  direction: string;
  systemDescription: string;
  artifacts: ProjectArtifact[];
  responsiveShowcase: {
    desktopUrl: string;
    mobileUrl: string;
    description: string;
  };
  reflection: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
  valueProposition: string;
  idealFor: string;
}
