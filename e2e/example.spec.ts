import { test, expect } from '@playwright/test';

/**
 * E2E Test Example
 * 
 * End-to-end tests verify the entire application flow from the user's perspective.
 * These tests run in a real browser environment.
 */

test.describe('Home Page E2E Tests', () => {
  test('should load the home page', async ({ page }) => {
    await page.goto('/');
    
    // Check that the page loaded successfully
    await expect(page).toHaveTitle(/Evident Solutions/i);
  });

  test('should display main content', async ({ page }) => {
    await page.goto('/');
    
    // Check for main content
    const main = page.locator('main');
    await expect(main).toBeVisible();
  });

  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    
    // Check for links in footer
    const learnLink = page.getByRole('link', { name: /learn/i });
    await expect(learnLink).toBeVisible();
    
    // Verify link has href
    const href = await learnLink.getAttribute('href');
    expect(href).toBeTruthy();
  });

  test('should be responsive', async ({ page }) => {
    // Test mobile viewport
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Test desktop viewport
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(main).toBeVisible();
  });

  test('should have proper accessibility', async ({ page }) => {
    await page.goto('/');
    
    // Check for semantic HTML
    const main = page.locator('main');
    await expect(main).toBeVisible();
    
    // Check for proper heading structure (if applicable)
    // This is a placeholder - add actual accessibility checks
  });
});

