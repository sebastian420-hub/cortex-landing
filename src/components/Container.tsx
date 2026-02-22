import React, { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}

export default function Container({ children, className = '', as: As = 'div' }: ContainerProps) {
  return (
    <As className={`container mx-auto px-6 ${className}`}>
      {children}
    </As>
  );
}