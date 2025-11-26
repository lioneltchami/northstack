# Uptime & Performance Monitoring Guide

This guide covers setting up monitoring for your NorthStack Solutions website to ensure you know about issues before your users do.

## Table of Contents

1. [Uptime Monitoring](#uptime-monitoring)
2. [Performance Monitoring](#performance-monitoring)
3. [Error Tracking](#error-tracking)
4. [Analytics & User Behavior](#analytics--user-behavior)
5. [Recommended Monitoring Stack](#recommended-monitoring-stack)

## Uptime Monitoring

### UptimeRobot (Recommended - Free)

UptimeRobot monitors your website every 5 minutes and alerts you if it goes down.

**Features:**
- ✅ Free tier: 50 monitors, 5-minute intervals
- ✅ Email, SMS, Slack notifications
- ✅ Status pages
- ✅ SSL certificate monitoring
- ✅ Response time tracking

**Setup:**
1. Go to https://uptimerobot.com
2. Create a free account
3. Add a new monitor:
   - **Monitor Type:** HTTP(s)
   - **Friendly Name:** NorthStack Solutions
   - **URL:** https://northstack.ca
   - **Monitoring Interval:** 5 minutes
4. Configure alert contacts (email, Slack, etc.)

**Recommended Monitors:**
- Homepage: `https://northstack.ca`
- Contact Form: `https://northstack.ca/contact`
- Blog: `https://northstack.ca/blog`
- API Health: `https://northstack.ca/api/health` (if you add a health endpoint)

### Alternatives

#### BetterUptime (More Features)
- https://betterstack.com/uptime
- Free tier: 10 monitors, 3-minute intervals
- Beautiful status pages
- Incident management

#### Pingdom (Enterprise)
- https://www.pingdom.com
- More advanced monitoring
- Paid service ($10+/month)

## Performance Monitoring

### Vercel Analytics (If using Vercel)

Built-in performance tracking for Next.js apps.

**Setup:**
1. Enable in Vercel dashboard
2. Install package:
```bash
npm install @vercel/analytics
```

3. Add to layout:
```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

### Lighthouse CI

Automated Lighthouse audits on every deployment.

**Setup:**
1. Install:
```bash
npm install --save-dev @lhci/cli
```

2. Add script to package.json:
```json
{
  "scripts": {
    "lhci": "lhci autorun"
  }
}
```

3. Create `.lighthouserc.js`:
```javascript
module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run start',
      url: ['http://localhost:3000', 'http://localhost:3000/blog'],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'categories:best-practices': ['error', { minScore: 1 }],
        'categories:seo': ['error', { minScore: 1 }],
      },
    },
  },
};
```

## Error Tracking

### Sentry (Already Configured)

Your app is already set up with Sentry for error tracking.

**To Enable:**
1. Create account at https://sentry.io
2. Create a new Next.js project
3. Get your DSN (looks like: `https://xxxxx@xxxxx.ingest.sentry.io/xxxxx`)
4. Add to `.env.local`:
```bash
NEXT_PUBLIC_SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx
```

**Features:**
- ✅ Automatic error capture
- ✅ Source maps for debugging
- ✅ Performance monitoring
- ✅ Release tracking
- ✅ User feedback

## Analytics & User Behavior

### Google Analytics 4 (Already Configured)

Track page views, events, and conversions.

**To Enable:**
1. Create GA4 property at https://analytics.google.com
2. Get your Measurement ID (G-XXXXXXXXXX)
3. Add to `.env.local`:
```bash
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Microsoft Clarity (Already Configured)

Free heatmaps and session recordings.

**To Enable:**
1. Create account at https://clarity.microsoft.com
2. Add your website
3. Get your Project ID
4. Add to `.env.local`:
```bash
NEXT_PUBLIC_CLARITY_ID=your_project_id
```

**Use Cases:**
- See where users click
- Watch session recordings
- Identify UX issues
- Find rage clicks and dead clicks

### Plausible Analytics (Privacy-Friendly Alternative)

Simple, privacy-friendly analytics without cookies.

**To Enable:**
1. Sign up at https://plausible.io (14-day trial, $9/month)
2. Add your domain
3. Add to `.env.local`:
```bash
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=northstack.ca
```

4. Comment out Google Analytics in `layout.tsx` if you prefer Plausible

## Recommended Monitoring Stack

### Free Tier (Recommended for Startups)
- **Uptime:** UptimeRobot (free)
- **Errors:** Sentry (free tier: 5k events/month)
- **Analytics:** Google Analytics 4 (free)
- **Heatmaps:** Microsoft Clarity (free)
- **Performance:** Vercel Analytics (free on Vercel)

**Total Cost:** $0/month

### Growth Tier (More Features)
- **Uptime:** BetterUptime ($20/month)
- **Errors:** Sentry Pro ($26/month)
- **Analytics:** Plausible Analytics ($9/month)
- **Heatmaps:** Microsoft Clarity (free)
- **Performance:** Vercel Pro ($20/month)

**Total Cost:** ~$75/month

## Setting Up Alerts

### Critical Alerts (Immediate Action Required)
- Website down (UptimeRobot → SMS/Slack)
- Error rate spike (Sentry → Email/Slack)
- SSL certificate expiring (UptimeRobot → Email)

### Warning Alerts (Check Within 24h)
- Response time > 2 seconds (UptimeRobot → Email)
- Error rate > normal (Sentry → Email)
- Large traffic spike (GA4 → Email)

### Info Alerts (Weekly Digest)
- Performance trends (Vercel Analytics)
- User behavior insights (Clarity)
- Traffic patterns (GA4)

## Health Check Endpoint (Optional)

Create an API endpoint to check your app's health:

```typescript
// app/api/health/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Check critical services
    const checks = {
      database: await checkDatabase(),
      email: await checkEmailService(),
      // Add other checks
    };

    const allHealthy = Object.values(checks).every(status => status === 'ok');

    return NextResponse.json(
      {
        status: allHealthy ? 'healthy' : 'degraded',
        timestamp: new Date().toISOString(),
        checks,
      },
      { status: allHealthy ? 200 : 503 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: 'unhealthy',
        error: 'Health check failed',
      },
      { status: 503 }
    );
  }
}

async function checkDatabase(): Promise<'ok' | 'error'> {
  // Add database check if applicable
  return 'ok';
}

async function checkEmailService(): Promise<'ok' | 'error'> {
  // Verify Resend API is accessible
  return 'ok';
}
```

Then monitor this endpoint with UptimeRobot.

## Best Practices

1. **Start Small:** Begin with UptimeRobot and Sentry (both have free tiers)
2. **Set Realistic Thresholds:** Don't alert on every tiny issue
3. **Test Your Alerts:** Manually trigger alerts to ensure they work
4. **Review Weekly:** Look at trends, not just incidents
5. **Document Incidents:** Learn from downtime
6. **Monitor User Experience:** Not just server metrics
7. **Set Up Runbooks:** Document how to respond to each alert type

## Quick Start Checklist

- [ ] Set up UptimeRobot for basic uptime monitoring
- [ ] Configure Sentry DSN for error tracking
- [ ] Enable Google Analytics 4 for traffic insights
- [ ] Add Microsoft Clarity for user behavior
- [ ] Test alert notifications
- [ ] Create a status page (UptimeRobot or Better Uptime)
- [ ] Document your runbook for common issues
- [ ] Set up weekly reporting

## Resources

- [UptimeRobot Documentation](https://uptimerobot.com/help/)
- [Sentry Next.js Guide](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [GA4 Getting Started](https://support.google.com/analytics/answer/9304153)
- [Microsoft Clarity Setup](https://docs.microsoft.com/en-us/clarity/)
- [Vercel Analytics](https://vercel.com/docs/analytics)

---

**Remember:** The goal of monitoring is not to have zero alerts, but to know about problems before they significantly impact your users.
