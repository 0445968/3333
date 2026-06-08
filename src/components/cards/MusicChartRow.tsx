import { TrendingUp, TrendingDown, Minus, Sparkles, PlayCircle } from 'lucide-react';
import { MovementBadge } from '../ui/Badge';
import { CATEGORY_GRADIENT } from '../../lib/utils';
import { useLanguage } from '../../i18n/LanguageContext';
import type { MusicTrack } from '../../types';

interface ChartRowProps {
  track: MusicTrack;
  featured?: boolean;
}

export function MusicChartRow({ track, featured = false }: ChartRowProps) {
  const { t } = useLanguage();
  const gradient = CATEGORY_GRADIENT['music'] ?? 'from-coral-600 to-navy-900';

  if (featured) {
    return (
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-navy-900 via-navy-800 to-turquoise-900 p-5 md:p-6 shadow-xl border border-turquoise-700/30">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={16} className="text-sand-400" />
          <span className="text-sand-400 text-xs font-bold uppercase tracking-widest">{t.music.trackNo1}</span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="font-display text-6xl md:text-7xl font-black text-turquoise-500/30 select-none leading-none">1</div>
          <div className={`w-20 h-20 md:w-24 md:h-24 rounded-xl bg-gradient-to-br ${gradient} shrink-0 flex items-center justify-center`}>
            <PlayCircle size={32} className="text-white/60" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-white font-bold text-xl md:text-2xl leading-tight">{track.title}</h3>
            <p className="text-turquoise-300 font-medium mt-0.5">{track.artist}</p>
            <p className="text-white/50 text-sm">{track.genre} · {track.island}</p>
            <div className="flex items-center gap-4 mt-3 text-white/40 text-xs">
              <span>{t.music.peak}: #{track.peakPosition}</span>
              <span>{track.weeksOnChart} {t.music.weeks}</span>
              <MovementBadge movement={track.movement} newLabel={t.music.newEntry} reentryLabel={t.music.reentry} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 py-3 px-4 rounded-lg hover:bg-navy-50 transition-colors group">
      {/* Rank */}
      <div className="w-7 text-center">
        <span className="font-bold text-navy-800 text-sm">{track.rank}</span>
      </div>

      {/* Movement */}
      <div className="w-8 text-center">
        <MovementBadge movement={track.movement} newLabel={t.music.newEntry} reentryLabel={t.music.reentry} />
      </div>

      {/* Cover */}
      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${gradient} shrink-0 flex items-center justify-center`}>
        <PlayCircle size={16} className="text-white/60" />
      </div>

      {/* Song info */}
      <div className="flex-1 min-w-0">
        <p className="text-navy-900 font-semibold text-sm line-clamp-1">{track.title}</p>
        <p className="text-navy-500 text-xs">{track.artist}</p>
      </div>

      {/* Genre + island - hidden on mobile */}
      <div className="hidden md:block text-right min-w-[100px]">
        <p className="text-navy-500 text-xs">{track.genre}</p>
        <p className="text-navy-400 text-xs">{track.island}</p>
      </div>

      {/* Stats */}
      <div className="hidden lg:flex gap-4 text-xs text-navy-400 min-w-[160px] justify-end">
        <span><span className="text-navy-600 font-medium">LW:</span> {track.previousRank ?? '—'}</span>
        <span><span className="text-navy-600 font-medium">Pk:</span> #{track.peakPosition}</span>
        <span><span className="text-navy-600 font-medium">{track.weeksOnChart}</span> wks</span>
      </div>
    </div>
  );
}
