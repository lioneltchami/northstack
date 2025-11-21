// Type definitions for NorthStack Solutions

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: ServiceCategory;
  features: string[];
  pricing?: string;
  timeline?: string;
}

export type ServiceCategory =
  | 'web-development'
  | 'automation'
  | 'home-server'
  | 'cloud-infrastructure'
  | 'security'
  | 'content-creator'
  | 'consulting';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image?: string;
  testimonial?: {
    name: string;
    role: string;
    content: string;
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image?: string;
  published: boolean;
}

export interface PricingTier {
  id: string;
  name: string;
  description: string;
  price: string;
  priceDetail: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'guide' | 'checklist' | 'template' | 'video';
  downloadUrl?: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  budget: string;
  message: string;
  preferredContact: 'email' | 'phone';
  timeline: string;
}

export interface NavLink {
  label: string;
  href: string;
  submenu?: NavLink[];
}

export interface SEOData {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}
