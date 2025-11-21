# Quick Start Guide

Get your NorthStack Solutions website up and running in 5 minutes!

## 🚀 Instant Start

The development server is **already running** at:
👉 **http://localhost:3000**

Open your browser and visit the URL above to see your website!

---

## 📱 Browse Your Website

Visit these pages to explore the complete site:

### Main Pages
- **Home:** http://localhost:3000
- **About:** http://localhost:3000/about
- **Services:** http://localhost:3000/services
- **Automation:** http://localhost:3000/automation
- **Home Server:** http://localhost:3000/home-server
- **Portfolio:** http://localhost:3000/portfolio
- **Blog:** http://localhost:3000/blog
- **Pricing:** http://localhost:3000/pricing
- **Resources:** http://localhost:3000/resources
- **Contact:** http://localhost:3000/contact

### Sample Blog Posts
- http://localhost:3000/blog/email-automation-canadian-small-business-2025
- http://localhost:3000/blog/building-home-cloud-nextcloud-proxmox-guide
- http://localhost:3000/blog/aws-cost-optimization-strategies-2025

### Other Pages
- **Privacy Policy:** http://localhost:3000/privacy
- **Terms of Service:** http://localhost:3000/terms
- **404 Page:** http://localhost:3000/nonexistent

---

## 🎨 Test Features

### Dark Mode
- Click the moon/sun icon in the top navigation
- Watch the entire site switch between light and dark themes

### Navigation
- Click through the mobile menu (resize browser to mobile width)
- Hover over the "Services" dropdown in desktop view
- Test all navigation links

### Forms
- Fill out the contact form at http://localhost:3000/contact
- Test form validation (try submitting empty fields)
- Check success/error messages

### Responsive Design
- Resize your browser window
- Test on mobile device (or use browser dev tools)
- Check tablet and desktop breakpoints

---

## ⚙️ Basic Commands

### Stop the Dev Server
Press `Ctrl+C` in the terminal where the server is running

### Restart the Dev Server
```bash
cd northstack-solutions
npm run dev
```

### Build for Production
```bash
npm run build
```

### Run Production Build
```bash
npm run start
```

---

## ✏️ Quick Customization

### Change Business Name
1. Edit `components/Navigation.tsx` (logo)
2. Edit `components/Footer.tsx` (footer branding)
3. Edit `app/layout.tsx` (SEO metadata)

### Update Contact Info
1. Edit `components/Footer.tsx` (email, phone, address)
2. Edit `app/contact/page.tsx` (contact page details)

### Add a New Service
1. Open `data/services.ts`
2. Add new service object to the `services` array
3. Save - changes appear immediately!

### Write a New Blog Post
1. Open `data/blog-posts.ts`
2. Add new post object to the `blogPosts` array
3. Set `published: true`
4. Save and visit `/blog` to see it!

---

## 📁 Where to Find Things

```
northstack-solutions/
├── app/              ← All pages are here
├── components/       ← Reusable components
├── data/            ← Edit content here (easiest!)
├── types/           ← TypeScript definitions
└── public/          ← Add images here
```

**Pro Tip:** The `data/` folder is the easiest place to make content changes!

---

## 🎯 Next Actions

### Before Launching
1. [ ] Add your real images to `public/images/`
2. [ ] Update email/phone in `components/Footer.tsx`
3. [ ] Configure contact form email service
4. [ ] Update domain in `app/sitemap.ts`
5. [ ] Add Google Analytics ID

### To Deploy
1. Read `DEPLOYMENT.md` for full instructions
2. **Easiest:** Deploy to Vercel (one-click)
3. Or follow self-hosting guide

---

## 💡 Helpful Tips

### Making Changes
- Edit any file and **save**
- The browser **auto-refreshes** with your changes
- No need to restart the server!

### Finding Things
- **Can't find a page?** Check the `app/` folder
- **Want to edit services?** Check `data/services.ts`
- **Need to change a component?** Check `components/` folder

### Fixing Errors
If you see errors in the terminal:
1. Check the error message carefully
2. Make sure you saved all files
3. Try restarting the dev server
4. Check `README.md` troubleshooting section

---

## 📚 Documentation

- **README.md** - Complete setup guide
- **DEPLOYMENT.md** - How to deploy to production
- **PROJECT_SUMMARY.md** - Full project overview

---

## 🆘 Need Help?

### Common Issues

**Port 3000 already in use?**
```bash
# Kill the process using port 3000
npx kill-port 3000
# Then restart
npm run dev
```

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart dev server

**Build errors?**
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

---

## ✅ Verification Checklist

Test these before deploying:

- [ ] Home page loads correctly
- [ ] Dark mode toggle works
- [ ] Mobile menu works
- [ ] All navigation links work
- [ ] Contact form validates correctly
- [ ] Blog posts load
- [ ] Responsive on mobile
- [ ] No console errors (press F12)

---

## 🎉 You're All Set!

Your production-ready website is running and ready to customize.

**Current Status:**
- ✅ Dev Server Running: http://localhost:3000
- ✅ Build Status: Success
- ✅ All Pages: Working
- ✅ Ready to Deploy: Yes

**Enjoy your new website!** 🚀

---

*Questions? Check README.md or DEPLOYMENT.md for detailed guides.*
