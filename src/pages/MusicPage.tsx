import { Music, Disc3, Upload } from 'lucide-react';
import { musicTracks, musicReleases, artistInterviews, lyricFeatures, musicVideos, artists, getTop5Tracks } from '../data/music';
import { articles, getArticlesByCategory } from '../data/articles';
import { MusicChart } from '../components/music/MusicChart';
import { FeaturedArtist } from '../components/music/FeaturedArtist';
import { MusicChartRow } from '../components/cards/MusicChartRow';
import { ReleaseCard } from '../components/cards/ReleaseCard';
import { ArtistInterviewCard } from '../components/cards/ArtistInterviewCard';
import { LyricFeatureCard } from '../components/cards/LyricFeatureCard';
import { MusicVideoCard } from '../components/cards/MusicVideoCard';
import { PlaylistCard, PLAYLISTS } from '../components/cards/PlaylistCard';
import { MusicEventCard, MUSIC_EVENTS } from '../components/cards/MusicEventCard';
import { ArticleCard } from '../components/cards/ArticleCard';
import { SectionHeader } from '../components/sections/SectionHeader';
import { Button } from '../components/ui/Button';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { useLanguage } from '../i18n/LanguageContext';

// TODO: Connect music data to streaming/publishing platform

export function MusicPage() {
  const { t } = useLanguage();
  const musicArticles = getArticlesByCategory('Music');

  return (
    <div className="app-page">
      {/* Hero */}
      <div className="bg-travel-950 py-14 text-white">
        <div className="content-shell">
          <div className="flex items-center gap-2 mb-3">
            <Music size={18} className="text-sun-300" />
            <span className="text-sun-300 text-xs font-bold uppercase tracking-widest">Raizal.tv Music</span>
          </div>
          <h1 className="font-display text-5xl font-bold mb-3">{t.music.heroTitle}</h1>
          <p className="text-white/60 text-xl max-w-2xl">{t.music.heroSub}</p>
        </div>
      </div>

      {/* Island Top 20 Chart */}
      <section className="py-10 bg-white">
        <div className="content-shell">
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-1">
              <Disc3 size={18} className="text-travel-600" />
              <span className="section-label">Weekly Chart</span>
            </div>
            <h2 className="font-display text-3xl font-bold text-ink-900">{t.music.chart}</h2>
            <p className="text-ink-500 text-sm mt-0.5">{t.music.chartSub}</p>
          </div>
          <div className="modern-card overflow-hidden">
            <MusicChart />
          </div>
        </div>
      </section>

      {/* Featured Artist */}
      <section className="bg-travel-950 py-10">
        <div className="content-shell">
          <FeaturedArtist />
        </div>
      </section>

      {/* Upcoming Releases */}
      <section className="py-10 bg-white">
        <div className="content-shell">
          <SectionHeader title={t.music.upcomingReleases} subtitle={t.music.upcomingRelSub} />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {musicReleases.map((release) => (
              <ReleaseCard key={release.id} release={release} />
            ))}
          </div>
        </div>
      </section>

      {/* Artist Interviews */}
      <section className="bg-surface-subtle py-10">
        <div className="content-shell">
          <SectionHeader title={t.music.artistInterviews} subtitle={t.music.interviewsSub} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {artistInterviews.map((interview) => (
              <ArtistInterviewCard key={interview.id} interview={interview} />
            ))}
          </div>
        </div>
      </section>

      {/* New Music Videos */}
      <section className="py-10 bg-white">
        <div className="content-shell">
          <SectionHeader title={t.music.musicVideos} subtitle={t.music.videosSub} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {musicVideos.map((video) => (
              <MusicVideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* Lyrics & Meaning */}
      <section className="bg-travel-950 py-10">
        <div className="content-shell">
          <div className="mb-5">
            <h2 className="font-display text-2xl font-bold text-white">{t.music.lyricsTitle}</h2>
            <p className="text-white/50 text-sm mt-0.5">{t.music.lyricsSub}</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-3 mb-5 flex items-start gap-2">
            <span className="text-skybrand-300 text-xs shrink-0 mt-0.5">ℹ</span>
            <p className="text-white/50 text-xs">{t.music.lyricsNote}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {lyricFeatures.map((lyric) => (
              <LyricFeatureCard key={lyric.id} lyric={lyric} />
            ))}
          </div>
        </div>
      </section>

      {/* Island Radio & Playlists */}
      <section className="py-10 bg-white">
        <div className="content-shell">
          <SectionHeader title={t.music.radioTitle} subtitle={t.music.radioSub} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PLAYLISTS.map((playlist) => (
              <PlaylistCard key={playlist.id} playlist={playlist} />
            ))}
          </div>
        </div>
      </section>

      {/* Music News */}
      {musicArticles.length > 0 && (
        <section className="bg-surface-subtle py-10">
          <div className="content-shell">
            <SectionHeader title={t.music.musicNews} subtitle={t.music.musicNewsSub} />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {musicArticles.map((a) => (
                <ArticleCard key={a.id} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events & Concerts */}
      <section className="py-10 bg-white">
        <div className="content-shell">
          <SectionHeader title={t.music.eventsTitle} subtitle={t.music.eventsSub} />
          <div className="flex flex-col gap-3">
            {MUSIC_EVENTS.map((event) => (
              <MusicEventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* Submit Music callout */}
      <section className="bg-travel-800 py-12 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Upload size={32} className="text-white/60 mx-auto mb-3" />
          <h2 className="font-display text-3xl font-bold mb-3">{t.music.submitTitle}</h2>
          <p className="text-white/70 mb-6">{t.music.submitSub}</p>
          {/* TODO: Add user submissions workflow */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="sun" size="lg">{t.music.submitMusic}</Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">{t.music.requestInterview}</Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">{t.music.promoteRelease}</Button>
          </div>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
