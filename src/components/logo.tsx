import type { SVGProps } from 'react';

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 450 100"
      width="190"
      height="42"
      aria-label="AR Construction & Real Estates Logo"
      {...props}
    >
      <g className="fill-current text-current">
        {/* Main part: buildings and AR */}
        <g>
          {/* Buildings */}
          <path d="M0 70 L0 50 L40 50 L40 70 Z" />
          <path d="M45 70 L45 25 L95 25 L95 70 Z" />
          <path d="M100 70 L100 10 L150 10 L150 70 Z" />
          {/* "AR" Text */}
          <text
            x="175"
            y="62"
            className="font-headline"
            style={{ fontSize: '60px', fontWeight: 'bold' }}
          >
            AR
          </text>
        </g>
        {/* Tagline below */}
        <text
          x="0"
          y="90"
          className="font-body"
          style={{ fontSize: '14px', letterSpacing: '1px' }}
        >
          CONSTRUCTION & REAL ESTATES
        </text>
      </g>
    </svg>
  );
}
