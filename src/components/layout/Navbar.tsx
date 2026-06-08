import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../i18n/LanguageContext';

const NAV_ITEMS = [
  { key: 'culture',       href: '/category/culture' },
  { key: 'music',         href: '/music' },
  { key: 'food',          href: '/category/food' },
  { key: 'entertainment', href: '/category/entertainment' },
  { key: 'sports',        href: '/category/sports' },
  { key: 'weather',       href: '/weather' },
  { key: 'politics',      href: '/category/politics' },
  { key: 'environment',   href: '/category/environment' },
  { key: 'memorials',     href: '/memorials' },
  { key: 'business',      href: '/category/business' },
  { key: 'tourism',       href: '/tourism' },
  { key: 'agriculture',   href: '/category/agriculture' },
  { key: 'religion',      href: '/category/religion' },
  { key: 'science',       href: '/category/science' },
  { key: 'health',        href: '/category/health' },
  { key: 'education',     href: '/category/education' },
  { key: 'world',         href: '/category/world' },
  { key: 'economy',       href: '/category/economy' },
  { key: 'directory',     href: '/directory' },
  { key: 'recipes',       href: '/recipes' },
  { key: 'archive',       href: '/archive' },
];

export function Navbar() {
  const { t } = useLanguage();
  const location = useLocation();

  return (
    <nav className="site-nav sticky top-[105px] md:top-[89px] z-30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center overflow-x-auto scrollbar-hide">
          {NAV_ITEMS.map((item) => {
            const label = t.nav[item.key as keyof typeof t.nav];
            const isActive = location.pathname === item.href || (item.href !== '/' && location.pathname.startsWith(item.href));
            return (
              <Link
                key={item.key}
                to={item.href}
                className={`whitespace-nowrap px-3 py-3 text-xs font-semibold transition-colors border-b-2 ${
                  isActive
                    ? 'border-sun-300 text-sun-300'
                    : 'border-transparent text-white/80 hover:text-white hover:border-white/30'
                }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-travel-950/98 overflow-y-auto">
      <div className="max-w-sm mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <span className="font-display text-xl font-bold text-white">Raizal<span className="text-sun-300">.tv</span></span>
          <button onClick={onClose} className="text-white/60 hover:text-white text-2xl leading-none">✕</button>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {NAV_ITEMS.map((item) => {
            const label = t.nav[item.key as keyof typeof t.nav];
            return (
              <Link
                key={item.key}
                to={item.href}
                onClick={onClose}
                className="px-3 py-2.5 rounded-xl text-white/80 hover:text-white hover:bg-travel-800 text-sm font-medium transition-colors"
              >
                {label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
