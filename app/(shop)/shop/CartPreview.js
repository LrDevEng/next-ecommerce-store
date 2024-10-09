import { getProductInsecure } from '../../../database/products';
import { cartCookieName } from '../../util/constants';
import { getCookieValue } from '../../util/cookies';
import { centsToEuros } from '../../util/parsers';
import { calculateCartTotal } from '../../util/productCalculations';
import styles from './CartPreview.module.css';
import GoToCartButton from './GoToCartButton';

export default async function CartPreview() {
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
    <div className={styles.cartPreview}>
      <h3>Cart Preview</h3>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Item</th>
            <th>Qty.</th>
          </tr>
        </thead>
        <tbody>
          {productsCookie.map((productCookie, index) => {
            const productDb = productsDb[index];
            return (
              <tr key={`product-${productCookie.id}`}>
                <td>{index + 1}</td>
                <td>{productDb.name}</td>
                <td>{productCookie.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p>
        <span>Total: </span>
        <span className="euro" data-test-id="cart-total">
          {centsToEuros(total)}
        </span>
      </p>
      <GoToCartButton />
    </div>
  );
}
