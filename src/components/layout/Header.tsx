import { Link } from 'react-router-dom';
import { Search, Radio, Bell } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { Button } from '../ui/Button';

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="bg-white border-b-2 border-turquoise-500 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-caribbean-gradient flex items-center justify-center">
            <Radio size={20} className="text-turquoise-300" />
          </div>
          <div>
            <span className="font-display font-bold text-xl text-navy-900 tracking-tight">Raizal</span>
            <span className="font-display font-bold text-xl text-turquoise-600 tracking-tight">.tv</span>
          </div>
        </Link>

        {/* Center tagline — hidden on mobile */}
        <div className="hidden lg:block text-center flex-1">
          <p className="text-navy-500 text-xs italic">{t.tagline}</p>
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            className="p-2 rounded-lg text-navy-600 hover:bg-navy-50 transition-colors"
            aria-label="Search"
          >
            <Search size={18} />
          </button>

          <Button variant="outline" size="sm" className="hidden sm:flex items-center gap-1.5">
            <Radio size={14} />
            {t.watchLive}
          </Button>

          <Button variant="primary" size="sm" className="hidden sm:flex items-center gap-1.5">
            <Bell size={14} />
            {t.subscribe}
          </Button>
        </div>
      </div>
    </header>
  );
}
