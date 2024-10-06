import Image from 'next/image';
import Link from 'next/link';
import AddToCartForm from './AddToCartForm';
import styles from './ProductCardBig.module.css';

export default function ProductCardBig({ product }) {
  return (
    <div className={styles.cardBig}>
      <Link href="/shop">⇦ return</Link>
      <h1 className={styles.name}>{product.name}</h1>
      <h3 className={styles.typewriter}>Product Details:</h3>
      <div className={styles.eyecatcher}>
        <div className={styles.imgContainer}>
          <Image
            src={`/images/${product.name.toLowerCase().replaceAll(' ', '-')}.jpg`}
            alt={`Image of ${product.name}`}
            width={300}
            height={200}
            className={styles.img}
            data-test-id="product-image"
          />
        </div>
        <div className={styles.addToCart}>
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>Product code:</td>
                <td>{product.id}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td data-test-id="product-price">{product.price}</td>
              </tr>
            </tbody>
          </table>
          <AddToCartForm productId={product.id} />
        </div>
      </div>
    </div>
  );
}
