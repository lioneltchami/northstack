# Lighthouse Performance Audit Guide

This guide covers how to run Lighthouse audits to ensure your website meets performance, accessibility, best practices, and SEO standards.

## Quick Start

### Option 1: Chrome DevTools (Easiest)

1. Open your website in Google Chrome
2. Press `F12` to open DevTools
3. Click on the "Lighthouse" tab
4. Select categories to audit:
   - ✅ Performance
   - ✅ Accessibility
   - ✅ Best Practices
   - ✅ SEO
5. Click "Analyze page load"
6. Review results and follow recommendations

### Option 2: Command Line (Recommended for CI/CD)

```bash
# Install Lighthouse globally
npm install -g lighthouse

# Run audit on production site
lighthouse https://northstack.ca --view

# Run audit with specific options
lighthouse https://northstack.ca \
  --output html \
  --output-path ./lighthouse-report.html \
  --preset=desktop \
  --view

# Run on multiple pages
lighthouse https://northstack.ca --view
lighthouse https://northstack.ca/blog --view
lighthouse https://northstack.ca/contact --view
```

### Option 3: Automated CI/CD (Best for Production)

Install Lighthouse CI:

```bash
npm install --save-dev @lhci/cli
```

Create `.lighthouserc.js`:

```javascript
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: [
        'http://localhost:3000',
        'http://localhost:3000/blog',
        'http://localhost:3000/services',
        'http://localhost:3000/contact',
      ],
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Performance targets
        'categories:performance': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 3000 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],

        // Accessibility targets
        'categories:accessibility': ['error', { minScore: 0.95 }],

        // Best practices
        'categories:best-practices': ['error', { minScore: 1 }],

        // SEO targets
        'categories:seo': ['error', { minScore: 1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
```

Add to `package.json`:

```json
{
  "scripts": {
    "lhci": "lhci autorun",
    "lhci:collect": "lhci collect",
    "lhci:assert": "lhci assert"
  }
}
```

Run audit:

```bash
npm run build
npm start &
npm run lhci
```

## Target Scores

### Minimum Acceptable Scores

- **Performance:** ≥ 90 (Green)
- **Accessibility:** ≥ 95 (Green)
- **Best Practices:** 100 (Green)
- **SEO:** 100 (Green)

### Core Web Vitals

- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

## Common Issues & Fixes

### Performance

#### Issue: Large JavaScript Bundles
**Fix:**
- Use dynamic imports for large components
- Implement code splitting
- Use Next.js Image component (already done!)

```tsx
// Before
import HeavyComponent from './HeavyComponent';

// After
const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <div>Loading...</div>
});
```

#### Issue: Unoptimized Images
**Fix:** ✅ Already using Next.js Image component!

#### Issue: Render-Blocking Resources
**Fix:**
- Use `next/script` with `strategy="afterInteractive"`
- Inline critical CSS
- Preload important resources

```tsx
<link rel="preload" href="/fonts/important-font.woff2" as="font" crossOrigin="anonymous" />
```

### Accessibility

#### Issue: Missing Alt Text
**Fix:** Ensure all images have descriptive alt text

```tsx
<Image src="/logo.png" alt="NorthStack Solutions Logo" />
```

#### Issue: Low Color Contrast
**Fix:** Ensure text has sufficient contrast ratio (4.5:1 for normal text)

#### Issue: Missing ARIA Labels
**Fix:** Add appropriate ARIA labels to interactive elements

```tsx
<button aria-label="Close menu" onClick={closeMenu}>
  <X />
</button>
```

### Best Practices

#### Issue: Mixed Content (HTTP + HTTPS)
**Fix:** Ensure all resources use HTTPS

#### Issue: Console Errors
**Fix:** Fix any JavaScript errors in production

#### Issue: Deprecated APIs
**Fix:** Update code using deprecated browser APIs

### SEO

#### Issue: Missing Meta Description
**Fix:** ✅ Already configured in layout.tsx!

#### Issue: Missing Canonical URL
**Fix:** Add canonical URL to each page

```tsx
export const metadata = {
  alternates: {
    canonical: 'https://northstack.ca/page'
  }
};
```

#### Issue: Missing Structured Data
**Fix:** ✅ Already using StructuredData component!

## Automated Lighthouse Audits

### GitHub Actions Example

Create `.github/workflows/lighthouse.yml`:

```yaml
name: Lighthouse CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '20'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli
          npm start &
          sleep 10
          lhci autorun
```

### Vercel Integration

Vercel automatically runs Lighthouse audits on each deployment and shows results in the deployment summary.

To enable:
1. Go to your Vercel project
2. Settings → General → Automatically expose System Environment Variables
3. Deploy and check deployment summary

## Monitoring Over Time

### Tools for Continuous Monitoring

1. **PageSpeed Insights API**
   - Free monitoring service
   - https://developers.google.com/speed/docs/insights/v5/get-started

2. **Calibre**
   - Paid service ($99/month)
   - Continuous performance monitoring
   - https://calibreapp.com

3. **SpeedCurve**
   - Paid service ($20/month)
   - Performance budgets
   - https://speedcurve.com

4. **Web.dev Measure**
   - Free online tool
   - https://web.dev/measure/

## Best Practices

1. **Run audits regularly:** At least weekly, or on every deployment
2. **Test on different devices:** Mobile, tablet, desktop
3. **Test on different networks:** 4G, 3G, slow connections
4. **Set performance budgets:** Define maximum acceptable sizes
5. **Monitor trends:** Track scores over time, not just snapshots
6. **Fix regressions quickly:** Address performance decreases immediately
7. **Test in incognito mode:** Avoid browser extensions affecting results

## Performance Budget Example

Create `performance-budget.json`:

```json
{
  "budget": [
    {
      "path": "/*",
      "timings": [
        {
          "metric": "first-contentful-paint",
          "budget": 2000
        },
        {
          "metric": "largest-contentful-paint",
          "budget": 3000
        },
        {
          "metric": "cumulative-layout-shift",
          "budget": 0.1
        }
      ],
      "resourceSizes": [
        {
          "resourceType": "script",
          "budget": 300
        },
        {
          "resourceType": "image",
          "budget": 500
        },
        {
          "resourceType": "total",
          "budget": 1000
        }
      ]
    }
  ]
}
```

Use with Lighthouse CI:

```javascript
// .lighthouserc.js
module.exports = {
  ci: {
    collect: {
      // ...
    },
    assert: {
      budgetsFile: './performance-budget.json'
    }
  }
};
```

## Quick Wins Already Implemented

✅ Next.js Image optimization
✅ Google Analytics with afterInteractive loading
✅ Microsoft Clarity with afterInteractive loading
✅ Proper meta tags and structured data
✅ RSS feed for SEO
✅ Responsive design
✅ Error boundary for graceful error handling
✅ Sentry for error tracking

## Next Steps

1. **Run initial audit** using Chrome DevTools
2. **Fix critical issues** (score < 50 is critical)
3. **Set up Lighthouse CI** for automated checks
4. **Monitor regularly** and maintain green scores
5. **Optimize continuously** as you add features

## Resources

- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
- [Web.dev Performance Guide](https://web.dev/performance/)
- [Next.js Performance](https://nextjs.org/docs/advanced-features/measuring-performance)
- [Core Web Vitals](https://web.dev/vitals/)
- [Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci)

---

**Remember:** Performance is not a one-time task. Monitor it continuously and address regressions quickly!
