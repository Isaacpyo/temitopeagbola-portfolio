export interface Project {
  id: number;
  title: string;
  category: 'Web' | 'Mobile' | 'Backend' | 'Open Source' | 'DevOps' | 'AI';
  description: string;
  image: string;
  tech: string[];
  githubUrl: string;
  liveUrl: string;
  features?: string[];
  challenges?: string;
}

export interface BlogPost {
  id: number;
  slug: string; // 👈 NEW FIELD
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  school: string;
  period: string;
  description: string;
}