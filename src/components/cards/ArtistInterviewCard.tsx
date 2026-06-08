import { Mic2 } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { formatShortDate } from '../../lib/utils';
import { useLanguage } from '../../i18n/LanguageContext';
import type { ArtistInterview } from '../../types';

export function ArtistInterviewCard({ interview }: { interview: ArtistInterview }) {
  const { t } = useLanguage();

  return (
    <div className="modern-card-hover">
      <div className="bg-gradient-to-br from-travel-700 to-ink-800 aspect-[3/2] flex items-end p-3 rounded-t-xl overflow-hidden">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
            <Mic2 size={14} className="text-white" />
          </div>
          <span className="text-white/60 text-xs font-medium">Interview</span>
        </div>
      </div>
      <div className="p-4">
        <Badge label={interview.category} />
        <h3 className="font-display text-ink-900 font-bold text-base mt-2 leading-snug">{interview.title}</h3>
        <p className="text-travel-700 font-semibold text-sm">{interview.artistName}</p>
        <p className="text-ink-600 text-sm mt-2 italic line-clamp-3">{interview.excerpt}</p>
        <div className="flex items-center justify-between mt-3 pt-3 border-t border-surface-border">
          <span className="text-ink-400 text-xs">{formatShortDate(interview.publishedAt)}</span>
          <Button variant="primary" size="sm">{t.music.readInterview}</Button>
        </div>
      </div>
    </div>
  );
}
