import Link from 'next/link';
import AddToCartForm from './AddToCartForm';
import styles from './ProductCardBig.module.css';

export default function ProductCardBig({ product }) {
  return (
    <div className={styles.cardBig}>
      <Link href="/shop">⇦ Back</Link>
      <h1 className={styles.name}>{product.name}</h1>
      <h3 className={styles.lineItem}>Product Details:</h3>
      <div className={styles.lineItem}>{`Id: ${product.id}`}</div>
      <div
        className={styles.lineItem}
        data-test-id="product-price"
      >{`Price: ${product.price}`}</div>
      <AddToCartForm productId={product.id} />
    </div>
  );
}
