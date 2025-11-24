export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  paperUrl?: string;
  codeUrl?: string;
  abstract: string; // Used for AI context
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  PUBLICATIONS = 'publications',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}