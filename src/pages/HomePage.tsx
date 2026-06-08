import { articles, getArticlesByCategory } from '../data/articles';
import { getFeaturedBusinesses } from '../data/businesses';
import { recipes } from '../data/recipes';
import { archiveEvents } from '../data/events';
import { memorials } from '../data/memorials';
import { ads } from '../data/ads';
import { BreakingNewsBar } from '../components/home/BreakingNewsBar';
import { HeroSection } from '../components/home/HeroSection';
import { CategoryRail } from '../components/home/CategoryRail';
import { VideoSegments } from '../components/home/VideoSegments';
import { LatestArticles } from '../components/home/LatestArticles';
import { MusicSpotlight } from '../components/home/MusicSpotlight';
import { WeatherWidget } from '../components/home/WeatherWidget';
import { MarketWidget } from '../components/home/MarketIndicators';
import { AdBanner } from '../components/home/AdBanner';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { CommunityCallout } from '../components/sections/CommunityCallout';
import { SectionHeader } from '../components/sections/SectionHeader';
import { ArticleCard } from '../components/cards/ArticleCard';
import { RecipeCard } from '../components/cards/RecipeCard';
import { BusinessCard } from '../components/cards/BusinessCard';
import { EventCard } from '../components/cards/EventCard';
import { MemorialCard } from '../components/cards/MemorialCard';
import { useLanguage } from '../i18n/LanguageContext';

export function HomePage() {
  const { t } = useLanguage();
  const cultureArticles = getArticlesByCategory('Culture').slice(0, 3);
  const envArticles = getArticlesByCategory('Environment').slice(0, 3);
  const featuredBusinesses = getFeaturedBusinesses().slice(0, 3);
  const homepageAd = ads.find((a) => a.placement === 'homepage-banner');

  return (
    <div className="app-page">
      <BreakingNewsBar />
      <HeroSection />
      <CategoryRail />
      <VideoSegments />
      <MusicSpotlight />
      <LatestArticles />

      {/* Culture section */}
      <section className="bg-surface-subtle py-10">
        <div className="content-shell">
          <SectionHeader title={t.home.cultureHighlights} subtitle={t.home.cultureSub} href="/category/culture" viewAllLabel={t.viewAll} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {cultureArticles.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      </section>

      {/* Food + Recipes */}
      <section className="bg-white py-10">
        <div className="content-shell">
          <SectionHeader title={t.home.fromKitchen} subtitle={t.home.kitchenSub} href="/recipes" viewAllLabel={t.viewAll} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recipes.slice(0, 4).map((r) => <RecipeCard key={r.id} recipe={r} />)}
          </div>
        </div>
      </section>

      {/* Weather + Markets row */}
      <section className="bg-travel-900 py-10">
        <div className="content-shell">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-4">{t.home.currentWeather}</h3>
              <WeatherWidget />
            </div>
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-4">{t.home.marketIndicators}</h3>
              <MarketWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Environment */}
      <section className="bg-white py-10">
        <div className="content-shell">
          <SectionHeader title={t.home.environmentWatch} subtitle={t.home.environmentSub} href="/category/environment" viewAllLabel={t.viewAll} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {envArticles.map((a) => <ArticleCard key={a.id} article={a} />)}
          </div>
        </div>
      </section>

      {/* Business Spotlight */}
      <section className="bg-surface-subtle py-10">
        <div className="content-shell">
          <SectionHeader title={t.home.businessSpotlight} subtitle={t.home.businessSub} href="/directory" viewAllLabel={t.viewAll} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredBusinesses.map((b) => <BusinessCard key={b.id} business={b} />)}
          </div>
        </div>
      </section>

      {/* Tourism Preview */}
      <section className="bg-travel-800 py-14 text-white">
        <div className="content-shell">
          <div className="max-w-2xl">
            <p className="section-label text-sun-300 mb-2">{t.nav.tourism}</p>
            <h2 className="font-display text-xl font-bold text-white mb-3">{t.home.tourismGuide}</h2>
            <p className="text-white/70 mb-5">{t.home.tourismSub}</p>
            <a href="/tourism" className="primary-button">
              {t.learnMore}
            </a>
          </div>
        </div>
      </section>

      {/* Memorials preview */}
      <section className="bg-white py-10">
        <div className="content-shell">
          <SectionHeader title={t.home.memorialsPreview} subtitle={t.home.memorialsSub} href="/memorials" viewAllLabel={t.viewAll} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {memorials.slice(0, 3).map((m) => <MemorialCard key={m.id} memorial={m} />)}
          </div>
        </div>
      </section>

      {/* Archive Preview */}
      <section className="bg-surface-subtle py-10">
        <div className="content-shell">
          <SectionHeader title={t.home.archivePreview} subtitle={t.home.archiveSub} href="/archive" viewAllLabel={t.viewAll} />
          <div className="flex flex-col gap-3">
            {archiveEvents.slice(0, 4).map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        </div>
      </section>

      {/* Ad banner */}
      {homepageAd && (
        <div className="content-shell py-4">
          <AdBanner ad={homepageAd} />
        </div>
      )}

      <CommunityCallout />
      <NewsletterSignup />
    </div>
  );
}
