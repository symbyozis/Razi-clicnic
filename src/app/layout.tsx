import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { PrimeReactProvider } from 'primereact/api';

const inter = Inter({ subsets: ['latin', 'cyrillic'] });

export const metadata: Metadata = {
  title: 'Razi Clinic - Медицинский центр',
  description: 'Современная медицинская клиника с опытными специалистами',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
      </body>
    </html>
  );
}
