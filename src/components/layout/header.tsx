
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

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
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state if user scrolls down more than 10 pixels
      setIsScrolled(window.scrollY > 10);
    };
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Clean up event listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';

  // Base classes for the header
  const headerClasses = cn(
    'fixed top-0 z-50 w-full transition-all duration-300',
    // Apply solid background and shadow if scrolled or not on the homepage
    isScrolled || !isHomePage
      ? 'bg-card shadow-md'
      : 'bg-transparent'
  );
  
  // Dynamic classes for navigation link colors
  const linkColorClasses = cn(
      'font-semibold text-base transition-colors duration-200',
      isScrolled || !isHomePage
      ? 'text-foreground/70 hover:text-accent-foreground hover:underline' // Scrolled or not on home
      : 'text-primary-foreground/80 hover:text-primary-foreground hover:underline' // Top of homepage
  );
  
  // Dynamic classes for the currently active navigation link
  const activeLinkColorClasses = cn(
      'bg-transparent',
      isScrolled || !isHomePage
      ? 'text-accent-foreground underline' // Scrolled or not on home
      : 'text-primary-foreground underline' // Top of homepage
  );

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          {/* Logo color changes based on scroll/page */}
          <Logo className={cn(isScrolled || !isHomePage ? 'text-primary' : 'text-primary-foreground')} />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button
              key={link.href}
              asChild
              variant="ghost"
              className={cn(
                'hover:bg-transparent',
                linkColorClasses,
                // Apply active or default link styles
                pathname === link.href && activeLinkColorClasses,
              )}
            >
              <Link href={link.href}>{link.label}</Link>
            </Button>
          ))}
        </nav>
        <div className='hidden md:block'>
          <Button asChild className={cn( isHomePage && !isScrolled && 'bg-white text-primary hover:bg-white/90')}>
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Navigation (Hamburger Menu) */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn('hover:bg-white/10', linkColorClasses)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] bg-card p-0">
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
