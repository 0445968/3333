import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import { videoSegments } from '../../data/videos';
import { ArticleCard } from '../cards/ArticleCard';
import { VideoCard } from '../cards/VideoCard';
import { useLanguage } from '../../i18n/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  const featured = articles.filter((a) => a.featured).slice(0, 3);
  const mainStory = featured[0];
  const sideStories = featured.slice(1, 3);
  const featuredVideo = videoSegments.find((v) => v.featured);

  if (!mainStory) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Main featured */}
        <div className="lg:col-span-7">
          <ArticleCard article={mainStory} variant="featured" />
        </div>

        {/* Side stories + video */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {sideStories.map((article) => (
            <ArticleCard key={article.id} article={article} variant="compact" />
          ))}
          {featuredVideo && (
            <Link to="/videos" className="block group bg-navy-900 rounded-xl overflow-hidden hover:opacity-95 transition-opacity">
              <div className="flex items-center gap-3 p-3">
                <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-turquoise-700 to-navy-800 flex items-center justify-center shrink-0">
                  <span className="text-white/70 text-xs">▶</span>
                </div>
                <div>
                  <p className="text-turquoise-400 text-xs font-semibold uppercase tracking-wider">Watch Now</p>
                  <p className="text-white font-semibold text-sm leading-snug">{featuredVideo.title}</p>
                  <p className="text-white/50 text-xs mt-0.5">{featuredVideo.host} · {featuredVideo.duration}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
