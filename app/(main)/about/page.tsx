import styles from './page.module.css';

export const metadata = {
  title: 'About',
  description: 'About page.',
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <h1>About</h1>
      <div>
        <h3>Credits</h3>
        <p>
          This platform is an example project created by <span>LrDevEng.</span>
        </p>
      </div>
      <div>
        <h3>Resources</h3>
        <p>Background image designed by:</p>
        <p>Social media icons designed by:</p>
        <p>Navigation icons designed by:</p>
      </div>
      <div>
        <h3>Product location</h3>
        <p>The product images were taken from the following shops:</p>
        <p>Give them a visit if you would like to pruchase some products.</p>
      </div>
    </div>
  );
}
