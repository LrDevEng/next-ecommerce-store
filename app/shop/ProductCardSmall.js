import Image from 'next/image';
import Link from 'next/link';
import { getFullFileName } from '../02-util/parsers';
import styles from './ProductCardSmall.module.css';

export default async function ProductCardSmall({ product }) {
  const productImageFullName = await getFullFileName(
    product.name.toLowerCase().replaceAll(' ', '-'),
    process.cwd() + '\\public\\images',
  );

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
        src={`/images/${productImageFullName}`}
        alt={`Image of ${product.name}`}
        width={300}
        height={200}
        style={{ backgroundColor: 'gray' }}
        data-test-id="product-image"
      />
    </Link>
  );
}
