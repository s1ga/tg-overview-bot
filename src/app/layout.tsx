import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { Roboto } from 'next/font/google';
import ModalRenderer from '@/app/components/modal-renderer';
import './globals.css';
import StoreProvider from '@/app/StoreProvider';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Telegram bot notifier',
  description: 'Create Telegram notifier bot',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <StoreProvider>
      <html lang="en" className={roboto.className}>
        <body>
          <AppRouterCacheProvider>
            {children}

            <ModalRenderer />
          </AppRouterCacheProvider>
        </body>
      </html>
    </StoreProvider>
  );
}
