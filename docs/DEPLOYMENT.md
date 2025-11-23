# NorthStack Solutions - Deployment Guide

This guide provides step-by-step instructions for deploying the NorthStack Solutions website to production.

## Pre-Deployment Checklist

### 1. Update Configuration

- [ ] **Domain Configuration**
  - Update `metadataBase` in `app/layout.tsx` with your actual domain
  - Update sitemap URL in `app/sitemap.ts`
  - Update domain in `public/robots.txt`
  - Update domain in `components/StructuredData.tsx`

- [ ] **Contact Information**
  - Update email addresses in `components/Footer.tsx`
  - Update phone numbers in `components/Footer.tsx` and `app/contact/page.tsx`
  - Update business address in `components/StructuredData.tsx` with actual coordinates

- [ ] **SEO & Analytics**
  - Add Google verification code in `app/layout.tsx`
  - Set up Google Analytics and add tracking ID
  - Configure Google Search Console
  - Add Bing Webmaster Tools verification (optional)

- [ ] **Email Integration**
  - Choose email service (SendGrid, Resend, AWS SES recommended for production)
  - Configure email API in `app/api/contact/route.ts`
  - Test contact form submissions
  - Set up auto-responder emails

- [ ] **Content Review**
  - Add real images to `public/images/`
  - Add portfolio project screenshots
  - Review all copy for accuracy
  - Ensure all links work
  - Test dark mode on all pages

### 2. Environment Variables

Create a `.env.production` file:

```bash
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://northstack.solutions

# Email Service (SendGrid example)
SENDGRID_API_KEY=your_sendgrid_api_key
EMAIL_FROM=info@northstack.solutions
EMAIL_TO=info@northstack.solutions

# Google Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Optional: Calendly integration
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-link

# Optional: Newsletter service
NEWSLETTER_API_KEY=your_newsletter_api_key
```

## Deployment Options

### Option 1: Vercel (Recommended - Easiest)

**Why Vercel?**
- Built by Next.js creators
- Zero configuration
- Automatic SSL
- Edge network CDN
- Preview deployments for every push

**Steps:**

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - NorthStack Solutions website"
   git branch -M main
   git remote add origin https://github.com/your-username/northstack-solutions.git
   git push -u origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel auto-detects Next.js settings
   - Add environment variables from `.env.production`
   - Click "Deploy"

3. **Configure Custom Domain**
   - In Vercel dashboard, go to Project Settings → Domains
   - Add your domain (e.g., `northstack.solutions`)
   - Update DNS records as instructed by Vercel
   - SSL is automatically configured

4. **Post-Deployment**
   - Test all pages and functionality
   - Submit sitemap to Google Search Console
   - Set up Vercel analytics (optional)

**Vercel CLI Alternative:**
```bash
npm i -g vercel
vercel login
vercel
```

### Option 2: Netlify

**Steps:**

1. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 20

2. **Deploy via GitHub**
   - Connect repository to Netlify
   - Configure build settings
   - Add environment variables
   - Deploy

3. **Or use Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify login
   netlify init
   netlify deploy --prod
   ```

### Option 3: Self-Hosted VPS (AWS, DigitalOcean, Linode)

**Requirements:**
- Ubuntu 22.04+ server
- Node.js 20+
- Nginx or Caddy (for reverse proxy)
- PM2 (process manager)
- SSL certificate (Let's Encrypt)

**Steps:**

1. **Server Setup**
   ```bash
   # Update system
   sudo apt update && sudo apt upgrade -y

   # Install Node.js 20
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-install -y nodejs

   # Install PM2
   sudo npm install -g pm2

   # Create app directory
   mkdir -p /var/www/northstack-solutions
   cd /var/www/northstack-solutions
   ```

2. **Deploy Code**
   ```bash
   # Clone repository
   git clone https://github.com/your-username/northstack-solutions.git .

   # Install dependencies
   npm ci --production

   # Build
   npm run build

   # Start with PM2
   pm2 start npm --name "northstack" -- start
   pm2 save
   pm2 startup
   ```

3. **Configure Nginx**
   ```nginx
   server {
       listen 80;
       server_name northstack.solutions www.northstack.solutions;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

4. **SSL with Certbot**
   ```bash
   sudo apt install certbot python3-certbot-nginx
   sudo certbot --nginx -d northstack.solutions -d www.northstack.solutions
   ```

### Option 4: Docker Deployment

**Create Dockerfile:**

```dockerfile
FROM node:20-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

CMD HOSTNAME="0.0.0.0" node server.js
```

**Build and Run:**
```bash
docker build -t northstack-solutions .
docker run -p 3000:3000 --env-file .env.production northstack-solutions
```

**Docker Compose (with Nginx):**

```yaml
version: '3.8'

services:
  app:
    build: .
    restart: always
    env_file: .env.production
    ports:
      - "3000:3000"

  nginx:
    image: nginx:alpine
    restart: always
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf:ro
      - ./ssl:/etc/nginx/ssl:ro
    depends_on:
      - app
```

## Post-Deployment Tasks

### 1. DNS Configuration

Point your domain to the deployment:

**Vercel/Netlify:**
- Add A record: `@` → Vercel/Netlify IP
- Add CNAME: `www` → your-project.vercel.app

**Self-hosted:**
- Add A record: `@` → Your server IP
- Add A record: `www` → Your server IP

### 2. SEO Setup

**Google Search Console:**
```
1. Add property: https://northstack.solutions
2. Verify ownership (use HTML tag method from app/layout.tsx)
3. Submit sitemap: https://northstack.solutions/sitemap.xml
4. Check for crawl errors
5. Request indexing for key pages
```

**Google Analytics:**
```
1. Create GA4 property
2. Get measurement ID (G-XXXXXXXXXX)
3. Add to environment variables
4. Verify tracking is working
```

**Bing Webmaster Tools:**
```
1. Add site
2. Import from Google Search Console
3. Submit sitemap
```

### 3. Performance Monitoring

**Set up monitoring:**
- Vercel Analytics (if using Vercel)
- Google PageSpeed Insights baseline
- Uptime monitoring (UptimeRobot, Pingdom)
- Error tracking (Sentry optional)

### 4. Email Testing

Test contact form:
```
1. Submit test inquiry
2. Verify email received
3. Check auto-responder works
4. Test spam filtering
5. Verify email formatting on mobile
```

### 5. Cross-Browser Testing

Test on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)

### 6. Accessibility Audit

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run audit
lhci autorun --collect.url=https://northstack.solutions
```

Or use:
- WAVE browser extension
- axe DevTools
- Chrome Lighthouse

## Maintenance

### Regular Updates

**Weekly:**
- Check contact form submissions
- Monitor site uptime
- Review analytics

**Monthly:**
- Update dependencies: `npm update`
- Review and respond to blog comments (if enabled)
- Update portfolio with new case studies
- Check for broken links

**Quarterly:**
- Security audit: `npm audit`
- Performance review
- Content refresh
- SEO review

### Backup Strategy

**Vercel/Netlify:**
- Automatic Git backups
- Keep GitHub repository up to date

**Self-hosted:**
```bash
# Automated backup script
#!/bin/bash
DATE=$(date +%Y-%m-%d)
tar -czf /backups/northstack-$DATE.tar.gz /var/www/northstack-solutions
aws s3 cp /backups/northstack-$DATE.tar.gz s3://your-backup-bucket/
```

### Updating Content

**Add new blog post:**
```bash
1. Edit data/blog-posts.ts
2. Add new post object
3. Commit and push
4. Automatic deployment
```

**Update services:**
```bash
1. Edit data/services.ts
2. Update service details
3. Commit and push
```

## Troubleshooting

### Build Fails
```bash
# Clear Next.js cache
rm -rf .next

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build
```

### Environment Variables Not Working
- Ensure `.env.production` is added in deployment platform
- Prefix client-side variables with `NEXT_PUBLIC_`
- Rebuild after adding variables

### Contact Form Not Sending
- Check API route logs
- Verify email service API key
- Test email service separately
- Check spam folder

### Slow Page Load
- Enable image optimization (add actual images)
- Check Vercel/Netlify analytics for bottlenecks
- Review Core Web Vitals in PageSpeed Insights
- Enable caching headers

## Support

For deployment issues:
- Next.js Docs: https://nextjs.org/docs
- Vercel Docs: https://vercel.com/docs
- Community: https://github.com/vercel/next.js/discussions

---

**Deployment Status:** Production Ready ✅
**Last Updated:** January 2025
