import { getProductsInsecure, ProductDb } from '../../../database/products';
import { getFullFileName } from '../../util/parsers';
import styles from './page.module.css';
import ProductGrid from './ProductGrid';

export const metadata = {
  title: 'Shop',
  description: 'Buy your favorite mcirocontroller.',
};

type ProductDbWithPath = (ProductDb & { path: string | undefined })[];

export default async function ShopPage() {
  const products = await getProductsInsecure();

  const productsWithImgLink: ProductDbWithPath = [];
  for (const product of products) {
    const imgPath = await getFullFileName(
      product.name.toLowerCase().replaceAll(' ', '-'),
      process.cwd() + '\\public\\images',
    );

    productsWithImgLink.push({ ...product, ...{ path: imgPath } });
  }

  return (
    <div className={styles.page}>
      <h1>Available Parts</h1>
      <ProductGrid products={productsWithImgLink} />
    </div>
  );
}
