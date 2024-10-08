'use client';

import removeProductFromCookie from './actions';

export default function RemoveButton({ productId }) {
  return (
    <button
      onClick={() => removeProductFromCookie(productId)}
      data-test-id={`cart-product-remove-${productId}`}
    >
      x
    </button>
  );
}
