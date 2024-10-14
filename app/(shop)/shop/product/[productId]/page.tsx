import { notFound } from 'next/navigation';
import { getProductInsecure } from '../../../../../database/products';
import styles from './page.module.css';
import ProductCardBig from './ProductCardBig';

type Props = {
  params: Promise<{
    productId: string;
  }>;
};

export async function generateMetadata(props: Props) {
  const productId = (await props.params).productId;
  return {
    title: `Product ${productId}`,
    description: `Details about ${productId}`,
  };
}

export default async function ProductPage(props: Props) {
  const productId = (await props.params).productId;
  const product = await getProductInsecure(Number(productId));

  if (!product) return notFound();

  return (
    <div className={styles.page}>
      <ProductCardBig product={product} />
    </div>
  );
}
