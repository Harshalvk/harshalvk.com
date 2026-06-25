import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import AppProvider from '@/components/Providers/AppProvider';
import { Analytics } from '@vercel/analytics/next';

import '@/styles/globals.css';

import { defaultWebsiteMetadata } from '@/config/metadata';

export const metadata: Metadata = defaultWebsiteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} flex min-h-svh w-screen flex-col font-sans antialiased`}
      >
        <Analytics />
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
