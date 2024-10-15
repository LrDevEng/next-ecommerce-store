import { getProductsInsecure } from '../../../database/products';
import styles from './page.module.css';
import ProductGrid from './ProductGrid';

export const metadata = {
  title: 'Shop',
  description: 'Buy your favorite mcirocontroller.',
};

export default async function ShopPage() {
  const products = await getProductsInsecure();

  return (
    <div className={styles.page}>
      <h1>Available Parts</h1>
      <ProductGrid products={products} />
    </div>
  );
}
