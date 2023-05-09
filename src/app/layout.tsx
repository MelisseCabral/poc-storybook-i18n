'use client';
import { Inter } from 'next/font/google';
import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import './globals.css';
import i18n from './i18n';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Suspense fallback={<div>loading translations...</div>}>
        <I18nextProvider i18n={i18n}>
          <body className={inter.className}>{children}</body>
        </I18nextProvider>
      </Suspense>
    </html>
  );
}
