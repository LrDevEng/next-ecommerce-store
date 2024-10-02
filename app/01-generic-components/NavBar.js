import Link from 'next/link';
import styles from './styles/NavBar.module.css';

export default function NavBar() {
  return (
    <nav className={styles.navBar}>
      <Link href="/">The Wireless Controller</Link>
      <Link href="/about">About</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/cart">Cart</Link>
      <div>Count</div>
    </nav>
  );
}
