import { test, expect } from '@playwright/test';

/**
 * Contact Form E2E Tests
 *
 * Tests the complete contact form functionality including:
 * - Form validation
 * - Successful submission
 * - Rate limiting
 * - Error handling
 * - Mobile responsiveness
 */

test.describe('Contact Form', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to contact page before each test
    await page.goto('/contact');
  });

  test('should display contact page with all elements', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Contact/i);

    // Check hero section
    await expect(page.getByRole('heading', { name: /Let's Build Something Great Together/i })).toBeVisible();

    // Check contact information section
    await expect(page.getByText(/Get In Touch/i)).toBeVisible();
    await expect(page.getByText(/Email/i)).toBeVisible();
    await expect(page.getByText(/Phone/i)).toBeVisible();
    await expect(page.getByText(/Location/i)).toBeVisible();
    await expect(page.getByText(/Business Hours/i)).toBeVisible();

    // Check form is visible
    await expect(page.getByRole('heading', { name: /Send Us a Message/i })).toBeVisible();
    await expect(page.getByLabel(/Full Name/i)).toBeVisible();
    await expect(page.getByLabel(/Email Address/i)).toBeVisible();
    await expect(page.getByRole('button', { name: /Send Message/i })).toBeVisible();
  });

  test('should show validation errors for empty form', async ({ page }) => {
    // Click submit without filling anything
    await page.getByRole('button', { name: /Send Message/i }).click();

    // Wait for validation errors to appear
    await page.waitForTimeout(500);

    // Check for validation error messages
    await expect(page.getByText(/Name must be at least 2 characters/i)).toBeVisible();
    await expect(page.getByText(/Invalid email address/i)).toBeVisible();
    await expect(page.getByText(/Please select a service/i)).toBeVisible();
    await expect(page.getByText(/Please select a budget range/i)).toBeVisible();
    await expect(page.getByText(/Please select a timeline/i)).toBeVisible();
    await expect(page.getByText(/Message must be at least 10 characters/i)).toBeVisible();
  });

  test('should validate email format', async ({ page }) => {
    // Enter invalid email
    await page.getByLabel(/Email Address/i).fill('invalid-email');
    await page.getByLabel(/Email Address/i).blur();

    // Wait for validation
    await page.waitForTimeout(500);

    // Click submit to trigger validation
    await page.getByRole('button', { name: /Send Message/i }).click();

    // Check for email validation error
    await expect(page.getByText(/Invalid email address/i)).toBeVisible();
  });

  test('should validate name length', async ({ page }) => {
    // Enter name too short
    await page.getByLabel(/Full Name/i).fill('A');
    await page.getByRole('button', { name: /Send Message/i }).click();

    await page.waitForTimeout(500);

    // Check for name validation error
    await expect(page.getByText(/Name must be at least 2 characters/i)).toBeVisible();
  });

  test('should validate message length', async ({ page }) => {
    // Enter message too short
    await page.getByLabel(/Tell us about your project/i).fill('Short');
    await page.getByRole('button', { name: /Send Message/i }).click();

    await page.waitForTimeout(500);

    // Check for message validation error
    await expect(page.getByText(/Message must be at least 10 characters/i)).toBeVisible();
  });

  test('should successfully submit valid form', async ({ page }) => {
    // Fill in all required fields
    await page.getByLabel(/Full Name/i).fill('Test User');
    await page.getByLabel(/Email Address/i).fill('test@example.com');
    await page.getByLabel(/Phone Number/i).fill('(403) 555-1234');

    // Select service
    await page.getByLabel(/What service are you interested in/i).selectOption('web-development');

    // Select budget
    await page.getByLabel(/Budget Range/i).selectOption('2500-5000');

    // Select timeline
    await page.getByLabel(/Timeline/i).selectOption('flexible');

    // Select preferred contact method (email is default, but let's be explicit)
    await page.getByLabel(/Email/i).first().check();

    // Fill in message
    await page.getByLabel(/Tell us about your project/i).fill(
      'This is a test message for E2E testing. We need to build a new website with modern technologies.'
    );

    // Submit form
    await page.getByRole('button', { name: /Send Message/i }).click();

    // Wait for success message
    await expect(
      page.getByText(/Thank you! Your message has been sent successfully/i)
    ).toBeVisible({ timeout: 10000 });

    // Check that form is cleared after successful submission
    await expect(page.getByLabel(/Full Name/i)).toHaveValue('');
    await expect(page.getByLabel(/Email Address/i)).toHaveValue('');
  });

  test('should handle API errors gracefully', async ({ page }) => {
    // Intercept API call and force error
    await page.route('/api/contact', (route) => {
      route.fulfill({
        status: 500,
        contentType: 'application/json',
        body: JSON.stringify({
          success: false,
          message: 'Internal server error',
        }),
      });
    });

    // Fill in valid form
    await page.getByLabel(/Full Name/i).fill('Test User');
    await page.getByLabel(/Email Address/i).fill('test@example.com');
    await page.getByLabel(/What service are you interested in/i).selectOption('automation');
    await page.getByLabel(/Budget Range/i).selectOption('2500-5000');
    await page.getByLabel(/Timeline/i).selectOption('soon');
    await page.getByLabel(/Tell us about your project/i).fill('Test message for error handling.');

    // Submit form
    await page.getByRole('button', { name: /Send Message/i }).click();

    // Wait for error message
    await expect(
      page.getByText(/Oops! Something went wrong/i)
    ).toBeVisible({ timeout: 10000 });
  });

  test('should test rate limiting after multiple submissions', async ({ page }) => {
    const fillAndSubmitForm = async (index: number) => {
      await page.getByLabel(/Full Name/i).fill(`Test User ${index}`);
      await page.getByLabel(/Email Address/i).fill(`test${index}@example.com`);
      await page.getByLabel(/What service are you interested in/i).selectOption('consulting');
      await page.getByLabel(/Budget Range/i).selectOption('under-2500');
      await page.getByLabel(/Timeline/i).selectOption('planning');
      await page.getByLabel(/Tell us about your project/i).fill(`Test message number ${index} for rate limit testing.`);
      await page.getByRole('button', { name: /Send Message/i }).click();
    };

    // Submit form 6 times (limit is 5 per hour)
    for (let i = 1; i <= 6; i++) {
      await fillAndSubmitForm(i);

      if (i <= 5) {
        // First 5 should succeed (wait for success message)
        await expect(
          page.getByText(/Thank you! Your message has been sent successfully/i)
        ).toBeVisible({ timeout: 10000 });

        // Wait for success message to disappear before next submission
        await page.waitForTimeout(2000);
      } else {
        // 6th submission should be rate limited
        await expect(
          page.getByText(/Too many requests/i)
        ).toBeVisible({ timeout: 10000 });
      }
    }
  });

  test('should be mobile responsive', async ({ page, viewport }) => {
    // This test runs on mobile viewports (defined in playwright.config.ts)
    if (viewport && viewport.width < 768) {
      // Check that form is still accessible on mobile
      await expect(page.getByLabel(/Full Name/i)).toBeVisible();
      await expect(page.getByLabel(/Email Address/i)).toBeVisible();
      await expect(page.getByRole('button', { name: /Send Message/i })).toBeVisible();

      // Check that contact info is visible
      await expect(page.getByText(/Email/i)).toBeVisible();

      // Test form submission on mobile
      await page.getByLabel(/Full Name/i).fill('Mobile User');
      await page.getByLabel(/Email Address/i).fill('mobile@example.com');
      await page.getByLabel(/What service are you interested in/i).selectOption('home-server');
      await page.getByLabel(/Budget Range/i).selectOption('5000-10000');
      await page.getByLabel(/Timeline/i).selectOption('urgent');
      await page.getByLabel(/Tell us about your project/i).fill('Mobile test message.');

      await page.getByRole('button', { name: /Send Message/i }).click();

      // Should show success or error message
      const successMessage = page.getByText(/Thank you/i);
      const errorMessage = page.getByText(/Something went wrong/i);
      const rateLimitMessage = page.getByText(/Too many requests/i);

      await expect(
        successMessage.or(errorMessage).or(rateLimitMessage)
      ).toBeVisible({ timeout: 10000 });
    }
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    // Check form labels
    await expect(page.getByLabel(/Full Name/i)).toHaveAttribute('type', 'text');
    await expect(page.getByLabel(/Email Address/i)).toHaveAttribute('type', 'email');
    await expect(page.getByLabel(/Phone Number/i)).toHaveAttribute('type', 'tel');

    // Check required fields have proper attributes
    const nameInput = page.getByLabel(/Full Name/i);
    await expect(nameInput).toHaveAttribute('id');

    // Check submit button is properly labeled
    const submitButton = page.getByRole('button', { name: /Send Message/i });
    await expect(submitButton).toHaveAttribute('type', 'submit');
  });

  test('should show loading state during submission', async ({ page }) => {
    // Fill in form
    await page.getByLabel(/Full Name/i).fill('Loading Test User');
    await page.getByLabel(/Email Address/i).fill('loading@example.com');
    await page.getByLabel(/What service are you interested in/i).selectOption('security');
    await page.getByLabel(/Budget Range/i).selectOption('10000-plus');
    await page.getByLabel(/Timeline/i).selectOption('flexible');
    await page.getByLabel(/Tell us about your project/i).fill('Testing loading state indicator.');

    // Submit form
    await page.getByRole('button', { name: /Send Message/i }).click();

    // Check for loading indicator
    await expect(page.getByText(/Sending/i)).toBeVisible();

    // Check that button is disabled during submission
    const submitButton = page.getByRole('button', { name: /Sending/i });
    await expect(submitButton).toBeDisabled();
  });

  test('should link to privacy policy', async ({ page }) => {
    // Check privacy policy link exists
    const privacyLink = page.getByRole('link', { name: /Privacy Policy/i });
    await expect(privacyLink).toBeVisible();
    await expect(privacyLink).toHaveAttribute('href', '/privacy');
  });

  test('should have FAQ section', async ({ page }) => {
    // Scroll to FAQ section
    await page.getByText(/Before You Reach Out/i).scrollIntoViewIfNeeded();

    // Check FAQ questions are visible
    await expect(page.getByText(/What happens after I submit this form/i)).toBeVisible();
    await expect(page.getByText(/Do you charge for the initial consultation/i)).toBeVisible();
    await expect(page.getByText(/How long does a typical project take/i)).toBeVisible();
    await expect(page.getByText(/Do you work with clients outside of Calgary/i)).toBeVisible();
  });

  test('should have Calendly booking section', async ({ page }) => {
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // Check Calendly section
    await expect(page.getByText(/Prefer to Book Directly/i)).toBeVisible();
    await expect(page.getByRole('link', { name: /Book Free Consultation/i })).toBeVisible();
  });
});
