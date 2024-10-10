'use client';

import styles from './ShopNowCard.module.css';

export default function ShopNowCard({ heading, className }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <h3>{heading}</h3>
      <button>Shop Now</button>
    </div>
  );
}
