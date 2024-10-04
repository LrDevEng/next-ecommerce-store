import { getMcInsecure } from '../../database/microcontrollers';
import { cartCookieName } from '../02-util/constants';
import { getCookieValue } from '../02-util/cookies';
import CheckOutButton from './CheckOutButton';
import styles from './page.module.css';
import RemoveButton from './RemoveButton';

export const metadata = {
  title: 'Cart',
  description: 'Shopping Cart.',
};

export default async function CartPage() {
  let products = await getCookieValue(cartCookieName);
  // let total = 0;

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
  }

  // Calculate cart total

  // Reduce
  const total = await products.reduce(async (total, product) => {
    const productInfo = await getMcInsecure(product.id);
    return (await total) + productInfo.price * product.quantity;
  }, 0);

  // Alternative: Standard loop
  // let total = 0;
  // for (let i = 0; i < products.length; i++) {
  //   const productInfo = await getMcInsecure(products[i].id);
  //   total += productInfo.price * products[i].quantity;
  // }

  return (
    <div className={styles.page}>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map(async (product) => {
            const productInfo = await getMcInsecure(product.id);
            const subtotal = productInfo.price * product.quantity;

            return (
              <tr
                key={`product-${product.id}`}
                data-test-id={`cart-product-${product.id}`}
              >
                <td>{product.id}</td>
                <td>{productInfo.name}</td>
                <td>{productInfo.price}</td>
                <td data-test-id={`cart-product-quantity-${product.id}`}>
                  {product.quantity}
                </td>
                <td>{subtotal}</td>
                <td>
                  <RemoveButton productId={product.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.total} data-test-id="cart-total">
        {`Total: ${total}`}
      </div>
      <CheckOutButton />
    </div>
  );
}
