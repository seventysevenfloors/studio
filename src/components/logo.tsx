import Image from 'next/image';

export function Logo() {
  return (
    <Image
      src="/logo-2.jpeg"
      alt="Ar Constructions and Real Estate Logo"
      width="190"
      height="42"
      className="object-contain dark:invert"
      priority
    />
  );
}
