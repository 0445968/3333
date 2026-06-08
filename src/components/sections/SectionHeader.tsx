import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  href?: string;
  viewAllLabel?: string;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, href, viewAllLabel = 'View All', light = false, className }: SectionHeaderProps) {
  return (
    <div className={cn('flex items-end justify-between mb-5', className)}>
      <div>
        <h2 className={cn('font-display text-2xl font-bold', light ? 'text-white' : 'text-ink-900')}>
          {title}
        </h2>
        {subtitle && (
          <p className={cn('text-sm mt-0.5', light ? 'text-white/60' : 'muted-text')}>{subtitle}</p>
        )}
      </div>
      {href && (
        <Link
          to={href}
          className={cn(
            'flex items-center gap-1 text-sm font-semibold shrink-0 ml-4 transition-colors',
            light ? 'text-sun-300 hover:text-sun-200' : 'safe-link'
          )}
        >
          {viewAllLabel} <ChevronRight size={15} />
        </Link>
      )}
    </div>
  );
}
