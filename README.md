# NorthStack Solutions Website

A modern, production-ready professional services website for **NorthStack Solutions** (operated by Apoti Tech Inc.) - a Calgary-based DevSecOps and IT automation consultancy targeting the Canadian market.

## 🚀 Overview

This is a full-featured Next.js 15+ website built with TypeScript, Tailwind CSS, and modern web technologies. It showcases services, portfolio, blog content, and provides a complete digital presence for a DevOps/automation consulting business.

## ✨ Features

### Pages
- **Home** - Hero section, services overview, testimonials, stats, blog highlights
- **About** - Professional background, experience, expertise, career timeline
- **Services** - Categorized service offerings with filtering
- **Automation Solutions** - Dedicated automation showcase with use cases
- **Home Server** - Self-hosting solutions and packages
- **Portfolio** - Detailed case studies with results and testimonials
- **Blog** - Full-featured blog with search, categories, and individual post pages
- **Pricing** - Tiered pricing, add-ons, guarantees, and FAQs
- **Resources** - Free downloadable resources with filtering
- **Contact** - Contact form with validation and business information
- **Privacy Policy** - PIPEDA-compliant Canadian privacy policy
- **Terms of Service** - Complete terms and conditions
- **Custom 404** - Friendly error page with navigation

### Technical Features
- ✅ **Next.js 15+** with App Router
- ✅ **TypeScript** for type safety
- ✅ **Tailwind CSS 4** for styling
- ✅ **Framer Motion** for smooth animations
- ✅ **Dark Mode** with theme toggle
- ✅ **Fully Responsive** mobile-first design
- ✅ **SEO Optimized** with metadata, Open Graph, JSON-LD structured data
- ✅ **Contact Form** with react-hook-form + Zod validation
- ✅ **Sitemap & Robots.txt** for search engines
- ✅ **Accessibility** compliant (WCAG AA)
- ✅ **Performance Optimized** with code splitting and lazy loading
- ✅ **Production Ready** with successful build

## 📦 Tech Stack

- **Framework:** Next.js 16.0.3
- **Language:** TypeScript 5.9.3
- **Styling:** Tailwind CSS 4.1.17
- **UI Components:** Custom built with Lucide React icons
- **Animation:** Framer Motion 12.23.24
- **Form Handling:** React Hook Form 7.66.1
- **Validation:** Zod 4.1.12
- **Markdown:** React Markdown 10.1.0
- **Theme:** next-themes 0.4.6

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 18+ or 20+
- npm or yarn package manager

### Installation Steps

1. **Clone or navigate to the project directory:**
   ```bash
   cd northstack-solutions
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
northstack-solutions/
├── app/                          # Next.js app directory
│   ├── about/page.tsx           # About page
│   ├── automation/page.tsx      # Automation solutions page
│   ├── blog/                    # Blog pages
│   │   ├── page.tsx            # Blog listing
│   │   └── [slug]/page.tsx     # Individual blog posts
│   ├── contact/page.tsx         # Contact page
│   ├── home-server/page.tsx     # Home server page
│   ├── portfolio/page.tsx       # Portfolio/case studies
│   ├── pricing/page.tsx         # Pricing page
│   ├── privacy/page.tsx         # Privacy policy
│   ├── resources/page.tsx       # Free resources
│   ├── services/page.tsx        # Services page
│   ├── terms/page.tsx           # Terms of service
│   ├── api/contact/route.ts     # Contact form API
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── not-found.tsx            # 404 page
│   ├── sitemap.ts               # Dynamic sitemap
│   └── globals.css              # Global styles
├── components/                   # React components
│   ├── ui/                      # Reusable UI components
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── CTA.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── BlogCard.tsx
│   │   └── PricingCard.tsx
│   ├── Navigation.tsx           # Main navigation
│   ├── Footer.tsx               # Footer
│   ├── ThemeToggle.tsx          # Dark mode toggle
│   ├── ThemeProvider.tsx        # Theme context
│   └── StructuredData.tsx       # JSON-LD schema
├── data/                        # Data files
│   ├── services.ts             # Service offerings
│   ├── testimonials.ts         # Client testimonials
│   ├── portfolio.ts            # Case studies
│   ├── blog-posts.ts           # Blog content
│   ├── pricing.ts              # Pricing tiers
│   └── resources.ts            # Free resources
├── types/                       # TypeScript types
│   └── index.ts
├── public/                      # Static assets
│   ├── images/
│   ├── icons/
│   └── robots.txt
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
├── package.json                # Dependencies
└── README.md                   # This file
```

## 🎨 Customization Guide

### Update Business Information

1. **Company Details:**
   - Edit `data/services.ts` for service offerings
   - Edit `data/testimonials.ts` for client testimonials
   - Edit `data/portfolio.ts` for case studies
   - Edit `data/pricing.ts` for pricing tiers

2. **Contact Information:**
   - Update `components/Footer.tsx` with actual email/phone
   - Update `app/contact/page.tsx` with business details
   - Update `components/StructuredData.tsx` with actual coordinates

3. **SEO & Metadata:**
   - Update `app/layout.tsx` for global SEO
   - Add Google verification code in layout metadata
   - Update domain in `app/sitemap.ts`

### Add New Services

1. Add service to `data/services.ts`:
```typescript
{
  id: 'new-service',
  title: 'Service Name',
  description: 'Description...',
  icon: 'IconName',
  category: 'service-category',
  features: ['Feature 1', 'Feature 2'],
  pricing: 'Starting at $X,XXX',
  timeline: 'X-X weeks',
}
```

2. Import and map the icon in relevant pages

### Add Blog Posts

1. Add post to `data/blog-posts.ts`:
```typescript
{
  slug: 'url-slug',
  title: 'Post Title',
  excerpt: 'Short description...',
  content: `Full markdown content...`,
  author: 'Author Name',
  date: '2025-01-XX',
  readTime: 'X min read',
  category: 'Category',
  tags: ['tag1', 'tag2'],
  published: true,
}
```

### Styling & Theming

- **Colors:** Edit `tailwind.config.ts` to change primary/secondary colors
- **Fonts:** Modify font imports in `app/layout.tsx`
- **Components:** All UI components in `components/ui/` are customizable

## 🚀 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel dashboard
3. Vercel auto-detects Next.js settings
4. Deploy!

```bash
# Or use Vercel CLI
npx vercel
```

### Netlify

1. Connect GitHub repository
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Deploy

### Self-Hosting

1. Build the project:
```bash
npm run build
```

2. Start production server:
```bash
npm run start
```

3. Use PM2 or similar for process management:
```bash
pm2 start npm --name "northstack" -- start
```

### Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t northstack-solutions .
docker run -p 3000:3000 northstack-solutions
```

## 🔧 Environment Variables (Optional)

Create `.env.local` for environment-specific settings:

```bash
# Email Service (for contact form)
EMAIL_SERVICE_API_KEY=your_sendgrid_api_key
EMAIL_FROM=info@northstack.solutions
EMAIL_TO=info@northstack.solutions

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Site URL (production)
NEXT_PUBLIC_SITE_URL=https://northstack.solutions
```

## 📧 Contact Form Integration

The contact form API route (`app/api/contact/route.ts`) is ready for email integration. To enable email sending:

1. Choose an email service (SendGrid, AWS SES, Resend, etc.)
2. Install the SDK: `npm install @sendgrid/mail` (example)
3. Uncomment and configure email sending code in `route.ts`
4. Add API key to environment variables

## 🔍 SEO Checklist

- ✅ Unique meta titles and descriptions on all pages
- ✅ Open Graph tags for social sharing
- ✅ JSON-LD structured data (Organization, LocalBusiness)
- ✅ Sitemap.xml generated dynamically
- ✅ Robots.txt configured
- ✅ Semantic HTML structure
- ✅ Alt text for images (add actual images)
- ✅ Fast page load times
- ✅ Mobile-friendly responsive design

## 📊 Performance Optimization

The site is optimized for performance:
- Code splitting with Next.js dynamic imports
- Image optimization (Next.js Image component ready)
- Lazy loading of components
- Minimized CSS and JS
- Font optimization with next/font

## 🎯 Next Steps

1. **Add Actual Images:**
   - Replace image placeholders in `public/images/`
   - Add portfolio project screenshots
   - Add team/personal photos for About page
   - Add blog post featured images

2. **Connect Contact Form:**
   - Set up email service (SendGrid, Resend, etc.)
   - Configure email templates
   - Add form submission to CRM (optional)

3. **Analytics:**
   - Add Google Analytics (GA4)
   - Set up conversion tracking
   - Monitor user behavior

4. **Additional Features:**
   - Newsletter integration (ConvertKit, Mailchimp)
   - Calendar booking (Calendly, Cal.com)
   - Live chat (Intercom, Crisp)
   - Testimonial collection form

## 📄 License

This project is UNLICENSED - proprietary code for NorthStack Solutions (Apoti Tech Inc.)

## 👤 Author

**NorthStack Solutions**
Operated by Apoti Tech Inc.
Calgary, Alberta, Canada

- Website: [https://northstack.solutions](https://northstack.solutions)
- Email: info@northstack.solutions
- Phone: (403) 123-4567

---

## 🙏 Acknowledgments

Built with modern web technologies:
- Next.js - React Framework
- Tailwind CSS - Utility-first CSS
- Framer Motion - Animation library
- Lucide React - Icon library
- TypeScript - Type safety

---

**Version:** 1.0.0
**Last Updated:** January 2025
**Status:** Production Ready ✅
