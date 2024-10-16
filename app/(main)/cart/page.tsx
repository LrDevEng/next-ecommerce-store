import Image from 'next/image';
import type { ProductDb } from '../../../database/products';
import { getProductInsecure } from '../../../database/products';
import type { ProductCookie } from '../../util/cart';
import { cartCookieName } from '../../util/constants';
import { getCookieValue } from '../../util/cookies';
import { centsToEuros } from '../../util/parsers';
import { calculateCartTotal } from '../../util/productCalculations';
import CheckOutButton from './CheckOutButton';
import styles from './page.module.css';
import RemoveButton from './RemoveButton';

export const metadata = {
  title: 'Cart',
  description: 'Shopping Cart.',
};

export default async function CartPage() {
  // Get products from cookie
  let productsCookie: ProductCookie[] = await getCookieValue(cartCookieName);

  // Check datatype of products (cookie value)
  if (!Array.isArray(productsCookie)) {
    productsCookie = [];
  }

  // Get products from database that are saved in cookie
  const productsDb: ProductDb[] = [];
  for (const product of productsCookie) {
    const productDb = await getProductInsecure(product.id);
    if (productDb) productsDb.push(productDb);
  }

  // Calculate cart total
  const total = await calculateCartTotal(productsCookie, productsDb);

  return (
    <div className={styles.page}>
      <h1>Cart</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>No.</th>
            <th />
            <th>Item</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {productsCookie.map((productCookie, index) => {
            const productDb = productsDb[index];
            if (!productDb) {
              return <div key={`product-${productCookie.id}`} />;
            }
            const subtotal = productDb.price * productCookie.quantity;

            return (
              <tr
                key={`product-${productCookie.id}`}
                data-test-id={`cart-product-${productCookie.id}`}
              >
                <td>{index + 1}</td>
                <td>
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.productImage}
                      src={`/images/${productDb.imgName}`}
                      alt={`Image of ${productDb.name}`}
                      width={300}
                      height={200}
                      style={{ backgroundColor: 'gray' }}
                    />
                  </div>
                </td>
                <td>{productDb.name}</td>
                <td className="euro">{centsToEuros(productDb.price)}</td>
                <td data-test-id={`cart-product-quantity-${productCookie.id}`}>
                  {productCookie.quantity}
                </td>
                <td className="euro">{centsToEuros(subtotal)}</td>
                <td>
                  <RemoveButton productId={productCookie.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.total}>
        <span>Total: </span>
        <span className="euro" data-test-id="cart-total">
          {centsToEuros(total)}
        </span>
      </div>
      <CheckOutButton cartIsEmpty={productsCookie.length < 1} />
    </div>
  );
}
