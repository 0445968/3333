import { Link } from 'react-router-dom';
import { Music, ChevronRight, PlayCircle } from 'lucide-react';
import { musicTracks, musicReleases, artistInterviews, musicVideos, getFeaturedArtist, getTop5Tracks } from '../../data/music';
import { MusicChartRow } from '../cards/MusicChartRow';
import { MovementBadge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { useLanguage } from '../../i18n/LanguageContext';
import { CATEGORY_GRADIENT } from '../../lib/utils';

export function MusicSpotlight() {
  const { t } = useLanguage();
  const top5 = getTop5Tracks();
  const no1 = top5[0];
  const chartRest = top5.slice(1);
  const nextRelease = musicReleases[0];
  const interview = artistInterviews[0];
  const video = musicVideos[0];

  return (
    <section className="bg-gradient-to-br from-navy-950 via-navy-900 to-coral-950 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Music size={16} className="text-coral-400" />
              <span className="text-coral-400 text-xs font-bold uppercase tracking-widest">Island Music</span>
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-white">{t.home.musicFromArchipelago}</h2>
            <p className="text-white/50 text-sm mt-0.5">{t.home.musicSub}</p>
          </div>
          <Link to="/music">
            <Button variant="coral" size="sm">
              {t.music.seeFullChart} <ChevronRight size={14} />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left: #1 + top 5 mini chart */}
          <div>
            {/* #1 featured */}
            {no1 && (
              <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-navy-900 to-turquoise-900 p-5 mb-4 border border-turquoise-700/30">
                <p className="text-sand-400 text-xs font-bold uppercase tracking-widest mb-2">{t.music.trackNo1}</p>
                <div className="flex gap-4 items-center">
                  <div className="font-display text-5xl font-black text-turquoise-500/30 select-none leading-none">1</div>
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-coral-600 to-navy-900 flex items-center justify-center shrink-0">
                    <PlayCircle size={28} className="text-white/60" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-white font-bold text-lg leading-tight">{no1.title}</h3>
                    <p className="text-turquoise-300 text-sm">{no1.artist}</p>
                    <p className="text-white/40 text-xs">{no1.genre} · {no1.island}</p>
                  </div>
                  <MovementBadge movement={no1.movement} newLabel={t.music.newEntry} reentryLabel={t.music.reentry} />
                </div>
              </div>
            )}

            {/* Mini chart */}
            <div className="bg-navy-900/60 rounded-xl overflow-hidden">
              <div className="px-4 py-2 border-b border-white/5">
                <p className="text-white/60 text-xs font-bold uppercase tracking-wider">{t.home.islandTop20} — {t.home.thisWeek}</p>
              </div>
              {chartRest.map((track) => (
                <MusicChartRow key={track.id} track={track} />
              ))}
            </div>
          </div>

          {/* Right: release + interview + video */}
          <div className="flex flex-col gap-4">
            {/* Upcoming release */}
            {nextRelease && (
              <div className="bg-gradient-to-r from-coral-700 to-navy-900 rounded-xl p-4 text-white">
                <p className="text-coral-300 text-xs font-bold uppercase tracking-wider mb-1">{t.home.upcomingReleases}</p>
                <h4 className="font-display font-bold text-base">{nextRelease.title}</h4>
                <p className="text-white/70 text-sm">{nextRelease.artist}</p>
                <p className="text-white/50 text-xs mt-0.5">{nextRelease.type} · {nextRelease.releaseDate}</p>
              </div>
            )}

            {/* Interview card */}
            {interview && (
              <div className="bg-navy-900/60 rounded-xl p-4">
                <p className="text-sand-400 text-xs font-bold uppercase tracking-wider mb-1">{t.music.artistInterviews}</p>
                <h4 className="font-display text-white font-bold text-base leading-snug">{interview.title}</h4>
                <p className="text-turquoise-300 text-sm">{interview.artistName}</p>
                <p className="text-white/50 text-sm mt-1 line-clamp-2 italic">{interview.excerpt}</p>
              </div>
            )}

            {/* Music video */}
            {video && (
              <Link to="/music" className="group bg-gradient-to-br from-turquoise-800 to-navy-900 rounded-xl overflow-hidden">
                <div className="flex items-center gap-3 p-4">
                  <div className="w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <PlayCircle size={28} className="text-white/70 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-turquoise-300 text-xs font-bold uppercase tracking-wider">{t.music.musicVideos}</p>
                    <h4 className="text-white font-semibold text-sm">{video.title}</h4>
                    <p className="text-white/50 text-xs">{video.artist} · {video.duration}</p>
                  </div>
                </div>
              </Link>
            )}
          </div>
        </div>

        <div className="mt-6 text-center">
          <Link to="/music">
            <Button variant="outline" size="md" className="border-white/20 text-white hover:bg-white/10">
              {t.music.seeFullChart} <ChevronRight size={14} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
