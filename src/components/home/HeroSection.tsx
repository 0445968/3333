import { Link } from 'react-router-dom';
import { articles } from '../../data/articles';
import { videoSegments } from '../../data/videos';
import { ArticleCard } from '../cards/ArticleCard';
import { VideoCard } from '../cards/VideoCard';

export function HeroSection() {
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
            <Link to="/videos" className="block group modern-card hover:shadow-card-md transition-shadow">
              <div className="flex items-center gap-3 p-3">
                <div className="w-16 h-14 rounded-2xl bg-travel-800 flex items-center justify-center shrink-0">
                  <span className="text-white text-lg">▶</span>
                </div>
                <div>
                  <p className="section-label">Watch Now</p>
                  <p className="text-ink-900 font-semibold text-sm leading-snug mt-0.5">{featuredVideo.title}</p>
                  <p className="text-ink-500 text-xs mt-0.5">{featuredVideo.host} · {featuredVideo.duration}</p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
