import { Link } from 'react-router-dom';
import { Megaphone } from 'lucide-react';
import type { Ad } from '../../types';

interface AdBannerProps {
  ad: Ad;
  variant?: 'banner' | 'sidebar';
}

const GRADIENTS: Record<string, string> = {
  'coral-reef-ad':  'from-turquoise-700 to-navy-800',
  'restaurant-ad':  'from-palm-700 to-sand-700',
  'lodge-ad':       'from-sand-600 to-navy-800',
  'self-promo':     'from-coral-600 to-navy-900',
};

export function AdBanner({ ad, variant = 'banner' }: AdBannerProps) {
  const gradient = GRADIENTS[ad.image] ?? 'from-navy-700 to-turquoise-700';

  if (variant === 'sidebar') {
    return (
      <Link to={ad.url} className={`block rounded-xl bg-gradient-to-br ${gradient} p-4 text-white hover:opacity-90 transition-opacity`}>
        <div className="flex items-center gap-2 mb-2">
          <Megaphone size={14} className="text-white/60" />
          <span className="text-white/50 text-xs uppercase tracking-wider">Sponsored</span>
        </div>
        <p className="font-semibold text-sm leading-snug">{ad.title}</p>
        <p className="text-white/60 text-xs mt-1">{ad.sponsor}</p>
      </Link>
    );
  }

  return (
    <Link to={ad.url} className={`block rounded-xl bg-gradient-to-r ${gradient} p-5 text-white hover:opacity-90 transition-opacity`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Megaphone size={14} className="text-white/60" />
            <span className="text-white/50 text-xs uppercase tracking-wider">Advertisement</span>
          </div>
          <p className="font-display font-bold text-lg">{ad.title}</p>
          <p className="text-white/70 text-sm">{ad.sponsor}</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-white/20 hover:bg-white/30 transition-colors rounded-lg px-4 py-2 shrink-0">
          <span className="text-white text-sm font-medium">Learn More</span>
        </div>
      </div>
    </Link>
  );
}
