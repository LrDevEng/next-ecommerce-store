import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCardSmall.module.css';

export default function ProductCardSmall({ product }) {
  return (
    <Link
      className={styles.cardSmall}
      href={`/shop/product/${product.id}`}
      data-test-id={`product-${product.id}`}
    >
      <h3 className={styles.name}>{product.name}</h3>
      <div>{`Product code: ${product.id}`}</div>
      <Image
        className={styles.productImage}
        src={`/images/${product.path}`}
        alt={`Image of ${product.name}`}
        width={600}
        height={400}
        style={{ backgroundColor: 'gray' }}
        data-test-id="product-image"
      />
    </Link>
  );
}
