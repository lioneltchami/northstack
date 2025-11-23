import { RATE_LIMITS } from './constants';

/**
 * Simple in-memory rate limiter for serverless environments
 *
 * Features:
 * - IP-based rate limiting
 * - Sliding window algorithm
 * - Automatic cleanup of expired entries
 * - Memory efficient
 *
 * For production with multiple servers, consider:
 * - Upstash Rate Limit
 * - Redis-based rate limiting
 * - Vercel Edge Config
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

// Store rate limit data in memory (resets on serverless function cold start)
const rateLimitStore = new Map<string, RateLimitEntry>();

// Cleanup old entries every hour to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (entry.resetTime < now) {
      rateLimitStore.delete(key);
    }
  }
}, 60 * 60 * 1000); // 1 hour

export interface RateLimitConfig {
  /**
   * Maximum number of requests allowed within the window
   * @default RATE_LIMITS.CONTACT_FORM_MAX_REQUESTS (5)
   */
  maxRequests?: number;

  /**
   * Time window in seconds
   * @default RATE_LIMITS.CONTACT_FORM_WINDOW_SECONDS (3600 = 1 hour)
   */
  windowSeconds?: number;
}

export interface RateLimitResult {
  success: boolean;
  remaining: number;
  reset: number;
  retryAfter?: number;
}

/**
 * Check if a request should be rate limited
 *
 * @param identifier - Unique identifier (typically IP address)
 * @param config - Rate limit configuration
 * @returns Rate limit result
 */
export function rateLimit(
  identifier: string,
  config: RateLimitConfig = {}
): RateLimitResult {
  const maxRequests = config.maxRequests ?? RATE_LIMITS.CONTACT_FORM_MAX_REQUESTS;
  const windowMs = (config.windowSeconds ?? RATE_LIMITS.CONTACT_FORM_WINDOW_SECONDS) * 1000;
  const now = Date.now();

  // Get or create entry for this identifier
  let entry = rateLimitStore.get(identifier);

  // If no entry or window expired, create new entry
  if (!entry || entry.resetTime < now) {
    entry = {
      count: 1,
      resetTime: now + windowMs,
    };
    rateLimitStore.set(identifier, entry);

    return {
      success: true,
      remaining: maxRequests - 1,
      reset: entry.resetTime,
    };
  }

  // Increment counter
  entry.count++;

  // Check if limit exceeded
  if (entry.count > maxRequests) {
    const retryAfterSeconds = Math.ceil((entry.resetTime - now) / 1000);

    return {
      success: false,
      remaining: 0,
      reset: entry.resetTime,
      retryAfter: retryAfterSeconds,
    };
  }

  // Within limit
  return {
    success: true,
    remaining: maxRequests - entry.count,
    reset: entry.resetTime,
  };
}

/**
 * Get client IP address from request headers
 * Works with Vercel, Cloudflare, and other common platforms
 *
 * @param request - Next.js request object
 * @returns IP address or 'unknown'
 */
export function getClientIp(request: Request): string {
  // Try various headers (in order of preference)
  const headers = {
    // Vercel
    'x-real-ip': request.headers.get('x-real-ip'),
    'x-forwarded-for': request.headers.get('x-forwarded-for'),
    // Cloudflare
    'cf-connecting-ip': request.headers.get('cf-connecting-ip'),
    // Generic
    'x-client-ip': request.headers.get('x-client-ip'),
  };

  // Return first non-null IP
  for (const [, value] of Object.entries(headers)) {
    if (value) {
      // x-forwarded-for can contain multiple IPs, take the first
      return value.split(',')[0].trim();
    }
  }

  return 'unknown';
}

/**
 * Format rate limit error message
 *
 * @param result - Rate limit result
 * @returns User-friendly error message
 */
export function formatRateLimitError(result: RateLimitResult): string {
  const minutes = Math.ceil((result.retryAfter ?? 0) / 60);

  if (minutes < 1) {
    return 'Too many requests. Please try again in a few moments.';
  } else if (minutes === 1) {
    return 'Too many requests. Please try again in 1 minute.';
  } else if (minutes < 60) {
    return `Too many requests. Please try again in ${minutes} minutes.`;
  } else {
    const hours = Math.ceil(minutes / 60);
    return `Too many requests. Please try again in ${hours} hour${hours > 1 ? 's' : ''}.`;
  }
}
