import NavBar from './components/NavBar';

export default function MainLayout({ children }) {
  return (
    <div className="grit-holy-grail">
      <header>
        <NavBar />
      </header>
      <aside className="sidebar-left" />
      <main>{children}</main>
      <aside className="sidebar-right" />
      <footer>Footer</footer>
    </div>
  );
}
