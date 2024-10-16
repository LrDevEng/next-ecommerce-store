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
  await expect(page.getByTestId('cart-product-2')).toContainText('53.44');
  await expect(page.getByTestId('cart-product-remove-2')).toBeVisible();
  await expect(page.getByTestId('cart-total')).toHaveText('53.44');

  // Add more of product 2 to cart
  await page.getByTestId('products-link').click();
  await page.waitForURL('/shop');
  await page.getByTestId('product-2').click();
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('3');

  // Add product 1 to cart
  await page.getByTestId('products-link').click();
  await page.waitForURL('/shop');
  await page.getByTestId('product-1').click();
  await page.getByTestId('product-quantity').fill('4');
  await page.getByTestId('product-add-to-cart').click();
  await expect(page.getByTestId('cart-count')).toHaveText('7');

  // Got to cart page
  await page.getByTestId('cart-link').click();
  await page.waitForURL('/cart');
  await expect(page.getByTestId('cart-product-1')).toBeVisible();
  await expect(page.getByTestId('cart-product-1')).toContainText(
    'Arduino Mega 2560 Rev3',
  );
  await expect(page.getByTestId('cart-product-quantity-1')).toHaveText('4');
  await expect(page.getByTestId('cart-product-1')).toContainText('152.88');
  await expect(page.getByTestId('cart-product-remove-1')).toBeVisible();
  await expect(page.getByTestId('cart-product-quantity-2')).toHaveText('3');
  await expect(page.getByTestId('cart-product-2')).toContainText('80.16');
  await expect(page.getByTestId('cart-total')).toHaveText('233.04');

  // Check remove button functionality
  await page.getByTestId('cart-product-remove-1').click();
  await expect(page.getByTestId('cart-count')).toHaveText('3');
  await expect(page.getByTestId('cart-total')).toHaveText('80.16');
});
