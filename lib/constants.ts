/**
 * Application Constants
 *
 * Centralized location for all constant values used throughout the application.
 * This improves maintainability, prevents typos, and provides type safety.
 */

// ============================================
// BUSINESS INFORMATION
// ============================================

/**
 * Get business information from environment variables with fallbacks
 */
export const BUSINESS_INFO = {
  /** Legal company name */
  companyName: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Apoti Tech Inc.',

  /** Display name of the business */
  siteName: process.env.NEXT_PUBLIC_SITE_NAME || 'NorthStack Solutions',

  /** Base URL of the website */
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://northstack.solutions',

  /** Business location (city, province/state, country) */
  location: process.env.NEXT_PUBLIC_BUSINESS_LOCATION || 'Calgary, Alberta, Canada',

  /** Primary contact email */
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'info@northstack.ca',

  /** Support/inquiry email */
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL || 'info@northstack.ca',

  /** Contact phone number */
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+1 (403) 123-4567',

  /** Calendly booking URL */
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || 'https://calendly.com/northstack',
} as const;

// ============================================
// SERVICE DEFINITIONS
// ============================================

/**
 * Service IDs used throughout the application
 * These should match the slugs in your CMS/data files
 */
export const SERVICE_IDS = {
  WEB_DEVELOPMENT: 'web-development',
  AUTOMATION: 'automation',
  HOME_SERVER: 'home-server',
  CLOUD_INFRASTRUCTURE: 'cloud-infrastructure',
  SECURITY: 'security',
  CONSULTING: 'consulting',
  OTHER: 'other',
} as const;

/**
 * Service display names
 */
export const SERVICE_NAMES: Record<string, string> = {
  [SERVICE_IDS.WEB_DEVELOPMENT]: 'Web Development',
  [SERVICE_IDS.AUTOMATION]: 'IT Automation',
  [SERVICE_IDS.HOME_SERVER]: 'Home Server Setup',
  [SERVICE_IDS.CLOUD_INFRASTRUCTURE]: 'Cloud Infrastructure',
  [SERVICE_IDS.SECURITY]: 'Security & DevSecOps',
  [SERVICE_IDS.CONSULTING]: 'Consulting',
  [SERVICE_IDS.OTHER]: 'Other / Not Sure',
};

// ============================================
// FORM OPTIONS
// ============================================

/**
 * Budget range options for contact form
 */
export const BUDGET_RANGES = {
  UNDER_2500: 'under-2500',
  RANGE_2500_5000: '2500-5000',
  RANGE_5000_10000: '5000-10000',
  OVER_10000: '10000-plus',
  NOT_SURE: 'not-sure',
} as const;

/**
 * Budget range display labels
 */
export const BUDGET_LABELS: Record<string, string> = {
  [BUDGET_RANGES.UNDER_2500]: 'Under $2,500',
  [BUDGET_RANGES.RANGE_2500_5000]: '$2,500 - $5,000',
  [BUDGET_RANGES.RANGE_5000_10000]: '$5,000 - $10,000',
  [BUDGET_RANGES.OVER_10000]: '$10,000+',
  [BUDGET_RANGES.NOT_SURE]: 'Not Sure',
};

/**
 * Project timeline options
 */
export const TIMELINES = {
  URGENT: 'urgent',
  SOON: 'soon',
  FLEXIBLE: 'flexible',
  PLANNING: 'planning',
} as const;

/**
 * Timeline display labels
 */
export const TIMELINE_LABELS: Record<string, string> = {
  [TIMELINES.URGENT]: 'Urgent (1-2 weeks)',
  [TIMELINES.SOON]: 'Soon (2-4 weeks)',
  [TIMELINES.FLEXIBLE]: 'Flexible (1-3 months)',
  [TIMELINES.PLANNING]: 'Just Planning',
};

/**
 * Contact method preferences
 */
export const CONTACT_METHODS = {
  EMAIL: 'email',
  PHONE: 'phone',
} as const;

// ============================================
// ROUTES & NAVIGATION
// ============================================

/**
 * Main application routes
 */
export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  AUTOMATION: '/automation',
  HOME_SERVER: '/home-server',
  PRICING: '/pricing',
  PORTFOLIO: '/portfolio',
  ABOUT: '/about',
  BLOG: '/blog',
  RESOURCES: '/resources',
  CONTACT: '/contact',
  PRIVACY: '/privacy',
  TERMS: '/terms',
} as const;

/**
 * API routes
 */
export const API_ROUTES = {
  CONTACT: '/api/contact',
  NEWSLETTER: '/api/newsletter',
} as const;

// ============================================
// BLOG & CONTENT
// ============================================

/**
 * Blog categories
 */
export const BLOG_CATEGORIES = {
  ALL: 'All Posts',
  AUTOMATION: 'Automation',
  CLOUD: 'Cloud',
  HOME_SERVER: 'Home Server',
  SECURITY: 'Security',
  DEVOPS: 'DevOps',
  TUTORIALS: 'Tutorials',
} as const;

// ============================================
// SOCIAL MEDIA
// ============================================

/**
 * Social media platforms
 */
export const SOCIAL_PLATFORMS = {
  LINKEDIN: 'LinkedIn',
  GITHUB: 'GitHub',
  TWITTER: 'Twitter',
} as const;

/**
 * Social media URLs (from environment variables)
 */
export const SOCIAL_URLS = {
  LINKEDIN: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  GITHUB: process.env.NEXT_PUBLIC_GITHUB_URL,
  TWITTER: process.env.NEXT_PUBLIC_TWITTER_URL,
} as const;

// ============================================
// BUSINESS HOURS
// ============================================

/**
 * Business operating hours
 */
export const BUSINESS_HOURS = {
  WEEKDAY: 'Monday - Friday: 9:00 AM - 6:00 PM MST',
  SATURDAY: 'Saturday: 10:00 AM - 2:00 PM MST',
  SUNDAY: 'Sunday: Closed',
  TIMEZONE: 'MST',
} as const;

// ============================================
// LIMITS & CONSTRAINTS
// ============================================

/**
 * Rate limiting configuration
 */
export const RATE_LIMITS = {
  /** Maximum contact form submissions per IP per hour */
  CONTACT_FORM_MAX_REQUESTS: 5,
  /** Time window in seconds */
  CONTACT_FORM_WINDOW_SECONDS: 3600,
} as const;

/**
 * Form validation limits
 */
export const VALIDATION_LIMITS = {
  /** Minimum name length */
  NAME_MIN_LENGTH: 2,
  /** Minimum message length */
  MESSAGE_MIN_LENGTH: 10,
  /** Maximum message length */
  MESSAGE_MAX_LENGTH: 5000,
} as const;

// ============================================
// META & SEO
// ============================================

/**
 * Default meta tags
 */
export const META_DEFAULTS = {
  /** Default page title suffix */
  TITLE_SUFFIX: 'NorthStack Solutions',
  /** Default meta description */
  DESCRIPTION: 'Enterprise-Grade DevOps & Automation for Canadian Businesses. Bringing 7+ years of enterprise experience to personalized service.',
  /** Default OG image */
  OG_IMAGE: '/images/og-image.png',
  /** Twitter handle */
  TWITTER_HANDLE: '@northstack',
} as const;

// ============================================
// FILE PATHS & ASSETS
// ============================================

/**
 * Common file paths
 */
export const PATHS = {
  /** Public images directory */
  IMAGES: '/images',
  /** Blog images */
  BLOG_IMAGES: '/images/blog',
  /** Portfolio images */
  PORTFOLIO_IMAGES: '/images/portfolio',
  /** Team photos */
  TEAM_IMAGES: '/images/team',
  /** Testimonial images */
  TESTIMONIAL_IMAGES: '/images/testimonials',
  /** Logo images */
  LOGOS: '/images/logos',
  /** Placeholder image */
  PLACEHOLDER: '/images/placeholder.svg',
} as const;

// ============================================
// EXTERNAL SERVICES
// ============================================

/**
 * External service configuration
 */
export const EXTERNAL_SERVICES = {
  /** Google Analytics measurement ID */
  GA_ID: process.env.NEXT_PUBLIC_GA_ID,
  /** Google Search Console verification */
  GOOGLE_VERIFICATION: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  /** Resend API key (server-side only) */
  RESEND_API_KEY: process.env.RESEND_API_KEY,
} as const;

// ============================================
// TYPE EXPORTS
// ============================================

/**
 * Extract const values as types for better type inference
 */
export type ServiceId = typeof SERVICE_IDS[keyof typeof SERVICE_IDS];
export type BudgetRange = typeof BUDGET_RANGES[keyof typeof BUDGET_RANGES];
export type Timeline = typeof TIMELINES[keyof typeof TIMELINES];
export type ContactMethod = typeof CONTACT_METHODS[keyof typeof CONTACT_METHODS];
export type Route = typeof ROUTES[keyof typeof ROUTES];
export type BlogCategory = typeof BLOG_CATEGORIES[keyof typeof BLOG_CATEGORIES];
export type SocialPlatform = typeof SOCIAL_PLATFORMS[keyof typeof SOCIAL_PLATFORMS];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get full URL for a route
 */
export function getFullUrl(path: string): string {
  return `${BUSINESS_INFO.siteUrl}${path}`;
}

/**
 * Get image path
 */
export function getImagePath(category: keyof typeof PATHS, filename: string): string {
  const basePath = PATHS[category];
  return `${basePath}/${filename}`;
}

/**
 * Check if service ID is valid
 */
export function isValidServiceId(id: string): id is ServiceId {
  return Object.values(SERVICE_IDS).includes(id as ServiceId);
}

/**
 * Get service display name
 */
export function getServiceName(id: string): string {
  return SERVICE_NAMES[id] || 'Unknown Service';
}

/**
 * Get budget display label
 */
export function getBudgetLabel(range: string): string {
  return BUDGET_LABELS[range] || 'Unknown Budget';
}

/**
 * Get timeline display label
 */
export function getTimelineLabel(timeline: string): string {
  return TIMELINE_LABELS[timeline] || 'Unknown Timeline';
}
