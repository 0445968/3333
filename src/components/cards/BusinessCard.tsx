import { Link } from 'react-router-dom';
import { Star, MapPin } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import type { Business } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';

export function BusinessCard({ business }: { business: Business }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl border border-sand-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="bg-gradient-to-br from-navy-700 to-turquoise-700 h-24 flex items-end p-3">
        <div>
          <span className="text-white/60 text-xs uppercase tracking-wider">{business.category}</span>
          {business.featured && (
            <span className="ml-2 bg-sand-400 text-white text-xs px-2 py-0.5 rounded-full font-medium">Featured</span>
          )}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display text-navy-900 font-bold text-base">{business.name}</h3>
        <div className="flex items-center gap-2 mt-1">
          <Badge label={business.category} />
          <span className="flex items-center gap-0.5 text-navy-400 text-xs">
            <MapPin size={11} /> {business.island}
          </span>
        </div>
        <p className="text-navy-500 text-sm mt-2 line-clamp-2">{business.description}</p>
        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1">
            <Star size={13} className="text-sand-500 fill-sand-500" />
            <span className="text-navy-700 text-sm font-semibold">{business.rating}</span>
          </div>
          <Link to={`/directory/${business.slug}`}>
            <Button variant="outline" size="sm">{t.viewProfile}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
