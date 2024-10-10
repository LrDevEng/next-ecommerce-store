import NavBar from '../(main)/components/NavBar.js';
import CartPreview from './shop/CartPreview';

export default function ShopLayout({ children }) {
  return (
    <div className="grit-holy-grail">
      <header>
        <NavBar />
      </header>
      <aside className="sidebar-left" />
      <main>{children}</main>
      <aside className="sidebar-right">
        <CartPreview />
      </aside>
      <footer>Footer</footer>
    </div>
  );
}
