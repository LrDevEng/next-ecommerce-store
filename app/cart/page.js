import Image from 'next/image';
import { getProductInsecure } from '../../database/products';
import { cartCookieName } from '../02-util/constants';
import { getCookieValue } from '../02-util/cookies';
import { centsToEuros, getFullFileName } from '../02-util/parsers';
import CheckOutButton from './CheckOutButton';
import styles from './page.module.css';
import RemoveButton from './RemoveButton';

export const metadata = {
  title: 'Cart',
  description: 'Shopping Cart.',
};

export default async function CartPage() {
  let products = await getCookieValue(cartCookieName);

  // Check datatype of products (cookie value)
  if (!Array.isArray(products)) {
    products = [];
  }

  // Calculate cart total

  let total = 0;
  for (const product of products) {
    total += (await getProductInsecure(product.id)).price * product.quantity;
  }

  // Alternative: Reduce
  // const total = await products.reduce(async (sum, product) => {
  //   const productInfo = await getMcInsecure(product.id);
  //   return (await sum) + productInfo.price * product.quantity;
  // }, 0);

  // Alternative: Standard loop
  // let total = 0;
  // for (let i = 0; i < products.length; i++) {
  //   const productInfo = await getMcInsecure(products[i].id);
  //   total += productInfo.price * products[i].quantity;
  // }

  return (
    <div className={styles.page}>
      <h1>Cart</h1>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>No.</th>
            <th />
            <th>Item</th>
            <th>Price</th>
            <th>Qty.</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {products.map(async (product, index) => {
            const productInfo = await getProductInsecure(product.id);
            const subtotal = productInfo.price * product.quantity;
            const productImageFullName = await getFullFileName(
              productInfo.name.toLowerCase().replaceAll(' ', '-'),
              process.cwd() + '\\public\\images',
            );

            return (
              <tr
                key={`product-${product.id}`}
                data-test-id={`cart-product-${product.id}`}
              >
                <td>{index + 1}</td>
                <td>
                  <div className={styles.imageContainer}>
                    <Image
                      className={styles.productImage}
                      src={`/images/${productImageFullName}`}
                      alt={`Image of ${product.name}`}
                      width={600}
                      height={400}
                      style={{ backgroundColor: 'gray' }}
                    />
                  </div>
                </td>
                <td>{productInfo.name}</td>
                <td className="euro">{centsToEuros(productInfo.price)}</td>
                <td data-test-id={`cart-product-quantity-${product.id}`}>
                  {product.quantity}
                </td>
                <td className="euro">{centsToEuros(subtotal)}</td>
                <td>
                  <RemoveButton productId={product.id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className={styles.total}>
        <span>Total: </span>
        <span className="euro" data-test-id="cart-total">
          {centsToEuros(total)}
        </span>
      </div>
      <CheckOutButton className={styles.checkOutButton} cartIsEmpty={products.length < 1} />
    </div>
  );
}
