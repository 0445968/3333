import { cn, getCategoryColor } from '../../lib/utils';

interface BadgeProps {
  label: string;
  variant?: 'category' | 'movement' | 'tag';
  className?: string;
}

export function Badge({ label, variant = 'category', className }: BadgeProps) {
  if (variant === 'category') {
    return (
      <span className={cn('inline-block px-2 py-0.5 text-xs font-semibold rounded-full uppercase tracking-wide', getCategoryColor(label), className)}>
        {label}
      </span>
    );
  }
  return (
    <span className={cn('inline-block px-2 py-0.5 text-xs font-semibold rounded-full uppercase tracking-wide bg-sand-100 text-sand-800', className)}>
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
    return <span className="inline-block px-2 py-0.5 text-xs font-bold rounded bg-coral-500 text-white">{newLabel}</span>;
  }
  if (movement === 'reentry') {
    return <span className="inline-block px-2 py-0.5 text-xs font-bold rounded bg-sand-400 text-white">{reentryLabel}</span>;
  }
  if (movement === 'up') {
    return <span className="text-palm-600 font-bold text-sm">▲</span>;
  }
  if (movement === 'down') {
    return <span className="text-coral-500 font-bold text-sm">▼</span>;
  }
  return <span className="text-gray-400 font-bold text-sm">—</span>;
}
