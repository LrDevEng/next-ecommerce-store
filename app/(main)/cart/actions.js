'use server';

import { cartCookieName } from '../../util/constants.js';
import { getCookieValue, setCookie } from '../../util/cookies.js';

export default async function removeProductFromCookie(productId) {
  // Get product information saved in cart cookie or set to base datatype in case cookie does not exist
  let products = (await getCookieValue(cartCookieName)) || [];

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
  }

  // Try to remove product from cookie
  products = products.filter((product) => product.id !== productId);

  // Set cookie
  await setCookie(cartCookieName, products);
}
