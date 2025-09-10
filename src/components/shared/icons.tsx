import type { SVGProps } from 'react';

export function LeetcodeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M13.8 2.3L22 9.7V14.3L13.8 21.7L5.6 14.3V9.7L13.8 2.3Z" />
      <path d="M5.6 9.7L13.8 14.3L22 9.7" />
      <path d="M13.8 14.3V21.7" />
    </svg>
  );
}
