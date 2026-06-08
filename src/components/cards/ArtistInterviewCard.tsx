import { Mic2 } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { formatShortDate } from '../../lib/utils';
import { useLanguage } from '../../i18n/LanguageContext';
import type { ArtistInterview } from '../../types';

export function ArtistInterviewCard({ interview }: { interview: ArtistInterview }) {
  const { t } = useLanguage();

  return (
    <div className="bg-white rounded-xl border border-sand-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="bg-gradient-to-br from-navy-800 to-coral-800 aspect-[3/2] flex items-end p-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <Mic2 size={14} className="text-white" />
          </div>
          <span className="text-white/70 text-xs font-medium">Artist Interview</span>
        </div>
      </div>
      <div className="p-4">
        <Badge label={interview.category} />
        <h3 className="font-display text-navy-900 font-bold text-base mt-2 leading-snug">{interview.title}</h3>
        <p className="text-turquoise-700 font-medium text-sm">{interview.artistName}</p>
        <p className="text-navy-500 text-sm mt-2 italic line-clamp-3">{interview.excerpt}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-navy-400 text-xs">{formatShortDate(interview.publishedAt)}</span>
          <Button variant="outline" size="sm">{t.music.readInterview}</Button>
        </div>
      </div>
    </div>
  );
}
