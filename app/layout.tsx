import './globals.css';

import type { Metadata } from 'next';
import { Montserrat, Raleway } from 'next/font/google';
import { ReactNode } from 'react';

const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' });

const montserrat = Montserrat({ subsets: ['latin'], variable: '--montserrat' });

export const metadata: Metadata = {
  title: 'Web3MA Lab',
  description: 'Web development and digitial marketing platform',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${raleway.variable} font-montserrat`}
      >
        {children}
      </body>
    </html>
  );
}
