import { Link } from 'react-router-dom';
import { videoSegments } from '../../data/videos';
import { VideoCard } from '../cards/VideoCard';
import { SectionHeader } from '../sections/SectionHeader';
import { Button } from '../ui/Button';
import { Radio } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';

// TODO: Connect video segments to streaming/video provider

export function VideoSegments() {
  const { t } = useLanguage();

  return (
    <section className="bg-navy-950 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-end justify-between mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Radio size={16} className="text-turquoise-400 animate-pulse" />
              <span className="text-turquoise-400 text-xs font-bold uppercase tracking-widest">On Air</span>
            </div>
            <h2 className="font-display text-2xl font-bold text-white">{t.home.watchRaizal}</h2>
            <p className="text-white/50 text-sm mt-0.5">{t.home.watchSub}</p>
          </div>
          <Link to="/videos">
            <Button variant="outline" size="sm" className="border-white/30 text-white hover:bg-white/10">
              {t.viewAll}
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {videoSegments.slice(0, 6).map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </section>
  );
}
