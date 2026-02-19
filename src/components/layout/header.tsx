
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { Logo } from '../logo';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Projects' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // The header is now always solid
  const headerClasses = 'fixed top-0 z-50 w-full bg-background shadow-md';
  
  // Navigation link colors are always for a solid background
  const linkColorClasses = 'font-semibold text-base transition-colors duration-200 text-foreground/70 hover:text-foreground';
  
  // The active link is the primary color
  const activeLinkColorClasses = 'text-primary';

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-24 items-center px-4">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <Button
                key={link.href}
                asChild
                variant="ghost"
                className={cn(
                  'hover:bg-transparent animated-underline',
                  linkColorClasses,
                  pathname === link.href ? activeLinkColorClasses : '',
                )}
              >
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </nav>
        </div>
        <div className='hidden md:block ml-auto'>
          <Button asChild>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden ml-auto">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-foreground/70">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-background p-0">
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-4">
                  <Link href="/" onClick={() => setIsSheetOpen(false)}>
                    <Logo />
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsSheetOpen(false)}>
                     <X className="h-6 w-6" />
                     <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col gap-2 p-4">
                  {navLinks.map((link) => (
                    <Button
                      key={link.href}
                      asChild
                      variant={pathname === link.href ? 'secondary' : 'ghost'}
                      className="justify-start text-lg"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      <Link href={link.href}>{link.label}</Link>
                    </Button>
                  ))}
                </nav>
                 <div className='mt-auto p-4 border-t'>
                  <Button asChild className="w-full">
                    <Link href="/contact" onClick={() => setIsSheetOpen(false)}>Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
