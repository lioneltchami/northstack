import { Service } from '@/types';
import {
  Globe,
  Workflow,
  Server,
  Cloud,
  Shield,
  Video,
  Headphones,
  Code,
} from 'lucide-react';

export const services: Service[] = [
  {
    id: 'web-development',
    title: 'Web Development & Digital Presence',
    description:
      'Custom, modern websites built with cutting-edge technologies for maximum performance and user experience.',
    icon: 'Globe',
    category: 'web-development',
    features: [
      'Custom React and Next.js websites',
      'E-commerce solutions with secure payment',
      'SSL certificate setup and security',
      'Performance optimization and SEO',
      'Responsive mobile-first design',
      'Website hosting and deployment',
    ],
    pricing: 'Starting at $2,500',
    timeline: '2-4 weeks',
  },
  {
    id: 'automation',
    title: 'IT Automation & Workflow Solutions',
    description:
      'Streamline your business operations with powerful automation using n8n, Make.com, and AI integrations.',
    icon: 'Workflow',
    category: 'automation',
    features: [
      'Email marketing automation',
      'Social media scheduling and cross-posting',
      'Lead generation and CRM automation',
      'Document and invoice automation',
      'AI-powered workflows (Claude, ChatGPT)',
      'Custom business process automation',
    ],
    pricing: 'Starting at $1,500',
    timeline: '1-2 weeks',
  },
  {
    id: 'home-server',
    title: 'Home Server & Self-Hosting Setup',
    description:
      'Take control of your data with custom home server solutions. Perfect for privacy-conscious individuals and small businesses.',
    icon: 'Server',
    category: 'home-server',
    features: [
      'Personal cloud storage (Nextcloud, Immich)',
      'Media server setup (Plex, Jellyfin)',
      'VPN and secure remote access (Tailscale)',
      'Automated backup solutions',
      'Network-attached storage (NAS) configuration',
      'Smart home integration (Home Assistant)',
    ],
    pricing: 'Starting at $1,200',
    timeline: '1-2 weeks',
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure & DevOps',
    description:
      'Enterprise-grade cloud solutions on AWS, GCP, and Azure. Infrastructure as Code, CI/CD, and scalable architecture.',
    icon: 'Cloud',
    category: 'cloud-infrastructure',
    features: [
      'AWS infrastructure setup and optimization',
      'Docker and Kubernetes deployment',
      'CI/CD pipeline implementation',
      'Infrastructure as Code (Terraform, CloudFormation)',
      'Cloud cost optimization',
      'Monitoring and alerting (Datadog, CloudWatch)',
    ],
    pricing: 'Starting at $3,500',
    timeline: '2-6 weeks',
  },
  {
    id: 'security',
    title: 'Security & Data Protection',
    description:
      'DevSecOps expertise to secure your infrastructure, protect your data, and ensure compliance with industry standards.',
    icon: 'Shield',
    category: 'security',
    features: [
      'Security hardening and best practices',
      'SSL/TLS certificate management',
      'Backup and disaster recovery planning',
      'Firewall configuration and network security',
      'Password management for businesses',
      'Security audits and compliance',
    ],
    pricing: 'Starting at $2,000',
    timeline: '1-3 weeks',
  },
  {
    id: 'content-creator',
    title: 'Content Creator Services',
    description:
      'Automate your content workflow from creation to distribution. Perfect for podcasters, YouTubers, and newsletter writers.',
    icon: 'Video',
    category: 'content-creator',
    features: [
      'Podcast workflow automation',
      'Newsletter setup and automation',
      'YouTube optimization and scheduling',
      'Content repurposing systems',
      'Multi-platform publishing automation',
      'AI-assisted content workflows',
    ],
    pricing: 'Starting at $1,800',
    timeline: '1-2 weeks',
  },
  {
    id: 'consulting',
    title: 'Tech Support & Consulting',
    description:
      'Expert IT consulting and technical support for small businesses. Strategic planning and hands-on implementation.',
    icon: 'Headphones',
    category: 'consulting',
    features: [
      'IT consulting for small businesses',
      'Technology stack recommendations',
      'System architecture design',
      'Migration services (on-premise to cloud)',
      'Training and documentation',
      'Ongoing technical support',
    ],
    pricing: '$150/hour',
    timeline: 'Flexible',
  },
  {
    id: 'custom-development',
    title: 'Custom Development Projects',
    description:
      'Tailored software solutions for unique business needs. Full-stack development with modern technologies.',
    icon: 'Code',
    category: 'web-development',
    features: [
      'Custom web applications',
      'API development and integrations',
      'Database design and optimization',
      'Python scripting and automation',
      'Microservices architecture',
      'Legacy system modernization',
    ],
    pricing: 'Custom quote',
    timeline: 'Varies by project',
  },
];

export const serviceCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'web-development', name: 'Web Development' },
  { id: 'automation', name: 'Automation' },
  { id: 'home-server', name: 'Home Server' },
  { id: 'cloud-infrastructure', name: 'Cloud Infrastructure' },
  { id: 'security', name: 'Security' },
  { id: 'content-creator', name: 'Content Creator' },
  { id: 'consulting', name: 'Consulting' },
];
