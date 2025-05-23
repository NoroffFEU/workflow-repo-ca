// tests/navigation.spec.js
import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

const { BASE_URL } = process.env;

test('Navigate to home, open first venue, verify details page', async ({
  page,
}) => {
  await page.goto(`${BASE_URL}/`);

  await page.waitForFunction(() => {
    const container = document.querySelector('#venue-container');
    return container && container.children.length > 0;
  });

  await page.click(
    '#venue-container > *:first-child a, #venue-container > *:first-child button, #venue-container > *:first-child'
  );

  await page.waitForLoadState('networkidle');

  await expect(page.locator('h1')).toContainText('Venue details');
});
