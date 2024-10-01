import Link from 'next/link';

export const metadata = {
  title: 'Cart',
  description: 'Shopping Cart.',
};

export default function CartPage() {
  return (
    <div>
      Cart
      <Link href="/checkout">Check Out</Link>
    </div>
  );
}
