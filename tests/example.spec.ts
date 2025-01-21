// ts-check
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });

test('homepage has Playwright in title and get started link linking to the ', async ({ page }) => {
  await expect(page).toHaveTitle(/Playwright/)
});


test('Validate main page', async ({ page }) => {
  expect(page).toHaveURL(/*playwright.dev);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});


