import Footer from '../(main)/components/Footer';
import NavBar from '../(main)/components/NavBar';
import CartPreview from './shop/CartPreview';
import ProductFilter from './shop/ProductFilter';

export default function ShopLayout({ children }) {
  return (
    <div className="grit-holy-grail">
      <header>
        <NavBar />
      </header>
      <aside className="sidebar-left">
        <ProductFilter />
      </aside>
      <main>{children}</main>
      <aside className="sidebar-right">
        <CartPreview />
      </aside>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
