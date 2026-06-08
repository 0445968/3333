import { useState } from 'react';
import { Search, Archive, Upload } from 'lucide-react';
import { archiveEvents } from '../data/events';
import { EventCard } from '../components/cards/EventCard';
import { NewsletterSignup } from '../components/sections/NewsletterSignup';
import { Button } from '../components/ui/Button';
import { useLanguage } from '../i18n/LanguageContext';

const ISLANDS = ['All Islands', 'San Andrés', 'Providencia', 'Santa Catalina'];
const CATEGORIES = ['All', 'Cultural', 'Environment', 'Weather', 'Education', 'Sports'];

// TODO: Add archive database search with full-text indexing

export function ArchivePage() {
  const { t } = useLanguage();
  const [search, setSearch] = useState('');
  const [island, setIsland] = useState('All Islands');
  const [category, setCategory] = useState('All');

  const filtered = archiveEvents.filter((e) => {
    const matchSearch = !search || e.title.toLowerCase().includes(search.toLowerCase());
    const matchIsland = island === 'All Islands' || e.island === island;
    const matchCat = category === 'All' || e.category === category;
    return matchSearch && matchIsland && matchCat;
  });

  return (
    <div className="app-page">
      {/* Hero */}
      <div className="bg-travel-800 py-12 text-white">
        <div className="content-shell">
          <div className="flex items-center gap-2 mb-3">
            <Archive size={20} className="text-sun-300" />
          </div>
          <h1 className="font-display text-4xl font-bold mb-2">{t.archive.heroTitle}</h1>
          <p className="text-white/60 max-w-xl mb-6">{t.archive.heroSub}</p>
          <div className="relative max-w-md">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={t.archive.searchPlaceholder}
              className="w-full bg-white/10 border border-white/20 text-white placeholder-white/40 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-sun-300 text-sm"
            />
          </div>
        </div>
      </div>

      <div className="content-shell py-8">
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div>
            <label className="text-ink-500 text-xs font-medium block mb-1">Island</label>
            <select
              value={island}
              onChange={(e) => setIsland(e.target.value)}
              className="bg-white border border-surface-border rounded-lg px-3 py-1.5 text-sm text-ink-700 focus:outline-none"
            >
              {ISLANDS.map((i) => <option key={i}>{i}</option>)}
            </select>
          </div>
          <div>
            <label className="text-ink-500 text-xs font-medium block mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-white border border-surface-border rounded-lg px-3 py-1.5 text-sm text-ink-700 focus:outline-none"
            >
              {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-3 mb-10">
          {filtered.length > 0 ? (
            filtered
              .sort((a, b) => b.year - a.year)
              .map((event) => <EventCard key={event.id} event={event} />)
          ) : (
            <div className="text-center py-12 text-ink-500">
              <p>No archive events found matching your filters.</p>
            </div>
          )}
        </div>

        {/* Contribute callout */}
        <div className="modern-card p-6 flex items-start gap-4">
          <Upload size={24} className="text-travel-600 shrink-0 mt-1" />
          <div>
            <h3 className="font-display text-xl font-bold text-ink-900">{t.archive.contribute}</h3>
            <p className="text-ink-600 mt-1">{t.archive.contributeSub}</p>
            <Button variant="secondary" size="md" className="mt-3">Contribute to Archive</Button>
          </div>
        </div>
      </div>
      <NewsletterSignup />
    </div>
  );
}
