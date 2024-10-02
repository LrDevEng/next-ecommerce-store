'use server';

import {
  cartCookieName,
  getCookieValue,
  setCookie,
} from '../../../02-util/cookies.js';

export default async function createOrUpdateCookie(productId, quantity) {
  // Get product information saved in cart cookie (returns undefined in case cookie does not exist)
  let products = await getCookieValue(cartCookieName);

  // Set product information to basic datatype in case it does not exist
  if (products === undefined) products = [];

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
