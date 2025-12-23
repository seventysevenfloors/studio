import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { Logo } from '../logo';
import { Button } from '../ui/button';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const socialLinks = [
  { icon: <Facebook className="h-5 w-5" />, href: '#', label: 'Facebook' },
  { icon: <Twitter className="h-5 w-5" />, href: '#', label: 'Twitter' },
  { icon: <Linkedin className="h-5 w-5" />, href: '#', label: 'LinkedIn' },
  { icon: <Instagram className="h-5 w-5" />, href: '#', label: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          <div className="space-y-4">
            <Logo className="fill-primary-foreground" />
            <p className="text-primary-foreground/80">
              Building the future, one project at a time. Your trusted partner in construction.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button key={social.label} asChild variant="ghost" size="icon" className="text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground">
                  <a href={social.href} aria-label={social.label}>
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-primary-foreground/80">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mt-1 mr-3 shrink-0" />
                <span>123 Construction Ave, Builder City, 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-3 shrink-0" />
                <a href="tel:+918367447870" className="hover:text-primary-foreground">+91 8367447870</a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-3 shrink-0" />
                <a href="mailto:contact@seventysevenfloors.com" className="hover:text-primary-foreground">contact@seventysevenfloors.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-headline text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-primary-foreground/80 mb-4">
              Stay updated with our latest projects and news.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full rounded-l-md border-0 bg-primary-foreground/20 px-4 py-2 text-primary-foreground placeholder-primary-foreground/60 focus:ring-2 focus:ring-accent"
              />
              <Button type="submit" className="rounded-l-none bg-accent hover:bg-accent/90">
                Subscribe
              </Button>
            </form>
          </div>

        </div>
        
        <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} seventysevenfloors. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
