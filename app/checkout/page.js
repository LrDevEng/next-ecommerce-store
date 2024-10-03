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
        Check Out
        <CheckOutForm />
      </div>
    </div>
  );
}
