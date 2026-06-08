import { Radio, PlayCircle, Lightbulb } from 'lucide-react';
import { videoSegments } from '../data/videos';
import { VideoCard } from '../components/cards/VideoCard';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../i18n/LanguageContext';

// TODO: Connect video segments to streaming/video provider

export function VideosPage() {
  const { t } = useLanguage();
  const featured = videoSegments.find((v) => v.featured);
  const others = videoSegments.filter((v) => !v.featured);

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-navy-950 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-2">
            <Radio size={16} className="text-turquoise-400 animate-pulse" />
            <span className="text-turquoise-400 text-xs font-bold uppercase tracking-widest">Raizal.tv</span>
          </div>
          <h1 className="font-display text-4xl font-bold mb-2">{t.home.watchRaizal}</h1>
          <p className="text-white/60 max-w-xl">{t.home.watchSub}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Featured video */}
        {featured && (
          <div className="mb-10">
            <h2 className="font-display text-2xl font-bold text-navy-900 mb-4">Featured</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
              <div className="bg-gradient-to-br from-navy-700 to-turquoise-700 rounded-xl aspect-video flex items-center justify-center relative">
                <PlayCircle size={56} className="text-white/70" />
                <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">{featured.duration}</div>
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-navy-900">{featured.title}</h3>
                <p className="text-turquoise-700 font-medium mt-1">{featured.host}</p>
                <p className="text-navy-600 mt-3">{featured.description}</p>
                <div className="mt-4">
                  <Button variant="primary" size="lg">
                    <PlayCircle size={18} /> {t.watchLive}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Program categories */}
        <h2 className="font-display text-2xl font-bold text-navy-900 mb-5">All Programs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {videoSegments.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Upcoming live */}
        <div className="bg-navy-900 rounded-2xl p-6 text-white mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Radio size={16} className="text-coral-400 animate-pulse" />
            <span className="text-coral-400 text-xs font-bold uppercase tracking-wider">Live Broadcast Schedule</span>
          </div>
          <h3 className="font-display text-xl font-bold mb-2">Upcoming Live Broadcasts</h3>
          <p className="text-white/60">Live streaming schedule coming soon. Sign up for notifications to be the first to know when Raizal.tv goes live.</p>
          {/* TODO: Connect video segments to streaming provider */}
          <Button variant="coral" size="md" className="mt-4">Get Notified</Button>
        </div>

        {/* Submit story callout */}
        <div className="bg-sand-50 rounded-2xl p-6 border border-sand-200 flex items-start gap-4">
          <Lightbulb size={24} className="text-sand-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl font-bold text-navy-900">Have a Story Idea?</h3>
            <p className="text-navy-600 mt-1">Submit story ideas, community events, or interview requests to the Raizal.tv editorial team.</p>
            <Button variant="secondary" size="md" className="mt-3">Submit a Story Idea</Button>
          </div>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
