import './globals.css';
import { Press_Start_2P } from 'next/font/google';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const pressStart2P = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-press-start-2p',
});

export const metadata = {
  title: {
    default: 'Home | Custom ARCADE',
    template: '%s | Custom ARCADE',
  },
  description: 'Custom ARCADE - Your truested partner in Arcade Gaming.',
};

export default function RootLayout({ children }: Props) {
  return (
    <html className={pressStart2P.variable} lang="en">
      <body>{children}</body>
    </html>
  );
}
