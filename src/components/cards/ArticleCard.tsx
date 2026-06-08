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
  const gradient = CATEGORY_GRADIENT[article.category.toLowerCase()] ?? 'from-navy-700 to-turquoise-700';

  if (variant === 'horizontal') {
    return (
      <Link to={`/article/${article.slug}`} className="flex gap-3 group">
        <div className="w-20 h-16 shrink-0 rounded-lg overflow-hidden">
          <ImagePlaceholder
            label={article.category}
            gradient={gradient}
            className="w-full h-full"
            aspect=""
          />
        </div>
        <div className="flex-1 min-w-0">
          <Badge label={article.category} />
          <h4 className="text-navy-900 font-semibold text-sm leading-snug mt-1 line-clamp-2 group-hover:text-turquoise-700 transition-colors">
            {article.title}
          </h4>
          <p className="text-navy-400 text-xs mt-1">{formatShortDate(article.publishedAt)}</p>
        </div>
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link to={`/article/${article.slug}`} className="block group">
        <div className="rounded-lg overflow-hidden mb-2">
          <ImagePlaceholder label={article.category} gradient={gradient} aspect="aspect-[16/9]" />
        </div>
        <Badge label={article.category} />
        <h3 className="text-navy-900 font-semibold text-sm leading-snug mt-1 line-clamp-2 group-hover:text-turquoise-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-navy-400 text-xs mt-1">{formatShortDate(article.publishedAt)}</p>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <Link to={`/article/${article.slug}`} className="group relative block rounded-xl overflow-hidden shadow-lg">
        <div className={`bg-gradient-to-br ${gradient} aspect-[16/9]`} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
          <Badge label={article.category} className="mb-2" />
          <h2 className="font-display text-white font-bold text-xl md:text-2xl leading-tight line-clamp-3 group-hover:text-turquoise-200 transition-colors">
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
    <Link to={`/article/${article.slug}`} className="group block bg-white rounded-xl overflow-hidden shadow-sm border border-sand-100 hover:shadow-md transition-shadow">
      <div className="overflow-hidden">
        <ImagePlaceholder label={`${article.category} Image`} gradient={gradient} aspect="aspect-[16/9]" />
      </div>
      <div className="p-4">
        <Badge label={article.category} />
        <h3 className="font-display text-navy-900 font-bold text-base mt-2 leading-snug line-clamp-2 group-hover:text-turquoise-700 transition-colors">
          {article.title}
        </h3>
        <p className="text-navy-500 text-sm mt-2 line-clamp-2">{article.excerpt}</p>
        <div className="flex items-center gap-3 mt-3 text-navy-400 text-xs">
          <span className="flex items-center gap-1"><User size={11} /> {article.author}</span>
          <span className="flex items-center gap-1"><Clock size={11} /> {article.readingTime} {t.article.minRead}</span>
        </div>
      </div>
    </Link>
  );
}
