import Link from 'next/link';
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
        <br />
        <h2>Credits</h2>
        <p>
          This website is a full stack example project of an e-commerce platform
          <br />
          created by software developer{' '}
          <Link href="https://github.com/LrDevEng" target="_blank">
            LrDevEng
          </Link>
          .
        </p>
        <p>
          View the project on{' '}
          <Link
            href="https://github.com/LrDevEng/next-ecommerce-store"
            target="_blank"
          >
            GitHub
          </Link>
          .
        </p>
      </div>
      <br />
      <div>
        <h2>Disclaimer</h2>
        <p>
          This is not a real shop. The presented products cannot be purchased on
          this website. Sole purpose of this project is to showcase the
          development and setup of a full stack web application.
        </p>
      </div>
      <br />
      <div>
        <h2>Resources</h2>
        <p>
          Background image designed by:{' '}
          <Link href="http://www.freepik.com/" target="_blank">
            Freepik
          </Link>
        </p>
        <p>Social media icons designed by: </p>
        <p>
          Navigation icons designed by:{' '}
          <Link href="https://fonts.google.com/icons" target="_blank">
            Google
          </Link>
        </p>
      </div>
      <br />
      <div>
        <h2>Product Samples</h2>
        <p>
          The product images and prices were copied from the following shops
          (October 2024):
        </p>
        <br />
        <ul>
          <li>
            <Link href="https://berrybase.at/" target="_blank">
              https://berrybase.at/
            </Link>
          </li>
          <li>
            <Link href="https://paradisearcadeshop.com/" target="_blank">
              https://paradisearcadeshop.com/
            </Link>
          </li>
          <li>
            <Link href="https://botland.de/" target="_blank">
              https://botland.de/
            </Link>
          </li>
        </ul>
        <br />
        <p>Give them a visit if you would like to pruchase the products.</p>
      </div>
    </div>
  );
}
