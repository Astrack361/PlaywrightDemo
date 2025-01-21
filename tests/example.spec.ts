import { test, expect } from '@playwright/test';


test.beforeEach(async ({ page }) => {
  await page.goto('https://playwright.dev/');
});



test('Homepage has Playwright in title', async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
  
});

test('Main page and get started button', async ({ page }) => {
  //Create locator into a variable
  const getStarted = page.locator('text=Get Started');

  //Validate if variable is equal than the expected value
  await expect(getStarted).toHaveAttribute('href', '/docs/intro');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
