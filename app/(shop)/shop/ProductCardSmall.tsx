import Image from 'next/image';
import Link from 'next/link';
import type { ProductDb } from '../../../database/products';
import styles from './ProductCardSmall.module.css';

type Props = {
  product: ProductDb;
};

export default function ProductCardSmall({ product }: Props) {
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
        src={`/images/${product.imgName}`}
        alt={`Image of ${product.name}`}
        width={300}
        height={200}
        style={{ backgroundColor: 'gray' }}
        data-test-id="product-image"
      />
    </Link>
  );
}
