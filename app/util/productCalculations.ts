import { ProductDb } from '../../database/products';
import { ProductCookie } from './cart';

export function calculateCartTotal(
  productsCookie: ProductCookie[],
  productsDb: ProductDb[],
): number {
  if (productsCookie.length !== productsDb.length) {
    throw new Error('Arrays need to have the same length.');
  }

  let total = 0;
  for (const productCookie of productsCookie) {
    total +=
      productsDb.find((productDb) => productDb.id === productCookie.id)!.price *
      productCookie.quantity;
  }

  return total;

  // Alternative: Reduce
  // const total = await products.reduce(async (sum, product) => {
  //   const productInfo = await getMcInsecure(product.id);
  //   return (await sum) + productInfo.price * product.quantity;
  // }, 0);

  // Alternative: Standard loop
  // let total = 0;
  // for (let i = 0; i < products.length; i++) {
  //   const productInfo = await getMcInsecure(products[i].id);
  //   total += productInfo.price * products[i].quantity;
  // }
}

export function calculateItemsInCart(products: ProductCookie[] | undefined) {
  let numItemsInCart = 0;
  if (products) {
    numItemsInCart = products.reduce(
      (total, product) => total + product.quantity,
      0,
    );
  }
  return numItemsInCart;
}
