'use client';

import { useState } from 'react';
import createOrUpdateCookie from './actions';
import styles from './AddToCartForm.module.css';

export default function AddToCartForm({ productId }) {
  const [quantity, setQuantity] = useState(1);

  // useEffect(() => {
  //   const allCookies = document.cookie;
  //   console.log(allCookies);
  // }, []);

  return (
    <form className={styles.form}>
      <div className={styles.quantity}>
        <label>
          Quantity:
          <input
            name={`quantity-product-${productId}`}
            type="number"
            min={1}
            value={quantity}
            required
            onChange={(event) => setQuantity(Number(event.currentTarget.value))}
          />
        </label>
      </div>
      <button
        className={styles.addButton}
        formAction={async () => {
          await createOrUpdateCookie(productId, quantity);
          setQuantity(1);
        }}
      >
        Add To Cart
      </button>
    </form>
  );
}
