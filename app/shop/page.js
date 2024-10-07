import { getMcsInsecure } from '../../database/microcontrollers';
import styles from './page.module.css';
import ProductCardSmall from './ProductCardSmall';

export const metadata = {
  title: 'Shop',
  description: 'Buy your favorite mcirocontroller.',
};

export default async function ShopPage() {
  const mcs = await getMcsInsecure();

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
