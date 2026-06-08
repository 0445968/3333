import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'sun' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-semibold rounded-xl transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants = {
    primary: 'bg-travel-700 hover:bg-travel-800 text-white focus:ring-travel-500',
    secondary: 'bg-white hover:bg-ink-50 text-ink-900 border border-surface-border focus:ring-travel-400',
    outline: 'border-2 border-travel-700 text-travel-700 hover:bg-travel-700 hover:text-white focus:ring-travel-500',
    ghost: 'text-travel-700 hover:bg-travel-50 hover:text-travel-800 focus:ring-travel-400',
    sun: 'bg-sun-300 hover:bg-sun-400 text-ink-900 focus:ring-sun-400',
    danger: 'bg-coral-700 hover:bg-coral-800 text-white focus:ring-coral-500',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  return (
    <button className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </button>
  );
}
