'use client';

import { useState } from 'react';
import styles from './AddToCartForm.module.scss';

export default function AddToCartForm({ productId }) {
  const [quantity, setQuantity] = useState(1);

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
            onChange={(event) => setQuantity(event.currentTarget.value)}
          />
        </label>
      </div>
      <button className={styles.addButton} formAction={() => {}}>
        Add To Cart
      </button>
    </form>
  );
}
