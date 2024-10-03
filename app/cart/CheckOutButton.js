'use client';

import { useRouter } from 'next/navigation';
import styles from './CheckOutButton.module.css';

export default function CheckOutButton() {
  const router = useRouter();

  return (
    <button
      className={styles.checkOut}
      onClick={() => {
        router.push('/checkout');
      }}
      data-test-id="cart-checkout"
    >
      Check Out
    </button>
  );
}
