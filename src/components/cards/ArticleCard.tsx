import { Link } from 'react-router-dom';
import { Clock, User } from 'lucide-react';
import { Badge } from '../ui/Badge';
import { ImagePlaceholder } from '../ui/ImagePlaceholder';
import { formatShortDate, CATEGORY_GRADIENT } from '../../lib/utils';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Article } from '../../types';

interface ArticleCardProps {
  article: Article;
  variant?: 'default' | 'featured' | 'compact' | 'horizontal';
}

export function ArticleCard({ article, variant = 'default' }: ArticleCardProps) {
  const { t } = useLanguage();
  const gradient = CATEGORY_GRADIENT[article.category.toLowerCase()] ?? 'from-travel-700 to-travel-900';

  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${article.slug}`} className="flex gap-3 group">
        <div className="w-20 h-16 shrink-0 rounded-2xl overflow-hidden">
          <ImagePlaceholder label={article.category} gradient={gradient} className="w-full h-full" aspect="" />
        </div>
        <div className="flex-1 min-w-0">
          <Badge label={article.category} />
          <h4 className="text-ink-900 font-semibold text-sm leading-snug mt-1 line-clamp-2 group-hover:text-travel-700 transition-colors">
            {article.title}
          </h4>
          <p className="text-ink-500 text-xs mt-1">{formatShortDate(article.publishedAt)}</p>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/article/${article.slug}`} className="block group modern-card-hover">
        <div className="overflow-hidden rounded-t-3xl">
          <ImagePlaceholder label={article.category} gradient={gradient} aspect="aspect-[16/9]" />
        </div>
        <div className="p-3">
          <Badge label={article.category} />
          <h3 className="text-ink-900 font-display font-bold text-sm mt-1.5 leading-snug line-clamp-2 group-hover:text-travel-700 transition-colors">
            {article.title}
          </h3>
          <p className="text-ink-400 text-xs mt-1">{formatShortDate(article.publishedAt)}</p>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link to={`/article/${article.slug}`} className="group relative block rounded-3xl overflow-hidden shadow-card-md">
        <div className={`bg-gradient-to-br ${gradient} aspect-[16/9]`} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/85 via-ink-900/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <Badge label={article.category} className="mb-2" />
          <h2 className="font-display text-white font-bold text-xl md:text-2xl leading-tight line-clamp-3 group-hover:text-sun-200 transition-colors">
            {article.title}
          </h2>
          <p className="text-white/70 text-sm mt-1 line-clamp-2 hidden md:block">{article.excerpt}</p>
          <div className="flex items-center gap-3 mt-2 text-white/60 text-xs">
            <span className="flex items-center gap-1"><User size={11} /> {article.author}</span>
            <span className="flex items-center gap-1"><Clock size={11} /> {article.readingTime} {t.article.minRead}</span>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link to={`/article/${article.slug}`} className="group modern-card-hover block">
      <div className="overflow-hidden rounded-t-3xl">
        <ImagePlaceholder label={`${article.category} Image`} gradient={gradient} aspect="aspect-[16/9]" />
      </div>
      <div className="p-4">
        <Badge label={article.category} />
        <h3 className="font-display text-ink-900 font-bold text-base mt-2 leading-snug line-clamp-2 group-hover:text-travel-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-ink-600 text-sm mt-2 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-3 mt-3 text-ink-400 text-xs border-t border-surface-border pt-3">
          <span className="flex items-center gap-1"><User size={11} /> {article.author}</span>
          <span className="flex items-center gap-1"><Clock size={11} /> {article.readingTime} {t.article.minRead}</span>
        </div>
      </div>
    </Link>
  );
}
