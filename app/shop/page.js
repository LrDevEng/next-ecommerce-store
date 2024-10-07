import { getProductsInsecure } from '../../database/products';
import styles from './page.module.css';
import ProductCardSmall from './ProductCardSmall';

export const metadata = {
  title: 'Shop',
  description: 'Buy your favorite mcirocontroller.',
};

export default async function ShopPage() {
  const products = await getProductsInsecure();

  return (
    <div className={styles.page}>
      <h1>Available Parts</h1>
      <div className={styles.productPreview}>
        {products.map((product) => {
          return (
            <div key={`mc-${product.id}`}>
              <ProductCardSmall product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
