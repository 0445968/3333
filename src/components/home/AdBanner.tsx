import { Link } from 'react-router-dom';
import { Megaphone } from 'lucide-react';
import type { Ad } from '../../types';

const BG: Record<string, string> = {
  'coral-reef-ad': 'bg-travel-700',
  'restaurant-ad': 'bg-travel-800',
  'lodge-ad':      'bg-skybrand-700',
  'self-promo':    'bg-ink-800',
};

interface AdBannerProps {
  ad: Ad;
  variant?: 'banner' | 'sidebar';
}

export function AdBanner({ ad, variant = 'banner' }: AdBannerProps) {
  const bg = BG[ad.image] ?? 'bg-travel-700';

  if (variant === 'sidebar') {
    return (
      <Link to={ad.url} className={`block modern-card ${bg} p-4 text-white hover:opacity-90 transition-opacity`}>
        <div className="flex items-center gap-2 mb-2">
          <Megaphone size={13} className="text-white/50" />
          <span className="text-white/50 text-xs uppercase tracking-wider">Sponsored</span>
        </div>
        <p className="font-semibold text-sm leading-snug text-white">{ad.title}</p>
        <p className="text-white/60 text-xs mt-1">{ad.sponsor}</p>
      </Link>
    );
  }

  return (
    <Link to={ad.url} className={`block rounded-xl ${bg} p-5 text-white hover:opacity-90 transition-opacity`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Megaphone size={13} className="text-white/50" />
            <span className="text-white/50 text-xs uppercase tracking-wider">Advertisement</span>
          </div>
          <p className="font-display font-bold text-lg text-white">{ad.title}</p>
          <p className="text-white/70 text-sm">{ad.sponsor}</p>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-white/15 hover:bg-white/25 transition-colors rounded-xl px-4 py-2 shrink-0">
          <span className="text-white text-sm font-semibold">Learn More</span>
        </div>
      </div>
    </Link>
  );
}
