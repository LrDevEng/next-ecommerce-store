import Image from 'next/image';
import Link from 'next/link';
import { getFullFileName } from '../../../02-util/parsers';
import AddToCartForm from './AddToCartForm';
import styles from './ProductCardBig.module.css';

export default async function ProductCardBig({ product }) {
  const productImageFullName = await getFullFileName(
    product.name.toLowerCase().replaceAll(' ', '-'),
    process.cwd() + '\\public\\images',
  );

  const descriptionParagraphs = product.description.split('\\n');

  return (
    <div className={styles.cardBig}>
      <Link className={styles.return} href="/shop">
        <div className={styles.spin}>⇦</div>
        <div>return</div>
      </Link>
      <h1 className={styles.name}>{product.name}</h1>
      <h3 className={styles.typewriter}>Product Details:</h3>
      <div className={styles.eyecatcher}>
        <div className={styles.imgContainer}>
          <Image
            src={`/images/${productImageFullName}`}
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

      <article className={styles.article}>
        <hr />
        <h3>Description:</h3>
        {descriptionParagraphs.map((paragraph) => {
          return (
            <p key={`paragraph-${paragraph.slice(1, 20)}`}>
              <br />
              {paragraph}
            </p>
          );
        })}
      </article>

      <article className={styles.article}>
        <hr />
        <h3>Specification:</h3>
      </article>
    </div>
  );
}
