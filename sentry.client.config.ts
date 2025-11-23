/**
 * Sentry Client-Side Configuration
 *
 * This config is used for client-side (browser) error tracking.
 * Errors occurring in React components, user interactions, and API calls will be captured.
 *
 * Setup:
 * 1. Create a Sentry account at https://sentry.io
 * 2. Create a new Next.js project in Sentry
 * 3. Get your DSN from the project settings
 * 4. Add to .env.local: NEXT_PUBLIC_SENTRY_DSN=your_dsn_here
 *
 * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/
 */

import * as Sentry from '@sentry/nextjs';

const SENTRY_DSN = process.env.NEXT_PUBLIC_SENTRY_DSN;

if (SENTRY_DSN) {
  Sentry.init({
    // Data Source Name - unique identifier for your Sentry project
    dsn: SENTRY_DSN,

    // Environment (production, staging, development)
    environment: process.env.NODE_ENV,

    // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,

    // Capture Replay for 10% of all sessions,
    // plus 100% of sessions with an error
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,

    // This sets the sample rate to be 10%. You may want this to be 100% while
    // in development and sample at a lower rate in production
    // tracesSampleRate: 0.1,

    // You can remove this option if you're not planning to use the Sentry Session Replay feature
    integrations: [
      Sentry.replayIntegration({
        // Additional SDK configuration goes in here, for example:
        maskAllText: true,
        blockAllMedia: true,
      }),
    ],

    // Ignore certain errors
    ignoreErrors: [
      // Browser extensions
      'top.GLOBALS',
      'canvas.contentDocument',
      'MyApp_RemoveAllHighlights',
      'atomicFindClose',
      // Network errors
      'NetworkError',
      'Non-Error promise rejection captured',
      // Third-party scripts
      'gtag',
      'fbq',
    ],

    // Filter out noise from development
    beforeSend(event) {
      // Don't send events in development
      if (process.env.NODE_ENV === 'development') {
        return null;
      }

      // Filter out specific errors you don't want to track
      if (event.exception?.values?.[0]?.value?.includes('ResizeObserver')) {
        return null;
      }

      return event;
    },
  });
} else if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
  console.info(
    'ℹ️ Sentry is not configured. Add NEXT_PUBLIC_SENTRY_DSN to enable error tracking.'
  );
}
