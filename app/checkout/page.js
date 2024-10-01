import Link from 'next/link';

export const metadata = {
  title: 'Check Out',
  description: 'Check out.',
};

export default function CheckoutPage() {
  return (
    <div>
      Confirm
      <Link href="order-confirmed">Confirm Order</Link>
    </div>
  );
}
