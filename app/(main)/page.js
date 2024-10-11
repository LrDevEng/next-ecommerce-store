import Link from 'next/link';
import { productType } from '../util/constants';
import ShopNowCard from './components/ShopNowCard';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <h2>WELCOME TO</h2>
      <h1>Custom ARCADE</h1>
      <p className={styles.sloganPlatform}>
        Your trusted platform for building custom arcade machines.
      </p>
      <div className={styles.sloganContainer}>
        <h2 className={styles.sloganStart}>Learn.</h2>
        <h2 className={styles.sloganMiddle}>Create.</h2>
        <h2 className={styles.sloganEnd}>Enjoy!</h2>
      </div>
      <h2>GET PARTS</h2>
      <div className={styles.shopNow}>
        <ShopNowCard
          className={styles.shopNowStart}
          heading="Controllers"
          productType={productType.microcontroller}
        />
        <ShopNowCard
          className={styles.shopNowMiddle}
          heading="Buttons"
          productType={productType.button}
        />
        <ShopNowCard
          className={styles.shopNowEnd}
          heading="Joysticks"
          productType={productType.joystick}
        />
      </div>
      <div className={styles.blog}>
        <h2>Featured Blog Post</h2>
        <div className={styles.blogPost}>Area for featured blog post.</div>
        <Link href="/blog">Read more.</Link>
      </div>
      <div className={styles.snake}>
        <h2>Play a game of Snake</h2>
        <div className={styles.snakeArea}>Area for snake game.</div>
      </div>
    </div>
  );
}
