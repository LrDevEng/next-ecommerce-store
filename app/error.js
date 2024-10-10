'use client';

import Link from 'next/link';
import NavBar from './(main)/components/NavBar.js';

export default function RootError() {
  return (
    <div className="grit-holy-grail">
      <header>
        <NavBar />
      </header>
      <aside className="sidebar-left" />
      <main>
        <div>
          Ups ... something went wrong.
          <div>
            <Link href="/">Return Home</Link>
          </div>
        </div>
      </main>
      <aside className="sidebar-right">Standard Right Aside</aside>
      <footer>Footer</footer>
    </div>
  );
}
