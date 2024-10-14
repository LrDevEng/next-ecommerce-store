'use server';

import { ProductCookie } from '../../util/cart';
import { cartCookieName } from '../../util/constants';
import { getCookieValue, setCookie } from '../../util/cookies';

export default async function removeProductFromCookie(
  productId: ProductCookie['id'],
) {
  // Get product information saved in cart cookie or set to base datatype in case cookie does not exist
  let products: ProductCookie[] = (await getCookieValue(cartCookieName)) || [];

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
  }

  // Try to remove product from cookie
  products = products.filter((product) => product.id !== productId);

  // Set cookie
  await setCookie(cartCookieName, products);
}
