# Contrast Fix Implementation Plan

**Date:** 2025-11-24
**Related:** UI_UX_CONTRAST_AUDIT.md
**Goal:** Systematically fix all contrast and accessibility issues identified in audit

---

## Implementation Strategy

### Phase 1: Global Color Constant Updates
Create a centralized color mapping to ensure consistency.

### Phase 2: Component-by-Component Fixes
Update each component systematically, testing as we go.

### Phase 3: Page-Level Updates
Update all page files.

### Phase 4: Testing & Verification
Run accessibility tests and visual regression checks.

---

## Phase 1: Create Color Usage Constants

**File:** `lib/ui-constants.ts` (NEW FILE)

```typescript
/**
 * Accessible Color Utilities
 * WCAG AA compliant color combinations for text and UI elements
 */

export const TEXT_COLORS = {
  // Body text - optimized for readability
  body: 'text-gray-700 dark:text-gray-200',

  // Headings - maximum contrast
  heading: 'text-gray-900 dark:text-white',

  // Muted text (but still accessible)
  muted: 'text-gray-600 dark:text-gray-300',

  // Links - WCAG AA compliant
  link: 'text-primary-700 dark:text-primary-300 hover:text-primary-800 dark:hover:text-primary-200',

  // Error states
  error: 'text-red-700 dark:text-red-300',

  // Success states
  success: 'text-green-700 dark:text-green-300',
} as const;

export const BUTTON_STYLES = {
  primary: 'bg-primary-700 hover:bg-primary-800 text-white font-semibold',
  secondary: 'border-2 border-primary-700 text-primary-700 hover:bg-primary-50 dark:text-primary-300 dark:border-primary-300 dark:hover:bg-primary-900/20 font-semibold',
  ghost: 'text-primary-700 hover:bg-primary-50 dark:text-primary-300 dark:hover:bg-primary-900/20',
} as const;

export const ICON_STYLES = {
  // Icon containers in cards
  card: 'bg-primary-200 text-primary-800 dark:bg-primary-800 dark:text-primary-200',

  // Icon-only buttons
  button: 'text-gray-700 hover:text-primary-700 dark:text-gray-200 dark:hover:text-primary-300',
} as const;

export const INPUT_STYLES = {
  base: 'border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-700 dark:focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
} as const;

export const GRADIENT_BACKGROUNDS = {
  // Updated gradients with better contrast
  primary: 'bg-gradient-to-r from-primary-700 to-secondary-700',
  primaryAlt: 'bg-gradient-to-r from-primary-600 to-primary-800',
} as const;
```

---

## Phase 2: Component Fixes

### Fix #1: ServiceCard.tsx

**File:** `components/ui/ServiceCard.tsx`

**Changes:**
```diff
Line 43 (Icon background):
- className="bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400"
+ className="bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200"

Line 53 (Description text):
- <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
+ <p className="text-gray-700 dark:text-gray-200 mb-4 leading-relaxed">

Line 62 (Feature list text):
- className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300"
+ className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-200"

Line 65 (Checkmark icon):
- className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5"
+ className="w-5 h-5 text-primary-700 dark:text-primary-300 flex-shrink-0 mt-0.5"

Line 83 (Link text):
- <span className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all group">
+ <span className="inline-flex items-center text-primary-700 dark:text-primary-300 font-semibold hover:gap-2 transition-all group">
```

---

### Fix #2: BlogCard.tsx

**File:** `components/ui/BlogCard.tsx`

**Changes:**
```diff
Line 56 (Meta information):
- <div className="flex items-center space-x-4 text-sm text-gray-700 dark:text-gray-300 mb-3">
+ <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-300 mb-3">

Line 71 (Excerpt text):
- <p className="text-gray-700 dark:text-gray-300 mb-4 line-clamp-3 flex-grow">
+ <p className="text-gray-700 dark:text-gray-200 mb-4 line-clamp-3 flex-grow">

Line 77 (Link):
- className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:gap-2 transition-all group mt-auto"
+ className="inline-flex items-center text-primary-700 dark:text-primary-300 font-semibold hover:gap-2 transition-all group mt-auto"
```

---

### Fix #3: TestimonialCard.tsx

**File:** `components/ui/TestimonialCard.tsx`

**Changes:**
```diff
Line 50 (Content text):
- <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed flex-grow italic">
+ <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed flex-grow italic">

Line 76 (Role text):
- <p className="text-sm text-gray-700 dark:text-gray-300">
+ <p className="text-sm text-gray-600 dark:text-gray-300">
```

---

### Fix #4: CTA.tsx

**File:** `components/ui/CTA.tsx`

**Changes:**
```diff
Line 32 (Gradient background):
- ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white'
+ ? 'bg-gradient-to-r from-primary-700 to-secondary-700 text-white'

Line 50 (Description text - remove opacity):
- ? 'text-white/90'
+ ? 'text-white'

Line 51 (Non-gradient description):
- : 'text-gray-700 dark:text-gray-300'
+ : 'text-gray-700 dark:text-gray-200'

Line 62 (Primary button in gradient):
- className="... bg-primary-800 text-white hover:bg-primary-900 ..."
+ className="... bg-primary-900 text-white hover:bg-primary-950 ..."

Line 75 (Secondary button in gradient):
- className="... bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm"
+ className="... bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 backdrop-blur-sm"
```

---

### Fix #5: Hero.tsx

**File:** `components/ui/Hero.tsx`

**Changes needed (read file first to see exact lines):**
- Change all `text-gray-700 dark:text-gray-300` to `text-gray-700 dark:text-gray-200`
- Remove any `text-white/90` usage - change to `text-white`
- Update gradient background from `from-primary-600 to-secondary-600` to `from-primary-700 to-secondary-700`
- Update icon colors from `text-primary-600 dark:text-primary-400` to `text-primary-700 dark:text-primary-300`

---

## Phase 3: Page File Fixes

### Fix #6: app/page.tsx (Homepage)

**Changes:**
```diff
Line 82, 123, 177, 286 (Section descriptions):
- <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
+ <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">

Line 108 (View All Services button):
- className="inline-flex items-center px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border border-primary-800"
+ className="inline-flex items-center px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"

Line 157, 261 (Icon backgrounds):
- <div className="inline-flex p-4 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 mb-4">
+ <div className="inline-flex p-4 rounded-full bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200 mb-4">

Line 163, 216 (Card descriptions):
- <p className="text-gray-700 dark:text-gray-300">{item.description}</p>
+ <p className="text-gray-700 dark:text-gray-200">{item.description}</p>

Line 210 (Step numbers - add aria-hidden):
- <div className="text-6xl font-bold font-heading text-primary-100 dark:text-primary-900/30 mb-4">
+ <div className="text-6xl font-bold font-heading text-primary-100 dark:text-primary-900/30 mb-4" aria-hidden="true">

Line 236 (Testimonials section description):
- <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
+ <p className="text-lg text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">

Line 258 (Stats gradient):
- <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
+ <section className="section-padding bg-gradient-to-r from-primary-700 to-secondary-700 text-white">

Line 309 (Read More button):
- className="inline-flex items-center px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg transition-all duration-300"
+ className="inline-flex items-center px-8 py-4 border-2 border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white dark:text-primary-300 dark:border-primary-300 dark:hover:bg-primary-700 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
```

---

### Fix #7: app/services/page.tsx

**Changes:**
```diff
Line 61, 101 (Filter button unselected):
- : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
+ : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'

Line 90, 105, 143, 158, 196 (Descriptions):
- text-gray-700 dark:text-gray-300
+ text-gray-700 dark:text-gray-200

Line 137 (Stat cards):
- <div className="text-4xl font-bold font-heading text-primary-600 dark:text-primary-400 mb-2">
+ <div className="text-4xl font-bold font-heading text-primary-700 dark:text-primary-300 mb-2">

Line 190 (Step numbers - add aria-hidden):
- <div className="text-6xl font-bold font-heading text-primary-100 dark:text-primary-900/30 mb-4">
+ <div className="text-6xl font-bold font-heading text-primary-100 dark:text-primary-900/30 mb-4" aria-hidden="true">

Line 268, 288 (Highlighted package):
- bg-primary-600 text-white
+ bg-primary-700 text-white

Line 289 (Remove opacity):
- pkg.highlighted ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'
+ pkg.highlighted ? 'text-white' : 'text-gray-700 dark:text-gray-200'

Line 318 (Button):
- : 'bg-primary-600 text-white hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600'
+ : 'bg-primary-700 text-white hover:bg-primary-800 dark:bg-primary-700 dark:hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2'
```

---

### Fix #8: app/about/page.tsx

**Changes:**
```diff
Line 41, 46, 52, 57 (Story paragraphs):
- <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
+ <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">

Line 97, 157, 261 (Icon backgrounds):
- bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400
+ bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200

Line 105, 163, 267, 293, 312 (Descriptions):
- text-gray-600 dark:text-gray-300
+ text-gray-600 dark:text-gray-200

Line 204 (Timeline dot):
- <div className="absolute -left-10 mt-1.5 w-4 h-4 bg-primary-600 dark:bg-primary-400 rounded-full border-4 border-gray-50 dark:border-gray-800"></div>
+ <div className="absolute -left-10 mt-1.5 w-4 h-4 bg-primary-700 dark:bg-primary-300 rounded-full border-4 border-gray-50 dark:border-gray-800"></div>

Line 206 (Year label):
- <div className="text-sm font-semibold text-primary-600 dark:text-primary-400 mb-1">
+ <div className="text-sm font-semibold text-primary-700 dark:text-primary-300 mb-1">

Line 212 (Timeline description):
- <p className="text-gray-600 dark:text-gray-300">{milestone.description}</p>
+ <p className="text-gray-600 dark:text-gray-200">{milestone.description}</p>

Line 275 (Calgary section gradient):
- <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
+ <section className="section-padding bg-gradient-to-r from-primary-700 to-secondary-700 text-white">

Line 344 (Primary CTA button):
- className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
+ className="px-8 py-4 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"

Line 350 (Secondary button):
- className="px-8 py-4 border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-primary-900/20 font-semibold rounded-lg transition-all duration-300"
+ className="px-8 py-4 border-2 border-primary-700 text-primary-700 hover:bg-primary-50 dark:text-primary-300 dark:border-primary-300 dark:hover:bg-primary-900/20 font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
```

---

### Fix #9: app/blog/page.tsx

**Changes:**
```diff
Line 52, 126 (Text):
- text-gray-700 dark:text-gray-300
+ text-gray-700 dark:text-gray-200

Line 59 (Category badge):
- <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
+ <span className="px-3 py-1 bg-primary-200 dark:bg-primary-800 text-primary-800 dark:text-primary-200 rounded-full">

Line 65 (Read button):
- className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300"
+ className="inline-flex items-center px-6 py-3 bg-primary-700 hover:bg-primary-800 text-white font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"

Line 86 (Search input):
- className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:border-primary-600 dark:focus:border-primary-400 focus:outline-none"
+ className="w-full pl-12 pr-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:border-primary-700 dark:focus:border-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"

Line 99, 101 (Filter buttons):
- ? 'bg-primary-600 text-white shadow-lg scale-105'
+ ? 'bg-primary-700 text-white shadow-lg scale-105'
- : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
+ : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700'

Line 135 (Newsletter section gradient):
- <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
+ <section className="section-padding bg-gradient-to-r from-primary-700 to-secondary-700 text-white">

Line 141 (Newsletter description - remove opacity):
- className="text-xl mb-8 text-white/90"
+ className="text-xl mb-8 text-white"

Line 149 (Email input):
- className="flex-grow px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
+ className="flex-grow px-6 py-4 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"

Line 154 (Subscribe button):
- className="px-8 py-4 bg-white text-primary-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 whitespace-nowrap"
+ className="px-8 py-4 bg-white text-primary-700 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-300 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"

Line 160 (Fine print):
- <p className="text-sm text-white/70 mt-4">
+ <p className="text-sm text-white opacity-90 mt-4">

Line 190 (Popular topic buttons):
- className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 rounded-full transition-all duration-300"
+ className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900/30 text-gray-700 dark:text-gray-200 hover:text-primary-700 dark:hover:text-primary-300 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
```

---

### Fix #10: app/contact/page.tsx

**Add placeholder styling to form inputs (need to read exact file structure first)**

---

## Phase 4: Navigation & Footer Fixes

### Fix #11: Navigation.tsx

**Need to read file to identify specific changes, but generally:**
- Change link colors from `text-primary-600 dark:text-primary-400` to `text-primary-700 dark:text-primary-300`
- Add focus states to all navigation links
- Update mobile menu button ARIA labels

### Fix #12: Footer.tsx

**Need to read file, but generally:**
- Update all link colors to higher contrast
- Update social media icon colors
- Change descriptions from `text-gray-300` to `text-gray-200` in dark mode

---

## Phase 5: Testing Checklist

### Automated Testing
- [ ] Run Playwright E2E tests
- [ ] Add axe accessibility tests to Playwright
- [ ] Run Lighthouse accessibility audit (target: 100 score)
- [ ] Test with color blindness simulators

### Manual Testing
- [ ] Test keyboard navigation (Tab through all interactive elements)
- [ ] Test with screen reader (NVDA/JAWS/VoiceOver)
- [ ] Test dark mode contrast
- [ ] Test light mode contrast
- [ ] Test at 200% browser zoom
- [ ] Test on mobile devices
- [ ] Test in bright sunlight (if possible)

### Visual Regression Testing
- [ ] Screenshot homepage before/after
- [ ] Screenshot services page before/after
- [ ] Screenshot about page before/after
- [ ] Screenshot blog page before/after
- [ ] Screenshot contact page before/after
- [ ] Compare component rendering

---

## Success Criteria

**All of the following must be true:**
- ✅ All text has minimum 4.5:1 contrast ratio (WCAG AA)
- ✅ All UI components have minimum 3:1 contrast ratio
- ✅ All interactive elements have visible focus states
- ✅ All form inputs have proper placeholder contrast
- ✅ No opacity used on text (except intentional decorative elements)
- ✅ Lighthouse accessibility score: 100
- ✅ axe DevTools: 0 violations
- ✅ Manual screen reader test: all content accessible
- ✅ Keyboard navigation: all elements reachable

---

## Estimated Timeline

- **Phase 1 (Constants):** 30 minutes
- **Phase 2 (Components):** 1 hour
- **Phase 3 (Pages):** 2 hours
- **Phase 4 (Navigation/Footer):** 30 minutes
- **Phase 5 (Testing):** 2 hours

**Total:** ~6 hours (including testing and bug fixes)

---

## Rollback Plan

If issues arise:
1. Git revert to pre-fix commit
2. Create feature branch for fixes
3. Deploy fixes incrementally
4. A/B test if needed

---

**READY TO IMPLEMENT**
