import type { Metadata } from 'next';
import { PT_Sans, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { FloatingContactButtons } from '@/components/floating-contact-buttons';
import { cn } from '@/lib/utils';

const ptSans = PT_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-pt-sans',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'AR Constructions and Real Estate | Construction & Development',
  description: 'Building the future, one project at a time. Your trusted partner in residential, commercial, and industrial construction.',
  keywords: ['construction', 'real estate', 'building', 'residential', 'commercial', 'industrial', 'Ar Constructions']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("!scroll-smooth", ptSans.variable, spaceGrotesk.variable)}>
      <body className="font-body antialiased">
        <Header />
        <main>{children}</main>
        <FloatingContactButtons />
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
