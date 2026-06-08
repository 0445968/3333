import { articles } from '../../data/articles';
import { ArticleCard } from '../cards/ArticleCard';
import { SectionHeader } from '../sections/SectionHeader';
import { useLanguage } from '../../i18n/LanguageContext';

// TODO: Replace mock articles with CMS data

export function LatestArticles() {
  const { t } = useLanguage();
  const latest = articles.slice(0, 9);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <SectionHeader title={t.home.latestNews} href="/category/culture" viewAllLabel={t.viewAll} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {latest.map((article) => (
          <ArticleCard key={article.id} article={article} variant="default" />
        ))}
      </div>
    </section>
  );
}
