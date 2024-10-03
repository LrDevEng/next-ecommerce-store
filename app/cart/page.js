import { cartCookieName } from '../02-util/constants';
import { getCookieValue } from '../02-util/cookies';
import { getMc } from '../03-database/microcontrollers';
import CheckOutButton from './CheckOutButton';
import styles from './page.module.css';
import RemoveButton from './RemoveButton';

export const metadata = {
  title: 'Cart',
  description: 'Shopping Cart.',
};

export default async function CartPage() {
  let products = await getCookieValue(cartCookieName);
  let total = 0;

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
  }

  return (
    <div className={styles.page}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            const productInfo = getMc(product.id);
            const subtotal = productInfo.price * product.quantity;
            total += subtotal;

            return (
              <tr
                key={`product-${product.id}`}
                data-test-id={`cart-product-${product.id}`}
              >
                <td>{product.id}</td>
                <td>{productInfo.name}</td>
                <td>{productInfo.price}</td>
                <td data-test-id={`cart-product-quantity-${product.id}`}>
                  {product.quantity}
                </td>
                <td>{subtotal}</td>
                <td>
                  <RemoveButton productId={product.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className={styles.total}
        data-test-id="cart-total"
      >{`Total: ${total}`}</div>
      <CheckOutButton />
    </div>
  );
}
