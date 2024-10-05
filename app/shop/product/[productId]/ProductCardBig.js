import Image from 'next/image';
import Link from 'next/link';
import AddToCartForm from './AddToCartForm';
import styles from './ProductCardBig.module.css';

export default function ProductCardBig({ product }) {
  return (
    <div className={styles.cardBig}>
      <Link href="/shop">⇦ return</Link>
      <h1 className={styles.name}>{product.name}</h1>
      <h3 className={styles.lineItem}>Product Details:</h3>
      <Image
        src={`/images/${product.name.toLowerCase().replaceAll(' ', '-')}.jpg`}
        alt={`Image of ${product.name}`}
        width={300}
        height={200}
        style={{ backgroundColor: 'gray' }}
        data-test-id="product-image"
      />
      <div className={styles.lineItem}>{`Product code: ${product.id}`}</div>
      <div
        className={styles.lineItem}
        data-test-id="product-price"
      >{`Price: ${product.price}`}</div>
      <AddToCartForm productId={product.id} />
    </div>
  );
}
