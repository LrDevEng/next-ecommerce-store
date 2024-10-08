'use client';

import { useRouter } from 'next/navigation';
import styles from './CheckOutButton.module.css';

export default function CheckOutButton({ cartIsEmpty }) {
  const router = useRouter();

  return (
    <button
      className={styles.checkOut}
      onClick={() => {
        if (cartIsEmpty) {
          alert('There are no products in the cart to check out.');
        } else {
          router.push('/checkout');
        }
      }}
      data-test-id="cart-checkout"
    >
      Check Out
    </button>
  );
}
