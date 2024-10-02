import { notFound } from 'next/navigation';
import { getMc } from '../../../03-database/microcontrollers';
import ProductCardBig from './ProductCardBig';

export async function generateMetadata(props) {
  const productId = (await props.params).productId;
  return {
    title: `Product ${productId}`,
    description: `Details about ${productId}`,
  };
}

export default async function ProductPage(props) {
  const productId = (await props.params).productId;
  const product = getMc(Number(productId));

  if (!product) return notFound();

  return (
    <div>
      <ProductCardBig product={product} />
    </div>
  );
}
