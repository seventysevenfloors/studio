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
          <path d="M0 70 V55 H30 V70 Z" />
          <path d="M35 70 V20 L40 15 H70 L75 20 V70 Z" />
          <path d="M80 70 V40 H110 V70 Z" />
          
          {/* "AR" Text */}
          <text
            x="130"
            y="62"
            style={{ fontSize: '60px', fontFamily: 'Georgia, serif' }}
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
