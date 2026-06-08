import { cn } from '../../lib/utils';

interface ImagePlaceholderProps {
  label?: string;
  gradient?: string;
  className?: string;
  aspect?: string;
}

export function ImagePlaceholder({ label, gradient = 'from-navy-700 to-turquoise-700', className, aspect = 'aspect-video' }: ImagePlaceholderProps) {
  return (
    <div className={cn(`bg-gradient-to-br ${gradient} flex items-end justify-start p-3`, aspect, className)}>
      {label && (
        <span className="text-white/60 text-xs font-medium uppercase tracking-wider">{label}</span>
      )}
    </div>
  );
}
