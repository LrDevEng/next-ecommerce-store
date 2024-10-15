import Footer from './(main)/components/Footer';
import LoadingSpinner from './(main)/components/LoadingSpinner';
import NavBar from './(main)/components/NavBar';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className="grit-holy-grail">
      <header>
        <NavBar />
      </header>
      <aside className="sidebar-left" />
      <main>
        <div className={styles.container}>
          <div className={styles.text}>Loading ...</div>
          <div className={styles.spinner}>
            <LoadingSpinner />
          </div>
        </div>
      </main>
      <aside className="sidebar-right" />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
