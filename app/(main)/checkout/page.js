import CheckOutForm from './CheckOutForm';
import styles from './page.module.css';

export const metadata = {
  title: 'Check Out',
  description: 'Check out.',
};

export default function CheckoutPage() {
  return (
    <div className={styles.page}>
      <div>
        <h1>Check Out</h1>
        <CheckOutForm />
      </div>
    </div>
  );
}
