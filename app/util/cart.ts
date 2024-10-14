export type ProductCookie = {
  id: number;
  quantity: number;
};

// Function to add or update product in cart
export function addOrUpdateProduct(
  products: ProductCookie[],
  productId: ProductCookie['id'],
  quantity: ProductCookie['quantity'],
) {
  // Try to find product that shall be updated
  const productToUpdate = products.find((product) => product.id === productId);

  // Create product in cookie in case it does not exist
  if (!productToUpdate) {
    products.push({ id: productId, quantity: quantity });
  } else {
    // Update product quantity
    productToUpdate.quantity += quantity;
  }

  return products;
}
