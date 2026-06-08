import { Sparkles, PlayCircle } from 'lucide-react';
import { MovementBadge } from '../ui/Badge';
import { useLanguage } from '../../i18n/LanguageContext';
import type { MusicTrack } from '../../types';

export function MusicChartRow({ track, featured = false }: { track: MusicTrack; featured?: boolean }) {
  const { t } = useLanguage();

  if (featured) {
    return (
      <div className="modern-panel-blue p-5 md:p-6 shadow-panel mb-3">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles size={15} className="text-sun-300" />
          <span className="text-sun-300 text-xs font-bold uppercase tracking-widest">{t.music.trackNo1}</span>
        </div>
        <div className="flex gap-5 items-center">
          <div className="font-display text-6xl md:text-7xl font-black text-white/10 select-none leading-none">1</div>
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white/10 shrink-0 flex items-center justify-center">
            <PlayCircle size={32} className="text-white/60" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-display text-white font-bold text-xl md:text-2xl leading-tight">{track.title}</h3>
            <p className="text-sun-300 font-semibold mt-0.5">{track.artist}</p>
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
    <div className="flex items-center gap-3 py-3 px-4 hover:bg-surface-subtle transition-colors group rounded-2xl">
      <div className="w-7 text-center shrink-0">
        <span className="font-display font-bold text-ink-800 text-sm">{track.rank}</span>
      </div>
      <div className="w-8 text-center shrink-0">
        <MovementBadge movement={track.movement} newLabel={t.music.newEntry} reentryLabel={t.music.reentry} />
      </div>
      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-travel-600 to-travel-800 shrink-0 flex items-center justify-center">
        <PlayCircle size={16} className="text-white/60" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-ink-900 font-semibold text-sm line-clamp-1">{track.title}</p>
        <p className="text-ink-500 text-xs">{track.artist}</p>
      </div>
      <div className="hidden md:block text-right min-w-[100px]">
        <p className="text-ink-600 text-xs">{track.genre}</p>
        <p className="text-ink-400 text-xs">{track.island}</p>
      </div>
      <div className="hidden lg:flex gap-4 text-xs text-ink-400 min-w-[160px] justify-end">
        <span><span className="text-ink-600 font-semibold">LW:</span> {track.previousRank ?? '—'}</span>
        <span><span className="text-ink-600 font-semibold">Pk:</span> #{track.peakPosition}</span>
        <span><span className="text-ink-600 font-semibold">{track.weeksOnChart}</span> wks</span>
      </div>
    </div>
  );
}
