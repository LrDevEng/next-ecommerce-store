import { notFound } from 'next/navigation';
import { getMcInsecure } from '../../../../database/microcontrollers';
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
  const product = await getMcInsecure(Number(productId));

  if (!product) return notFound();

  return (
    <div>
      <ProductCardBig product={product} />
    </div>
  );
}
