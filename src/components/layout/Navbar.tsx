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
    <nav className="sticky top-[64px] z-40 border-b border-surface-border bg-white shadow-[0_1px_0_rgba(207,228,243,0.75)]">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex items-center overflow-x-auto scrollbar-hide">
          {NAV_ITEMS.map((item) => {
            const label = t.nav[item.key as keyof typeof t.nav];

            const isActive =
              location.pathname === item.href ||
              (item.href !== '/' && location.pathname.startsWith(item.href));

            return (
              <Link
                key={item.key}
                to={item.href}
                className={`whitespace-nowrap border-b-2 px-3 py-3 text-xs font-semibold transition-colors ${
                  isActive
                    ? 'border-travel-700 text-travel-700'
                    : 'border-transparent text-ink-700 hover:border-travel-300 hover:text-travel-700'
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

export function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70] overflow-y-auto bg-travel-950/98">
      <div className="mx-auto max-w-sm px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <span className="font-display text-xl font-bold text-white">
            Raizal<span className="text-sun-300">.tv</span>
          </span>

          <button
            type="button"
            onClick={onClose}
            className="text-2xl leading-none text-white/70 hover:text-white"
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-2 gap-2">
          {NAV_ITEMS.map((item) => {
            const label = t.nav[item.key as keyof typeof t.nav];

            return (
              <Link
                key={item.key}
                to={item.href}
                onClick={onClose}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-white/85 transition-colors hover:bg-travel-800 hover:text-white"
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