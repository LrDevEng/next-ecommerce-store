import type { ProductDb } from '../../../database/products';
import { getProductInsecure } from '../../../database/products';
import type { ProductCookie } from '../../util/cart';
import { cartCookieName } from '../../util/constants';
import { getCookieValue } from '../../util/cookies';
import { centsToEuros } from '../../util/parsers';
import { calculateCartTotal } from '../../util/productCalculations';
import CheckOutForm from './CheckOutForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Check Out',
  description: 'Check out.',
};

export default async function CheckoutPage() {
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
      <div>
        <h1>Check Out</h1>
        <div className={styles.total}>
          <span>Total: </span>
          <span className="euro" data-test-id="checkout-cart-total">
            {centsToEuros(total)}
          </span>
        </div>
        <CheckOutForm />
      </div>
    </div>
  );
}
