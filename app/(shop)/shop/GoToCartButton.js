'use client';

import { useRouter } from 'next/navigation';

export default function CheckOutButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => {
        router.push('/cart');
      }}
    >
      Go To Cart
    </button>
  );
}
