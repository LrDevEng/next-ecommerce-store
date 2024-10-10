'use server';

import { cartCookieName } from '../../../../util/constants.js';
import { getCookieValue, setCookie } from '../../../../util/cookies.js';

export default async function createOrUpdateCookie(productId, quantity) {
  // Get product information saved in cart cookie or set to base datatype in case cookie does not exist
  let products = (await getCookieValue(cartCookieName)) || [];

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
  }

  // Try to find product that shall be updated
  const productToUpdate = products.find((product) => product.id === productId);

  // Create product in cookie in case it does not exist
  if (!productToUpdate) {
    products.push({ id: productId, quantity: quantity });
  } else {
    // Update product quantity
    productToUpdate.quantity += quantity;
  }

  // Set cookie
  await setCookie(cartCookieName, products);
}
