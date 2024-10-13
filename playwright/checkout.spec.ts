import { expect, test } from '@playwright/test';

test('Add, update and delete items from cart', async ({ page }) => {
  // Add items to cart
  await page.goto('/shop/product/1');
  await page.getByTestId('product-add-to-cart').click();
  await page.goto('/shop/product/2');
  await page.getByTestId('product-add-to-cart').click();

  // Got to cart page and continue to checkout
  await page.goto('/cart');
});
