import AddToCartForm from './AddToCartForm';
import styles from './ProductCardBig.module.css';

export default function ProductCardBig({ product }) {
  return (
    <div className={styles.cardBig}>
      <h3 className={styles.lineItem}>Product Details:</h3>
      <div className={styles.lineItem}>{`Id: ${product.id}`}</div>
      <div className={styles.lineItem}>{`Name: ${product.name}`}</div>
      <div className={styles.lineItem}>{`Price: ${product.price}`}</div>
      <AddToCartForm productId={product.id} />
    </div>
  );
}
