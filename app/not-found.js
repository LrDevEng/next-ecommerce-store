import Link from 'next/link';

export default function RootNotFound() {
  return (
    <div className="grit-holy-grail">
      <header />
      <aside className="sidebar-left" />
      <main>
        <div>
          Sorry this page was not found make sure you visit a page that exists
          <br />
          <br />
          <div>
            <Link href="/">Return Home</Link>
          </div>
        </div>
      </main>
      <aside className="sidebar-right" />
    </div>
  );
}
