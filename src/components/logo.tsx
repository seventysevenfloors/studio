import Image from 'next/image';

export function Logo() {
  return (
    <div className="relative" style={{ width: 190, height: 42 }}>
      <Image
        src="/imageByMe/logo.jpg"
        alt="Ar Constructions and Real Estate Logo"
        fill
        sizes="190px"
        className="object-contain"
        priority
      />
    </div>
  );
}
