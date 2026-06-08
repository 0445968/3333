import { useState } from 'react';
import { Search } from 'lucide-react';
import { businesses, getBusinessesByCategory } from '../data/businesses';
import { BusinessCard } from '../components/cards/BusinessCard';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { useLanguage } from '../i18n/LanguageContext';

const CATEGORIES = [
  'All', 'Restaurants', 'Hotels & Guesthouses', 'Tour Guides', 'Transportation',
  'Shops', 'Agriculture', 'Fishing', 'Professional Services', 'Artisans',
  'Health & Wellness', 'Construction', 'Education',
];

// TODO: Add business profile claim system

export function BusinessDirectoryPage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = getBusinessesByCategory(activeCategory).filter((b) =>
    b.name.toLowerCase().includes(search.toLowerCase()) ||
    b.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-page">
      {/* Hero */}
      <div className="bg-travel-800 py-12 text-white">
        <div className="content-shell">
          <h1 className="font-display text-4xl font-bold mb-2">{t.directory.heroTitle}</h1>
          <p className="text-white/60 max-w-xl mb-6">{t.directory.heroSub}</p>
          {/* Search */}
          <div className="relative max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.directory.searchPlaceholder}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-sun-300 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="content-shell py-8">
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${
                activeCategory === cat
                  ? 'bg-travel-700 text-white'
                  : 'bg-surface-subtle text-ink-700 border border-surface-border hover:bg-travel-50 hover:text-travel-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((b) => (
              <BusinessCard key={b.id} business={b} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 text-ink-500">
            <p className="text-lg font-display">No businesses found</p>
            <p className="text-sm mt-1">Try a different category or search term.</p>
          </div>
        )}
      </div>
      <NewsletterSignup />
    </div>
  );
}
