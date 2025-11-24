/**
 * Sentry Server-Side Configuration
 *
 * This config is used for server-side (Node.js) error tracking.
 * Errors occurring in API routes, server components, and middleware will be captured.
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

    // Don't send events in development
    beforeSend(event) {
      if (process.env.NODE_ENV === 'development') {
        return null;
      }
      return event;
    },

    // Configure which transactions are sampled
    beforeSendTransaction(transaction) {
      // Don't send transactions in development
      if (process.env.NODE_ENV === 'development') {
        return null;
      }

      return transaction;
    },
  });
} else if (process.env.NODE_ENV === 'production') {
  console.info(
    'ℹ️ Sentry server-side tracking is not configured. Add NEXT_PUBLIC_SENTRY_DSN to enable error tracking.'
  );
}
