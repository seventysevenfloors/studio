import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      d="M16.75 13.96c.25.25.25.65 0 .9l-1.4 1.4c-.25.25-.65.25-.9 0l-1.3-1.3c-.3-.3-.7-.4-1.1-.4h-1.5c-1.4 0-2.6-1.2-2.6-2.6v-1.5c0-.4-.1-.8-.4-1.1l-1.3-1.3c-.25-.25-.25-.65 0-.9l1.4-1.4c.25-.25.65-.25.9 0l1.3 1.3c.3.3.7.4 1.1.4h1.5c1.4 0 2.6 1.2 2.6 2.6v1.5c0 .4.1.8.4 1.1l1.3 1.3zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
    />
  </svg>
);


export function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4">
       <Button asChild size="icon" className="rounded-full w-14 h-14 bg-[#25D366] hover:bg-[#1EBE57] shadow-lg" aria-label="Chat on WhatsApp">
            <Link href="https://wa.me/11234567890" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
            </Link>
        </Button>
      <Button asChild size="icon" className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 shadow-lg" aria-label="Call Us">
        <Link href="tel:+11234567890">
          <Phone className="h-6 w-6" />
        </Link>
      </Button>
    </div>
  );
}
