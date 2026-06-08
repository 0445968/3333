import { Link } from 'react-router-dom';
import { Search, Radio, Bell } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="site-header">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-travel-700 flex items-center justify-center">
            <Radio size={18} className="text-white" />
          </div>
          <div className="leading-none">
            <span className="font-display font-bold text-xl text-ink-900 tracking-tight">Raizal</span>
            <span className="font-display font-bold text-xl text-travel-600 tracking-tight">.tv</span>
          </div>
        </Link>

        {/* Center tagline */}
        <div className="hidden lg:block text-center flex-1">
          <p className="text-ink-500 text-xs">{t.tagline}</p>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button className="p-2 rounded-xl text-ink-600 hover:bg-surface-subtle transition-colors" aria-label="Search">
            <Search size={18} />
          </button>
          <Button variant="secondary" size="sm" className="hidden sm:flex">
            <Radio size={14} />
            {t.watchLive}
          </Button>
          <Button variant="primary" size="sm" className="hidden sm:flex">
            <Bell size={14} />
            {t.subscribe}
          </Button>
        </div>
      </div>
    </header>
  );
}
