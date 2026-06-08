import { musicTracks } from '../../data/music';
import { MusicChartRow } from '../cards/MusicChartRow';
import { useLanguage } from '../../i18n/LanguageContext';

export function MusicChart() {
  const { t } = useLanguage();
  const [no1, ...rest] = musicTracks;

  return (
    <div>
      {/* Column headers */}
      <div className="hidden lg:flex items-center gap-3 px-4 py-2 bg-surface-subtle border-b border-surface-border text-xs font-bold text-ink-500 uppercase tracking-wider">
        <span className="w-7">{t.music.rank}</span>
        <span className="w-8">{t.music.movement}</span>
        <span className="w-10"></span>
        <span className="flex-1">{t.music.song}</span>
        <span className="w-[100px]">{t.music.genre}</span>
        <span className="w-[160px] text-right">LW / Peak / WKS</span>
      </div>

      {/* #1 featured */}
      <div className="p-4">
        <MusicChartRow track={no1} featured />
      </div>

      {/* Rest */}
      <div className="divide-y divide-surface-border px-2 pb-2">
        {rest.map((track) => (
          <MusicChartRow key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}
