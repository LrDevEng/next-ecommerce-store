export async function generateMetadata(props) {
  const productId = (await props.params).productId;
  return {
    title: `Product ${productId}`,
    description: `Details about ${productId}`,
  };
}

export default async function ProductPage(props) {
  const productId = (await props.params).productId;
  return <div>{`Details about ${productId}`}</div>;
}
