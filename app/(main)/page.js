import ShopNowCard from './components/ShopNowCard';
import styles from './page.module.css';

export default function HomePage() {
  return (
    <div className={styles.page}>
      <h2>WELCOME TO</h2>
      <h1>Custom ARCADE</h1>
      <h3>Your trusted platform for building custom arcade machines.</h3>
      <div className={styles.sloganContainer}>
        <h2 className={styles.sloganStart}>Learn.</h2>
        <h2 className={styles.sloganMiddle}>Create.</h2>
        <h2 className={styles.sloganEnd}>Enjoy!</h2>
      </div>
      <h2>GET PARTS</h2>
      <div>
        <ShopNowCard className={styles.red} heading="Controllers" />
        <ShopNowCard className={styles.blue} heading="Buttons" />
        <ShopNowCard className={styles.yellow} heading="Joysticks" />
      </div>
    </div>
  );
}
