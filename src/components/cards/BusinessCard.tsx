import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import type { Business } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

export function BusinessCard({ business }: { business: Business }) {
  const { t } = useLanguage();

  return (
    <div className="modern-card-hover">
      <div className="bg-gradient-to-br from-travel-700 to-travel-900 h-20 rounded-t-xl flex items-end p-3 relative">
        <span className="text-white/40 text-xs uppercase tracking-wider">{business.category}</span>
        {business.featured && (
          <span className="absolute top-3 right-3 bg-sun-300 text-ink-900 text-xs font-bold px-2 py-0.5 rounded-full">Featured</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-ink-900 font-bold text-base">{business.name}</h3>
        <div className="flex items-center gap-2 mt-1 flex-wrap">
          <Badge label={business.category} />
          <span className="flex items-center gap-0.5 text-ink-500 text-xs">
            <MapPin size={11} /> {business.island}
          </span>
        </div>
        <p className="text-ink-600 text-sm mt-2 line-clamp-2">{business.description}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-surface-border">
          <div className="flex items-center gap-1">
            <Star size={13} className="text-sun-500 fill-sun-500" />
            <span className="text-ink-700 text-sm font-semibold">{business.rating}</span>
          </div>
          <Link to={`/directory/${business.slug}`}>
            <Button variant="primary" size="sm">{t.viewProfile}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
