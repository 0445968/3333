import { useParams, Link } from 'react-router-dom';
import { getArticlesByCategory, articles } from '../data/articles';
import { ads } from '../data/ads';
import { ArticleCard } from '../components/cards/ArticleCard';
import { AdBanner } from '../components/home/AdBanner';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { Badge } from '../components/ui/Badge';
import { useLanguage } from '../i18n/LanguageContext';

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
  culture: 'Stories of identity, language, heritage, and the living traditions of the Raizal people.',
  food: 'Recipes, cooking traditions, and the stories behind the food that brings island families together.',
  entertainment: 'Music, arts, events, and the creative life of the archipelago.',
  sports: 'Local athletes, community sports, and the competitive spirit of island life.',
  weather: 'Weather patterns, seasonal guides, hurricane preparedness, and sea conditions.',
  politics: 'Local governance, community advocacy, and the political life of the archipelago.',
  environment: 'The health of the Seaflower Biosphere Reserve, conservation efforts, and environmental news.',
  memorials: 'Honoring the lives and legacies of community members who have passed.',
  business: 'Local enterprise, economic development, and the island business community.',
  tourism: 'Responsible tourism, travel guides, and visitor information for the archipelago.',
  agriculture: 'Island farming, local markets, traditional crops, and food sovereignty.',
  religion: 'Faith communities, churches, and the spiritual life of the archipelago.',
  science: 'Research, marine biology, and scientific discoveries in the Caribbean.',
  health: 'Community health, wellness, and healthcare in the archipelago.',
  education: 'Schools, language programs, youth development, and learning in the islands.',
  world: 'International news and stories with relevance to the Raizal community.',
  economy: 'Economic indicators, business news, and financial life on the islands.',
};

export function CategoryPage() {
  const { categorySlug = '' } = useParams<{ categorySlug: string }>();
  const { t } = useLanguage();

  const categoryLabel = t.nav[categorySlug as keyof typeof t.nav] ?? categorySlug;
  const description = CATEGORY_DESCRIPTIONS[categorySlug] ?? `Stories and news from the ${categoryLabel} section.`;
  const categoryArticles = getArticlesByCategory(categorySlug);
  const featured = categoryArticles[0];
  const rest = categoryArticles.slice(1);
  const popular = articles.slice(0, 4);
  const sidebarAd = ads.find((a) => a.placement === 'article-sidebar');

  // TODO: Replace with CMS data by category slug

  return (
    <div className="app-page">
      {/* Category hero */}
      <div className="bg-travel-800 py-10">
        <div className="content-shell">
          <Badge label={categoryLabel} className="mb-3" />
          <h1 className="font-display text-xl md:text-4xl font-bold text-white mb-2">{categoryLabel}</h1>
          <p className="text-white/60 max-w-xl">{description}</p>
        </div>
      </div>

      <div className="content-shell py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main content */}
          <main className="lg:col-span-8">
            {/* Featured article */}
            {featured && (
              <div className="mb-8">
                <ArticleCard article={featured} variant="featured" />
              </div>
            )}

            {/* Article grid */}
            {rest.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {rest.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-ink-500">
                <p className="text-lg font-display">More stories coming soon.</p>
                <p className="text-sm mt-1">This section is growing — check back shortly.</p>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Popular */}
            <div className="modern-card p-4">
              <h3 className="font-display text-ink-900 font-bold text-base mb-4 pb-2 border-b border-surface-border">
                Popular Stories
              </h3>
              <div className="flex flex-col gap-4">
                {popular.map((a) => (
                  <ArticleCard key={a.id} article={a} variant="horizontal" />
                ))}
              </div>
            </div>

            {/* Ad */}
            {sidebarAd && <AdBanner ad={sidebarAd} variant="sidebar" />}

            {/* Related categories */}
            <div className="modern-card p-4">
              <h3 className="font-display text-ink-900 font-bold text-base mb-3">Browse More</h3>
              <div className="flex flex-wrap gap-2">
                {['culture', 'music', 'food', 'environment', 'sports', 'tourism'].map((cat) => (
                  <Link key={cat} to={cat === 'music' ? '/music' : `/category/${cat}`}>
                    <Badge label={t.nav[cat as keyof typeof t.nav] ?? cat} />
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter inline */}
            <div className="modern-panel-blue p-4">
              <h3 className="font-display font-bold text-white text-base mb-1">{t.home.newsletter}</h3>
              <p className="text-white/60 text-sm mb-3">{t.home.newsletterSub}</p>
              <input type="email" placeholder={t.home.emailPlaceholder} className="w-full px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/40 text-sm mb-2 focus:outline-none" />
              <button className="w-full bg-sun-300 hover:bg-sun-400 text-ink-900 text-sm font-semibold py-2 rounded-lg transition-colors">
                {t.home.subscribeBtn}
              </button>
            </div>
          </aside>
        </div>
      </div>

      <NewsletterSignup />
    </div>
  );
}
