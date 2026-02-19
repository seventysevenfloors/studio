import Image from 'next/image';
import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-2B.png"
      alt="Ar Constructions and Real Estate Logo"
      width="190"
      height="42"
      className={cn("object-contain dark:invert", className)}
      priority
    />
  );
}
