import { expect, test } from '@playwright/test';

test('Add, update and delete items from cart', async ({ page }) => {
  // Got to landing page
  await page.goto('/');

  // Got to shop page
  // Shop page
  await page.getByTestId('products-link').click();
  await page.waitForURL('/shop');
  await expect(
    page.getByRole('heading', { name: 'Available Parts' }),
  ).toBeVisible();

  // Go to single product page with id 2
  await page.getByTestId('product-2').click();
  await page.waitForURL('/shop/product/2');
  await expect(
    page.getByRole('heading', { name: 'Arduino Nano 33 IoT' }),
  ).toBeVisible();
  await expect(page.getByTestId('product-image')).toBeVisible();
  await expect(page.getByTestId('product-price')).toBeVisible();
  await expect(page.getByTestId('product-quantity')).toBeVisible();
  await expect(page.getByTestId('product-quantity')).toHaveValue('1');
  await expect(page.getByTestId('cart-count')).toHaveText('0');

  // Add product to cart
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('1');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('2');

  // Got to cart page
  await page.getByTestId('cart-link').click();
  await page.waitForURL('/cart');
  await expect(page.getByRole('heading', { name: 'Cart' })).toBeVisible();
  await expect(page.getByTestId('cart-product-2')).toBeVisible();
  await expect(page.getByTestId('cart-product-2')).toContainText(
    'Arduino Nano 33 IoT',
  );
  await expect(page.getByTestId('cart-product-quantity-2')).toHaveText('2');
  await expect(page.getByTestId('cart-product-2')).toContainText('53,44');
});
