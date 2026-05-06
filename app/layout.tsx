'use client';

import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import { useEffect } from 'react';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata: Metadata = {
  title: 'Vaishnavi Enterprise - Premium Label Printing Solutions',
  description: 'Premium self-adhesive label printing solutions. Quality that sticks. Values that stay.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js');
    }
  }, []);

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="GxgyU5kGE8Jsf35DDbJLx-7tFdFYQEU2kMJjRZEDSaQ"
        />

        {/* ✅ PWA SETTINGS */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#092E20" />
        <link rel="apple-touch-icon" href="/icon-192.png" />
      </head>

      <body
        className="font-sans antialiased bg-white text-[#111111] overflow-x-hidden selection:bg-[#092E20] selection:text-white"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
