import Link from 'next/link';
import styles from './ProducCardSmall.module.css';

export default function ProductCardSmall({ product }) {
  return (
    <Link
      className={styles.cardSmall}
      href={`/shop/product/${product.id}`}
      data-test-id={`product-${product.id}`}
    >
      <div className={styles.id}>{product.id}</div>
      <div className={styles.name}>{product.name}</div>
    </Link>
  );
}
