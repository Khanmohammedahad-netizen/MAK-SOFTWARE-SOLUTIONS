export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone?: string;
  projectScope: string;
  budget?: string;
  timeline?: string;
  message?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  benefits: string[];
  technologies?: string[];
}

export type Page = 'home' | 'services' | 'how-we-work' | 'why-us' | 'contact';
