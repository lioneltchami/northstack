import { PortfolioItem } from '@/types';

export const portfolioItems: PortfolioItem[] = [
  {
    id: 'ecommerce-automation',
    title: 'E-Commerce Automation for Calgary Retailer',
    category: 'Automation & E-Commerce',
    description:
      'Implemented a comprehensive automation system for a local Calgary retailer, integrating their e-commerce platform with inventory management, email marketing, and customer support.',
    challenge:
      'A growing local retailer was drowning in manual processes. Order confirmations, shipping notifications, inventory updates, and customer follow-ups were all handled manually, taking 20+ hours per week and leading to errors and delayed responses.',
    solution:
      'We built a custom automation workflow using Make.com (formerly Integromat) that connected their Shopify store, inventory database, email marketing platform (Klaviyo), and customer support system. The workflow automatically: sends order confirmations and shipping updates, syncs inventory across platforms, triggers personalized email sequences based on customer behavior, creates support tickets for order issues, and generates weekly sales reports.',
    results: [
      'Reduced manual processing time from 20 hours/week to 2 hours/week',
      'Improved order fulfillment speed by 60%',
      'Increased customer satisfaction scores from 3.8 to 4.7/5',
      'Boosted repeat purchase rate by 35% through automated email campaigns',
      'Eliminated inventory sync errors completely',
    ],
    technologies: [
      'Make.com',
      'Shopify',
      'Klaviyo',
      'Google Sheets',
      'Slack',
      'Webhooks',
    ],
    testimonial: {
      name: 'Sarah Chen',
      role: 'Owner, Calgary Artisan Coffee',
      content:
        'This automation has been a game-changer for our business. We can finally focus on what we do best while the system handles all the repetitive tasks flawlessly.',
    },
  },
  {
    id: 'podcast-workflow',
    title: 'Complete Podcast Workflow Automation',
    category: 'Content Creation',
    description:
      'Designed and implemented an end-to-end podcast production and distribution workflow for a popular Canadian marketing podcast.',
    challenge:
      'A successful podcaster was spending 12+ hours per week on post-production tasks: editing audio, creating transcripts, generating social media posts, distributing to multiple platforms, and updating the website. This left little time for content creation and guest outreach.',
    solution:
      'We created a sophisticated automation pipeline using n8n, AI APIs, and custom scripts. The workflow: automatically processes raw audio files, generates AI transcripts using Whisper API, creates show notes and social media posts using Claude AI, publishes episodes to Spotify, Apple Podcasts, and YouTube, updates the website blog automatically, schedules social media posts across platforms, and sends newsletters to subscribers with episode highlights.',
    results: [
      'Reduced post-production time from 12 hours to 90 minutes per episode',
      'Increased social media reach by 250% through consistent posting',
      'Grew podcast audience by 180% in 6 months',
      'Enabled weekly publishing schedule (previously bi-weekly)',
      'Generated $15,000+ in saved time value annually',
    ],
    technologies: [
      'n8n',
      'Claude API',
      'Whisper AI',
      'WordPress',
      'Buffer',
      'AWS S3',
      'Python',
    ],
    testimonial: {
      name: 'Jennifer Martinez',
      role: 'Host, The Marketing Maven Podcast',
      content:
        'I can now focus on creating great content and connecting with my audience instead of drowning in technical tasks. This automation literally gave me my life back.',
    },
  },
  {
    id: 'aws-migration',
    title: 'AWS Cloud Infrastructure for SaaS Startup',
    category: 'Cloud Infrastructure',
    description:
      'Migrated a growing SaaS application to AWS with auto-scaling, CI/CD pipelines, and comprehensive monitoring.',
    challenge:
      'A Calgary-based SaaS startup was experiencing rapid growth but their on-premise infrastructure couldn\'t scale. They faced frequent downtime during traffic spikes, slow deployment cycles (2-3 weeks), and no proper monitoring or disaster recovery plan. Their infrastructure costs were also spiraling out of control.',
    solution:
      'We architected and implemented a complete AWS cloud solution using Infrastructure as Code (Terraform). The solution included: containerized application using Docker and ECS Fargate, auto-scaling based on traffic patterns, CI/CD pipeline with GitHub Actions for automated testing and deployment, RDS PostgreSQL with automated backups and multi-AZ setup, CloudFront CDN for global content delivery, comprehensive monitoring with Datadog and CloudWatch, and disaster recovery plan with cross-region backups.',
    results: [
      '99.98% uptime achieved (up from 94%)',
      'Deployment time reduced from weeks to minutes',
      'Infrastructure costs reduced by 62% through optimization',
      'Application performance improved by 4x',
      'Successfully handled 10x traffic spike without issues',
      'Recovery time objective (RTO) reduced from days to hours',
    ],
    technologies: [
      'AWS (ECS, RDS, S3, CloudFront, Lambda)',
      'Terraform',
      'Docker',
      'GitHub Actions',
      'Datadog',
      'PostgreSQL',
    ],
    testimonial: {
      name: 'Marcus Thompson',
      role: 'Founder, TechStart Alberta',
      content:
        'Their enterprise-level expertise applied to our startup was exactly what we needed. The infrastructure they built scales effortlessly and costs a fraction of what we were paying before.',
    },
  },
  {
    id: 'home-server-setup',
    title: 'Privacy-Focused Home Server Solution',
    category: 'Home Server & Self-Hosting',
    description:
      'Built a complete home server solution for a privacy-conscious family, replacing multiple cloud subscriptions with self-hosted alternatives.',
    challenge:
      'A tech-savvy family was paying $150+/month for various cloud services (Google Drive, Dropbox, Netflix-like streaming, password managers) and growing concerned about privacy and data ownership. They wanted to self-host but lacked the technical expertise to set it up securely and maintain it.',
    solution:
      'We designed and deployed a Proxmox-based home server solution with: Nextcloud for file sync and storage (replacing Google Drive/Dropbox), Immich for photo management (Google Photos alternative), Jellyfin media server for streaming, Vaultwarden password manager, Home Assistant for smart home automation, Tailscale VPN for secure remote access, automated backup system to cloud storage, and ZFS storage with redundancy for data protection. Included full documentation and remote management support.',
    results: [
      'Eliminated $150/month in subscription costs (ROI in 8 months)',
      'Complete data privacy and ownership',
      'Faster file access and sync than cloud services',
      '10TB of storage vs. 2TB on cloud plans',
      'Family members successfully using system daily',
      'Zero downtime in 18 months of operation',
    ],
    technologies: [
      'Proxmox',
      'Docker',
      'Nextcloud',
      'Immich',
      'Jellyfin',
      'Tailscale',
      'ZFS',
      'Nginx',
    ],
    testimonial: {
      name: 'David Kim',
      role: 'IT Director, Mountain View Construction',
      content:
        'Not only did we save thousands per year, but we also gained complete control of our data. The system just works, and knowing our family photos and documents are secure gives us peace of mind.',
    },
  },
];

export const portfolioCategories = [
  'All Projects',
  'Automation & E-Commerce',
  'Content Creation',
  'Cloud Infrastructure',
  'Home Server & Self-Hosting',
  'Security',
];
