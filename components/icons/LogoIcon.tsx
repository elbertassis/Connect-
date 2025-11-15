
import React from 'react';

const LogoIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M62.5 12.5L75 25L37.5 62.5L25 50L62.5 12.5Z" fill="currentColor" className="text-secondary" />
    <path d="M50 37.5L25 62.5L37.5 75L50 62.5L62.5 75L75 62.5L50 37.5Z" fill="currentColor" className="text-primary" />
    <path d="M37.5 25C44.4036 25 50 19.4036 50 12.5H37.5C30.5964 12.5 25 18.0964 25 25V37.5C18.0964 37.5 12.5 43.0964 12.5 50V62.5H25V50C25 43.0964 30.5964 37.5 37.5 37.5V25Z" fill="currentColor" className="text-primary" />
  </svg>
);

export default LogoIcon;
