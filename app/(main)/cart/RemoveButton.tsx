'use client';

import type { ProductCookie } from '../../util/cart';
import removeProductFromCookie from './actions';

type Props = {
  productId: ProductCookie['id'];
};

export default function RemoveButton({ productId }: Props) {
  return (
    <button
      onClick={() => removeProductFromCookie(productId)}
      data-test-id={`cart-product-remove-${productId}`}
    >
      x
    </button>
  );
}
