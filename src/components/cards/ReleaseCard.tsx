import { Bell, Calendar } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { CATEGORY_GRADIENT } from '../../lib/utils';
import { useLanguage } from '../../i18n/LanguageContext';
import type { MusicRelease } from '../../types';

export function ReleaseCard({ release }: { release: MusicRelease }) {
  const { t } = useLanguage();

  const typeColors: Record<string, string> = {
    Album: 'bg-navy-100 text-navy-800',
    Single: 'bg-turquoise-100 text-turquoise-800',
    EP: 'bg-coral-100 text-coral-800',
    'Music Video': 'bg-sand-100 text-sand-800',
    'Live Session': 'bg-palm-100 text-palm-800',
  };

  return (
    <div className="bg-white rounded-xl border border-sand-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-br from-coral-700 to-navy-900 aspect-square flex items-center justify-center relative">
        <div className="text-white/20 text-5xl font-display font-black">{release.title.charAt(0)}</div>
        <span className={`absolute top-3 right-3 text-xs font-semibold px-2 py-0.5 rounded-full ${typeColors[release.type] ?? 'bg-gray-100 text-gray-700'}`}>
          {release.type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-navy-900 font-bold text-base leading-tight">{release.title}</h3>
        <p className="text-turquoise-700 font-medium text-sm">{release.artist}</p>
        <div className="flex items-center gap-1.5 mt-1.5 text-navy-400 text-xs">
          <Calendar size={11} />
          <span>{release.releaseDate}</span>
        </div>
        <p className="text-navy-500 text-sm mt-2 line-clamp-2">{release.description}</p>
        <Button variant="ghost" size="sm" className="mt-3 w-full justify-center border border-sand-200">
          <Bell size={13} />
          {t.music.setReminder}
        </Button>
      </div>
    </div>
  );
}
