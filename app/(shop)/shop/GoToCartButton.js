'use client';

import { useRouter } from 'next/navigation';
import styles from './GoToCartButton.module.css';

export default function CheckOutButton() {
  const router = useRouter();

  return (
    <button
      className={styles.goToCartButton}
      onClick={() => {
        router.push('/cart');
      }}
    >
      Go To Cart
    </button>
  );
}
