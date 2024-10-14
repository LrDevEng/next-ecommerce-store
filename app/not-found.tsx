import Link from 'next/link';
import Footer from './(main)/components/Footer';
import NavBar from './(main)/components/NavBar';

export default function NotFound() {
  return (
    <div className="grit-holy-grail">
      <header>
        <NavBar />
      </header>
      <aside className="sidebar-left" />
      <main>
        <div>
          Sorry this page does not exist.
          <br />
          <br />
          Please make sure you enter a valid URL. Thank you.
          <br />
          <br />
          <div>
            <Link href="/">Return Home</Link>
          </div>
        </div>
      </main>
      <aside className="sidebar-right">Standard Right Aside</aside>
      <footer>
        <Footer />
      </footer>
    </div>
  );

  // return (
  //   <div className="grit-holy-grail">
  //     <header />
  //     <aside className="sidebar-left" />
  //     <main>
  //       <div>
  //         Sorry this page was not found make sure you visit a page that exists
  //         <br />
  //         <br />
  //         <div>
  //           <Link href="/">Return Home</Link>
  //         </div>
  //       </div>
  //     </main>
  //     <aside className="sidebar-right" />
  //   </div>
  // );
}
