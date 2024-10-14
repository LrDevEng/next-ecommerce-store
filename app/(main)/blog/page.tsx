import styles from './page.module.css';

export const metadata = {
  title: 'Blog',
  description: 'Blog page.',
};

export default function BlogPage() {
  return (
    <div className={styles.page}>
      <h1>Placeholder for awesome blog page.</h1>
    </div>
  );
}
