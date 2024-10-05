import './globals.css';
// import localFont from 'next/font/local';
import NavBar from './01-generic-components/NavBar';

// const geistSans = localFont({
//   src: './fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// });
// const geistMono = localFont({
//   src: './fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// });

export const metadata = {
  title: {
    default: 'Home | The Wireless Controller',
    template: '%s | The Wireless Controller',
  },
  description:
    'The Wireless Controller - Your truested partner in microelectronics.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="grit-holy-grail">
          <header>
            <NavBar />
          </header>
          <aside className="sidebar-left">Left</aside>
          <main>{children}</main>
          <aside className="sidebar-right">Right</aside>
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
}
