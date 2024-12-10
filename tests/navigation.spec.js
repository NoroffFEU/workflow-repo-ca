import { test, expect } from '@playwright/test';

test('Navigate to home page, open first venue, and verify "Venue details" heading', async ({
  page,
}) => {
  // Navigate to the home page
  await page.goto('http://127.0.0.1:5500/');

  // Wait for the venue list to load
  await page.waitForSelector('#venue-container');

  // Click the first venue
  await page.click('#venue-container > a:first-child');

  // Wait for the heading to contain "Venue details"
  await page.waitForFunction(() => {
    const heading = document.querySelector('h1');
    return heading && heading.textContent.includes('Venue details');
  });

  // Verify the heading text
  const heading = await page.textContent('h1');
  expect(heading).toContain('Venue details');
});
