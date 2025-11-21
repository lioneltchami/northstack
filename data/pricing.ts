import { PricingTier } from '@/types';

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    description: 'Perfect for individuals and small projects getting started with automation or web presence.',
    price: '$1,500',
    priceDetail: 'one-time',
    features: [
      'Basic website (5 pages) or landing page',
      'Mobile-responsive design',
      'SSL certificate setup',
      'Basic SEO optimization',
      '1 simple automation workflow',
      'Email support',
      '30 days post-launch support',
      'Hosting guidance',
    ],
    cta: 'Get Started',
  },
  {
    id: 'professional',
    name: 'Professional',
    description: 'Ideal for growing businesses ready to scale with advanced automation and infrastructure.',
    price: '$3,500',
    priceDetail: 'one-time',
    features: [
      'Custom web application (up to 15 pages)',
      'Advanced responsive design',
      'E-commerce integration (if needed)',
      'Complete SEO package',
      'Up to 5 automation workflows',
      'Cloud infrastructure setup (AWS/GCP)',
      'CI/CD pipeline implementation',
      'Priority email & chat support',
      '90 days post-launch support',
      'Training documentation',
      'Monitoring and alerting setup',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'For businesses requiring comprehensive DevOps solutions, complex automation, and ongoing support.',
    price: 'Custom',
    priceDetail: 'contact for quote',
    features: [
      'Everything in Professional',
      'Complex cloud architecture (multi-region, auto-scaling)',
      'Unlimited automation workflows',
      'Infrastructure as Code (Terraform/CloudFormation)',
      'Kubernetes/container orchestration',
      'Advanced security hardening',
      'Disaster recovery planning',
      'Compliance support (SOC 2, HIPAA, etc.)',
      'Dedicated support (phone, video, chat)',
      '6 months post-launch support',
      'Monthly optimization reviews',
      'On-call support option',
    ],
    cta: 'Contact Sales',
  },
];

export const addOnServices = [
  {
    id: 'consulting',
    name: 'Hourly Consulting',
    price: '$150',
    priceUnit: 'per hour',
    description: 'Expert DevOps and automation consulting for ongoing projects.',
  },
  {
    id: 'maintenance',
    name: 'Monthly Maintenance',
    price: '$500',
    priceUnit: 'per month',
    description: 'Ongoing updates, monitoring, security patches, and support.',
  },
  {
    id: 'home-server',
    name: 'Home Server Setup',
    price: '$1,200',
    priceUnit: 'one-time',
    description: 'Complete home server installation with Proxmox, Nextcloud, and remote access.',
  },
  {
    id: 'migration',
    name: 'Cloud Migration',
    price: '$2,500',
    priceUnit: 'starting at',
    description: 'Migrate your applications from on-premise to AWS/GCP/Azure.',
  },
  {
    id: 'training',
    name: 'Training & Workshops',
    price: '$1,000',
    priceUnit: 'per day',
    description: 'Custom training for your team on DevOps, automation, or cloud technologies.',
  },
];

export const guarantees = [
  {
    title: 'Money-Back Guarantee',
    description: 'Not satisfied within the first 7 days? Get a full refund, no questions asked.',
  },
  {
    title: 'Fixed-Price Projects',
    description: 'No surprise costs. The price we quote is the price you pay.',
  },
  {
    title: 'Canadian Data Privacy',
    description: 'Your data stays in Canada. PIPEDA compliant and privacy-focused.',
  },
  {
    title: 'Response Time Commitment',
    description: 'Business inquiries answered within 24 hours, support tickets within 48 hours.',
  },
];
