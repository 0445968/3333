import { useParams, Link } from 'react-router-dom';
import { Clock, User, Calendar, Share2, Heart, BookOpen } from 'lucide-react';
import { getArticleBySlug, articles } from '../data/articles';
import { ads } from '../data/ads';
import { Badge } from '../components/ui/Badge';
import { AdBanner } from '../components/home/AdBanner';
import { ArticleCard } from '../components/cards/ArticleCard';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { formatDate } from '../lib/utils';
import { useLanguage } from '../i18n/LanguageContext';

// TODO: Replace mock article with CMS data

export function ArticlePage() {
  const { articleSlug = '' } = useParams<{ articleSlug: string }>();
  const { t, language } = useLanguage();

  const article = getArticleBySlug(articleSlug);
  const sidebarAd = ads.find((a) => a.placement === 'article-sidebar');
  const related = articles.filter((a) => a.category === article?.category && a.id !== article?.id).slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-2xl text-ink-900 mb-2">{t.common.notFound}</h1>
          <Link to="/" className="safe-link">{t.common.goHome}</Link>
        </div>
      </div>
    );
  }

  const body = article.body ?? `${article.excerpt}\n\n${article.excerpt}\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. The Raizal people of the archipelago have maintained their unique cultural identity through generations of resilience, community, and faith.\n\nFrom the sea wall gatherings at sunset to the early morning church services, every aspect of island life reflects a deep connection to land, sea, and community. The traditions passed down through elders carry not just practical knowledge, but the philosophy of a people who have learned to live in harmony with their island environment.\n\nFuture stories will be connected to a full CMS with editorial management, author profiles, and multilingual publishing capabilities.`;

  return (
    <div className="app-page">
      <div className="content-shell py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Article body */}
          <article className="lg:col-span-8">
            <Badge label={article.category} className="mb-4" />
            <h1 className="font-display text-xl md:text-4xl font-bold text-ink-900 leading-tight mb-3">
              {article.title}
            </h1>
            {article.subtitle && (
              <p className="text-ink-600 text-xl leading-relaxed mb-4">{article.subtitle}</p>
            )}
            <div className="flex flex-wrap items-center gap-4 text-ink-500 text-sm mb-6 pb-6 border-b border-surface-border">
              <span className="flex items-center gap-1.5"><User size={14} /> {article.author}</span>
              <span className="flex items-center gap-1.5"><Calendar size={14} /> {formatDate(article.publishedAt, language)}</span>
              <span className="flex items-center gap-1.5"><Clock size={14} /> {article.readingTime} {t.article.minRead}</span>
            </div>

            {/* Hero image placeholder */}
            <div className="rounded-2xl bg-gradient-to-br from-travel-700 to-travel-900 aspect-video flex items-end p-4 mb-6">
              <span className="text-white/50 text-xs uppercase tracking-wider">{article.category} Image</span>
            </div>

            {/* Body */}
            <div className="prose max-w-none text-ink-700 text-base leading-relaxed space-y-4">
              {body.split('\n\n').map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="my-8 border-l-4 border-travel-500 pl-5 text-ink-800 text-xl font-display italic leading-relaxed">
              "The traditions of the archipelago are not relics of the past — they are the living foundation of who we are today."
            </blockquote>

            {/* Share bar */}
            <div className="flex items-center gap-3 my-6 py-4 border-y border-surface-border">
              <span className="text-ink-500 text-sm font-medium">{t.article.shareStory}:</span>
              <button className="flex items-center gap-1.5 text-sm text-ink-500 hover:text-travel-700 transition-colors">
                <Share2 size={14} /> Share
              </button>
              <button className="flex items-center gap-1.5 text-sm text-ink-500 hover:text-coral-700 transition-colors">
                <Heart size={14} /> Save
              </button>
            </div>

            {/* Community journalism callout */}
            <div className="bg-surface-subtle rounded-2xl p-5 border border-surface-border">
              <div className="flex items-start gap-3">
                <BookOpen size={20} className="text-travel-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-display font-bold text-ink-900">{t.article.supportJournalism}</h4>
                  <p className="text-ink-600 text-sm mt-1">{t.article.supportSub}</p>
                  <Link to="/about" className="safe-link text-sm font-medium mt-2 inline-block">
                    {t.learnMore}
                  </Link>
                </div>
              </div>
            </div>

            {/* Related stories */}
            {related.length > 0 && (
              <div className="mt-8">
                <h3 className="font-display text-xl font-bold text-ink-900 mb-4">{t.article.relatedStories}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {related.map((a) => (
                    <ArticleCard key={a.id} article={a} variant="compact" />
                  ))}
                </div>
              </div>
            )}
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-5">
            {sidebarAd && <AdBanner ad={sidebarAd} variant="sidebar" />}

            <div className="modern-card p-4">
              <h3 className="font-display font-bold text-ink-900 mb-4 pb-2 border-b border-surface-border">More from {article.category}</h3>
              <div className="flex flex-col gap-4">
                {articles.filter((a) => a.category === article.category && a.id !== article.id).slice(0, 3).map((a) => (
                  <ArticleCard key={a.id} article={a} variant="horizontal" />
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
