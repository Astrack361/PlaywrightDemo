// ts-check
import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    await page.goto('https://demo.playwright.dev/todomvc');
  });

test('homepage has Playwright in title and get started link linking toi the ', async ({ page }) => {
    await 
});



