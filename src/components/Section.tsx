'use client';

import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  bgColor?: 'bg' | 'bgSecondary' | 'transparent';
  id?: string;
}

export default function Section({ children, className = '', bgColor = 'bg', id }: SectionProps) {
  const bgColorMap = {
    bg: 'bg-bg',
    bgSecondary: 'bg-bgSecondary',
    transparent: 'bg-transparent',
  };

  return (
    <section
      id={id}
      className={`${bgColorMap[bgColor]} ${className}`}
    >
      {children}
    </section>
  );
}