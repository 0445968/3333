import { Link } from 'react-router-dom';
import { Music, ChevronRight, PlayCircle } from 'lucide-react';
import { musicTracks, musicReleases, artistInterviews, musicVideos, getTop5Tracks } from '../../data/music';
import { MusicChartRow } from '../cards/MusicChartRow';
import { MovementBadge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useLanguage } from '../../i18n/LanguageContext';

export function MusicSpotlight() {
  const { t } = useLanguage();
  const top5 = getTop5Tracks();
  const no1 = top5[0];
  const chartRest = top5.slice(1);
  const nextRelease = musicReleases[0];
  const interview = artistInterviews[0];
  const video = musicVideos[0];

  return (
    <section className="bg-travel-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Music size={15} className="text-sun-300" />
              <span className="text-sun-300 text-xs font-bold uppercase tracking-widest">Island Music</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{t.home.musicFromArchipelago}</h2>
            <p className="text-white/50 text-sm mt-0.5">{t.home.musicSub}</p>
          </div>
          <Link to="/music">
            <Button variant="sun" size="sm">
              {t.music.seeFullChart} <ChevronRight size={14} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: #1 + mini chart */}
          <div>
            {no1 && (
              <div className="modern-panel-blue p-5 mb-4 shadow-panel">
                <p className="text-sun-300 text-xs font-bold uppercase tracking-widest mb-2">{t.music.trackNo1}</p>
                <div className="flex gap-4 items-center">
                  <div className="font-display text-5xl font-black text-white/10 select-none leading-none">1</div>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <PlayCircle size={28} className="text-white/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-white font-bold text-lg leading-tight">{no1.title}</h3>
                    <p className="text-sun-300 font-semibold text-sm">{no1.artist}</p>
                    <p className="text-white/40 text-xs">{no1.genre} · {no1.island}</p>
                  </div>
                  <MovementBadge movement={no1.movement} newLabel={t.music.newEntry} reentryLabel={t.music.reentry} />
                </div>
              </div>
            )}

            <div className="modern-card overflow-hidden">
              <div className="px-4 py-2.5 bg-surface-subtle border-b border-surface-border">
                <p className="text-ink-600 text-xs font-bold uppercase tracking-wider">{t.home.islandTop20} — {t.home.thisWeek}</p>
              </div>
              {chartRest.map((track) => (
                <MusicChartRow key={track.id} track={track} />
              ))}
            </div>
          </div>

          {/* Right: release + interview + video */}
          <div className="flex flex-col gap-4">
            {nextRelease && (
              <div className="modern-card p-4">
                <p className="section-label mb-1">{t.home.upcomingReleases}</p>
                <h4 className="font-display font-bold text-ink-900 text-base">{nextRelease.title}</h4>
                <p className="text-travel-700 font-semibold text-sm">{nextRelease.artist}</p>
                <p className="text-ink-500 text-xs mt-0.5">{nextRelease.type} · {nextRelease.releaseDate}</p>
              </div>
            )}

            {interview && (
              <div className="modern-card p-4">
                <p className="section-label mb-1">{t.music.artistInterviews}</p>
                <h4 className="font-display text-ink-900 font-bold text-base leading-snug">{interview.title}</h4>
                <p className="text-travel-700 font-semibold text-sm">{interview.artistName}</p>
                <p className="text-ink-600 text-sm mt-1 line-clamp-2 italic">{interview.excerpt}</p>
              </div>
            )}

            {video && (
              <Link to="/music" className="group modern-card-hover">
                <div className="flex items-center gap-3 p-4">
                  <div className="w-14 h-14 rounded-2xl bg-travel-700 flex items-center justify-center shrink-0">
                    <PlayCircle size={26} className="text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="section-label">{t.music.musicVideos}</p>
                    <h4 className="text-ink-900 font-semibold text-sm mt-0.5">{video.title}</h4>
                    <p className="text-ink-500 text-xs">{video.artist} · {video.duration}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/music">
            <Button variant="secondary" size="md">{t.music.seeFullChart} <ChevronRight size={14} /></Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
