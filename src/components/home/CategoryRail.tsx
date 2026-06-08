import { Link } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

const CATEGORIES = [
  { key: 'culture',       href: '/category/culture',       emoji: '🌴' },
  { key: 'music',         href: '/music',                  emoji: '🎵' },
  { key: 'food',          href: '/category/food',          emoji: '🦀' },
  { key: 'sports',        href: '/category/sports',        emoji: '⚽' },
  { key: 'environment',   href: '/category/environment',   emoji: '🌊' },
  { key: 'tourism',       href: '/tourism',                emoji: '🏝️' },
  { key: 'business',      href: '/category/business',      emoji: '🏪' },
  { key: 'religion',      href: '/category/religion',      emoji: '⛪' },
  { key: 'health',        href: '/category/health',        emoji: '💚' },
  { key: 'education',     href: '/category/education',     emoji: '📚' },
  { key: 'politics',      href: '/category/politics',      emoji: '🗳️' },
  { key: 'weather',       href: '/weather',                emoji: '🌤️' },
  { key: 'recipes',       href: '/recipes',                emoji: '🍳' },
  { key: 'archive',       href: '/archive',                emoji: '📜' },
];

export function CategoryRail() {
  const { t } = useLanguage();

  return (
    <div className="border-y border-sand-200 bg-sand-50 py-3">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex gap-2 overflow-x-auto scrollbar-hide pb-1">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.key}
              to={cat.href}
              className="flex items-center gap-1.5 whitespace-nowrap px-3 py-2 rounded-lg bg-white border border-sand-200 text-navy-700 hover:bg-navy-900 hover:text-white hover:border-navy-900 transition-all text-xs font-medium shadow-sm"
            >
              <span>{cat.emoji}</span>
              {t.nav[cat.key as keyof typeof t.nav]}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
