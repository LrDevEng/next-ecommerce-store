'use server';

import type { ProductCookie } from '../../../../util/cart';
import { addOrUpdateProduct } from '../../../../util/cart';
import { cartCookieName } from '../../../../util/constants';
import { getCookieValue, setCookie } from '../../../../util/cookies';

export default async function createOrUpdateCookie(
  productId: ProductCookie['id'],
  quantity: ProductCookie['quantity'],
) {
  // Get product information saved in cart cookie or set to base datatype in case cookie does not exist
  let products = (await getCookieValue(cartCookieName)) || [];

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
  }

  // Add product to cookie or update quantity if product is already present
  products = addOrUpdateProduct(products, productId, quantity);

  // Set cookie
  await setCookie(cartCookieName, products);
}
