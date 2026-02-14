import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 230 50"
      width="190"
      height="30"
      aria-label="AR Constructions Logo"
      {...props}
    >
      <g>
        <path
          d="M0 50 L20 10 L40 50 L30 50 L20 27 L10 50 Z"
          className="fill-accent"
        />
        <text
          x="48"
          y="38"
          className="font-headline text-[22px] font-bold tracking-tight"
        >
          AR Constructions
        </text>
      </g>
    </svg>
  );
}
