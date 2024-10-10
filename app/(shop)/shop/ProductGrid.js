'use client';

import { useFilterType } from '../../stores/useFilterType';
import { productType } from '../../util/constants';
import ProductCardSmall from './ProductCardSmall';
import styles from './ProductGrid.module.css';

export default function ProductGrid({ products }) {
  // Get filter state and filter products if necessary
  const filterType = useFilterType((state) => state.filter);
  if (filterType !== productType.all) {
    products = products.filter((product) => product.type === filterType);
  }

  return (
    <div className={styles.productGrid}>
      {products.map((product) => {
        return (
          <div key={`mc-${product.id}`}>
            <ProductCardSmall product={product} />
          </div>
        );
      })}
    </div>
  );
}
