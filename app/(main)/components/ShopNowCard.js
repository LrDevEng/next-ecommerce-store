'use client';

import { useRouter } from 'next/navigation';
import { useFilterType } from '../../stores/useFilterType';
import styles from './ShopNowCard.module.css';

export default function ShopNowCard({ heading, productType, className }) {
  const router = useRouter();

  // Get filter state
  const updateFilterType = useFilterType((state) => state.update);

  return (
    <div className={`${styles.container} ${className}`}>
      <h3>{heading}</h3>
      <button
        onClick={() => {
          updateFilterType(productType);
          router.push('/shop');
        }}
      >
        Shop Now
      </button>
    </div>
  );
}
