import { getProductsInsecure } from '../../database/products';
import styles from './page.module.css';
import ProductCardSmall from './ProductCardSmall';

export const metadata = {
  title: 'Shop',
  description: 'Buy your favorite mcirocontroller.',
};

export default async function ShopPage() {
  const mcs = await getProductsInsecure();

  return (
    <div className={styles.page}>
      <h1>Available Development Boards</h1>
      <div className={styles.productPreview}>
        {mcs.map((mc) => {
          return (
            <div key={`mc-${mc.id}`}>
              <ProductCardSmall product={mc} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
