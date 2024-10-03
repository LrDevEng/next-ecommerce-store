'use client';

import { useRouter } from 'next/navigation';
import { cartCookieName } from '../02-util/constants';
import { deleteCookie } from '../02-util/cookies';
import styles from './CheckOutForm.module.css';

export default function CheckOutForm() {
  const router = useRouter();

  return (
    <form className={styles.form}>
      <fieldset>
        <legend>Shipping details</legend>
        <table>
          <tbody>
            <tr>
              <td>First name</td>
              <td>
                <input name="firstName" required />
              </td>
            </tr>
            <tr>
              <td>Last name</td>
              <td>
                <input name="lastName" required />
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
                <input name="email" required type="email" />
              </td>
            </tr>
            <tr>
              <td>Street</td>
              <td>
                <input name="street" required />
              </td>
            </tr>
            <tr>
              <td>City</td>
              <td>
                <input name="city" required />
              </td>
            </tr>
            <tr>
              <td>Postal code</td>
              <td>
                <input name="postalCode" required />
              </td>
            </tr>
            <tr>
              <td>Country</td>
              <td>
                <input name="country" required />
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <fieldset>
        <legend>Payment details</legend>
        <table>
          <tbody>
            <tr>
              <td>Credit card number</td>
              <td>
                <input
                  name="cardNumber"
                  required
                  type="tel"
                  pattern="\d*"
                  maxLength="19"
                  placeholder="xxxx xxxx xxxx xxxx"
                />
              </td>
            </tr>
            <tr>
              <td>Expiration date</td>
              <td>
                <input
                  name="expirationDate"
                  required
                  type="tel"
                  pattern="\d*"
                  minLength="4"
                  maxLength="4"
                  placeholder="mmyy"
                />
              </td>
            </tr>
            <tr>
              <td>Security code</td>
              <td>
                <input
                  name="securityCode"
                  required
                  type="tel"
                  pattern="\d*"
                  minLength="3"
                  maxLength="3"
                  placeholder="ccv"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </fieldset>
      <button
        formAction={async () => {
          await deleteCookie(cartCookieName);
          router.push('/order-confirmed');
        }}
      >
        Confirm Order
      </button>
    </form>
  );
}
