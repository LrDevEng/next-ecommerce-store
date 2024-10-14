import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.company}>
        <ul>
          <li>
            <Link href="/about">© Custom ARCADE</Link>
          </li>
          <li>
            <Link
              href="https://github.com/LrDevEng/next-ecommerce-store"
              target="_blank"
            >
              Example Project
            </Link>
          </li>
          <li>
            <Link
              href="https://github.com/LrDevEng/next-ecommerce-store"
              target="_blank"
            >
              Created by LrDevEng
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.info}>
        <ul>
          <li>
            <Link href="/about">About Us</Link>
          </li>
          <li>
            <Link href="/about">Contact Us</Link>
          </li>
          <li>
            <Link href="/about">Terms of Service</Link>
          </li>
          <li>
            <Link href="/about">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/about">Shipping Policy</Link>
          </li>
        </ul>
      </div>
      <div className={styles.socialMedia}>
        <h3>Follow us</h3>
        <ul>
          <li className={styles.link}>
            <Link href="/about">
              <Image
                src="/icons/icon-facebook.svg"
                alt="About"
                width={48}
                height={48}
              />
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">
              <Image
                src="/icons/icon-instagram.svg"
                alt="About"
                width={48}
                height={48}
              />
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">
              <Image
                src="/icons/icon-twitterx.svg"
                alt="About"
                width={48}
                height={48}
              />
            </Link>
          </li>
          <li className={styles.link}>
            <Link href="/about">
              <Image
                src="/icons/icon-youtube.svg"
                alt="About"
                width={48}
                height={48}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
