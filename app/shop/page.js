import { getMcs } from '../03-database/microcontrollers';
import styles from './page.module.scss';
import ProductCardSmall from './ProductCardSmall';

export const metadata = {
  title: 'Shop',
  description: 'Buy your favorite mcirocontroller.',
};

export default function ShopPage() {
  const mcs = getMcs();

  return (
    <div className={styles.page}>
      <h1>Available Microcontrollers</h1>
      {mcs.map((mc) => {
        return (
          <div key={`mc-${mc.id}`}>
            <ProductCardSmall product={mc} />
          </div>
        );
      })}
    </div>
  );
}
