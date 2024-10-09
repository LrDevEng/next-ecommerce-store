import Image from 'next/image';
import { getProductInsecure } from '../../../database/products';
import { cartCookieName } from '../../util/constants';
import { getCookieValue } from '../../util/cookies';
import { centsToEuros, getFullFileName } from '../../util/parsers';
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
  let productsCookie = await getCookieValue(cartCookieName);

  // Check datatype of products (cookie value)
  if (!Array.isArray(productsCookie)) {
    productsCookie = [];
  }

  // Get products from database that are saved in cookie
  const productsDb = [];
  for (const product of productsCookie) {
    productsDb.push(await getProductInsecure(product.id));
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
          {productsCookie.map(async (productCookie, index) => {
            const productDb = productsDb[index];
            const subtotal = productDb.price * productCookie.quantity;
            const productImageFullName = await getFullFileName(
              productDb.name.toLowerCase().replaceAll(' ', '-'),
              process.cwd() + '\\public\\images',
            );

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
                      src={`/images/${productImageFullName}`}
                      alt={`Image of ${productDb.name}`}
                      width={600}
                      height={400}
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
      <CheckOutButton
        className={styles.checkOutButton}
        cartIsEmpty={productsCookie.length < 1}
      />
    </div>
  );
}
