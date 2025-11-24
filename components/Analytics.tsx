'use client';

import Script from 'next/script';

/**
 * Google Analytics Component
 *
 * Loads Google Analytics 4 (GA4) tracking scripts.
 * Only loads in production when NEXT_PUBLIC_GA_ID is configured.
 *
 * @see {@link https://analytics.google.com/analytics/web/ Get your GA4 Measurement ID}
 *
 * Setup:
 * 1. Create a GA4 property at https://analytics.google.com
 * 2. Get your Measurement ID (format: G-XXXXXXXXXX)
 * 3. Add to .env.local: NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
 * 4. Deploy and verify tracking in GA4 Real-Time reports
 *
 * @example
 * // In your layout.tsx
 * import Analytics from '@/components/Analytics';
 * export default function RootLayout({ children }) {
 *   return (
 *     <html>
 *       <body>
 *         {children}
 *         <Analytics />
 *       </body>
 *     </html>
 *   );
 * }
 */
export default function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  // Don't load analytics in development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Don't load if GA ID is not configured
  if (!gaId || !gaId.startsWith('G-')) {
    if (typeof window !== 'undefined') {
      console.info(
        'ℹ️ Google Analytics is not configured. Add NEXT_PUBLIC_GA_ID to your environment variables to enable tracking.'
      );
    }
    return null;
  }

  return (
    <>
      {/* Google Analytics gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${gaId}', {
            page_path: window.location.pathname,
            send_page_view: true,
          });
        `}
      </Script>
    </>
  );
}

/**
 * Event parameters for Google Analytics
 */
export interface EventParams {
  [key: string]: string | number | boolean | undefined;
  event_category?: string;
  event_label?: string;
  value?: number;
}

/**
 * Track custom events throughout your app
 *
 * @param eventName - Name of the event (e.g., 'button_click', 'form_submit')
 * @param eventParams - Optional event parameters
 *
 * @example
 * trackEvent('contact_form_submit', {
 *   event_category: 'engagement',
 *   event_label: 'contact_page',
 *   value: 1
 * });
 */
export function trackEvent(
  eventName: string,
  eventParams?: EventParams
): void {
  if (
    typeof window !== 'undefined' &&
    'gtag' in window &&
    typeof (window as any).gtag === 'function'
  ) {
    (window as any).gtag('event', eventName, eventParams);
  }
}

/**
 * Track page views for SPA navigation
 *
 * @param url - The URL path to track
 *
 * @example
 * // In your app router or pages
 * useEffect(() => {
 *   trackPageView(window.location.pathname);
 * }, [pathname]);
 */
export function trackPageView(url: string): void {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  if (
    typeof window !== 'undefined' &&
    'gtag' in window &&
    typeof (window as any).gtag === 'function' &&
    gaId
  ) {
    (window as any).gtag('config', gaId, {
      page_path: url,
    });
  }
}

/**
 * Track exceptions/errors
 *
 * @param description - Description of the error
 * @param fatal - Whether the error is fatal
 *
 * @example
 * try {
 *   // Some code
 * } catch (error) {
 *   trackException(error.message, false);
 * }
 */
export function trackException(description: string, fatal = false): void {
  if (
    typeof window !== 'undefined' &&
    'gtag' in window &&
    typeof (window as any).gtag === 'function'
  ) {
    (window as any).gtag('event', 'exception', {
      description,
      fatal,
    });
  }
}
