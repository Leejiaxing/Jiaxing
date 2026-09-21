export interface Publication {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  venueShort: string;
  year?: number;
  status: 'Published' | 'Accepted' | 'In press';
  details?: string;
  paperUrl?: string;
  codeUrl?: string;
  firstAuthor?: boolean;
  equalContribution?: boolean;
}
export enum SectionId {
  HOME = 'home', ABOUT = 'about', PUBLICATIONS = 'publications', PROJECTS = 'research', CONTACT = 'contact'
}
