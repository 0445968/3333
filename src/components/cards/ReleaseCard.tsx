import { Bell, Calendar } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useLanguage } from '../../i18n/LanguageContext';
import type { MusicRelease } from '../../types';

const TYPE_COLORS: Record<string, string> = {
  Album:         'bg-travel-100 text-travel-800',
  Single:        'bg-aqua-100 text-aqua-800',
  EP:            'bg-sun-100 text-sun-800',
  'Music Video': 'bg-ink-100 text-ink-700',
  'Live Session': 'bg-emerald-100 text-emerald-800',
};

export function ReleaseCard({ release }: { release: MusicRelease }) {
  const { t } = useLanguage();

  return (
    <div className="modern-card-hover">
      <div className="bg-gradient-to-br from-travel-700 to-travel-900 aspect-square flex items-center justify-center relative rounded-t-3xl overflow-hidden">
        <div className="text-white/15 text-5xl font-display font-black">{release.title.charAt(0)}</div>
        <span className={`absolute top-3 right-3 text-xs font-bold px-2 py-0.5 rounded-full ${TYPE_COLORS[release.type] ?? 'bg-ink-100 text-ink-700'}`}>
          {release.type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-display text-ink-900 font-bold text-base leading-tight">{release.title}</h3>
        <p className="text-travel-700 font-semibold text-sm">{release.artist}</p>
        <div className="flex items-center gap-1.5 mt-1.5 text-ink-400 text-xs">
          <Calendar size={11} />
          <span>{release.releaseDate}</span>
        </div>
        <p className="text-ink-600 text-sm mt-2 line-clamp-2">{release.description}</p>
        <Button variant="secondary" size="sm" className="mt-3 w-full justify-center">
          <Bell size={13} />
          {t.music.setReminder}
        </Button>
      </div>
    </div>
  );
}
