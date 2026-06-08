import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'coral' | 'navy';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-turquoise-600 hover:bg-turquoise-700 text-white focus:ring-turquoise-500',
    secondary: 'bg-navy-800 hover:bg-navy-900 text-white focus:ring-navy-600',
    outline: 'border-2 border-navy-800 text-navy-800 hover:bg-navy-800 hover:text-white focus:ring-navy-600',
    ghost: 'text-navy-700 hover:bg-navy-50 focus:ring-navy-400',
    coral: 'bg-coral-500 hover:bg-coral-600 text-white focus:ring-coral-400',
    navy: 'bg-navy-900 hover:bg-navy-950 text-white focus:ring-navy-700',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
