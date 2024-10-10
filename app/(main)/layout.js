import '../globals.css';
import { Press_Start_2P } from 'next/font/google';
// import localFont from 'next/font/local';
import NavBar from './components/NavBar';

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

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
});

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
    <html className={pressStart2P.variable} lang="en">
      <body>
        <div className="grit-holy-grail">
          <header>
            <NavBar />
          </header>
          <aside className="sidebar-left" />
          <main>{children}</main>
          <aside className="sidebar-right">Standard Right Aside</aside>
          <footer>Footer</footer>
        </div>
      </body>
    </html>
  );
}
