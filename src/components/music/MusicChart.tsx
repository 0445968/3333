import { musicTracks } from '../../data/music';
import { MusicChartRow } from '../cards/MusicChartRow';
import { useLanguage } from '../../i18n/LanguageContext';

export function MusicChart() {
  const { t } = useLanguage();
  const [no1, ...rest] = musicTracks;

  return (
    <div>
      {/* Header row */}
      <div className="hidden lg:grid grid-cols-[28px_36px_40px_1fr_120px_160px] gap-3 px-4 py-2 text-xs font-semibold text-navy-400 uppercase tracking-wider border-b border-sand-200 mb-1">
        <span>{t.music.rank}</span>
        <span>{t.music.movement}</span>
        <span></span>
        <span>{t.music.song}</span>
        <span>{t.music.genre}</span>
        <span className="text-right">LW / Peak / WKS</span>
      </div>

      {/* #1 featured */}
      <div className="mb-3">
        <MusicChartRow track={no1} featured />
      </div>

      {/* Rest of chart */}
      <div className="divide-y divide-sand-100">
        {rest.map((track) => (
          <MusicChartRow key={track.id} track={track} />
        ))}
      </div>
    </div>
  );
}
