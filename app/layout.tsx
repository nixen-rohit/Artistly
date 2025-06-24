import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/components/layout/navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Artistly- Premier Artist Booking Platform',
  description: 'Book top artists and performers for your events across India. Professional artist management and event booking platform.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}