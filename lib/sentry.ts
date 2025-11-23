/**
 * Sentry Error Tracking Utilities
 *
 * Helper functions for manual error tracking and reporting to Sentry.
 * These can be used throughout the application to track specific errors,
 * events, and user feedback.
 *
 * @see https://docs.sentry.io/platforms/javascript/guides/nextjs/
 */

import * as Sentry from '@sentry/nextjs';

/**
 * Capture an exception and send to Sentry
 *
 * @param error - The error to capture
 * @param context - Additional context about the error
 *
 * @example
 * try {
 *   // Some code
 * } catch (error) {
 *   captureException(error, {
 *     tags: { section: 'checkout' },
 *     extra: { userId: user.id }
 *   });
 * }
 */
export function captureException(
  error: Error | unknown,
  context?: {
    tags?: Record<string, string>;
    extra?: Record<string, any>;
    level?: Sentry.SeverityLevel;
  }
): string | undefined {
  if (!isSentryEnabled()) {
    console.error('Error (Sentry not configured):', error);
    return undefined;
  }

  return Sentry.captureException(error, {
    tags: context?.tags,
    extra: context?.extra,
    level: context?.level || 'error',
  });
}

/**
 * Capture a message and send to Sentry
 *
 * @param message - The message to capture
 * @param level - Severity level
 * @param context - Additional context
 *
 * @example
 * captureMessage('User completed checkout', 'info', {
 *   tags: { flow: 'checkout' },
 *   extra: { amount: 100 }
 * });
 */
export function captureMessage(
  message: string,
  level: Sentry.SeverityLevel = 'info',
  context?: {
    tags?: Record<string, string>;
    extra?: Record<string, any>;
  }
): string | undefined {
  if (!isSentryEnabled()) {
    console.log(`[${level}] ${message}`, context);
    return undefined;
  }

  return Sentry.captureMessage(message, {
    level,
    tags: context?.tags,
    extra: context?.extra,
  });
}

/**
 * Set user context for error tracking
 *
 * @param user - User information
 *
 * @example
 * setUser({
 *   id: '123',
 *   email: 'user@example.com',
 *   username: 'johndoe'
 * });
 */
export function setUser(user: {
  id?: string;
  email?: string;
  username?: string;
  [key: string]: any;
}): void {
  if (!isSentryEnabled()) return;

  Sentry.setUser(user);
}

/**
 * Clear user context
 *
 * Call this on logout to stop associating errors with the user
 */
export function clearUser(): void {
  if (!isSentryEnabled()) return;

  Sentry.setUser(null);
}

/**
 * Add a breadcrumb for context
 *
 * Breadcrumbs are a trail of events that happened leading up to an error.
 *
 * @param breadcrumb - Breadcrumb data
 *
 * @example
 * addBreadcrumb({
 *   message: 'User clicked checkout button',
 *   category: 'user-action',
 *   level: 'info'
 * });
 */
export function addBreadcrumb(breadcrumb: {
  message?: string;
  category?: string;
  level?: Sentry.SeverityLevel;
  data?: Record<string, any>;
}): void {
  if (!isSentryEnabled()) return;

  Sentry.addBreadcrumb(breadcrumb);
}

/**
 * Set a custom tag
 *
 * Tags are key-value pairs that help filter and search errors in Sentry.
 *
 * @param key - Tag key
 * @param value - Tag value
 *
 * @example
 * setTag('page', 'checkout');
 * setTag('experiment', 'new-flow-v2');
 */
export function setTag(key: string, value: string): void {
  if (!isSentryEnabled()) return;

  Sentry.setTag(key, value);
}

/**
 * Set multiple tags at once
 *
 * @param tags - Object with tag key-value pairs
 *
 * @example
 * setTags({
 *   page: 'checkout',
 *   experiment: 'new-flow-v2',
 *   version: '2.0'
 * });
 */
export function setTags(tags: Record<string, string>): void {
  if (!isSentryEnabled()) return;

  Sentry.setTags(tags);
}

/**
 * Set extra context data
 *
 * @param key - Context key
 * @param value - Context value
 *
 * @example
 * setContext('checkout', {
 *   cart_items: 5,
 *   total_amount: 150.50,
 *   currency: 'CAD'
 * });
 */
export function setContext(key: string, value: Record<string, any> | null): void {
  if (!isSentryEnabled()) return;

  Sentry.setContext(key, value);
}

/**
 * Capture user feedback
 *
 * @param feedback - Feedback data
 *
 * @example
 * captureFeedback({
 *   name: 'John Doe',
 *   email: 'john@example.com',
 *   message: 'The checkout page crashed'
 * });
 */
export function captureFeedback(feedback: {
  name?: string;
  email?: string;
  message: string;
}): void {
  if (!isSentryEnabled()) return;

  Sentry.captureFeedback(feedback);
}

/**
 * Check if Sentry is enabled and configured
 *
 * @returns true if Sentry is configured and active
 */
export function isSentryEnabled(): boolean {
  return (
    typeof process.env.NEXT_PUBLIC_SENTRY_DSN === 'string' &&
    process.env.NEXT_PUBLIC_SENTRY_DSN.length > 0 &&
    process.env.NODE_ENV !== 'development'
  );
}

/**
 * Manually flush any pending Sentry events
 *
 * Useful before process termination or page navigation
 *
 * @param timeout - Max time to wait in milliseconds
 * @returns Promise that resolves when flush is complete
 */
export async function flush(timeout = 2000): Promise<boolean> {
  if (!isSentryEnabled()) return true;

  return await Sentry.flush(timeout);
}

// Re-export commonly used Sentry types
export type { SeverityLevel } from '@sentry/nextjs';
