import Link from 'next/link';
import { cartCookieName, getCookieValue } from '../02-util/cookies';
import { getMc } from '../03-database/microcontrollers';
import styles from './page.module.css';

export const metadata = {
  title: 'Cart',
  description: 'Shopping Cart.',
};

export default async function CartPage() {
  let products = await getCookieValue(cartCookieName);

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
  }

  return (
    <div className={styles.cart}>
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

            return (
              <tr key={`product-${product.id}`}>
                <td>{product.id}</td>
                <td>{productInfo.name}</td>
                <td>{productInfo.price}</td>
                <td>{product.quantity}</td>
                <td>{productInfo.price * product.quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Link href="/checkout">Check Out</Link>
    </div>
  );
}
