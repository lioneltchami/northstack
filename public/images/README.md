# Image Assets

This directory contains all static images for the NorthStack Solutions website.

## Current Status

✅ **No broken images** - All components have fallbacks for missing images:
- Testimonials show gradient circles with initials
- Blog cards only show image section when images exist
- Portfolio items render without images

## Directory Structure

```
public/images/
├── placeholder.svg          # Generic SVG placeholder
├── blog/                    # Blog post featured images
├── logos/                   # Client/partner logos
├── portfolio/               # Portfolio project screenshots
├── services/                # Service category images
├── team/                    # Team member photos
├── testimonials/            # Client headshots
└── placeholders/            # Additional placeholder images
```

## Adding Real Images

### Blog Images (Recommended: 1200x630px WebP)
```
/public/images/blog/email-automation.webp
/public/images/blog/home-cloud.webp
/public/images/blog/aws-cost-optimization.webp
```

Add to blog post data:
```typescript
image: '/images/blog/email-automation.webp'
```

### Testimonial Images (Recommended: 200x200px WebP/JPG)
```
/public/images/testimonials/sarah-chen.webp
/public/images/testimonials/marcus-thompson.webp
```

Add to testimonial data:
```typescript
image: '/images/testimonials/sarah-chen.webp'
```

### Portfolio Images (Recommended: 1200x800px WebP)
```
/public/images/portfolio/ecommerce-automation.webp
/public/images/portfolio/cloud-migration.webp
```

## Using the Generic Placeholder

For testing or temporary use:
```typescript
image: '/images/placeholder.svg'
```

## Image Optimization Guidelines

1. **Format**: Use WebP for photos, SVG for logos/icons
2. **Size**: Compress images (use tools like TinyPNG, Squoosh)
3. **Naming**: Use kebab-case (e.g., `aws-cost-optimization.webp`)
4. **Alt text**: Always provide descriptive alt text
5. **Responsive**: Provide multiple sizes for different viewports

## Image Requirements by Type

| Type | Size | Format | Max File Size |
|------|------|--------|---------------|
| Blog featured | 1200x630px | WebP | 150KB |
| Portfolio | 1200x800px | WebP | 200KB |
| Testimonials | 200x200px | WebP/JPG | 50KB |
| Logos | Variable | SVG/PNG | 20KB |
| Team photos | 400x400px | WebP/JPG | 80KB |

## Next.js Image Component

When adding images to components, always use Next.js Image component:

```tsx
import Image from 'next/image';

<Image
  src="/images/blog/my-post.webp"
  alt="Descriptive alt text"
  width={1200}
  height={630}
  quality={85}
  priority={false} // true for above-fold images
/>
```

## Current Placeholder Status

✅ All image directories have `.gitkeep` files
✅ SVG placeholder created for testing
✅ Components handle missing images gracefully
❌ No real images uploaded yet (add when ready)

---

**Note**: The website functions perfectly without images. Add real images when you have professional photos and graphics ready.
