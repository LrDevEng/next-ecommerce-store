import { expect, test } from '@playwright/test';

test('Navigation bar', async ({ page }) => {
  // Landing page
  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Custom ARCADE' }),
  ).toBeVisible();

  // About page
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'About' })
    .click();
  await page.waitForURL('/about');
  await expect(
    page.getByRole('heading', { name: 'Placeholder for awesome about page.' }),
  ).toBeVisible();

  // Shop page
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Shop' })
    .click();
  await page.waitForURL('/shop');
  await expect(
    page.getByRole('heading', { name: 'Available Parts' }),
  ).toBeVisible();

  // Cart page
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Cart' })
    .click();
  await page.waitForURL('/cart');
  await expect(page.getByRole('heading', { name: 'Cart' })).toBeVisible();

  // Go back to landing page
  await page
    .getByRole('navigation')
    .getByRole('link', { name: 'Custom ARCADE' })
    .click();
  await page.waitForURL('/');
  await expect(
    page.getByRole('heading', { name: 'Custom ARCADE' }),
  ).toBeVisible();
});
