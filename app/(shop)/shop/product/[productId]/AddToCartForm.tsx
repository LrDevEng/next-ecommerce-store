'use client';

import { useState } from 'react';
import { ProductDb } from '../../../../../database/products';
import createOrUpdateCookie from './actions';
import styles from './AddToCartForm.module.css';

const minQty = 1;

type Props = {
  productId: ProductDb['id'];
};

export default function AddToCartForm({ productId }: Props) {
  const [quantity, setQuantity] = useState(minQty);

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
            data-test-id="product-quantity"
          />
        </label>
      </div>
      <button
        className={styles.addButton}
        formAction={async () => {
          await createOrUpdateCookie(productId, quantity);
          setQuantity(minQty);
        }}
        data-test-id="product-add-to-cart"
      >
        Add To Cart
      </button>
    </form>
  );
}
