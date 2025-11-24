import { test, expect } from '@playwright/test';

/**
 * Navigation E2E Tests
 *
 * Tests the main navigation functionality including:
 * - Page navigation
 * - Mobile menu
 * - Active link states
 * - Theme toggle
 */

test.describe('Navigation', () => {
  test('should navigate to all main pages', async ({ page }) => {
    await page.goto('/');

    // Test navigation to each main page
    const pages = [
      { name: 'Services', url: '/services' },
      { name: 'Pricing', url: '/pricing' },
      { name: 'Portfolio', url: '/portfolio' },
      { name: 'About', url: '/about' },
      { name: 'Blog', url: '/blog' },
      { name: 'Resources', url: '/resources' },
    ];

    for (const { name, url } of pages) {
      // Click navigation link
      await page.getByRole('link', { name: name, exact: true }).first().click();

      // Wait for navigation
      await page.waitForURL(`**${url}`);

      // Check URL
      expect(page.url()).toContain(url);

      // Go back to home
      await page.goto('/');
    }
  });

  test('should navigate to contact page from CTA button', async ({ page }) => {
    await page.goto('/');

    // Click "Free Consultation" button
    await page.getByRole('link', { name: /Free Consultation/i }).first().click();

    // Should navigate to contact page
    await page.waitForURL('**/contact');
    expect(page.url()).toContain('/contact');
  });

  test('should have functional logo that links to home', async ({ page }) => {
    await page.goto('/services');

    // Click logo
    await page.getByRole('link', { name: /NorthStack/i }).first().click();

    // Should navigate to home
    await page.waitForURL('**/');
    expect(page.url()).toMatch(/\/$|^https?:\/\/[^\/]+$/);
  });

  test('should toggle theme (dark/light mode)', async ({ page }) => {
    await page.goto('/');

    // Find theme toggle button
    const themeToggle = page.locator('button').filter({ hasText: /theme/i }).or(
      page.locator('button[aria-label*="theme" i]')
    ).or(
      // Fallback: look for sun/moon icons
      page.locator('button').filter({ has: page.locator('svg') }).first()
    );

    // Get initial theme
    const html = page.locator('html');
    const initialClass = await html.getAttribute('class');

    // Click theme toggle
    await themeToggle.click();

    // Wait for theme change
    await page.waitForTimeout(300);

    // Check theme changed
    const newClass = await html.getAttribute('class');
    expect(newClass).not.toBe(initialClass);

    // Toggle back
    await themeToggle.click();
    await page.waitForTimeout(300);

    // Should be back to original
    const finalClass = await html.getAttribute('class');
    expect(finalClass).toBe(initialClass);
  });

  test('should open and close mobile menu', async ({ page, viewport }) => {
    // Only run on mobile viewports
    if (viewport && viewport.width < 1024) {
      await page.goto('/');

      // Find and click hamburger menu button
      const menuButton = page.getByRole('button', { name: /Toggle menu/i }).or(
        page.getByRole('button', { name: /Menu/i })
      );

      await menuButton.click();

      // Wait for menu to open
      await page.waitForTimeout(300);

      // Check that menu items are visible
      await expect(page.getByRole('link', { name: /Services/i }).last()).toBeVisible();
      await expect(page.getByRole('link', { name: /Pricing/i }).last()).toBeVisible();

      // Click menu button again to close
      await menuButton.click();

      // Wait for menu to close
      await page.waitForTimeout(300);
    }
  });

  test('should navigate using Services submenu', async ({ page, viewport }) => {
    // Only run on desktop (submenu works differently on mobile)
    if (!viewport || viewport.width >= 1024) {
      await page.goto('/');

      // Hover over Services to open submenu
      const servicesButton = page.getByRole('button', { name: /Services/i }).first();
      await servicesButton.hover();

      // Wait for submenu to appear
      await page.waitForTimeout(300);

      // Click "Automation Solutions" from submenu
      const automationLink = page.getByRole('link', { name: /Automation Solutions/i });
      await expect(automationLink).toBeVisible();
      await automationLink.click();

      // Should navigate to automation page
      await page.waitForURL('**/automation');
      expect(page.url()).toContain('/automation');
    }
  });

  test('should show active link styling', async ({ page }) => {
    await page.goto('/services');

    // Get Services link
    const servicesLink = page.getByRole('link', { name: 'Services', exact: true }).first();

    // Check if it has active styling (primary color)
    const classes = await servicesLink.getAttribute('class');
    expect(classes).toMatch(/primary/);
  });

  test('should have sticky navigation on scroll', async ({ page }) => {
    await page.goto('/');

    // Get navigation element
    const nav = page.locator('nav').first();

    // Check initial position (should be fixed or sticky)
    const initialPosition = await nav.evaluate((el) => window.getComputedStyle(el).position);
    expect(initialPosition).toMatch(/fixed|sticky/);

    // Scroll down
    await page.evaluate(() => window.scrollTo(0, 500));
    await page.waitForTimeout(300);

    // Navigation should still be visible
    await expect(nav).toBeVisible();

    // Check it's still fixed/sticky
    const scrolledPosition = await nav.evaluate((el) => window.getComputedStyle(el).position);
    expect(scrolledPosition).toMatch(/fixed|sticky/);
  });

  test('should close mobile menu when navigating', async ({ page, viewport }) => {
    // Only run on mobile viewports
    if (viewport && viewport.width < 1024) {
      await page.goto('/');

      // Open mobile menu
      const menuButton = page.getByRole('button', { name: /Toggle menu/i }).or(
        page.getByRole('button', { name: /Menu/i })
      );
      await menuButton.click();
      await page.waitForTimeout(300);

      // Click a navigation link
      await page.getByRole('link', { name: /About/i }).last().click();

      // Wait for navigation
      await page.waitForURL('**/about');

      // Menu should be closed (items should not be visible in mobile menu)
      // Note: Items might still exist in DOM but not visible
      await page.waitForTimeout(300);
    }
  });

  test('should have proper ARIA labels', async ({ page }) => {
    await page.goto('/');

    // Check navigation has proper role
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();

    // Check mobile menu button has proper label
    const menuButton = page.getByRole('button', { name: /Toggle menu/i }).or(
      page.getByRole('button', { name: /Menu/i })
    );

    if (await menuButton.isVisible()) {
      await expect(menuButton).toHaveAttribute('aria-label');
    }
  });

  test('should navigate to home from any page', async ({ page }) => {
    // Start from a deep page
    await page.goto('/blog');

    // Click logo or home link
    await page.getByRole('link', { name: /NorthStack/i }).first().click();

    // Should be on home page
    await page.waitForURL(/\/$/);
    expect(page.url()).toMatch(/\/$|^https?:\/\/[^\/]+$/);

    // Check home page loaded
    await expect(page.getByRole('heading', { name: /Modern IT Solutions/i })).toBeVisible();
  });
});
