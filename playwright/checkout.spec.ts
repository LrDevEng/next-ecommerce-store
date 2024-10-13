import { expect, test } from '@playwright/test';

test('Checkout flow', async ({ page }) => {
  // Specify dialog handler
  page.on('dialog', async (dialog) => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toContain(
      'There are no products in the cart to check out.',
    );
    await dialog.accept();
  });

  // Try to check out without anything in cart
  await page.goto('/cart');
  await page.getByTestId('cart-checkout').click();

  // Add items to cart
  await page.goto('/shop/product/1');
  await page.getByTestId('product-add-to-cart').click();
  await page.goto('/shop/product/2');
  await page.getByTestId('product-add-to-cart').click();

  // Got to cart page and continue to checkout
  await page.goto('/cart');
  await page.getByTestId('cart-checkout').click();
  await page.waitForURL('/checkout');

  // Look for form elements on checkout page
  await expect(page.getByRole('heading', { name: 'Check Out' })).toBeVisible();
  await expect(page.getByTestId('checkout-first-name')).toBeVisible();
  await expect(page.getByTestId('checkout-last-name')).toBeVisible();
  await expect(page.getByTestId('checkout-email')).toBeVisible();
  await expect(page.getByTestId('checkout-address')).toBeVisible();
  await expect(page.getByTestId('checkout-city')).toBeVisible();
  await expect(page.getByTestId('checkout-postal-code')).toBeVisible();
  await expect(page.getByTestId('checkout-country')).toBeVisible();
  await expect(page.getByTestId('checkout-credit-card')).toBeVisible();
  await expect(page.getByTestId('checkout-expiration-date')).toBeVisible();
  await expect(page.getByTestId('checkout-security-code')).toBeVisible();
  await expect(page.getByTestId('checkout-confirm-order')).toBeVisible();
  await expect(page.getByTestId('checkout-cart-total')).toBeVisible();
  await expect(page.getByTestId('checkout-cart-total')).toContainText('64,94');

  // Check that it is not possible to check out with empty fields
  await page.getByTestId('checkout-confirm-order').click();
  await page.waitForTimeout(500);
  await expect(page.getByRole('heading', { name: 'Check Out' })).toBeVisible();

  // Fill fields
  await page.getByTestId('checkout-first-name').fill('Pippi');
  await page.getByTestId('checkout-last-name').fill('Langstrumpf');
  await page
    .getByTestId('checkout-email')
    .fill('PippiLangstrumpf@VillaKunterbunt.se');
  await page.getByTestId('checkout-address').fill('Villa Kunterbunt');
  await page.getByTestId('checkout-city').fill('Irgendwo');
  await page.getByTestId('checkout-postal-code').fill('23439');
  await page.getByTestId('checkout-country').fill('Schweden');
  await page.getByTestId('checkout-credit-card').fill('1234123412341234');
  await page.getByTestId('checkout-expiration-date').fill('1234');
  await page.getByTestId('checkout-security-code').fill('123');

  // Check out and go to thank you page
  await page.getByTestId('checkout-confirm-order').click();
  await page.waitForURL('/order-confirmed');
  await expect(page.getByRole('heading', { name: 'Thank You' })).toBeVisible();
});
