'use client';

import Script from 'next/script';

/**
 * Google Analytics Component
 * Optimized analytics tracking with Next.js Script component
 *
 * Setup Instructions:
 * 1. Get your GA4 Measurement ID from Google Analytics
 * 2. Replace 'G-XXXXXXXXXX' with your actual measurement ID
 * 3. Set as environment variable: NEXT_PUBLIC_GA_ID
 */

export default function Analytics() {
  // Get GA ID from environment variable
  const gaId = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

  // Don't load analytics in development
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  // Don't load if GA ID is not configured
  if (gaId === 'G-XXXXXXXXXX') {
    console.warn(
      'Google Analytics is not configured. Set NEXT_PUBLIC_GA_ID in your environment variables.'
    );
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
 * Custom event tracking function
 * Use this to track custom events throughout your app
 */
export function trackEvent(
  eventName: string,
  eventParams?: { [key: string]: any }
) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }
}

/**
 * Track page views
 * Useful for SPAs and dynamic routing
 */
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: url,
    });
  }
}
