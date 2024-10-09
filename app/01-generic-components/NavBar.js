import Image from 'next/image';
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
      <Link className={styles.eightBit} href="/">
        Custom ARCADE
      </Link>
      <Link href="/about">
        <div className={styles.linkBig}>About</div>
        <div className={styles.linkSmall}>
          <Image
            src="/icons/icon-info.svg"
            alt="About"
            width={48}
            height={48}
          />
        </div>
      </Link>
      <Link href="/blog">
        <div className={styles.linkBig}>Blog</div>
        <div className={styles.linkSmall}>
          <Image
            src="/icons/icon-newspaper.svg"
            alt="About"
            width={48}
            height={48}
          />
        </div>
      </Link>
      <Link href="/shop" data-test-id="products-link">
        <div className={styles.linkBig}>Shop</div>
        <div className={styles.linkSmall}>
          <Image
            src="/icons/icon-shopping-bag.svg"
            alt="Shop"
            width={48}
            height={48}
          />
        </div>
      </Link>
      <Link className={styles.cartLink} href="/cart" data-test-id="cart-link">
        <Image src="/icons/icon-cart.svg" alt="Cart" width={48} height={48} />
        <div
          className={styles.cartCount}
          data-test-id="cart-count"
        >{`${numItemsInCart}`}</div>
      </Link>
    </nav>
  );
}
