import type { ReactNode } from 'react';
import Footer from './components/Footer';
import NavBar from './components/NavBar';

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="grit-holy-grail">
      <header>
        <NavBar />
      </header>
      <aside className="sidebar-left" />
      <main>{children}</main>
      <aside className="sidebar-right" />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
