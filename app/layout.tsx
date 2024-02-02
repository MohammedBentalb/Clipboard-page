import type { Metadata } from 'next';
// eslint-disable-next-line camelcase
import { Bai_Jamjuree } from 'next/font/google';
import './globals.css';
import React from 'react';

const baiJamjuree = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Frontend Mentor | Clipboard',
  description: 'Clipboard landing page',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link
        rel="shortcut icon"
        href="/images/favicon-32x32.png"
        type="image/x-icon"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0"
      />
      <meta name="description" content="Clipboard landing page design" />
      <body className={baiJamjuree.className}>{children}</body>
    </html>
  );
}
