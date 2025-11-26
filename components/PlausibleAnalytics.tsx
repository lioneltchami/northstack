'use client';

import Script from 'next/script';

/**
 * Plausible Analytics Component
 *
 * Privacy-friendly analytics alternative to Google Analytics.
 * Lightweight, GDPR compliant, and no cookie banners needed.
 *
 * @see {@link https://plausible.io/ Plausible Analytics}
 *
 * Setup:
 * 1. Sign up at https://plausible.io (14-day free trial, then $9/month)
 * 2. Add your website domain
 * 3. Add to .env.local: NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
 * 4. Deploy and verify tracking in Plausible dashboard
 *
 * Features:
 * - Privacy-friendly (no cookies, GDPR compliant)
 * - Lightweight (< 1KB script)
 * - Simple, easy-to-understand dashboard
 * - No personal data collection
 * - Can be self-hosted
 *
 * Note: Use either Plausible OR Google Analytics, not both (unless you need both)
 *
 * @example
 * // In your layout.tsx
 * import PlausibleAnalytics from '@/components/PlausibleAnalytics';
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <head>
 *         <PlausibleAnalytics />
 *       </head>
 *       <body>{children}</body>
 *     </html>
 *   );
 * }
 */
export default function PlausibleAnalytics() {
  const domain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  // Don't load in development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Don't load if domain is not configured
  if (!domain) {
    if (typeof window !== 'undefined') {
      console.info(
        'ℹ️ Plausible Analytics is not configured. Add NEXT_PUBLIC_PLAUSIBLE_DOMAIN to your environment variables to enable privacy-friendly analytics.'
      );
    }
    return null;
  }

  return (
    <Script
      defer
      data-domain={domain}
      src="https://plausible.io/js/script.js"
      strategy="afterInteractive"
    />
  );
}

/**
 * Track custom events with Plausible
 *
 * @param eventName - Name of the event
 * @param props - Optional event properties
 *
 * @example
 * trackPlausibleEvent('Download', { method: 'PDF' });
 */
export function trackPlausibleEvent(
  eventName: string,
  props?: Record<string, string | number | boolean>
): void {
  if (
    typeof window !== 'undefined' &&
    'plausible' in window &&
    typeof (window as any).plausible === 'function'
  ) {
    (window as any).plausible(eventName, { props });
  }
}
