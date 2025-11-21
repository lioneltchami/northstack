import { Resource } from '@/types';

export const resources: Resource[] = [
  {
    id: '1',
    title: '10-Point Server Security Checklist',
    description:
      'Essential security measures every server administrator should implement. From SSH hardening to firewall rules.',
    type: 'checklist',
    category: 'Security',
    downloadUrl: '/downloads/server-security-checklist.pdf',
  },
  {
    id: '2',
    title: 'Home Server Setup Guide for Beginners',
    description:
      'Step-by-step guide to setting up your first home server with Proxmox. Includes hardware recommendations and installation walkthrough.',
    type: 'guide',
    category: 'Home Server',
    downloadUrl: '/downloads/home-server-setup-guide.pdf',
  },
  {
    id: '3',
    title: 'Email Automation Template Pack',
    description:
      '15 pre-built email automation workflows for e-commerce, services, and content businesses. Import and customize for your needs.',
    type: 'template',
    category: 'Automation',
    downloadUrl: '/downloads/email-automation-templates.zip',
  },
  {
    id: '4',
    title: 'AWS Cost Optimization Checklist',
    description:
      '30 actionable items to reduce your AWS bill. Covers EC2, S3, RDS, Lambda, and more with real cost-saving examples.',
    type: 'checklist',
    category: 'Cloud',
    downloadUrl: '/downloads/aws-cost-optimization-checklist.pdf',
  },
  {
    id: '5',
    title: 'Docker Deployment Best Practices',
    description:
      'Production-ready Docker configuration guide. Security, networking, volumes, and compose file examples.',
    type: 'guide',
    category: 'DevOps',
    downloadUrl: '/downloads/docker-deployment-guide.pdf',
  },
  {
    id: '6',
    title: 'Terraform Project Structure Template',
    description:
      'Battle-tested Terraform project structure with modules, environments, and state management best practices.',
    type: 'template',
    category: 'Infrastructure',
    downloadUrl: '/downloads/terraform-structure-template.zip',
  },
  {
    id: '7',
    title: 'CI/CD Pipeline Design Workshop',
    description:
      'Video walkthrough of designing a complete CI/CD pipeline from scratch using GitHub Actions and AWS.',
    type: 'video',
    category: 'DevOps',
    downloadUrl: '/videos/cicd-pipeline-workshop',
  },
  {
    id: '8',
    title: 'Website Performance Optimization Guide',
    description:
      'Practical techniques to improve website load times, Core Web Vitals, and SEO rankings. Includes tooling recommendations.',
    type: 'guide',
    category: 'Web Development',
    downloadUrl: '/downloads/performance-optimization-guide.pdf',
  },
  {
    id: '9',
    title: 'CASL Compliance Checklist for Canadian Businesses',
    description:
      'Ensure your email marketing complies with Canadian anti-spam legislation. Includes consent tracking template.',
    type: 'checklist',
    category: 'Compliance',
    downloadUrl: '/downloads/casl-compliance-checklist.pdf',
  },
  {
    id: '10',
    title: 'n8n Automation Workflow Library',
    description:
      '20 ready-to-use n8n workflows for common business automation tasks. JSON files you can import directly.',
    type: 'template',
    category: 'Automation',
    downloadUrl: '/downloads/n8n-workflow-library.zip',
  },
];

export const resourceCategories = [
  'All Resources',
  'Security',
  'Home Server',
  'Automation',
  'Cloud',
  'DevOps',
  'Infrastructure',
  'Web Development',
  'Compliance',
];
