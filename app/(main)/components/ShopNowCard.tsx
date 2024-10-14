'use client';

import { useRouter } from 'next/navigation';
import { useFilterType } from '../../stores/useFilterType';
import styles from './ShopNowCard.module.css';

type Props = {
  heading: string;
  productType: string;
  className: string | undefined;
};

export default function ShopNowCard({
  heading,
  productType,
  className,
}: Props) {
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
