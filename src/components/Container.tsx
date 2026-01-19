import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export default function Container({ children, className = '', as = 'div' }: ContainerProps) {
  const As = as as any;
  
  return (
    <As className={`container mx-auto px-6 ${className}`}>
      {children}
    </As>
  );
}