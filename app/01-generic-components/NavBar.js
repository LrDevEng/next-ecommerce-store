import Link from 'next/link';
import { cartCookieName } from '../02-util/constants';
import { getCookieValue } from '../02-util/cookies';
import styles from './styles/NavBar.module.css';

export default async function NavBar() {
  let products = await getCookieValue(cartCookieName);

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
  }

  // Add quantity off all products saved in cookie
  let numItemsInCart = 0;
  if (products) {
    numItemsInCart = products.reduce(
      (total, product) => total + product.quantity,
      0,
    );
  }

  return (
    <nav className={styles.navBar}>
      <Link href="/">The Wireless Controller</Link>
      <Link href="/about">About</Link>
      <Link href="/shop" data-test-id="products-link">
        Shop
      </Link>
      <Link href="/cart" data-test-id="cart-link">
        Cart
      </Link>
      <div data-test-id="cart-count">{`Count: ${numItemsInCart}`}</div>
    </nav>
  );
}
