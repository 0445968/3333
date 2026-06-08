import { cn, getCategoryColor } from '../../lib/utils';

interface BadgeProps {
  label: string;
  variant?: 'category' | 'tag';
  className?: string;
}

export function Badge({ label, variant = 'category', className }: BadgeProps) {
  if (variant === 'category') {
    return (
      <span className={cn('inline-block px-2.5 py-0.5 text-xs font-bold rounded-full uppercase tracking-wide', getCategoryColor(label), className)}>
        {label}
      </span>
    );
  }
  return (
    <span className={cn('inline-block px-2.5 py-0.5 text-xs font-semibold rounded-full uppercase tracking-wide bg-ink-100 text-ink-700', className)}>
      {label}
    </span>
  );
}

interface MovementBadgeProps {
  movement: 'up' | 'down' | 'same' | 'new' | 'reentry';
  newLabel?: string;
  reentryLabel?: string;
}

export function MovementBadge({ movement, newLabel = 'NEW', reentryLabel = 'RE' }: MovementBadgeProps) {
  if (movement === 'new') {
    return <span className="inline-block px-2 py-0.5 text-xs font-bold rounded bg-travel-700 text-white">{newLabel}</span>;
  }
  if (movement === 'reentry') {
    return <span className="inline-block px-2 py-0.5 text-xs font-bold rounded bg-sun-300 text-ink-900">{reentryLabel}</span>;
  }
  if (movement === 'up') {
    return <span className="text-emerald-700 font-bold text-sm">▲</span>;
  }
  if (movement === 'down') {
    return <span className="text-coral-700 font-bold text-sm">▼</span>;
  }
  return <span className="text-ink-400 font-bold text-sm">—</span>;
}
