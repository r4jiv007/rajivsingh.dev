import './globals.css';
import { Space_Mono } from 'next/font/google';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import React from 'react';

const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-mono',
});

export const metadata: Metadata = {
  title: 'Rajiv Singh - Senior Software Engineer',
  description: 'Portfolio website showcasing my experience as a Senior Software Engineer',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${spaceMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
        <meta name="theme-color" content="#FF5C00" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
} 