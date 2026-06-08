import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  Radio,
  Bell,
  Menu,
  X,
  ChevronRight,
  Newspaper,
  Music,
  Utensils,
  Trophy,
  CloudSun,
  Briefcase,
  Leaf,
  HeartPulse,
} from 'lucide-react';

import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';

const MAIN_CATEGORIES = [
  { label: 'News', href: '/category/news', description: 'Latest island headlines and community updates', icon: Newspaper },
  { label: 'Music', href: '/music', description: 'Charts, releases, videos, interviews, and lyrics', icon: Music },
  { label: 'Culture', href: '/category/culture', description: 'Raizal heritage, language, memory, and traditions', icon: Newspaper },
  { label: 'Food', href: '/category/food', description: 'Recipes, local kitchens, crab season, and island flavors', icon: Utensils },
  { label: 'Sports', href: '/category/sports', description: 'Football, softball, youth leagues, and island athletes', icon: Trophy },
  { label: 'Weather', href: '/weather', description: 'Forecasts, alerts, sea conditions, and storm updates', icon: CloudSun },
];

const MORE_CATEGORIES = [
  'Politics',
  'Environment',
  'Tourism',
  'Business',
  'Agriculture',
  'Religion',
  'Science',
  'Health',
  'Education',
  'World',
  'Economy',
  'Memorials',
  'Recipes',
  'Archive',
];

const FEATURED_LINKS = [
  {
    title: 'Business Directory',
    description: 'Profiles for local services, shops, restaurants, and professionals.',
    href: '/business-directory',
    icon: Briefcase,
  },
  {
    title: 'Environment Watch',
    description: 'Stories on the Seaflower Reserve, reefs, beaches, and conservation.',
    href: '/category/environment',
    icon: Leaf,
  },
  {
    title: 'Community Health',
    description: 'Health guides, public notices, wellness stories, and local resources.',
    href: '/category/health',
    icon: HeartPulse,
  },
];

export function Header() {
  const { t } = useLanguage();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    }

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <header className="site-header">
      <div className="relative">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          {/* Logo */}
          <Link to="/" className="flex min-w-0 shrink-0 items-center gap-3">
            <img
              src="/images/logo.png"
              alt="Raizal.tv"
              className="h-10 w-auto max-w-[170px] object-contain"
            />

            {/* Text fallback / brand reinforcement. Remove this div if your PNG already includes the full wordmark. */}
            <div className="hidden leading-none sm:block">
              <span className="font-display text-xl font-extrabold tracking-tight text-ink-900">
                Raizal
              </span>
              <span className="font-display text-xl font-extrabold tracking-tight text-travel-700">
                .tv
              </span>
            </div>
          </Link>

          {/* Right actions */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              className="rounded-xl p-2 text-ink-700 transition-colors hover:bg-surface-subtle hover:text-travel-700"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <Button variant="secondary" size="sm" className="hidden md:flex">
              <Radio size={14} />
              {t.watchLive}
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex items-center gap-2 rounded-xl border border-surface-border bg-white px-3 py-2 text-sm font-bold text-ink-900 shadow-sm transition-colors hover:bg-travel-50 hover:text-travel-800"
              aria-expanded={menuOpen}
              aria-controls="site-mega-menu"
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
          </div>
        </div>

        {menuOpen && (
          <div
            id="site-mega-menu"
            className="absolute left-0 right-0 top-full z-50 border-t border-surface-border bg-white shadow-panel"
          >
            <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 lg:grid-cols-[1.25fr_0.75fr]">
              <div>
                <div className="mb-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="section-label">Explore Raizal.tv</p>
                    <h2 className="mt-1 font-display text-2xl font-extrabold text-ink-900">
                      Sections and island coverage
                    </h2>
                  </div>

                  <Link
                    to="/archive"
                    className="hidden rounded-xl bg-travel-700 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-travel-800 sm:inline-flex"
                  >
                    View Archive
                  </Link>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {MAIN_CATEGORIES.map((category) => {
                    const Icon = category.icon;

                    return (
                      <Link
                        key={category.label}
                        to={category.href}
                        className="group rounded-2xl border border-surface-border bg-white p-4 transition hover:border-travel-300 hover:bg-travel-50"
                      >
                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-skybrand-100 text-travel-800">
                          <Icon size={18} />
                        </div>

                        <div className="flex items-center justify-between gap-3">
                          <h3 className="font-display text-base font-extrabold text-ink-900 group-hover:text-travel-800">
                            {category.label}
                          </h3>
                          <ChevronRight
                            size={16}
                            className="text-ink-400 transition group-hover:translate-x-0.5 group-hover:text-travel-700"
                          />
                        </div>

                        <p className="mt-1 line-clamp-2 text-sm text-ink-700">
                          {category.description}
                        </p>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {MORE_CATEGORIES.map((category) => (
                    <Link
                      key={category}
                      to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                      className="category-pill"
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>

              <aside className="rounded-xl bg-surface-subtle p-4">
                <p className="section-label">Quick links</p>

                <div className="mt-4 space-y-3">
                  {FEATURED_LINKS.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="group flex gap-3 rounded-2xl bg-white p-4 shadow-card transition hover:-translate-y-0.5 hover:shadow-card-md"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-travel-700 text-white">
                          <Icon size={18} />
                        </div>

                        <div>
                          <h3 className="font-display text-sm font-extrabold text-ink-900 group-hover:text-travel-800">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-sm text-ink-700">
                            {item.description}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>

                <div className="mt-4 rounded-2xl bg-sun-300 p-4 text-ink-900">
                  <p className="text-xs font-black uppercase tracking-wide">
                    Music spotlight
                  </p>
                  <h3 className="mt-1 font-display text-lg font-extrabold">
                    Charts, interviews, and new island releases
                  </h3>
                  <Link
                    to="/music"
                    className="mt-3 inline-flex text-sm font-extrabold text-ink-900 underline underline-offset-4"
                  >
                    Open Music Page
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}