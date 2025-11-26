# NorthStack Solutions - Complete Setup Guide

This guide covers **everything** you need to do manually to activate all features of your website.

---

## Table of Contents

1. [Essential Setup (Required)](#1-essential-setup-required)
2. [Analytics & Tracking](#2-analytics--tracking)
3. [Live Chat & Communication](#3-live-chat--communication)
4. [Calendar Booking](#4-calendar-booking)
5. [Lead Magnets & Downloads](#5-lead-magnets--downloads)
6. [Business Listings & Local SEO](#6-business-listings--local-seo)
7. [Social Media Profiles](#7-social-media-profiles)
8. [Email Marketing (Optional)](#8-email-marketing-optional)
9. [Monitoring & Error Tracking](#9-monitoring--error-tracking)
10. [Testing & Launch Checklist](#10-testing--launch-checklist)

---

## 1. Essential Setup (Required)

These are **required** for your website to function properly.

### A. Environment Variables Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Update the following **REQUIRED** variables in `.env.local`:

   ```bash
   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://northstack.ca
   NEXT_PUBLIC_SITE_NAME=NorthStack Solutions
   NEXT_PUBLIC_COMPANY_NAME="Apoti Tech Inc."
   NEXT_PUBLIC_BUSINESS_LOCATION="Calgary, Alberta, Canada"

   # Contact Information
   NEXT_PUBLIC_CONTACT_EMAIL=info@northstack.ca
   NEXT_PUBLIC_SUPPORT_EMAIL=info@northstack.ca
   NEXT_PUBLIC_CONTACT_PHONE="+1 (587) 432-0753"
   ```

### B. Resend API (Contact Form) ⚠️ REQUIRED

Your contact form **will not work** without this!

**Steps:**

1. **Sign up** at https://resend.com
2. **Verify your domain**:
   - Go to Domains → Add Domain
   - Add `northstack.ca`
   - Add the DNS records Resend provides to your domain registrar
   - Wait for verification (usually 5-10 minutes)
3. **Create API Key**:
   - Go to API Keys → Create API Key
   - Copy the key (starts with `re_`)
4. **Add to `.env.local`**:
   ```bash
   RESEND_API_KEY=re_your_actual_key_here
   ```

**Test it:**
- Deploy your site
- Go to /contact page
- Submit a test form
- Check if you receive the email at your NEXT_PUBLIC_SUPPORT_EMAIL address

---

## 2. Analytics & Tracking

Track your website visitors and behavior. **At least one analytics tool is recommended.**

### A. Google Analytics 4 (Recommended) 🔥

**Why:** Most popular, free, comprehensive data

**Steps:**

1. **Create account** at https://analytics.google.com
2. **Create property**:
   - Property name: "NorthStack Solutions"
   - Reporting time zone: "Canada/Mountain"
   - Currency: CAD
3. **Create Data Stream**:
   - Platform: Web
   - Website URL: https://northstack.ca
   - Stream name: "NorthStack Website"
4. **Copy Measurement ID**:
   - Format: `G-XXXXXXXXXX`
   - Found in: Admin → Data Streams → Your stream → Measurement ID
5. **Add to `.env.local`**:
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

**Verify it's working:**
- Visit https://analytics.google.com
- Go to Reports → Realtime
- Open your website in another tab
- You should see 1 active user

### B. Microsoft Clarity (Optional but Recommended) 🔥

**Why:** FREE heatmaps and session recordings - see exactly how users interact with your site!

**Steps:**

1. **Sign up** at https://clarity.microsoft.com
2. **Create project**:
   - Name: "NorthStack Solutions"
   - Website: https://northstack.ca
3. **Copy Website ID**:
   - Found in: Settings → Setup → Website ID
4. **Add to `.env.local`**:
   ```bash
   NEXT_PUBLIC_CLARITY_ID=your_clarity_project_id
   ```

**Verify it's working:**
- Visit your Clarity dashboard
- Open your website
- Wait 2-3 minutes
- You should see recordings appearing in dashboard

### C. Plausible Analytics (Optional Alternative)

**Why:** Privacy-friendly, no cookies, GDPR compliant, paid alternative to Google Analytics

**Steps:**

1. **Sign up** at https://plausible.io (paid - $9/month)
2. **Add website**: northstack.ca
3. **Add to `.env.local`**:
   ```bash
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=northstack.ca
   ```

**Note:** You can use this **instead of** Google Analytics if you prefer privacy-focused analytics.

---

## 3. Live Chat & Communication

Enable instant customer support and increase conversions.

### Crisp Live Chat (Recommended) 🔥

**Why:** Free, instant customer support, 20-40% more qualified leads

**Steps:**

1. **Sign up** at https://crisp.chat/en/ (free tier is excellent)
2. **Create website**:
   - Website name: "NorthStack Solutions"
   - Website URL: https://northstack.ca
3. **Get Website ID**:
   - Go to Settings → Website Settings → Setup Instructions
   - Copy the Website ID (long alphanumeric string)
4. **Add to `.env.local`**:
   ```bash
   NEXT_PUBLIC_CRISP_WEBSITE_ID=your_website_id_here
   ```
5. **Customize chatbox**:
   - Settings → Chatbox & Email → Appearance
   - Color: #0f766e (your primary color)
   - Position: Bottom right
   - Welcome message: "👋 Hi! Need help with DevOps or automation? We typically reply within 2 hours."

**Set up notifications:**
- Download Crisp mobile app (iOS/Android)
- Enable push notifications
- Now you'll get instant alerts when someone messages

**Verify it's working:**
- Visit your website
- You should see the chat bubble in bottom right
- Click it and send a test message
- Check your Crisp dashboard or mobile app

---

## 4. Calendar Booking

Let customers book consultation calls directly without email back-and-forth.

### Calendly Setup (Recommended) 🔥

**Why:** 3x faster booking, 40% more consultations booked

**Steps:**

1. **Sign up** at https://calendly.com (free tier works great)
2. **Create event type**:
   - Event name: "Free 30-Minute Consultation"
   - Duration: 30 minutes
   - Location: Google Meet or Zoom
   - Description: "Let's discuss your DevOps, automation, or cloud infrastructure needs. No sales pressure, just honest advice."
3. **Set availability**:
   - Monday-Friday: 9:00 AM - 5:00 PM MST
   - Buffer time: 15 minutes between meetings
   - Notice period: 4 hours (prevents last-minute bookings)
4. **Customize booking page**:
   - Add your logo
   - Brand color: #0f766e (your primary color)
   - Questions to ask:
     - "What's your biggest tech challenge right now?"
     - "What service are you interested in?"
     - "How did you hear about us?"
5. **Copy your link**:
   - Format: `https://calendly.com/your-username/30min`
6. **Add to `.env.local`**:
   ```bash
   NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username/30min
   ```

**Verify it's working:**
- Visit your website
- Go to /contact page
- Click "Schedule Your Free Consultation" button
- Calendly popup should appear with your availability

---

## 5. Lead Magnets & Downloads

Create PDFs that capture email addresses in exchange for valuable content.

### A. AWS Cost Optimization Checklist (Exit Intent Popup)

**Required for:** Exit intent popup to work

**What to create:**
- PDF guide: "15 Ways to Cut Your AWS Costs by 50%"
- 3-5 pages
- Actionable checklist format

**Content ideas:**
- Right-size your EC2 instances
- Use Reserved Instances or Savings Plans
- Delete unused EBS volumes
- Set up auto-scaling
- Use S3 lifecycle policies
- Enable Cost Explorer
- Tag all resources
- Use CloudWatch alarms
- etc.

**Where to save it:**
```
/public/downloads/aws-cost-optimization-checklist.pdf
```

**Design tools:**
- Canva (easiest): https://canva.com
- Google Slides + export to PDF
- Microsoft PowerPoint + export to PDF

### B. DevOps Automation Guide (CTA Download)

**Required for:** Multi-tier CTA component

**What to create:**
- PDF guide: "DevOps & Automation Best Practices for Canadian Businesses"
- 5-10 pages
- More comprehensive than checklist

**Content ideas:**
- What is DevOps?
- Why automation matters
- Common automation workflows
- Tools comparison (Make.com vs Zapier vs n8n)
- Case studies
- Getting started steps
- ROI calculator

**Where to save it:**
```
/public/downloads/devops-automation-guide.pdf
```

### C. Email Service Integration (For Lead Capture)

Right now, captured emails just log to console. You need to integrate with an email service.

**Recommended: Mailchimp (Free)**

1. **Sign up** at https://mailchimp.com (free up to 500 contacts)
2. **Create audience**: "NorthStack Leads"
3. **Get API key**: Account → Extras → API keys
4. **Create API endpoint** at `/app/api/subscribe/route.ts`:

```typescript
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { email } = await request.json();

  // Add to Mailchimp
  const response = await fetch(
    `https://${process.env.MAILCHIMP_DC}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
    {
      method: 'POST',
      headers: {
        Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email_address: email,
        status: 'subscribed',
      }),
    }
  );

  return NextResponse.json({ success: true });
}
```

5. **Add to `.env.local`**:
```bash
MAILCHIMP_API_KEY=your_api_key
MAILCHIMP_AUDIENCE_ID=your_list_id
MAILCHIMP_DC=us21  # from your API key (us21, us19, etc.)
```

**Alternative: ConvertKit, Brevo (Sendinblue), or EmailOctopus**

---

## 6. Business Listings & Local SEO

**See full guide:** `docs/LOCAL_BUSINESS_LISTINGS.md`

Here's the priority order:

### Week 1: Essential (Must Do) 🔥

1. **Google Business Profile** ⭐ HIGHEST PRIORITY
   - URL: https://business.google.com
   - Why: 90% of local searches happen on Google
   - Time: 30 minutes + verification (5-7 days)
   - Steps:
     1. Claim your business or create new
     2. Category: "Information Technology Company"
     3. Add: Address (or service area), phone, website, hours
     4. Upload: Logo, cover photo, 10+ business photos
     5. Write description (750 chars): Use keywords "DevOps Calgary", "IT automation", etc.
     6. Add services: List all your services
     7. Verify: By mail, phone, or email
   - **Action:** Do this TODAY - verification takes 5-7 days

2. **Facebook Business Page**
   - URL: https://www.facebook.com/pages/create
   - Why: Social proof, customer engagement
   - Time: 20 minutes
   - Steps:
     1. Create page → Business or Brand
     2. Category: Information Technology Company
     3. Add: Logo, cover photo, description
     4. Complete "About" section
     5. Add website, phone, email, hours
     6. Invite friends/connections to like page

3. **LinkedIn Company Page**
   - URL: https://www.linkedin.com/company/setup/new/
   - Why: B2B credibility, professional networking
   - Time: 20 minutes
   - Steps:
     1. Create company page
     2. Add: Logo, banner, description
     3. Industry: Information Technology & Services
     4. Company size: 1-10 employees
     5. Add specialties: DevOps, Cloud, Automation, etc.
     6. Invite employees to add company to profile

### Week 2: Important

4. **Bing Places for Business**
   - URL: https://www.bingplaces.com
   - Why: 10-15% of searches, easy setup
   - Can import from Google Business Profile

5. **Apple Maps (Apple Business Connect)**
   - URL: https://register.apple.com/placesonmaps
   - Why: iPhone/Mac users (30% of Canadian market)

6. **Yellow Pages Canada (YP.ca)**
   - URL: https://www.yp.ca/business-owners
   - Why: Still used in Canada, good domain authority

### Week 3: Additional

7. Canada411
8. Yelp Canada
9. Brownbook Canada
10. Hotfrog Canada

**Full details in:** `docs/LOCAL_BUSINESS_LISTINGS.md`

---

## 7. Social Media Profiles

Set up your social media presence.

### A. Create/Update Profiles

**LinkedIn** (Business account already mentioned above)

**Twitter/X** (Optional)
1. Create account: @northstackca (if available)
2. Bio: "Enterprise DevOps & Automation for Canadian SMBs | 7+ years experience | Calgary, AB 🇨🇦"
3. Pin tweet: Link to your best blog post
4. Post schedule: 2-3x per week
   - Tech tips
   - Industry news
   - Blog post links

**Instagram** (Optional)
1. Create business account: @northstackca
2. Bio: "DevOps & IT Automation 🚀 | Based in Calgary 📍 | Helping Canadian businesses scale"
3. Content ideas:
   - Behind-the-scenes
   - Tech setup showcases
   - Quick tips (carousel posts)
   - Reels with tech tips

**GitHub**
1. Organization: github.com/northstack-solutions
2. Add your logo
3. Pin your best repositories
4. Contribute to open source
5. Share code snippets and templates

**YouTube** (Optional but powerful)
1. Create channel: "NorthStack Solutions"
2. Channel art: Your banner
3. Content ideas:
   - Tutorial videos
   - Case study walkthroughs
   - Tech explanations
   - Tool reviews

### B. Add Social Links to Website

Update `.env.local`:
```bash
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/company/northstack-solutions
NEXT_PUBLIC_GITHUB_URL=https://github.com/northstack-solutions
NEXT_PUBLIC_TWITTER_URL=https://twitter.com/northstackca
```

---

## 8. Email Marketing (Optional)

Set up an email newsletter to nurture leads.

### Mailchimp Setup (Recommended for beginners)

1. **Create account** at https://mailchimp.com (free up to 500 contacts)
2. **Create audience**: "NorthStack Newsletter"
3. **Create segments**:
   - Downloaded AWS checklist
   - Downloaded DevOps guide
   - Contact form submissions
   - Website visitors
4. **Create campaigns**:
   - Welcome email (automation)
   - Weekly newsletter (manual)
   - Blog post notifications (automation)
5. **Create signup form**:
   - Add to footer
   - Add to blog posts
   - Add to resources page

### Email Sequence Ideas

**Welcome Sequence (Automated):**
- Email 1: Welcome + deliver lead magnet
- Email 2 (3 days later): Case study or success story
- Email 3 (7 days later): Service overview
- Email 4 (14 days later): Book consultation CTA

**Weekly Newsletter:**
- Tech tip of the week
- Latest blog post
- Tool recommendation
- Question of the week

---

## 9. Monitoring & Error Tracking

### A. Google Search Console (Required for SEO) 🔥

**Steps:**

1. **Sign up** at https://search.google.com/search-console
2. **Add property**: https://northstack.ca
3. **Verify ownership** (choose one method):
   - **DNS verification** (recommended):
     - Add TXT record to your domain DNS
   - **HTML file upload**:
     - Upload file to `/public/google-verification.html`
   - **HTML tag** (easiest):
     - Copy verification code
     - Add to `.env.local`:
       ```bash
       NEXT_PUBLIC_GOOGLE_VERIFICATION=your_verification_code
       ```
     - Code is already integrated in layout.tsx
4. **Submit sitemap**:
   - URL: https://northstack.ca/sitemap.xml
   - Go to Sitemaps → Add new sitemap → Enter "sitemap.xml"

**What to monitor:**
- Search queries (what people search to find you)
- Page performance (which pages rank well)
- Coverage (indexing issues)
- Manual actions (penalties)

### B. Sentry (Error Tracking) - Optional

**Why:** Catch bugs before users report them

**Steps:**

1. **Sign up** at https://sentry.io (free tier available)
2. **Create project**: Next.js
3. **Copy DSN**: Settings → Client Keys (DSN)
4. **Add to `.env.local`**:
   ```bash
   NEXT_PUBLIC_SENTRY_DSN=https://your_key@sentry.io/your_project_id
   ```

**Note:** Sentry is already configured in the codebase (`lib/sentry.ts`), just needs DSN.

### C. Uptime Monitoring (Optional)

**UptimeRobot** (Free)
1. Sign up: https://uptimerobot.com
2. Add monitor: https://northstack.ca
3. Check interval: 5 minutes
4. Alert contacts: Your email

See full guide: `docs/MONITORING.md`

---

## 10. Testing & Launch Checklist

Before launching, test everything!

### Pre-Launch Testing

**✅ Contact Form**
- [ ] Submit test form
- [ ] Verify email received at NEXT_PUBLIC_SUPPORT_EMAIL
- [ ] Check spam folder
- [ ] Test all service types
- [ ] Test validation (required fields)

**✅ Analytics**
- [ ] Google Analytics: See realtime visitor (visit site in incognito)
- [ ] Microsoft Clarity: Session recording appears
- [ ] All page views tracked

**✅ Live Chat**
- [ ] Chat bubble appears on website
- [ ] Send test message
- [ ] Receive notification on Crisp dashboard/mobile app
- [ ] Reply works

**✅ Calendar Booking**
- [ ] Click booking button on /contact page
- [ ] Calendly popup appears
- [ ] Can select time slot
- [ ] Test booking (create test appointment)

**✅ Exit Intent Popup**
- [ ] Visit homepage
- [ ] Wait 5+ seconds
- [ ] Move mouse to top of browser (as if closing tab)
- [ ] Popup appears
- [ ] Submit email
- [ ] Download triggers

**✅ Lead Magnets**
- [ ] PDF files exist at correct paths
- [ ] Downloads work
- [ ] PDFs open correctly

**✅ Mobile Responsiveness**
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] All forms work
- [ ] Chat widget works
- [ ] Navigation works

**✅ Page Speed**
- [ ] Run Google PageSpeed Insights: https://pagespeed.web.dev
- [ ] Score > 90 on mobile and desktop
- [ ] Check Core Web Vitals

**✅ SEO**
- [ ] All pages have meta titles and descriptions
- [ ] Schema markup validates: https://search.google.com/test/rich-results
- [ ] Sitemap accessible: /sitemap.xml
- [ ] Robots.txt accessible: /robots.txt
- [ ] No broken links

**✅ Business Listings**
- [ ] Google Business Profile claimed and verified
- [ ] Facebook page live
- [ ] LinkedIn page live
- [ ] All info consistent (NAP = Name, Address, Phone)

### Launch Day

1. **Deploy to production**
2. **Verify all environment variables** are set in production
3. **Test contact form** on production URL
4. **Submit sitemap** to Google Search Console
5. **Monitor analytics** for first visits
6. **Post launch announcement** on social media
7. **Send email** to existing contacts (if you have any)

---

## 11. Ongoing Maintenance

### Daily (5 minutes)
- [ ] Check Crisp chat for new messages
- [ ] Check email for contact form submissions
- [ ] Check Calendly for new bookings

### Weekly (30 minutes)
- [ ] Review Google Analytics traffic
- [ ] Watch Clarity session recordings (identify issues)
- [ ] Respond to all reviews on Google/Facebook
- [ ] Post to social media (2-3 times)

### Monthly (2 hours)
- [ ] Review Search Console performance
- [ ] Check broken links
- [ ] Update blog (1-2 new posts)
- [ ] Send email newsletter
- [ ] Review and update pricing if needed
- [ ] Check uptime reports

### Quarterly (4 hours)
- [ ] Audit all business listings (verify info is current)
- [ ] Review and respond to all reviews
- [ ] Update website content (services, about, portfolio)
- [ ] Run full website audit (speed, SEO, accessibility)
- [ ] Backup website and database

---

## 12. Quick Reference: All Credentials Needed

Keep track of all your accounts and credentials:

| Service | URL | Username/Account | Status |
|---------|-----|------------------|--------|
| Resend | https://resend.com | | ☐ |
| Google Analytics | https://analytics.google.com | | ☐ |
| Microsoft Clarity | https://clarity.microsoft.com | | ☐ |
| Crisp Chat | https://crisp.chat | | ☐ |
| Calendly | https://calendly.com | | ☐ |
| Google Business | https://business.google.com | | ☐ |
| Facebook | https://facebook.com/business | | ☐ |
| LinkedIn | https://linkedin.com/company | | ☐ |
| Mailchimp | https://mailchimp.com | | ☐ |
| Google Search Console | https://search.google.com/search-console | | ☐ |
| Domain Registrar | | | ☐ |
| Hosting Provider | | | ☐ |

---

## 13. Getting Help

If you get stuck:

1. **Check documentation**:
   - This guide (SETUP_GUIDE.md)
   - Local SEO guide (docs/LOCAL_BUSINESS_LISTINGS.md)
   - Monitoring guide (docs/MONITORING.md)
   - Lighthouse audit guide (docs/LIGHTHOUSE_AUDIT.md)

2. **Check `.env.example`** for all environment variable examples

3. **Common issues**:
   - Contact form not working → Check RESEND_API_KEY
   - Chat not showing → Check NEXT_PUBLIC_CRISP_WEBSITE_ID
   - Analytics not tracking → Check NEXT_PUBLIC_GA_ID
   - Calendly not opening → Check NEXT_PUBLIC_CALENDLY_URL

4. **Test in development first**:
   ```bash
   npm run dev
   ```
   Then test in production after confirming it works locally.

---

## 14. Success Metrics

After 30 days, you should see:

**Website Traffic:**
- 100-500 monthly visitors (depends on your marketing)
- 2-3 minute average session duration
- < 60% bounce rate

**Conversions:**
- 5-20 contact form submissions
- 3-10 calendar bookings
- 10-30 email subscribers (lead magnets)
- 5-15 chat conversations

**Local SEO:**
- Appearing in Google Maps for "DevOps Calgary"
- Appearing in "near me" searches
- 5-10 Google Business Profile views per day

**Engagement:**
- 3-5 Clarity session recordings per day to review
- 2-5 blog post views per visitor
- 50-100 email newsletter opens (if sending)

---

## 🎉 You're All Set!

Once you complete all items in this guide, your website will be fully optimized for:
- ✅ Lead generation
- ✅ Customer support
- ✅ Easy booking
- ✅ Local SEO
- ✅ Conversion optimization
- ✅ Performance tracking

**Estimated time to complete full setup:** 8-12 hours spread over 2-3 weeks

**Priority order:**
1. Week 1: Essential setup (Resend, Google Business, Analytics, Crisp)
2. Week 2: Lead magnets, Calendly, Facebook/LinkedIn
3. Week 3: Additional business listings, email marketing
4. Week 4: Testing, optimization, launch

Good luck! 🚀
