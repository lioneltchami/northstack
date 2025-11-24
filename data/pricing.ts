import { PricingTier } from '@/types';

// B2B Pricing - For Businesses
export const businessPricingTiers: PricingTier[] = [
  {
    id: 'business-starter',
    name: 'Business Starter',
    description: 'Perfect for small businesses and startups getting started with automation or web presence.',
    price: '$1,500',
    priceDetail: 'one-time',
    features: [
      'Professional website (5 pages) or landing page',
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
    id: 'business-professional',
    name: 'Business Professional',
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
    id: 'business-enterprise',
    name: 'Business Enterprise',
    description: 'For businesses requiring comprehensive DevOps solutions, complex automation, and ongoing support.',
    price: 'Custom',
    priceDetail: 'contact for quote',
    features: [
      'Everything in Business Professional',
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

// B2C Pricing - For Individuals
export const personalPricingTiers: PricingTier[] = [
  {
    id: 'personal-lite',
    name: 'Personal Lite',
    description: 'Perfect for personal blogs, family websites, and simple portfolios.',
    price: '$599',
    priceDetail: 'one-time',
    features: [
      'Beautiful 3-page website',
      'Mobile-friendly design',
      'Contact form integration',
      'Basic SEO setup',
      'Social media links',
      'Google Analytics setup',
      '14 days email support',
      'Tutorial videos included',
    ],
    cta: 'Start Your Site',
  },
  {
    id: 'personal',
    name: 'Personal',
    description: 'Ideal for freelancers, creators, and professionals building their personal brand.',
    price: '$999',
    priceDetail: 'one-time',
    features: [
      'Custom 5-page website',
      'Modern responsive design',
      'Photo gallery or portfolio section',
      'Blog setup with CMS',
      'Advanced SEO optimization',
      'Contact form with spam protection',
      'Google Analytics & Search Console',
      '30 days email support',
      'Easy-to-use admin panel',
      'Tutorial videos & documentation',
    ],
    highlighted: true,
    cta: 'Most Popular',
  },
  {
    id: 'personal-pro',
    name: 'Personal Pro',
    description: 'For creators, side hustlers, and entrepreneurs who need advanced features.',
    price: '$1,499',
    priceDetail: 'one-time',
    features: [
      'Premium 8-page custom website',
      'Unique custom design',
      'E-commerce (up to 10 products)',
      'Booking/scheduling system (optional)',
      'Email automation setup',
      'Newsletter integration (Mailchimp/ConvertKit)',
      'Advanced SEO & speed optimization',
      'Social media integration',
      '60 days priority support',
      'Training session included',
      'Professional branding consultation',
    ],
    cta: 'Go Premium',
  },
];

// Legacy export for backwards compatibility (defaults to business pricing)
export const pricingTiers: PricingTier[] = businessPricingTiers;

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
