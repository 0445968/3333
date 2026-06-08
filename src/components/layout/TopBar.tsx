import { Link } from 'react-router-dom';
import { Globe, MapPin, Calendar, Thermometer } from 'lucide-react';
import { useLanguage } from '../../i18n/LanguageContext';
import { MarketIndicators } from '../home/MarketIndicators';
import type { Language } from '../../types';

const LANGS: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
  { code: 'cr', label: 'CR' },
];

export function TopBar() {
  const { language, setLanguage, t } = useLanguage();

  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <>
      <div className="bg-travel-950 text-white/80 text-xs border-b border-travel-900">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between gap-4">
          {/* Left */}
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Calendar size={11} className="text-sun-300" />
              {today}
            </span>
            <span className="text-white/20">|</span>
            <span className="flex items-center gap-1.5">
              <MapPin size={11} className="text-sun-300" />
              {t.topBar.location}
            </span>
          </div>
          <span className="flex md:hidden items-center gap-1 text-xs">
            <MapPin size={10} className="text-sun-300" />
            {t.topBar.location}
          </span>

          {/* Right */}
          <div className="flex items-center gap-3 ml-auto">
            <Link to="/weather" className="hidden sm:flex items-center gap-1 hover:text-white transition-colors">
              <Thermometer size={11} className="text-aqua-300" />
              <span>31°C · San Andrés</span>
            </Link>

            {/* Language toggle */}
            <div className="flex items-center gap-1 border-l border-white/10 pl-3">
              <Globe size={11} className="text-sun-300" />
              {LANGS.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`px-1.5 py-0.5 rounded text-xs font-semibold transition-colors ${
                    language === lang.code
                      ? 'bg-sun-300 text-ink-900'
                      : 'hover:text-white text-white/60'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <MarketIndicators />
    </>
  );
}
