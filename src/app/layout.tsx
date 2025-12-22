import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { FloatingContactButtons } from '@/components/floating-contact-buttons';

export const metadata: Metadata = {
  title: 'seventysevenfloors | Construction & Development',
  description: 'Building the future, one project at a time. Your trusted partner in residential, commercial, and industrial construction.',
  keywords: ['construction', 'building', 'residential', 'commercial', 'industrial', 'seventysevenfloors']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet" />
      </head>
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
